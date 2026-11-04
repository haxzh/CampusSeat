// "use client";

// import { useEffect, useMemo, useRef, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import {
//     animate,
//     motion,
//     useReducedMotion,
//     useScroll,
//     useSpring,
//     useTransform,
// } from "framer-motion";
// import {
//     ArrowRight,
//     ArrowUpRight,
//     Check,
//     ChevronDown,
//     Globe2,
//     GraduationCap,
//     Mail,
//     BadgeCheck,
//     TrendingUp,
// } from "lucide-react";
// import Navbar from "../components/Navbar";
// import unitedstate from "./images/unitedstate.jpg";
// import australia from "./images/australiaimage.jpg";
// import germany from "./images/germany.jpg";
// import india from "./images/tajmahalimage.jpg";
// import {
//     campusSeatServices,
//     homepageFaqs,
//     homepageStats,
//     industryPartners,
//     learningSteps,
//     pathways,
//     programmeLinks,
//     universityPartners,
// } from "../data/homepage";

// const heroImage =
//     "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2400&q=90";

// const linkStyle =
//     "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#202653]";

// function SectionHeading({ eyebrow, title, accent, description, light = false }) {
//     return (
//         <div className="max-w-3xl">
//             <p
//                 className={`text-xs font-bold uppercase tracking-[0.18em] ${
//                     light ? "text-[#d6b46c]" : "text-[#202653]"
//                 }`}
//             >
//                 {eyebrow}
//             </p>
//             <h2
//                 className={`mt-4 text-[clamp(2.4rem,5.5vw,4.7rem)] font-semibold leading-[0.98] tracking-[-0.065em] ${
//                     light ? "text-white" : "text-[#171943]"
//                 }`}
//             >
//                 {title}{" "}
//                 {accent && (
//                     <span
//                         className={`font-serif font-normal italic ${
//                             light ? "text-[#d6b46c]" : "text-[#202653]"
//                         }`}
//                     >
//                         {accent}
//                     </span>
//                 )}
//             </h2>
//             {description && (
//                 <p
//                     className={`mt-5 max-w-2xl text-sm leading-7 sm:text-base sm:leading-8 ${
//                         light ? "text-white/70" : "text-[#77829b]"
//                     }`}
//                 >
//                     {description}
//                 </p>
//             )}
//         </div>
//     );
// }

// function UniversityMark({ name, monogram }) {
//     return (
//         <div className="flex min-h-[112px] items-center gap-4 rounded-[22px] border border-[#e5e8f0] bg-white p-5 shadow-[0_12px_35px_rgba(20,27,73,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(20,27,73,0.09)] sm:min-h-[126px] sm:p-6">
//             <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#e5e8f0] bg-[#eef1f7] text-lg font-bold tracking-[-0.04em] text-[#354b91]">
//                 {monogram}
//             </span>
//             <span className="text-[17px] font-bold uppercase tracking-[-0.035em] text-[#202653] sm:text-lg">
//                 {name}
//             </span>
//         </div>
//     );
// }

// /* ================================================================== */
// /*  CONFIG  — change things here, the layout adapts automatically      */
// /* ================================================================== */

// const ACCENT = "#258778";

// /** Height (in rem) of your fixed/floating navbar + a little gap.
//  *  Increase this if the section title still hides under the navbar. */
// const NAV_OFFSET_REM = 8;

// /** How much scroll each country gets in the pinned section (vh). */
// const SCROLL_PER_SLIDE_VH = 70;

// const DEFAULT_STATS = {
//     passed: 500, // displays as "500+"
//     passedLabel: "Students passed",
//     graphTitle: "Student success growth",
//     years: ["2020", "2021", "2022", "2023", "2024", "2025", "2026"],
// };

// const unsplash = (id) =>
//     `https://images.unsplash.com/${id}?auto=format&fit=crop&w=2000&q=85`;

// /**
//  * images  : list of sources tried in order (local import OR url). If one fails
//  *           to load, the next one is used automatically.
//  * focus   : CSS object-position for the photo (crop control).
//  * growth  : low → high values for the graph (PLACEHOLDERS — use your real data).
//  * universities[].logo : optional official logo (local import or url,
//  *           e.g. "/logos/mit.png"). If missing, the site favicon is tried,
//  *           then a clean monogram — never a grey globe.
//  */
// const DESTINATIONS = [
//     {
//         name: "United States",
//         short: "USA",
//         slug: "usa",
//         images: [unitedstate, unsplash("photo-1496442226666-8d4d0e62e6e9")],
//         focus: "50% 50%",
//         eyebrow: "A WORLD OF OPPORTUNITY",
//         description:
//             "Discover world-class universities, innovative research and diverse academic opportunities across the United States.",
//         growth: [18, 30, 44, 61, 78, 94, 120],
//         universities: [
//             { mark: "B", name: "Birchwood University", city: "Florida, USA", domain: "birchwood.edu" },
//             { mark: "MIT", name: "Massachusetts Institute of Technology", city: "Cambridge, MA", domain: "mit.edu" },
//             { mark: "S", name: "University of South Carolina", city: "Columbia", domain: "sc.edu" },
//             { mark: "Y", name: "Yale University", city: "New Haven, CT", domain: "yale.edu" },
//         ],
//     },
//     {
//         name: "United Arab Emirates",
//         short: "UAE",
//         slug: "uae",
//         images: [
//             unsplash("photo-1512453979798-5ea266f8880c"),
//             unsplash("photo-1518684079-3c830dcef090"),
//         ],
//         focus: "50% 60%",
//         eyebrow: "TRADITION MEETS INNOVATION",
//         description:
//             "Explore internationally recognised universities in a dynamic destination connecting global business, culture and innovation.",
//         growth: [10, 16, 27, 38, 55, 73, 96],
//         universities: [
//             { mark: "U", name: "University of Sharjah", city: "Sharjah", domain: "sharjah.ac.ae" },
//             { mark: "Z", name: "Zayed University", city: "Abu Dhabi", domain: "zu.ac.ae" },
//             { mark: "A", name: "American University of Sharjah", city: "Sharjah", domain: "aus.edu" },
//             { mark: "K", name: "Khalifa University", city: "Abu Dhabi", domain: "ku.ac.ae" },
//         ],
//     },
//     {
//         name: "France",
//         short: "France",
//         slug: "france",
//         images: [
//             unsplash("photo-1502602898657-3e91760cbb34"),
//             unsplash("photo-1431274172761-fca41d930114"),
//         ],
//         focus: "50% 55%",
//         eyebrow: "MAKE ROOM FOR WHAT'S NEXT",
//         description:
//             "Experience exceptional academic traditions, vibrant student cities and internationally respected qualifications.",
//         growth: [8, 14, 22, 35, 49, 66, 88],
//         universities: [
//             { mark: "S", name: "Sorbonne University", city: "Paris", domain: "sorbonne-universite.fr" },
//             { mark: "P", name: "Paris-Saclay University", city: "Paris", domain: "universite-paris-saclay.fr" },
//             { mark: "E", name: "École Polytechnique", city: "Palaiseau", domain: "polytechnique.edu" },
//             { mark: "H", name: "HEC Paris", city: "Jouy-en-Josas", domain: "hec.edu" },
//         ],
//     },
//     {
//         name: "Australia",
//         short: "Australia",
//         slug: "australia",
//         images: [australia, unsplash("photo-1506973035872-a4ec16b8e8d9")],
//         focus: "50% 50%",
//         eyebrow: "LEARN BEYOND LIMITS",
//         description:
//             "Study in welcoming cities with globally recognised universities and a strong international student community.",
//         growth: [14, 25, 36, 52, 70, 91, 112],
//         universities: [
//             { mark: "M", name: "University of Melbourne", city: "Melbourne", domain: "unimelb.edu.au" },
//             { mark: "S", name: "University of Sydney", city: "Sydney", domain: "sydney.edu.au" },
//             { mark: "A", name: "Australian National University", city: "Canberra", domain: "anu.edu.au" },
//             { mark: "M", name: "Monash University", city: "Melbourne", domain: "monash.edu" },
//         ],
//     },
//     {
//         name: "Germany",
//         short: "Germany",
//         slug: "germany",
//         images: [germany, unsplash("photo-1560969184-10fe8719e047")],
//         focus: "50% 50%",
//         eyebrow: "BUILD YOUR FUTURE HERE",
//         description:
//             "Explore research-led universities, technical excellence and study opportunities in the heart of Europe.",
//         growth: [12, 20, 33, 47, 63, 84, 105],
//         universities: [
//             { mark: "T", name: "Technical University of Munich", city: "Munich", domain: "tum.de" },
//             { mark: "H", name: "Heidelberg University", city: "Heidelberg", domain: "uni-heidelberg.de" },
//             { mark: "F", name: "Freie Universität Berlin", city: "Berlin", domain: "fu-berlin.de" },
//             { mark: "A", name: "RWTH Aachen University", city: "Aachen", domain: "rwth-aachen.de" },
//         ],
//     },
//     {
//         name: "India",
//         short: "India",
//         slug: "india",
//         images: [india, unsplash("photo-1564507592333-c60657eea523")],
//         focus: "50% 45%",
//         eyebrow: "ROOTED IN EXCELLENCE",
//         description:
//             "Discover respected institutions, diverse programmes and academic opportunities across India.",
//         growth: [20, 29, 41, 53, 68, 85, 101],
//         universities: [
//             { mark: "I", name: "IIT Bombay", city: "Mumbai", domain: "iitb.ac.in" },
//             { mark: "I", name: "IIT Delhi", city: "New Delhi", domain: "iitd.ac.in" },
//             { mark: "I", name: "IIM Ahmedabad", city: "Ahmedabad", domain: "iima.ac.in" },
//             { mark: "A", name: "Ashoka University", city: "Sonipat", domain: "ashoka.edu.in" },
//         ],
//     },
// ];

// /* ================================================================== */
// /*  Helpers                                                            */
// /* ================================================================== */

// const toSrc = (s) => (typeof s === "string" ? s : s?.src);

// /** Page density by viewport height → keeps the card from overflowing. */
// function useDensity() {
//     const [h, setH] = useState(900);
//     useEffect(() => {
//         const update = () => setH(window.innerHeight);
//         update();
//         window.addEventListener("resize", update);
//         return () => window.removeEventListener("resize", update);
//     }, []);
//     if (h < 700) return "tight";
//     if (h < 830) return "compact";
//     return "regular";
// }

