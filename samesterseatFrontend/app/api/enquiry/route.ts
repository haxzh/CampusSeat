import { NextResponse } from "next/server";
import { courseOptions as bachelorCourseOptions } from "@/src/data/bachelor";
import { courseOptions as professionalCourseOptions } from "@/src/data/courses";
import { courseOptions as doctorateCourseOptions } from "@/src/data/doctorate";
import { courseOptions as masterCourseOptions } from "@/src/data/master";
import { getDatabase } from "@/lib/mongodb";

const courseOptions = new Set([
    ...bachelorCourseOptions,
    ...masterCourseOptions,
    ...doctorateCourseOptions,
    ...professionalCourseOptions,
]);

type EnquiryBody = {
    name?: unknown;
    email?: unknown;
    countryCode?: unknown;
    phone?: unknown;
    course?: unknown;
    message?: unknown;
    consent?: unknown;
    website?: unknown;
};

export async function POST(request: Request) {
    let body: EnquiryBody;
    try {
        const parsed: unknown = await request.json();
        if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
            return NextResponse.json({ error: "Please submit valid enquiry details." }, { status: 400 });
        }
        body = parsed as EnquiryBody;
    } catch {
        return NextResponse.json({ error: "Please submit valid JSON enquiry details." }, { status: 400 });
    }

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const countryCode = typeof body.countryCode === "string" ? body.countryCode.trim() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";
    const course = typeof body.course === "string" ? body.course.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";
    const website = typeof body.website === "string" ? body.website.trim() : "";

    if (website) {
        return NextResponse.json({ error: "Unable to submit this request." }, { status: 400 });
    }
    if (name.length < 2 || name.length > 120) {
        return NextResponse.json({ error: "Enter a valid full name." }, { status: 400 });
    }
    if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
    }
    if (!/^\+\d{1,4}$/.test(countryCode) || !/^[\d\s().-]{6,24}$/.test(phone)) {
        return NextResponse.json({ error: "Enter a valid phone number and country code." }, { status: 400 });
    }
    const totalPhoneDigits = `${countryCode}${phone}`.replace(/\D/g, "").length;
    if (totalPhoneDigits < 7 || totalPhoneDigits > 15) {
        return NextResponse.json({ error: "Enter a valid phone number and country code." }, { status: 400 });
    }
    if (!courseOptions.has(course)) {
        return NextResponse.json({ error: "Select a valid course." }, { status: 400 });
    }
    if (message.length > 2000) {
        return NextResponse.json({ error: "Your message must be 2,000 characters or fewer." }, { status: 400 });
    }
    if (body.consent !== true) {
        return NextResponse.json({ error: "Please agree to be contacted before submitting." }, { status: 400 });
    }

    const [firstName, ...lastNameParts] = name.split(/\s+/);
    try {
        const db = await getDatabase();
        const now = new Date();
        await db.collection("enquiries").insertOne({
            name,
            firstName,
            lastName: lastNameParts.join(" "),
            email,
            countryCode,
            phone,
            course,
            message,
            consent: true,
            status: "New",
            source: "program-enquiry",
            createdAt: now,
            updatedAt: now,
        });
    } catch (error) {
        console.error("Failed to save program enquiry.", error);
        return NextResponse.json(
            { error: "Unable to submit your request. Please try again." },
            { status: 500 },
        );
    }

    return NextResponse.json(
        { success: true, message: "Thanks, our admissions team will contact you shortly." },
        { status: 201 },
    );
}
