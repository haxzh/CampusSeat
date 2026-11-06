"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
    ArrowUpRight,
    Briefcase,
    Check,
    Clock3,
    FileText,
    GraduationCap,
    Mail,
    MessageSquareText,
    Phone,
    Sparkles,
    UserRound,
    X,
} from "lucide-react";
import Navbar from "@/src/components/Navbar";
import LoadingButton from "@/src/components/ui/LoadingButton";
import { partners } from "@/src/data/doctorate";
import UniversityPartnersCarousel from "@/src/components/UniversityPartnersCarousel";
import {
    courseOptions,
    masterFaqs,
    masterHeroImage,
    masterHighlights,
    masterOutcomes,
    masterProgrammes,
    masterStages,
    masterStats,
} from "@/src/data/master";
import type { MasterProgramme } from "@/src/data/master";

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

function SectionHeading({ id, children }: { id: string; children: ReactNode }) {
    return (
        <h2 id={id} className="relative w-fit pb-4 text-[26px] font-semibold tracking-[-0.05em]">
            {children}
            <span className="absolute bottom-0 left-0 h-[3px] w-12 rounded-full bg-[#b18b52]" />
        </h2>
    );
}

function InterestForm({ presetCourse }: { presetCourse: string }) {
    const [values, setValues] = useState(initialForm);
    const [errors, setErrors] = useState<FormErrors>({});
    const [submitError, setSubmitError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        if (presetCourse) setValues((c) => ({ ...c, course: presetCourse }));
    }, [presetCourse]);

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
        if (!values.course) next.course = "Select a programme.";
        if (!values.consent) next.consent = "Please confirm you agree to be contacted.";

        setErrors(next);
        if (Object.keys(next).length > 0) return;

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
            <SectionHeading id="interest-heading">Show Interest</SectionHeading>
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
                        <input
                            id="enquiry-name"
                            name="name"
                            autoComplete="name"
                            required
                            value={values.name}
                            onChange={(e) => update("name", e.target.value)}
                            aria-invalid={Boolean(errors.name)}
                            aria-describedby={errors.name ? "enquiry-name-error" : undefined}
                            className={inputCls}
                        />
                        {errors.name && <p id="enquiry-name-error" className="mt-1 text-[12px] text-red-700">{errors.name}</p>}
                    </div>

                    <div className="relative">
                        <label htmlFor="enquiry-email" className="mb-1.5 block text-[13px] font-medium">Email address*</label>
                        <Mail aria-hidden="true" size={17} className="pointer-events-none absolute left-4 top-[42px] text-[#77776f]" />
                        <input
                            id="enquiry-email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            value={values.email}
                            onChange={(e) => update("email", e.target.value)}
                            aria-invalid={Boolean(errors.email)}
                            aria-describedby={errors.email ? "enquiry-email-error" : undefined}
                            className={inputCls}
                        />
                        {errors.email && <p id="enquiry-email-error" className="mt-1 text-[12px] text-red-700">{errors.email}</p>}
                    </div>

                    <div>
                        <label htmlFor="enquiry-phone" className="mb-1.5 block text-[13px] font-medium">Phone number*</label>
                        <div className="relative flex">
                            <Phone aria-hidden="true" size={17} className="pointer-events-none absolute left-4 top-3.5 z-10 text-[#77776f]" />
                            <select
                                aria-label="Country calling code"
                                autoComplete="tel-country-code"
                                value={values.countryCode}
                                onChange={(e) => update("countryCode", e.target.value)}
                                className="w-[100px] shrink-0 rounded-l-2xl border border-r-0 border-[#e3e0d6] bg-[#fffefa] py-3 pl-11 pr-1 text-[13px] outline-none transition focus:z-10 focus:border-[#77776f] focus:ring-4 focus:ring-[#77776f]/10"
                            >
                                {["+91", "+1", "+44", "+61", "+64", "+971"].map((c) => (
                                    <option key={c} value={c}>{c}</option>
                                ))}
                            </select>
                            <input
                                id="enquiry-phone"
                                name="phone"
                                type="tel"
                                autoComplete="tel-national"
                                required
                                value={values.phone}
                                onChange={(e) => update("phone", e.target.value)}
                                aria-invalid={Boolean(errors.phone)}
                                aria-describedby={errors.phone ? "enquiry-phone-error" : undefined}
                                className="min-w-0 flex-1 rounded-r-2xl border border-[#e3e0d6] bg-[#fffefa] px-3 py-3 text-[14px] outline-none transition focus:z-10 focus:border-[#77776f] focus:ring-4 focus:ring-[#77776f]/10"
                            />
                        </div>
                        {errors.phone && <p id="enquiry-phone-error" className="mt-1 text-[12px] text-red-700">{errors.phone}</p>}
                    </div>

                    <div className="relative">
                        <label htmlFor="enquiry-course" className="mb-1.5 block text-[13px] font-medium">Select a programme*</label>
                        <FileText aria-hidden="true" size={17} className="pointer-events-none absolute left-4 top-[42px] text-[#77776f]" />
                        <select
                            id="enquiry-course"
                            name="course"
                            required
                            value={values.course}
                            onChange={(e) => update("course", e.target.value)}
                            aria-invalid={Boolean(errors.course)}
                            aria-describedby={errors.course ? "enquiry-course-error" : undefined}
                            className={`${inputCls} appearance-none`}
                        >
                            <option value="" disabled>Select a programme</option>
                            {courseOptions.map((c) => (
                                <option key={c} value={c}>{c}</option>
                            ))}
                        </select>
                        {errors.course && <p id="enquiry-course-error" className="mt-1 text-[12px] text-red-700">{errors.course}</p>}
                    </div>

                    <div className="relative">
                        <label htmlFor="enquiry-message" className="mb-1.5 block text-[13px] font-medium">Message (optional)</label>
                        <MessageSquareText aria-hidden="true" size={17} className="pointer-events-none absolute left-4 top-11 text-[#77776f]" />
                        <textarea
                            id="enquiry-message"
                            name="message"
                            rows={3}
                            maxLength={2000}
                            value={values.message}
                            onChange={(e) => update("message", e.target.value)}
                            className={`${inputCls} resize-y`}
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
                            onChange={(e) => update("website", e.target.value)}
                        />
                    </div>

                    {submitError && <p role="alert" className="text-[13px] leading-5 text-red-700">{submitError}</p>}

                    <LoadingButton
                        type="submit"
                        loading={isSubmitting}
                        loadingText="Submitting request..."
                        className="group/submit inline-flex min-h-14 w-full items-center justify-between rounded-full bg-[#171717] py-2 pl-6 pr-2 text-[14px] font-semibold text-white transition-colors hover:bg-[#77776f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#77776f] disabled:cursor-wait disabled:opacity-70"
                    >
                        Submit Request
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover/submit:rotate-45">
                            <ArrowUpRight size={18} aria-hidden="true" />
                        </span>
                    </LoadingButton>

                    <div className="flex items-start gap-2 text-[12px] leading-5 text-[#6b6d64]">
                        <input
                            id="enquiry-consent"
                            name="consent"
                            type="checkbox"
                            required
                            checked={values.consent}
                            onChange={(e) => update("consent", e.target.checked)}
                            aria-invalid={Boolean(errors.consent)}
                            aria-describedby={errors.consent ? "enquiry-consent-error" : undefined}
                            className="mt-1 h-4 w-4 shrink-0 accent-[#77776f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#77776f]"
                        />
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