// const DENSITY = {
//     regular: {
//         graphH: 84,
//         showDesc: true,
//         showUniHeader: true,
//         showCity: true,
//         rowPad: "py-2.5",
//         title: "xl:text-[2rem]",
//         gap: "gap-3.5",
//     },
//     compact: {
//         graphH: 64,
//         showDesc: true,
//         showUniHeader: true,
//         showCity: true,
//         rowPad: "py-2",
//         title: "xl:text-[1.7rem]",
//         gap: "gap-3",
//     },
//     tight: {
//         graphH: 48,
//         showDesc: false,
//         showUniHeader: false,
//         showCity: false,
//         rowPad: "py-1.5",
//         title: "xl:text-[1.5rem]",
//         gap: "gap-2.5",
//     },
// };

// const MONO_COLORS = [
//     ["#0f766e", "#14b8a6"],
//     ["#1e3a8a", "#3b82f6"],
//     ["#7c2d12", "#f97316"],
//     ["#4c1d95", "#8b5cf6"],
//     ["#831843", "#ec4899"],
//     ["#14532d", "#22c55e"],
// ];

// /* ================================================================== */
// /*  Building blocks                                                    */
// /* ================================================================== */

// function CountUp({ to, active, suffix = "+", className = "" }) {
//     const reduceMotion = useReducedMotion();
//     const [value, setValue] = useState(0);

//     useEffect(() => {
//         if (!active || reduceMotion) return;
//         const controls = animate(0, to, {
//             duration: 1.6,
//             delay: 0.25,
//             ease: [0.22, 1, 0.36, 1],
//             onUpdate: (v) => setValue(Math.round(v)),
//         });
//         return () => controls.stop();
//     }, [active, to, reduceMotion]);

//     return (
//         <span className={className}>
//             {active ? (reduceMotion ? to : value) : 0}
//             {suffix}
//         </span>
//     );
// }

// /** Low → high growth chart. Measures its container so it always fills the width. */
// function GrowthGraph({ data, years, id, active, height }) {
//     const reduceMotion = useReducedMotion();
//     const wrapRef = useRef(null);
//     const [w, setW] = useState(360);

//     useEffect(() => {
//         const el = wrapRef.current;
//         if (!el || typeof ResizeObserver === "undefined") return;
//         const ro = new ResizeObserver(([entry]) =>
//             setW(Math.max(160, Math.round(entry.contentRect.width)))
//         );
//         ro.observe(el);
//         return () => ro.disconnect();
//     }, []);

//     const H = height;
//     const padX = 8;
//     const padTop = 10;
//     const padBottom = 6;

//     const { line, area, points } = useMemo(() => {
//         const max = Math.max(...data);
//         const min = Math.min(...data);
//         const span = max - min || 1;
//         const pts = data.map((v, i) => [
//             padX + (i / (data.length - 1)) * (w - padX * 2),
//             padTop + (1 - (v - min) / span) * (H - padTop - padBottom),
//         ]);
//         let d = `M ${pts[0][0]} ${pts[0][1]}`;
//         for (let i = 1; i < pts.length; i++) {
//             const [x0, y0] = pts[i - 1];
//             const [x1, y1] = pts[i];
//             const cx = (x0 + x1) / 2;
//             d += ` C ${cx} ${y0}, ${cx} ${y1}, ${x1} ${y1}`;
//         }
//         const last = pts[pts.length - 1];
//         const first = pts[0];
//         return { line: d, area: `${d} L ${last[0]} ${H} L ${first[0]} ${H} Z`, points: pts };
//     }, [data, w, H]);

//     const last = points[points.length - 1];
//     const key = active ? "on" : "off";

//     return (
//         <div ref={wrapRef} className="w-full">
//             <svg
//                 width={w}
//                 height={H}
//                 viewBox={`0 0 ${w} ${H}`}
//                 className="block overflow-visible"
//                 role="img"
//                 aria-label={`Growth rising from ${years[0]} to ${years[years.length - 1]}`}
//             >
//                 <defs>
//                     <linearGradient id={`fill-${id}`} x1="0" y1="0" x2="0" y2="1">
//                         <stop offset="0%" stopColor={ACCENT} stopOpacity="0.3" />
//                         <stop offset="100%" stopColor={ACCENT} stopOpacity="0" />
//                     </linearGradient>
//                     <linearGradient id={`stroke-${id}`} x1="0" y1="0" x2="1" y2="0">
//                         <stop offset="0%" stopColor="#9fd3c8" />
//                         <stop offset="100%" stopColor={ACCENT} />
//                     </linearGradient>
//                 </defs>

//                 {[0.33, 0.66].map((g) => (
//                     <line
//                         key={g}
//                         x1="0"
//                         x2={w}
//                         y1={H * g}
//                         y2={H * g}
//                         stroke="#171717"
//                         strokeOpacity="0.07"
//                         strokeDasharray="3 5"
//                     />
//                 ))}

//                 <motion.path
//                     key={`area-${key}`}
//                     d={area}
//                     fill={`url(#fill-${id})`}
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: active ? 1 : 0 }}
//                     transition={{ duration: reduceMotion ? 0 : 0.9, delay: reduceMotion ? 0 : 0.5 }}
//                 />
//                 <motion.path
//                     key={`line-${key}`}
//                     d={line}
//                     fill="none"
//                     stroke={`url(#stroke-${id})`}
//                     strokeWidth="3"
//                     strokeLinecap="round"
//                     initial={{ pathLength: reduceMotion ? 1 : 0 }}
//                     animate={{ pathLength: active ? 1 : 0 }}
//                     transition={{ duration: reduceMotion ? 0 : 1.4, ease: [0.22, 1, 0.36, 1] }}
//                 />
//                 {points.map(([x, y], i) => {
//                     const isLast = i === points.length - 1;
//                     return (
//                         <motion.circle
//                             key={`${i}-${key}`}
//                             cx={x}
//                             cy={y}
//                             r={isLast ? 5 : 2.8}
//                             fill={isLast ? ACCENT : "#fff"}
//                             stroke={ACCENT}
//                             strokeWidth="1.6"
//                             initial={{ opacity: 0, scale: 0 }}
//                             animate={{ opacity: active ? 1 : 0, scale: active ? 1 : 0 }}
//                             transition={{
//                                 delay: reduceMotion ? 0 : 0.25 + i * 0.17,
//                                 duration: reduceMotion ? 0 : 0.3,
//                             }}
//                             style={{ transformOrigin: `${x}px ${y}px` }}
//                         />
//                     );
//                 })}
//                 <circle cx={last[0]} cy={last[1]} r="11" fill={ACCENT} opacity="0.14" />
//             </svg>

//             <div className="mt-1 flex justify-between text-[9px] font-semibold tracking-[0.1em] text-[#77776f]">
//                 <span>{years[0]}</span>
//                 <span className="hidden min-[420px]:inline">{years[Math.floor(years.length / 2)]}</span>
//                 <span>{years[years.length - 1]}</span>
//             </div>
//         </div>
//     );
// }

// /** Photo with automatic fallback through `sources`. */
// function EditorialImage({ sources, alt, focus = "50% 50%", priority = false, className = "" }) {
//     const [index, setIndex] = useState(0);
//     const src = toSrc(sources[index]);

//     return (
//         <div
//             className={`relative overflow-hidden bg-[#77776f] ${className}`}
//             style={{ backgroundImage: "linear-gradient(135deg, #77776f 0%, #171717 100%)" }}
//         >
//             {src ? (
//                 <Image
//                     key={src}
//                     src={src}
//                     alt={alt}
//                     fill
//                     sizes="(max-width: 1024px) 100vw, 48vw"
//                     unoptimized
//                     priority={priority}
//                     loading={priority ? undefined : "lazy"}
//                     onError={() => setIndex((i) => i + 1)}
//                     style={{ objectPosition: focus }}
//                     className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
//                 />
//             ) : (
//                 <div
//                     className="flex h-full w-full items-center justify-center text-white/80"
//                     role="img"
//                     aria-label={alt}
//                 >
//                     <GraduationCap size={42} aria-hidden="true" />
//                 </div>
//             )}
//         </div>
//     );
// }

// /** logo → favicon (hi-res only) → colour monogram. No grey globe. */
// function UniLogo({ uni }) {
//     const chain = useMemo(() => {
//         const list = [];
//         if (uni.logo) list.push(toSrc(uni.logo));
//         if (uni.domain)
//             list.push(
//                 `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&url=https://${uni.domain}&size=128`
//             );
//         return list;
//     }, [uni]);

//     const [i, setI] = useState(0);
//     const hash = [...uni.name].reduce((a, c) => a + c.charCodeAt(0), 0);
//     const [c1, c2] = MONO_COLORS[hash % MONO_COLORS.length];
//     const src = chain[i];

//     return (
//         <span className="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-full border border-[#e5e5e1] bg-white shadow-sm sm:h-11 sm:w-11">
//             {src ? (
//                 // eslint-disable-next-line @next/next/no-img-element
//                 <img
//                     key={src}
//                     src={src}
//                     alt={`${uni.name} logo`}
//                     loading="lazy"
//                     referrerPolicy="no-referrer"
//                     onError={() => setI((n) => n + 1)}
//                     onLoad={(e) => {
//                         // tiny favicons look blurry → use the monogram instead
//                         if (e.currentTarget.naturalWidth < 40) setI((n) => n + 1);
//                     }}
//                     className="h-full w-full object-contain p-1.5"
//                 />
//             ) : (
//                 <span
//                     className="grid h-full w-full place-items-center text-[11px] font-bold tracking-tight text-white"
//                     style={{ backgroundImage: `linear-gradient(135deg, ${c1}, ${c2})` }}
//                     aria-label={uni.name}
//                 >
//                     {uni.mark}
//                 </span>
//             )}
//         </span>
//     );
// }

