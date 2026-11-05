



"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    animate,
    motion,
    useReducedMotion,
    useInView,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion";
import {
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    Check,
    ChevronDown,
    Globe2,
    GraduationCap,
    Mail,
    BadgeCheck,
    TrendingUp,
} from "lucide-react";
import Navbar from "../components/Navbar";
import {
    Chip,
    createFadeUp,
    linkStyle,
    PillLink,
    SectionHeading,
} from "../components/homepage/HomepagePrimitives";
import unitedstate from "./images/unitedstate.jpg";
import australia from "./images/australiaimage.jpg";
import germany from "./images/germany.jpg";
import india from "./images/tajmahalimage.jpg";
import {
    homepageFaqs,
    homepageStats,
    industryPartners,
    learningSteps,
    pathwayCards,
    programmeLinks,
    universityPartners,
} from "../data/homepage";

const heroImage =
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2400&q=90";

/* ================================================================== */
/*  Masters' Union style — shared UI pieces                            */
/*  Black / white canvas, one gold accent, pill buttons, italic serif  */
/*  accents, sticky stacked cards and swipe slides.                    */
/* ================================================================== */

const GOLD = "#d6b46c";

function PathwayTrustStrip() {
    const ref = useRef(null);
    const active = useInView(ref, { once: true, amount: 0.8 });

    return (
        <div
            ref={ref}
            role="group"
            className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 border-y border-black/10 py-3 text-[11px] font-semibold text-black/60 sm:text-xs"
            aria-label={`${universityPartners.length} university partners, ${pathwayCards.length} pathways, free counselling`}
        >
            <span className="text-[#171717]">
                <CountUp to={universityPartners.length} active={active} suffix="" /> university partners
            </span>
            <span aria-hidden="true" className="text-[#b8923f]">·</span>
            <span className="text-[#171717]">
                <CountUp to={pathwayCards.length} active={active} suffix="" /> pathways
            </span>
            <span aria-hidden="true" className="text-[#b8923f]">·</span>
            <span>Free counselling</span>
        </div>
    );
}

