
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
    GraduationCap,
    MapPin,
    Search,
    SlidersHorizontal,
    Star,
    ArrowRight,
    Building2,
    BookOpen,
    CheckCircle2,
} from "lucide-react";

const colleges = [
    {
        name: "Indian Institute of Technology Delhi",
        short: "IIT Delhi",
        location: "New Delhi, Delhi",
        type: "Government",
        courses: "B.Tech, M.Tech, PhD",
        description:
            "A leading engineering institution known for technical education, research and innovation.",
        rating: "4.9",
        tags: ["Computer Science", "Mechanical", "Electrical"],
    },
    {
        name: "National Institute of Technology Tiruchirappalli",
        short: "NIT Trichy",
        location: "Tiruchirappalli, Tamil Nadu",
        type: "Government",
        courses: "B.Tech, M.Tech, PhD",
        description:
            "An established technical institute offering engineering programmes across multiple disciplines.",
        rating: "4.8",
        tags: ["Computer Science", "Civil", "Electronics"],
    },
    {
        name: "Delhi Technological University",
        short: "DTU",
        location: "New Delhi, Delhi",
        type: "Government",
        courses: "B.Tech, M.Tech, PhD",
        description:
            "A public university offering engineering, technology and applied science programmes.",
        rating: "4.7",
        tags: ["Software Engineering", "IT", "Mechanical"],
    },
    {
        name: "Netaji Subhas University of Technology",
        short: "NSUT",
        location: "Dwarka, New Delhi",
        type: "Government",
        courses: "B.Tech, M.Tech, PhD",
        description:
            "A technical university with programmes in engineering, computing and electronics.",
        rating: "4.6",
        tags: ["Computer Science", "IT", "Electronics"],
    },
    {
        name: "Vellore Institute of Technology",
        short: "VIT",
        location: "Vellore, Tamil Nadu",
        type: "Private",
        courses: "B.Tech, M.Tech, PhD",
        description:
            "A private university offering a wide range of engineering specialisations.",
        rating: "4.6",
        tags: ["Computer Science", "AI & ML", "Biotechnology"],
    },
    {
        name: "Manipal Institute of Technology",
        short: "MIT Manipal",
        location: "Manipal, Karnataka",
        type: "Private",
        courses: "B.Tech, M.Tech",
        description:
            "An engineering institution with programmes spanning computing, electronics and core engineering.",
        rating: "4.5",
        tags: ["Computer Science", "Data Science", "Mechanical"],
    },
];