// function UniversityRow({ uni, index, active, density }) {
//     const reduceMotion = useReducedMotion();
//     return (
//         <motion.li
//             initial={false}
//             animate={{ opacity: active ? 1 : 0, y: active ? 0 : 12 }}
//             transition={{
//                 duration: reduceMotion ? 0 : 0.5,
//                 delay: reduceMotion ? 0 : 0.25 + index * 0.08,
//             }}
//             className={`group/uni flex min-w-0 items-center gap-3 rounded-2xl border border-[#e8e7e1] bg-white/85 px-3 transition duration-300 hover:-translate-y-0.5 hover:border-[#258778]/40 hover:shadow-[0_10px_30px_rgba(37,135,120,0.12)] ${density.rowPad}`}
//         >
//             <UniLogo uni={uni} />
//             <span className="min-w-0 flex-1">
//                 <span className="block text-[12px] font-bold leading-tight text-[#171717] sm:text-[13px]">
//                     {uni.name}
//                 </span>
//                 {density.showCity && (
//                     <span className="mt-0.5 block truncate text-[10px] text-[#777]">{uni.city}</span>
//                 )}
//             </span>
//             <ArrowUpRight
//                 size={15}
//                 aria-hidden="true"
//                 className="shrink-0 text-[#b5b5ad] transition group-hover/uni:text-[#258778]"
//             />
//         </motion.li>
//     );
// }

// /* ================================================================== */
// /*  Country card                                                       */
// /* ================================================================== */

// function CountryCard({
//     country,
//     stats,
//     heightClass,
//     imageHeightClass,
//     active = true,
//     densityKey = "regular",
//     priority = false,
// }) {
//     const href = `/countries/${country.slug}`;
//     const d = DENSITY[densityKey];

//     return (
//         <article
//             className={`group grid w-full grid-cols-1 overflow-hidden rounded-[24px] border border-black/10 bg-white shadow-[0_24px_70px_rgba(0,0,0,0.09)] transition-shadow duration-500 hover:shadow-[0_34px_90px_rgba(0,0,0,0.17)] sm:rounded-[28px] lg:grid-cols-[0.92fr_1.08fr] ${heightClass}`}
//         >
//             {/* ---------- Image side ---------- */}
//             <div className={`relative overflow-hidden bg-[#242424] ${imageHeightClass}`}>
//                 <EditorialImage
//                     sources={country.images}
//                     focus={country.focus}
//                     priority={priority}
//                     alt={`Study destination in ${country.name}`}
//                     className="absolute inset-0 h-full w-full"
//                 />
//                 <div
//                     aria-hidden="true"
//                     className="absolute inset-0"
//                     style={{
//                         backgroundImage:
//                             "linear-gradient(to top, rgba(0,0,0,0.84), rgba(0,0,0,0.12) 60%, rgba(0,0,0,0.34))",
//                     }}
//                 />

//                 <p className="absolute left-4 top-4 z-10 max-w-[55%] rounded-full border border-white/35 bg-black/25 px-3.5 py-2 text-[9px] font-bold tracking-[0.16em] text-white backdrop-blur-md sm:left-6 sm:top-6 sm:text-[10px]">
//                     {country.eyebrow}
//                 </p>

//                 <div className="absolute right-4 top-4 z-10 flex items-center gap-2.5 rounded-2xl border border-white/25 bg-white/10 px-3.5 py-2 text-white shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:right-6 sm:top-6">
//                     <span className="grid h-8 w-8 place-items-center rounded-full bg-[#258778]">
//                         <BadgeCheck size={17} aria-hidden="true" />
//                     </span>
//                     <span className="leading-none">
//                         <CountUp
//                             to={stats.passed}
//                             active={active}
//                             className="block text-lg font-semibold tracking-[-0.04em] sm:text-xl"
//                         />
//                         <span className="mt-1 block text-[8px] font-bold uppercase tracking-[0.15em] text-white/75">
//                             {stats.passedLabel}
//                         </span>
//                     </span>
//                 </div>

//                 <div className="absolute inset-x-0 bottom-0 z-10 p-5 text-white sm:p-8 lg:p-7 xl:p-9">
//                     <p className="mb-2 text-[10px] font-bold tracking-[0.2em] text-white/75 sm:text-xs">
//                         EXPLORE STUDY DESTINATIONS
//                     </p>
//                     <h3 className="max-w-[95%] break-words text-[clamp(2.5rem,9vw,5.6rem)] font-semibold leading-[0.88] tracking-[-0.07em] lg:text-[clamp(2.4rem,4vw,4.8rem)]">
//                         {country.name}
//                     </h3>
//                     <Link
//                         href={href}
//                         className="mt-5 inline-flex min-h-11 items-center gap-3 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#171717] transition hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(255,255,255,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
//                     >
//                         Explore country <ArrowUpRight size={16} aria-hidden="true" />
//                     </Link>
//                 </div>
//             </div>

//             {/* ---------- Info side ---------- */}
//             <div
//                 className={`relative flex min-h-0 flex-col justify-center overflow-hidden px-5 py-6 text-[#171717] sm:px-8 lg:px-8 lg:py-5 xl:px-10 ${d.gap}`}
//                 style={{
//                     backgroundImage:
//                         "radial-gradient(120% 70% at 100% 0%, rgba(37,135,120,0.09) 0%, rgba(255,255,255,0) 60%), linear-gradient(#fff,#fbfbf8)",
//                 }}
//             >
//                 <div>
//                     <p className="flex items-center gap-2 text-[9px] font-bold tracking-[0.2em] text-[#77776f] sm:text-[10px]">
//                         <span className="h-px w-6 bg-[#258778]" aria-hidden="true" />
//                         YOUR GLOBAL EDUCATION DESTINATION
//                     </p>
//                     <h4
//                         className={`mt-2 text-2xl font-medium leading-tight tracking-[-0.04em] sm:text-3xl ${d.title}`}
//                     >
//                         Study in {country.name}
//                     </h4>
//                     {d.showDesc && (
//                         <p className="mt-2 max-w-xl text-sm leading-6 text-[#62625b] lg:line-clamp-2">
//                             {country.description}
//                         </p>
//                     )}
//                 </div>

//                 {/* Growth graph */}
//                 <div className="rounded-2xl border border-[#e8e7e1] bg-white p-3.5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] sm:p-4">
//                     <div className="mb-2 flex items-center justify-between gap-3">
//                         <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#77776f]">
//                             {stats.graphTitle}
//                         </p>
//                         <span className="inline-flex items-center gap-1.5 rounded-full bg-[#258778]/10 px-2.5 py-1 text-[10px] font-bold text-[#1d6c60]">
//                             <TrendingUp size={12} aria-hidden="true" />
//                             Low → High
//                         </span>
//                     </div>
//                     <GrowthGraph
//                         id={country.slug}
//                         data={country.growth}
//                         years={stats.years}
//                         active={active}
//                         height={d.graphH}
//                     />
//                 </div>

//                 {/* Universities */}
//                 <div>
//                     {d.showUniHeader && (
//                         <div className="mb-2 flex items-center justify-between">
//                             <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#77776f]">
//                                 Leading universities
//                             </p>
//                             <GraduationCap size={19} aria-hidden="true" className="text-[#555]" />
//                         </div>
//                     )}
//                     <ul className="grid grid-cols-1 gap-2 min-[480px]:grid-cols-2">
//                         {country.universities.map((uni, i) => (
//                             <UniversityRow
//                                 key={uni.name}
//                                 uni={uni}
//                                 index={i}
//                                 active={active}
//                                 density={d}
//                             />
//                         ))}
//                     </ul>
//                 </div>

//                 <Link
//                     href={href}
//                     className="inline-flex min-h-11 w-fit items-center gap-3 rounded-full bg-[#171717] px-6 py-2.5 text-xs font-bold text-white transition hover:-translate-y-1 hover:bg-[#258778] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#77776f] sm:text-sm"
//                 >
//                     Explore more <ArrowUpRight size={16} aria-hidden="true" />
//                 </Link>
//             </div>
//         </article>
//     );
// }

// /* ================================================================== */
// /*  Desktop: pinned scroll story                                       */
// /* ================================================================== */

// function PinnedDestinations({ items, stats, navOffsetRem }) {
//     const sectionRef = useRef(null);
//     const [active, setActive] = useState(0);
//     const reduceMotion = useReducedMotion();
//     const densityKey = useDensity();

//     const { scrollYProgress } = useScroll({
//         target: sectionRef,
//         offset: ["start start", "end end"],
//     });

//     useEffect(() => {
//         const update = (p) => {
//             const index = Math.min(items.length - 1, Math.max(0, Math.floor(p * items.length)));
//             setActive(index);
//         };
//         update(scrollYProgress.get());
//         return scrollYProgress.on("change", update);
//     }, [scrollYProgress, items.length]);

//     const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
//     const barScale = useTransform(smooth, [0, 1], [0.02, 1]);

//     const goTo = (i) => {
//         const el = sectionRef.current;
//         if (!el) return;
//         const top = el.getBoundingClientRect().top + window.scrollY;
//         const scrollable = el.offsetHeight - window.innerHeight;
//         window.scrollTo({
//             top: top + ((i + 0.5) / items.length) * scrollable,
//             behavior: reduceMotion ? "auto" : "smooth",
//         });
//     };

//     const slideState = (i) => {
//         if (i < active) return { x: "-16%", opacity: 0, scale: 0.97 };
//         if (i > active) return { x: "16%", opacity: 0, scale: 0.97 };
//         return { x: "0%", opacity: 1, scale: 1 };
//     };

//     return (
//         <section
//             ref={sectionRef}
//             className="relative bg-[#f4f3ee] text-[#171717]"
//             style={{ height: `calc(100vh + ${items.length * SCROLL_PER_SLIDE_VH}vh)` }}
//         >
//             {/* The card fills the space left under the navbar (flex-1), so it can never overflow */}
//             <div
//                 className="sticky top-0 flex h-screen flex-col overflow-hidden"
//                 style={{ paddingTop: `${navOffsetRem}rem`, paddingBottom: "1rem" }}
//             >
//                 <div
//                     aria-hidden="true"
//                     className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full opacity-40 blur-3xl"
//                     style={{ background: "radial-gradient(circle, rgba(37,135,120,0.35), transparent 70%)" }}
//                 />

//                 <div className="relative mx-auto mb-3 flex w-[84vw] max-w-[1560px] shrink-0 items-end justify-between gap-8">
//                     <div>
//                         {densityKey !== "tight" && (
//                             <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#77776f]">
//                                 Study abroad
//                             </p>
//                         )}
//                         <h2 className="mt-1 text-[clamp(1.7rem,2.8vw,2.8rem)] font-semibold leading-[0.95] tracking-[-0.06em]">
//                             Choose your next{" "}
//                             <span className="font-serif font-normal italic text-[#77776f]">chapter.</span>
//                         </h2>
//                     </div>

