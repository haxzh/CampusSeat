import { NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";
import { getAdminSession } from "@/lib/admin-auth";

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const search = searchParams.get("search")?.trim();
        const db = await getDatabase();
        const query = search
            ? {
                $or: [
                    { name: { $regex: search, $options: "i" } },
                    { location: { $regex: search, $options: "i" } },
                    { category: { $regex: search, $options: "i" } },
                ],
            }
            : {};

        const colleges = await db.collection("colleges").find(query).sort({ name: 1 }).toArray();
        return NextResponse.json(colleges.map((college) => ({ ...college, id: college._id.toString(), _id: undefined })));
    } catch (error) {
        return NextResponse.json({ error: error instanceof Error ? error.message : "Database unavailable." }, { status: 503 });
    }
}

export async function POST(request: Request) {
    if (!(await getAdminSession())) {
        return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }

    try {
        const body = await request.json();
        const college = {
            name: String(body.name || "").trim(),
            shortName: String(body.shortName || "").trim(),
            location: String(body.location || "").trim(),
            type: String(body.type || "").trim(),
            category: String(body.category || "").trim(),
            description: String(body.description || "").trim(),
            image: String(body.image || "").trim(),
            fees: String(body.fees || "Varies by programme"),
            courses: Array.isArray(body.courses) ? body.courses.map(String) : [],
            courseFees: Array.isArray(body.courseFees) ? body.courseFees.map((course: { name?: unknown; fee?: unknown; duration?: unknown }) => ({
                name: String(course.name || "").trim(),
                fee: Number(course.fee || 0),
                duration: String(course.duration || "").trim(),
            })).filter((course: { name: string }) => course.name) : [],
            averageSalary: Number(body.averageSalary || 0),
            highestSalary: Number(body.highestSalary || 0),
            rating: Number(body.rating || 0),
            website: String(body.website || "").trim(),
            featured: Boolean(body.featured),
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        if (!college.name) return NextResponse.json({ error: "College name is required." }, { status: 400 });

        const db = await getDatabase();
        const result = await db.collection("colleges").insertOne(college);
        return NextResponse.json({ id: result.insertedId.toString(), ...college }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: error instanceof Error ? error.message : "Unable to create college." }, { status: 503 });
    }
}
