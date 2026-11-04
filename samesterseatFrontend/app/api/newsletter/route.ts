import { NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";

type NewsletterBody = {
    email?: unknown;
};

export async function POST(request: Request) {
    let body: NewsletterBody;
    try {
        const parsed: unknown = await request.json();
        if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
            return NextResponse.json({ error: "Please submit a valid email address." }, { status: 400 });
        }
        body = parsed as NewsletterBody;
    } catch {
        return NextResponse.json({ error: "Please submit valid JSON." }, { status: 400 });
    }

    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    try {
        const db = await getDatabase();
        await db.collection("newsletterSubscribers").updateOne(
            { email },
            {
                $setOnInsert: {
                    email,
                    createdAt: new Date(),
                },
            },
            { upsert: true },
        );
        return NextResponse.json(
            { success: true, message: "Thanks, your request was received." },
            { status: 201 },
        );
    } catch (error) {
        console.error("Unable to save newsletter subscription.", error);
        return NextResponse.json(
            { error: "Unable to subscribe right now. Please try again." },
            { status: 500 },
        );
    }
}