//                     <nav
//                         aria-label="Study destinations"
//                         className="hidden flex-wrap justify-end gap-1 rounded-full border border-black/10 bg-white/70 p-1 shadow-sm backdrop-blur xl:flex"
//                     >
//                         {items.map((c, i) => (
//                             <button
//                                 key={c.slug}
//                                 type="button"
//                                 onClick={() => goTo(i)}
//                                 aria-current={i === active}
//                                 className={`rounded-full px-3.5 py-1.5 text-[11px] font-bold tracking-wide transition ${
//                                     i === active
//                                         ? "bg-[#171717] text-white shadow"
//                                         : "text-[#62625b] hover:bg-black/5"
//                                 }`}
//                             >
//                                 {c.short || c.name}
//                             </button>
//                         ))}
//                     </nav>
//                 </div>

//                 <div className="relative mx-auto min-h-0 w-[84vw] max-w-[1560px] flex-1">
//                     {items.map((country, i) => (
//                         <motion.div
//                             key={country.slug}
//                             initial={false}
//                             animate={slideState(i)}
//                             transition={
//                                 reduceMotion
//                                     ? { duration: 0 }
//                                     : { duration: 0.75, ease: [0.22, 1, 0.36, 1] }
//                             }
//                             style={{ pointerEvents: i === active ? "auto" : "none" }}
//                             aria-hidden={i !== active}
//                             className="absolute inset-0 will-change-transform"
//                         >
//                             <CountryCard
//                                 country={country}
//                                 stats={stats}
//                                 heightClass="h-full"
//                                 imageHeightClass="h-full min-h-0"
//                                 active={i === active}
//                                 densityKey={densityKey}
//                                 priority={i === 0}
//                             />
//                         </motion.div>
//                     ))}
//                 </div>

//                 <div className="relative mx-auto mt-3 flex w-[84vw] max-w-[1560px] shrink-0 items-center gap-4">
//                     <span className="text-[11px] font-bold tabular-nums tracking-[0.14em] text-[#77776f]">
//                         {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
//                     </span>
//                     <div className="h-[3px] flex-1 overflow-hidden rounded-full bg-black/10">
//                         <motion.div
//                             style={{
//                                 scaleX: barScale,
//                                 backgroundImage: `linear-gradient(90deg, #9fd3c8, ${ACCENT})`,
//                             }}
//                             className="h-full origin-left rounded-full"
//                         />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// /* ================================================================== */
// /*  Mobile / tablet: swipe carousel                                    */
// /* ================================================================== */

// function SwipeDestinations({ items, stats }) {
//     const scroller = useRef(null);
//     const [current, setCurrent] = useState(0);

//     const onScroll = () => {
//         const el = scroller.current;
//         if (!el) return;
//         setCurrent(Math.round(el.scrollLeft / el.clientWidth));
//     };

//     const goTo = (i) => {
//         const el = scroller.current;
//         if (el) el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
//     };

//     return (
//         <section className="bg-[#f4f3ee] px-4 py-14 text-[#171717] sm:px-6 sm:py-16">
//             <div className="mx-auto w-full max-w-[1500px]">
//                 <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#77776f]">Study abroad</p>
//                 <h2 className="mb-5 mt-4 text-[clamp(2.8rem,10vw,5rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
//                     Choose your next
//                     <br />
//                     <span className="font-serif font-normal italic text-[#77776f]">chapter.</span>
//                 </h2>

//                 <div
//                     ref={scroller}
//                     onScroll={onScroll}
//                     className="flex w-full snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
//                 >
//                     {items.map((country, i) => (
//                         <div key={country.slug} className="w-full shrink-0 snap-center px-1 pb-4">
//                             <CountryCard
//                                 country={country}
//                                 stats={stats}
//                                 heightClass="h-auto"
//                                 imageHeightClass="h-[46vh] min-h-[320px]"
//                                 active={i === current}
//                                 densityKey="regular"
//                                 priority={i === 0}
//                             />
//                         </div>
//                     ))}
//                 </div>

//                 <div className="mt-2 flex items-center justify-center gap-2" role="tablist" aria-label="Destinations">
//                     {items.map((c, i) => (
//                         <button
//                             key={c.slug}
//                             type="button"
//                             role="tab"
//                             aria-selected={i === current}
//                             aria-label={c.name}
//                             onClick={() => goTo(i)}
//                             className={`h-2 rounded-full transition-all duration-300 ${
//                                 i === current ? "w-8 bg-[#258778]" : "w-2 bg-black/20"
//                             }`}
//                         />
//                     ))}
//                 </div>

//                 <p className="mt-4 text-center text-[10px] font-semibold tracking-[0.14em] text-[#77776f]">
//                     SWIPE LEFT OR RIGHT TO EXPLORE COUNTRIES
//                 </p>
//             </div>
//         </section>
//     );
// }

// /* ================================================================== */
// /*  Export                                                             */
// /* ================================================================== */

// function Destinations({
//     items = DESTINATIONS,
//     stats = DEFAULT_STATS,
//     navOffsetRem = NAV_OFFSET_REM,
// }) {
//     return (
//         <>
//             <div className="hidden lg:block">
//                 <PinnedDestinations items={items} stats={stats} navOffsetRem={navOffsetRem} />
//             </div>
//             <div className="lg:hidden">
//                 <SwipeDestinations items={items} stats={stats} />
//             </div>
//         </>
//     );
// }

// export default function HomePage() {
//     const reduceMotion = useReducedMotion();
//     const [email, setEmail] = useState("");
//     const [newsletterStatus, setNewsletterStatus] = useState("");
//     const [subscribing, setSubscribing] = useState(false);

//     async function subscribe(event) {
//         event.preventDefault();
//         setNewsletterStatus("");
//         setSubscribing(true);
//         try {
//             const response = await fetch("/api/newsletter", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ email }),
//             });
//             const result = await response.json();
//             if (!response.ok) {
//                 setNewsletterStatus(
//                     result.error || "Unable to subscribe right now. Please try again."
//                 );
//                 return;
//             }
//             setEmail("");
//             setNewsletterStatus("Thanks — your request for programme updates was received.");
//         } catch {
//             setNewsletterStatus("Unable to subscribe right now. Please try again.");
//         } finally {
//             setSubscribing(false);
//         }
//     }

//     const fadeUp = reduceMotion
//         ? {}
//         : {
//               initial: { opacity: 0, y: 22 },
//               whileInView: { opacity: 1, y: 0 },
//               viewport: { once: true, amount: 0.15 },
//               transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
//           };

//     return (
//         <main className="overflow-x-clip bg-[#f7f8fc] text-[#171943]">
//             <Navbar
//                 brandName="CampusSeat"
//                 brandTagline="A Global Education Ecosystem"
//             />

//             <section className="relative isolate flex min-h-[75svh] items-center overflow-hidden rounded-b-[40px] bg-[#171943] px-5 pb-8 pt-20 text-white sm:px-8 sm:pb-10 sm:pt-24 lg:min-h-[75svh] lg:px-14">
//                 <div
//                     aria-hidden="true"
//                     className="absolute inset-0 -z-20 bg-[linear-gradient(135deg,#171943_0%,#35447b_100%)]"
//                 />
//                 <Image
//                     src={heroImage}
//                     alt=""
//                     aria-hidden="true"
//                     fill
//                     sizes="100vw"
//                     unoptimized
//                     priority
//                     className="absolute inset-0 -z-10 h-full w-full object-cover"
//                 />
//                 <video
//                     aria-hidden="true"
//                     autoPlay={!reduceMotion}
//                     muted
//                     loop
//                     playsInline
//                     preload="metadata"
//                     poster={heroImage}
//                     className="absolute inset-0 -z-10 h-full w-full object-cover"
//                 >
//                     <source src="/videos/herosection.mp4" type="video/mp4" />
//                 </video>
//                 <div
//                     aria-hidden="true"
//                     className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(19,23,65,0.82)_0%,rgba(19,23,65,0.64)_50%,rgba(19,23,65,0.22)_100%)]"
//                 />

