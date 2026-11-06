
"use client";

import { useState } from "react";
import Link from "next/link";
import LoadingButton from "@/src/components/ui/LoadingButton";
import {
    GraduationCap,
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    MessageCircle,
    CheckCircle,
} from "lucide-react";

export default function ContactPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "College Admission",
        message: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setError("");
        setSuccess(false);

        if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
            setError("Please fill in all required fields.");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            setError("Please enter a valid email address.");
            return;
        }

        setLoading(true);
        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
            const response = await fetch(`${apiUrl}/enquiries`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    firstName: form.name.split(/\s+/)[0] || form.name,
                    lastName: form.name.split(/\s+/).slice(1).join(" "),
                    email: form.email,
                    phone: "Not provided",
                    message: `${form.subject}: ${form.message}`,
                    source: "contact",
                    consent: true,
                }),
            });
            if (!response.ok) {
                const data = await response.json();
                setError(data.error || "Unable to send your message.");
                return;
            }
            setSuccess(true);
            setForm({
                name: "",
                email: "",
                subject: "College Admission",
                message: "",
            });
        } catch {
            setError("Unable to send your message. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="min-h-screen bg-[#f4f3ee] text-[#171717]">
            {/* Hero section */}
            <section className="bg-[#171717] px-5 py-16 text-white md:py-20">
                <div className="mx-auto max-w-7xl">
                    <Link
                        href="/"
                        className="mb-6 inline-flex items-center gap-2 text-sm text-[#ededE7] hover:text-white"
                    >
                        <GraduationCap size={21} />
                        CampusSeat
                    </Link>

                    <p className="text-sm font-semibold uppercase tracking-widest text-[#ededE7]">
                        Contact Us
                    </p>

                    <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
                        We are here to help.
                        <span className="mt-2 block text-[#ededE7]">
                            Let&apos;s talk about your future.
                        </span>
                    </h1>

                    <p className="mt-6 max-w-2xl text-base leading-7 text-[#ededE7] md:text-lg">
                        Have questions about colleges, courses or admissions?
                        Send us a message and let us know how we can help.
                    </p>
                </div>
            </section>

            {/* Contact content */}
            <section className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:py-16 lg:grid-cols-[0.8fr_1.2fr]">
                {/* Contact information */}
                <div>
                    <h2 className="text-2xl font-bold md:text-3xl">
                        Get in touch
                    </h2>

                    <p className="mt-3 leading-7 text-[#77776f]">
                        We welcome your questions and feedback. Use the contact form
                        or the available contact options below.
                    </p>

                    <div className="mt-8 space-y-5">
                        <div className="flex gap-4 rounded-2xl border border-[#deded8] bg-white p-5">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f7f7f4] text-[#171717]">
                                <Mail size={23} />
                            </div>
                            <div>
                                <h3 className="font-bold">Email us</h3>
                                <p className="mt-1 text-sm leading-6 text-[#77776f]">
                                    For general questions and support.
                                </p>
                                <p className="mt-2 text-sm font-medium text-[#171717]">
                                    Add your official support email
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 rounded-2xl border border-[#deded8] bg-white p-5">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f7f7f4] text-[#171717]">
                                <Phone size={23} />
                            </div>
                            <div>
                                <h3 className="font-bold">Call us</h3>
                                <p className="mt-1 text-sm leading-6 text-[#77776f]">
                                    For admission and course-related queries.
                                </p>
                                <p className="mt-2 text-sm font-medium text-[#171717]">
                                    Add your official contact number
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 rounded-2xl border border-[#deded8] bg-white p-5">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f7f7f4] text-[#171717]">
                                <Clock size={23} />
                            </div>
                            <div>
                                <h3 className="font-bold">Support hours</h3>
                                <p className="mt-1 text-sm leading-6 text-[#77776f]">
                                    Set your actual support availability here.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 rounded-2xl border border-[#deded8] bg-white p-5">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f7f7f4] text-[#171717]">
                                <MapPin size={23} />
                            </div>
                            <div>
                                <h3 className="font-bold">Our location</h3>
                                <p className="mt-1 text-sm leading-6 text-[#77776f]">
                                    Add your registered office address if applicable.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact form */}
                <div className="rounded-3xl border border-[#deded8] bg-white p-6 shadow-sm sm:p-9">
                    <div className="mb-7">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#171717] text-white">
                            <MessageCircle size={24} />
                        </div>

                        <h2 className="text-2xl font-bold">Send us a message</h2>
                        <p className="mt-2 text-sm leading-6 text-[#77776f]">
                            Fields marked with * are required.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label
                                htmlFor="name"
                                className="mb-2 block text-sm font-semibold text-[#343434]"
                            >
                                Full name *
                            </label>
                            <input
                                id="name"
                                type="text"
                                autoComplete="name"
                                value={form.name}
                                onChange={(event) =>
                                    setForm({ ...form, name: event.target.value })
                                }
                                placeholder="Enter your name"
                                required
                                className="w-full rounded-xl border border-[#deded8] px-4 py-3.5 outline-none transition focus:border-[#171717] focus:ring-4 focus:ring-black/5"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block text-sm font-semibold text-[#343434]"
                            >
                                Email address *
                            </label>
                            <input
                                id="email"
                                type="email"
                                autoComplete="email"
                                value={form.email}
                                onChange={(event) =>
                                    setForm({ ...form, email: event.target.value })
                                }
                                placeholder="you@example.com"
                                required
                                className="w-full rounded-xl border border-[#deded8] px-4 py-3.5 outline-none transition focus:border-[#171717] focus:ring-4 focus:ring-black/5"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="subject"
                                className="mb-2 block text-sm font-semibold text-[#343434]"
                            >
                                What can we help you with?
                            </label>
                            <select
                                id="subject"
                                value={form.subject}
                                onChange={(event) =>
                                    setForm({ ...form, subject: event.target.value })
                                }
                                className="w-full rounded-xl border border-[#deded8] bg-white px-4 py-3.5 outline-none transition focus:border-[#171717] focus:ring-4 focus:ring-black/5"
                            >
                                <option>College Admission</option>
                                <option>Course Information</option>
                                <option>Career Guidance</option>
                                <option>Technical Support</option>
                                <option>Feedback</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div>
                            <label
                                htmlFor="message"
                                className="mb-2 block text-sm font-semibold text-[#343434]"
                            >
                                Your message *
                            </label>
                            <textarea
                                id="message"
                                value={form.message}
                                onChange={(event) =>
                                    setForm({ ...form, message: event.target.value })
                                }
                                placeholder="Write your message here..."
                                rows={5}
                                required
                                className="w-full resize-y rounded-xl border border-[#deded8] px-4 py-3.5 outline-none transition focus:border-[#171717] focus:ring-4 focus:ring-black/5"
                            />
                        </div>

                        {error && (
                            <p
                                role="alert"
                                className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                            >
                                {error}
                            </p>
                        )}

                        {success && (
                            <div
                                role="status"
                                className="flex gap-3 rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-800"
                            >
                                <CheckCircle size={20} className="shrink-0" />
                                <p>
                                    Your form passed validation, but the message has not been
                                    sent yet. Connect the backend to receive messages.
                                </p>
                            </div>
                        )}

                        <LoadingButton
                            type="submit"
                            loading={loading}
                            loadingText="Sending message..."
                            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#171717] px-5 py-4 font-semibold text-white shadow-lg shadow-blue-900/15 transition hover:bg-black focus:outline-none focus:ring-4 focus:ring-blue-200"
                        >
                            Submit Message
                            <Send size={18} />
                        </LoadingButton>
                    </form>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="mx-auto max-w-7xl px-5 pb-16">
                <div className="flex flex-col justify-between gap-5 rounded-3xl bg-[#171717] p-8 text-white md:flex-row md:items-center md:p-10">
                    <div>
                        <h2 className="text-2xl font-bold">
                            Still exploring your options?
                        </h2>
                        <p className="mt-2 leading-6 text-[#ededE7]">
                            Discover courses and colleges for your next academic step.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <Link
                            href="/colleges"
                            className="rounded-xl bg-white px-5 py-3 font-semibold text-[#171717] transition hover:bg-[#f7f7f4]"
                        >
                            Explore Colleges
                        </Link>
                        <Link
                            href="/courses"
                            className="rounded-xl border border-white/30 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
                        >
                            Browse Courses
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
