import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";

export const ADMIN_COOKIE = "campusseat_admin";

function secret() {
    const value = process.env.ADMIN_SESSION_SECRET || "campusseat-development-secret-change-this";
    return new TextEncoder().encode(value);
}

export async function createAdminToken() {
    return new SignJWT({ role: "admin" })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("12h")
        .sign(secret());
}

export async function getAdminSession() {
    const cookieStore = await cookies();
    const token = cookieStore.get(ADMIN_COOKIE)?.value;
    if (!token) return null;

    try {
        const { payload } = await jwtVerify(token, secret());
        return payload.role === "admin" ? payload : null;
    } catch {
        return null;
    }
}