//                 <motion.div
//                     {...(reduceMotion
//                         ? {}
//                         : {
//                               initial: { opacity: 0, y: 24 },
//                               animate: { opacity: 1, y: 0 },
//                               transition: {
//                                   duration: 0.8,
//                                   ease: [0.22, 1, 0.36, 1],
//                               },
//                           })}
//                     className="relative z-10 mx-auto w-full max-w-[1440px]"
//                 >
//                     <div className="max-w-4xl">
//                         <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.19em] text-white/75 sm:text-sm">
//                             <span className="h-px w-9 bg-[#d6b46c]" />
//                             A Global Education Ecosystem
//                         </p>
//                         <h1 className="mt-6 max-w-4xl text-[clamp(3rem,6vw,6rem)] font-semibold leading-[0.91] tracking-[-0.075em]">
//                             Built for the{" "}
//                             <span className="font-serif font-normal italic text-[#d6b46c]">
//                                 Future of Work
//                             </span>
//                         </h1>
//                         <p className="mt-7 max-w-2xl text-[15px] leading-7 text-white/80 sm:text-lg sm:leading-8">
//                             Degrees, executive programmes, and industry-certified skills from
//                             world-renowned academic and industry partners designed for students,
//                             professionals, and organizations ready to lead.
//                         </p>
//                         <div className="mt-9 flex flex-col gap-3 min-[440px]:flex-row">
//                             <Link
//                                 href="/programs"
//                                 className={`group/primary inline-flex min-h-14 items-center justify-between gap-6 rounded-full bg-[#d6b46c] py-2 pl-7 pr-2 text-sm font-bold text-[#171943] transition hover:bg-white ${linkStyle}`}
//                             >
//                                 Explore Programmes
//                                 <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#171943]/10 transition-transform duration-300 group-hover/primary:rotate-45">
//                                     <ArrowUpRight size={19} aria-hidden="true" />
//                                 </span>
//                             </Link>
//                             <Link
//                                 href="/contact"
//                                 className={`inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/35 bg-white/10 px-7 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-[#171943] ${linkStyle}`}
//                             >
//                                 Talk to an Advisor
//                                 <ArrowRight size={17} aria-hidden="true" />
//                             </Link>
//                         </div>
//                         <p className="mt-8 flex items-center gap-2 text-xs font-medium text-white/70 sm:text-sm">
//                             <Globe2 size={16} aria-hidden="true" className="text-[#d6b46c]" />
//                             Trusted by learners across 50+ countries
//                         </p>
//                     </div>
//                 </motion.div>
//                 <div
//                     aria-hidden="true"
//                     className="absolute bottom-8 right-7 hidden items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white/55 lg:flex"
//                 >
//                     Scroll to explore <span className="h-px w-12 bg-white/40" />
//                 </div>
//             </section>
//             <section
//                 aria-label="CampusSeat in numbers"
//                 className="relative z-10 mx-auto -mt-7 max-w-[1320px] px-5 sm:px-8 lg:px-14"
//             >
//                 <div className="grid overflow-hidden rounded-[26px] border border-[#e5e8f0] bg-white shadow-[0_18px_50px_rgba(20,27,73,0.08)] sm:grid-cols-2 lg:grid-cols-4">
//                     {homepageStats.map((stat, index) => (
//                         <div
//                             key={stat.label}
//                             className={`px-6 py-6 sm:px-8 sm:py-7 ${
//                                 index < homepageStats.length - 1
//                                     ? "border-b border-[#e5e8f0] sm:border-r lg:border-b-0"
//                                     : ""
//                             } ${index === 1 ? "sm:border-r-0 lg:border-r" : ""} ${
//                                 index === 2 ? "sm:border-b-0 lg:border-r" : ""
//                             }`}
//                         >
//                             <p className="text-3xl font-semibold tracking-[-0.06em] sm:text-4xl">
//                                 {stat.value}
//                             </p>
//                             <p className="mt-2 text-xs leading-5 text-[#77829b] sm:text-sm">
//                                 {stat.label}
//                             </p>
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             <section
//                 id="about"
//                 className="bg-[#eef1f7] px-5 py-14 sm:px-8 sm:py-20 lg:px-14"
//             >
//                 <motion.div
//                     initial={reduceMotion ? false : { opacity: 0, y: 28 }}
//                     whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
//                     viewport={{ once: true, amount: 0.2 }}
//                     transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//                     className="relative isolate mx-auto grid max-w-[1320px] overflow-hidden rounded-[30px] bg-[#171943] text-white shadow-[0_28px_80px_rgba(20,27,73,0.16)] sm:rounded-[38px] lg:grid-cols-[1.03fr_0.97fr]"
//                 >
//                     <div
//                         aria-hidden="true"
//                         className="pointer-events-none absolute -right-24 -top-32 -z-10 h-[360px] w-[360px] rounded-full border border-white/[0.08] sm:h-[500px] sm:w-[500px]"
//                     />
//                     <div
//                         aria-hidden="true"
//                         className="pointer-events-none absolute -right-10 -top-20 -z-10 h-[250px] w-[250px] rounded-full border border-[#d6b46c]/20 sm:h-[360px] sm:w-[360px]"
//                     />

//                     <div className="relative flex min-h-[360px] flex-col justify-between overflow-hidden px-7 py-9 sm:px-10 sm:py-12 lg:min-h-[470px] lg:px-14 lg:py-14">
//                         <div
//                             aria-hidden="true"
//                             className="absolute -bottom-28 -left-20 -z-10 h-72 w-72 rounded-full bg-[#354b91]/35 blur-3xl"
//                         />
//                         <div className="relative z-10">
//                             <SectionHeading
//                                 eyebrow="About CampusSeat"
//                                 title="CampusSeat. Five Pathways."
//                                 accent="A World of Opportunity."
//                                 light
//                             />
//                         </div>
//                         <motion.div
//                             aria-hidden="true"
//                             animate={reduceMotion ? undefined : { rotate: 360 }}
//                             transition={
//                                 reduceMotion
//                                     ? undefined
//                                     : { duration: 32, repeat: Infinity, ease: "linear" }
//                             }
//                             className="absolute bottom-10 right-5 hidden h-32 w-32 items-center justify-center rounded-full border border-white/10 sm:flex lg:bottom-14 lg:right-10 lg:h-40 lg:w-40"
//                         >
//                             <span className="h-20 w-20 rounded-full border border-[#d6b46c]/35 lg:h-28 lg:w-28" />
//                             <span className="absolute right-3 top-5 h-2.5 w-2.5 rounded-full bg-[#d6b46c] shadow-[0_0_22px_rgba(214,180,108,0.85)] lg:right-5 lg:top-7" />
//                         </motion.div>
//                         <div className="relative z-10 mt-10 flex flex-wrap gap-2 sm:mt-12">
//                             {[
//                                 "Academic degrees",
//                                 "Executive education",
//                                 "Industry-recognized skills",
//                             ].map((pathway, index) => (
//                                 <motion.span
//                                     key={pathway}
//                                     initial={reduceMotion ? false : { opacity: 0, y: 10 }}
//                                     whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
//                                     viewport={{ once: true }}
//                                     transition={{
//                                         duration: 0.45,
//                                         delay: reduceMotion ? 0 : 0.2 + index * 0.08,
//                                     }}
//                                     className="rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-2 text-[10px] font-semibold tracking-wide text-white/75 backdrop-blur sm:text-[11px]"
//                                 >
//                                     {pathway}
//                                 </motion.span>
//                             ))}
//                         </div>
//                     </div>

//                     <div className="relative flex flex-col justify-center border-t border-white/10 bg-white/[0.035] px-7 py-9 sm:px-10 sm:py-12 lg:border-l lg:border-t-0 lg:px-12 lg:py-14">
//                         <span className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#d6b46c]/25 bg-[#d6b46c]/10 text-[#d6b46c]">
//                             <GraduationCap size={22} aria-hidden="true" />
//                         </span>
//                         <p className="text-[14px] leading-7 text-white/75 sm:text-[15px] sm:leading-8">
//                             CampusSeat is a global education ecosystem built for the way people
//                             actually learn and advance today through academic rigor, executive-level
//                             thinking, and industry-recognized skills, all under one roof. We bring
//                             together six accredited university partners, specialist industry
//                             leaders, and a trusted certification framework, so every learner
//                             whether pursuing a Doctorate or starting a new career in AI has a clear,
//                             credible path forward.
//                         </p>
//                         <div className="my-7 h-px w-full bg-gradient-to-r from-[#d6b46c]/60 via-white/15 to-transparent" />
//                         <p className="text-[14px] leading-7 text-white/60 sm:text-[15px] sm:leading-8">
//                             From full academic degrees to short, career-ready certifications, every
//                             programme on CampusSeat is built around one outcome: making our learners
//                             more valuable in the market they choose to compete in.
//                         </p>
//                     </div>
//                 </motion.div>
//                 <div className="mx-auto mt-14 max-w-[1320px]">
//                     <motion.div
//                         initial={reduceMotion ? false : { opacity: 0, y: 22 }}
//                         whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
//                         viewport={{ once: true, amount: 0.3 }}
//                         transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
//                         className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
//                     >
//                         <div>
//                             <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#202653]">
//                                 What CampusSeat does
//                             </p>
//                             <h3 className="mt-2 text-2xl font-semibold tracking-[-0.05em] text-[#171943] sm:text-3xl">
//                                 Five ways to move your future forward.
//                             </h3>
//                         </div>
//                         <p className="max-w-md text-sm leading-6 text-[#77829b]">
//                             Explore academic degrees, professional education, and industry-focused
//                             learning under one roof.
//                         </p>
//                     </motion.div>

//                     <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
//                         {campusSeatServices.map(({ number, title, description, icon: Icon }, index) => (
//                             <motion.article
//                                 key={number}
//                                 initial={
//                                     reduceMotion
//                                         ? false
//                                         : { opacity: 0, y: 84, scale: 0.97, filter: "blur(6px)" }
//                                 }
//                                 whileInView={
//                                     reduceMotion
//                                         ? undefined
//                                         : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
//                                 }
//                                 viewport={{ once: true, amount: 0.12 }}
//                                 transition={{
//                                     duration: 0.75,
//                                     delay: reduceMotion ? 0 : index * 0.14,
//                                     ease: [0.22, 1, 0.36, 1],
//                                 }}
//                                 className="group relative min-h-[220px] overflow-hidden rounded-[24px] border border-[#e5e8f0] bg-white p-5 shadow-[0_14px_38px_rgba(20,27,73,0.06)] transition duration-300 hover:-translate-y-1.5 hover:border-[#d6b46c]/60 hover:shadow-[0_22px_48px_rgba(20,27,73,0.12)] sm:p-6"
//                             >
//                                 <span className="absolute right-4 top-4 text-[10px] font-bold tracking-[0.14em] text-[#aeb6c8] transition-colors group-hover:text-[#b18b52]">
//                                     {number}
//                                 </span>
//                                 <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#171943] text-[#d6b46c] transition duration-300 group-hover:rotate-[-6deg] group-hover:scale-105">
//                                     <Icon size={20} aria-hidden="true" />
//                                 </span>
//                                 <h4 className="mt-6 text-[16px] font-bold leading-tight tracking-[-0.03em] text-[#171943]">
//                                     {title}
//                                 </h4>
//                                 <p className="mt-3 text-[12px] leading-5 text-[#77829b]">
//                                     {description}
//                                 </p>
//                                 <span
//                                     aria-hidden="true"
//                                     className="absolute inset-x-5 bottom-0 h-[3px] origin-left scale-x-0 bg-[#d6b46c] transition-transform duration-300 group-hover:scale-x-100 sm:inset-x-6"
//                                 />
//                             </motion.article>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             <section
//                 id="why-campussseat"
//                 className="bg-[#eef1f7] px-5 py-20 sm:px-8 sm:py-28 lg:px-14"
//             >
//                 <div className="mx-auto max-w-[1320px]">
//                     <motion.div {...fadeUp}>
//                         <SectionHeading
//                             eyebrow="Why choose CampusSeat"
//                             title="A clear path to"
//                             accent="what comes next."
//                             description="Academic depth, practical learning, and support come together across every pathway."
//                         />
//                     </motion.div>
//                     <div className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//                         {pathways.map(({ title, description, icon: Icon }, index) => (
//                             <motion.article
//                                 key={title}
//                                 {...(reduceMotion
//                                     ? {}
//                                     : {
//                                           initial: { opacity: 0, y: 18 },
//                                           whileInView: { opacity: 1, y: 0 },
//                                           viewport: { once: true, amount: 0.15 },
//                                           transition: {
//                                               duration: 0.55,
//                                               delay: (index % 3) * 0.07,
//                                               ease: [0.22, 1, 0.36, 1],
//                                           },
//                                       })}
//                                 className="rounded-[26px] border border-[#e5e8f0] bg-white p-6 shadow-[0_10px_30px_rgba(20,27,73,0.035)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(20,27,73,0.08)] sm:p-7"
//                             >
//                                 <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#202653]/10 text-[#202653]">
//                                     <Icon size={22} aria-hidden="true" />
//                                 </span>
//                                 <h3 className="mt-6 text-lg font-semibold leading-tight tracking-[-0.035em]">
//                                     {title}
//                                 </h3>
//                                 <p className="mt-3 text-[13px] leading-6 text-[#77829b] sm:text-sm">
//                                     {description}
//                                 </p>
//                             </motion.article>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             <section
//                 id="university-partners"
//                 className="px-5 py-20 sm:px-8 sm:py-28 lg:px-14"
//             >
//                 <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
//                     <motion.div {...fadeUp}>
//                         <SectionHeading
//                             eyebrow="Choose your university"
//                             title="One Application. Six Universities."
//                             accent="Your Choice."
//                         />
//                         <p className="mt-5 text-sm leading-7 text-[#77829b] sm:text-[15px] sm:leading-8">
//                             Every Doctorate, Master&apos;s, and Bachelor&apos;s degree at OneX
//                             Academy is delivered in partnership with a network of six respected
//                             universities. Rather than being assigned a university, you choose the
//                             one that fits your goals, your budget, and the recognition you&apos;re
//                             looking for with the same CampusSeat admissions and career support
//                             behind you no matter which partner you select.
//                         </p>
//                         <p className="mt-4 text-sm leading-7 text-[#77829b] sm:text-[15px] sm:leading-8">
//                             Your admissions advisor will walk you through the differences between
//                             each university partner and help you choose the right fit for your
//                             Doctorate, Master&apos;s, or Bachelor&apos;s degree.
//                         </p>
//                         <Link
//                             href="/contact"
//                             className={`group/compare mt-7 inline-flex min-h-14 items-center justify-between gap-5 rounded-full bg-[#171943] py-2 pl-6 pr-2 text-sm font-semibold text-white transition-colors hover:bg-[#354b91] ${linkStyle}`}
//                         >
//                             Compare University Partners
//                             <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover/compare:rotate-45">
//                                 <ArrowUpRight size={18} aria-hidden="true" />
//                             </span>
//                         </Link>
//                     </motion.div>

