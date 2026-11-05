"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, BarChart3, Check, Clock3, MapPin, Search, X } from "lucide-react";
import Navbar from "@/src/components/Navbar";
import EnquiryForm from "./Enquiryform";
import { partners } from "@/src/data/doctorate";
import {
    categories,
    courseOptions,
    courses,
    faqs,
    heroImage,
    highlights,
    stats,
    whyUs,
} from "@/src/data/courses";
import type { CategoryId, Course } from "@/src/data/courses";

const categoryById = Object.fromEntries(categories.map((c) => [c.id, c])) as Record<
    CategoryId,
    (typeof categories)[number]
>;

const levelStyle: Record<Course["level"], string> = {
    Beginner: "bg-emerald-50 text-emerald-800 border-emerald-200",
    Intermediate: "bg-amber-50 text-amber-800 border-amber-200",
    Advanced: "bg-rose-50 text-rose-800 border-rose-200",
};

function PartnerLogo({ name, logo }: { name: string; logo?: string }) {
    return (
        <div className="relative flex h-[68px] w-[68px] shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#e3e0d6] bg-white text-[18px] font-semibold text-[#77776f] shadow-sm">
            <span aria-hidden="true">{name.split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase()}</span>
            {logo && (
                <Image
                    src={logo}
                    alt={`${name} logo`}
                    fill
                    sizes="68px"
                    unoptimized
                    loading="lazy"
                    onError={(e) => {
                        e.currentTarget.style.display = "none";
                    }}
                    className="absolute inset-0 h-full w-full bg-white object-contain p-2"
                />
            )}
        </div>
    );
}

