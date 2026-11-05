"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
    AnimatePresence,
    animate,
    motion,
    useInView,
    useReducedMotion,
    useScroll,
    useTransform,
} from "framer-motion";
import {
    ArrowDown,
    ArrowUpRight,
    Globe2,
} from "lucide-react";
import {
    Chip,
    createFadeUp,
    PillLink,
    SectionHeading,
} from "@/src/components/homepage/HomepagePrimitives";
import {
    aboutHero,
    aboutSections,
    aboutStats,
    aboutValues,
    advisorRegions,
    advisors,
    featuredPartner,
    founders,
    journeyMilestones,
} from "@/src/data/about";

function ImageWithFallback({
    sources,
    alt,
    sizes,
    priority = false,
    className = "",
    grayscale = false,
    colorOnHover = false,
    animateOnHover = true,
}) {
    const [sourceIndex, setSourceIndex] = useState(0);
    const source = sources[sourceIndex];
    const filterClass = grayscale
        ? `grayscale contrast-110 ${animateOnHover ? "transition duration-700" : ""} ${
            animateOnHover
                ? colorOnHover
                    ? "group-hover:grayscale-0"
                    : "group-hover:grayscale-[30%]"
                : ""
        }`
        : "";

    if (!source) {
        return (
            <div
                role="img"
                aria-label={alt}
                className={`absolute inset-0 bg-[linear-gradient(135deg,#d4d4d0,#f4f4f2)] ${className}`}
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
            onError={() => setSourceIndex((index) => Math.min(index + 1, sources.length))}
            className={`object-cover ${filterClass} ${className}`}
        />
    );
}

function Reveal({ children, className = "", delay = 0 }) {
    const reduceMotion = useReducedMotion();
    return (
        <motion.div
            {...createFadeUp(reduceMotion, delay)}
            className={className}
        >
            {children}
        </motion.div>
    );
}

function StatCounter({ stat }) {
    const ref = useRef(null);
    const active = useInView(ref, { once: true, amount: 0.8 });
    const reduceMotion = useReducedMotion();
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!active || reduceMotion || typeof stat.value !== "number") return undefined;

        const controls = animate(0, stat.value, {
            duration: 1.15,
            ease: [0.22, 1, 0.36, 1],
            onUpdate: (current) => setCount(Math.round(current)),
        });
        return () => controls.stop();
    }, [active, reduceMotion, stat.value]);

    const displayedValue =
        reduceMotion || typeof stat.value !== "number" ? stat.value : count;

    return (
        <div ref={ref} className="border-l border-white/15 px-4 first:border-l-0 sm:px-6">
            <p className="text-2xl font-semibold tracking-[-0.05em] text-white sm:text-3xl">
                {active ? (
                    `${typeof displayedValue === "number" ? displayedValue.toLocaleString("en-US") : displayedValue}${stat.suffix}`
                ) : (
                    <span className="invisible" aria-hidden="true">
                        {stat.value}{stat.suffix}
                    </span>
                )}
            </p>
            <p className="mt-1 text-[10px] font-semibold uppercase leading-4 tracking-[0.12em] text-white/60 sm:text-[11px]">
                {stat.label}
            </p>
        </div>
    );
}

function ParallaxImage({ sources, alt, sizes, priority = false, className = "" }) {
    const ref = useRef(null);
    const reduceMotion = useReducedMotion();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], [-20, 20]);

    return (
        <div ref={ref} className={`group relative overflow-hidden ${className}`}>
            <motion.div className="absolute inset-x-0 -top-5 -bottom-5" style={{ y: reduceMotion ? 0 : y }}>
                <ImageWithFallback
                    sources={sources}
                    alt={alt}
                    sizes={sizes}
                    priority={priority}
                    animateOnHover={!reduceMotion}
                    className={reduceMotion ? "" : "group-hover:scale-[1.03]"}
                />
            </motion.div>
        </div>
    );
}