//                     <div className="grid gap-3 sm:grid-cols-2">
//                         {universityPartners.map((partner, index) => (
//                             <motion.div
//                                 key={partner.name}
//                                 {...(reduceMotion
//                                     ? {}
//                                     : {
//                                           initial: { opacity: 0, y: 16 },
//                                           whileInView: { opacity: 1, y: 0 },
//                                           viewport: { once: true, amount: 0.2 },
//                                           transition: {
//                                               duration: 0.5,
//                                               delay: (index % 2) * 0.08,
//                                           },
//                                       })}
//                             >
//                                 <UniversityMark {...partner} />
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//             <Destinations />

//             <section
//                 id="how-learning-works"
//                 className="bg-[#171943] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-14"
//             >
//                 <div className="mx-auto max-w-[1320px]">
//                     <motion.div {...fadeUp} className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
//                         <SectionHeading
//                             eyebrow="How learning works"
//                             title="A supported journey,"
//                             accent="at every step."
//                             light
//                         />
//                         <p className="max-w-md text-sm leading-7 text-white/65 sm:text-[15px]">
//                             From discovering a pathway to moving forward after graduation, support
//                             stays with you throughout.
//                         </p>
//                     </motion.div>
//                     <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//                         {learningSteps.map(({ number, title, description, icon: Icon }) => (
//                             <li
//                                 key={number}
//                                 className="rounded-[26px] border border-white/10 bg-white/[0.045] p-6 transition-colors hover:bg-white/[0.08] sm:p-7"
//                             >
//                                 <div className="flex items-center justify-between">
//                                     <span className="font-serif text-3xl italic text-[#d6b46c]">
//                                         {number}
//                                     </span>
//                                     <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-[#d6b46c]">
//                                         <Icon size={20} aria-hidden="true" />
//                                     </span>
//                                 </div>
//                                 <h3 className="mt-6 text-xl font-semibold tracking-[-0.035em]">
//                                     {title}
//                                 </h3>
//                                 <p className="mt-2 text-sm leading-6 text-white/65">
//                                     {description}
//                                 </p>
//                             </li>
//                         ))}
//                     </ol>
//                 </div>
//             </section>

//             <section
//                 id="industry-partnerships"
//                 className="bg-[#eef1f7] px-5 py-20 sm:px-8 sm:py-28 lg:px-14"
//             >
//                 <div className="mx-auto max-w-[1320px]">
//                     <motion.div {...fadeUp}>
//                         <SectionHeading
//                             eyebrow="Industry partnerships"
//                             title="Learning Backed by"
//                             accent="the Industry Itself."
//                             description="CampusSeat's skill-based programmes are built directly with the organizations that hire for these roles, so every learner graduates with capabilities employers actually need."
//                         />
//                     </motion.div>
//                     <div className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//                         {industryPartners.map((partner) => (
//                             <article
//                                 key={partner.name}
//                                 className="flex h-full flex-col rounded-[26px] border border-[#e5e8f0] bg-white p-6 shadow-[0_10px_30px_rgba(20,27,73,0.035)]"
//                             >
//                                 <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#171943] text-sm font-bold tracking-wide text-[#d6b46c]">
//                                     {partner.monogram}
//                                 </span>
//                                 <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.15em] text-[#202653]">
//                                     {partner.category}
//                                 </p>
//                                 <h3 className="mt-2 text-xl font-semibold leading-tight tracking-[-0.04em]">
//                                     {partner.name}
//                                 </h3>
//                                 <p className="mt-3 text-sm leading-6 text-[#77829b]">
//                                     {partner.description}
//                                 </p>
//                             </article>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             <section
//                 id="faqs"
//                 className="px-5 py-20 sm:px-8 sm:py-28 lg:px-14"
//             >
//                 <div className="mx-auto grid max-w-[1320px] gap-9 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
//                     <motion.div {...fadeUp}>
//                         <SectionHeading
//                             eyebrow="Frequently asked questions"
//                             title="A few helpful"
//                             accent="answers."
//                             description="Learn more about our university network, programmes, and international learning community."
//                         />
//                     </motion.div>
//                     <div className="divide-y divide-[#e5e8f0] rounded-[26px] border border-[#e5e8f0] bg-white px-5 shadow-[0_10px_30px_rgba(20,27,73,0.04)] sm:px-8">
//                         {homepageFaqs.map(({ question, answer }) => (
//                             <details key={question} className="group py-5">
//                                 <summary
//                                     className={`flex cursor-pointer list-none items-center justify-between gap-5 text-[15px] font-semibold leading-6 tracking-[-0.02em] marker:hidden sm:text-base [&::-webkit-details-marker]:hidden ${linkStyle}`}
//                                 >
//                                     {question}
//                                     <ChevronDown
//                                         aria-hidden="true"
//                                         size={18}
//                                         className="shrink-0 text-[#354b91] transition-transform duration-300 group-open:rotate-180"
//                                     />
//                                 </summary>
//                                 <p className="mt-3 pr-7 text-sm leading-7 text-[#77829b]">
//                                     {answer}
//                                 </p>
//                             </details>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             <footer className="bg-[#111638] px-5 pb-7 pt-14 text-white sm:px-8 sm:pt-16 lg:px-14">
//                 <div className="mx-auto max-w-[1320px]">
//                     <div className="grid gap-11 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_0.8fr_1.2fr]">
//                         <div className="max-w-sm">
//                             <Link
//                                 href="/"
//                                 aria-label="CampusSeat home"
//                                 className={`inline-flex items-center gap-3 rounded-xl ${linkStyle}`}
//                             >
//                                 <span className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-white text-[#171943]">
//                                     <GraduationCap size={23} aria-hidden="true" />
//                                 </span>
//                                 <span className="text-xl font-bold tracking-[-0.05em]">
//                                     CampusSeat<span className="text-[#d6b46c]">.</span>
//                                 </span>
//                             </Link>
//                             <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.15em] text-[#d6b46c]">
//                                 A Global Education Ecosystem
//                             </p>
//                             <p className="mt-4 text-sm leading-7 text-white/60">
//                                 Accredited degrees from six university partners, executive
//                                 education, and industry-certified skills — delivered through a
//                                 global network built for your career.
//                             </p>
//                         </div>

//                         <div>
//                             <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-white/90">
//                                 Programmes
//                             </h2>
//                             <ul className="mt-5 space-y-3">
//                                 {programmeLinks.map((item) => (
//                                     <li key={item.label}>
//                                         <Link
//                                             href={item.href}
//                                             className={`text-sm text-white/60 transition hover:text-white ${linkStyle}`}
//                                         >
//                                             {item.label}
//                                         </Link>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>

//                         <div>
//                             <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-white/90">
//                                 University Partners
//                             </h2>
//                             <ul className="mt-5 space-y-3">
//                                 {universityPartners.map((partner) => (
//                                     <li
//                                         key={partner.name}
//                                         className="text-sm text-white/60"
//                                     >
//                                         {partner.name}
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>

//                         <div>
//                             <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-white/90">
//                                 Company & Resources
//                             </h2>
//                             <ul className="mt-5 space-y-3">
//                                 {[
//                                     ["About Us", "#about"],
//                                     ["Partners", "#university-partners"],
//                                     ["Contact", "/contact"],
//                                     ["FAQs", "#faqs"],
//                                     ["Career Support", "/contact"],
//                                 ].map(([label, href]) => (
//                                     <li key={label}>
//                                         <Link
//                                             href={href}
//                                             className={`text-sm text-white/60 transition hover:text-white ${linkStyle}`}
//                                         >
//                                             {label}
//                                         </Link>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>

