
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import Navbar from "@/src/components/Navbar";
import { motion } from "framer-motion";
import {
    ArrowRight,
    ArrowUpRight,
    Search,
    MapPin,
    GraduationCap,
    BookOpen,
    Building2,
    Sparkles,
    SlidersHorizontal,
    ShieldCheck,
    ChevronLeft,
    ChevronRight,
    X,
    Star,
    IndianRupee,
    Compass,
    Check,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const image = (id: string, width = 1000) =>
    `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
};

type College = {
    id: number;
    name: string;
    shortName: string;
    location: string;
    type: string;
    courses: string[];
    fees: string;
    rating: number;
    image: string;
    category: string;
    description: string;
};

const colleges: College[] = [
    {
        id: 1,
        name: "Indian Institute of Technology Delhi",
        shortName: "IIT Delhi",
        location: "New Delhi, Delhi",
        type: "Government",
        courses: ["B.Tech", "M.Tech", "PhD"],
        fees: "Varies by programme",
        rating: 4.8,
        image: "photo-1562774053-701939374585",
        category: "Engineering",
        description:
            "Explore engineering, technology and research programmes.",
    },
    {
        id: 2,
        name: "Birla Institute of Technology and Science",
        shortName: "BITS Pilani",
        location: "Pilani, Rajasthan",
        type: "Private",
        courses: ["B.E.", "M.E.", "MBA"],
        fees: "Varies by programme",
        rating: 4.6,
        image: "photo-1564981797816-1043664bf78d",
        category: "Engineering",
        description:
            "Discover academic pathways across science, technology and management.",
    },
    {
        id: 3,
        name: "University of Delhi",
        shortName: "Delhi University",
        location: "New Delhi, Delhi",
        type: "Government",
        courses: ["B.Com", "B.A.", "B.Sc."],
        fees: "Varies by programme",
        rating: 4.5,
        image: "photo-1523050854058-8df90110c9f1",
        category: "Arts & Science",
        description:
            "Explore undergraduate and postgraduate programmes across disciplines.",
    },
    {
        id: 4,
        name: "Amity University",
        shortName: "Amity Noida",
        location: "Noida, Uttar Pradesh",
        type: "Private",
        courses: ["B.Tech", "BCA", "MBA"],
        fees: "Varies by programme",
        rating: 4.2,
        image: "photo-1497366754035-f200968a6e72",
        category: "Management",
        description:
            "Discover programmes across technology, business and other fields.",
    },
    {
        id: 5,
        name: "Jamia Millia Islamia",
        shortName: "Jamia Millia Islamia",
        location: "New Delhi, Delhi",
        type: "Government",
        courses: ["B.Tech", "B.A.", "MCA"],
        fees: "Varies by programme",
        rating: 4.5,
        image: "photo-1541339907198-e08756dedf3f",
        category: "Arts & Science",
        description:
            "Explore academic opportunities across multiple areas of study.",
    },
    {
        id: 6,
        name: "Vellore Institute of Technology",
        shortName: "VIT Vellore",
        location: "Vellore, Tamil Nadu",
        type: "Private",
        courses: ["B.Tech", "M.Tech", "MCA"],
        fees: "Varies by programme",
        rating: 4.4,
        image: "photo-1568792923760-d70635a89fdc",
        category: "Engineering",
        description:
            "Explore technology-focused programmes and academic specialisations.",
    },
];

const categories = [
    {
        number: "01",
        title: "Engineering & Technology",
        description: "Technology, innovation and research.",
        image: "photo-1581091226825-a6a2a5aee158",
        filter: "Engineering",
    },
    {
        number: "02",
        title: "Business & Management",
        description: "Business, leadership and entrepreneurship.",
        image: "photo-1521737711867-e3b97375f902",
        filter: "Management",
    },
    {
        number: "03",
        title: "Arts & Science",
        description: "Discover different academic disciplines.",
        image: "photo-1523050854058-8df90110c9f1",
        filter: "Arts & Science",
    },
];

const featureStories = [
    {
        number: "01",
        label: "FIND YOUR DIRECTION",
        title: "Start with what you want to learn.",
        highlight: "Your interests come first.",
        description:
            "Explore different academic fields, understand available programmes and discover institutions that offer the subjects you want to study.",
        image: "photo-1523240795612-9a054b0db644",
        imageAlt: "Students collaborating on campus",
    },
    {
        number: "02",
        label: "MAKE INFORMED CHOICES",
        title: "Look beyond the college name.",
        highlight: "Compare what matters.",
        description:
            "Consider location, programme availability, eligibility, published fees and the learning environment before creating your shortlist.",
        image: "photo-1562774053-701939374585",
        imageAlt: "University campus architecture",
    },
    {
        number: "03",
        label: "PLAN YOUR NEXT STEP",
        title: "Turn your shortlist into a plan.",
        highlight: "Move forward with clarity.",
        description:
            "Keep your options organised and use official college information to prepare for the next stage of your admission journey.",
        image: "photo-1434030216411-0b793f4b4173",
        imageAlt: "Student planning academic goals",
    },
    {
        number: "04",
        label: "GET SUPPORT",
        title: "Access resources and guidance.",
        highlight: "You're not alone.",
        description:
            "Utilise available support services, from academic advising to career counselling, to help you succeed.",
        image: "photo-1523050854058-8df90110c9f1",
        imageAlt: "Student receiving academic support",
    },
    {
        number: "05",
        label: "EXPLORE STUDY DESTINATIONS",
        title: "Discover global opportunities.",
        highlight: "Expand your horizons.",
        description:

            "Research study destinations, understand cultural and academic differences, and explore international institutions to broaden your educational experience.",
        image: "photo-1503676260728-1c00da094a0b",
        imageAlt: "Students exploring international study options",
    
    },
    {
        number: "06",
        label: "STAY UPDATED",

        title: "Keep track of changes and updates.",
        highlight: "Information evolves.",
        description:
            "Stay informed about programme changes, admission requirements, and deadlines to ensure you have the most current information for your application process.",
        image: "photo-1521737711867-e3b97375f902",
        imageAlt: "Student checking updates on a laptop",

    },
];

function SectionLabel({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
    return (
        <div
            className={`mb-5 inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.18em] ${dark
                    ? "border-white/15 bg-white/10 text-[#b7dfd0]"
                    : "border-teal-700/10 bg-[#e0f4e9] text-[#171717]"
                }`}
        >
            <Sparkles size={13} />
            {children}
        </div>
    );
}

function SectionHeading({
    eyebrow,
    title,
    description,
    dark = false,
    centered = false,
}: {
    eyebrow: ReactNode;
    title: ReactNode;
    description?: ReactNode;
    dark?: boolean;
    centered?: boolean;
}) {
    return (
        <div className={`${centered ? "mx-auto text-center" : ""} max-w-3xl`}>
            <SectionLabel dark={dark}>{eyebrow}</SectionLabel>
            <h2
                className={`text-4xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-5xl lg:text-6xl ${dark ? "text-[#f4f4f0]" : "text-[#171717]"
                    }`}
            >
                {title}
            </h2>
            {description && (
                <p
                    className={`mt-5 max-w-2xl text-sm leading-7 sm:text-base ${dark ? "text-white/60" : "text-[#657970]"
                        } ${centered ? "mx-auto" : ""}`}
                >
                    {description}
                </p>
            )}
        </div>
    );
}

function ImageCard({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
    const [failed, setFailed] = useState(false);

    return (
        <div className={`relative overflow-hidden bg-[#d9e7df] ${className}`}>
            {!failed ? (
                <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    onError={() => setFailed(true)}
                    className="h-full w-full object-cover"
                />
            ) : (
                <div
                    className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#f7f7f4] to-[#f7f7f4] text-[#171717]"
                    role="img"
                    aria-label={alt}
                >
                    <GraduationCap size={34} />
                </div>
            )}
        </div>
    );
}

