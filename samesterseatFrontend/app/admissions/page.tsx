
"use client";

import { useState } from "react";
import Navbar from "@/src/components/Navbar";
import Link from "next/link";
import {
    GraduationCap,
    ClipboardCheck,
    FileText,
    CalendarDays,
    CheckCircle2,
    ArrowRight,
    ChevronDown,
    Search,
    BookOpen,
    Wallet,
    HelpCircle,
} from "lucide-react";

const admissionSteps = [
    {
        number: "01",
        title: "Explore Colleges",
        description:
            "Find colleges and courses that match your interests, goals and budget.",
        icon: Search,
    },
    {
        number: "02",
        title: "Check Eligibility",
        description:
            "Review academic requirements, entrance exams and course-specific criteria.",
        icon: ClipboardCheck,
    },
    {
        number: "03",
        title: "Prepare Documents",
        description:
            "Keep your academic certificates, identification and required documents ready.",
        icon: FileText,
    },
    {
        number: "04",
        title: "Apply for Admission",
        description:
            "Submit your application through the official college admission portal.",
        icon: GraduationCap,
    },
];

const documents = [
    "Class 10 and Class 12 mark sheets",
    "Transfer or migration certificate, if required",
    "Valid photo ID proof",
    "Recent passport-size photographs",
    "Entrance exam scorecard, if applicable",
    "Category or income certificate, if applicable",
];

const faqs = [
    {
        question: "How do I apply for college admission?",
        answer:
            "Choose your college and course, check the eligibility criteria, prepare the required documents and apply through the official admission portal.",
    },
    {
        question: "Can I apply without an entrance exam?",
        answer:
            "Some colleges and courses offer merit-based admission, while others require entrance exams. Check the official admission guidelines for your selected course.",
    },
    {
        question: "Which documents are required for admission?",
        answer:
            "Common documents include academic mark sheets, ID proof, photographs and other certificates required by the college. Requirements vary by institution.",
    },
    {
        question: "When do college admissions open?",
        answer:
            "Admission dates vary by college, course and entrance examination. Check the official college website regularly for current dates and deadlines.",
    },
];

