import { NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";
import { getAdminSession } from "@/lib/admin-auth";

export async function GET() {
    if (!(await getAdminSession())) return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    const db = await getDatabase();
    const [students, enquiries, newEnquiries, bookings, colleges, countries] = await Promise.all([
        db.collection("users").countDocuments({ role: { $ne: "admin" } }),
        db.collection("enquiries").countDocuments({}),
        db.collection("enquiries").countDocuments({ status: "New" }),
        db.collection("counsellingBookings").countDocuments({}),
        db.collection("colleges").countDocuments({}),
        db.collection("countries").countDocuments({}),
    ]);
    return NextResponse.json({ students, enquiries, newEnquiries, bookings, colleges, countries });
}