//                         <div>
//                             <h2 className="text-lg font-semibold tracking-[-0.03em]">
//                                 Get programme updates
//                             </h2>
//                             <p className="mt-2 text-sm leading-6 text-white/60">
//                                 Get programme updates and global education insights.
//                             </p>
//                             <form
//                                 className="mt-5"
//                                 onSubmit={subscribe}
//                                 aria-label="Subscribe to programme updates"
//                             >
//                                 <label htmlFor="newsletter-email" className="sr-only">
//                                     Email address
//                                 </label>
//                                 <div className="flex rounded-full border border-white/20 bg-white/5 p-1.5 focus-within:ring-4 focus-within:ring-[#d6b46c]/20">
//                                     <span className="flex items-center pl-3 text-white/50">
//                                         <Mail size={17} aria-hidden="true" />
//                                     </span>
//                                     <input
//                                         id="newsletter-email"
//                                         type="email"
//                                         required
//                                         maxLength={254}
//                                         autoComplete="email"
//                                         value={email}
//                                         onChange={(event) => setEmail(event.target.value)}
//                                         placeholder="Your email address"
//                                         className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-white outline-none placeholder:text-white/40"
//                                     />
//                                     <button
//                                         type="submit"
//                                         disabled={subscribing}
//                                         aria-label="Subscribe"
//                                         className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d6b46c] text-[#171943] transition hover:bg-white disabled:opacity-60"
//                                     >
//                                         <ArrowRight size={17} aria-hidden="true" />
//                                     </button>
//                                 </div>
//                                 {newsletterStatus && (
//                                     <p
//                                         role="status"
//                                         className="mt-3 flex items-start gap-2 text-xs leading-5 text-[#d6b46c]"
//                                     >
//                                         <Check
//                                             size={15}
//                                             aria-hidden="true"
//                                             className="mt-0.5 shrink-0"
//                                         />
//                                         {newsletterStatus}
//                                     </p>
//                                 )}
//                             </form>
//                             <p className="mt-5 text-sm text-white/70">
//                                 Have a question? Our admissions team is here to help.{" "}
//                                 <Link
//                                     href="/contact"
//                                     className={`font-semibold text-white underline decoration-white/35 underline-offset-4 hover:decoration-white ${linkStyle}`}
//                                 >
//                                     Contact Us
//                                 </Link>
//                             </p>
//                         </div>
//                     </div>

//                     <p className="pt-6 text-[11px] leading-6 text-white/45">
//                         © CampusSeat. All rights reserved. Academic degrees delivered through
//                         our university partner network. Skill-based certifications issued by
//                         Braincruise (AI Academy) and VocaTech (Hospitality and Real Estate
//                         Academies, KSDA-approved framework).
//                     </p>
//                 </div>
//             </footer>
//         </main>
//     );
// }



































"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    animate,
    motion,
    useReducedMotion,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion";
