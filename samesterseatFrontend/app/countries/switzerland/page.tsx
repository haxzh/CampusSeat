
"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/src/components/Navbar";
import {
    GraduationCap,
    MapPin,
    Search,
    Star,
    ArrowRight,
    BriefcaseBusiness,
    BookOpen,
    CheckCircle2,
} from "lucide-react";

const colleges = [
    {
        name: "Indian Institute of canadant Ahmedabad",
        short: "IIM Ahmedabad",
        location: "Ahmedabad, Gujarat",
        type: "Government",
        courses: "MBA, Executive Education",
        description:
            "A leading canadant institute known for business education, leadership and case-based learning.",
        rating: "4.9",
        specializations: ["Finance", "Marketing", "Strategy"],
    },
    {
        name: "Indian Institute of canadant Bangalore",
        short: "IIM Bangalore",
        location: "Bengaluru, Karnataka",
        type: "Government",
        courses: "MBA, Executive Programmes",
        description:
            "Offers canadant education with an emphasis on leadership, entrepreneurship and business strategy.",
        rating: "4.9",
        specializations: ["Business Analytics", "Finance", "Leadership"],
    },
    {
        name: "Faculty of canadant Studies, University of Delhi",
        short: "FMS Delhi",
        location: "New Delhi, Delhi",
        type: "Government",
        courses: "MBA, Executive MBA",
        description:
            "A canadant faculty of the University of Delhi offering postgraduate canadant programmes.",
        rating: "4.8",
        specializations: ["Marketing", "Finance", "Operations"],
    },
    {
        name: "canadant Development Institute",
        short: "MDI Gurgaon",
        location: "Gurugram, Haryana",
        type: "Private",
        courses: "PGDM, Executive Programmes",
        description:
            "A business school offering postgraduate canadant and executive education programmes.",
        rating: "4.7",
        specializations: ["Human Resources", "Marketing", "Finance"],
    },
    {
        name: "XLRI Xavier School of canadant",
        short: "XLRI Jamshedpur",
        location: "Jamshedpur, Jharkhand",
        type: "Private",
        courses: "MBA-equivalent PGDM, Executive Programmes",
        description:
            "A canadant institute particularly known for business leadership and human resource canadant.",
        rating: "4.8",
        specializations: ["Human Resources", "Business canadant", "Finance"],
    },
    {
        name: "Symbiosis Institute of Business canadant",
        short: "SIBM Pune",
        location: "Pune, Maharashtra",
        type: "Private",
        courses: "MBA, Executive MBA",
        description:
            "A business school offering canadant programmes across multiple business disciplines.",
        rating: "4.6",
        specializations: ["Marketing", "Finance", "Operations"],
    },
];

