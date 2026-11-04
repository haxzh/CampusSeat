import { NextResponse } from "next/server";
import { ADMIN_COOKIE, createAdminToken } from "@/lib/admin-auth";

export async function POST(request: Request) {
    const { email, password } = await request.json();
    const adminEmail = process.env.ADMIN_EMAIL || "admin@campusseat.com";
    const adminPassword = process.env.ADMIN_PASSWORD || "CampusSeat@123";

    if (email !== adminEmail || password !== adminPassword) {
        return NextResponse.json({ error: "Invalid admin credentials." }, { status: 401 });
    }

    const response = NextResponse.json({ success: true });
    response.cookies.set(ADMIN_COOKIE, await createAdminToken(), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 12,
    });
    return response;
}
