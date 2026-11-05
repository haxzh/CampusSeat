"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowUpRight, Check, FileText, Mail, MessageSquareText, Phone, UserRound } from "lucide-react";

type FormValues = {
    name: string;
    email: string;
    countryCode: string;
    phone: string;
    course: string;
    message: string;
    consent: boolean;
    website: string;
};

type FormErrors = Partial<Record<"name" | "email" | "phone" | "course" | "consent", string>>;

const initialForm: FormValues = {
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    course: "",
    message: "",
    consent: false,
    website: "",
};

const inputCls =
    "w-full rounded-2xl border border-[#e3e0d6] bg-[#fffefa] py-3 pl-11 pr-4 text-[14px] outline-none transition focus:border-[#77776f] focus:ring-4 focus:ring-[#77776f]/10";

type Props = {
    courseOptions: string[];
    presetCourse?: string;
    courseLabel?: string;
};

export default function EnquiryForm({ courseOptions, presetCourse = "", courseLabel = "course" }: Props) {
    const [values, setValues] = useState(() => ({ ...initialForm, course: presetCourse }));
    const [previousPresetCourse, setPreviousPresetCourse] = useState(presetCourse);
    const [errors, setErrors] = useState<FormErrors>({});
    const [submitError, setSubmitError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    if (presetCourse && presetCourse !== previousPresetCourse) {
        setPreviousPresetCourse(presetCourse);
        setValues((current) => ({ ...current, course: presetCourse }));
    }

    function update<K extends keyof FormValues>(field: K, value: FormValues[K]) {
        setValues((c) => ({ ...c, [field]: value }));
        setErrors((c) => ({ ...c, [field]: undefined }));
        setSubmitError("");
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const next: FormErrors = {};
        const email = values.email.trim();
        const digits = values.phone.replace(/\D/g, "");

        if (values.name.trim().length < 2) next.name = "Enter your full name.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email address.";
        if (digits.length < 6 || digits.length > 15) next.phone = "Enter a valid phone number.";
        if (!values.course) next.course = `Select a ${courseLabel}.`;
        if (!values.consent) next.consent = "Please confirm you agree to be contacted.";

        setErrors(next);
        if (Object.keys(next).length > 0) return;

        setIsSubmitting(true);
        setSubmitError("");
        try {
            const response = await fetch("/api/enquiry", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...values, name: values.name.trim(), email, phone: values.phone.trim() }),
            });
            const result: { error?: string } = await response.json();
            if (!response.ok) {
                setSubmitError(result.error || "Unable to submit your request. Please try again.");
                return;
            }
            setIsSubmitted(true);
        } catch {
            setSubmitError("Unable to submit your request. Please check your connection and try again.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section
            id="interest-form"
            aria-labelledby="interest-heading"
            className="scroll-mt-28 rounded-[28px] border border-[#e3e0d6] bg-white p-6 shadow-[0_16px_45px_rgba(23,23,23,0.06)] sm:p-7"
        >
            <h2 id="interest-heading" className="relative w-fit pb-4 text-[26px] font-semibold tracking-[-0.05em]">
                Show Interest
                <span className="absolute bottom-0 left-0 h-[3px] w-12 rounded-full bg-[#b18b52]" />
            </h2>
            <p className="mt-4 text-[13px] leading-6 text-[#6b6d64]">Share your details with our admissions team.</p>

            {isSubmitted ? (
                <div role="status" className="mt-6 flex items-start gap-3 rounded-2xl border border-[#77776f]/20 bg-[#f5f3ed] p-5 text-[14px] leading-6">
                    <Check size={20} className="mt-0.5 shrink-0 text-[#77776f]" />
                    <p>Thanks, our admissions team will contact you shortly.</p>
                </div>
            ) : (
                <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
                    <div className="relative">
                        <label htmlFor="enquiry-name" className="mb-1.5 block text-[13px] font-medium">Full name*</label>
                        <UserRound aria-hidden="true" size={17} className="pointer-events-none absolute left-4 top-[42px] text-[#77776f]" />
                        <input id="enquiry-name" name="name" autoComplete="name" required value={values.name}
                            onChange={(e) => update("name", e.target.value)} aria-invalid={Boolean(errors.name)}
                            aria-describedby={errors.name ? "enquiry-name-error" : undefined} className={inputCls} />
                        {errors.name && <p id="enquiry-name-error" className="mt-1 text-[12px] text-red-700">{errors.name}</p>}
                    </div>

                    <div className="relative">
                        <label htmlFor="enquiry-email" className="mb-1.5 block text-[13px] font-medium">Email address*</label>
                        <Mail aria-hidden="true" size={17} className="pointer-events-none absolute left-4 top-[42px] text-[#77776f]" />
                        <input id="enquiry-email" name="email" type="email" autoComplete="email" required value={values.email}
                            onChange={(e) => update("email", e.target.value)} aria-invalid={Boolean(errors.email)}
                            aria-describedby={errors.email ? "enquiry-email-error" : undefined} className={inputCls} />
                        {errors.email && <p id="enquiry-email-error" className="mt-1 text-[12px] text-red-700">{errors.email}</p>}
                    </div>

                    <div>
                        <label htmlFor="enquiry-phone" className="mb-1.5 block text-[13px] font-medium">Phone number*</label>
                        <div className="relative flex">
                            <Phone aria-hidden="true" size={17} className="pointer-events-none absolute left-4 top-3.5 z-10 text-[#77776f]" />
                            <select aria-label="Country calling code" autoComplete="tel-country-code" value={values.countryCode}
                                onChange={(e) => update("countryCode", e.target.value)}
                                className="w-[100px] shrink-0 rounded-l-2xl border border-r-0 border-[#e3e0d6] bg-[#fffefa] py-3 pl-11 pr-1 text-[13px] outline-none transition focus:z-10 focus:border-[#77776f] focus:ring-4 focus:ring-[#77776f]/10">
                                {["+91", "+1", "+44", "+61", "+64", "+971"].map((c) => (
                                    <option key={c} value={c}>{c}</option>
                                ))}
                            </select>
                            <input id="enquiry-phone" name="phone" type="tel" autoComplete="tel-national" required value={values.phone}
                                onChange={(e) => update("phone", e.target.value)} aria-invalid={Boolean(errors.phone)}
                                aria-describedby={errors.phone ? "enquiry-phone-error" : undefined}
                                className="min-w-0 flex-1 rounded-r-2xl border border-[#e3e0d6] bg-[#fffefa] px-3 py-3 text-[14px] outline-none transition focus:z-10 focus:border-[#77776f] focus:ring-4 focus:ring-[#77776f]/10" />
                        </div>
                        {errors.phone && <p id="enquiry-phone-error" className="mt-1 text-[12px] text-red-700">{errors.phone}</p>}
                    </div>

                    <div className="relative">
                        <label htmlFor="enquiry-course" className="mb-1.5 block text-[13px] font-medium">Select a {courseLabel}*</label>
                        <FileText aria-hidden="true" size={17} className="pointer-events-none absolute left-4 top-[42px] text-[#77776f]" />
                        <select id="enquiry-course" name="course" required value={values.course}
                            onChange={(e) => update("course", e.target.value)} aria-invalid={Boolean(errors.course)}
                            aria-describedby={errors.course ? "enquiry-course-error" : undefined} className={`${inputCls} appearance-none`}>
                            <option value="" disabled>Select a {courseLabel}</option>
                            {courseOptions.map((c) => (
                                <option key={c} value={c}>{c}</option>
                            ))}
                        </select>
                        {errors.course && <p id="enquiry-course-error" className="mt-1 text-[12px] text-red-700">{errors.course}</p>}
                    </div>

                    <div className="relative">
                        <label htmlFor="enquiry-message" className="mb-1.5 block text-[13px] font-medium">Message (optional)</label>
                        <MessageSquareText aria-hidden="true" size={17} className="pointer-events-none absolute left-4 top-11 text-[#77776f]" />
                        <textarea id="enquiry-message" name="message" rows={3} maxLength={2000} value={values.message}
                            onChange={(e) => update("message", e.target.value)} className={`${inputCls} resize-y`} />
                    </div>

                    <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden">
                        <label htmlFor="enquiry-website">Leave this field empty</label>
                        <input id="enquiry-website" name="website" tabIndex={-1} autoComplete="off" value={values.website}
                            onChange={(e) => update("website", e.target.value)} />
                    </div>

                    {submitError && <p role="alert" className="text-[13px] leading-5 text-red-700">{submitError}</p>}

                    <button type="submit" disabled={isSubmitting}
                        className="group/submit inline-flex min-h-14 w-full items-center justify-between rounded-full bg-[#171717] py-2 pl-6 pr-2 text-[14px] font-semibold text-white transition-colors hover:bg-[#77776f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#77776f] disabled:cursor-wait disabled:opacity-70">
                        {isSubmitting ? "Submitting…" : "Submit Request"}
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover/submit:rotate-45">
                            <ArrowUpRight size={18} aria-hidden="true" />
                        </span>
                    </button>

                    <div className="flex items-start gap-2 text-[12px] leading-5 text-[#6b6d64]">
                        <input id="enquiry-consent" name="consent" type="checkbox" required checked={values.consent}
                            onChange={(e) => update("consent", e.target.checked)} aria-invalid={Boolean(errors.consent)}
                            aria-describedby={errors.consent ? "enquiry-consent-error" : undefined}
                            className="mt-1 h-4 w-4 shrink-0 accent-[#77776f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#77776f]" />
                        <label htmlFor="enquiry-consent">
                            I agree to be contacted about my programme enquiry.
                            {errors.consent && <span id="enquiry-consent-error" className="block text-red-700">{errors.consent}</span>}
                        </label>
                    </div>
                </form>
            )}
        </section>
    );
}