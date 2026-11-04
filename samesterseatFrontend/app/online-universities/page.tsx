
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { MotionProps } from "framer-motion";
import type { FormEvent } from "react";
import Navbar from "@/src/components/Navbar";
import {
    ArrowUpRight,
    BadgeCheck,
    CalendarClock,
    ExternalLink,
    Globe2,
    GraduationCap,
    Heart,
    Laptop,
    MapPin,
    MonitorPlay,
    Search,
    X,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Data                                                                */
/*                                                                     */
/* Logos: loaded from each university's website domain (favicon        */
/* service) with a monogram fallback. For crisper logos, drop files in */
/* /public/logos/<id>.png and set `logo: "/logos/<id>.png"`.           */
/*                                                                     */
/* Images: stock education photos from Unsplash with a gradient        */
/* fallback. Replace with real, licensed campus photos when you have   */
/* them by setting `image: "/campuses/<id>.jpg"`.                      */
/*                                                                     */
/* Course lists are indicative. Confirm current programmes, fees and   */
/* UGC-DEB entitlement with each university before publishing.         */
/* ------------------------------------------------------------------ */

interface University {
    id: string;
    name: string;
    short: string;
    region: string;
    country: string;
    code: string;
    location: string;
    type: string;
    mode: string;
    courses: string[];
    description: string;
    domain: string;
    website: string;
    color: string;
    image: string;
    logo?: string;
}

interface FlagProps {
    code: string;
    className?: string;
}

interface CoverProps {
    src?: string;
    alt?: string;
    color?: string;
    watermark?: string;
    className?: string;
    priority?: boolean;
}

const unsplash = (id: string, w = 1200) =>
    `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const IMG = {
    students: "photo-1522202176988-66273c2fd55f",
    laptop: "photo-1513258496099-48168024aec0",
    remote: "photo-1501504905252-473c47e087f8",
    building: "photo-1562774053-701939374585",
    campus: "photo-1541339907198-e08756dedf3f",
    graduates: "photo-1523050854058-8df90110c9f1",
    library: "photo-1498243691581-b145c3f54a5a",
    lecture: "photo-1524178232363-1fb2b075b655",
    tech: "photo-1519389950473-47ba0277781c",
    group: "photo-1523240795612-9a054b0db644",
};

const universities: University[] = [
    {
        id: "ignou",
        name: "IGNOU",
        short: "IG",
        region: "India",
        country: "India",
        code: "in",
        location: "New Delhi",
        type: "Central university",
        mode: "Online & distance",
        courses: ["BCA", "BA", "B.Com", "MBA"],
        description:
            "India's open university, built for flexible undergraduate and postgraduate study at your own pace.",
        domain: "ignou.ac.in",
        website: "https://www.ignou.ac.in",
        color: "#1F4E8C",
        image: unsplash(IMG.library),
    },
    {
        id: "amity",
        name: "Amity University Online",
        short: "AU",
        region: "India",
        country: "India",
        code: "in",
        location: "Noida, Uttar Pradesh",
        type: "Private university",
        mode: "Online",
        courses: ["BCA", "MCA", "BBA", "MBA"],
        description:
            "Online degree programmes designed for flexible study alongside work and career growth.",
        domain: "amityonline.com",
        website: "https://amityonline.com",
        color: "#12355B",
        image: unsplash(IMG.building),
    },
    {
        id: "manipal-jaipur",
        name: "Manipal University Jaipur",
        short: "MUJ",
        region: "India",
        country: "India",
        code: "in",
        location: "Jaipur, Rajasthan",
        type: "Private university",
        mode: "Online",
        courses: ["BCA", "MCA", "BBA", "MBA"],
        description:
            "Online programmes across technology, business and other disciplines from a well-known university group.",
        domain: "onlinemanipal.com",
        website: "https://www.onlinemanipal.com",
        color: "#C2410C",
        image: unsplash(IMG.campus),
    },
    {
        id: "jain",
        name: "Jain University",
        short: "JU",
        region: "India",
        country: "India",
        code: "in",
        location: "Bengaluru, Karnataka",
        type: "Deemed-to-be university",
        mode: "Online",
        courses: ["BCA", "MCA", "BBA", "MBA"],
        description:
            "Online learning options in computing, management and related fields from Bengaluru.",
        domain: "jainuniversity.ac.in",
        website: "https://www.jainuniversity.ac.in",
        color: "#B45309",
        image: unsplash(IMG.tech),
    },
    {
        id: "chandigarh",
        name: "Chandigarh University",
        short: "CU",
        region: "India",
        country: "India",
        code: "in",
        location: "Mohali, Punjab",
        type: "Private university",
        mode: "Online",
        courses: ["BCA", "MCA", "BBA", "MBA"],
        description:
            "Compare online study options for undergraduate and postgraduate education.",
        domain: "cuchd.in",
        website: "https://www.cuchd.in",
        color: "#9F1239",
        image: unsplash(IMG.group),
    },
    {
        id: "lpu",
        name: "Lovely Professional University",
        short: "LPU",
        region: "India",
        country: "India",
        code: "in",
        location: "Phagwara, Punjab",
        type: "Private university",
        mode: "Online",
        courses: ["BCA", "MCA", "BBA", "MBA"],
        description:
            "Flexible online programmes across technology and business disciplines.",
        domain: "lpu.in",
        website: "https://www.lpu.in",
        color: "#E4572E",
        image: unsplash(IMG.lecture),
    },
    {
        id: "open-university",
        name: "The Open University",
        short: "OU",
        region: "World",
        country: "United Kingdom",
        code: "gb",
        location: "Milton Keynes, England",
        type: "Public distance-learning university",
        mode: "Online & distance",
        courses: ["Computing & IT", "Business", "Arts & humanities"],
        description:
            "A pioneer of distance learning in the UK, with flexible degrees you can study from anywhere.",
        domain: "open.ac.uk",
        website: "https://www.open.ac.uk",
        color: "#0B5CAD",
        image: unsplash(IMG.laptop),
    },
    {
        id: "asu-online",
        name: "Arizona State University Online",
        short: "ASU",
        region: "World",
        country: "United States",
        code: "us",
        location: "Tempe, Arizona",
        type: "Public research university",
        mode: "Online",
        courses: ["Computing", "Business", "Engineering"],
        description:
            "Online undergraduate and graduate degrees from a large US public research university.",
        domain: "asu.edu",
        website: "https://asuonline.asu.edu",
        color: "#8C1D40",
        image: unsplash(IMG.remote),
    },
    {
        id: "london",
        name: "University of London",
        short: "UoL",
        region: "World",
        country: "United Kingdom",
        code: "gb",
        location: "London, England",
        type: "Federal university",
        mode: "Online & distance",
        courses: ["Law", "Computer science", "Business"],
        description:
            "Long-running distance learning for students worldwide through its Worldwide programmes.",
        domain: "london.ac.uk",
        website: "https://www.london.ac.uk",
        color: "#C8102E",
        image: unsplash(IMG.graduates),
    },
    {
        id: "deakin",
        name: "Deakin University",
        short: "DU",
        region: "World",
        country: "Australia",
        code: "au",
        location: "Geelong, Victoria",
        type: "Public university",
        mode: "Online",
        courses: ["Business", "Information technology", "Health"],
        description:
            "Well-established online study from an Australian university with a strong digital learning focus.",
        domain: "deakin.edu.au",
        website: "https://www.deakin.edu.au",
        color: "#0F766E",
        image: unsplash(IMG.students),
    },
];

const REGIONS = ["All", "India", "World"];

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

function Flag({ code, className = "" }: FlagProps) {
    const [failed, setFailed] = useState(false);
    if (failed) {
        return (
            <span
                className={`inline-flex items-center justify-center rounded-[3px] bg-black/10 px-1 text-[9px] font-bold uppercase ${className}`}
            >
                {code}
            </span>
        );
    }
    return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
            src={`https://flagcdn.com/w40/${code}.png`}
            srcSet={`https://flagcdn.com/w80/${code}.png 2x`}
            width={20}
            height={15}
            alt=""
            loading="lazy"
            onError={() => setFailed(true)}
            className={`h-[15px] w-5 rounded-[3px] object-cover shadow-[0_0_0_1px_rgba(0,0,0,0.12)] ${className}`}
        />
    );
}