export default function AdmissionsPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-[#f4f3ee] text-[#171717]">
                {/* Hero */}
                <section className="relative overflow-hidden bg-[#171717] px-5 py-16 text-white md:py-24">
                    <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full border border-white/10" />
                    <div className="absolute -right-5 top-10 h-60 w-60 rounded-full border border-white/10" />

                    <div className="relative mx-auto max-w-7xl">
                        <div className="mb-6 flex items-center gap-2 text-sm text-[#ededE7]">
                            <GraduationCap size={21} />
                            <span>CampusSeat</span>
                            <span>/</span>
                            <span>Admissions</span>
                        </div>

                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ededE7]">
                            Your next chapter starts here
                        </p>

                        <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
                            Your college journey
                            <span className="mt-2 block text-[#ededE7]">
                                starts with one step.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-base leading-8 text-[#ededE7] md:text-lg">
                            Understand the admission process, prepare your documents and
                            explore the steps to help you apply to your preferred college.
                        </p>

                        <div className="mt-9 flex flex-wrap gap-4">
                            <Link
                                href="/colleges"
                                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-[#171717] transition hover:bg-[#f7f7f4]"
                            >
                                Explore Colleges <ArrowRight size={18} />
                            </Link>

                            <Link
                                href="/courses"
                                className="rounded-xl border border-white/30 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
                            >
                                Browse Courses
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Overview cards */}
                <section className="mx-auto grid max-w-7xl gap-5 px-5 py-10 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-2xl border border-[#deded8] bg-white p-6">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#f7f7f4] text-[#171717]">
                            <BookOpen size={24} />
                        </div>
                        <h2 className="text-lg font-bold">Course Eligibility</h2>
                        <p className="mt-2 text-sm leading-6 text-[#77776f]">
                            Check academic qualifications and course-specific requirements
                            before applying.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-[#deded8] bg-white p-6">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-900">
                            <Wallet size={24} />
                        </div>
                        <h2 className="text-lg font-bold">Fees & Scholarships</h2>
                        <p className="mt-2 text-sm leading-6 text-[#77776f]">
                            Review tuition fees, financial aid and scholarship options
                            available at your chosen college.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-[#deded8] bg-white p-6 sm:col-span-2 lg:col-span-1">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-50 text-neutral-800">
                            <CalendarDays size={24} />
                        </div>
                        <h2 className="text-lg font-bold">Admission Deadlines</h2>
                        <p className="mt-2 text-sm leading-6 text-[#77776f]">
                            Check official websites for application dates, counselling
                            schedules and deadlines.
                        </p>
                    </div>
                </section>

                {/* Admission process */}
                <section className="mx-auto max-w-7xl px-5 py-12">
                    <div className="mx-auto mb-12 max-w-2xl text-center">
                        <p className="text-sm font-bold uppercase tracking-widest text-[#171717]">
                            How it works
                        </p>
                        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                            Admission process, step by step
                        </h2>
                        <p className="mt-4 leading-7 text-[#77776f]">
                            Follow these steps to understand how to prepare for college
                            applications.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {admissionSteps.map((step) => {
                            const Icon = step.icon;

                            return (
                                <article
                                    key={step.number}
                                    className="rounded-2xl border border-[#deded8] bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f7f7f4] text-[#171717]">
                                            <Icon size={24} />
                                        </div>
                                        <span className="text-3xl font-bold text-slate-200">
                                            {step.number}
                                        </span>
                                    </div>

                                    <h3 className="mt-6 text-lg font-bold">{step.title}</h3>
                                    <p className="mt-3 text-sm leading-6 text-[#77776f]">
                                        {step.description}
                                    </p>
                                </article>
                            );
                        })}
                    </div>
                </section>

                {/* Documents */}
                <section className="mx-auto max-w-7xl px-5 py-12">
                    <div className="grid gap-10 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:grid-cols-2 md:p-10">
                        <div>
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f7f7f4] text-[#171717]">
                                <FileText size={25} />
                            </div>

                            <h2 className="mt-5 text-2xl font-bold md:text-3xl">
                                Documents checklist
                            </h2>

                            <p className="mt-3 leading-7 text-[#77776f]">
                                Prepare these commonly requested documents in advance.
                                Your selected college may require additional documents.
                            </p>

                            <div className="mt-7 space-y-4">
                                {documents.map((document) => (
                                    <div key={document} className="flex items-start gap-3">
                                        <CheckCircle2
                                            size={20}
                                            className="mt-0.5 shrink-0 text-neutral-600"
                                        />
                                        <span className="text-sm leading-6 text-[#343434]">
                                            {document}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col justify-center rounded-2xl bg-[#171717] p-7 text-white md:p-9">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#ededE7]">
                                <ClipboardCheck size={30} />
                            </div>

                            <h3 className="mt-6 text-2xl font-bold">
                                Before you submit
                            </h3>

                            <p className="mt-4 leading-7 text-[#ededE7]">
                                Double-check your application details, verify eligibility
                                and review the official fee structure. Keep copies of your
                                submitted application and payment receipt.
                            </p>

                            <Link
                                href="/colleges"
                                className="mt-7 inline-flex w-fit items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-[#171717] transition hover:bg-[#f7f7f4]"
                            >
                                Find a College <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="mx-auto max-w-4xl px-5 py-14">
                    <div className="mb-8 text-center">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#f7f7f4] text-[#171717]">
                            <HelpCircle size={25} />
                        </div>
                        <h2 className="mt-4 text-3xl font-bold">
                            Frequently asked questions
                        </h2>
                        <p className="mt-3 text-[#77776f]">
                            Quick answers to common admission questions.
                        </p>
                    </div>

                    <div className="space-y-3">
                        {faqs.map((faq, index) => (
                            <div
                                key={faq.question}
                                className="overflow-hidden rounded-2xl border border-[#deded8] bg-white"
                            >
                                <button
                                    type="button"
                                    onClick={() =>
                                        setOpenFaq(openFaq === index ? null : index)
                                    }
                                    aria-expanded={openFaq === index}
                                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-semibold transition hover:bg-[#f4f3ee] sm:px-6"
                                >
                                    <span>{faq.question}</span>
                                    <ChevronDown
                                        size={20}
                                        className={`shrink-0 text-[#171717] transition-transform ${openFaq === index ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                {openFaq === index && (
                                    <div className="px-5 pb-5 text-sm leading-7 text-[#77776f] sm:px-6">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Bottom CTA */}
                <section className="mx-auto max-w-7xl px-5 pb-16 pt-4">
                    <div className="rounded-3xl bg-[#171717] px-6 py-10 text-center text-white md:px-12 md:py-14">
                        <h2 className="text-3xl font-bold md:text-4xl">
                            Ready to explore your options?
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#ededE7]">
                            Discover colleges and courses, then verify the latest
                            admission requirements directly with the institution.
                        </p>
                        <Link
                            href="/colleges"
                            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-[#171717] transition hover:bg-[#f7f7f4]"
                        >
                            Explore Colleges <ArrowRight size={18} />
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}
