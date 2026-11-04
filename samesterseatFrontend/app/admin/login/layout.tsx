import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/admin-auth";

export const instant = false;

export default async function AdminLoginLayout({ children }: { children: React.ReactNode }) {
    if (await getAdminSession()) redirect("/admin");
    return children;
}