/** Horizontal swipe slides with arrows + progress bar (scroll-snap). */
function Carousel({ children, label, dark = false }) {
    const reduceMotion = useReducedMotion();
    const ref = useRef(null);
    const [s, setS] = useState({ prev: false, next: true, progress: 0 });

    const update = useCallback(() => {
        const el = ref.current;
        if (!el) return;
        const max = el.scrollWidth - el.clientWidth;
        setS({
            prev: el.scrollLeft > 8,
            next: el.scrollLeft < max - 8,
            progress: max > 0 ? el.scrollLeft / max : 1,
        });
    }, []);

    useEffect(() => {
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, [update]);

    const go = (dir) => {
        const el = ref.current;
        if (!el) return;
        el.scrollBy({
            left: dir * el.clientWidth * 0.8,
            behavior: reduceMotion ? "auto" : "smooth",
        });
    };

    const btn = `flex h-12 w-12 items-center justify-center rounded-full border transition disabled:cursor-not-allowed disabled:opacity-30 ${
        dark
            ? "border-white/25 text-white hover:bg-white hover:text-black"
            : "border-black/20 text-black hover:bg-black hover:text-white"
    } ${linkStyle}`;

    return (
        <div role="region" aria-roledescription="carousel" aria-label={label}>
            <div
                ref={ref}
                onScroll={update}
                className="-mx-1 flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
                {children}
            </div>
            <div className="mt-6 flex items-center gap-6">
                <div
                    className={`h-[3px] flex-1 overflow-hidden rounded-full ${
                        dark ? "bg-white/15" : "bg-black/10"
                    }`}
                >
                    <div
                        className="h-full rounded-full transition-[width] duration-200"
                        style={{
                            width: `${Math.max(10, s.progress * 100)}%`,
                            background: dark ? GOLD : "#000",
                        }}
                    />
                </div>
                <div className="flex gap-2">
                    <button
                        type="button"
                        aria-label="Previous slide"
                        disabled={!s.prev}
                        onClick={() => go(-1)}
                        className={btn}
                    >
                        <ArrowLeft size={18} aria-hidden="true" />
                    </button>
                    <button
                        type="button"
                        aria-label="Next slide"
                        disabled={!s.next}
                        onClick={() => go(1)}
                        className={btn}
                    >
                        <ArrowRight size={18} aria-hidden="true" />
                    </button>
                </div>
            </div>
        </div>
    );
}

/** Cards that stick and stack on top of each other while you scroll. */
function StackedPathways() {
    return (
        <div className="mt-10">
            {pathwayCards.map((pathway, index) => (
                <PathwayCard key={pathway.href} pathway={pathway} index={index} />
            ))}
        </div>
    );
}

function FallbackPhoto({ sources, alt, sizes, priority = false, className = "" }) {
    const [sourceIndex, setSourceIndex] = useState(0);
    const source = sources[sourceIndex];

    if (!source) {
        return (
            <div
                role="img"
                aria-label={alt}
                className={`absolute inset-0 bg-[linear-gradient(135deg,#eee9df,#d8d1c3)] ${className}`}
            />
        );
    }

    return (
        <Image
            key={source}
            src={source}
            alt={alt}
            fill
            sizes={sizes}
            unoptimized
            priority={priority}
            loading={priority ? undefined : "lazy"}
            onError={() =>
                setSourceIndex((current) => Math.min(current + 1, sources.length))
            }
            className={className}
        />
    );
}

function AnimatedStat({ value, active }) {
    const range = value.match(/^(\d+)-(\d+)(.*)$/);
    const single = value.match(/^(\d+)(.*)$/);

    if (range) {
        return (
            <>
                <CountUp to={Number(range[1])} active={active} suffix="" />
                –
                <CountUp to={Number(range[2])} active={active} suffix="" />
                {range[3]}
            </>
        );
    }

    if (single) {
        return (
            <CountUp to={Number(single[1])} active={active} suffix={single[2]} />
        );
    }

    return value;
}

function PathwayCard({ pathway, index }) {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, amount: 0.25 });
    const reduceMotion = useReducedMotion();
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"],
    });
    const imageY = useTransform(scrollYProgress, [0, 1], [-20, 20]);
    const Icon = pathway.icon;
    const anchorId = pathway.href.startsWith("#") && pathway.href !== "#university-partners"
        ? pathway.href.slice(1)
        : undefined;

    return (
        <motion.div
            id={anchorId}
            ref={cardRef}
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
                duration: reduceMotion ? 0 : 0.65,
                delay: reduceMotion ? 0 : index * 0.07,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="sticky mb-6 scroll-mt-24 lg:mb-10"
            style={{ top: `calc(5.5rem + ${index * 0.65}rem)` }}
        >
            <motion.article className={`group/pathway relative grid min-h-0 overflow-hidden rounded-[30px] border border-black/10 bg-white text-[#171717] shadow-[0_20px_65px_rgba(0,0,0,0.14)] ${reduceMotion ? "" : "transition-shadow duration-500 hover:shadow-[0_28px_80px_rgba(0,0,0,0.2)]"} lg:min-h-[510px] lg:grid-cols-[1.08fr_0.92fr]`}>
                <div className="pointer-events-none absolute inset-x-8 top-0 z-30 h-px bg-[#d6b46c] opacity-0 transition-opacity duration-300 group-hover/pathway:opacity-100" />

                <div className="relative order-first aspect-[16/10] min-w-0 overflow-hidden bg-[#171717] lg:order-last lg:aspect-auto lg:min-h-[510px]">
                    <motion.div
                        className="absolute inset-x-0 -top-5 -bottom-5"
                        style={{ y: reduceMotion ? 0 : imageY }}
                    >
                        <FallbackPhoto
                            sources={pathway.image}
                            alt={pathway.imageAlt}
                            sizes="(max-width: 1023px) 100vw, 46vw"
                            className={`object-cover ${reduceMotion ? "" : "transition-transform duration-[1200ms] ease-out group-hover/pathway:scale-[1.04]"}`}
                        />
                    </motion.div>
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/5"
                    />
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-[radial-gradient(55%_45%_at_80%_18%,rgba(214,180,108,0.38),transparent_72%)]"
                    />
                    <span
                        aria-hidden="true"
                        className="absolute -bottom-12 -right-2 select-none font-serif text-[12rem] italic leading-none text-white/10 sm:text-[16rem]"
                    >
                        {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="absolute right-5 top-5 z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d6b46c]/50 bg-black/35 text-[#f0cf82] shadow-lg backdrop-blur-md">
                        <Icon size={22} aria-hidden="true" />
                    </span>
                    <div className="absolute inset-x-4 bottom-4 z-10 rounded-[22px] border border-white/20 bg-black/55 p-4 text-white shadow-[0_16px_50px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:inset-x-6 sm:bottom-6 sm:p-5">
                        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#f0cf82]">
                            {pathway.partner}
                        </p>
                        <p className="mt-1 text-xs text-white/80">{pathway.location}</p>
                        <p className="mt-3 text-xs leading-5 text-white/90">
                            <span className="font-bold text-white">Best for: </span>
                            {pathway.bestFor}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {pathway.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full border border-white/25 bg-white/10 px-2.5 py-1 text-[10px] font-semibold text-white"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="order-last flex min-w-0 flex-col justify-between gap-6 p-5 sm:p-8 lg:order-first lg:p-10 xl:p-12">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <Chip>Pathway {String(index + 1).padStart(2, "0")}</Chip>
                        <span className="rounded-full bg-[#d6b46c]/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#76591f]">
                            {pathway.level}
                        </span>
                    </div>

                    <div>
                        <h3 className="max-w-2xl text-[clamp(1.8rem,3.4vw,3rem)] font-semibold leading-[1.02] tracking-[-0.055em]">
                            {pathway.title}
                        </h3>
                        <p className="mt-3 line-clamp-2 max-w-2xl text-sm leading-6 text-[#62625b] sm:text-base sm:leading-7">
                            {pathway.description}
                        </p>
                    </div>

                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#77776f]">
                            What you get
                        </p>
                        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                            {pathway.highlights.map((highlight) => (
                                <li
                                    key={highlight}
                                    className="flex min-w-0 items-start gap-2 text-xs leading-5 text-[#41413c] sm:text-[13px]"
                                >
                                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#d6b46c]/20 text-[#8a6826]">
                                        <Check size={11} strokeWidth={3} aria-hidden="true" />
                                    </span>
                                    {highlight}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="grid grid-cols-3 divide-x divide-black/10 rounded-2xl border border-black/10 bg-[#f7f6f2] py-3">
                        {pathway.stats.map((stat) => (
                            <div
                                key={stat.label}
                                className="min-w-0 px-2 text-center sm:px-3"
                                role="group"
                                aria-label={`${stat.label}: ${stat.value}`}
                            >
                                <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-[#77776f] sm:text-[10px]">
                                    {stat.label}
                                </p>
                                <p className="mt-1 break-words text-[11px] font-semibold leading-4 text-[#171717] sm:text-xs">
                                    <AnimatedStat value={stat.value} active={isInView} />
                                </p>
                            </div>
                        ))}
                    </div>

                    <PillLink
                        href={pathway.href}
                        variant="dark"
                        className="w-full max-w-[330px]"
                    >
                        Explore {pathway.level} programmes
                    </PillLink>
                </div>
            </motion.article>
        </motion.div>
    );
}

function LearningProgress() {
    const reduceMotion = useReducedMotion();

    return (
        <div className="relative mx-auto mb-8 max-w-[1080px] px-4" aria-hidden="true">
            <div className="absolute inset-x-4 top-1/2 h-px -translate-y-1/2 bg-black/10" />
            <motion.div
                initial={reduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: reduceMotion ? 0 : 1.1, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: "left" }}
                className="absolute inset-x-4 top-1/2 h-px -translate-y-1/2 bg-[#b8923f]"
            />
            <ol className="relative grid grid-cols-6">
                {learningSteps.map((step) => (
                    <li key={step.number} className="flex justify-center">
                        <span className="h-2.5 w-2.5 rounded-full border-2 border-[#b8923f] bg-[#f4f3ee]" />
                    </li>
                ))}
            </ol>
        </div>
    );
}

function LearningStepCard({ step, index }) {
    const reduceMotion = useReducedMotion();
    const Icon = step.icon;

    return (
        <motion.article
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{
                duration: reduceMotion ? 0 : 0.55,
                delay: reduceMotion ? 0 : index * 0.06,
                ease: [0.22, 1, 0.36, 1],
            }}
            className={`group/step flex min-h-[500px] w-[86%] shrink-0 snap-start flex-col overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_14px_42px_rgba(0,0,0,0.07)] sm:w-[46%] lg:w-[31%] ${
                reduceMotion
                    ? ""
                    : "transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(0,0,0,0.13)]"
            }`}
        >
            <div className="relative h-[170px] shrink-0 overflow-hidden bg-[#e8e4dc]">
                <FallbackPhoto
                    sources={step.image}
                    alt={step.imageAlt}
                    sizes="(max-width: 1023px) 86vw, 31vw"
                    className={`object-cover ${reduceMotion ? "" : "transition-transform duration-700 group-hover/step:scale-[1.04]"}`}
                />
                <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-white"
                />
                <span
                    className={`absolute left-5 top-4 font-serif text-6xl italic leading-none text-white drop-shadow-md ${
                        reduceMotion ? "" : "transition-colors duration-300 group-hover/step:text-[#f0cf82]"
                    }`}
                >
                    {step.number}
                </span>
                <span className="absolute right-5 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-white/90 text-[#8a6826] shadow-lg backdrop-blur-md">
                    <Icon size={20} aria-hidden="true" />
                </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
                <div>
                    <h3 className="text-xl font-semibold tracking-[-0.04em] text-[#171717] sm:text-2xl">
                        {step.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-black/60">
                        {step.description}
                    </p>
                </div>
                <div className="mt-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#77776f]">
                        What happens here
                    </p>
                    <ul className="mt-3 space-y-2">
                        {step.bullets.map((bullet) => (
                            <li
                                key={bullet}
                                className="flex items-start gap-2 text-xs leading-5 text-[#41413c]"
                            >
                                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#d6b46c]/20 text-[#8a6826]">
                                    <Check size={11} strokeWidth={3} aria-hidden="true" />
                                </span>
                                {bullet}
                            </li>
                        ))}
                    </ul>
                </div>
                <span className="mt-auto w-fit rounded-full border border-[#b8923f]/25 bg-[#b8923f]/10 px-3 py-1.5 text-[10px] font-bold text-[#76591f]">
                    {step.chip}
                </span>
            </div>
        </motion.article>
    );
}

function UniversityCard({ name, monogram, image, description }) {
    return (
        <article className="group/uni relative flex min-h-[390px] w-[85%] shrink-0 snap-start flex-col overflow-hidden rounded-[28px] border border-black/10 bg-white p-6 text-[#171717] shadow-[0_12px_35px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(0,0,0,0.12)] sm:w-[46%] lg:w-[31%]">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[58%] bg-cover bg-center transition-transform duration-700 group-hover/uni:scale-[1.03]"
                style={{ backgroundImage: `url("${image}")` }}
            />
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[66%] bg-gradient-to-b from-white/5 via-white/25 to-white"
            />
            <div className="relative z-10 flex items-start justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-lg font-bold tracking-[-0.04em] text-[#d6b46c]">
                    {monogram}
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 bg-white/80 transition-transform duration-300 group-hover/uni:rotate-45 group-hover/uni:bg-[#d6b46c]">
                    <ArrowUpRight size={17} aria-hidden="true" />
                </span>
            </div>
            <div className="relative z-10 mt-auto">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-black/50">
                    University partner
                </p>
                <h3 className="mt-2 text-2xl font-semibold leading-tight tracking-[-0.04em]">
                    {name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-black/60">{description}</p>
            </div>
        </article>
    );
}

/* ================================================================== */
/*  CONFIG  — change things here, the layout adapts automatically      */
/* ================================================================== */

const ACCENT = "#b8923f";

/** Height (in rem) of your fixed/floating navbar + a little gap.
 *  Increase this if the section title still hides under the navbar. */
const NAV_OFFSET_REM = 8;

/** How much scroll each country gets in the pinned section (vh). */
const SCROLL_PER_SLIDE_VH = 70;

const DEFAULT_STATS = {
    passed: 500, // displays as "500+"
    passedLabel: "Students passed",
    graphTitle: "Student success growth",
    years: ["2020", "2021", "2022", "2023", "2024", "2025", "2026"],
};

const unsplash = (id) =>
    `https://images.unsplash.com/${id}?auto=format&fit=crop&w=2000&q=85`;

/**
 * images  : list of sources tried in order (local import OR url). If one fails
 *           to load, the next one is used automatically.
 * focus   : CSS object-position for the photo (crop control).
 * growth  : low → high values for the graph (PLACEHOLDERS — use your real data).
 * universities[].logo : optional official logo (local import or url,
 *           e.g. "/logos/mit.png"). If missing, the site favicon is tried,
 *           then a clean monogram — never a grey globe.
 */
const DESTINATIONS = [
    {
        name: "United States",
        short: "USA",
        slug: "usa",
        images: [unitedstate, unsplash("photo-1496442226666-8d4d0e62e6e9")],
        focus: "50% 50%",
        eyebrow: "A WORLD OF OPPORTUNITY",
        description:
            "Discover world-class universities, innovative research and diverse academic opportunities across the United States.",
        growth: [18, 30, 44, 61, 78, 94, 120],
        universities: [
            { mark: "B", name: "Birchwood University", city: "Florida, USA", domain: "birchwood.edu" },
            { mark: "MIT", name: "Massachusetts Institute of Technology", city: "Cambridge, MA", domain: "mit.edu" },
            { mark: "S", name: "University of South Carolina", city: "Columbia", domain: "sc.edu" },
            { mark: "Y", name: "Yale University", city: "New Haven, CT", domain: "yale.edu" },
        ],
    },
    {
        name: "United Arab Emirates",
        short: "UAE",
        slug: "uae",
        images: [
            unsplash("photo-1512453979798-5ea266f8880c"),
            unsplash("photo-1518684079-3c830dcef090"),
        ],
        focus: "50% 60%",
        eyebrow: "TRADITION MEETS INNOVATION",
        description:
            "Explore internationally recognised universities in a dynamic destination connecting global business, culture and innovation.",
        growth: [10, 16, 27, 38, 55, 73, 96],
        universities: [
            { mark: "U", name: "University of Sharjah", city: "Sharjah", domain: "sharjah.ac.ae" },
            { mark: "Z", name: "Zayed University", city: "Abu Dhabi", domain: "zu.ac.ae" },
            { mark: "A", name: "American University of Sharjah", city: "Sharjah", domain: "aus.edu" },
            { mark: "K", name: "Khalifa University", city: "Abu Dhabi", domain: "ku.ac.ae" },
        ],
    },
    {
        name: "France",
        short: "France",
        slug: "france",
        images: [
            unsplash("photo-1502602898657-3e91760cbb34"),
            unsplash("photo-1431274172761-fca41d930114"),
        ],
        focus: "50% 55%",
        eyebrow: "MAKE ROOM FOR WHAT'S NEXT",
        description:
            "Experience exceptional academic traditions, vibrant student cities and internationally respected qualifications.",
        growth: [8, 14, 22, 35, 49, 66, 88],
        universities: [
            { mark: "S", name: "Sorbonne University", city: "Paris", domain: "sorbonne-universite.fr" },
            { mark: "P", name: "Paris-Saclay University", city: "Paris", domain: "universite-paris-saclay.fr" },
            { mark: "E", name: "École Polytechnique", city: "Palaiseau", domain: "polytechnique.edu" },
            { mark: "H", name: "HEC Paris", city: "Jouy-en-Josas", domain: "hec.edu" },
        ],
    },
    {
        name: "Australia",
        short: "Australia",
        slug: "australia",
        images: [australia, unsplash("photo-1506973035872-a4ec16b8e8d9")],
        focus: "50% 50%",
        eyebrow: "LEARN BEYOND LIMITS",
        description:
            "Study in welcoming cities with globally recognised universities and a strong international student community.",
        growth: [14, 25, 36, 52, 70, 91, 112],
        universities: [
            { mark: "M", name: "University of Melbourne", city: "Melbourne", domain: "unimelb.edu.au" },
            { mark: "S", name: "University of Sydney", city: "Sydney", domain: "sydney.edu.au" },
            { mark: "A", name: "Australian National University", city: "Canberra", domain: "anu.edu.au" },
            { mark: "M", name: "Monash University", city: "Melbourne", domain: "monash.edu" },
        ],
    },
    {
        name: "Germany",
        short: "Germany",
        slug: "germany",
        images: [germany, unsplash("photo-1560969184-10fe8719e047")],
        focus: "50% 50%",
        eyebrow: "BUILD YOUR FUTURE HERE",
        description:
            "Explore research-led universities, technical excellence and study opportunities in the heart of Europe.",
        growth: [12, 20, 33, 47, 63, 84, 105],
        universities: [
            { mark: "T", name: "Technical University of Munich", city: "Munich", domain: "tum.de" },
            { mark: "H", name: "Heidelberg University", city: "Heidelberg", domain: "uni-heidelberg.de" },
            { mark: "F", name: "Freie Universität Berlin", city: "Berlin", domain: "fu-berlin.de" },
            { mark: "A", name: "RWTH Aachen University", city: "Aachen", domain: "rwth-aachen.de" },
        ],
    },
    {
        name: "India",
        short: "India",
        slug: "india",
        images: [india, unsplash("photo-1564507592333-c60657eea523")],
        focus: "50% 45%",
        eyebrow: "ROOTED IN EXCELLENCE",
        description:
            "Discover respected institutions, diverse programmes and academic opportunities across India.",
        growth: [20, 29, 41, 53, 68, 85, 101],
        universities: [
            { mark: "I", name: "IIT Bombay", city: "Mumbai", domain: "iitb.ac.in" },
            { mark: "I", name: "IIT Delhi", city: "New Delhi", domain: "iitd.ac.in" },
            { mark: "I", name: "IIM Ahmedabad", city: "Ahmedabad", domain: "iima.ac.in" },
            { mark: "A", name: "Ashoka University", city: "Sonipat", domain: "ashoka.edu.in" },
        ],
    },
];

/* ================================================================== */
/*  Helpers                                                            */
/* ================================================================== */

const toSrc = (s) => (typeof s === "string" ? s : s?.src);

/** Page density by viewport height → keeps the card from overflowing. */
function useDensity() {
    const [h, setH] = useState(900);
    useEffect(() => {
        const update = () => setH(window.innerHeight);
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);
    if (h < 700) return "tight";
    if (h < 830) return "compact";
    return "regular";
}

const DENSITY = {
    regular: {
        graphH: 84,
        showDesc: true,
        showUniHeader: true,
        showCity: true,
        rowPad: "py-2.5",
        title: "xl:text-[2rem]",
        gap: "gap-3.5",
    },
    compact: {
        graphH: 64,
        showDesc: true,
        showUniHeader: true,
        showCity: true,
        rowPad: "py-2",
        title: "xl:text-[1.7rem]",
        gap: "gap-3",
    },
    tight: {
        graphH: 48,
        showDesc: false,
        showUniHeader: false,
        showCity: false,
        rowPad: "py-1.5",
        title: "xl:text-[1.5rem]",
        gap: "gap-2.5",
    },
};

const MONO_COLORS = [
    ["#0f766e", "#14b8a6"],
    ["#1e3a8a", "#3b82f6"],
    ["#7c2d12", "#f97316"],
    ["#4c1d95", "#8b5cf6"],
    ["#831843", "#ec4899"],
    ["#14532d", "#22c55e"],
];

/* ================================================================== */
/*  Building blocks                                                    */
/* ================================================================== */

function CountUp({ to, active, suffix = "+", className = "" }) {
    const reduceMotion = useReducedMotion();
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!active || reduceMotion) return;
        const controls = animate(0, to, {
            duration: 1.6,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
            onUpdate: (v) => setValue(Math.round(v)),
        });
        return () => controls.stop();
    }, [active, to, reduceMotion]);

    return active ? (
        <span className={className}>{reduceMotion ? to : value}{suffix}</span>
    ) : (
        <span className={`invisible ${className}`} aria-hidden="true">
            {to}{suffix}
        </span>
    );
}

/** Low → high growth chart. Measures its container so it always fills the width. */
function GrowthGraph({ data, years, id, active, height }) {
    const reduceMotion = useReducedMotion();
    const wrapRef = useRef(null);
    const [w, setW] = useState(360);

    useEffect(() => {
        const el = wrapRef.current;
        if (!el || typeof ResizeObserver === "undefined") return;
        const ro = new ResizeObserver(([entry]) =>
            setW(Math.max(160, Math.round(entry.contentRect.width)))
        );
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    const H = height;
    const padX = 8;
    const padTop = 10;
    const padBottom = 6;

    const { line, area, points } = useMemo(() => {
        const max = Math.max(...data);
        const min = Math.min(...data);
        const span = max - min || 1;
        const pts = data.map((v, i) => [
            padX + (i / (data.length - 1)) * (w - padX * 2),
            padTop + (1 - (v - min) / span) * (H - padTop - padBottom),
        ]);
        let d = `M ${pts[0][0]} ${pts[0][1]}`;
        for (let i = 1; i < pts.length; i++) {
            const [x0, y0] = pts[i - 1];
            const [x1, y1] = pts[i];
            const cx = (x0 + x1) / 2;
            d += ` C ${cx} ${y0}, ${cx} ${y1}, ${x1} ${y1}`;
        }
        const last = pts[pts.length - 1];
        const first = pts[0];
        return { line: d, area: `${d} L ${last[0]} ${H} L ${first[0]} ${H} Z`, points: pts };
    }, [data, w, H]);

    const last = points[points.length - 1];
    const key = active ? "on" : "off";

    return (
        <div ref={wrapRef} className="w-full">
            <svg
                width={w}
                height={H}
                viewBox={`0 0 ${w} ${H}`}
                className="block overflow-visible"
                role="img"
                aria-label={`Growth rising from ${years[0]} to ${years[years.length - 1]}`}
            >
                <defs>
                    <linearGradient id={`fill-${id}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={ACCENT} stopOpacity="0.3" />
                        <stop offset="100%" stopColor={ACCENT} stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id={`stroke-${id}`} x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#ecd9a8" />
                        <stop offset="100%" stopColor={ACCENT} />
                    </linearGradient>
                </defs>

                {[0.33, 0.66].map((g) => (
                    <line
                        key={g}
                        x1="0"
                        x2={w}
                        y1={H * g}
                        y2={H * g}
                        stroke="#171717"
                        strokeOpacity="0.07"
                        strokeDasharray="3 5"
                    />
                ))}

                <motion.path
                    key={`area-${key}`}
                    d={area}
                    fill={`url(#fill-${id})`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: active ? 1 : 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.9, delay: reduceMotion ? 0 : 0.5 }}
                />
                <motion.path
                    key={`line-${key}`}
                    d={line}
                    fill="none"
                    stroke={`url(#stroke-${id})`}
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: reduceMotion ? 1 : 0 }}
                    animate={{ pathLength: active ? 1 : 0 }}
                    transition={{ duration: reduceMotion ? 0 : 1.4, ease: [0.22, 1, 0.36, 1] }}
                />
                {points.map(([x, y], i) => {
                    const isLast = i === points.length - 1;
                    return (
                        <motion.circle
                            key={`${i}-${key}`}
                            cx={x}
                            cy={y}
                            r={isLast ? 5 : 2.8}
                            fill={isLast ? ACCENT : "#fff"}
                            stroke={ACCENT}
                            strokeWidth="1.6"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: active ? 1 : 0, scale: active ? 1 : 0 }}
                            transition={{
                                delay: reduceMotion ? 0 : 0.25 + i * 0.17,
                                duration: reduceMotion ? 0 : 0.3,
                            }}
                            style={{ transformOrigin: `${x}px ${y}px` }}
                        />
                    );
                })}
                <circle cx={last[0]} cy={last[1]} r="11" fill={ACCENT} opacity="0.14" />
            </svg>

            <div className="mt-1 flex justify-between text-[9px] font-semibold tracking-[0.1em] text-[#77776f]">
                <span>{years[0]}</span>
                <span className="hidden min-[420px]:inline">{years[Math.floor(years.length / 2)]}</span>
                <span>{years[years.length - 1]}</span>
            </div>
        </div>
    );
}

/** Photo with automatic fallback through `sources`. */
function EditorialImage({ sources, alt, focus = "50% 50%", priority = false, className = "" }) {
    const [index, setIndex] = useState(0);
    const src = toSrc(sources[index]);

    return (
        <div
            className={`relative overflow-hidden bg-[#77776f] ${className}`}
            style={{ backgroundImage: "linear-gradient(135deg, #77776f 0%, #171717 100%)" }}
        >
            {src ? (
                <Image
                    key={src}
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 48vw"
                    unoptimized
                    priority={priority}
                    loading={priority ? undefined : "lazy"}
                    onError={() => setIndex((i) => i + 1)}
                    style={{ objectPosition: focus }}
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                />
            ) : (
                <div
                    className="flex h-full w-full items-center justify-center text-white/80"
                    role="img"
                    aria-label={alt}
                >
                    <GraduationCap size={42} aria-hidden="true" />
                </div>
            )}
        </div>
    );
}

/** logo → favicon (hi-res only) → colour monogram. No grey globe. */
function UniLogo({ uni }) {
    const chain = useMemo(() => {
        const list = [];
        if (uni.logo) list.push(toSrc(uni.logo));
        if (uni.domain)
            list.push(
                `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&url=https://${uni.domain}&size=128`
            );
        return list;
    }, [uni]);

    const [i, setI] = useState(0);
    const hash = [...uni.name].reduce((a, c) => a + c.charCodeAt(0), 0);
    const [c1, c2] = MONO_COLORS[hash % MONO_COLORS.length];
    const src = chain[i];

    return (
        <span className="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-full border border-[#e5e5e1] bg-white shadow-sm sm:h-11 sm:w-11">
            {src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                    key={src}
                    src={src}
                    alt={`${uni.name} logo`}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={() => setI((n) => n + 1)}
                    onLoad={(e) => {
                        // tiny favicons look blurry → use the monogram instead
                        if (e.currentTarget.naturalWidth < 40) setI((n) => n + 1);
                    }}
                    className="h-full w-full object-contain p-1.5"
                />
            ) : (
                <span
                    className="grid h-full w-full place-items-center text-[11px] font-bold tracking-tight text-white"
                    style={{ backgroundImage: `linear-gradient(135deg, ${c1}, ${c2})` }}
                    aria-label={uni.name}
                >
                    {uni.mark}
                </span>
            )}
        </span>
    );
}

function UniversityRow({ uni, index, active, density }) {
    const reduceMotion = useReducedMotion();
    return (
        <motion.li
            initial={false}
            animate={{ opacity: active ? 1 : 0, y: active ? 0 : 12 }}
            transition={{
                duration: reduceMotion ? 0 : 0.5,
                delay: reduceMotion ? 0 : 0.25 + index * 0.08,
            }}
            className={`group/uni flex min-w-0 items-center gap-3 rounded-2xl border border-[#e8e7e1] bg-white/85 px-3 transition duration-300 hover:-translate-y-0.5 hover:border-[#b8923f]/40 hover:shadow-[0_10px_30px_rgba(184,146,63,0.12)] ${density.rowPad}`}
        >
            <UniLogo uni={uni} />
            <span className="min-w-0 flex-1">
                <span className="block text-[12px] font-bold leading-tight text-[#171717] sm:text-[13px]">
                    {uni.name}
                </span>
                {density.showCity && (
                    <span className="mt-0.5 block truncate text-[10px] text-[#777]">{uni.city}</span>
                )}
            </span>
            <ArrowUpRight
                size={15}
                aria-hidden="true"
                className="shrink-0 text-[#b5b5ad] transition group-hover/uni:text-[#b8923f]"
            />
        </motion.li>
    );
}

/* ================================================================== */
/*  Country card                                                       */
/* ================================================================== */

function CountryCard({
    country,
    stats,
    heightClass,
    imageHeightClass,
    active = true,
    densityKey = "regular",
    priority = false,
}) {
    const href = `/countries/${country.slug}`;
    const d = DENSITY[densityKey];

    return (
        <article
            className={`group grid w-full grid-cols-1 overflow-hidden rounded-[24px] border border-black/10 bg-white shadow-[0_24px_70px_rgba(0,0,0,0.09)] transition-shadow duration-500 hover:shadow-[0_34px_90px_rgba(0,0,0,0.17)] sm:rounded-[28px] lg:grid-cols-[0.92fr_1.08fr] ${heightClass}`}
        >
            {/* ---------- Image side ---------- */}
            <div className={`relative overflow-hidden bg-[#242424] ${imageHeightClass}`}>
                <EditorialImage
                    sources={country.images}
                    focus={country.focus}
                    priority={priority}
                    alt={`Study destination in ${country.name}`}
                    className="absolute inset-0 h-full w-full"
                />
                <div
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "linear-gradient(to top, rgba(0,0,0,0.84), rgba(0,0,0,0.12) 60%, rgba(0,0,0,0.34))",
                    }}
                />

                <p className="absolute left-4 top-4 z-10 max-w-[55%] rounded-full border border-white/35 bg-black/25 px-3.5 py-2 text-[9px] font-bold tracking-[0.16em] text-white backdrop-blur-md sm:left-6 sm:top-6 sm:text-[10px]">
                    {country.eyebrow}
                </p>

                <div className="absolute right-4 top-4 z-10 flex items-center gap-2.5 rounded-2xl border border-white/25 bg-white/10 px-3.5 py-2 text-white shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:right-6 sm:top-6">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-[#b8923f]">
                        <BadgeCheck size={17} aria-hidden="true" />
                    </span>
                    <span className="leading-none">
                        <CountUp
                            to={stats.passed}
                            active={active}
                            className="block text-lg font-semibold tracking-[-0.04em] sm:text-xl"
                        />
                        <span className="mt-1 block text-[8px] font-bold uppercase tracking-[0.15em] text-white/75">
                            {stats.passedLabel}
                        </span>
                    </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 z-10 p-5 text-white sm:p-8 lg:p-7 xl:p-9">
                    <p className="mb-2 text-[10px] font-bold tracking-[0.2em] text-white/75 sm:text-xs">
                        EXPLORE STUDY DESTINATIONS
                    </p>
                    <h3 className="max-w-[95%] break-words text-[clamp(2.5rem,9vw,5.6rem)] font-semibold leading-[0.88] tracking-[-0.07em] lg:text-[clamp(2.4rem,4vw,4.8rem)]">
                        {country.name}
                    </h3>
                    <Link
                        href={href}
                        className="mt-5 inline-flex min-h-11 items-center gap-3 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#171717] transition hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(255,255,255,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        Explore country <ArrowUpRight size={16} aria-hidden="true" />
                    </Link>
                </div>
            </div>

            {/* ---------- Info side ---------- */}
            <div
                className={`relative flex min-h-0 flex-col justify-center overflow-hidden px-5 py-6 text-[#171717] sm:px-8 lg:px-8 lg:py-5 xl:px-10 ${d.gap}`}
                style={{
                    backgroundImage:
                        "radial-gradient(120% 70% at 100% 0%, rgba(184,146,63,0.09) 0%, rgba(255,255,255,0) 60%), linear-gradient(#fff,#fbfbf8)",
                }}
            >
                <div>
                    <p className="flex items-center gap-2 text-[9px] font-bold tracking-[0.2em] text-[#77776f] sm:text-[10px]">
                        <span className="h-px w-6 bg-[#b8923f]" aria-hidden="true" />
                        YOUR GLOBAL EDUCATION DESTINATION
                    </p>
                    <h4
                        className={`mt-2 text-2xl font-medium leading-tight tracking-[-0.04em] sm:text-3xl ${d.title}`}
                    >
                        Study in {country.name}
                    </h4>
                    {d.showDesc && (
                        <p className="mt-2 max-w-xl text-sm leading-6 text-[#62625b] lg:line-clamp-2">
                            {country.description}
                        </p>
                    )}
                </div>

                {/* Growth graph */}
                <div className="rounded-2xl border border-[#e8e7e1] bg-white p-3.5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] sm:p-4">
                    <div className="mb-2 flex items-center justify-between gap-3">
                        <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#77776f]">
                            {stats.graphTitle}
                        </p>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#b8923f]/10 px-2.5 py-1 text-[10px] font-bold text-[#7a5c1d]">
                            <TrendingUp size={12} aria-hidden="true" />
                            Low → High
                        </span>
                    </div>
                    <GrowthGraph
                        id={country.slug}
                        data={country.growth}
                        years={stats.years}
                        active={active}
                        height={d.graphH}
                    />
                </div>

                {/* Universities */}
                <div>
                    {d.showUniHeader && (
                        <div className="mb-2 flex items-center justify-between">
                            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#77776f]">
                                Leading universities
                            </p>
                            <GraduationCap size={19} aria-hidden="true" className="text-[#555]" />
                        </div>
                    )}
                    <ul className="grid grid-cols-1 gap-2 min-[480px]:grid-cols-2">
                        {country.universities.map((uni, i) => (
                            <UniversityRow
                                key={uni.name}
                                uni={uni}
                                index={i}
                                active={active}
                                density={d}
                            />
                        ))}
                    </ul>
                </div>

                <Link
                    href={href}
                    className="inline-flex min-h-11 w-fit items-center gap-3 rounded-full bg-[#171717] px-6 py-2.5 text-xs font-bold text-white transition hover:-translate-y-1 hover:bg-[#b8923f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#77776f] sm:text-sm"
                >
                    Explore more <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
            </div>
        </article>
    );
}

/* ================================================================== */
/*  Desktop: pinned scroll story                                       */
/* ================================================================== */

function PinnedDestinations({ items, stats, navOffsetRem }) {
    const sectionRef = useRef(null);
    const [active, setActive] = useState(0);
    const reduceMotion = useReducedMotion();
    const densityKey = useDensity();

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    useEffect(() => {
        const update = (p) => {
            const index = Math.min(items.length - 1, Math.max(0, Math.floor(p * items.length)));
            setActive(index);
        };
        update(scrollYProgress.get());
        return scrollYProgress.on("change", update);
    }, [scrollYProgress, items.length]);

    const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
    const barScale = useTransform(smooth, [0, 1], [0.02, 1]);

    const goTo = (i) => {
        const el = sectionRef.current;
        if (!el) return;
        const top = el.getBoundingClientRect().top + window.scrollY;
        const scrollable = el.offsetHeight - window.innerHeight;
        window.scrollTo({
            top: top + ((i + 0.5) / items.length) * scrollable,
            behavior: reduceMotion ? "auto" : "smooth",
        });
    };

    const slideState = (i) => {
        if (i < active) return { x: "-16%", opacity: 0, scale: 0.97 };
        if (i > active) return { x: "16%", opacity: 0, scale: 0.97 };
        return { x: "0%", opacity: 1, scale: 1 };
    };

    return (
        <section
            ref={sectionRef}
            className="relative bg-[#f4f3ee] text-[#171717]"
            style={{ height: `calc(100vh + ${items.length * SCROLL_PER_SLIDE_VH}vh)` }}
        >
            {/* The card fills the space left under the navbar (flex-1), so it can never overflow */}
            <div
                className="sticky top-0 flex h-screen flex-col overflow-hidden"
                style={{ paddingTop: `${navOffsetRem}rem`, paddingBottom: "1rem" }}
            >
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full opacity-40 blur-3xl"
                    style={{ background: "radial-gradient(circle, rgba(184,146,63,0.35), transparent 70%)" }}
                />

                <div className="relative mx-auto mb-3 flex w-[84vw] max-w-[1560px] shrink-0 items-end justify-between gap-8">
                    <div>
                        {densityKey !== "tight" && (
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#77776f]">
                                Study abroad
                            </p>
                        )}
                        <h2 className="mt-1 text-[clamp(1.7rem,2.8vw,2.8rem)] font-semibold leading-[0.95] tracking-[-0.06em]">
                            Choose your next{" "}
                            <span className="font-serif font-normal italic text-[#77776f]">chapter.</span>
                        </h2>
                    </div>

                    <nav
                        aria-label="Study destinations"
                        className="hidden flex-wrap justify-end gap-1 rounded-full border border-black/10 bg-white/70 p-1 shadow-sm backdrop-blur xl:flex"
                    >
                        {items.map((c, i) => (
                            <button
                                key={c.slug}
                                type="button"
                                onClick={() => goTo(i)}
                                aria-current={i === active}
                                className={`rounded-full px-3.5 py-1.5 text-[11px] font-bold tracking-wide transition ${
                                    i === active
                                        ? "bg-[#171717] text-white shadow"
                                        : "text-[#62625b] hover:bg-black/5"
                                }`}
                            >
                                {c.short || c.name}
                            </button>
                        ))}
                    </nav>
                </div>

                <div className="relative mx-auto min-h-0 w-[84vw] max-w-[1560px] flex-1">
                    {items.map((country, i) => (
                        <motion.div
                            key={country.slug}
                            initial={false}
                            animate={slideState(i)}
                            transition={
                                reduceMotion
                                    ? { duration: 0 }
                                    : { duration: 0.75, ease: [0.22, 1, 0.36, 1] }
                            }
                            style={{ pointerEvents: i === active ? "auto" : "none" }}
                            aria-hidden={i !== active}
                            className="absolute inset-0 will-change-transform"
                        >
                            <CountryCard
                                country={country}
                                stats={stats}
                                heightClass="h-full"
                                imageHeightClass="h-full min-h-0"
                                active={i === active}
                                densityKey={densityKey}
                                priority={i === 0}
                            />
                        </motion.div>
                    ))}
                </div>

                <div className="relative mx-auto mt-3 flex w-[84vw] max-w-[1560px] shrink-0 items-center gap-4">
                    <span className="text-[11px] font-bold tabular-nums tracking-[0.14em] text-[#77776f]">
                        {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
                    </span>
                    <div className="h-[3px] flex-1 overflow-hidden rounded-full bg-black/10">
                        <motion.div
                            style={{
                                scaleX: barScale,
                                backgroundImage: `linear-gradient(90deg, #ecd9a8, ${ACCENT})`,
                            }}
                            className="h-full origin-left rounded-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ================================================================== */
/*  Mobile / tablet: swipe carousel                                    */
/* ================================================================== */

function SwipeDestinations({ items, stats }) {
    const scroller = useRef(null);
    const [current, setCurrent] = useState(0);

    const onScroll = () => {
        const el = scroller.current;
        if (!el) return;
        setCurrent(Math.round(el.scrollLeft / el.clientWidth));
    };

    const goTo = (i) => {
        const el = scroller.current;
        if (el) el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
    };

    return (
        <section className="bg-[#f4f3ee] px-4 py-14 text-[#171717] sm:px-6 sm:py-16">
            <div className="mx-auto w-full max-w-[1500px]">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#77776f]">Study abroad</p>
                <h2 className="mb-5 mt-4 text-[clamp(2.8rem,10vw,5rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
                    Choose your next
                    <br />
                    <span className="font-serif font-normal italic text-[#77776f]">chapter.</span>
                </h2>

                <div
                    ref={scroller}
                    onScroll={onScroll}
                    className="flex w-full snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                    {items.map((country, i) => (
                        <div key={country.slug} className="w-full shrink-0 snap-center px-1 pb-4">
                            <CountryCard
                                country={country}
                                stats={stats}
                                heightClass="h-auto"
                                imageHeightClass="h-[46vh] min-h-[320px]"
                                active={i === current}
                                densityKey="regular"
                                priority={i === 0}
                            />
                        </div>
                    ))}
                </div>

                <div className="mt-2 flex items-center justify-center gap-2" role="tablist" aria-label="Destinations">
                    {items.map((c, i) => (
                        <button
                            key={c.slug}
                            type="button"
                            role="tab"
                            aria-selected={i === current}
                            aria-label={c.name}
                            onClick={() => goTo(i)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                                i === current ? "w-8 bg-[#b8923f]" : "w-2 bg-black/20"
                            }`}
                        />
                    ))}
                </div>

                <p className="mt-4 text-center text-[10px] font-semibold tracking-[0.14em] text-[#77776f]">
                    SWIPE LEFT OR RIGHT TO EXPLORE COUNTRIES
                </p>
            </div>
        </section>
    );
}

/* ================================================================== */
/*  Export                                                             */
/* ================================================================== */

export default function HomePage() {
    const reduceMotion = useReducedMotion();
    const [email, setEmail] = useState("");
    const [newsletterStatus, setNewsletterStatus] = useState("");
    const [subscribing, setSubscribing] = useState(false);

    async function subscribe(event) {
        event.preventDefault();
        setNewsletterStatus("");
        setSubscribing(true);
        try {
            const response = await fetch("/api/newsletter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });
            const result = await response.json();
            if (!response.ok) {
                setNewsletterStatus(
                    result.error || "Unable to subscribe right now. Please try again."
                );
                return;
            }
            setEmail("");
            setNewsletterStatus("Thanks — your request for programme updates was received.");
        } catch {
            setNewsletterStatus("Unable to subscribe right now. Please try again.");
        } finally {
            setSubscribing(false);
        }
    }

    const fadeUp = createFadeUp(reduceMotion);

    return (
        <main className="overflow-x-clip bg-white text-black">
            <Navbar
                brandName="CampusSeat"
                brandTagline="A Global Education Ecosystem"
                flush
                appearance="light"
            />

            {/* ============================ HERO ============================ */}
            <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-black px-5 pb-32 pt-32 text-white sm:px-8 lg:px-14 lg:pb-36">
                <Image
                    src={heroImage}
                    alt=""
                    aria-hidden="true"
                    fill
                    sizes="100vw"
                    unoptimized
                    priority
                    className="absolute inset-0 -z-20 h-full w-full object-cover"
                />
                <video
                    aria-hidden="true"
                    autoPlay={!reduceMotion}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster={heroImage}
                    className="absolute inset-0 -z-20 h-full w-full object-cover"
                >
                    <source src="/videos/herosection.mp4" type="video/mp4" />
                </video>
                <div
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,#000_0%,rgba(0,0,0,0.55)_38%,rgba(0,0,0,0.5)_100%)]"
                />
                <div
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_15%_85%,rgba(214,180,108,0.16),transparent_70%)]"
                />

                <motion.div
                    {...(reduceMotion
                        ? {}
                        : {
                              initial: { opacity: 0, y: 28 },
                              animate: { opacity: 1, y: 0 },
                              transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
                          })}
                    className="relative z-10 mx-auto w-full max-w-[1440px]"
                >
                    <Chip light>A Global Education Ecosystem</Chip>
                    <h1 className="mt-7 max-w-5xl text-[clamp(3.1rem,8.2vw,7.6rem)] font-semibold leading-[0.92] tracking-[-0.07em]">
                        Built for the{" "}
                        <span className="block font-serif font-normal italic tracking-[-0.04em] text-[#d6b46c]">
                            Future of Work
                        </span>
                    </h1>
                    <p className="mt-8 max-w-2xl text-base leading-7 text-white/80 sm:text-xl sm:leading-9">
                        Degrees, executive programmes, and industry-certified skills from
                        world-renowned academic and industry partners{" "}
                        <span className="font-semibold text-white">
                            designed for students, professionals, and organizations ready to lead.
                        </span>
                    </p>
                    <div className="mt-10 flex flex-col gap-3 min-[480px]:flex-row">
                        <PillLink href="/programs" variant="white">
                            Explore Programmes
                        </PillLink>
                        <PillLink href="/contact" variant="outline">
                            Talk to an Advisor
                        </PillLink>
                    </div>
                    <p className="mt-9 flex items-center gap-2 text-xs font-medium text-white/65 sm:text-sm">
                        <Globe2 size={16} aria-hidden="true" className="text-[#d6b46c]" />
                        Trusted by learners across 50+ countries
                    </p>
                </motion.div>
                <div
                    aria-hidden="true"
                    className="absolute bottom-24 right-8 hidden items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white/50 lg:flex"
                >
                    Scroll to explore <span className="h-px w-12 bg-white/40" />
                </div>
            </section>

            {/* ======================= INFO STRIP ======================= */}
            <section
                aria-label="CampusSeat in numbers"
                className="relative z-10 mx-auto -mt-16 max-w-[1320px] px-5 sm:px-8 lg:px-14"
            >
                <div className="grid overflow-hidden rounded-[28px] border border-white/10 bg-[#0c0c0c] text-white shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:grid-cols-2 lg:grid-cols-4">
                    {homepageStats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className={`px-7 py-7 sm:px-9 sm:py-8 ${
                                index < homepageStats.length - 1
                                    ? "border-b border-white/10 sm:border-r lg:border-b-0"
                                    : ""
                            } ${index === 1 ? "sm:border-r-0 lg:border-r" : ""} ${
                                index === 2 ? "sm:border-b-0 lg:border-r" : ""
                            }`}
                        >
                            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/45">
                                {stat.label}
                            </p>
                            <p className="mt-3 text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl">
                                {stat.value}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ========================== ABOUT ========================== */}
            <section id="about" className="scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32 lg:px-14">
                <motion.div
                    {...fadeUp}
                    className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-24"
                >
                    <SectionHeading
                        eyebrow="About CampusSeat"
                        title="CampusSeat. Five Pathways."
                        accent="A World of Opportunity."
                    />
                    <div className="space-y-5 text-[15px] leading-8 text-black/65 sm:text-base">
                        <p>
                            CampusSeat is a global education ecosystem built for the way people
                            actually learn and advance today through academic rigor, executive-level
                            thinking, and industry-recognized skills, all under one roof. We bring
                            together six accredited university partners, specialist industry
                            leaders, and a trusted certification framework, so every learner
                            whether pursuing a Doctorate or starting a new career in AI has a clear,
                            credible path forward.
                        </p>
                        <p>
                            From full academic degrees to short, career-ready certifications, every
                            programme on CampusSeat is built around one outcome:{" "}
                            <span className="font-semibold text-black">
                                making our learners more valuable in the market they choose to
                                compete in.
                            </span>
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* ================ PATHWAYS — sticky stacking slides ================ */}
            <section
                id="why-campusseat"
                className="mx-2 scroll-mt-4 rounded-[36px] bg-[#e8e8e5] px-5 pb-24 pt-20 text-[#171717] sm:mx-3 sm:px-8 sm:pb-32 sm:pt-28 lg:rounded-[48px] lg:px-14"
                style={{
                    backgroundImage:
                        "radial-gradient(rgba(23,23,23,0.055) 0.6px, transparent 0.6px)",
                    backgroundSize: "7px 7px",
                }}
            >
                <div className="mx-auto max-w-[1320px]">
                    <motion.div {...fadeUp}>
                        <SectionHeading
                            eyebrow="Why choose CampusSeat"
                            title="A clear path to"
                            accent="what comes next."
                            description="Academic depth, practical learning, and support come together across every pathway."
                        />
                    </motion.div>
                    <PathwayTrustStrip />
                    <StackedPathways />
                </div>
            </section>

            {/* ================ UNIVERSITIES — swipe slides ================ */}
            <section
                id="university-partners"
                className="scroll-mt-4 px-5 py-24 sm:px-8 sm:py-32 lg:px-14"
            >
                <div className="mx-auto max-w-[1320px]">
                    <motion.div
                        {...fadeUp}
                        className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-16"
                    >
                        <SectionHeading
                            eyebrow="Choose your university"
                            title="One Application. Six Universities."
                            accent="Your Choice."
                        />
                        <div>
                            <p className="text-sm leading-7 text-black/60 sm:text-base sm:leading-8">
                                Every Doctorate, Master&apos;s, and Bachelor&apos;s degree at
                                CampusSeat is delivered in partnership with a network of six
                                respected universities. Rather than being assigned a university,
                                you choose the one that fits your goals, your budget, and the
                                recognition you&apos;re looking for with the same admissions and
                                career support behind you no matter which partner you select.
                            </p>
                            <div className="mt-6">
                                <PillLink href="/contact" variant="dark">
                                    Compare University Partners
                                </PillLink>
                            </div>
                        </div>
                    </motion.div>
                    <div className="mt-14">
                        <Carousel label="University partners">
                            {universityPartners.map((partner) => (
                                <UniversityCard key={partner.name} {...partner} />
                            ))}
                        </Carousel>
                    </div>
                </div>
            </section>

            {/* ============ DESTINATIONS — pinned scroll slides ============ */}
            <div id="destinations" className="scroll-mt-0">
                {/* <Destinations /> */}
            </div>

            {/* ================= LEARNING STEPS — swipe slides ================= */}
            <section
                id="how-learning-works"
                className="mx-2 scroll-mt-4 rounded-[36px] bg-white px-5 py-24 text-[#171717] sm:mx-3 sm:px-8 sm:py-32 lg:rounded-[48px] lg:px-14"
            >
                <div className="mx-auto max-w-[1320px]">
                    <motion.div
                        {...fadeUp}
                        className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
                    >
                        <SectionHeading
                            eyebrow="How learning works"
                            title="A supported journey,"
                            accent="at every step."
                        />
                        <p className="max-w-md text-sm leading-7 text-black/60 sm:text-base">
                            From discovering a pathway to moving forward after graduation, support
                            stays with you throughout.
                        </p>
                    </motion.div>
                    <div className="mt-14">
                        <LearningProgress />
                        <Carousel label="Learning journey">
                            {learningSteps.map((step, index) => (
                                <LearningStepCard
                                    key={step.number}
                                    step={step}
                                    index={index}
                                />
                            ))}
                        </Carousel>
                    </div>
                </div>
            </section>

            {/* ================ INDUSTRY PARTNERS — swipe slides ================ */}
            <section
                id="industry-partnerships"
                className="scroll-mt-4 px-5 py-24 sm:px-8 sm:py-32 lg:px-14"
            >
                <div className="mx-auto max-w-[1320px]">
                    <motion.div {...fadeUp}>
                        <SectionHeading
                            eyebrow="Industry partnerships"
                            title="Learning Backed by"
                            accent="the Industry Itself."
                            description="CampusSeat's skill-based programmes are built directly with the organizations that hire for these roles, so every learner graduates with capabilities employers actually need."
                        />
                    </motion.div>
                    <div className="mt-14">
                        <Carousel label="Industry partners">
                            {industryPartners.map((partner, index) => (
                                <article
                                    key={partner.name}
                                    className="group/partner relative flex min-h-[340px] w-[85%] shrink-0 snap-start flex-col overflow-hidden rounded-[28px] border border-black/10 bg-white p-7 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(0,0,0,0.1)] sm:w-[46%] lg:w-[31%] xl:w-[23.5%]"
                                >
                                    <div
                                        aria-hidden="true"
                                        className={`absolute inset-x-0 top-0 h-[58%] bg-cover bg-center transition-transform duration-700 group-hover/partner:scale-[1.03] ${
                                            index === 2 ? "grayscale" : ""
                                        }`}
                                        style={{ backgroundImage: `url("${partner.image}")` }}
                                    />
                                    <div
                                        aria-hidden="true"
                                        className="absolute inset-x-0 top-0 h-[62%] bg-gradient-to-b from-transparent via-white/10 to-white"
                                    />
                                    <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-sm font-bold tracking-wide text-[#d6b46c]">
                                        {partner.monogram}
                                    </span>
                                    <p className="relative z-10 mt-auto pt-10 text-[11px] font-bold uppercase tracking-[0.16em] text-black/50">
                                        {partner.category}
                                    </p>
                                    <h3 className="relative z-10 mt-2 text-2xl font-semibold leading-tight tracking-[-0.04em]">
                                        {partner.name}
                                    </h3>
                                    <p className="relative z-10 mt-3 text-sm leading-6 text-black/60">
                                        {partner.description}
                                    </p>
                                </article>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </section>

            {/* ============================== FAQ ============================== */}
            <section
                id="faqs"
                className="scroll-mt-4 bg-[#f4f4f2] px-5 py-24 sm:px-8 sm:py-32 lg:px-14"
            >
                <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
                    <motion.div {...fadeUp}>
                        <SectionHeading
                            eyebrow="Frequently asked questions"
                            title="A few helpful"
                            accent="answers."
                            description="Learn more about our university network, programmes, and international learning community."
                        />
                    </motion.div>
                    <div className="divide-y divide-black/10 rounded-[28px] bg-white px-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] sm:px-9">
                        {homepageFaqs.map(({ question, answer }) => (
                            <details key={question} className="group py-6">
                                <summary
                                    className={`flex cursor-pointer list-none items-center justify-between gap-5 text-base font-semibold leading-6 tracking-[-0.02em] marker:hidden sm:text-lg [&::-webkit-details-marker]:hidden ${linkStyle}`}
                                >
                                    {question}
                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/15 transition group-open:bg-black group-open:text-white">
                                        <ChevronDown
                                            aria-hidden="true"
                                            size={17}
                                            className="transition-transform duration-300 group-open:rotate-180"
                                        />
                                    </span>
                                </summary>
                                <p className="mt-4 pr-12 text-sm leading-7 text-black/60 sm:text-[15px]">
                                    {answer}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========================= CLOSING CTA ========================= */}
            <section className="relative isolate mx-2 overflow-hidden rounded-[36px] bg-black px-5 py-28 text-white sm:mx-3 sm:px-8 sm:py-36 lg:rounded-[48px] lg:px-14">
                <Image
                    src={heroImage}
                    alt=""
                    aria-hidden="true"
                    fill
                    sizes="100vw"
                    unoptimized
                    className="absolute inset-0 -z-20 h-full w-full object-cover opacity-40"
                />
                <div
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 bg-[radial-gradient(60%_70%_at_50%_100%,rgba(214,180,108,0.25),transparent_70%)]"
                />
                <motion.div
                    {...fadeUp}
                    className="mx-auto flex max-w-4xl flex-col items-center text-center"
                >
                    <Chip light>Start today</Chip>
                    <h2 className="mt-6 text-[clamp(2.6rem,7vw,6rem)] font-semibold leading-[0.95] tracking-[-0.06em]">
                        Ready for your next{" "}
                        <span className="font-serif font-normal italic tracking-[-0.03em] text-[#d6b46c]">
                            chapter?
                        </span>
                    </h2>
                    <p className="mt-6 max-w-xl text-base leading-8 text-white/70">
                        Speak to an admissions advisor and find the programme, university and
                        destination that fit you.
                    </p>
                    <div className="mt-10 flex flex-col gap-3 min-[480px]:flex-row">
                        <PillLink href="/contact" variant="gold">
                            Talk to an Advisor
                        </PillLink>
                        <PillLink href="/programs" variant="outline">
                            Explore Programmes
                        </PillLink>
                    </div>
                </motion.div>
            </section>

            {/* ============================ FOOTER ============================ */}
            <footer className="bg-black px-5 pb-28 pt-20 text-white sm:px-8 lg:px-14">
                <div className="mx-auto max-w-[1320px]">
                    <div className="grid gap-11 border-b border-white/10 pb-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_0.8fr_1.2fr]">
                        <div className="max-w-sm">
                            <Link
                                href="/"
                                aria-label="CampusSeat home"
                                className={`inline-flex items-center gap-3 rounded-xl ${linkStyle}`}
                            >
                                <span className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-white text-black">
                                    <GraduationCap size={23} aria-hidden="true" />
                                </span>
                                <span className="text-xl font-bold tracking-[-0.05em]">
                                    CampusSeat<span className="text-[#d6b46c]">.</span>
                                </span>
                            </Link>
                            <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.15em] text-[#d6b46c]">
                                A Global Education Ecosystem
                            </p>
                            <p className="mt-4 text-sm leading-7 text-white/55">
                                Accredited degrees from six university partners, executive
                                education, and industry-certified skills — delivered through a
                                global network built for your career.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-white/90">
                                Programmes
                            </h2>
                            <ul className="mt-5 space-y-3">
                                {programmeLinks.map((item) => (
                                    <li key={item.label}>
                                        <Link
                                            href={item.href}
                                            className={`text-sm text-white/55 transition hover:text-white ${linkStyle}`}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-white/90">
                                University Partners
                            </h2>
                            <ul className="mt-5 space-y-3">
                                {universityPartners.map((partner) => (
                                    <li key={partner.name} className="text-sm text-white/55">
                                        {partner.name}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-white/90">
                                Company & Resources
                            </h2>
                            <ul className="mt-5 space-y-3">
                                {[
                                    ["About Us", "#about"],
                                    ["Partners", "#university-partners"],
                                    ["Contact", "/contact"],
                                    ["FAQs", "#faqs"],
                                    ["Privacy Policy", "/privacy-policy"],
                                ].map(([label, href]) => (
                                    <li key={label}>
                                        <Link
                                            href={href}
                                            className={`text-sm text-white/55 transition hover:text-white ${linkStyle}`}
                                        >
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold tracking-[-0.03em]">
                                Get programme updates
                            </h2>
                            <p className="mt-2 text-sm leading-6 text-white/55">
                                Get programme updates and global education insights.
                            </p>
                            <form
                                className="mt-5"
                                onSubmit={subscribe}
                                aria-label="Subscribe to programme updates"
                            >
                                <label htmlFor="newsletter-email" className="sr-only">
                                    Email address
                                </label>
                                <div className="flex rounded-full border border-white/20 bg-white/5 p-1.5 focus-within:ring-4 focus-within:ring-[#d6b46c]/25">
                                    <span className="flex items-center pl-3 text-white/50">
                                        <Mail size={17} aria-hidden="true" />
                                    </span>
                                    <input
                                        id="newsletter-email"
                                        type="email"
                                        required
                                        maxLength={254}
                                        autoComplete="email"
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                        placeholder="Your email address"
                                        className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-white outline-none placeholder:text-white/40"
                                    />
                                    <button
                                        type="submit"
                                        disabled={subscribing}
                                        aria-label="Subscribe"
                                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d6b46c] text-black transition hover:bg-white disabled:opacity-60"
                                    >
                                        <ArrowRight size={17} aria-hidden="true" />
                                    </button>
                                </div>
                                {newsletterStatus && (
                                    <p
                                        role="status"
                                        className="mt-3 flex items-start gap-2 text-xs leading-5 text-[#d6b46c]"
                                    >
                                        <Check
                                            size={15}
                                            aria-hidden="true"
                                            className="mt-0.5 shrink-0"
                                        />
                                        {newsletterStatus}
                                    </p>
                                )}
                            </form>
                            <p className="mt-5 text-sm text-white/70">
                                Have a question? Our admissions team is here to help.{" "}
                                <Link
                                    href="/contact"
                                    className={`font-semibold text-white underline decoration-white/35 underline-offset-4 hover:decoration-white ${linkStyle}`}
                                >
                                    Contact Us
                                </Link>
                            </p>
                        </div>
                    </div>

                    <p className="pt-6 text-[11px] leading-6 text-white/40">
                        © CampusSeat. All rights reserved. Academic degrees delivered through
                        our university partner network. Skill-based certifications issued by
                        Braincruise (AI Academy) and VocaTech (Hospitality and Real Estate
                        Academies, KSDA-approved framework).
                    </p>
                </div>
            </footer>
        </main>
    );
}