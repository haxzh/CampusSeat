import { NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";
import { getAdminSession } from "@/lib/admin-auth";

export async function GET() {
    if (!(await getAdminSession())) return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    const db = await getDatabase();
    const bookings = await db.collection("counsellingBookings").find({}).sort({ createdAt: -1 }).limit(100).toArray();
    return NextResponse.json(bookings.map(({ _id, ...item }) => ({ id: _id.toString(), ...item })));
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const name = String(body.name || "").trim();
        const email = String(body.email || "").trim().toLowerCase();
        const phone = String(body.phone || "").trim();
        const date = String(body.date || "").trim();
        const time = String(body.time || "").trim();
        if (!name || !email || !phone || !date || !time || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return NextResponse.json({ error: "Please complete all required booking details." }, { status: 400 });
        }
        const db = await getDatabase();
        const duplicate = await db.collection("counsellingBookings").findOne({ date, time, status: { $in: ["Pending", "Confirmed"] } });
        if (duplicate) return NextResponse.json({ error: "That time is already requested. Please choose another slot." }, { status: 409 });
        const reference = `CALL-${Date.now().toString().slice(-8)}`;
        await db.collection("counsellingBookings").insertOne({
            reference, name, email, phone, date, time,
            timeZone: String(body.timeZone || "UTC"),
            topic: String(body.topic || "General counselling"),
            method: String(body.method || "Video call"),
            language: String(body.language || "English"),
            message: String(body.message || ""), status: "Pending",
            createdAt: new Date(), updatedAt: new Date(),
        });
        return NextResponse.json({ success: true, reference }, { status: 201 });
    } catch {
        return NextResponse.json({ error: "Unable to book counselling. Please try again." }, { status: 500 });
    }
}
