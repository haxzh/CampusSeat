"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { GraduationCap, LockKeyhole } from "lucide-react";

export default function AdminLoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function submit(event: FormEvent) {
        event.preventDefault();
        setLoading(true);
        setError("");
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
        const response = await fetch(`${apiUrl}/admin/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });
        if (!response.ok) {
            setError("Email or password is incorrect.");
            setLoading(false);
            return;
        }
        const data = await response.json();
        localStorage.setItem("campusseat_admin_token", data.token);
        router.push("/admin");
        router.refresh();
    }

    return (
        <main className="grid min-h-screen place-items-center bg-[#171717] px-5">
            <form onSubmit={submit} className="w-full max-w-md rounded-[28px] bg-white p-7 shadow-2xl sm:p-10">
                <div className="mb-8 flex items-center gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#171717] text-white">
                        <GraduationCap size={24} />
                    </span>
                    <div>
                        <p className="font-bold text-[#171717]">CampusSeat</p>
                        <p className="text-xs text-[#77776f]">Administration portal</p>
                    </div>
                </div>
                <h1 className="text-3xl font-semibold tracking-tight text-[#171717]">Admin sign in</h1>
                <p className="mt-2 text-sm text-[#77776f]">Manage colleges and platform content.</p>
                <label className="mt-8 block text-sm font-semibold text-[#343434]" htmlFor="email">Email</label>
                <input id="email" type="email" required value={email} onChange={(event) => setEmail(event.target.value)} className="mt-2 w-full rounded-xl border border-[#d8d8d1] px-4 py-3 outline-none focus:border-[#171717]" />
                <label className="mt-5 block text-sm font-semibold text-[#343434]" htmlFor="password">Password</label>
                <div className="relative mt-2">
                    <LockKeyhole size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#77776f]" />
                    <input id="password" type="password" required value={password} onChange={(event) => setPassword(event.target.value)} className="w-full rounded-xl border border-[#d8d8d1] py-3 pl-11 pr-4 outline-none focus:border-[#171717]" />
                </div>
                {error && <p role="alert" className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}
                <button disabled={loading} className="mt-6 w-full rounded-xl bg-[#171717] py-3.5 font-bold text-white disabled:opacity-60">
                    {loading ? "Signing in..." : "Sign in"}
                </button>
            </form>
        </main>
    );
}
