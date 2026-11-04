// import Link from "next/link";
// import { ArrowRight, MapPin } from "lucide-react";

// const destinations = [
//     ["United States", "usa"],
//     ["United Kingdom", "uk"],
//     ["Canada", "canada"],
//     ["Australia", "australia"],
//     ["Germany", "germany"],
//     ["France", "france"],
//     ["Ireland", "ireland"],
//     ["New Zealand", "new-zealand"],
//     ["Singapore", "singapore"],
//     ["Japan", "japan"],
//     ["South Korea", "south-korea"],
//     ["China", "china"],
//     ["Malaysia", "malaysia"],
//     ["United Arab Emirates", "uae"],
//     ["Netherlands", "netherlands"],
//     ["Switzerland", "switzerland"],
//     ["Sweden", "sweden"],
//     ["Finland", "finland"],
//     ["Denmark", "denmark"],
//     ["Norway", "norway"],
//     ["Italy", "italy"],
//     ["Spain", "spain"],
//     ["Portugal", "portugal"],
//     ["Belgium", "belgium"],
//     ["Austria", "austria"],
//     ["Poland", "poland"],
//     ["Czech Republic", "czech-republic"],
//     ["Hungary", "hungary"],
//     ["Turkey", "turkey"],
//     ["South Africa", "south-africa"],
//     ["Brazil", "brazil"],
//     ["India", "india"],
//     ["Saudi Arabia", "saudi-arabia"],
//     ["Thailand", "thailand"],
//     ["Indonesia", "indonesia"],
// ];

// export default function CountriesPage() {
//     return (
//         <main className="min-h-screen bg-[#f7f5ed] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
//             <div className="mx-auto max-w-[1200px]">
//                 <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#171717]">Study abroad</p>
//                 <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-[-0.05em] text-[#171717] sm:text-7xl">Explore your study destinations.</h1>
//                 <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//                     {destinations.map(([name, slug]) => (
//                         <Link key={slug} href={`/countries/${slug}`} className="group flex min-h-44 flex-col justify-between rounded-[24px] bg-[#171717] p-6 text-white transition hover:-translate-y-1">
//                             <MapPin size={20} className="text-[#b7dfd0]" />
//                             <span>
//                                 <strong className="block text-xl">{name}</strong>
//                                 <span className="mt-3 inline-flex items-center gap-2 text-sm">Explore destination <ArrowRight size={15} /></span>
//                             </span>
//                         </Link>
//                     ))}
//                 </div>
//             </div>
//         </main>
//     );
// }




"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { MotionProps } from "framer-motion";
import { ArrowUpRight, MapPin, Search, X } from "lucide-react";

/* ------------------------------------------------------------------ */
/* Data                                                                */
/*                                                                     */
/* photo : Unsplash photo ID (the part after images.unsplash.com/).    */
/*         Set to null to use the Wikipedia photo of the landmark.     */
/* wiki  : Wikipedia article title of the landmark. It is the          */
/*         automatic fallback if an Unsplash photo fails to load.      */
/*                                                                     */
/* To change a photo: search the landmark on unsplash.com, open the    */
/* photo, and copy the "photo-..." part of the URL into `photo`.       */
/* ------------------------------------------------------------------ */

interface Destination {
    name: string;
    slug: string;
    code: string;
    region: string;
    landmark: string;
    wiki: string;
    photo: string | null;
}