/* One arrow click moves exactly one card. No autoplay or timer. */
function ManualCarousel<T extends { id?: number | string; title?: string; name?: string }>({
    items,
    renderItem,
    ariaLabel,
}: {
    items: T[];
    renderItem: (item: T, index: number) => ReactNode;
    ariaLabel: string;
}) {
    const trackRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState(0);
    const [maxPosition, setMaxPosition] = useState(0);

    const measure = () => {
        const track = trackRef.current;
        if (!track) return;

        const max = Math.max(0, track.scrollWidth - track.clientWidth);
        setMaxPosition(max);
        setPosition(Math.min(track.scrollLeft, max));
    };

    const move = (direction: number) => {
        const track = trackRef.current;
        if (!track) return;

        const card = track.querySelector("[data-carousel-card]");
        if (!card) return;

        const styles = window.getComputedStyle(track);
        const gap =
            parseFloat(styles.columnGap || styles.gap || "0") || 0;
        const step = card.getBoundingClientRect().width + gap;

        track.scrollBy({
            left: direction * step,
            behavior: "smooth",
        });

        window.setTimeout(() => {
            setPosition(track.scrollLeft);
        }, 350);
    };

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        measure();

        const observer = new ResizeObserver(measure);
        observer.observe(track);

        track.addEventListener("scroll", measure, { passive: true });

        return () => {
            observer.disconnect();
            track.removeEventListener("scroll", measure);
        };
    }, []);

    return (
        <div className="relative">
            <div className="absolute -top-[76px] right-0 z-10 flex gap-2">
                <button
                    type="button"
                    onClick={() => move(-1)}
                    disabled={position <= 2}
                    aria-label={`Previous ${ariaLabel}`}
                    className="grid h-11 w-11 place-items-center rounded-full border border-[#cbded4] bg-[#fffaf2] text-[#171717] transition hover:bg-[#171717] hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
                >
                    <ChevronLeft size={22} />
                </button>

                <button
                    type="button"
                    onClick={() => move(1)}
                    disabled={position >= maxPosition - 2}
                    aria-label={`Next ${ariaLabel}`}
                    className="grid h-11 w-11 place-items-center rounded-full border border-[#cbded4] bg-[#fffaf2] text-[#171717] transition hover:bg-[#171717] hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
                >
                    <ChevronRight size={22} />
                </button>
            </div>

            <div
                ref={trackRef}
                aria-label={ariaLabel}
                className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
                {items.map((item, index) => (
                    <div
                        key={item.id || item.title || item.name || index}
                        data-carousel-card
                        className="w-[82%] shrink-0 snap-start sm:w-[48%] lg:w-[31.5%]"
                    >
                        {renderItem(item, index)}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function CollegesPage() {
    const [search, setSearch] = useState("");
    const [type, setType] = useState("All Colleges");
    const [category, setCategory] = useState("All Categories");

    const filteredColleges = useMemo(() => {
        const query = search.toLowerCase().trim();

        return colleges.filter((college) => {
            const matchesSearch =
                college.name.toLowerCase().includes(query) ||
                college.shortName.toLowerCase().includes(query) ||
                college.location.toLowerCase().includes(query) ||
                college.courses.some((course) =>
                    course.toLowerCase().includes(query)
                );

            const matchesType =
                type === "All Colleges" || college.type === type;

            const matchesCategory =
                category === "All Categories" ||
                college.category === category;

            return matchesSearch && matchesType && matchesCategory;
        });
    }, [search, type, category]);

    const clearFilters = () => {
        setSearch("");
        setType("All Colleges");
        setCategory("All Categories");
    };

    const selectCategory = (value: string) => {
        setCategory(value);
        document
            .getElementById("college-directory")
            ?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <main className="min-h-screen overflow-hidden bg-[#f7f5ee] text-[#171717]">
            <Navbar />

            {/* HERO */}
            {/* <section className="relative px-5 pb-20 pt-12 sm:px-8 lg:px-12 lg:pb-28 lg:pt-16">
                <div className="pointer-events-none absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-[#f7f7f4]/60 blur-3xl" />

                <div className="relative mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        transition={{ duration: 0.65 }}
                    >
                        <SectionLabel>YOUR CAMPUS JOURNEY STARTS HERE</SectionLabel>

                        <p className="mb-5 text-xs font-semibold tracking-wide text-[#809087]">
                            HOME / COLLEGES
                        </p>

                        <h1 className="max-w-3xl text-[clamp(3.5rem,7vw,6.8rem)] font-semibold leading-[0.88] tracking-[-0.075em] text-[#171717]">
                            Find your
                            <span className="block font-serif font-normal italic text-[#77776f]">
                                place to grow.
                            </span>
                        </h1>

                        <p className="mt-8 max-w-xl text-base leading-8 text-[#657970] sm:text-lg">
                            More than a college search. Discover academic
                            possibilities, explore campuses and find a path
                            that feels right for your future.
                        </p>

                        <div className="mt-9 flex flex-wrap gap-3">
                            <a
                                href="#college-directory"
                                className="group inline-flex items-center gap-3 rounded-full bg-[#171717] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#171717]/15 transition hover:-translate-y-1 hover:bg-[#171717]"
                            >
                                Explore colleges
                                <ArrowUpRight
                                    size={18}
                                    className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                            </a>

                            <Link
                                href="/compare"
                                className="inline-flex items-center gap-3 rounded-full border border-[#cbded4] bg-[#fffaf2] px-7 py-4 text-sm font-semibold text-[#171717] transition hover:-translate-y-1 hover:border-[#171717]"
                            >
                                Compare colleges
                                <ArrowRight size={17} />
                            </Link>
                        </div>

                        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-[#dce7df] pt-7">
                            <div>
                                <p className="text-sm font-semibold text-[#171717]">
                                    Discover
                                </p>
                                <p className="mt-1 text-xs text-[#809087]">
                                    Explore institutions
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-[#171717]">
                                    Compare
                                </p>
                                <p className="mt-1 text-xs text-[#809087]">
                                    Review your options
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-[#171717]">
                                    Plan
                                </p>
                                <p className="mt-1 text-xs text-[#809087]">
                                    Choose your next step
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* ASYMMETRIC IMAGE COLLAGE */}
                    {/* <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        className="relative min-h-[470px] sm:min-h-[590px]"
                    >
                        <div className="absolute left-[4%] top-0 h-[76%] w-[76%] overflow-hidden rounded-[28px]">
                            <ImageCard
                                src={image("photo-1562774053-701939374585", 1400)}
                                alt="University campus"
                                className="h-full w-full"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#102b3a]/75 via-transparent to-transparent" />
                            <div className="absolute bottom-8 left-8 max-w-sm text-white">
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                                    Discover your possibilities
                                </p>
                                <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                                    A place to learn.
                                    <br />
                                    A future to build.
                                </h2>
                            </div>
                        </div>

                        <div className="absolute bottom-0 right-0 h-[43%] w-[49%] overflow-hidden rounded-[25px] border-[8px] border-[#f7f5ee] shadow-2xl">
                            <ImageCard
                                src={image("photo-1523240795612-9a054b0db644", 900)}
                                alt="Students working together"
                                className="h-full w-full"
                            />
                        </div>

                        <div className="absolute right-0 top-[9%] max-w-[170px] rotate-3 rounded-[20px] border border-white bg-[#f7f7f4] p-5 shadow-xl sm:right-[1%]">
                            <Compass size={24} className="text-[#6d62a9]" />
                            <p className="mt-4 text-sm font-semibold text-[#171717]">
                                Your goals matter.
                            </p>
                            <p className="mt-2 text-xs leading-5 text-[#657970]">
                                Choose what fits your journey.
                            </p>
                        </div>

                        <div className="absolute bottom-[12%] left-0 flex items-center gap-3 rounded-full border border-[#e1e8e2] bg-[#fffaf2] px-4 py-3 shadow-xl">
                            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#f7f7f4] text-[#171717]">
                                <GraduationCap size={21} />
                            </span>
                            <span>
                                <strong className="block text-xs text-[#171717]">
                                    Explore with clarity
                                </strong>
                                <span className="text-[10px] text-[#809087]">
                                    Your next chapter
                                </span>
                            </span>
                        </div>
                    </motion.div>
                </div> */}
            {/* </section> */} 

            {/* TRUST / DISCOVERY STRIP */}
            <section className="border-y border-[#dce7df] bg-[#e5f2ee]">
                <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-6 px-5 py-8 sm:px-8 md:grid-cols-4 lg:px-12">
                    {([
                        [BookOpen, "Course discovery", "Explore fields of study"],
                        [Building2, "College research", "Compare your options"],
                        [SlidersHorizontal, "Smart filters", "Narrow your search"],
                        [ShieldCheck, "Informed choices", "Verify official details"],
                    ] as [LucideIcon, string, string][]).map(([Icon, title, text]) => (
                        <div key={title} className="flex items-center gap-3">
                            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-[#dce7df] bg-[#fffaf2] text-[#171717]">
                                <Icon size={20} />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-[#304c46]">
                                    {title}
                                </p>
                                <p className="mt-1 text-xs text-[#70817a]">
                                    {text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* COLLEGE CATEGORIES CAROUSEL */}
            <section className="overflow-hidden px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
                <div className="mx-auto max-w-[1440px]">
                    <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                        <SectionHeading
                            eyebrow="EXPLORE BY INTEREST"
                            title={
                                <>
                                    Find the subject.
                                    <br />
                                    <span className="font-serif italic text-[#77776f]">
                                        Find your direction.
                                    </span>
                                </>
                            }
                            description="Start with an area that interests you. Explore academic fields and discover institutions that offer relevant programmes."
                        />
                        <Link
                            href="/courses"
                            className="inline-flex w-fit items-center gap-2 border-b border-[#171717] pb-2 text-sm font-semibold text-[#171717]"
                        >
                            Explore all courses <ArrowUpRight size={17} />
                        </Link>
                    </div>

                    <ManualCarousel
                        items={categories}
                        ariaLabel="College categories"
                        renderItem={(item) => (
                            <button
                                type="button"
                                onClick={() => selectCategory(item.filter)}
                                className="group relative block h-[410px] w-full overflow-hidden rounded-[25px] text-left text-white"
                            >
                                <ImageCard
                                    src={image(item.image, 900)}
                                    alt={item.title}
                                    className="absolute inset-0 h-full w-full transition duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#102b3a]/95 via-[#102b3a]/15 to-transparent" />
                                <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-black/20 px-3 py-2 text-[10px] font-semibold tracking-[0.16em] backdrop-blur">
                                    {item.number} / CATEGORY
                                </span>
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <h3 className="text-2xl font-semibold leading-tight tracking-tight">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 text-sm text-white/75">
                                        {item.description}
                                    </p>
                                    <div className="mt-6 flex items-center justify-between border-t border-white/25 pt-4 text-sm font-semibold">
                                        Explore category
                                        <span className="grid h-10 w-10 place-items-center rounded-full bg-[#d9f99d] text-[#174b43] transition group-hover:rotate-45">
                                            <ArrowUpRight size={20} />
                                        </span>
                                    </div>
                                </div>
                            </button>
                        )}
                    />
                </div>
            </section>

            {/* DARK EDITORIAL OVERLAPPING PANELS */}
            <section className="relative overflow-hidden bg-[#090a09] px-5 py-20 text-[#f4f4f0] sm:px-8 lg:px-12 lg:py-28">
                <div className="pointer-events-none absolute -right-40 top-0 h-[550px] w-[550px] rounded-full bg-neutral-500/[0.08] blur-3xl" />

                <div className="relative mx-auto max-w-[1440px]">
                    <div className="mb-14 max-w-4xl">
                        <SectionLabel dark>
                            A BETTER WAY TO EXPLORE
                        </SectionLabel>
                        <h2 className="text-4xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                            Your next chapter
                            <br />
                            starts with
                            <span className="font-serif font-normal italic text-[#b7dfd0]">
                                {" "}the right choice.
                            </span>
                        </h2>
                        <p className="mt-6 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
                            Finding a college is a journey. Make each step
                            count—from discovering your interests to
                            understanding your options.
                        </p>
                    </div>

                    <div className="space-y-[-1px]">
                        {featureStories.map((story, index) => (
                            <motion.article
                                key={story.number}
                                initial={{ opacity: 0, y: 35 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{ duration: 0.6 }}
                                className={`relative grid items-center gap-7 rounded-[25px] border border-[#e8e8e4] bg-[#fffaf2] p-5 text-[#171717] shadow-[0_20px_70px_rgba(0,0,0,.2)] sm:p-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 lg:p-9 ${index === 1
                                        ? "lg:-mt-5 lg:ml-10"
                                        : index === 2
                                            ? "lg:-mt-5 lg:ml-20"
                                            : ""
                                    }`}
                            >
                                <div className="group relative h-[260px] overflow-hidden rounded-[17px] sm:h-[340px]">
                                    <ImageCard
                                        src={image(story.image, 1200)}
                                        alt={story.imageAlt}
                                        className="h-full w-full transition duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                                    <span className="absolute bottom-5 left-5 rounded-full border border-white/30 bg-black/20 px-4 py-2 text-[10px] font-bold tracking-[0.16em] text-white backdrop-blur">
                                        CAMPUSSEAT JOURNEY / {story.number}
                                    </span>
                                </div>

                                <div className="py-2 lg:py-5">
                                    <span className="inline-flex rounded-full bg-[#e0f4e9] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#171717]">
                                        {story.label}
                                    </span>
                                    <h3 className="mt-6 text-3xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-4xl">
                                        {story.title}
                                        <span className="mt-1 block font-serif font-normal italic text-[#77776f]">
                                            {story.highlight}
                                        </span>
                                    </h3>
                                    <p className="mt-5 max-w-lg text-sm leading-7 text-[#657970]">
                                        {story.description}
                                    </p>
                                    <Link
                                        href={
                                            index === 0
                                                ? "/courses"
                                                : index === 1
                                                    ? "/compare"
                                                    : "/contact"
                                        }
                                        className="mt-7 inline-flex items-center gap-3 text-sm font-bold text-[#171717]"
                                    >
                                        {index === 0
                                            ? "Explore courses"
                                            : index === 1
                                                ? "Compare options"
                                                : "Plan your next step"}
                                        <ArrowUpRight size={18} />
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* COLLEGE DIRECTORY */}
            <section
                id="college-directory"
                className="scroll-mt-20 bg-[#e9f4ee] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
            >
                <div className="mx-auto max-w-[1440px]">
                    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                        <SectionHeading
                            eyebrow="THE COLLEGE DIRECTORY"
                            title={
                                <>
                                    Discover your
                                    <br />
                                    <span className="font-serif italic text-[#77776f]">
                                        next opportunity.
                                    </span>
                                </>
                            }
                            description="Search institutions, explore courses and compare your options. Build a shortlist around what matters to you."
                        />
                        <span className="text-sm font-semibold text-[#657970]">
                            {filteredColleges.length} colleges displayed
                        </span>
                    </div>

                    {/* SEARCH FILTER */}
                    <div className="mt-10 rounded-[24px] border border-[#dce7df] bg-[#fffaf2] p-4 shadow-[0_18px_50px_rgba(18,59,54,.05)] sm:p-6">
                        <div className="grid gap-3 lg:grid-cols-[1fr_210px_230px_auto]">
                            <div className="flex min-h-[58px] items-center gap-3 rounded-xl border border-[#dce7df] bg-[#f1f6ef] px-4 focus-within:border-[#77776f] focus-within:ring-4 focus-within:ring-[#77776f]/10">
                                <Search size={19} className="shrink-0 text-[#809087]" />
                                <input
                                    value={search}
                                    onChange={(event) => setSearch(event.target.value)}
                                    placeholder="Search college, location or course..."
                                    aria-label="Search colleges"
                                    className="w-full bg-transparent text-sm text-[#304c46] outline-none placeholder:text-[#9aa9a1]"
                                />
                            </div>

                            <select
                                value={type}
                                onChange={(event) => setType(event.target.value)}
                                aria-label="Filter by college type"
                                className="min-h-[58px] rounded-xl border border-[#dce7df] bg-[#f1f6ef] px-4 text-sm text-[#77776f] outline-none focus:border-[#77776f]"
                            >
                                <option>All Colleges</option>
                                <option>Government</option>
                                <option>Private</option>
                            </select>

                            <select
                                value={category}
                                onChange={(event) => setCategory(event.target.value)}
                                aria-label="Filter by category"
                                className="min-h-[58px] rounded-xl border border-[#dce7df] bg-[#f1f6ef] px-4 text-sm text-[#77776f] outline-none focus:border-[#77776f]"
                            >
                                <option>All Categories</option>
                                <option>Engineering</option>
                                <option>Management</option>
                                <option>Arts & Science</option>
                            </select>

                            <button
                                type="button"
                                onClick={clearFilters}
                                className="inline-flex min-h-[58px] items-center justify-center gap-2 rounded-xl bg-[#171717] px-6 text-sm font-semibold text-white transition hover:bg-[#171717]"
                            >
                                <X size={17} />
                                Reset
                            </button>
                        </div>

                        <div className="mt-5 flex flex-wrap items-center gap-2">
                            <span className="mr-1 text-xs font-semibold text-[#809087]">
                                Quick filters:
                            </span>
                            {["All Colleges", "Government", "Private"].map(
                                (item) => (
                                    <button
                                        type="button"
                                        key={item}
                                        onClick={() => setType(item)}
                                        className={`rounded-full px-4 py-2 text-xs font-semibold transition ${type === item
                                                ? "bg-[#171717] text-white"
                                                : "bg-[#e9f4ee] text-[#45645a] hover:bg-[#f7f7f4]"
                                            }`}
                                    >
                                        {item}
                                    </button>
                                )
                            )}
                        </div>
                    </div>

                    {/* RESULTS */}
                    <div className="mb-7 mt-12 flex items-end justify-between gap-4">
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#77776f]">
                                YOUR SHORTLIST STARTS HERE
                            </p>
                            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#171717] sm:text-3xl">
                                Explore institutions
                            </h3>
                        </div>
                        <span className="rounded-full bg-[#f7f7f4] px-4 py-2 text-xs font-bold text-[#171717]">
                            {filteredColleges.length} results
                        </span>
                    </div>

                    {filteredColleges.length > 0 ? (
                        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                            {filteredColleges.map((college, index) => (
                                <motion.article
                                    key={college.id}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.12 }}
                                    variants={fadeUp}
                                    transition={{
                                        duration: 0.45,
                                        delay: index * 0.06,
                                    }}
                                    className="group overflow-hidden rounded-[23px] border border-[#dce7df] bg-[#fffaf2] shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#171717]/10"
                                >
                                    <div className="relative h-[230px] overflow-hidden">
                                        <ImageCard
                                            src={image(college.image, 900)}
                                            alt={college.name}
                                            className="h-full w-full transition duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#102b3a]/70 via-transparent to-transparent" />
                                        <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/20 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.13em] text-white backdrop-blur">
                                            {college.type}
                                        </span>
                                        <span className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full bg-[#fffaf2] px-3 py-2 text-xs font-semibold text-[#304c46]">
                                            <Star
                                                size={14}
                                                className="fill-amber-400 text-amber-400"
                                            />
                                            {college.rating}
                                            <span className="font-normal text-[#809087]">
                                                Sample rating
                                            </span>
                                        </span>
                                    </div>

                                    <div className="flex flex-col p-6">
                                        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#77776f]">
                                            {college.shortName}
                                        </p>

                                        <h3 className="mt-3 min-h-[58px] text-xl font-semibold leading-snug tracking-[-0.025em] text-[#171717]">
                                            {college.name}
                                        </h3>

                                        <p className="mt-3 flex items-center gap-2 text-xs text-[#809087]">
                                            <MapPin size={15} />
                                            {college.location}
                                        </p>

                                        <p className="mt-4 min-h-[48px] text-sm leading-6 text-[#657970]">
                                            {college.description}
                                        </p>

                                        <div className="mt-5">
                                            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.15em] text-[#809087]">
                                                Available courses
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {college.courses.map((course) => (
                                                    <span
                                                        key={course}
                                                        className="rounded-lg bg-[#e9f4ee] px-3 py-2 text-xs font-semibold text-[#45645a]"
                                                    >
                                                        {course}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="mt-5 flex items-center gap-2 border-t border-[#e8eee7] pt-5 text-xs text-[#657970]">
                                            <IndianRupee
                                                size={16}
                                                className="text-[#77776f]"
                                            />
                                            Fees: {college.fees}
                                        </div>

                                        <div className="mt-6 grid grid-cols-[1fr_auto] gap-2">
                                            <Link
                                                href="/compare"
                                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#171717] px-4 py-3.5 text-xs font-semibold text-white transition hover:bg-[#171717]"
                                            >
                                                Compare college
                                                <ArrowRight size={15} />
                                            </Link>
                                            <Link
                                                href="/contact"
                                                aria-label={`Enquire about ${college.name}`}
                                                className="grid h-11 w-12 place-items-center rounded-xl border border-[#cbded4] text-[#171717] transition hover:bg-[#f7f7f4]"
                                            >
                                                <ArrowUpRight size={19} />
                                            </Link>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    ) : (
                        <div className="rounded-[24px] border border-[#dce7df] bg-[#fffaf2] px-6 py-20 text-center">
                            <Search
                                size={32}
                                className="mx-auto text-[#77776f]"
                            />
                            <h3 className="mt-5 text-2xl font-semibold text-[#171717]">
                                No matching colleges found
                            </h3>
                            <p className="mt-3 text-sm text-[#809087]">
                                Try another college name, location or course.
                            </p>
                            <button
                                type="button"
                                onClick={clearFilters}
                                className="mt-6 rounded-full bg-[#171717] px-6 py-3 text-sm font-semibold text-white hover:bg-[#171717]"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}

                    <p className="mt-7 text-xs leading-6 text-[#809087]">
                        College information, fees and ratings are illustrative
                        sample content. Verify current details directly with
                        the relevant institution before making decisions.
                    </p>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
                <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[30px] bg-[#171717] px-7 py-14 text-white sm:px-12 lg:px-16 lg:py-20">
                    <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full border border-white/15" />
                    <div className="pointer-events-none absolute -right-5 top-16 h-52 w-52 rounded-full border border-white/15" />

                    <div className="relative max-w-3xl">
                        <SectionLabel dark>
                            YOUR NEXT CHAPTER
                        </SectionLabel>
                        <h2 className="text-4xl font-semibold leading-[1.03] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                            Don&apos;t just find a college.
                            <span className="block font-serif font-normal italic text-[#f7f7f4]">
                                Find your place.
                            </span>
                        </h2>
                        <p className="mt-6 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                            Explore your options, compare what matters and
                            take your next academic step with confidence.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link
                                href="/courses"
                                className="inline-flex items-center gap-3 rounded-full bg-[#fffaf2] px-7 py-4 text-sm font-bold text-[#171717] transition hover:-translate-y-1"
                            >
                                Explore courses
                                <ArrowUpRight size={18} />
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-3 rounded-full border border-white/30 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
                            >
                                Get guidance
                                <ArrowRight size={17} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="border-t border-[#dce7df] bg-[#fffaf2] px-5 py-9 sm:px-8 lg:px-12">
                <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-6 sm:flex-row sm:items-center">
                    <Link href="/" className="flex items-center gap-3">
                        <span className="grid h-11 w-11 place-items-center rounded-full bg-[#171717] text-white">
                            <GraduationCap size={22} />
                        </span>
                        <span>
                            <strong className="block text-xl tracking-tight text-[#171717]">
                                CampusSeat<span className="text-[#77776f]">.</span>
                            </strong>
                            <span className="block text-[9px] font-semibold uppercase tracking-[0.2em] text-[#809087]">
                                Find your way forward
                            </span>
                        </span>
                    </Link>

                    <nav className="flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-[#657970]">
                        <Link href="/" className="hover:text-[#171717]">Home</Link>
                        <Link href="/colleges" className="hover:text-[#171717]">Colleges</Link>
                        <Link href="/courses" className="hover:text-[#171717]">Courses</Link>
                        <Link href="/compare" className="hover:text-[#171717]">Compare</Link>
                        <Link href="/contact" className="hover:text-[#171717]">Contact</Link>
                    </nav>

                    <p className="text-xs text-[#809087]">
                        © 2026 CampusSeat. All rights reserved.
                    </p>
                </div>
            </footer>
        </main>
    );
}
