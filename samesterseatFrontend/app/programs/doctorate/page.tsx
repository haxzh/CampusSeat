"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
    ArrowUpRight,
    Check,
    Clock3,
    FileText,
    Mail,
    MapPin,
    MessageSquareText,
    Phone,
    UserRound,
    X,
} from "lucide-react";
import Navbar from "@/src/components/Navbar";
import {
    courseOptions,
    faqs,
    graduateOutcomes,
    modules,
    partners,
    programmeHighlights,
    programmeStages,
} from "@/src/data/doctorate";

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
    countryCode: "+1",
    phone: "",
    course: "",
    message: "",
    consent: false,
    website: "",
};

const heroImage =
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2400&q=90";

function InterestForm() {
    const [values, setValues] = useState(initialForm);
    const [errors, setErrors] = useState<FormErrors>({});
    const [submitError, setSubmitError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    function update<K extends keyof FormValues>(field: K, value: FormValues[K]) {
        setValues((current) => ({ ...current, [field]: value }));
        setErrors((current) => ({ ...current, [field]: undefined }));
        setSubmitError("");
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const nextErrors: FormErrors = {};
        const email = values.email.trim();
        const phoneDigits = values.phone.replace(/\D/g, "");

        if (values.name.trim().length < 2) nextErrors.name = "Enter your full name.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            nextErrors.email = "Enter a valid email address.";
        }
        if (phoneDigits.length < 6 || phoneDigits.length > 15) {
            nextErrors.phone = "Enter a valid phone number.";
        }
        if (!values.course) nextErrors.course = "Select a course.";
        if (!values.consent) nextErrors.consent = "Please confirm you agree to be contacted.";

        setErrors(nextErrors);
        if (Object.keys(nextErrors).length > 0) return;

        setIsSubmitting(true);
        setSubmitError("");
        try {
            const response = await fetch("/api/enquiry", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...values,
                    name: values.name.trim(),
                    email,
                    phone: values.phone.trim(),
                }),
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
            <h2
                id="interest-heading"
                className="relative w-fit pb-4 text-[26px] font-semibold tracking-[-0.05em]"
            >
                Show Interest
                <span className="absolute bottom-0 left-0 h-[3px] w-12 rounded-full bg-[#b18b52]" />
            </h2>
            <p className="mt-4 text-[13px] leading-6 text-[#6b6d64]">
                Share your details with our admissions team.
            </p>

            {isSubmitted ? (
                <div
                    role="status"
                    className="mt-6 flex items-start gap-3 rounded-2xl border border-[#77776f]/20 bg-[#f5f3ed] p-5 text-[14px] leading-6 text-[#171717]"
                >
                    <Check size={20} className="mt-0.5 shrink-0 text-[#77776f]" />
                    <p>Thanks, our admissions team will contact you shortly.</p>
                </div>
            ) : (
                <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
                    <div className="relative">
                        <label htmlFor="enquiry-name" className="mb-1.5 block text-[13px] font-medium">
                            Full name*
                        </label>
                        <UserRound
                            aria-hidden="true"
                            size={17}
                            className="pointer-events-none absolute left-4 top-[42px] text-[#77776f]"
                        />
                        <input
                            id="enquiry-name"
                            name="name"
                            autoComplete="name"
                            required
                            value={values.name}
                            onChange={(event) => update("name", event.target.value)}
                            aria-invalid={Boolean(errors.name)}
                            aria-describedby={errors.name ? "enquiry-name-error" : undefined}
                            className="w-full rounded-2xl border border-[#e3e0d6] bg-[#fffefa] py-3 pl-11 pr-4 text-[14px] outline-none transition focus:border-[#77776f] focus:ring-4 focus:ring-[#77776f]/10"
                        />
                        {errors.name && (
                            <p id="enquiry-name-error" className="mt-1 text-[12px] text-red-700">
                                {errors.name}
                            </p>
                        )}
                    </div>

                    <div className="relative">
                        <label htmlFor="enquiry-email" className="mb-1.5 block text-[13px] font-medium">
                            Email address*
                        </label>
                        <Mail
                            aria-hidden="true"
                            size={17}
                            className="pointer-events-none absolute left-4 top-[42px] text-[#77776f]"
                        />
                        <input
                            id="enquiry-email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            value={values.email}
                            onChange={(event) => update("email", event.target.value)}
                            aria-invalid={Boolean(errors.email)}
                            aria-describedby={errors.email ? "enquiry-email-error" : undefined}
                            className="w-full rounded-2xl border border-[#e3e0d6] bg-[#fffefa] py-3 pl-11 pr-4 text-[14px] outline-none transition focus:border-[#77776f] focus:ring-4 focus:ring-[#77776f]/10"
                        />
                        {errors.email && (
                            <p id="enquiry-email-error" className="mt-1 text-[12px] text-red-700">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="enquiry-phone" className="mb-1.5 block text-[13px] font-medium">
                            Phone number*
                        </label>
                        <div className="relative flex">
                            <Phone
                                aria-hidden="true"
                                size={17}
                                className="pointer-events-none absolute left-4 top-3.5 z-10 text-[#77776f]"
                            />
                            <select
                                aria-label="Country calling code"
                                autoComplete="tel-country-code"
                                value={values.countryCode}
                                onChange={(event) => update("countryCode", event.target.value)}
                                className="w-[100px] shrink-0 rounded-l-2xl border border-r-0 border-[#e3e0d6] bg-[#fffefa] py-3 pl-11 pr-1 text-[13px] outline-none transition focus:z-10 focus:border-[#77776f] focus:ring-4 focus:ring-[#77776f]/10"
                            >
                                <option value="+1">+1</option>
                                <option value="+44">+44</option>
                                <option value="+61">+61</option>
                                <option value="+64">+64</option>
                                <option value="+91">+91</option>
                                <option value="+971">+971</option>
                            </select>
                            <input
                                id="enquiry-phone"
                                name="phone"
                                type="tel"
                                autoComplete="tel-national"
                                required
                                value={values.phone}
                                onChange={(event) => update("phone", event.target.value)}
                                aria-invalid={Boolean(errors.phone)}
                                aria-describedby={errors.phone ? "enquiry-phone-error" : undefined}
                                className="min-w-0 flex-1 rounded-r-2xl border border-[#e3e0d6] bg-[#fffefa] px-3 py-3 text-[14px] outline-none transition focus:z-10 focus:border-[#77776f] focus:ring-4 focus:ring-[#77776f]/10"
                            />
                        </div>
                        {errors.phone && (
                            <p id="enquiry-phone-error" className="mt-1 text-[12px] text-red-700">
                                {errors.phone}
                            </p>
                        )}
                    </div>

                    <div className="relative">
                        <label htmlFor="enquiry-course" className="mb-1.5 block text-[13px] font-medium">
                            Select a course*
                        </label>
                        <FileText
                            aria-hidden="true"
                            size={17}
                            className="pointer-events-none absolute left-4 top-[42px] text-[#77776f]"
                        />
                        <select
                            id="enquiry-course"
                            name="course"
                            required
                            value={values.course}
                            onChange={(event) => update("course", event.target.value)}
                            aria-invalid={Boolean(errors.course)}
                            aria-describedby={errors.course ? "enquiry-course-error" : undefined}
                            className="w-full appearance-none rounded-2xl border border-[#e3e0d6] bg-[#fffefa] py-3 pl-11 pr-4 text-[14px] outline-none transition focus:border-[#77776f] focus:ring-4 focus:ring-[#77776f]/10"
                        >
                            <option value="" disabled>
                                Select a course
                            </option>
                            {courseOptions.map((course) => (
                                <option key={course} value={course}>
                                    {course}
                                </option>
                            ))}
                        </select>
                        {errors.course && (
                            <p id="enquiry-course-error" className="mt-1 text-[12px] text-red-700">
                                {errors.course}
                            </p>
                        )}
                    </div>

                    <div className="relative">
                        <label htmlFor="enquiry-message" className="mb-1.5 block text-[13px] font-medium">
                            Message (optional)
                        </label>
                        <MessageSquareText
                            aria-hidden="true"
                            size={17}
                            className="pointer-events-none absolute left-4 top-11 text-[#77776f]"
                        />
                        <textarea
                            id="enquiry-message"
                            name="message"
                            rows={3}
                            maxLength={2000}
                            value={values.message}
                            onChange={(event) => update("message", event.target.value)}
                            className="w-full resize-y rounded-2xl border border-[#e3e0d6] bg-[#fffefa] py-3 pl-11 pr-4 text-[14px] outline-none transition focus:border-[#77776f] focus:ring-4 focus:ring-[#77776f]/10"
                        />
                    </div>

                    <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden">
                        <label htmlFor="enquiry-website">Leave this field empty</label>
                        <input
                            id="enquiry-website"
                            name="website"
                            tabIndex={-1}
                            autoComplete="off"
                            value={values.website}
                            onChange={(event) => update("website", event.target.value)}
                        />
                    </div>

                    {submitError && (
                        <p role="alert" className="text-[13px] leading-5 text-red-700">
                            {submitError}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group/submit inline-flex min-h-14 w-full items-center justify-between rounded-full bg-[#171717] py-2 pl-6 pr-2 text-[14px] font-semibold text-white transition-colors hover:bg-[#77776f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#77776f] disabled:cursor-wait disabled:opacity-70"
                    >
                        {isSubmitting ? "Submitting…" : "Submit Request"}
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover/submit:rotate-45">
                            <ArrowUpRight size={18} aria-hidden="true" />
                        </span>
                    </button>

                    <div className="flex items-start gap-2 text-[12px] leading-5 text-[#6b6d64]">
                        <input
                            id="enquiry-consent"
                            name="consent"
                            type="checkbox"
                            required
                            checked={values.consent}
                            onChange={(event) => update("consent", event.target.checked)}
                            aria-invalid={Boolean(errors.consent)}
                            aria-describedby={errors.consent ? "enquiry-consent-error" : undefined}
                            className="mt-1 h-4 w-4 shrink-0 accent-[#77776f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#77776f]"
                        />
                        <label htmlFor="enquiry-consent">
                            I agree to be contacted about my programme enquiry.
                            {errors.consent && (
                                <span id="enquiry-consent-error" className="block text-red-700">
                                    {errors.consent}
                                </span>
                            )}
                        </label>
                    </div>
                </form>
            )}
        </section>
    );
}

function PartnerCard() {
    return (
        <section
            aria-labelledby="partners-heading"
            className="rounded-[28px] border border-[#e3e0d6] bg-white p-6 shadow-[0_16px_45px_rgba(23,23,23,0.06)] sm:p-7"
        >
            <h2
                id="partners-heading"
                className="relative w-fit pb-4 text-[26px] font-semibold tracking-[-0.05em]"
            >
                University Partners
                <span className="absolute bottom-0 left-0 h-[3px] w-12 rounded-full bg-[#b18b52]" />
            </h2>
            <ul className="mt-5 space-y-3">
                {partners.map((partner) => (
                    <li key={partner.id}>
                        <div className="flex items-center gap-4 rounded-2xl border border-[#e3e0d6] bg-[#fffefa] p-3">
                            <div
                                className="relative flex h-[68px] w-[68px] shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#e3e0d6] bg-white text-[18px] font-semibold text-[#77776f] shadow-sm"
                            >
                                <span aria-hidden="true">
                                    {partner.name
                                        .split(/\s+/)
                                        .map((word) => word[0])
                                        .join("")
                                        .slice(0, 2)
                                        .toUpperCase()}
                                </span>
                                {partner.logo && (
                                    <Image
                                        src={partner.logo}
                                        alt={`${partner.name} logo`}
                                        fill
                                        sizes="68px"
                                        unoptimized
                                        loading="lazy"
                                        onError={(event) => {
                                            event.currentTarget.style.display = "none";
                                        }}
                                        className="absolute inset-0 h-full w-full bg-white object-contain p-2"
                                    />
                                )}
                            </div>
                            <div className="min-w-0">
                                <p className="font-semibold leading-5">{partner.name}</p>
                                <p className="mt-1 flex items-center gap-1.5 text-[12px] text-[#6b6d64]">
                                    <MapPin size={13} aria-hidden="true" />
                                    {partner.country}
                                </p>
                                {partner.website && (
                                    <Link
                                        href={partner.website}
                                        className="mt-1 inline-flex text-[12px] font-medium text-[#77776f] underline underline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#77776f]"
                                    >
                                        Visit website
                                    </Link>
                                )}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default function DoctoratePage() {
    const reduceMotion = useReducedMotion();
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [selectedModule, setSelectedModule] = useState<(typeof modules)[number] | null>(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;
        if (selectedModule && !dialog.open) dialog.showModal();
        if (!selectedModule && dialog.open) dialog.close();
    }, [selectedModule]);

    const reveal = (delay = 0) =>
        reduceMotion
            ? {}
            : {
                  initial: { opacity: 0, y: 22 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true, margin: "-50px" as const },
                  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
              };

    return (
        <>
            <Navbar />
            <main className="overflow-hidden bg-[#f5f3ed] text-[#171717]">
                <section className="relative overflow-hidden rounded-b-[40px] bg-[#171717] px-5 pb-12 pt-36 text-white sm:px-8 sm:pb-16 sm:pt-44 lg:px-14">
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 z-0 bg-[linear-gradient(135deg,#171717_0%,#77776f_100%)]"
                    />
                    <Image
                        src={heroImage}
                        alt="Business professionals working together in a bright office"
                        fill
                        sizes="100vw"
                        unoptimized
                        loading="eager"
                        fetchPriority="high"
                        decoding="async"
                        onError={(event) => {
                            event.currentTarget.style.display = "none";
                        }}
                        className="absolute inset-0 z-0 h-full w-full object-cover"
                    />
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 z-10 bg-[linear-gradient(110deg,rgba(23,23,23,0.80)_0%,rgba(23,23,23,0.40)_100%)]"
                    />

                    <div className="relative z-20 mx-auto grid max-w-[1500px] items-center gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(390px,0.92fr)] lg:gap-16">
                        <div className="max-w-3xl">
                            <p className="mb-6 inline-flex items-center gap-3 text-[13px] font-medium text-white/80">
                                <span className="h-px w-9 bg-[#b18b52]" />
                                CampusSeat / Doctorate
                            </p>
                            <motion.h1
                                {...reveal()}
                                className="text-[42px] font-semibold leading-[1.03] tracking-[-0.06em] sm:text-6xl lg:text-[72px]"
                            >
                                Doctorate in Business Administration (DBA)
                            </motion.h1>
                            <p className="mt-6 font-serif text-[25px] italic leading-tight text-[#b18b52] sm:text-[32px]">
                                Lead at the Frontier of Business Strategy
                            </p>
                            <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-white/80 sm:text-[16px]">
                                Earn a research-driven Doctorate in Business Administration and
                                develop the capability to shape strategy, lead through complexity,
                                and generate original knowledge at the executive level. Delivered
                                entirely online in academic partnership with our university
                                network, the programme is structured around the realities of a
                                full-time career.
                            </p>
                            <Link
                                href="#interest-form"
                                className="group/hero mt-8 inline-flex min-h-14 items-center justify-between gap-5 rounded-full bg-[#b18b52] py-2 pl-7 pr-2 text-[14px] font-semibold text-[#171717] transition-colors hover:bg-[#fffefa] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                Speak with Admissions
                                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#171717]/10 transition-transform duration-300 group-hover/hero:rotate-45">
                                    <ArrowUpRight size={18} aria-hidden="true" />
                                </span>
                            </Link>
                        </div>

                        <aside
                            aria-labelledby="highlights-heading"
                            className="rounded-[28px] border border-white/20 bg-white/10 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:p-8"
                        >
                            <h2
                                id="highlights-heading"
                                className="text-[23px] font-semibold tracking-[-0.04em] sm:text-[26px]"
                            >
                                Program Highlights
                            </h2>
                            <dl className="mt-4 divide-y divide-white/15">
                                {programmeHighlights.map(({ label, value, icon: Icon }) => (
                                    <div key={label} className="flex items-center gap-3 py-3">
                                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#b18b52]/50 bg-[#b18b52]/20 text-[#e2bd82]">
                                            <Icon size={18} aria-hidden="true" />
                                        </span>
                                        <div className="min-w-0">
                                            <dt className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/60">
                                                {label}
                                            </dt>
                                            <dd className="mt-0.5 text-[13px] font-medium leading-5 text-white sm:text-[14px]">
                                                {value}
                                            </dd>
                                        </div>
                                    </div>
                                ))}
                            </dl>
                        </aside>
                    </div>
                </section>

                <section
                    aria-labelledby="structure-heading"
                    className="bg-[#fbfaf5] px-5 py-16 sm:px-8 sm:py-20 lg:px-14"
                >
                    <div className="mx-auto max-w-[1320px]">
                        <div className="max-w-3xl">
                            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#77776f]">
                                Programme overview
                            </p>
                            <h2
                                id="structure-heading"
                                className="mt-3 text-[34px] font-semibold leading-tight tracking-[-0.055em] sm:text-5xl"
                            >
                                A two-phase doctorate,{" "}
                                <span className="font-serif font-normal italic text-[#77776f]">
                                    from study to defence
                                </span>
                            </h2>
                            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[#6b6d64]">
                                The programme is structured around a Taught Phase followed by a
                                Research Phase, ending in a Viva Voce defence.
                            </p>
                        </div>

                        <ol className="relative mt-10 grid gap-4 md:grid-cols-3 md:gap-6">
                            <div
                                aria-hidden="true"
                                className="absolute left-[16%] right-[16%] top-8 hidden h-px bg-[#e3e0d6] md:block"
                            />
                            {programmeStages.map(({ title, icon: Icon }, index) => (
                                <li
                                    key={title}
                                    className="relative flex items-center gap-4 rounded-[28px] border border-[#e3e0d6] bg-[#fffefa] p-5 shadow-[0_10px_30px_rgba(23,23,23,0.04)] md:flex-col md:items-center md:border-0 md:bg-transparent md:text-center md:shadow-none"
                                >
                                    <span className="z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#e3e0d6] bg-[#fbfaf5] text-[#77776f]">
                                        <Icon size={24} aria-hidden="true" />
                                    </span>
                                    <div>
                                        <p className="text-[11px] font-semibold uppercase tracking-[0.13em] text-[#b18b52]">
                                            Step {index + 1}
                                        </p>
                                        <h3 className="mt-1 text-[18px] font-semibold tracking-[-0.03em]">
                                            {title}
                                        </h3>
                                    </div>
                                </li>
                            ))}
                        </ol>

                        <div className="mt-8 grid gap-4 md:grid-cols-2">
                            <article className="rounded-[28px] border border-[#e3e0d6] bg-white p-6 sm:p-8">
                                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#77776f]">
                                    Year 1
                                </p>
                                <p className="mt-3 text-[28px] font-semibold tracking-[-0.05em]">
                                    6 modules
                                </p>
                                <p className="mt-1 text-[14px] text-[#6b6d64]">1,500 hours</p>
                            </article>
                            <article className="rounded-[28px] border border-[#e3e0d6] bg-white p-6 sm:p-8">
                                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#77776f]">
                                    Years 2–3
                                </p>
                                <p className="mt-3 text-[28px] font-semibold tracking-[-0.05em]">
                                    2 modules
                                </p>
                                <p className="mt-1 text-[14px] text-[#6b6d64]">3,000 hours</p>
                            </article>
                        </div>
                    </div>
                </section>

                <section
                    id="modules"
                    aria-labelledby="modules-heading"
                    className="mx-auto grid max-w-[1500px] items-start gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,2fr)_minmax(300px,0.95fr)] lg:gap-10 lg:px-14"
                >
                    <div className="min-w-0">
                        <div className="mb-8">
                            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#77776f]">
                                Doctorate professional programme
                            </p>
                            <h2
                                id="modules-heading"
                                className="mt-3 text-[35px] font-semibold leading-[1.08] tracking-[-0.055em] sm:text-5xl"
                            >
                                Doctorate Professional{" "}
                                <span className="font-serif font-normal italic text-[#77776f]">
                                    Program Overview
                                </span>
                            </h2>
                        </div>

                        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {modules.map((module, index) => (
                                <article
                                    key={module.title}
                                    className="group flex min-w-0 flex-col overflow-hidden rounded-[28px] border border-[#e3e0d6] bg-[#fffefa] shadow-[0_12px_35px_rgba(23,23,23,0.05)]"
                                >
                                    <div className="relative h-[200px] overflow-hidden bg-[linear-gradient(135deg,#77776f_0%,#b18b52_100%)]">
                                        <Image
                                            src={module.image}
                                            alt={`Business and research image for ${module.title}`}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1536px) 50vw, 33vw"
                                            unoptimized
                                            loading="lazy"
                                            decoding="async"
                                            onError={(event) => {
                                                event.currentTarget.style.display = "none";
                                            }}
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div
                                            aria-hidden="true"
                                            className="absolute inset-0 bg-gradient-to-t from-[#171717]/45 via-transparent to-transparent"
                                        />
                                        <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-[#171717]/75 px-3 py-1 text-[11px] font-semibold tracking-[0.1em] text-white backdrop-blur-sm">
                                            DBA
                                        </span>
                                        <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm">
                                            <span className="text-[14px] font-semibold">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                        </span>
                                    </div>
                                    <div className="flex flex-1 flex-col p-5">
                                        <h3 className="text-[18px] font-semibold leading-[1.25] tracking-[-0.035em]">
                                            {module.title}
                                        </h3>
                                        <p className="mt-3 flex-1 text-[13px] leading-[1.7] text-[#6b6d64]">
                                            {module.description}
                                        </p>
                                        <div className="mt-5 flex items-center gap-4 border-t border-[#e3e0d6] pt-4 text-[12px] font-medium text-[#6b6d64]">
                                            <span className="inline-flex items-center gap-1.5">
                                                <Clock3 size={15} aria-hidden="true" />
                                                20 hours
                                            </span>
                                            <span className="inline-flex items-center gap-1.5">
                                                <FileText size={15} aria-hidden="true" />
                                                10 lessons
                                            </span>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => setSelectedModule(module)}
                                            className="group/know mt-4 inline-flex min-h-12 w-full items-center justify-between rounded-full bg-[#171717] px-5 text-[13px] font-semibold text-white transition-colors hover:bg-[#77776f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#77776f]"
                                        >
                                            Know more
                                            <ArrowUpRight
                                                size={17}
                                                aria-hidden="true"
                                                className="transition-transform duration-300 group-hover/know:rotate-45"
                                            />
                                        </button>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>

                    <aside className="grid min-w-0 gap-6 lg:sticky lg:top-28">
                        <PartnerCard />
                        <InterestForm />
                    </aside>
                </section>

                <dialog
                    ref={dialogRef}
                    aria-labelledby="module-dialog-heading"
                    onCancel={() => setSelectedModule(null)}
                    onClose={() => setSelectedModule(null)}
                    className="m-auto max-h-[min(85vh,760px)] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto rounded-[28px] border border-[#e3e0d6] bg-[#fffefa] p-0 text-[#171717] shadow-[0_30px_100px_rgba(0,0,0,0.28)] backdrop:bg-[#171717]/70"
                >
                    {selectedModule && (
                        <div className="p-6 sm:p-9">
                            <div className="flex items-start justify-between gap-5">
                                <div>
                                    <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#77776f]">
                                        DBA module
                                    </p>
                                    <h2
                                        id="module-dialog-heading"
                                        className="mt-2 text-[27px] font-semibold leading-tight tracking-[-0.05em] sm:text-3xl"
                                    >
                                        {selectedModule.title}
                                    </h2>
                                </div>
                                <button
                                    type="button"
                                    autoFocus
                                    onClick={() => setSelectedModule(null)}
                                    aria-label="Close module details"
                                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#e3e0d6] text-[#6b6d64] transition hover:bg-[#f5f3ed] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#77776f]"
                                >
                                    <X size={18} aria-hidden="true" />
                                </button>
                            </div>
                            <div className="mt-7">
                                <h3 className="text-[15px] font-semibold">Module overview</h3>
                                <p className="mt-2 text-[14px] leading-7 text-[#6b6d64]">
                                    {selectedModule.description}
                                </p>
                            </div>
                            <div className="mt-6 rounded-2xl border border-[#e3e0d6] bg-[#fbfaf5] p-5">
                                <h3 className="text-[15px] font-semibold">Assessment breakdown</h3>
                                <p className="mt-2 text-[14px] leading-7 text-[#6b6d64]">
                                    {selectedModule.assessment}
                                </p>
                            </div>
                            <a
                                href="/doc/dbcontent.pdf"
                                download
                                className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full border border-[#e3e0d6] px-5 text-[13px] font-semibold transition-colors hover:bg-[#f5f3ed] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#77776f]"
                            >
                                <FileText size={16} aria-hidden="true" />
                                Download DBA programme PDF
                            </a>
                        </div>
                    )}
                </dialog>

                <section
                    aria-labelledby="outcomes-heading"
                    className="bg-[#fbfaf5] px-5 py-16 sm:px-8 sm:py-20 lg:px-14"
                >
                    <div className="mx-auto max-w-[1320px]">
                        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#77776f]">
                            Outcomes
                        </p>
                        <h2
                            id="outcomes-heading"
                            className="mt-3 max-w-3xl text-[35px] font-semibold leading-[1.08] tracking-[-0.055em] sm:text-5xl"
                        >
                            What graduates will{" "}
                            <span className="font-serif font-normal italic text-[#77776f]">
                                be able to do
                            </span>
                        </h2>
                        <ul className="mt-9 grid gap-4 md:grid-cols-2">
                            {graduateOutcomes.map(({ text, icon: Icon }, index) => (
                                <li
                                    key={text}
                                    className={`flex items-start gap-4 rounded-[28px] border border-[#e3e0d6] bg-white p-5 sm:p-6 ${index === 4 ? "md:col-span-2" : ""}`}
                                >
                                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#b18b52]/15 text-[#b18b52]">
                                        <Icon size={20} aria-hidden="true" />
                                    </span>
                                    <p className="pt-1 text-[14px] leading-7 text-[#3d3d38] sm:text-[15px]">
                                        {text}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section className="mx-auto grid max-w-[1500px] gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 lg:px-14">
                    <div>
                        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#77776f]">
                            Frequently asked questions
                        </p>
                        <h2 className="mt-3 text-[35px] font-semibold leading-[1.08] tracking-[-0.055em] sm:text-5xl">
                            Questions about the{" "}
                            <span className="font-serif font-normal italic text-[#77776f]">
                                DBA
                            </span>
                        </h2>
                    </div>
                    <div className="divide-y divide-[#e3e0d6] rounded-[28px] border border-[#e3e0d6] bg-white px-5 shadow-[0_10px_30px_rgba(23,23,23,0.04)] sm:px-8">
                        {faqs.map((item) => (
                            <details key={item.question} className="group py-5">
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-[15px] font-semibold tracking-[-0.02em] marker:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#77776f] [&::-webkit-details-marker]:hidden sm:text-[16px]">
                                    {item.question}
                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#e3e0d6] text-[20px] font-normal transition-transform duration-300 group-open:rotate-45">
                                        +
                                    </span>
                                </summary>
                                <p className="mt-3 max-w-3xl pr-2 text-[14px] leading-7 text-[#6b6d64]">
                                    {item.answer}
                                </p>
                            </details>
                        ))}
                    </div>
                </section>

                <section
                    aria-label="University partners"
                    className="overflow-hidden bg-[#fbfaf5] py-12 sm:py-16"
                >
                    <div className="mx-auto mb-7 max-w-[1320px] px-5 sm:px-8 lg:px-14">
                        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#77776f]">
                            University Partners
                        </p>
                    </div>
                    <div className="partner-marquee relative overflow-hidden">
                        <div className="partner-track flex w-max items-center gap-12 pr-12 sm:gap-20 sm:pr-20">
                            {[0, 1].map((copy) => (
                                <div
                                    key={copy}
                                    aria-hidden={copy === 1}
                                    className="flex shrink-0 items-center gap-12 sm:gap-20"
                                >
                                    {partners.map((partner) => (
                                        <span
                                            key={`${copy}-${partner.id}`}
                                            className="whitespace-nowrap text-[28px] font-bold uppercase tracking-[-0.04em] text-[#8a897f]/70 transition-colors duration-300 hover:text-[#171717] sm:text-[42px] lg:text-[54px]"
                                        >
                                            {partner.name}
                                        </span>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="relative overflow-hidden bg-[#171717] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-14">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-24 -top-32 h-[380px] w-[380px] rounded-full bg-[#b18b52]/20 blur-3xl"
                    />
                    <div className="relative mx-auto flex max-w-[1320px] flex-col items-start justify-between gap-8 md:flex-row md:items-center">
                        <div className="max-w-2xl">
                            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#b18b52]">
                                CampusSeat / Doctorate
                            </p>
                            <h2 className="mt-3 text-[36px] font-semibold leading-[1.07] tracking-[-0.055em] sm:text-5xl">
                                Speak with Admissions
                            </h2>
                            <p className="mt-4 text-[14px] leading-7 text-white/70 sm:text-[15px]">
                                Earn a research-driven Doctorate in Business Administration and
                                develop the capability to shape strategy, lead through complexity,
                                and generate original knowledge at the executive level.
                            </p>
                        </div>
                        <Link
                            href="#interest-form"
                            className="group/final inline-flex min-h-14 w-full items-center justify-between gap-6 rounded-full bg-[#b18b52] py-2 pl-7 pr-2 text-[14px] font-semibold text-[#171717] transition-colors hover:bg-[#fffefa] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:w-auto md:min-w-[280px]"
                        >
                            Speak with Admissions
                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#171717]/10 transition-transform duration-300 group-hover/final:rotate-45">
                                <ArrowUpRight size={18} aria-hidden="true" />
                            </span>
                        </Link>
                    </div>
                </section>
            </main>
            <style jsx>{`
                @keyframes partner-marquee {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        transform: translateX(-50%);
                    }
                }

                .partner-track {
                    animation: partner-marquee 32s linear infinite;
                }

                .partner-marquee:hover .partner-track {
                    animation-play-state: paused;
                }

                .partner-marquee {
                    mask-image: linear-gradient(
                        to right,
                        transparent,
                        #000 8%,
                        #000 92%,
                        transparent
                    );
                }

                @media (prefers-reduced-motion: reduce) {
                    .partner-track {
                        animation: none;
                    }
                }
            `}</style>
        </>
    );
}