export default function CoursesPage() {
    const reduceMotion = useReducedMotion();
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [selected, setSelected] = useState<Course | null>(null);
    const [presetCourse, setPresetCourse] = useState("");
    const [category, setCategory] = useState<CategoryId | "all">("all");
    const [query, setQuery] = useState("");

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;
        if (selected && !dialog.open) dialog.showModal();
        if (!selected && dialog.open) dialog.close();
    }, [selected]);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        return courses.filter(
            (c) =>
                (category === "all" || c.category === category) &&
                (!q || c.title.toLowerCase().includes(q) || c.skills.some((s) => s.toLowerCase().includes(q))),
        );
    }, [category, query]);

    const reveal = (delay = 0) =>
        reduceMotion
            ? {}
            : {
                  initial: { opacity: 0, y: 22 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true, margin: "-50px" as const },
                  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
              };

    function enquire(c: Course) {
        setPresetCourse(c.title);
        if (dialogRef.current?.open) dialogRef.current.close();
        setSelected(null);
        requestAnimationFrame(() => document.getElementById("interest-form")?.scrollIntoView({ behavior: "smooth" }));
    }

    const tabCls = (active: boolean) =>
        `shrink-0 rounded-full border px-4 py-2 text-[13px] font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#77776f] ${
            active ? "border-[#171717] bg-[#171717] text-white" : "border-[#e3e0d6] bg-white text-[#3d3d38] hover:bg-[#f5f3ed]"
        }`;

    return (
        <>
            <Navbar />
            <main className="overflow-x-clip bg-[#f5f3ed] text-[#171717]">
                {/* HERO */}
                <section className="relative overflow-hidden rounded-b-[40px] bg-[#171717] px-5 pb-14 pt-36 text-white sm:px-8 sm:pb-20 sm:pt-44 lg:px-14">
                    <div aria-hidden="true" className="absolute inset-0 z-0 bg-[linear-gradient(135deg,#171717_0%,#77776f_100%)]" />
                    <Image
                        src={heroImage}
                        alt="Learners collaborating in a bright workspace"
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
                    <div aria-hidden="true" className="absolute inset-0 z-10 bg-[linear-gradient(110deg,rgba(23,23,23,0.86)_0%,rgba(23,23,23,0.35)_100%)]" />
                    <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-10 z-10 h-[380px] w-[380px] rounded-full bg-[#b18b52]/25 blur-3xl" />

                    <div className="relative z-20 mx-auto grid max-w-[1500px] items-center gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(390px,0.92fr)] lg:gap-16">
                        <div className="max-w-3xl">
                            <p className="mb-6 inline-flex items-center gap-3 text-[13px] font-medium text-white/80">
                                <span className="h-px w-9 bg-[#b18b52]" />
                                CampusSeat / Professional Education
                            </p>
                            <motion.h1 {...reveal()} className="text-[42px] font-semibold leading-[1.03] tracking-[-0.06em] sm:text-6xl lg:text-[72px]">
                                Professional Education
                            </motion.h1>
                            <p className="mt-6 font-serif text-[25px] italic leading-tight text-[#b18b52] sm:text-[32px]">
                                Skills that move your career forward
                            </p>
                            <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-white/80 sm:text-[16px]">
                                Thirty practical, industry-aligned courses in technology, data,
                                design and business. Learn through projects, guided by mentors,
                                at a pace that fits your life.
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
                                    href="#courses"
                                    className="inline-flex min-h-14 items-center rounded-full border border-white/30 px-7 text-[14px] font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    Browse courses
                                </Link>
                            </div>
                        </div>

                        <aside aria-labelledby="highlights-heading" className="rounded-[28px] border border-white/20 bg-white/10 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:p-8">
                            <h2 id="highlights-heading" className="text-[23px] font-semibold tracking-[-0.04em] sm:text-[26px]">Program Highlights</h2>
                            <dl className="mt-4 divide-y divide-white/15">
                                {highlights.map(({ label, value, icon: Icon }) => (
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
                        {stats.map((s) => (
                            <div key={s.label} className="bg-white px-6 py-6 text-center">
                                <dd className="text-[32px] font-semibold tracking-[-0.05em]">{s.value}</dd>
                                <dt className="mt-1 text-[12px] font-medium uppercase tracking-[0.12em] text-[#77776f]">{s.label}</dt>
                            </div>
                        ))}
                    </dl>
                </section>

                {/* TRACKS */}
                <section aria-labelledby="tracks-heading" className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#77776f]">Career tracks</p>
                    <h2 id="tracks-heading" className="mt-3 max-w-3xl text-[34px] font-semibold leading-tight tracking-[-0.055em] sm:text-5xl">
                        Choose your{" "}
                        <span className="font-serif font-normal italic text-[#77776f]">direction</span>
                    </h2>
                    <ul className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
                        {categories.map((cat, i) => {
                            const Icon = cat.icon;
                            const count = courses.filter((c) => c.category === cat.id).length;
                            return (
                                <motion.li key={cat.id} {...reveal(i * 0.05)}>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setCategory(cat.id);
                                            document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });
                                        }}
                                        className="group relative block h-[220px] w-full overflow-hidden rounded-[28px] border border-[#e3e0d6] bg-[linear-gradient(135deg,#77776f_0%,#b18b52_100%)] text-left text-white shadow-[0_12px_35px_rgba(23,23,23,0.08)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#77776f]"
                                    >
                                        <Image
                                            src={cat.image}
                                            alt=""
                                            fill
                                            sizes="(max-width: 1024px) 50vw, 20vw"
                                            unoptimized
                                            loading="lazy"
                                            onError={(e) => {
                                                e.currentTarget.style.display = "none";
                                            }}
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#171717]/85 via-[#171717]/30 to-transparent" />
                                        <div className="absolute inset-x-0 bottom-0 p-5">
                                            <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
                                                <Icon size={18} aria-hidden="true" />
                                            </span>
                                            <p className="text-[16px] font-semibold leading-tight tracking-[-0.03em]">{cat.label}</p>
                                            <p className="mt-1 text-[12px] text-white/70">{count} courses</p>
                                        </div>
                                    </button>
                                </motion.li>
                            );
                        })}
                    </ul>
                </section>

                {/* COURSES + SIDEBAR */}
                <section
                    id="courses"
                    aria-labelledby="courses-heading"
                    className="mx-auto grid max-w-[1500px] scroll-mt-24 items-start gap-8 px-5 pb-16 sm:px-8 sm:pb-20 lg:grid-cols-[minmax(0,2fr)_minmax(300px,0.95fr)] lg:gap-10 lg:px-14"
                >
                    <div className="min-w-0">
                        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#77776f]">All courses</p>
                        <h2 id="courses-heading" className="mt-3 text-[35px] font-semibold leading-[1.08] tracking-[-0.055em] sm:text-5xl">
                            Explore our{" "}
                            <span className="font-serif font-normal italic text-[#77776f]">courses</span>
                        </h2>

                        <div className="mt-7 space-y-4">
                            <div className="relative">
                                <label htmlFor="course-search" className="sr-only">Search courses or skills</label>
                                <Search aria-hidden="true" size={18} className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-[#77776f]" />
                                <input
                                    id="course-search"
                                    type="search"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="Search courses or skills, e.g. Python, Figma, SEO"
                                    className="w-full rounded-full border border-[#e3e0d6] bg-white py-3.5 pl-12 pr-5 text-[14px] outline-none transition focus:border-[#77776f] focus:ring-4 focus:ring-[#77776f]/10"
                                />
                            </div>
                            <div role="group" aria-label="Filter by category" className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
                                <button type="button" aria-pressed={category === "all"} onClick={() => setCategory("all")} className={tabCls(category === "all")}>
                                    All ({courses.length})
                                </button>
                                {categories.map((cat) => (
                                    <button key={cat.id} type="button" aria-pressed={category === cat.id} onClick={() => setCategory(cat.id)} className={tabCls(category === cat.id)}>
                                        {cat.label}
                                    </button>
                                ))}
                            </div>
                            <p role="status" className="text-[13px] text-[#6b6d64]">
                                Showing {filtered.length} of {courses.length} courses
                            </p>
                        </div>

                        {filtered.length === 0 ? (
                            <div className="mt-8 rounded-[28px] border border-dashed border-[#e3e0d6] bg-white p-10 text-center">
                                <p className="text-[16px] font-semibold">No courses match your search.</p>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setQuery("");
                                        setCategory("all");
                                    }}
                                    className="mt-4 rounded-full border border-[#e3e0d6] px-5 py-2 text-[13px] font-semibold hover:bg-[#f5f3ed]"
                                >
                                    Clear filters
                                </button>
                            </div>
                        ) : (
                            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                                {filtered.map((course) => {
                                    const cat = categoryById[course.category];
                                    const Icon = cat.icon;
                                    return (
                                        <article
                                            key={course.id}
                                            className="group flex min-w-0 flex-col overflow-hidden rounded-[28px] border border-[#e3e0d6] bg-[#fffefa] shadow-[0_12px_35px_rgba(23,23,23,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(23,23,23,0.12)]"
                                        >
                                            <div className="relative h-[150px] overflow-hidden bg-[linear-gradient(135deg,#77776f_0%,#b18b52_100%)]">
                                                <Image
                                                    src={cat.image}
                                                    alt=""
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1536px) 50vw, 33vw"
                                                    unoptimized
                                                    loading="lazy"
                                                    onError={(e) => {
                                                        e.currentTarget.style.display = "none";
                                                    }}
                                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#171717]/60 to-transparent" />
                                                <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-[#171717]/60 text-white backdrop-blur-sm">
                                                    <Icon size={18} aria-hidden="true" />
                                                </span>
                                                <span className={`absolute right-4 top-4 rounded-full border px-2.5 py-1 text-[11px] font-semibold ${levelStyle[course.level]}`}>
                                                    {course.level}
                                                </span>
                                            </div>
                                            <div className="flex flex-1 flex-col p-5">
                                                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#b18b52]">{cat.label}</p>
                                                <h3 className="mt-1.5 text-[18px] font-semibold leading-[1.25] tracking-[-0.035em]">{course.title}</h3>
                                                <p className="mt-3 flex-1 text-[13px] leading-[1.7] text-[#6b6d64]">{course.summary}</p>
                                                <div className="mt-4 flex flex-wrap gap-1.5">
                                                    {course.skills.slice(0, 3).map((s) => (
                                                        <span key={s} className="rounded-full border border-[#e3e0d6] bg-[#fbfaf5] px-2.5 py-1 text-[11px] font-medium text-[#6b6d64]">{s}</span>
                                                    ))}
                                                </div>
                                                <div className="mt-5 flex items-center gap-4 border-t border-[#e3e0d6] pt-4 text-[12px] font-medium text-[#6b6d64]">
                                                    <span className="inline-flex items-center gap-1.5"><Clock3 size={15} aria-hidden="true" />{course.duration}</span>
                                                    <span className="inline-flex items-center gap-1.5"><BarChart3 size={15} aria-hidden="true" />{course.level}</span>
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={() => setSelected(course)}
                                                    className="group/know mt-4 inline-flex min-h-12 w-full items-center justify-between rounded-full bg-[#171717] px-5 text-[13px] font-semibold text-white transition-colors hover:bg-[#77776f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#77776f]"
                                                >
                                                    Know more
                                                    <ArrowUpRight size={17} aria-hidden="true" className="transition-transform duration-300 group-hover/know:rotate-45" />
                                                </button>
                                            </div>
                                        </article>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    <aside className="grid min-w-0 gap-6 lg:sticky lg:top-28">
                        <section aria-labelledby="partners-heading" className="rounded-[28px] border border-[#e3e0d6] bg-white p-6 shadow-[0_16px_45px_rgba(23,23,23,0.06)] sm:p-7">
                            <h2 id="partners-heading" className="relative w-fit pb-4 text-[26px] font-semibold tracking-[-0.05em]">
                                University Partners
                                <span className="absolute bottom-0 left-0 h-[3px] w-12 rounded-full bg-[#b18b52]" />
                            </h2>
                            <ul className="mt-5 space-y-3">
                                {partners.map((partner) => (
                                    <li key={partner.id} className="flex items-center gap-4 rounded-2xl border border-[#e3e0d6] bg-[#fffefa] p-3">
                                        <PartnerLogo name={partner.name} logo={partner.logo} />
                                        <div className="min-w-0">
                                            <p className="font-semibold leading-5">{partner.name}</p>
                                            <p className="mt-1 flex items-center gap-1.5 text-[12px] text-[#6b6d64]">
                                                <MapPin size={13} aria-hidden="true" />
                                                {partner.country}
                                            </p>
                                            {partner.website && (
                                                <Link href={partner.website} className="mt-1 inline-flex text-[12px] font-medium text-[#77776f] underline underline-offset-2">
                                                    Visit website
                                                </Link>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </section>
                        <EnquiryForm courseOptions={courseOptions} presetCourse={presetCourse} />
                    </aside>
                </section>

                {/* DIALOG */}
                <dialog
                    ref={dialogRef}
                    aria-labelledby="course-dialog-heading"
                    onCancel={() => setSelected(null)}
                    onClose={() => setSelected(null)}
                    className="m-auto max-h-[min(88vh,820px)] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto rounded-[28px] border border-[#e3e0d6] bg-[#fffefa] p-0 text-[#171717] shadow-[0_30px_100px_rgba(0,0,0,0.28)] backdrop:bg-[#171717]/70"
                >
                    {selected && (
                        <div>
                            <div className="relative h-44 bg-[linear-gradient(135deg,#77776f_0%,#b18b52_100%)]">
                                <Image
                                    src={categoryById[selected.category].image}
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
                                    aria-label="Close course details"
                                    className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#171717] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#77776f]"
                                >
                                    <X size={18} aria-hidden="true" />
                                </button>
                            </div>
                            <div className="p-6 sm:p-9">
                                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#b18b52]">
                                    {categoryById[selected.category].label} · {selected.duration} · {selected.level}
                                </p>
                                <h2 id="course-dialog-heading" className="mt-2 text-[27px] font-semibold leading-tight tracking-[-0.05em] sm:text-3xl">{selected.title}</h2>
                                <p className="mt-3 text-[14px] leading-7 text-[#6b6d64]">{selected.summary}</p>

                                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                    <div className="rounded-2xl border border-[#e3e0d6] bg-[#fbfaf5] p-5">
                                        <h3 className="text-[15px] font-semibold">Skills you will learn</h3>
                                        <ul className="mt-3 space-y-1.5 text-[13px] text-[#6b6d64]">
                                            {selected.skills.map((s) => (
                                                <li key={s} className="flex items-center gap-2"><Check size={14} className="text-[#b18b52]" aria-hidden="true" />{s}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="rounded-2xl border border-[#e3e0d6] bg-[#fbfaf5] p-5">
                                        <h3 className="text-[15px] font-semibold">Career outcomes</h3>
                                        <ul className="mt-3 space-y-1.5 text-[13px] text-[#6b6d64]">
                                            {selected.outcomes.map((o) => (
                                                <li key={o} className="flex items-center gap-2"><Check size={14} className="text-[#b18b52]" aria-hidden="true" />{o}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => enquire(selected)}
                                    className="group/apply mt-6 inline-flex min-h-14 w-full items-center justify-between rounded-full bg-[#171717] py-2 pl-6 pr-2 text-[14px] font-semibold text-white transition-colors hover:bg-[#77776f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#77776f]"
                                >
                                    Enquire about this course
                                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover/apply:rotate-45">
                                        <ArrowUpRight size={18} aria-hidden="true" />
                                    </span>
                                </button>
                            </div>
                        </div>
                    )}
                </dialog>

                {/* WHY US */}
                <section aria-labelledby="why-heading" className="bg-[#fbfaf5] px-5 py-16 sm:px-8 sm:py-20 lg:px-14">
                    <div className="mx-auto max-w-[1320px]">
                        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#77776f]">Why learn with us</p>
                        <h2 id="why-heading" className="mt-3 max-w-3xl text-[35px] font-semibold leading-[1.08] tracking-[-0.055em] sm:text-5xl">
                            Built for{" "}
                            <span className="font-serif font-normal italic text-[#77776f]">real careers</span>
                        </h2>
                        <ul className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                            {whyUs.map(({ title, text, icon: Icon }) => (
                                <li key={title} className="rounded-[28px] border border-[#e3e0d6] bg-white p-6">
                                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#b18b52]/15 text-[#b18b52]">
                                        <Icon size={22} aria-hidden="true" />
                                    </span>
                                    <h3 className="mt-5 text-[18px] font-semibold tracking-[-0.03em]">{title}</h3>
                                    <p className="mt-2 text-[14px] leading-7 text-[#6b6d64]">{text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* PARTNERS SHOWCASE */}
                <section aria-labelledby="partner-showcase-heading" className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#77776f]">Academic network</p>
                    <h2 id="partner-showcase-heading" className="mt-3 max-w-3xl text-[35px] font-semibold leading-[1.08] tracking-[-0.055em] sm:text-5xl">
                        Our partner{" "}
                        <span className="font-serif font-normal italic text-[#77776f]">universities</span>
                    </h2>
                    <ul className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {partners.map((partner) => (
                            <li key={partner.id} className="flex flex-col items-center rounded-[28px] border border-[#e3e0d6] bg-white p-7 text-center shadow-[0_10px_30px_rgba(23,23,23,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(23,23,23,0.10)]">
                                <PartnerLogo name={partner.name} logo={partner.logo} />
                                <p className="mt-4 text-[17px] font-semibold tracking-[-0.03em]">{partner.name}</p>
                                <p className="mt-1 inline-flex items-center gap-1.5 text-[12px] text-[#6b6d64]">
                                    <MapPin size={13} aria-hidden="true" />
                                    {partner.country}
                                </p>
                                {partner.website && (
                                    <Link href={partner.website} className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-[#e3e0d6] px-4 py-2 text-[12px] font-semibold transition-colors hover:bg-[#171717] hover:text-white">
                                        Visit website
                                        <ArrowUpRight size={14} aria-hidden="true" />
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* FAQ */}
                <section className="mx-auto grid max-w-[1500px] gap-8 px-5 pb-16 sm:px-8 sm:pb-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 lg:px-14">
                    <div>
                        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#77776f]">Frequently asked questions</p>
                        <h2 className="mt-3 text-[35px] font-semibold leading-[1.08] tracking-[-0.055em] sm:text-5xl">
                            Questions about{" "}
                            <span className="font-serif font-normal italic text-[#77776f]">our courses</span>
                        </h2>
                    </div>
                    <div className="divide-y divide-[#e3e0d6] rounded-[28px] border border-[#e3e0d6] bg-white px-5 shadow-[0_10px_30px_rgba(23,23,23,0.04)] sm:px-8">
                        {faqs.map((item) => (
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

                {/* CTA */}
                <section className="relative overflow-hidden bg-[#171717] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-14">
                    <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-32 h-[380px] w-[380px] rounded-full bg-[#b18b52]/20 blur-3xl" />
                    <div className="relative mx-auto flex max-w-[1320px] flex-col items-start justify-between gap-8 md:flex-row md:items-center">
                        <div className="max-w-2xl">
                            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#b18b52]">CampusSeat / Professional Education</p>
                            <h2 className="mt-3 text-[36px] font-semibold leading-[1.07] tracking-[-0.055em] sm:text-5xl">Speak with Admissions</h2>
                            <p className="mt-4 text-[14px] leading-7 text-white/70 sm:text-[15px]">
                                Not sure where to start? Our team will help you pick the right
                                course for your goals and experience.
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
        </>
    );
}