"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import LoadingButton from "@/src/components/ui/LoadingButton";

type Props = { university?: string; country?: string; compact?: boolean };

export default function EnquiryForm({ university = "", country = "", compact = false }: Props) {
    const [form, setForm] = useState({
        firstName: "", lastName: "", email: "", countryCode: "+91", phone: "",
        homeCountry: "", preferredCountry: country, university, course: "",
        degree: "", intake: "", budget: "", educationLevel: "", studyMode: "Full-time",
        message: "", consent: false,
    });
    const [error, setError] = useState("");
    const [reference, setReference] = useState("");
    const [loading, setLoading] = useState(false);

    async function submit(event: FormEvent) {
        event.preventDefault();
        setLoading(true);
        setError("");
        try {
            const response = await fetch("/api/enquiries", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            const data = await response.json();
            if (!response.ok) setError(data.error || "Unable to submit your enquiry.");
            else setReference(data.reference);
        } catch {
            setError("Unable to submit your enquiry. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    if (reference) return (
        <div className="rounded-[24px] bg-[#dff4e7] p-7 text-[#153a33]">
            <CheckCircle2 size={34} />
            <h3 className="mt-4 text-2xl font-semibold">Your enquiry is confirmed</h3>
            <p className="mt-3 text-sm leading-6">A CampusSeat counsellor will review your goals and contact you.</p>
            <p className="mt-5 rounded-xl bg-white/70 px-4 py-3 text-sm font-bold">Reference: {reference}</p>
        </div>
    );

    const set = (key: keyof typeof form, value: string | boolean) => setForm((current) => ({ ...current, [key]: value }));
    const input = "mt-2 w-full rounded-xl border border-[#d8d8d1] bg-white px-4 py-3 text-sm outline-none focus:border-[#171717]";

    return (
        <form onSubmit={submit} className="space-y-4">
            {!compact && (
                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#77776f]">Free expert guidance</p>
                    <h2 className="mt-2 text-3xl font-semibold tracking-tight">Enquire now</h2>
                </div>
            )}
            <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-semibold">First name *<input required value={form.firstName} onChange={(e) => set("firstName", e.target.value)} className={input} /></label>
                <label className="text-sm font-semibold">Last name<input value={form.lastName} onChange={(e) => set("lastName", e.target.value)} className={input} /></label>
            </div>
            <label className="block text-sm font-semibold">Email address *<input required type="email" value={form.email} onChange={(e) => set("email", e.target.value)} className={input} /></label>
            <div className="grid grid-cols-[100px_1fr] gap-3">
                <label className="text-sm font-semibold">Code<select value={form.countryCode} onChange={(e) => set("countryCode", e.target.value)} className={input}><option>+91</option><option>+1</option><option>+44</option><option>+971</option><option>+61</option></select></label>
                <label className="text-sm font-semibold">Mobile number *<input required value={form.phone} onChange={(e) => set("phone", e.target.value)} className={input} /></label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-semibold">Home country<input value={form.homeCountry} onChange={(e) => set("homeCountry", e.target.value)} className={input} /></label>
                <label className="text-sm font-semibold">Preferred destination<input value={form.preferredCountry} onChange={(e) => set("preferredCountry", e.target.value)} className={input} /></label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-semibold">University<input value={form.university} onChange={(e) => set("university", e.target.value)} className={input} /></label>
                <label className="text-sm font-semibold">Course / programme<input value={form.course} onChange={(e) => set("course", e.target.value)} className={input} /></label>
            </div>
            <label className="block text-sm font-semibold">Your message<textarea rows={3} value={form.message} onChange={(e) => set("message", e.target.value)} className={input} /></label>
            <label className="flex items-start gap-3 text-xs leading-5 text-[#77776f]">
                <input required type="checkbox" checked={form.consent} onChange={(e) => set("consent", e.target.checked)} className="mt-1" />
                I consent to CampusSeat contacting me about study options and counselling.
            </label>
            {error && <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}
            <LoadingButton loading={loading} loadingText="Submitting..." className="flex w-full rounded-xl bg-[#171717] px-5 py-3.5 text-sm font-bold text-white">
                <Send size={16} /> Request counselling
            </LoadingButton>
        </form>
    );
}