/** Photo with a branded gradient fallback so a broken image never leaves a hole. */
function Cover({ src, alt = "", color = "#171717", watermark = "", className = "", priority = false }: CoverProps) {
    const [failed, setFailed] = useState(false);

    if (failed || !src) {
        return (
            <div
                role="img"
                aria-label={alt}
                className={`relative overflow-hidden ${className}`}
                style={{
                    backgroundColor: color,
                    backgroundImage:
                        "linear-gradient(135deg, rgba(255,255,255,0.14) 0%, rgba(0,0,0,0.4) 100%)",
                }}
            >
                <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-[0.18]"
                    style={{
                        backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
                        backgroundSize: "16px 16px",
                    }}
                />
                <span
                    aria-hidden="true"
                    className="absolute -bottom-6 -right-2 select-none text-[120px] font-black leading-none tracking-[-0.08em] text-white/[0.12]"
                >
                    {watermark}
                </span>
            </div>
        );
    }

    return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
            src={src}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            onError={() => setFailed(true)}
            className={`object-cover ${className}`}
        />
    );
}

/** University logo from its domain, falling back to a coloured monogram. */
function LogoTile({ university, size = 72, className = "" }: { university: University; size?: number; className?: string }) {
    const [failed, setFailed] = useState(false);
    const logoSrc =
        university.logo ||
        `https://www.google.com/s2/favicons?domain=${university.domain}&sz=128`;

    return (
        <div
            className={`flex items-center justify-center overflow-hidden rounded-[20px] border-[5px] border-[#fffefa] bg-white shadow-[0_8px_22px_rgba(32,59,55,0.18)] ${className}`}
            style={{ width: size, height: size }}
        >
            {failed ? (
                <span
                    className="text-[17px] font-extrabold tracking-tight"
                    style={{ color: university.color }}
                    aria-hidden="true"
                >
                    {university.short}
                </span>
            ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                    src={logoSrc}
                    alt={`${university.name} logo`}
                    width={size - 26}
                    height={size - 26}
                    loading="lazy"
                    onError={() => setFailed(true)}
                    className="h-[calc(100%-14px)] w-[calc(100%-14px)] object-contain"
                />
            )}
        </div>
    );
}