const STATIC_DESTINATIONS: Destination[] = [
    { name: "United States", slug: "usa", code: "us", region: "North America", landmark: "Manhattan skyline", wiki: "Manhattan", photo: "photo-1496442226666-8d4d0e62e6e9" },
    { name: "United Kingdom", slug: "uk", code: "gb", region: "Europe", landmark: "Westminster, London", wiki: "Big_Ben", photo: "photo-1513635269975-59663e0ac1ad" },
    { name: "Canada", slug: "canada", code: "ca", region: "North America", landmark: "CN Tower, Toronto", wiki: "CN_Tower", photo: "photo-1517935706615-2717063c2225" },
    { name: "Australia", slug: "australia", code: "au", region: "Oceania", landmark: "Sydney Opera House", wiki: "Sydney_Opera_House", photo: "photo-1506973035872-a4ec16b8e8d9" },
    { name: "Germany", slug: "germany", code: "de", region: "Europe", landmark: "Brandenburg Gate, Berlin", wiki: "Brandenburg_Gate", photo: "photo-1560969184-10fe8719e047" },
    { name: "France", slug: "france", code: "fr", region: "Europe", landmark: "Eiffel Tower, Paris", wiki: "Eiffel_Tower", photo: "photo-1502602898657-3e91760cbb34" },
    { name: "Ireland", slug: "ireland", code: "ie", region: "Europe", landmark: "Cliffs of Moher", wiki: "Cliffs_of_Moher", photo: "photo-1590089415225-401ed6f9db8e" },
    { name: "New Zealand", slug: "new-zealand", code: "nz", region: "Oceania", landmark: "Sky Tower, Auckland", wiki: "Sky_Tower_(Auckland)", photo: null },
    { name: "Singapore", slug: "singapore", code: "sg", region: "Asia", landmark: "Marina Bay Sands", wiki: "Marina_Bay_Sands", photo: "photo-1525625293386-3f8f99389edd" },
    { name: "Japan", slug: "japan", code: "jp", region: "Asia", landmark: "Tokyo", wiki: "Tokyo_Tower", photo: "photo-1540959733332-eab4deabeeaf" },
    { name: "South Korea", slug: "south-korea", code: "kr", region: "Asia", landmark: "Seoul", wiki: "Gyeongbokgung", photo: "photo-1517154421773-0529f29ea451" },
    { name: "China", slug: "china", code: "cn", region: "Asia", landmark: "Great Wall of China", wiki: "Great_Wall_of_China", photo: "photo-1508804185872-d7badad00f7d" },
    { name: "Malaysia", slug: "malaysia", code: "my", region: "Asia", landmark: "Petronas Towers, Kuala Lumpur", wiki: "Petronas_Towers", photo: "photo-1596422846543-75c6fc197f07" },
    { name: "United Arab Emirates", slug: "uae", code: "ae", region: "Middle East", landmark: "Burj Khalifa, Dubai", wiki: "Burj_Khalifa", photo: "photo-1512453979798-5ea266f8880c" },
    { name: "Netherlands", slug: "netherlands", code: "nl", region: "Europe", landmark: "Amsterdam canals", wiki: "Canals_of_Amsterdam", photo: "photo-1534351590666-13e3e96b5017" },
    { name: "Switzerland", slug: "switzerland", code: "ch", region: "Europe", landmark: "Chapel Bridge, Lucerne", wiki: "Chapel_Bridge", photo: null },
    { name: "Sweden", slug: "sweden", code: "se", region: "Europe", landmark: "Gamla Stan, Stockholm", wiki: "Gamla_stan", photo: "photo-1509356843151-3e7d96241e11" },
    { name: "Finland", slug: "finland", code: "fi", region: "Europe", landmark: "Helsinki Cathedral", wiki: "Helsinki_Cathedral", photo: "photo-1538332576228-eb5b4c4de6f5" },
    { name: "Denmark", slug: "denmark", code: "dk", region: "Europe", landmark: "Nyhavn, Copenhagen", wiki: "Nyhavn", photo: "photo-1513622470522-26c3c8a854bc" },
    { name: "Norway", slug: "norway", code: "no", region: "Europe", landmark: "Oslo Opera House", wiki: "Oslo_Opera_House", photo: null },
    { name: "Italy", slug: "italy", code: "it", region: "Europe", landmark: "Colosseum, Rome", wiki: "Colosseum", photo: "photo-1552832230-c0197dd311b5" },
    { name: "Spain", slug: "spain", code: "es", region: "Europe", landmark: "Sagrada Família, Barcelona", wiki: "Sagrada_Família", photo: "photo-1583422409516-2895a77efded" },
    { name: "Portugal", slug: "portugal", code: "pt", region: "Europe", landmark: "Lisbon", wiki: "Belém_Tower", photo: "photo-1548707309-dcebeab9ea9b" },
    { name: "Belgium", slug: "belgium", code: "be", region: "Europe", landmark: "Grand-Place, Brussels", wiki: "Grand-Place", photo: "photo-1491557345352-5929e343eb89" },
    { name: "Austria", slug: "austria", code: "at", region: "Europe", landmark: "Vienna", wiki: "Schönbrunn_Palace", photo: "photo-1516550893923-42d28e5677af" },
    { name: "Poland", slug: "poland", code: "pl", region: "Europe", landmark: "Warsaw Old Town", wiki: "Warsaw_Old_Town", photo: "photo-1519197924294-4ba991a11128" },
    { name: "Czech Republic", slug: "czech-republic", code: "cz", region: "Europe", landmark: "Prague", wiki: "Prague_Castle", photo: "photo-1541849546-216549ae216d" },
    { name: "Hungary", slug: "hungary", code: "hu", region: "Europe", landmark: "Parliament, Budapest", wiki: "Hungarian_Parliament_Building", photo: "photo-1549877452-9c387954fbc2" },
    { name: "Turkey", slug: "turkey", code: "tr", region: "Middle East", landmark: "Hagia Sophia, Istanbul", wiki: "Hagia_Sophia", photo: "photo-1541432901042-2d8bd64b4a9b" },
    { name: "South Africa", slug: "south-africa", code: "za", region: "Africa", landmark: "Cape Town", wiki: "Castle_of_Good_Hope", photo: "photo-1580060839134-75a5edca2e99" },
    { name: "Brazil", slug: "brazil", code: "br", region: "South America", landmark: "Christ the Redeemer, Rio", wiki: "Christ_the_Redeemer_(statue)", photo: "photo-1483729558449-99ef09a8c325" },
    { name: "India", slug: "india", code: "in", region: "Asia", landmark: "Taj Mahal, Agra", wiki: "Taj_Mahal", photo: "photo-1564507592333-c60657eea523" },
    { name: "Saudi Arabia", slug: "saudi-arabia", code: "sa", region: "Middle East", landmark: "Kingdom Centre, Riyadh", wiki: "Kingdom_Centre", photo: "photo-1586724237569-f3d0c1dee8c6" },
    { name: "Thailand", slug: "thailand", code: "th", region: "Asia", landmark: "Wat Arun, Bangkok", wiki: "Wat_Arun", photo: "photo-1508009603885-50cf7c579365" },
    { name: "Indonesia", slug: "indonesia", code: "id", region: "Asia", landmark: "Borobudur Temple", wiki: "Borobudur", photo: "photo-1596402184320-417e7178b2cd" },
];


