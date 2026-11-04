import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { getDatabase } from "@/lib/mongodb";
import { getAdminSession } from "@/lib/admin-auth";

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
    if (!(await getAdminSession())) {
        return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }

    const { id } = await params;
    if (!ObjectId.isValid(id)) return NextResponse.json({ error: "Invalid college ID." }, { status: 400 });

    try {
        const body = await request.json();
        const updates: Record<string, unknown> = { updatedAt: new Date() };
        ["name", "shortName", "location", "type", "category", "description", "image", "fees", "website"].forEach((key) => {
            if (typeof body[key] !== "undefined") updates[key] = String(body[key]).trim();
        });
        if (Array.isArray(body.courses)) updates.courses = body.courses.map(String);
        if (Array.isArray(body.courseFees)) {
            updates.courseFees = body.courseFees.map((course: { name?: unknown; fee?: unknown; duration?: unknown }) => ({
                name: String(course.name || "").trim(),
                fee: Number(course.fee || 0),
                duration: String(course.duration || "").trim(),
            })).filter((course: { name: string }) => course.name);
        }
        if (typeof body.averageSalary !== "undefined") updates.averageSalary = Number(body.averageSalary || 0);
        if (typeof body.highestSalary !== "undefined") updates.highestSalary = Number(body.highestSalary || 0);
        if (typeof body.rating !== "undefined") updates.rating = Number(body.rating);
        if (typeof body.featured !== "undefined") updates.featured = Boolean(body.featured);

        const db = await getDatabase();
        await db.collection("colleges").updateOne({ _id: new ObjectId(id) }, { $set: updates });
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: error instanceof Error ? error.message : "Unable to update college." }, { status: 503 });
    }
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
    if (!(await getAdminSession())) {
        return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }

    const { id } = await params;
    if (!ObjectId.isValid(id)) return NextResponse.json({ error: "Invalid college ID." }, { status: 400 });

    const db = await getDatabase();
    await db.collection("colleges").deleteOne({ _id: new ObjectId(id) });
    return NextResponse.json({ success: true });
}