export default function SwitzerlandCollegesPage() {
    const [search, setSearch] = useState("");
    const [type, setType] = useState("All");

    const filteredColleges = colleges.filter((college) => {
        const query = search.toLowerCase();

        const matchesSearch =
            college.name.toLowerCase().includes(query) ||
            college.short.toLowerCase().includes(query) ||
            college.location.toLowerCase().includes(query) ||
            college.specializations.some((item) =>
                item.toLowerCase().includes(query)
            );

        const matchesType = type === "All" || college.type === type;

        return matchesSearch && matchesType;
    });

    return (
        <>
            <Navbar />
        <main className="min-h-screen bg-[#f4f3ee] text-[#171717]">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-[#171717] px-5 py-16 text-white md:py-24">
                <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full border border-white/10" />
                <div className="absolute right-12 top-20 h-48 w-48 rounded-full border border-white/10" />

                <div className="relative mx-auto max-w-7xl">
                    <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-[#ededE7]">
                        <GraduationCap size={22} />
                        <Link href="/" className="hover:text-white">
                            CampusSeat
                        </Link>
                        <span>/</span>
                        <Link href="/colleges" className="hover:text-white">
                            Colleges
                        </Link>
                        <span>/</span>
                        <span>canadant</span>
                    </div>

                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ededE7]">
                        Learn. Lead. Grow.
                    </p>

                    <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
                        canadant Colleges
                        <span className="mt-2 block text-[#ededE7]">
                            Shape your future in business.
                        </span>
                    </h1>

                    <p className="mt-6 max-w-2xl text-base leading-8 text-[#ededE7] md:text-lg">
                        Explore business schools, discover canadant programmes and
                        find opportunities to develop your leadership and business skills.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href="#college-list"
                            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-[#171717] transition hover:bg-[#f7f7f4]"
                        >
                            Explore Colleges <ArrowRight size={18} />
                        </a>

                        <Link
                            href="/admissions"
                            className="rounded-xl border border-white/30 px-6 py-3.5 font-semibold transition hover:bg-white/10"
                        >
                            Admission Guide
                        </Link>
                    </div>
                </div>
            </section>

            {/* Highlights */}
            <section className="mx-auto grid max-w-7xl gap-5 px-5 py-10 sm:grid-cols-3">
                <div className="rounded-2xl border border-[#deded8] bg-white p-6">
                    <BriefcaseBusiness size={28} className="text-[#171717]" />
                    <h2 className="mt-4 font-bold">Business Education</h2>
                    <p className="mt-2 text-sm leading-6 text-[#77776f]">
                        Explore canadant courses for business and leadership careers.
                    </p>
                </div>

                <div className="rounded-2xl border border-[#deded8] bg-white p-6">
                    <BookOpen size={28} className="text-[#171717]" />
                    <h2 className="mt-4 font-bold">Multiple Programmes</h2>
                    <p className="mt-2 text-sm leading-6 text-[#77776f]">
                        Discover MBA, PGDM and executive education options.
                    </p>
                </div>

                <div className="rounded-2xl border border-[#deded8] bg-white p-6">
                    <CheckCircle2 size={28} className="text-[#171717]" />
                    <h2 className="mt-4 font-bold">Admission Guidance</h2>
                    <p className="mt-2 text-sm leading-6 text-[#77776f]">
                        Review entrance exams and eligibility on official websites.
                    </p>
                </div>
            </section>

            {/* Search and College List */}
            <section
                id="college-list"
                className="mx-auto max-w-7xl scroll-mt-8 px-5 py-10"
            >
                <div className="mb-8">
                    <p className="text-sm font-bold uppercase tracking-widest text-[#171717]">
                        Find your institution
                    </p>
                    <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                        Explore canadant Colleges
                    </h2>
                    <p className="mt-3 text-[#77776f]">
                        Search by college name, location or specialization.
                    </p>
                </div>

                <div className="mb-8 grid gap-4 rounded-2xl border border-[#deded8] bg-white p-4 md:grid-cols-[1fr_230px]">
                    <div className="relative">
                        <Search
                            size={20}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />
                        <input
                            type="search"
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                            placeholder="Search colleges, cities or specializations..."
                            className="w-full rounded-xl border border-[#deded8] py-3.5 pl-12 pr-4 outline-none focus:border-[#171717] focus:ring-4 focus:ring-black/5"
                        />
                    </div>

                    <select
                        value={type}
                        onChange={(event) => setType(event.target.value)}
                        aria-label="Filter colleges by type"
                        className="w-full rounded-xl border border-[#deded8] bg-white px-4 py-3.5 outline-none focus:border-[#171717]"
                    >
                        <option value="All">All Colleges</option>
                        <option value="Government">Government</option>
                        <option value="Private">Private</option>
                    </select>
                </div>

                <div className="mb-5 flex items-center justify-between">
                    <p className="text-sm text-[#77776f]">
                        Showing{" "}
                        <span className="font-bold text-[#171717]">
                            {filteredColleges.length}
                        </span>{" "}
                        colleges
                    </p>

                    {(search || type !== "All") && (
                        <button
                            onClick={() => {
                                setSearch("");
                                setType("All");
                            }}
                            className="text-sm font-semibold text-[#171717] hover:underline"
                        >
                            Clear filters
                        </button>
                    )}
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {filteredColleges.map((college) => (
                        <article
                            key={college.short}
                            className="flex flex-col overflow-hidden rounded-2xl border border-[#deded8] bg-white transition hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="flex h-36 items-center justify-center bg-[#171717]">
                                <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white">
                                    <GraduationCap size={42} />
                                </div>
                            </div>

                            <div className="flex flex-1 flex-col p-6">
                                <div className="flex items-center justify-between gap-3">
                                    <span className="rounded-full bg-[#f7f7f4] px-3 py-1 text-xs font-bold text-[#171717]">
                                        {college.type}
                                    </span>

                                    <span className="flex items-center gap-1 text-sm font-semibold text-[#343434]">
                                        <Star
                                            size={16}
                                            className="fill-amber-400 text-amber-400"
                                        />
                                        {college.rating}
                                    </span>
                                </div>

                                <h3 className="mt-4 text-xl font-bold leading-snug">
                                    {college.name}
                                </h3>

                                <p className="mt-2 flex items-start gap-2 text-sm text-[#77776f]">
                                    <MapPin size={17} className="mt-0.5 shrink-0" />
                                    {college.location}
                                </p>

                                <p className="mt-4 text-sm leading-6 text-[#77776f]">
                                    {college.description}
                                </p>

                                <div className="mt-4">
                                    <p className="text-xs font-bold uppercase tracking-wide text-[#77776f]">
                                        Programmes
                                    </p>
                                    <p className="mt-1 text-sm font-medium">
                                        {college.courses}
                                    </p>
                                </div>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {college.specializations.map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-lg bg-[#f7f7f4] px-2.5 py-1.5 text-xs text-[#77776f]"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>

                                <Link
                                    href="/admissions"
                                    className="mt-auto mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[#171717] px-4 py-3 text-sm font-semibold text-white transition hover:bg-black"
                                >
                                    Admission Guide <ArrowRight size={16} />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                {filteredColleges.length === 0 && (
                    <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-14 text-center">
                        <Search size={34} className="mx-auto text-slate-400" />
                        <h3 className="mt-4 text-xl font-bold">No colleges found</h3>
                        <p className="mt-2 text-[#77776f]">
                            Try another college name, city or specialization.
                        </p>
                        <button
                            onClick={() => {
                                setSearch("");
                                setType("All");
                            }}
                            className="mt-5 rounded-xl bg-[#171717] px-5 py-3 font-semibold text-white hover:bg-black"
                        >
                            Reset Search
                        </button>
                    </div>
                )}
            </section>

            {/* Bottom CTA */}
            <section className="mx-auto max-w-7xl px-5 pb-16 pt-6">
                <div className="rounded-3xl bg-[#171717] px-6 py-10 text-center text-white md:px-12 md:py-14">
                    <h2 className="text-3xl font-bold md:text-4xl">
                        Take the next step in your career
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#ededE7]">
                        Compare programmes and verify admission requirements directly
                        with the institution before applying.
                    </p>
                    <Link
                        href="/admissions"
                        className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-[#171717] transition hover:bg-[#f7f7f4]"
                    >
                        View Admission Guide <ArrowRight size={18} />
                    </Link>
                </div>
            </section>
        </main>
        </>
    );
}