/* ------------------------------------------------------------------ */
/* Images                                                              */
/* ------------------------------------------------------------------ */

const unsplash = (id: string, w: number) =>
    `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

// Wikipedia landmark photos are looked up once and shared between cards.
const wikiRequests = new Map<string, Promise<string | null>>();
function fetchWikiImage(title: string): Promise<string | null> {
    if (!wikiRequests.has(title)) {
        wikiRequests.set(
            title,
            fetch(
                `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`
            )
                .then((res) => (res.ok ? res.json() : null))
                .then((data) => {
                    const src = data?.thumbnail?.source as string | undefined;
                    return src ? src.replace(/\/\d+px-/, "/960px-") : null;
                })
                .catch(() => null)
        );
    }
    return wikiRequests.get(title) || Promise.resolve(null);
}

/**
 * Landmark photo. Order: Unsplash photo, then the Wikipedia photo of the
 * landmark, then a black gradient with the country code, so a card is never empty.
 */
function LandmarkImage({ item, width = 900, priority = false, imgClassName = "" }: { item: Destination; width?: number; priority?: boolean; imgClassName?: string }) {
    const [stage, setStage] = useState(item.photo ? "unsplash" : "wiki");
    const [wikiSrc, setWikiSrc] = useState<string | null>(null);

    useEffect(() => {
        if (stage !== "wiki") return;
        let cancelled = false;
        fetchWikiImage(item.wiki).then((src) => {
            if (cancelled) return;
            if (src) setWikiSrc(src);
            else setStage("failed");
        });
        return () => {
            cancelled = true;
        };
    }, [stage, item.wiki]);

    const src =
        stage === "unsplash" && item.photo ? unsplash(item.photo, width) : stage === "wiki" ? wikiSrc : null;

    // Failed, or still loading the Wikipedia photo: show the black placeholder.
    if (!src) {
        return <Placeholder item={item} />;
    }

    return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
            src={src}
            alt={`${item.landmark}, ${item.name}`}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            onError={() => setStage(stage === "unsplash" ? "wiki" : "failed")}
            className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`}
        />
    );
}

function Placeholder({ item }: { item: Destination }) {
    return (
        <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-br from-neutral-700 via-neutral-900 to-black"
        >
            <div
                className="absolute inset-0 opacity-[0.12]"
                style={{
                    backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
                    backgroundSize: "16px 16px",
                }}
            />
            <span className="absolute -bottom-6 -right-2 select-none text-[140px] font-black uppercase leading-none tracking-[-0.08em] text-white/[0.08]">
                {item.code}
            </span>
        </div>
    );
}