/* ------------------------------------------------------------------ */
/* University card                                                     */
/* ------------------------------------------------------------------ */

function UniversityCard({ university, saved, onToggleSave, reduceMotion }: {
    university: University;
    saved: boolean;
    onToggleSave: (id: string) => void;
    reduceMotion: boolean | null;
}) {
    const enquiryHref = `/counselling?university=${encodeURIComponent(university.name)}`;

    return (
        <motion.article
            layout={!reduceMotion}
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="group relative flex flex-col overflow-hidden rounded-[28px] border border-[#e3e0d6] bg-[#fffefa] shadow-[0_2px_4px_rgba(32,59,55,0.04),0_14px_34px_rgba(32,59,55,0.06)] transition-[box-shadow,border-color,transform] duration-500 hover:-translate-y-1.5 hover:border-[#77776f]/40 hover:shadow-[0_30px_70px_rgba(32,59,55,0.16)]"
        >
            {/* Campus image */}
            <div className="relative h-[200px] overflow-hidden">
                <Cover
                    src={university.image}
                    alt={`${university.name} campus`}
                    color={university.color}
                    watermark={university.short}
                    className="h-full w-full transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-black/25"
                />

                <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-4">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/25 px-3 py-1.5 text-[12px] font-medium text-white backdrop-blur-md">
                        <Flag code={university.code} />
                        {university.country}
                    </span>

                    <button
                        type="button"
                        onClick={() => onToggleSave(university.id)}
                        aria-pressed={saved}
                        aria-label={
                            saved
                                ? `Remove ${university.name} from shortlist`
                                : `Add ${university.name} to shortlist`
                        }
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/25 text-white backdrop-blur-md transition hover:bg-white hover:text-[#b4233a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        <Heart
                            size={18}
                            className={saved ? "fill-[#e5455e] text-[#e5455e]" : ""}
                        />
                    </button>
                </div>

                <span className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-semibold text-[#171717]">
                    <MonitorPlay size={13} />
                    {university.mode}
                </span>
            </div>

            {/* Logo overlapping the image */}
            <div className="relative z-10 -mt-9 px-6">
                <LogoTile university={university} />
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col px-6 pb-6 pt-4">
                <h3 className="text-[22px] font-semibold leading-[1.15] tracking-[-0.045em] text-[#171717]">
                    {university.name}
                </h3>

                <p className="mt-2 flex items-center gap-2 text-[13px] text-[#6b6d64]">
                    <MapPin size={15} className="shrink-0 text-[#77776f]" />
                    {university.location}
                </p>

                <span className="mt-3 w-fit rounded-full bg-[#77776f]/10 px-3 py-1 text-[12px] font-semibold text-[#1c6b5f]">
                    {university.type}
                </span>

                <p className="mt-4 flex-1 text-[13px] leading-[1.75] text-[#6b6d64]">
                    {university.description}
                </p>

                <ul
                    className="mt-5 flex flex-wrap gap-2"
                    aria-label={`Popular courses at ${university.name}`}
                >
                    {university.courses.map((course) => (
                        <li
                            key={course}
                            className="rounded-full border border-[#e8e6dc] bg-[#f7f5ef] px-3 py-1 text-[12px] font-medium text-[#5f625a]"
                        >
                            {course}
                        </li>
                    ))}
                </ul>

                <div className="mt-6 flex items-center gap-3 border-t border-[#eeece4] pt-5">
                    <Link
                        href={enquiryHref}
                        aria-label={`Enquire about ${university.name}`}
                        className="group/cta flex h-12 flex-1 items-center justify-between rounded-full bg-[#171717] pl-5 pr-1.5 text-[13px] font-semibold text-white transition-colors duration-300 hover:bg-[#77776f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#77776f]"
                    >
                        Enquire now
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition-all duration-300 group-hover/cta:rotate-45 group-hover/cta:bg-white group-hover/cta:text-[#77776f]">
                            <ArrowUpRight size={16} strokeWidth={2.4} />
                        </span>
                    </Link>

                    <a
                        href={university.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit the ${university.name} website (opens in a new tab)`}
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d9d6ca] text-[#171717] transition-colors duration-300 hover:border-[#171717] hover:bg-[#171717]/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#77776f]"
                    >
                        <ExternalLink size={17} />
                    </a>
                </div>
            </div>
        </motion.article>
    );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

const faqs = [
    {
        q: "Are online degrees valid in India?",
        a: "They can be, but only when the university is entitled by the UGC-DEB to offer that specific programme online. Always check the programme's entitlement on the official UGC-DEB website before you pay any fees.",
    },
    {
        q: "Can I study while working?",
        a: "Most online programmes are built for this. Lectures are usually recorded and assessments are scheduled in blocks, but the exact format differs by university, so ask about live sessions and exam dates.",
    },
    {
        q: "Do I need to visit a campus for exams?",
        a: "It depends on the university. Some run exams online with proctoring, others use exam centres. Confirm this before you apply, especially if you live far from a city.",
    },
    {
        q: "Will an online degree be accepted for jobs or further study abroad?",
        a: "Acceptance varies by employer, country and course. If you plan to study or work abroad later, ask the university and the target institution how they treat online qualifications.",
    },
];

const steps = [
    {
        title: "Pick a course and a university",
        text: "Search by university, city or course, and shortlist the options that fit your goals and schedule.",
        icon: Search,
    },
    {
        title: "Check recognition and fees",
        text: "Talk to a CampusSeat counsellor to confirm UGC-DEB entitlement, current fees and admission dates.",
        icon: BadgeCheck,
    },
    {
        title: "Apply and start learning",
        text: "Submit your application, get access to the learning platform and begin at the next intake.",
        icon: Laptop,
    },
];

export default function OnlineUniversitiesPage() {
    const reduceMotion = useReducedMotion();

    const [search, setSearch] = useState("");
    const [region, setRegion] = useState("All");
    const [course, setCourse] = useState("All courses");
    const [saved, setSaved] = useState<string[]>([]);

    // Most common courses become the filter chips.
    const courseChips = useMemo(() => {
        const counts: Record<string, number> = {};
        universities.forEach((u) =>
            u.courses.forEach((c) => {
                counts[c] = (counts[c] || 0) + 1;
            })
        );
        return Object.entries(counts)
            .sort(([, aCount], [, bCount]) => bCount - aCount)
            .slice(0, 8)
            .map(([name]) => name);
    }, []);

    const filtered = useMemo(() => {
        const q = search.trim().toLowerCase();
        return universities.filter((u) => {
            const matchesSearch =
                !q ||
                u.name.toLowerCase().includes(q) ||
                u.location.toLowerCase().includes(q) ||
                u.country.toLowerCase().includes(q) ||
                u.courses.some((c) => c.toLowerCase().includes(q));
            const matchesRegion = region === "All" || u.region === region;
            const matchesCourse = course === "All courses" || u.courses.includes(course);
            return matchesSearch && matchesRegion && matchesCourse;
        });
    }, [search, region, course]);

    const filtersActive = search || region !== "All" || course !== "All courses";

    const clearFilters = () => {
        setSearch("");
        setRegion("All");
        setCourse("All courses");
    };

    const toggleSave = (id: string) =>
        setSaved((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

    const savedNames = universities.filter((u) => saved.includes(u.id)).map((u) => u.name);

    const jumpToResults = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        document.getElementById("explore")?.scrollIntoView({
            behavior: reduceMotion ? "auto" : "smooth",
            block: "start",
        });
    };

    const countryCount = new Set(universities.map((u) => u.country)).size;

    const reveal = (delay = 0): MotionProps =>
        reduceMotion
            ? {}
            : {
                  initial: { opacity: 0, y: 24 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
              };

    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-[#f5f3ed] text-[#171717]">
                {/* ============================ HERO ============================ */}
                <section className="relative overflow-hidden px-5 pb-16 pt-36 sm:px-8 sm:pb-24 sm:pt-44 lg:px-14">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -left-32 -top-24 h-[460px] w-[460px] rounded-full bg-[#77776f]/10 blur-3xl"
                    />
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-20 top-20 h-[380px] w-[380px] rounded-full bg-[#b18b52]/15 blur-3xl"
                    />

                    <div className="relative mx-auto grid max-w-[1500px] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
                        {/* Left: copy */}
                        <div>
                            <motion.p
                                {...reveal(0)}
                                className="mb-7 inline-flex items-center gap-3 text-[13px] font-semibold text-[#82745f]"
                            >
                                <span className="h-px w-10 bg-[#b18b52]" />
                                CampusSeat / Online universities
                            </motion.p>

                            <motion.h1
                                {...reveal(0.08)}
                                className="text-[46px] font-semibold leading-[1.02] tracking-[-0.065em] sm:text-6xl lg:text-[84px]"
                            >
                                Learn from anywhere.
                                <span className="relative mt-1 block w-fit font-serif font-normal italic text-[#77776f]">
                                    Build your future.
                                    <svg
                                        aria-hidden="true"
                                        viewBox="0 0 300 14"
                                        preserveAspectRatio="none"
                                        className="absolute -bottom-2 left-0 h-3 w-full text-[#b18b52]/70"
                                    >
                                        <path
                                            d="M2 9 C 50 2, 100 13, 150 7 S 250 3, 298 8"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </span>
                            </motion.h1>

                            <motion.p
                                {...reveal(0.16)}
                                className="mt-9 max-w-xl text-[16px] leading-[1.85] text-[#6b6d64]"
                            >
                                Compare online and distance-learning universities in India and
                                around the world. Find the course that fits your life, then
                                talk to a counsellor who can check fees and recognition for you.
                            </motion.p>

                            <motion.form
                                {...reveal(0.24)}
                                onSubmit={jumpToResults}
                                role="search"
                                className="mt-9 flex max-w-xl items-center gap-2 rounded-full border border-[#ddd9cd] bg-white p-2 shadow-[0_18px_50px_rgba(32,59,55,0.1)] focus-within:border-[#77776f]"
                            >
                                <label htmlFor="hero-search" className="sr-only">
                                    Search by university, city or course
                                </label>
                                <Search size={19} className="ml-4 shrink-0 text-[#8a897f]" />
                                <input
                                    id="hero-search"
                                    type="text"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Search a university, city or course"
                                    className="h-12 min-w-0 flex-1 bg-transparent text-[15px] outline-none placeholder:text-[#9a998f]"
                                />
                                <button
                                    type="submit"
                                    className="h-12 shrink-0 rounded-full bg-[#171717] px-6 text-[14px] font-semibold text-white transition-colors hover:bg-[#77776f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#77776f]"
                                >
                                    Search
                                </button>
                            </motion.form>

                            <motion.dl
                                {...reveal(0.32)}
                                className="mt-10 flex flex-wrap gap-x-10 gap-y-5"
                            >
                                {[
                                    [universities.length, "universities to compare"],
                                    [countryCount, "countries"],
                                    ["Free", "counselling"],
                                ].map(([value, label]) => (
                                    <div key={label}>
                                        <dt className="text-[34px] font-semibold leading-none tracking-[-0.05em]">
                                            {value}
                                        </dt>
                                        <dd className="mt-1.5 text-[13px] text-[#6b6d64]">{label}</dd>
                                    </div>
                                ))}
                            </motion.dl>
                        </div>

                        {/* Right: image composition */}
                        <motion.div
                            {...reveal(0.2)}
                            className="relative mx-auto h-[440px] w-full max-w-[560px] sm:h-[560px]"
                        >
                            <div className="absolute right-0 top-0 h-[78%] w-[76%] overflow-hidden rounded-[36px] border border-[#e3e0d6] shadow-[0_30px_80px_rgba(32,59,55,0.2)]">
                                <Cover
                                    src={unsplash(IMG.laptop, 1000)}
                                    alt="A student studying online with a laptop"
                                    color="#171717"
                                    watermark="Learn"
                                    priority
                                    className="h-full w-full"
                                />
                            </div>

                            <div className="absolute bottom-0 left-0 h-[46%] w-[52%] overflow-hidden rounded-[30px] border-[6px] border-[#f5f3ed] shadow-[0_24px_60px_rgba(32,59,55,0.2)]">
                                <Cover
                                    src={unsplash(IMG.students, 800)}
                                    alt="Students collaborating"
                                    color="#77776f"
                                    watermark="Study"
                                    className="h-full w-full"
                                />
                            </div>

                            <div className="absolute -left-2 top-[14%] flex items-center gap-3 rounded-2xl border border-white/60 bg-white/85 px-4 py-3 shadow-[0_18px_40px_rgba(32,59,55,0.15)] backdrop-blur-md sm:-left-6">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#77776f]/12 text-[#1c6b5f]">
                                    <CalendarClock size={20} />
                                </span>
                                <div>
                                    <p className="text-[13px] font-semibold leading-tight">
                                        Flexible schedules
                                    </p>
                                    <p className="text-[12px] text-[#6b6d64]">Study around your day</p>
                                </div>
                            </div>

                            <div className="absolute bottom-[8%] right-0 flex items-center gap-3 rounded-2xl border border-white/60 bg-white/85 px-4 py-3 shadow-[0_18px_40px_rgba(32,59,55,0.15)] backdrop-blur-md sm:-right-4">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#b18b52]/15 text-[#8a6a35]">
                                    <Globe2 size={20} />
                                </span>
                                <div>
                                    <p className="text-[13px] font-semibold leading-tight">
                                        India and worldwide
                                    </p>
                                    <p className="text-[12px] text-[#6b6d64]">Compare in one place</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ========================= LOGO STRIP ========================= */}
                <section
                    aria-label="Universities on CampusSeat"
                    className="border-y border-[#e3e0d6] bg-[#fbfaf5]"
                >
                    <div className="mx-auto flex max-w-[1500px] flex-col gap-5 px-5 py-8 sm:px-8 lg:flex-row lg:items-center lg:gap-10 lg:px-14">
                        <p className="shrink-0 text-[13px] font-semibold text-[#82745f]">
                            Universities you can explore
                        </p>
                        <ul className="flex flex-1 flex-wrap items-center gap-x-7 gap-y-4">
                            {universities.map((u) => (
                                <li
                                    key={u.id}
                                    className="flex items-center gap-2.5 opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                                >
                                    <LogoTile
                                        university={u}
                                        size={44}
                                        className="!rounded-xl !border-2 !shadow-none"
                                    />
                                    <span className="text-[13px] font-medium">{u.short}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* ========================== EXPLORER ========================== */}
                <section
                    id="explore"
                    className="mx-auto max-w-[1500px] scroll-mt-28 px-5 py-20 sm:px-8 sm:py-28 lg:px-14"
                >
                    <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                        <div>
                            <h2 className="text-[38px] font-semibold leading-[1.05] tracking-[-0.06em] sm:text-5xl lg:text-[60px]">
                                Explore online{" "}
                                <span className="font-serif font-normal italic text-[#77776f]">
                                    universities
                                </span>
                            </h2>
                            <p className="mt-4 max-w-xl text-[15px] leading-[1.8] text-[#6b6d64]">
                                Filter by region and course, shortlist the ones you like and
                                enquire in a few taps.
                            </p>
                        </div>

                        {saved.length > 0 && (
                            <Link
                                href={`/counselling?universities=${encodeURIComponent(
                                    savedNames.join(",")
                                )}`}
                                className="inline-flex h-12 w-fit items-center gap-3 rounded-full bg-[#171717] px-6 text-[14px] font-semibold text-white transition-colors hover:bg-[#77776f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#77776f]"
                            >
                                <Heart size={16} className="fill-[#e5455e] text-[#e5455e]" />
                                Enquire about {saved.length} shortlisted
                                <ArrowUpRight size={16} />
                            </Link>
                        )}
                    </div>

                    {/* Filters */}
                    <div className="mb-8 rounded-[28px] border border-[#e3e0d6] bg-white/80 p-4 shadow-[0_10px_30px_rgba(32,59,55,0.05)] backdrop-blur sm:p-5">
                        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
                            <div className="relative flex-1">
                                <label htmlFor="university-search" className="sr-only">
                                    Search university, location or course
                                </label>
                                <Search
                                    size={19}
                                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#8a897f]"
                                />
                                <input
                                    id="university-search"
                                    type="text"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Search university, location or course"
                                    className="h-12 w-full rounded-full border border-[#e3e0d6] bg-[#fbfaf5] pl-12 pr-11 text-[14px] outline-none transition placeholder:text-[#9a998f] focus:border-[#77776f] focus:ring-4 focus:ring-[#77776f]/10"
                                />
                                {search && (
                                    <button
                                        type="button"
                                        onClick={() => setSearch("")}
                                        aria-label="Clear search"
                                        className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-[#8a897f] hover:bg-black/5"
                                    >
                                        <X size={15} />
                                    </button>
                                )}
                            </div>

                            <div
                                role="group"
                                aria-label="Filter by region"
                                className="flex w-fit rounded-full border border-[#e3e0d6] bg-[#fbfaf5] p-1"
                            >
                                {REGIONS.map((r) => (
                                    <button
                                        key={r}
                                        type="button"
                                        onClick={() => setRegion(r)}
                                        aria-pressed={region === r}
                                        className={`h-10 rounded-full px-5 text-[13px] font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#77776f] ${
                                            region === r
                                                ? "bg-[#171717] text-white shadow-[0_6px_16px_rgba(32,59,55,0.25)]"
                                                : "text-[#171717] hover:bg-black/5"
                                        }`}
                                    >
                                        {r === "All" ? "All regions" : r}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div
                            role="group"
                            aria-label="Filter by course"
                            className="-mx-4 mt-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                        >
                            {["All courses", ...courseChips].map((c) => (
                                <button
                                    key={c}
                                    type="button"
                                    onClick={() => setCourse(c)}
                                    aria-pressed={course === c}
                                    className={`h-10 shrink-0 rounded-full border px-4 text-[13px] font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#77776f] ${
                                        course === c
                                            ? "border-[#77776f] bg-[#77776f] text-white"
                                            : "border-[#ddd9cd] bg-white text-[#171717] hover:border-[#171717]/50"
                                    }`}
                                >
                                    {c}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mb-6 flex items-center justify-between gap-4">
                        <p className="text-[14px] text-[#6b6d64]" aria-live="polite">
                            {filtered.length} {filtered.length === 1 ? "university" : "universities"}{" "}
                            found
                        </p>
                        {filtersActive && (
                            <button
                                type="button"
                                onClick={clearFilters}
                                className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#77776f] hover:underline"
                            >
                                <X size={14} />
                                Clear filters
                            </button>
                        )}
                    </div>

                    {filtered.length > 0 ? (
                        <motion.div
                            layout={!reduceMotion}
                            className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3"
                        >
                            <AnimatePresence mode="popLayout">
                                {filtered.map((u) => (
                                    <UniversityCard
                                        key={u.id}
                                        university={u}
                                        saved={saved.includes(u.id)}
                                        onToggleSave={toggleSave}
                                        reduceMotion={reduceMotion}
                                    />
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    ) : (
                        <div className="rounded-[28px] border border-dashed border-[#d9d6ca] bg-white/60 px-6 py-20 text-center">
                            <span className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#77776f]/10 text-[#77776f]">
                                <Search size={28} />
                            </span>
                            <h3 className="text-xl font-semibold tracking-[-0.03em]">
                                No universities match your search
                            </h3>
                            <p className="mx-auto mt-2 max-w-md text-[14px] leading-7 text-[#6b6d64]">
                                Try a different university name, city or course, or clear your
                                filters to see everything.
                            </p>
                            <button
                                type="button"
                                onClick={clearFilters}
                                className="mt-6 h-12 rounded-full bg-[#171717] px-7 text-[14px] font-semibold text-white transition-colors hover:bg-[#77776f]"
                            >
                                Clear filters
                            </button>
                        </div>
                    )}

                    <p className="mt-10 max-w-3xl text-[12px] leading-6 text-[#8a897f]">
                        University names and logos belong to their respective owners. Course
                        availability, fees, admission dates and UGC-DEB entitlement change often,
                        so verify them with the university before you apply.
                    </p>
                </section>

                {/* ======================== HOW IT WORKS ======================== */}
                <section className="bg-[#fbfaf5] px-5 py-20 sm:px-8 sm:py-28 lg:px-14">
                    <div className="mx-auto max-w-[1500px]">
                        <h2 className="max-w-2xl text-[36px] font-semibold leading-[1.05] tracking-[-0.06em] sm:text-5xl">
                            From first search to first class,{" "}
                            <span className="font-serif font-normal italic text-[#77776f]">
                                in three steps
                            </span>
                        </h2>

                        <ol className="mt-14 grid gap-6 md:grid-cols-3">
                            {steps.map((step, i) => {
                                const Icon = step.icon;
                                return (
                                    <li
                                        key={step.title}
                                        className="relative overflow-hidden rounded-[28px] border border-[#e3e0d6] bg-white p-8 shadow-[0_10px_30px_rgba(32,59,55,0.05)]"
                                    >
                                        <span
                                            aria-hidden="true"
                                            className="absolute -right-3 -top-6 select-none font-serif text-[130px] italic leading-none text-[#171717]/[0.05]"
                                        >
                                            {i + 1}
                                        </span>
                                        <span className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#171717] text-white">
                                            <Icon size={24} />
                                        </span>
                                        <h3 className="text-[21px] font-semibold leading-[1.2] tracking-[-0.04em]">
                                            {step.title}
                                        </h3>
                                        <p className="mt-3 text-[14px] leading-[1.8] text-[#6b6d64]">
                                            {step.text}
                                        </p>
                                    </li>
                                );
                            })}
                        </ol>
                    </div>
                </section>

                {/* ============================ FAQ ============================ */}
                <section className="mx-auto grid max-w-[1500px] gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:px-14">
                    <div>
                        <h2 className="text-[36px] font-semibold leading-[1.05] tracking-[-0.06em] sm:text-5xl">
                            Before you{" "}
                            <span className="font-serif font-normal italic text-[#77776f]">
                                choose
                            </span>
                        </h2>
                        <p className="mt-5 max-w-sm text-[15px] leading-[1.85] text-[#6b6d64]">
                            A few things worth checking so your online degree works for you
                            after you graduate.
                        </p>
                    </div>

                    <div className="divide-y divide-[#e3e0d6] rounded-[28px] border border-[#e3e0d6] bg-white px-6 shadow-[0_10px_30px_rgba(32,59,55,0.05)] sm:px-8">
                        {faqs.map((item) => (
                            <details key={item.q} className="group py-5">
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[17px] font-semibold tracking-[-0.025em] [&::-webkit-details-marker]:hidden">
                                    {item.q}
                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#ddd9cd] text-[20px] leading-none transition-transform duration-300 group-open:rotate-45">
                                        +
                                    </span>
                                </summary>
                                <p className="mt-3 max-w-2xl text-[14px] leading-[1.85] text-[#6b6d64]">
                                    {item.a}
                                </p>
                            </details>
                        ))}
                    </div>
                </section>

                {/* =========================== CTA =========================== */}
                <section className="relative overflow-hidden bg-[#171717] px-5 py-20 sm:px-8 sm:py-24">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-24 -top-24 h-[380px] w-[380px] rounded-full bg-[#ededE7]/15 blur-3xl"
                    />
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 opacity-[0.07]"
                        style={{
                            backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
                            backgroundSize: "22px 22px",
                        }}
                    />

                    <div className="relative mx-auto flex max-w-[1300px] flex-col items-start justify-between gap-10 md:flex-row md:items-center">
                        <div className="max-w-2xl">
                            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[12px] font-medium text-[#c9dccf]">
                                <GraduationCap size={14} />
                                Not sure which one fits?
                            </p>
                            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-white sm:text-6xl">
                                Get a clear answer
                                <span className="block font-serif font-normal italic text-[#ededE7]">
                                    before you apply.
                                </span>
                            </h2>
                            <p className="mt-6 max-w-xl text-[15px] leading-8 text-[#c2cec7]">
                                A CampusSeat counsellor can compare universities, check
                                recognition and walk you through fees and admission dates, free.
                            </p>
                        </div>

                        <Link
                            href="/counselling"
                            className="group/btn inline-flex w-full items-center justify-between gap-5 rounded-full bg-[#f5f3ed] py-2 pl-7 pr-2 text-[14px] font-bold text-[#171717] transition-colors duration-300 hover:bg-[#ededE7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto sm:min-w-[280px]"
                        >
                            Get free counselling
                            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#171717] text-white transition-transform duration-300 group-hover/btn:rotate-45">
                                <ArrowUpRight size={18} strokeWidth={2.4} />
                            </span>
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}