function PartnerFeature() {
    return (
        <section className="bg-[var(--about-section)] px-4 py-16 sm:px-8 sm:py-24 lg:px-14">
            <div className="mx-auto max-w-[1320px]">
                <Reveal>
                    <article className="grid overflow-hidden rounded-[30px] border border-[var(--about-border)] bg-white shadow-[0_24px_70px_rgba(0,0,0,0.1)] lg:grid-cols-[0.9fr_1.1fr]">
                        <ParallaxImage
                            sources={featuredPartner.image}
                            alt={featuredPartner.imageAlt}
                            sizes="(max-width: 1023px) 100vw, 40vw"
                            className="aspect-[4/3] min-h-[300px] lg:aspect-auto lg:min-h-[650px]"
                        />
                        <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
                            <p className="text-[11px] font-bold uppercase tracking-[0.17em] text-[var(--about-copy)]">
                                {featuredPartner.eyebrow}
                            </p>
                            <h2 className="mt-4 text-[clamp(2rem,4vw,3.8rem)] font-semibold leading-[1.02] tracking-[-0.06em] text-[var(--about-black)]">
                                {featuredPartner.title}
                            </h2>
                            {featuredPartner.paragraphs.map((paragraph) => (
                                <p key={paragraph} className="mt-5 text-sm leading-7 text-[var(--about-copy)] sm:text-base">
                                    {paragraph}
                                </p>
                            ))}
                            <blockquote className="mt-8 rounded-[24px] bg-[var(--about-black)] p-6 text-white sm:p-8">
                                <span aria-hidden="true" className="font-serif text-6xl leading-none text-white/50">“</span>
                                <p className="-mt-2 text-lg leading-7 sm:text-xl">{featuredPartner.quote}</p>
                                <footer className="mt-4 text-xs font-semibold text-white/60">{featuredPartner.attribution}</footer>
                            </blockquote>
                            <PillLink
                                href={featuredPartner.href}
                                variant="dark"
                                focusTone="mono"
                                monochrome
                                className="mt-8 w-fit"
                            >
                                {featuredPartner.cta}
                            </PillLink>
                        </div>
                    </article>
                </Reveal>
            </div>
        </section>
    );
}

