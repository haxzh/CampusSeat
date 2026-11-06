"use client";

import { FormEvent, useState } from "react";
import Navbar from "@/src/components/Navbar";
import LoadingButton from "@/src/components/ui/LoadingButton";
import { CalendarDays, CheckCircle2 } from "lucide-react";

export default function CounsellingPage() {
    const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", time: "", timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, topic: "General counselling", method: "Video call", language: "English", message: "" });
    const [error, setError] = useState("");
    const [reference, setReference] = useState("");
    const [loading, setLoading] = useState(false);
    async function submit(event: FormEvent) {
        event.preventDefault();
        setLoading(true); setError("");
        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
            const response = await fetch(`${apiUrl}/counselling`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
            const data = await response.json();
            if (!response.ok) setError(data.error || "Unable to request counselling.");
            else setReference(data.reference);
        } catch {
            setError("Unable to request counselling. Please try again.");
        } finally {
            setLoading(false);
        }
    }
    const set = (key: keyof typeof form, value: string) => setForm((current) => ({ ...current, [key]: value }));
    const input = "mt-2 w-full rounded-xl border border-[#d8d8d1] px-4 py-3 text-sm outline-none focus:border-[#171717]";
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-[#f4f4f0] px-5 py-14 sm:px-8">
                <div className="mx-auto grid max-w-[1100px] overflow-hidden rounded-[32px] bg-white lg:grid-cols-[0.8fr_1.2fr]">
                    <section className="bg-[#171717] p-8 text-white sm:p-12">
                        <CalendarDays size={28} />
                        <h1 className="mt-16 text-5xl font-semibold leading-[0.92] tracking-[-0.06em]">Plan your future, one conversation at a time.</h1>
                        <p className="mt-6 leading-7 text-white/65">Book a free session with a CampusSeat counsellor for country, course, university or application guidance.</p>
                    </section>
                    <section className="p-7 sm:p-12">
                        {reference ? <div className="py-16 text-center"><CheckCircle2 className="mx-auto text-neutral-700" size={48} /><h2 className="mt-5 text-3xl font-semibold">Session requested</h2><p className="mt-3 text-[#77776f]">Your reference is <b>{reference}</b>. Our team will confirm the appointment.</p></div> :
                            <form onSubmit={submit} className="space-y-5">
                                <h2 className="text-3xl font-semibold">Request counselling</h2>
                                <label className="block text-sm font-semibold">Full name *<input required value={form.name} onChange={(e) => set("name", e.target.value)} className={input} /></label>
                                <div className="grid gap-4 sm:grid-cols-2"><label className="text-sm font-semibold">Email *<input required type="email" value={form.email} onChange={(e) => set("email", e.target.value)} className={input} /></label><label className="text-sm font-semibold">Phone *<input required value={form.phone} onChange={(e) => set("phone", e.target.value)} className={input} /></label></div>
                                <div className="grid gap-4 sm:grid-cols-2"><label className="text-sm font-semibold">Preferred date *<input required type="date" value={form.date} onChange={(e) => set("date", e.target.value)} className={input} /></label><label className="text-sm font-semibold">Preferred time *<input required type="time" value={form.time} onChange={(e) => set("time", e.target.value)} className={input} /></label></div>
                                <div className="grid gap-4 sm:grid-cols-2"><label className="text-sm font-semibold">Topic<select value={form.topic} onChange={(e) => set("topic", e.target.value)} className={input}><option>General counselling</option><option>Country selection</option><option>Course selection</option><option>University selection</option><option>Scholarship guidance</option></select></label><label className="text-sm font-semibold">Communication<select value={form.method} onChange={(e) => set("method", e.target.value)} className={input}><option>Video call</option><option>Phone call</option><option>WhatsApp</option></select></label></div>
                                <label className="block text-sm font-semibold">Additional message<textarea rows={4} value={form.message} onChange={(e) => set("message", e.target.value)} className={input} /></label>
                                {error && <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}
                                <LoadingButton loading={loading} loadingText="Booking..." className="w-full rounded-xl bg-[#171717] py-3.5 text-sm font-bold text-white">Request free counselling</LoadingButton>
                            </form>}
                    </section>
                </div>
            </main>
        </>
    );
}