function Flag({ code }: { code: string }) {
    const [failed, setFailed] = useState(false);
    if (failed) {
        return (
            <span className="inline-flex h-[15px] items-center rounded-[3px] bg-white/20 px-1 text-[9px] font-bold uppercase">
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
            className="h-[15px] w-5 rounded-[3px] object-cover shadow-[0_0_0_1px_rgba(255,255,255,0.25)]"
        />
    );
}

/* ------------------------------------------------------------------ */
/* Hero: expanding landmark gallery                                    */
/* ------------------------------------------------------------------ */

function HeroPanel({ item, active, onActivate }: { item: Destination; active: boolean; onActivate: () => void }) {
    return (
        <div
            role="group"
            aria-label={item.name}
            tabIndex={0}
            onMouseEnter={onActivate}
            onFocus={onActivate}
            onClick={onActivate}
            className={`relative min-w-0 cursor-pointer overflow-hidden rounded-[28px] bg-neutral-900 outline-none transition-[flex] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:ring-2 focus-visible:ring-white ${
                active ? "flex-[6]" : "flex-1"
            }`}
        >
            <LandmarkImage
                item={item}
                width={1400}
                priority
                imgClassName={`transition-all duration-[900ms] ${
                    active ? "scale-100 grayscale-0" : "scale-110 grayscale"
                }`}
            />
            <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/30"
            />

            {/* Collapsed label */}
            <span
                aria-hidden="true"
                className={`absolute bottom-6 left-1/2 -translate-x-1/2 text-[17px] font-semibold tracking-[-0.02em] text-white transition-opacity duration-500 [writing-mode:vertical-rl] rotate-180 ${
                    active ? "opacity-0" : "opacity-100"
                }`}
            >
                {item.name}
            </span>

            {/* Expanded content */}
            <div
                className={`absolute inset-x-0 bottom-0 w-[min(420px,78vw)] p-6 transition-all duration-500 sm:p-8 ${
                    active ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
                }`}
            >
                <p className="flex items-center gap-2 text-[13px] text-white/75">
                    <MapPin size={14} />
                    {item.landmark}
                </p>
                <h2 className="mt-2 text-[34px] font-semibold leading-[1] tracking-[-0.05em] text-white sm:text-5xl">
                    {item.name}
                </h2>
                <Link
                    href={`/countries/${item.slug}`}
                    tabIndex={active ? 0 : -1}
                    className="group/link mt-5 inline-flex h-11 items-center gap-3 rounded-full bg-white pl-5 pr-1.5 text-[13px] font-semibold text-black transition-colors hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                    Explore {item.name}
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover/link:rotate-45">
                        <ArrowUpRight size={15} />
                    </span>
                </Link>
            </div>
        </div>
    );
}

/* ------------------------------------------------------------------ */
/* Destination card                                                    */
/* ------------------------------------------------------------------ */

function DestinationCard({ item, wide, reduceMotion }: { item: Destination; wide: boolean; reduceMotion: boolean | null }) {
    return (
        <motion.div
            layout={!reduceMotion}
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className={wide ? "sm:col-span-2" : ""}
        >
            <Link
                href={`/countries/${item.slug}`}
                aria-label={`Explore ${item.name} (${item.landmark})`}
                className="group relative isolate block h-[400px] overflow-hidden rounded-[28px] bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
            >
                <LandmarkImage
                    item={item}
                    width={wide ? 1400 : 900}
                    imgClassName="grayscale transition-all duration-[900ms] ease-out group-hover:scale-[1.07] group-hover:grayscale-0 [@media(hover:none)]:grayscale-0"
                />

                <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/20"
                />

                {/* Top row */}
                <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/30 px-3 py-1.5 text-[12px] font-medium text-white backdrop-blur-md">
                        <Flag code={item.code} />
                        {item.region}
                    </span>
                </div>

                {/* Bottom content */}
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                    <div className="min-w-0">
                        <p className="flex items-center gap-2 text-[13px] text-white/70">
                            <MapPin size={14} className="shrink-0" />
                            <span className="truncate">{item.landmark}</span>
                        </p>
                        <h3 className="mt-2 text-[30px] font-semibold leading-[1.02] tracking-[-0.05em] text-white">
                            {item.name}
                        </h3>
                    </div>

                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/40 text-white transition-all duration-300 group-hover:rotate-45 group-hover:border-white group-hover:bg-white group-hover:text-black">
                        <ArrowUpRight size={20} />
                    </span>
                </div>
            </Link>
        </motion.div>
    );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function CountriesPage() {
    const reduceMotion = useReducedMotion();
    const [activePanel, setActivePanel] = useState(0);
    const [query, setQuery] = useState("");
    const [region, setRegion] = useState("All");
    const [destinations, setDestinations] = useState<Destination[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
        fetch(`${apiUrl}/countries`)
            .then((response) => response.ok ? response.json() : Promise.reject(new Error("Unable to load countries")))
            .then((countries: Array<{ name: string; slug: string; code: string; isActive?: boolean }>) => {
                const knownDestinations = new Map(STATIC_DESTINATIONS.map((country) => [country.slug, country]));
                setDestinations(countries.filter((country) => country.isActive !== false).map((country) => (
                    knownDestinations.get(country.slug) ?? {
                        name: country.name,
                        slug: country.slug,
                        code: country.code.toLowerCase(),
                        region: "Other",
                        landmark: country.name,
                        wiki: country.name.replaceAll(" ", "_"),
                        photo: null,
                    }
                )));
            })
            .catch(() => setDestinations([]))
            .finally(() => setLoading(false));
    }, []);

    const heroItems = ["usa", "uk", "france", "japan", "australia", "uae"]
        .map((slug) => destinations.find((country) => country.slug === slug))
        .filter((item): item is Destination => Boolean(item));
    const regionCounts = destinations.reduce<Record<string, number>>((counts, destination) => {
        counts[destination.region] = (counts[destination.region] || 0) + 1;
        return counts;
    }, {});
    const regions = ["All", ...Object.keys(regionCounts)];

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        return destinations.filter((d) => {
            const matchesRegion = region === "All" || d.region === region;
            const matchesQuery =
                !q || d.name.toLowerCase().includes(q) || d.landmark.toLowerCase().includes(q);
            return matchesRegion && matchesQuery;
        });
    }, [query, region]);

    const clearFilters = () => {
        setQuery("");
        setRegion("All");
    };

    const reveal = (delay = 0): MotionProps =>
        reduceMotion
            ? {}
            : {
                  initial: { opacity: 0, y: 28 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
              };

    return (
        <main className="min-h-screen bg-white text-black">
            {loading && <div className="fixed inset-x-0 top-0 z-50 h-1 animate-pulse bg-[#123d35]" />}
            {/* =========================== HERO =========================== */}
            <section className="bg-black px-5 pb-16 pt-32 text-white sm:px-8 sm:pb-24 sm:pt-40 lg:px-12">
                <div className="mx-auto max-w-[1400px]">
                    <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
                        <div>
                            <motion.h1
                                {...reveal(0)}
                                className="max-w-4xl text-[52px] font-semibold leading-[0.95] tracking-[-0.07em] sm:text-7xl lg:text-[110px]"
                            >
                                Explore your
                                <span className="block text-neutral-500">study destinations.</span>
                            </motion.h1>

                            <motion.p
                                {...reveal(0.1)}
                                className="mt-8 max-w-xl text-[16px] leading-[1.85] text-neutral-400"
                            >
                                From the Eiffel Tower to the Sydney Opera House, discover where
                                you could study and get free guidance from a CampusSeat
                                counsellor.
                            </motion.p>
                        </div>

                        <motion.div {...reveal(0.15)} className="shrink-0 lg:text-right">
                            <p
                                aria-hidden="true"
                                className="text-[120px] font-semibold leading-[0.85] tracking-[-0.08em] text-transparent [-webkit-text-stroke:1.5px_#fff] sm:text-[170px]"
                            >
                                {destinations.length}
                            </p>
                            <p className="mt-3 text-[15px] text-neutral-400">
                                <span className="sr-only">{destinations.length} </span>
                                countries to explore
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        {...reveal(0.25)}
                        className="mt-14 flex h-[440px] gap-2.5 sm:h-[540px] sm:gap-3"
                    >
                        {heroItems.map((item, i) => (
                            <HeroPanel
                                key={item.slug}
                                item={item}
                                active={activePanel === i}
                                onActivate={() => setActivePanel(i)}
                            />
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ========================= DESTINATIONS ========================= */}
            <section
                id="destinations"
                className="mx-auto max-w-[1400px] scroll-mt-28 px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
            >
                <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                    <h2 className="text-[38px] font-semibold leading-[1.02] tracking-[-0.065em] sm:text-6xl">
                        All destinations
                    </h2>

                    <div className="relative w-full lg:max-w-sm">
                        <label htmlFor="country-search" className="sr-only">
                            Search by country or landmark
                        </label>
                        <Search
                            size={18}
                            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
                        />
                        <input
                            id="country-search"
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search a country or landmark"
                            className="h-12 w-full rounded-full border border-neutral-300 bg-white pl-11 pr-11 text-[14px] outline-none transition placeholder:text-neutral-400 focus:border-black focus:ring-4 focus:ring-black/10"
                        />
                        {query && (
                            <button
                                type="button"
                                onClick={() => setQuery("")}
                                aria-label="Clear search"
                                className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-neutral-500 hover:bg-neutral-100"
                            >
                                <X size={15} />
                            </button>
                        )}
                    </div>
                </div>

                <div
                    role="group"
                    aria-label="Filter by region"
                    className="-mx-5 mb-8 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                    {regions.map((r) => {
                        const active = region === r;
                        const count = r === "All" ? destinations.length : regionCounts[r];
                        return (
                            <button
                                key={r}
                                type="button"
                                onClick={() => setRegion(r)}
                                aria-pressed={active}
                                className={`inline-flex h-11 shrink-0 items-center gap-2 rounded-full border px-5 text-[14px] font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${
                                    active
                                        ? "border-black bg-black text-white"
                                        : "border-neutral-300 bg-white text-black hover:border-black"
                                }`}
                            >
                                {r}
                                <span
                                    className={`text-[12px] font-medium ${
                                        active ? "text-neutral-400" : "text-neutral-500"
                                    }`}
                                >
                                    {count}
                                </span>
                            </button>
                        );
                    })}
                </div>

                <p className="mb-6 text-[14px] text-neutral-500" aria-live="polite">
                    {filtered.length} {filtered.length === 1 ? "destination" : "destinations"}
                </p>

                {filtered.length > 0 ? (
                    <motion.div
                        layout={!reduceMotion}
                        className="grid gap-5 [grid-auto-flow:dense] sm:grid-cols-2 lg:grid-cols-4"
                    >
                        <AnimatePresence mode="popLayout">
                            {filtered.map((item, index) => (
                                <DestinationCard
                                    key={item.slug}
                                    item={item}
                                    wide={index % 8 === 0}
                                    reduceMotion={reduceMotion}
                                />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                ) : (
                    <div className="rounded-[28px] border border-dashed border-neutral-300 px-6 py-20 text-center">
                        <span className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-black text-white">
                            <Search size={26} />
                        </span>
                        <h3 className="text-xl font-semibold tracking-[-0.03em]">
                            No destinations match your search
                        </h3>
                        <p className="mx-auto mt-2 max-w-md text-[14px] leading-7 text-neutral-500">
                            Try another country or landmark, or clear the filters to see all
                            destinations.
                        </p>
                        <button
                            type="button"
                            onClick={clearFilters}
                            className="mt-6 h-12 rounded-full bg-black px-7 text-[14px] font-semibold text-white transition-colors hover:bg-neutral-800"
                        >
                            Clear filters
                        </button>
                    </div>
                )}

                <p className="mt-10 text-[12px] text-neutral-400">
                    Photos from Unsplash and Wikimedia Commons contributors.
                </p>
            </section>

            {/* ============================ CTA ============================ */}
            <section className="bg-black px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12">
                <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-10 md:flex-row md:items-center">
                    <h2 className="max-w-2xl text-[40px] font-semibold leading-[1.02] tracking-[-0.065em] sm:text-6xl">
                        Not sure which country is right for you?
                        <span className="block text-neutral-500">We&apos;ll help you decide.</span>
                    </h2>

                    <Link
                        href="/counselling"
                        className="group/btn inline-flex w-full items-center justify-between gap-6 rounded-full bg-white py-2 pl-8 pr-2 text-[15px] font-bold text-black transition-colors duration-300 hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto sm:min-w-[300px]"
                    >
                        Get free counselling
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover/btn:rotate-45">
                            <ArrowUpRight size={20} />
                        </span>
                    </Link>
                </div>
            </section>
        </main>
    );
}