function FounderCard({ founder, index }) {
    const reversed = index % 2 === 1;
    const reduceMotion = useReducedMotion();
    const reveal = createFadeUp(reduceMotion, index * 0.08);

    return (
        <motion.article
            {...reveal}
            className={`${reduceMotion ? "" : "lg:sticky lg:top-28"} mb-8 overflow-hidden rounded-[30px] border border-[var(--about-border)] bg-white shadow-[0_20px_65px_rgba(0,0,0,0.1)] lg:mb-12`}
            style={reduceMotion ? undefined : { top: `calc(7rem + ${index * 1.25}rem)` }}
        >
            <div className="grid lg:grid-cols-2">
                <div className={`relative aspect-[4/5] overflow-hidden bg-[var(--about-section)] lg:aspect-auto lg:min-h-[620px] ${reversed ? "lg:order-2" : ""}`}>
                    <div className="group absolute inset-0">
                        <ImageWithFallback
                            sources={founder.image}
                            alt={founder.imageAlt}
                            sizes="(max-width: 1023px) 100vw, 50vw"
                            colorOnHover
                            animateOnHover={!reduceMotion}
                        />
                    </div>
                    <span className="absolute bottom-5 left-5 rounded-full border border-white/50 bg-black/55 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md">
                        {founder.eyebrow}
                    </span>
                </div>
                <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
                    <Chip monochrome>{founder.badge}</Chip>
                    <h3 className="mt-5 text-4xl font-semibold tracking-[-0.06em] text-[var(--about-black)] sm:text-5xl">
                        {founder.name}
                    </h3>
                    <p className="mt-2 text-sm font-semibold text-[var(--about-copy)]">{founder.role}</p>
                    {founder.paragraphs.map((paragraph) => (
                        <p key={paragraph} className="mt-5 text-sm leading-7 text-[var(--about-copy)] sm:text-base">
                            {paragraph}
                        </p>
                    ))}
                    <blockquote className="mt-7 border-l-2 border-[var(--about-black)] pl-5 text-base font-medium leading-7 text-[var(--about-copy)]">
                        “{founder.quote}”
                    </blockquote>
                    <a
                        href={founder.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${aboutSections.founderSocialLabel} ${founder.name}`}
                        className="mt-7 grid h-11 w-11 place-items-center rounded-full border border-[var(--about-border)] text-[var(--about-black)] transition hover:bg-[var(--about-black)] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--about-muted)]"
                    >
                        <span aria-hidden="true" className="text-sm font-bold tracking-[-0.06em]">in</span>
                    </a>
                </div>
            </div>
        </motion.article>
    );
}

function AdvisorCard({ advisor, index }) {
    const reduceMotion = useReducedMotion();

    return (
        <motion.article
            layout
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: reduceMotion ? 0 : 0.35, delay: reduceMotion ? 0 : index * 0.035 }}
            whileHover={reduceMotion ? undefined : { y: -6 }}
            className="group relative overflow-hidden rounded-[26px] border border-[var(--about-border)] bg-white shadow-[0_12px_35px_rgba(0,0,0,0.06)]"
        >
            <div className="group relative aspect-square overflow-hidden bg-[var(--about-page)]">
                <ImageWithFallback
                    sources={advisor.image}
                    alt={advisor.imageAlt}
                    sizes="(max-width: 639px) 90vw, (max-width: 1023px) 44vw, 23vw"
                    colorOnHover
                    animateOnHover={!reduceMotion}
                    className={reduceMotion ? "" : "group-hover:scale-[1.04]"}
                />
                <motion.div
                    className={`absolute inset-x-0 bottom-0 bg-[var(--about-black)]/90 p-4 text-white backdrop-blur-sm ${
                        reduceMotion ? "" : "translate-y-full transition-transform duration-300 group-hover:translate-y-0 group-focus-within:translate-y-0"
                    }`}
                >
                    <p className="line-clamp-1 text-xs text-white/85">{advisor.bio}</p>
                    <a
                        href={advisor.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-white underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        {aboutSections.faculty.socialLabel} <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                </motion.div>
            </div>
            <div className="p-4">
                <h3 className="text-base font-semibold tracking-[-0.03em] text-[var(--about-black)]">{advisor.name}</h3>
                <p className="mt-1 min-h-10 text-xs leading-5 text-[var(--about-copy)]">{advisor.role}</p>
                <p className="mt-3 flex items-center gap-2 text-[11px] font-semibold text-[var(--about-copy)]">
                    <Globe2 size={14} aria-hidden="true" className="shrink-0 text-[var(--about-copy)]" />
                    {advisor.country}
                </p>
            </div>
        </motion.article>
    );
}

function FacultySection() {
    const [region, setRegion] = useState("All");
    const visibleAdvisors = region === advisorRegions[0]
        ? advisors
        : advisors.filter((advisor) => advisor.region === region);

    return (
        <section
            className="relative overflow-hidden bg-[var(--about-section)] px-5 py-20 sm:px-8 sm:py-28 lg:px-14"
            style={{
                backgroundImage: "radial-gradient(rgba(10,10,10,0.04) 0.6px, transparent 0.6px)",
                backgroundSize: "7px 7px",
            }}
        >
            <div className="relative mx-auto max-w-[1320px]">
                <Reveal className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end">
                    <SectionHeading {...aboutSections.faculty} monochrome />
                    <p className="max-w-xl text-sm leading-7 text-[var(--about-copy)] sm:text-base">
                        {aboutSections.faculty.note}
                    </p>
                </Reveal>

                <div className="mt-9 flex flex-wrap gap-2" role="group" aria-label={aboutSections.faculty.filterLabel}>
                    {advisorRegions.map((item) => (
                        <button
                            key={item}
                            type="button"
                            aria-pressed={region === item}
                            onClick={() => setRegion(item)}
                            className={`rounded-full border px-4 py-2 text-xs font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--about-black)] ${
                                region === item
                                    ? "border-[var(--about-black)] bg-[var(--about-black)] text-white"
                                    : "border-[var(--about-border)] bg-white text-[var(--about-copy)] hover:border-[var(--about-black)]"
                            }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                <motion.div layout className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <AnimatePresence mode="popLayout">
                        {visibleAdvisors.map((advisor, index) => (
                            <AdvisorCard key={advisor.name} advisor={advisor} index={index} />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}

function ValuesSection() {
    const reduceMotion = useReducedMotion();
    return (
        <section className="bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-14">
            <div className="mx-auto max-w-[1320px]">
                <Reveal>
                    <SectionHeading {...aboutSections.values} monochrome />
                </Reveal>
                <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {aboutValues.map((value, index) => {
                        const Icon = value.icon;
                        return (
                            <motion.article
                                key={value.number}
                                {...createFadeUp(reduceMotion, index * 0.06)}
                                className={`group relative min-h-[290px] overflow-hidden rounded-[28px] border border-[var(--about-border)] bg-white p-6 shadow-[0_12px_35px_rgba(0,0,0,0.05)] ${
                                    reduceMotion ? "" : "transition hover:-translate-y-1.5 hover:shadow-[0_22px_55px_rgba(0,0,0,0.1)]"
                                }`}
                            >
                                <div className="absolute inset-x-5 top-0 h-px bg-[var(--about-black)] opacity-0 transition-opacity group-hover:opacity-100" />
                                <span aria-hidden="true" className="absolute -bottom-10 -right-2 font-serif text-[10rem] italic leading-none text-black/[0.035]">
                                    {value.number}
                                </span>
                                <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-[var(--about-border)] text-[var(--about-black)]">
                                    <Icon size={21} aria-hidden="true" />
                                </div>
                                <h3 className="relative mt-12 text-xl font-semibold tracking-[-0.04em] text-[var(--about-black)]">
                                    {value.title}
                                </h3>
                                <p className="relative mt-3 text-sm leading-6 text-[var(--about-copy)]">
                                    {value.description}
                                </p>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function JourneySection() {
    const reduceMotion = useReducedMotion();
    return (
        <section className="bg-[var(--about-page)] px-5 py-20 sm:px-8 sm:py-28 lg:px-14">
            <div className="mx-auto max-w-[1320px]">
                <Reveal>
                    <SectionHeading {...aboutSections.journey} monochrome />
                </Reveal>
                <ol className="relative mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
                    <div aria-hidden="true" className="absolute left-4 top-4 hidden h-px w-[calc(100%-2rem)] bg-[var(--about-black)]/20 lg:block" />
                    {journeyMilestones.map((milestone, index) => (
                        <motion.li
                            key={milestone.title}
                            {...createFadeUp(reduceMotion, index * 0.06)}
                            className="relative pt-1 lg:pt-0"
                        >
                            <span className="relative z-10 block h-7 w-7 rounded-full border-[6px] border-[var(--about-page)] bg-[var(--about-black)] shadow-[0_0_0_1px_rgba(10,10,10,0.25)]" />
                            <article className="mt-5 min-h-40 rounded-[24px] border border-[var(--about-border)] bg-white p-5 shadow-[0_12px_35px_rgba(0,0,0,0.05)]">
                                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--about-copy)]">
                                    {String(index + 1).padStart(2, "0")}
                                </p>
                                <h3 className="mt-3 text-lg font-semibold leading-tight tracking-[-0.04em] text-[var(--about-black)]">{milestone.title}</h3>
                                <p className="mt-2 text-xs leading-5 text-[var(--about-copy)]">{milestone.description}</p>
                            </article>
                        </motion.li>
                    ))}
                </ol>
            </div>
        </section>
    );
}

export default function AboutUsClient() {
    const reduceMotion = useReducedMotion();

    return (
        <>
            <main className="overflow-x-clip bg-[var(--about-page)] pt-[100px] text-[var(--about-black)]">
                <section className="w-full overflow-hidden bg-[var(--about-black)] text-white">
                    <div className="group/hero relative isolate flex min-h-[760px] flex-col justify-between overflow-hidden px-5 pb-6 pt-16 sm:px-8 sm:pt-20 lg:min-h-[min(900px,calc(100svh-112px))] lg:px-14 lg:pt-24">
                        <div className="absolute inset-0 -z-20">
                            <ImageWithFallback
                                sources={aboutHero.image}
                                alt={aboutHero.imageAlt}
                                sizes="100vw"
                                priority
                                className={`${
                                    reduceMotion ? "" : "transition-transform duration-700 group-hover/hero:scale-[1.02]"
                                } object-[center_65%]`}
                            />
                        </div>
                        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[var(--about-black)]/70 via-[var(--about-black)]/35 to-transparent" />
                        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[var(--about-black)]/35 via-transparent to-transparent" />

                        <motion.div
                            {...(reduceMotion ? {} : {
                                initial: { opacity: 0, y: 24 },
                                animate: { opacity: 1, y: 0 },
                                transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                            })}
                            className="mx-auto flex w-full max-w-[1320px] flex-1 items-center py-16 lg:py-20"
                        >
                            <div className="max-w-4xl">
                                <Chip light monochrome>{aboutHero.eyebrow}</Chip>
                                <h1 className="mt-7 text-[clamp(3rem,8vw,7.5rem)] font-semibold leading-[0.94] tracking-[-0.075em]">
                                    {aboutHero.title}{" "}
                                    <span className="font-serif font-normal italic tracking-[-0.045em] text-[var(--about-accent-dark)]">
                                        {aboutHero.accent}
                                    </span>
                                </h1>
                                <p className="mt-7 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                                    {aboutHero.description}
                                </p>
                                <div className="mt-9 flex flex-col gap-3 min-[480px]:flex-row">
                                    <PillLink href={aboutHero.programmeHref} variant="white" focusTone="mono-light" monochrome>
                                        {aboutHero.programmeCta}
                                    </PillLink>
                                    <PillLink href={aboutHero.counsellingHref} variant="outline" focusTone="mono-light" monochrome>
                                        {aboutHero.counsellingCta}
                                    </PillLink>
                                </div>
                                <a
                                    href="#featured-partner"
                                    className="mt-8 inline-flex items-center gap-2 text-xs font-semibold text-white/60 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                                >
                                    {aboutHero.scrollCta} <ArrowDown size={15} aria-hidden="true" />
                                </a>
                            </div>
                        </motion.div>

                        <div className="mx-auto grid w-full max-w-[1320px] grid-cols-2 gap-y-5 border-t border-white/20 pt-5 sm:grid-cols-4 sm:gap-y-0">
                            {aboutStats.map((stat) => <StatCounter key={stat.label} stat={stat} />)}
                        </div>
                    </div>
                </section>

                <div id="featured-partner" className="scroll-mt-24">
                    <PartnerFeature />
                </div>

                <section className="bg-[var(--about-page)] px-4 py-20 sm:px-8 sm:py-28 lg:px-14">
                    <div className="mx-auto max-w-[1320px]">
                        <Reveal>
                            <SectionHeading {...aboutSections.founders} monochrome />
                        </Reveal>
                        <div className="mt-12">
                            {founders.map((founder, index) => (
                                <FounderCard key={founder.name} founder={founder} index={index} />
                            ))}
                        </div>
                    </div>
                </section>

                <FacultySection />
                <ValuesSection />
                <JourneySection />

                <section className="mx-2 my-3 overflow-hidden rounded-[36px] bg-[var(--about-black)] px-5 py-20 text-white sm:mx-3 sm:px-8 sm:py-28 lg:rounded-[48px] lg:px-14">
                    <Reveal className="mx-auto max-w-[1200px]">
                        <Chip light monochrome>{aboutSections.closing.eyebrow}</Chip>
                        <h2 className="mt-6 max-w-5xl text-[clamp(2.4rem,6vw,5.5rem)] font-semibold leading-[1] tracking-[-0.06em]">
                            {aboutSections.closing.statement}{" "}
                            <span className="font-serif font-normal italic text-[var(--about-accent-dark)]">
                                {aboutSections.closing.accent}
                            </span>
                        </h2>
                        <div className="mt-9 flex flex-col gap-3 min-[480px]:flex-row">
                            <PillLink href="/programs" variant="white" focusTone="mono-light" monochrome>
                                {aboutSections.closing.programmeCta}
                            </PillLink>
                            <PillLink href="/contact" variant="outline" focusTone="mono-light" monochrome>
                                {aboutSections.closing.counsellingCta}
                            </PillLink>
                        </div>
                    </Reveal>
                </section>

                <p className="mx-auto max-w-[1320px] px-5 pb-8 pt-5 text-xs leading-5 text-[var(--about-copy)] sm:px-8 lg:px-14">
                    {aboutSections.disclaimer}
                </p>
            </main>
        </>
    );
}