function PartnerCard() {
    return (
        <section aria-labelledby="partners-heading" className="rounded-[28px] border border-[#e3e0d6] bg-white p-6 shadow-[0_16px_45px_rgba(23,23,23,0.06)] sm:p-7">
            <SectionHeading id="partners-heading">University Partners</SectionHeading>
            <UniversityPartnersCarousel />
        </section>
    );
}

export default function MasterPage() {
    const reduceMotion = useReducedMotion();
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [selected, setSelected] = useState<MasterProgramme | null>(null);
    const [presetCourse, setPresetCourse] = useState("");

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;
        if (selected && !dialog.open) dialog.showModal();
        if (!selected && dialog.open) dialog.close();
    }, [selected]);

    const reveal = (delay = 0) =>
        reduceMotion
            ? {}
            : {
                  initial: { opacity: 0, y: 22 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true, margin: "-50px" as const },
                  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
              };

    const [featured, ...rest] = masterProgrammes;

    function applyFor(p: MasterProgramme) {
        setPresetCourse(`${p.title} (${p.code})`);
        setSelected(null);
        requestAnimationFrame(() => document.getElementById("interest-form")?.scrollIntoView({ behavior: "smooth" }));
    }

    return (
        <>
            <Navbar />
            <main className="overflow-hidden bg-[#f5f3ed] text-[#171717]">
                {/* HERO */}
                <section className="relative overflow-hidden rounded-b-[40px] bg-[#171717] px-5 pb-14 pt-36 text-white sm:px-8 sm:pb-20 sm:pt-44 lg:px-14">
                    <div aria-hidden="true" className="absolute inset-0 z-0 bg-[linear-gradient(135deg,#171717_0%,#77776f_100%)]" />
                    <Image
                        src={masterHeroImage}
                        alt="Graduates on a university campus"
                        fill
                        sizes="100vw"
                        unoptimized
                        loading="eager"
                        fetchPriority="high"
                        decoding="async"
                        onError={(e) => {
                            e.currentTarget.style.display = "none";
                        }}
                        className="absolute inset-0 z-0 h-full w-full object-cover"
                    />
                    <div aria-hidden="true" className="absolute inset-0 z-10 bg-[linear-gradient(110deg,rgba(23,23,23,0.85)_0%,rgba(23,23,23,0.35)_100%)]" />
                    <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-10 z-10 h-[380px] w-[380px] rounded-full bg-[#b18b52]/25 blur-3xl" />

                    <div className="relative z-20 mx-auto grid max-w-[1500px] items-center gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(390px,0.92fr)] lg:gap-16">
                        <div className="max-w-3xl">
                            <p className="mb-6 inline-flex items-center gap-3 text-[13px] font-medium text-white/80">
                                <span className="h-px w-9 bg-[#b18b52]" />
                                CampusSeat / Master
                            </p>
                            <motion.h1 {...reveal()} className="text-[42px] font-semibold leading-[1.03] tracking-[-0.06em] sm:text-6xl lg:text-[72px]">
                                Master&apos;s Degrees
                            </motion.h1>
                            <p className="mt-6 font-serif text-[25px] italic leading-tight text-[#b18b52] sm:text-[32px]">
                                Specialise. Lead. Advance.
                            </p>
                            <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-white/80 sm:text-[16px]">
                                Choose from eight postgraduate programmes across management,
                                computing, science, arts, commerce, data, security and finance.
                                Study online in partnership with our university network, around
                                the demands of your career.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-3">
                                <Link
                                    href="#interest-form"
                                    className="group/hero inline-flex min-h-14 items-center justify-between gap-5 rounded-full bg-[#b18b52] py-2 pl-7 pr-2 text-[14px] font-semibold text-[#171717] transition-colors hover:bg-[#fffefa] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    Speak with Admissions
                                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#171717]/10 transition-transform duration-300 group-hover/hero:rotate-45">
                                        <ArrowUpRight size={18} aria-hidden="true" />
                                    </span>
                                </Link>
                                <Link
                                    href="#programmes"
                                    className="inline-flex min-h-14 items-center rounded-full border border-white/30 px-7 text-[14px] font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    Explore programmes
                                </Link>
                            </div>
                        </div>

                        <aside aria-labelledby="highlights-heading" className="rounded-[28px] border border-white/20 bg-white/10 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:p-8">
                            <h2 id="highlights-heading" className="text-[23px] font-semibold tracking-[-0.04em] sm:text-[26px]">Program Highlights</h2>
                            <dl className="mt-4 divide-y divide-white/15">
                                {masterHighlights.map(({ label, value, icon: Icon }) => (
                                    <div key={label} className="flex items-center gap-3 py-3">
                                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#b18b52]/50 bg-[#b18b52]/20 text-[#e2bd82]">
                                            <Icon size={18} aria-hidden="true" />
                                        </span>
                                        <div className="min-w-0">
                                            <dt className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/60">{label}</dt>
                                            <dd className="mt-0.5 text-[13px] font-medium leading-5 sm:text-[14px]">{value}</dd>
                                        </div>
                                    </div>
                                ))}
                            </dl>
                        </aside>
                    </div>
                </section>

                {/* STATS */}
                <section aria-label="At a glance" className="mx-auto -mt-8 max-w-[1320px] px-5 sm:px-8 lg:px-14">
                    <dl className="relative z-30 grid grid-cols-2 gap-px overflow-hidden rounded-[28px] border border-[#e3e0d6] bg-[#e3e0d6] shadow-[0_20px_60px_rgba(23,23,23,0.10)] md:grid-cols-4">
                        {masterStats.map((s) => (
                            <div key={s.label} className="bg-white px-6 py-6 text-center">
                                <dd className="text-[32px] font-semibold tracking-[-0.05em]">{s.value}</dd>
                                <dt className="mt-1 text-[12px] font-medium uppercase tracking-[0.12em] text-[#77776f]">{s.label}</dt>
                            </div>
                        ))}
                    </dl>
                </section>

                {/* JOURNEY */}
                <section aria-labelledby="structure-heading" className="px-5 py-16 sm:px-8 sm:py-20 lg:px-14">
                    <div className="mx-auto max-w-[1320px]">
                        <div className="max-w-3xl">
                            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#77776f]">Programme overview</p>
                            <h2 id="structure-heading" className="mt-3 text-[34px] font-semibold leading-tight tracking-[-0.055em] sm:text-5xl">
                                Your master&apos;s,{" "}
                                <span className="font-serif font-normal italic text-[#77776f]">step by step</span>
                            </h2>
                            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[#6b6d64]">
                                Each programme moves from core foundations into a focused
                                specialisation and ends with a dissertation or capstone project.
                            </p>
                        </div>
                        <ol className="relative mt-10 grid gap-4 md:grid-cols-3 md:gap-6">
                            <div aria-hidden="true" className="absolute left-[16%] right-[16%] top-8 hidden h-px bg-[#e3e0d6] md:block" />
                            {masterStages.map(({ title, icon: Icon }, index) => (
                                <li
                                    key={title}
                                    className="relative flex items-center gap-4 rounded-[28px] border border-[#e3e0d6] bg-[#fffefa] p-5 shadow-[0_10px_30px_rgba(23,23,23,0.04)] md:flex-col md:items-center md:border-0 md:bg-transparent md:text-center md:shadow-none"
                                >
                                    <span className="z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#e3e0d6] bg-[#fbfaf5] text-[#77776f]">
                                        <Icon size={24} aria-hidden="true" />
                                    </span>
                                    <div>
                                        <p className="text-[11px] font-semibold uppercase tracking-[0.13em] text-[#b18b52]">Step {index + 1}</p>
                                        <h3 className="mt-1 text-[18px] font-semibold tracking-[-0.03em]">{title}</h3>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                {/* PROGRAMMES */}
                <section
                    id="programmes"
                    aria-labelledby="programmes-heading"
                    className="mx-auto grid max-w-[1500px] items-start gap-8 px-5 pb-16 sm:px-8 sm:pb-20 lg:grid-cols-[minmax(0,2fr)_minmax(300px,0.95fr)] lg:gap-10 lg:px-14"
                >
                    <div className="min-w-0">
                        <div className="mb-8">
                            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#77776f]">Master&apos;s programmes</p>
                            <h2 id="programmes-heading" className="mt-3 text-[35px] font-semibold leading-[1.08] tracking-[-0.055em] sm:text-5xl">
                                Master&apos;s Degree{" "}
                                <span className="font-serif font-normal italic text-[#77776f]">Programs</span>
                            </h2>
                        </div>

                        <motion.article
                            {...reveal()}
                            className="group relative mb-5 grid overflow-hidden rounded-[32px] border border-[#e3e0d6] bg-[#171717] text-white shadow-[0_20px_60px_rgba(23,23,23,0.12)] md:grid-cols-2"
                        >
                            <div className="relative min-h-[260px] bg-[linear-gradient(135deg,#77776f_0%,#b18b52_100%)]">
                                <Image
                                    src={featured.image}
                                    alt={`${featured.title} professionals in a meeting`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    unoptimized
                                    loading="lazy"
                                    onError={(e) => {
                                        e.currentTarget.style.display = "none";
                                    }}
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-[#b18b52] px-3 py-1 text-[11px] font-semibold tracking-[0.1em] text-[#171717]">
                                    <Sparkles size={12} aria-hidden="true" /> MOST POPULAR
                                </span>
                            </div>
                            <div className="flex flex-col justify-center p-6 sm:p-9">
                                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#b18b52]">{featured.code} · {featured.duration}</p>
                                <h3 className="mt-2 text-[28px] font-semibold leading-tight tracking-[-0.05em]">{featured.title}</h3>
                                <p className="mt-3 font-serif text-[18px] italic text-white/70">{featured.tagline}</p>
                                <p className="mt-4 text-[14px] leading-7 text-white/70">{featured.description}</p>
                                <button
                                    type="button"
                                    onClick={() => setSelected(featured)}
                                    className="group/know mt-6 inline-flex min-h-12 w-fit items-center gap-4 rounded-full bg-[#b18b52] py-1 pl-6 pr-1 text-[13px] font-semibold text-[#171717] transition-colors hover:bg-[#fffefa] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    Know more
                                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#171717]/10 transition-transform duration-300 group-hover/know:rotate-45">
                                        <ArrowUpRight size={17} aria-hidden="true" />
                                    </span>
                                </button>
                            </div>
                        </motion.article>

                        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {rest.map((p, index) => (
                                <motion.article
                                    key={p.id}
                                    {...reveal(index * 0.05)}
                                    className="group flex min-w-0 flex-col overflow-hidden rounded-[28px] border border-[#e3e0d6] bg-[#fffefa] shadow-[0_12px_35px_rgba(23,23,23,0.05)] transition-shadow duration-300 hover:shadow-[0_24px_60px_rgba(23,23,23,0.12)]"
                                >
                                    <div className="relative h-[200px] overflow-hidden bg-[linear-gradient(135deg,#77776f_0%,#b18b52_100%)]">
                                        <Image
                                            src={p.image}
                                            alt={`${p.title} study scene`}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1536px) 50vw, 33vw"
                                            unoptimized
                                            loading="lazy"
                                            decoding="async"
                                            onError={(e) => {
                                                e.currentTarget.style.display = "none";
                                            }}
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#171717]/55 via-transparent to-transparent" />
                                        <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-[#171717]/75 px-3 py-1 text-[11px] font-semibold tracking-[0.1em] text-white backdrop-blur-sm">
                                            {p.code}
                                        </span>
                                        <span className="absolute bottom-4 left-4 right-4 text-[12px] font-medium text-white/90">{p.tagline}</span>
                                    </div>
                                    <div className="flex flex-1 flex-col p-5">
                                        <h3 className="text-[18px] font-semibold leading-[1.25] tracking-[-0.035em]">{p.title}</h3>
                                        <p className="mt-3 flex-1 text-[13px] leading-[1.7] text-[#6b6d64]">{p.description}</p>
                                        <div className="mt-4 flex flex-wrap gap-1.5">
                                            {p.specialisations.slice(0, 3).map((s) => (
                                                <span key={s} className="rounded-full border border-[#e3e0d6] bg-[#fbfaf5] px-2.5 py-1 text-[11px] font-medium text-[#6b6d64]">{s}</span>
                                            ))}
                                        </div>
                                        <div className="mt-5 flex items-center gap-4 border-t border-[#e3e0d6] pt-4 text-[12px] font-medium text-[#6b6d64]">
                                            <span className="inline-flex items-center gap-1.5">
                                                <Clock3 size={15} aria-hidden="true" />
                                                {p.duration}
                                            </span>
                                            <span className="inline-flex items-center gap-1.5">
                                                <GraduationCap size={15} aria-hidden="true" />
                                                Online
                                            </span>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => setSelected(p)}
                                            className="group/know mt-4 inline-flex min-h-12 w-full items-center justify-between rounded-full bg-[#171717] px-5 text-[13px] font-semibold text-white transition-colors hover:bg-[#77776f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#77776f]"
                                        >
                                            Know more
                                            <ArrowUpRight size={17} aria-hidden="true" className="transition-transform duration-300 group-hover/know:rotate-45" />
                                        </button>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    </div>

                    <aside className="grid min-w-0 gap-6 lg:sticky lg:top-28">
                        <PartnerCard />
                        <InterestForm presetCourse={presetCourse} />
                    </aside>
                </section>

                {/* DIALOG */}
                <dialog
                    ref={dialogRef}
                    aria-labelledby="programme-dialog-heading"
                    onCancel={() => setSelected(null)}
                    onClose={() => setSelected(null)}
                    className="m-auto max-h-[min(88vh,820px)] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto rounded-[28px] border border-[#e3e0d6] bg-[#fffefa] p-0 text-[#171717] shadow-[0_30px_100px_rgba(0,0,0,0.28)] backdrop:bg-[#171717]/70"
                >
                    {selected && (
                        <div>
                            <div className="relative h-44 bg-[linear-gradient(135deg,#77776f_0%,#b18b52_100%)]">
                                <Image
                                    src={selected.image}
                                    alt=""
                                    fill
                                    sizes="672px"
                                    unoptimized
                                    onError={(e) => {
                                        e.currentTarget.style.display = "none";
                                    }}
                                    className="object-cover"
                                />
                                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#171717]/70 to-transparent" />
                                <button
                                    type="button"
                                    autoFocus
                                    onClick={() => setSelected(null)}
                                    aria-label="Close programme details"
                                    className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#171717] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#77776f]"
                                >
                                    <X size={18} aria-hidden="true" />
                                </button>
                            </div>
                            <div className="p-6 sm:p-9">
                                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#b18b52]">{selected.code} · {selected.duration}</p>
                                <h2 id="programme-dialog-heading" className="mt-2 text-[27px] font-semibold leading-tight tracking-[-0.05em] sm:text-3xl">{selected.title}</h2>
                                <p className="mt-3 text-[14px] leading-7 text-[#6b6d64]">{selected.description}</p>

                                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                    <div className="rounded-2xl border border-[#e3e0d6] bg-[#fbfaf5] p-5">
                                        <h3 className="text-[15px] font-semibold">Specialisations</h3>
                                        <ul className="mt-3 space-y-1.5 text-[13px] text-[#6b6d64]">
                                            {selected.specialisations.map((s) => (
                                                <li key={s} className="flex items-center gap-2">
                                                    <Check size={14} className="text-[#b18b52]" aria-hidden="true" />
                                                    {s}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="rounded-2xl border border-[#e3e0d6] bg-[#fbfaf5] p-5">
                                        <h3 className="text-[15px] font-semibold">Career paths</h3>
                                        <ul className="mt-3 space-y-1.5 text-[13px] text-[#6b6d64]">
                                            {selected.careers.map((c) => (
                                                <li key={c} className="flex items-center gap-2">
                                                    <Briefcase size={14} className="text-[#b18b52]" aria-hidden="true" />
                                                    {c}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-4 rounded-2xl border border-[#e3e0d6] bg-white p-5">
                                    <h3 className="text-[15px] font-semibold">Eligibility</h3>
                                    <p className="mt-2 text-[14px] leading-7 text-[#6b6d64]">{selected.eligibility}</p>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => applyFor(selected)}
                                    className="group/apply mt-6 inline-flex min-h-14 w-full items-center justify-between rounded-full bg-[#171717] py-2 pl-6 pr-2 text-[14px] font-semibold text-white transition-colors hover:bg-[#77776f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#77776f]"
                                >
                                    Enquire about this programme
                                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover/apply:rotate-45">
                                        <ArrowUpRight size={18} aria-hidden="true" />
                                    </span>
                                </button>
                            </div>
                        </div>
                    )}
                </dialog>

                {/* OUTCOMES */}
                <section aria-labelledby="outcomes-heading" className="bg-[#fbfaf5] px-5 py-16 sm:px-8 sm:py-20 lg:px-14">
                    <div className="mx-auto max-w-[1320px]">
                        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#77776f]">Outcomes</p>
                        <h2 id="outcomes-heading" className="mt-3 max-w-3xl text-[35px] font-semibold leading-[1.08] tracking-[-0.055em] sm:text-5xl">
                            What graduates will{" "}
                            <span className="font-serif font-normal italic text-[#77776f]">be able to do</span>
                        </h2>
                        <ul className="mt-9 grid gap-4 md:grid-cols-2">
                            {masterOutcomes.map(({ text, icon: Icon }, index) => (
                                <li
                                    key={text}
                                    className={`flex items-start gap-4 rounded-[28px] border border-[#e3e0d6] bg-white p-5 sm:p-6 ${index === 4 ? "md:col-span-2" : ""}`}
                                >
                                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#b18b52]/15 text-[#b18b52]">
                                        <Icon size={20} aria-hidden="true" />
                                    </span>
                                    <p className="pt-1 text-[14px] leading-7 text-[#3d3d38] sm:text-[15px]">{text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* PARTNERS */}
                {/* <section aria-labelledby="partner-showcase-heading" className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#77776f]">Academic network</p>
                    <h2 id="partner-showcase-heading" className="mt-3 max-w-3xl text-[35px] font-semibold leading-[1.08] tracking-[-0.055em] sm:text-5xl">
                        Our partner{" "}
                        <span className="font-serif font-normal italic text-[#77776f]">universities</span>
                    </h2>
                    <ul className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {partners.map((partner) => (
                            <li
                                key={partner.id}
                                className="group flex flex-col items-center rounded-[28px] border border-[#e3e0d6] bg-white p-7 text-center shadow-[0_10px_30px_rgba(23,23,23,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(23,23,23,0.10)]"
                            >
                                <PartnerLogo name={partner.name} logo={partner.logo} />
                                <p className="mt-4 text-[17px] font-semibold tracking-[-0.03em]">{partner.name}</p>
                                <p className="mt-1 inline-flex items-center gap-1.5 text-[12px] text-[#6b6d64]">
                                    <MapPin size={13} aria-hidden="true" />
                                    {partner.country}
                                </p>
                                {partner.website && (
                                    <Link
                                        href={partner.website}
                                        className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-[#e3e0d6] px-4 py-2 text-[12px] font-semibold transition-colors hover:bg-[#171717] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#77776f]"
                                    >
                                        Visit website
                                        <ArrowUpRight size={14} aria-hidden="true" />
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </section> */}

                {/* FAQ */}
                <section className="mx-auto grid max-w-[1500px] gap-8 px-5 pb-16 sm:px-8 sm:pb-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 lg:px-14">
                    <div>
                        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#77776f]">Frequently asked questions</p>
                        <h2 className="mt-3 text-[35px] font-semibold leading-[1.08] tracking-[-0.055em] sm:text-5xl">
                            Questions about{" "}
                            <span className="font-serif font-normal italic text-[#77776f]">master&apos;s degrees</span>
                        </h2>
                    </div>
                    <div className="divide-y divide-[#e3e0d6] rounded-[28px] border border-[#e3e0d6] bg-white px-5 shadow-[0_10px_30px_rgba(23,23,23,0.04)] sm:px-8">
                        {masterFaqs.map((item) => (
                            <details key={item.question} className="group py-5">
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-[15px] font-semibold tracking-[-0.02em] marker:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#77776f] [&::-webkit-details-marker]:hidden sm:text-[16px]">
                                    {item.question}
                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#e3e0d6] text-[20px] font-normal transition-transform duration-300 group-open:rotate-45">+</span>
                                </summary>
                                <p className="mt-3 max-w-3xl pr-2 text-[14px] leading-7 text-[#6b6d64]">{item.answer}</p>
                            </details>
                        ))}
                    </div>
                </section>

                {/* MARQUEE */}
                <section aria-label="University partners" className="overflow-hidden bg-[#fbfaf5] py-12 sm:py-16">
                    <div className="partner-marquee relative overflow-hidden">
                        <div className="partner-track flex w-max items-center gap-12 pr-12 sm:gap-20 sm:pr-20">
                            {[0, 1].map((copy) => (
                                <div key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center gap-12 sm:gap-20">
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

                {/* CTA */}
                <section className="relative overflow-hidden bg-[#171717] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-14">
                    <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-32 h-[380px] w-[380px] rounded-full bg-[#b18b52]/20 blur-3xl" />
                    <div className="relative mx-auto flex max-w-[1320px] flex-col items-start justify-between gap-8 md:flex-row md:items-center">
                        <div className="max-w-2xl">
                            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#b18b52]">CampusSeat / Master</p>
                            <h2 className="mt-3 text-[36px] font-semibold leading-[1.07] tracking-[-0.055em] sm:text-5xl">Speak with Admissions</h2>
                            <p className="mt-4 text-[14px] leading-7 text-white/70 sm:text-[15px]">
                                Not sure which master&apos;s fits your goals? Our team will help
                                you compare programmes, eligibility and partner universities.
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
                    mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
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