export default function EngineeringCollegesPage() {
    const [search, setSearch] = useState("");
    const [type, setType] = useState("All");

    const filteredColleges = useMemo(() => {
        return colleges.filter((college) => {
            const query = search.toLowerCase();

            const matchesSearch =
                college.name.toLowerCase().includes(query) ||
                college.short.toLowerCase().includes(query) ||
                college.location.toLowerCase().includes(query) ||
                college.tags.some((tag) => tag.toLowerCase().includes(query));

            const matchesType = type === "All" || college.type === type;

            return matchesSearch && matchesType;
        });
    }, [search, type]);

    return (
        <main className="min-h-screen bg-[#f4f3ee] text-[#171717]">
            {/* Hero */}
            <section className="relative overflow-hidden bg-[#171717] px-5 py-16 text-white md:py-24">
                <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full border border-white/10" />
                <div className="absolute right-12 top-20 h-48 w-48 rounded-full border border-white/10" />

                <div className="relative mx-auto max-w-7xl">
                    <div className="mb-6 flex items-center gap-2 text-sm text-[#ededE7]">
                        <GraduationCap size={22} />
                        <Link href="/" className="hover:text-white">
                            CampusSeat
                        </Link>
                        <span>/</span>
                        <Link href="/colleges" className="hover:text-white">
                            Colleges
                        </Link>
                        <span>/</span>
                        <span>Engineering</span>
                    </div>

                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ededE7]">
                        Find your future
                    </p>

                    <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
                        Engineering Colleges
                        <span className="mt-2 block text-[#ededE7]">
                            Build what comes next.
                        </span>
                    </h1>

                    <p className="mt-6 max-w-2xl text-base leading-8 text-[#ededE7] md:text-lg">
                        Explore engineering institutions, compare study options and
                        discover programmes that match your academic goals.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href="#college-list"
                            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-[#171717] transition hover:bg-[#f7f7f4]"
                        >
                            Explore Colleges <ArrowRight size={18} />
                        </a>

                        <Link
                            href="/courses/btech"
                            className="rounded-xl border border-white/30 px-6 py-3.5 font-semibold transition hover:bg-white/10"
                        >
                            Explore B.Tech
                        </Link>
                    </div>
                </div>
            </section>

            {/* Highlights */}
            <section className="mx-auto grid max-w-7xl gap-5 px-5 py-10 sm:grid-cols-3">
                <div className="rounded-2xl border border-[#deded8] bg-white p-5">
                    <Building2 size={26} className="text-[#171717]" />
                    <h2 className="mt-4 font-bold">Government & Private</h2>
                    <p className="mt-2 text-sm leading-6 text-[#77776f]">
                        Explore institutions with different admission processes.
                    </p>
                </div>

                <div className="rounded-2xl border border-[#deded8] bg-white p-5">
                    <BookOpen size={26} className="text-[#171717]" />
                    <h2 className="mt-4 font-bold">Multiple Specialisations</h2>
                    <p className="mt-2 text-sm leading-6 text-[#77776f]">
                        Discover computing, electronics and core engineering fields.
                    </p>
                </div>

                <div className="rounded-2xl border border-[#deded8] bg-white p-5">
                    <CheckCircle2 size={26} className="text-[#171717]" />
                    <h2 className="mt-4 font-bold">Admission Guidance</h2>
                    <p className="mt-2 text-sm leading-6 text-[#77776f]">
                        Check official eligibility and application requirements.
                    </p>
                </div>
            </section>

            {/* Search and filters */}
            <section
                id="college-list"
                className="mx-auto max-w-7xl scroll-mt-8 px-5 py-10"
            >
                <div className="mb-8">
                    <p className="text-sm font-bold uppercase tracking-widest text-[#171717]">
                        Find your institution
                    </p>
                    <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                        Explore Engineering Colleges
                    </h2>
                    <p className="mt-3 text-[#77776f]">
                        Search by college, city or specialisation.
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
                            placeholder="Search colleges, cities or courses..."
                            className="w-full rounded-xl border border-[#deded8] py-3.5 pl-12 pr-4 outline-none focus:border-[#171717] focus:ring-4 focus:ring-black/5"
                        />
                    </div>

                    <div className="relative">
                        <SlidersHorizontal
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />
                        <select
                            value={type}
                            onChange={(event) => setType(event.target.value)}
                            className="w-full appearance-none rounded-xl border border-[#deded8] bg-white py-3.5 pl-11 pr-4 outline-none focus:border-[#171717]"
                            aria-label="Filter by college type"
                        >
                            <option value="All">All Colleges</option>
                            <option value="Government">Government</option>
                            <option value="Private">Private</option>
                        </select>
                    </div>
                </div>

                <div className="mb-5 flex items-center justify-between gap-3">
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

                {/* College cards */}
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
                                <div className="flex items-start justify-between gap-3">
                                    <span className="rounded-full bg-[#f7f7f4] px-3 py-1 text-xs font-bold text-[#171717]">
                                        {college.type}
                                    </span>

                                    <span className="flex items-center gap-1 text-sm font-semibold text-[#343434]">
                                        <Star size={16} className="fill-amber-400 text-amber-400" />
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
                                    <p className="mt-1 text-sm font-medium">{college.courses}</p>
                                </div>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {college.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-lg bg-[#f7f7f4] px-2.5 py-1.5 text-xs text-[#77776f]"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto flex gap-3 pt-6">
                                    <Link
                                        href="/admissions"
                                        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#171717] px-4 py-3 text-sm font-semibold text-white transition hover:bg-black"
                                    >
                                        Admission Guide <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {filteredColleges.length === 0 && (
                    <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-14 text-center">
                        <Search size={34} className="mx-auto text-slate-400" />
                        <h3 className="mt-4 text-xl font-bold">No colleges found</h3>
                        <p className="mt-2 text-[#77776f]">
                            Try another college name, city or specialisation.
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

            {/* CTA */}
            <section className="mx-auto max-w-7xl px-5 pb-16 pt-6">
                <div className="rounded-3xl bg-[#171717] px-6 py-10 text-center text-white md:px-12 md:py-14">
                    <h2 className="text-3xl font-bold md:text-4xl">
                        Ready to plan your engineering journey?
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#ededE7]">
                        Review course details and verify admission requirements with
                        the official institution before applying.
                    </p>
                    <Link
                        href="/courses/btech"
                        className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-[#171717] transition hover:bg-[#f7f7f4]"
                    >
                        Explore B.Tech Courses <ArrowRight size={18} />
                    </Link>
                </div>
            </section>
        </main>
    );
}
