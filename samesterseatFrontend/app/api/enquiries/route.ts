import { NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";
import { getAdminSession } from "@/lib/admin-auth";

export async function GET(request: Request) {
    if (!(await getAdminSession())) return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    const status = new URL(request.url).searchParams.get("status");
    const db = await getDatabase();
    const enquiries = await db.collection("enquiries").find(status ? { status } : {}).sort({ createdAt: -1 }).limit(100).toArray();
    return NextResponse.json(enquiries.map(({ _id, ...item }) => ({ id: _id.toString(), ...item })));
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const firstName = String(body.firstName || "").trim();
        const lastName = String(body.lastName || "").trim();
        const email = String(body.email || "").trim().toLowerCase();
        const phone = String(body.phone || "").trim();
        if (!firstName || !email || !phone || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return NextResponse.json({ error: "Name, email and phone are required." }, { status: 400 });
        }
        if (body.consent !== true) return NextResponse.json({ error: "Please provide consent before submitting." }, { status: 400 });
        const db = await getDatabase();
        const reference = `CS-${Date.now().toString().slice(-8)}-${Math.random().toString(36).slice(2, 5).toUpperCase()}`;
        await db.collection("enquiries").insertOne({
            reference, firstName, lastName, name: `${firstName} ${lastName}`.trim(), email, phone,
            countryCode: String(body.countryCode || ""), homeCountry: String(body.homeCountry || ""),
            nationality: String(body.nationality || ""), city: String(body.city || ""),
            educationLevel: String(body.educationLevel || ""), preferredCountry: String(body.preferredCountry || ""),
            university: String(body.university || ""), course: String(body.course || ""), degree: String(body.degree || ""),
            intake: String(body.intake || ""), budget: String(body.budget || ""), studyMode: String(body.studyMode || ""),
            message: String(body.message || ""), consent: true, status: "New",
            source: String(body.source || "website"), createdAt: new Date(), updatedAt: new Date(),
        });
        await db.collection("activityLog").insertOne({ type: "new_enquiry", reference, createdAt: new Date() });
        return NextResponse.json({ success: true, reference }, { status: 201 });
    } catch {
        return NextResponse.json({ error: "Unable to submit your enquiry. Please try again." }, { status: 500 });
    }
}