import {
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
import unitedstate from "./images/unitedstate.jpg";
import australia from "./images/australiaimage.jpg";
import germany from "./images/germany.jpg";
import india from "./images/tajmahalimage.jpg";
import {
    homepageFaqs,
    homepageStats,
    industryPartners,
    learningSteps,
    pathways,
    programmeLinks,
    universityPartners,
} from "../data/homepage";

const heroImage =
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2400&q=90";

const linkStyle =
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#202653]";

function SectionHeading({ eyebrow, title, accent, description, light = false }) {
    return (
        <div className="max-w-3xl">
            <p
                className={`text-xs font-bold uppercase tracking-[0.18em] ${
                    light ? "text-[#d6b46c]" : "text-[#202653]"
                }`}
            >
                {eyebrow}
            </p>
            <h2
                className={`mt-4 text-[clamp(2.4rem,5.5vw,4.7rem)] font-semibold leading-[0.98] tracking-[-0.065em] ${
                    light ? "text-white" : "text-[#171943]"
                }`}
            >
                {title}{" "}
                {accent && (
                    <span
                        className={`font-serif font-normal italic ${
                            light ? "text-[#d6b46c]" : "text-[#202653]"
                        }`}
                    >
                        {accent}
                    </span>
                )}
            </h2>
            {description && (
                <p
                    className={`mt-5 max-w-2xl text-sm leading-7 sm:text-base sm:leading-8 ${
                        light ? "text-white/70" : "text-[#77829b]"
                    }`}
                >
                    {description}
                </p>
            )}
        </div>
    );
}

function UniversityMark({ name, monogram }) {
    return (
        <div className="flex min-h-[112px] items-center gap-4 rounded-[22px] border border-[#e5e8f0] bg-white p-5 shadow-[0_12px_35px_rgba(20,27,73,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(20,27,73,0.09)] sm:min-h-[126px] sm:p-6">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#e5e8f0] bg-[#eef1f7] text-lg font-bold tracking-[-0.04em] text-[#354b91]">
                {monogram}
            </span>
            <span className="text-[17px] font-bold uppercase tracking-[-0.035em] text-[#202653] sm:text-lg">
                {name}
            </span>
        </div>
    );
}

/* ================================================================== */
/*  CONFIG  — change things here, the layout adapts automatically      */
/* ================================================================== */

const ACCENT = "#258778";

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

    return (
        <span className={className}>
            {active ? (reduceMotion ? to : value) : 0}
            {suffix}
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
                        <stop offset="0%" stopColor="#9fd3c8" />
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
            className={`group/uni flex min-w-0 items-center gap-3 rounded-2xl border border-[#e8e7e1] bg-white/85 px-3 transition duration-300 hover:-translate-y-0.5 hover:border-[#258778]/40 hover:shadow-[0_10px_30px_rgba(37,135,120,0.12)] ${density.rowPad}`}
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
                className="shrink-0 text-[#b5b5ad] transition group-hover/uni:text-[#258778]"
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
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-[#258778]">
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
                        "radial-gradient(120% 70% at 100% 0%, rgba(37,135,120,0.09) 0%, rgba(255,255,255,0) 60%), linear-gradient(#fff,#fbfbf8)",
                }}
            >
                <div>
                    <p className="flex items-center gap-2 text-[9px] font-bold tracking-[0.2em] text-[#77776f] sm:text-[10px]">
                        <span className="h-px w-6 bg-[#258778]" aria-hidden="true" />
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
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#258778]/10 px-2.5 py-1 text-[10px] font-bold text-[#1d6c60]">
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
                    className="inline-flex min-h-11 w-fit items-center gap-3 rounded-full bg-[#171717] px-6 py-2.5 text-xs font-bold text-white transition hover:-translate-y-1 hover:bg-[#258778] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#77776f] sm:text-sm"
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
                    style={{ background: "radial-gradient(circle, rgba(37,135,120,0.35), transparent 70%)" }}
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
                                backgroundImage: `linear-gradient(90deg, #9fd3c8, ${ACCENT})`,
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
                                i === current ? "w-8 bg-[#258778]" : "w-2 bg-black/20"
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

function Destinations({
    items = DESTINATIONS,
    stats = DEFAULT_STATS,
    navOffsetRem = NAV_OFFSET_REM,
}) {
    return (
        <>
            <div className="hidden lg:block">
                <PinnedDestinations items={items} stats={stats} navOffsetRem={navOffsetRem} />
            </div>
            <div className="lg:hidden">
                <SwipeDestinations items={items} stats={stats} />
            </div>
        </>
    );
}

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

    const fadeUp = reduceMotion
        ? {}
        : {
              initial: { opacity: 0, y: 22 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, amount: 0.15 },
              transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
          };

    return (
        <main className="overflow-x-clip bg-[#f7f8fc] text-[#171943]">
            <Navbar
                brandName="CampusSeat"
                brandTagline="A Global Education Ecosystem"
            />

            <section className="relative isolate flex min-h-[75svh] items-center overflow-hidden rounded-b-[40px] bg-[#171943] px-5 pb-8 pt-20 text-white sm:px-8 sm:pb-10 sm:pt-24 lg:min-h-[75svh] lg:px-14">
                <div
                    aria-hidden="true"
                    className="absolute inset-0 -z-20 bg-[linear-gradient(135deg,#171943_0%,#35447b_100%)]"
                />
                <Image
                    src={heroImage}
                    alt=""
                    aria-hidden="true"
                    fill
                    sizes="100vw"
                    unoptimized
                    priority
                    className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <video
                    aria-hidden="true"
                    autoPlay={!reduceMotion}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster={heroImage}
                    className="absolute inset-0 -z-10 h-full w-full object-cover"
                >
                    <source src="/videos/herosection.mp4" type="video/mp4" />
                </video>
                <div
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(19,23,65,0.82)_0%,rgba(19,23,65,0.64)_50%,rgba(19,23,65,0.22)_100%)]"
                />

                <motion.div
                    {...(reduceMotion
                        ? {}
                        : {
                              initial: { opacity: 0, y: 24 },
                              animate: { opacity: 1, y: 0 },
                              transition: {
                                  duration: 0.8,
                                  ease: [0.22, 1, 0.36, 1],
                              },
                          })}
                    className="relative z-10 mx-auto w-full max-w-[1440px]"
                >
                    <div className="max-w-4xl">
                        <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.19em] text-white/75 sm:text-sm">
                            <span className="h-px w-9 bg-[#d6b46c]" />
                            A Global Education Ecosystem
                        </p>
                        <h1 className="mt-6 max-w-4xl text-[clamp(3rem,6vw,6rem)] font-semibold leading-[0.91] tracking-[-0.075em]">
                            Built for the{" "}
                            <span className="font-serif font-normal italic text-[#d6b46c]">
                                Future of Work
                            </span>
                        </h1>
                        <p className="mt-7 max-w-2xl text-[15px] leading-7 text-white/80 sm:text-lg sm:leading-8">
                            Degrees, executive programmes, and industry-certified skills from
                            world-renowned academic and industry partners designed for students,
                            professionals, and organizations ready to lead.
                        </p>
                        <div className="mt-9 flex flex-col gap-3 min-[440px]:flex-row">
                            <Link
                                href="/programs"
                                className={`group/primary inline-flex min-h-14 items-center justify-between gap-6 rounded-full bg-[#d6b46c] py-2 pl-7 pr-2 text-sm font-bold text-[#171943] transition hover:bg-white ${linkStyle}`}
                            >
                                Explore Programmes
                                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#171943]/10 transition-transform duration-300 group-hover/primary:rotate-45">
                                    <ArrowUpRight size={19} aria-hidden="true" />
                                </span>
                            </Link>
                            <Link
                                href="/contact"
                                className={`inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/35 bg-white/10 px-7 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-[#171943] ${linkStyle}`}
                            >
                                Talk to an Advisor
                                <ArrowRight size={17} aria-hidden="true" />
                            </Link>
                        </div>
                        <p className="mt-8 flex items-center gap-2 text-xs font-medium text-white/70 sm:text-sm">
                            <Globe2 size={16} aria-hidden="true" className="text-[#d6b46c]" />
                            Trusted by learners across 50+ countries
                        </p>
                    </div>
                </motion.div>
                <div
                    aria-hidden="true"
                    className="absolute bottom-8 right-7 hidden items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white/55 lg:flex"
                >
                    Scroll to explore <span className="h-px w-12 bg-white/40" />
                </div>
            </section>
            <section
                aria-label="CampusSeat in numbers"
                className="relative z-10 mx-auto -mt-7 max-w-[1320px] px-5 sm:px-8 lg:px-14"
            >
                <div className="grid overflow-hidden rounded-[26px] border border-[#e5e8f0] bg-white shadow-[0_18px_50px_rgba(20,27,73,0.08)] sm:grid-cols-2 lg:grid-cols-4">
                    {homepageStats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className={`px-6 py-6 sm:px-8 sm:py-7 ${
                                index < homepageStats.length - 1
                                    ? "border-b border-[#e5e8f0] sm:border-r lg:border-b-0"
                                    : ""
                            } ${index === 1 ? "sm:border-r-0 lg:border-r" : ""} ${
                                index === 2 ? "sm:border-b-0 lg:border-r" : ""
                            }`}
                        >
                            <p className="text-3xl font-semibold tracking-[-0.06em] sm:text-4xl">
                                {stat.value}
                            </p>
                            <p className="mt-2 text-xs leading-5 text-[#77829b] sm:text-sm">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section
                id="about"
                className="px-5 py-20 sm:px-8 sm:py-28 lg:px-14"
            >
                <motion.div
                    {...fadeUp}
                    className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-20"
                >
                    <div>
                        <SectionHeading
                            eyebrow="About CampusSeat"
                            title="CampusSeat. Five Pathways."
                            accent="A World of Opportunity."
                        />
                    </div>
                    <div className="space-y-5 text-[14px] leading-7 text-[#62645d] sm:text-[15px] sm:leading-8">
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
                            programme on CampusSeat is built around one outcome: making our
                            learners more valuable in the market they choose to compete in.
                        </p>
                    </div>
                </motion.div>
            </section>

            <section
                id="why-campussseat"
                className="bg-[#eef1f7] px-5 py-20 sm:px-8 sm:py-28 lg:px-14"
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
                    <div className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {pathways.map(({ title, description, icon: Icon }, index) => (
                            <motion.article
                                key={title}
                                {...(reduceMotion
                                    ? {}
                                    : {
                                          initial: { opacity: 0, y: 18 },
                                          whileInView: { opacity: 1, y: 0 },
                                          viewport: { once: true, amount: 0.15 },
                                          transition: {
                                              duration: 0.55,
                                              delay: (index % 3) * 0.07,
                                              ease: [0.22, 1, 0.36, 1],
                                          },
                                      })}
                                className="rounded-[26px] border border-[#e5e8f0] bg-white p-6 shadow-[0_10px_30px_rgba(20,27,73,0.035)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(20,27,73,0.08)] sm:p-7"
                            >
                                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#202653]/10 text-[#202653]">
                                    <Icon size={22} aria-hidden="true" />
                                </span>
                                <h3 className="mt-6 text-lg font-semibold leading-tight tracking-[-0.035em]">
                                    {title}
                                </h3>
                                <p className="mt-3 text-[13px] leading-6 text-[#77829b] sm:text-sm">
                                    {description}
                                </p>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            <section
                id="university-partners"
                className="px-5 py-20 sm:px-8 sm:py-28 lg:px-14"
            >
                <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
                    <motion.div {...fadeUp}>
                        <SectionHeading
                            eyebrow="Choose your university"
                            title="One Application. Six Universities."
                            accent="Your Choice."
                        />
                        <p className="mt-5 text-sm leading-7 text-[#77829b] sm:text-[15px] sm:leading-8">
                            Every Doctorate, Master&apos;s, and Bachelor&apos;s degree at OneX
                            Academy is delivered in partnership with a network of six respected
                            universities. Rather than being assigned a university, you choose the
                            one that fits your goals, your budget, and the recognition you&apos;re
                            looking for with the same CampusSeat admissions and career support
                            behind you no matter which partner you select.
                        </p>
                        <p className="mt-4 text-sm leading-7 text-[#77829b] sm:text-[15px] sm:leading-8">
                            Your admissions advisor will walk you through the differences between
                            each university partner and help you choose the right fit for your
                            Doctorate, Master&apos;s, or Bachelor&apos;s degree.
                        </p>
                        <Link
                            href="/contact"
                            className={`group/compare mt-7 inline-flex min-h-14 items-center justify-between gap-5 rounded-full bg-[#171943] py-2 pl-6 pr-2 text-sm font-semibold text-white transition-colors hover:bg-[#354b91] ${linkStyle}`}
                        >
                            Compare University Partners
                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover/compare:rotate-45">
                                <ArrowUpRight size={18} aria-hidden="true" />
                            </span>
                        </Link>
                    </motion.div>

                    <div className="grid gap-3 sm:grid-cols-2">
                        {universityPartners.map((partner, index) => (
                            <motion.div
                                key={partner.name}
                                {...(reduceMotion
                                    ? {}
                                    : {
                                          initial: { opacity: 0, y: 16 },
                                          whileInView: { opacity: 1, y: 0 },
                                          viewport: { once: true, amount: 0.2 },
                                          transition: {
                                              duration: 0.5,
                                              delay: (index % 2) * 0.08,
                                          },
                                      })}
                            >
                                <UniversityMark {...partner} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <Destinations />

            <section
                id="how-learning-works"
                className="bg-[#171943] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-14"
            >
                <div className="mx-auto max-w-[1320px]">
                    <motion.div {...fadeUp} className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                        <SectionHeading
                            eyebrow="How learning works"
                            title="A supported journey,"
                            accent="at every step."
                            light
                        />
                        <p className="max-w-md text-sm leading-7 text-white/65 sm:text-[15px]">
                            From discovering a pathway to moving forward after graduation, support
                            stays with you throughout.
                        </p>
                    </motion.div>
                    <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {learningSteps.map(({ number, title, description, icon: Icon }) => (
                            <li
                                key={number}
                                className="rounded-[26px] border border-white/10 bg-white/[0.045] p-6 transition-colors hover:bg-white/[0.08] sm:p-7"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="font-serif text-3xl italic text-[#d6b46c]">
                                        {number}
                                    </span>
                                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-[#d6b46c]">
                                        <Icon size={20} aria-hidden="true" />
                                    </span>
                                </div>
                                <h3 className="mt-6 text-xl font-semibold tracking-[-0.035em]">
                                    {title}
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-white/65">
                                    {description}
                                </p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <section
                id="industry-partnerships"
                className="bg-[#eef1f7] px-5 py-20 sm:px-8 sm:py-28 lg:px-14"
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
                    <div className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {industryPartners.map((partner) => (
                            <article
                                key={partner.name}
                                className="flex h-full flex-col rounded-[26px] border border-[#e5e8f0] bg-white p-6 shadow-[0_10px_30px_rgba(20,27,73,0.035)]"
                            >
                                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#171943] text-sm font-bold tracking-wide text-[#d6b46c]">
                                    {partner.monogram}
                                </span>
                                <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.15em] text-[#202653]">
                                    {partner.category}
                                </p>
                                <h3 className="mt-2 text-xl font-semibold leading-tight tracking-[-0.04em]">
                                    {partner.name}
                                </h3>
                                <p className="mt-3 text-sm leading-6 text-[#77829b]">
                                    {partner.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section
                id="faqs"
                className="px-5 py-20 sm:px-8 sm:py-28 lg:px-14"
            >
                <div className="mx-auto grid max-w-[1320px] gap-9 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
                    <motion.div {...fadeUp}>
                        <SectionHeading
                            eyebrow="Frequently asked questions"
                            title="A few helpful"
                            accent="answers."
                            description="Learn more about our university network, programmes, and international learning community."
                        />
                    </motion.div>
                    <div className="divide-y divide-[#e5e8f0] rounded-[26px] border border-[#e5e8f0] bg-white px-5 shadow-[0_10px_30px_rgba(20,27,73,0.04)] sm:px-8">
                        {homepageFaqs.map(({ question, answer }) => (
                            <details key={question} className="group py-5">
                                <summary
                                    className={`flex cursor-pointer list-none items-center justify-between gap-5 text-[15px] font-semibold leading-6 tracking-[-0.02em] marker:hidden sm:text-base [&::-webkit-details-marker]:hidden ${linkStyle}`}
                                >
                                    {question}
                                    <ChevronDown
                                        aria-hidden="true"
                                        size={18}
                                        className="shrink-0 text-[#354b91] transition-transform duration-300 group-open:rotate-180"
                                    />
                                </summary>
                                <p className="mt-3 pr-7 text-sm leading-7 text-[#77829b]">
                                    {answer}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <footer className="bg-[#111638] px-5 pb-7 pt-14 text-white sm:px-8 sm:pt-16 lg:px-14">
                <div className="mx-auto max-w-[1320px]">
                    <div className="grid gap-11 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_0.8fr_1.2fr]">
                        <div className="max-w-sm">
                            <Link
                                href="/"
                                aria-label="CampusSeat home"
                                className={`inline-flex items-center gap-3 rounded-xl ${linkStyle}`}
                            >
                                <span className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-white text-[#171943]">
                                    <GraduationCap size={23} aria-hidden="true" />
                                </span>
                                <span className="text-xl font-bold tracking-[-0.05em]">
                                    CampusSeat<span className="text-[#d6b46c]">.</span>
                                </span>
                            </Link>
                            <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.15em] text-[#d6b46c]">
                                A Global Education Ecosystem
                            </p>
                            <p className="mt-4 text-sm leading-7 text-white/60">
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
                                            className={`text-sm text-white/60 transition hover:text-white ${linkStyle}`}
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
                                    <li
                                        key={partner.name}
                                        className="text-sm text-white/60"
                                    >
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
                                    ["Career Support", "/contact"],
                                ].map(([label, href]) => (
                                    <li key={label}>
                                        <Link
                                            href={href}
                                            className={`text-sm text-white/60 transition hover:text-white ${linkStyle}`}
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
                            <p className="mt-2 text-sm leading-6 text-white/60">
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
                                <div className="flex rounded-full border border-white/20 bg-white/5 p-1.5 focus-within:ring-4 focus-within:ring-[#d6b46c]/20">
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
                                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d6b46c] text-[#171943] transition hover:bg-white disabled:opacity-60"
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

                    <p className="pt-6 text-[11px] leading-6 text-white/45">
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
