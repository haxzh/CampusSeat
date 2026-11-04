"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
// import Navbar from "@/src/components/Navbar";
import {
    ArrowRight,
    ArrowUpRight,
    BookOpen,
    BriefcaseBusiness,
    Check,
    ChevronDown,
    Clock3,
    Code2,
    GraduationCap,
    Globe2,
    Heart,
    MapPin,
    Palette,
    Search,
    SlidersHorizontal,
    X,
    Building2,
    FlaskConical,
    Scale,
    Stethoscope,
    Calculator,
} from "lucide-react";

const countries = [
    { id: "all", name: "All countries", code: "", count: 24 },
    { id: "india", name: "India", code: "in" },
    { id: "usa", name: "USA", code: "us" },
    { id: "france", name: "France", code: "fr" },
    { id: "germany", name: "Germany", code: "de" },
    { id: "malta", name: "Malta", code: "mt" },
    { id: "uae", name: "UAE", code: "ae" },
];

const programs = [
    // INDIA
    { id: "in-bca", country: "india", countryName: "India", flag: "in", title: "Bachelor of Computer Applications", short: "BCA", field: "Technology", duration: "3–4 years", mode: "On-campus / Online", description: "Build foundations in programming, databases, software development and modern computing.", subjects: ["Programming", "Web development", "Databases"], icon: Code2, level: "Undergraduate", color: "#1F4E8C" },
    { id: "in-bba", country: "india", countryName: "India", flag: "in", title: "Bachelor of Business Administration", short: "BBA", field: "Business", duration: "3–4 years", mode: "On-campus / Online", description: "Develop business knowledge in management, marketing, finance and entrepreneurship.", subjects: ["Management", "Marketing", "Finance"], icon: BriefcaseBusiness, level: "Undergraduate", color: "#9A6B36" },
    { id: "in-bcom", country: "india", countryName: "India", flag: "in", title: "Bachelor of Commerce", short: "B.Com", field: "Commerce", duration: "3 years", mode: "On-campus / Online", description: "Explore accounting, economics, taxation and the fundamentals of business.", subjects: ["Accounting", "Economics", "Taxation"], icon: Calculator, level: "Undergraduate", color: "#1C6B5F" },
    { id: "in-btech", country: "india", countryName: "India", flag: "in", title: "Bachelor of Technology", short: "B.Tech", field: "Engineering", duration: "4 years", mode: "On-campus", description: "Study engineering principles and apply them through laboratories, projects and specialisations.", subjects: ["Computer science", "Mechanical", "Electronics"], icon: Building2, level: "Undergraduate", color: "#77776F" },

    // USA
    { id: "us-bs", country: "usa", countryName: "USA", flag: "us", title: "Bachelor of Science", short: "B.S.", field: "Science", duration: "4 years", mode: "On-campus", description: "Choose from scientific disciplines with a strong focus on research, analysis and practical learning.", subjects: ["Biology", "Physics", "Mathematics"], icon: FlaskConical, level: "Undergraduate", color: "#8C1D40" },
    { id: "us-ba", country: "usa", countryName: "USA", flag: "us", title: "Bachelor of Arts", short: "B.A.", field: "Arts & Humanities", duration: "4 years", mode: "On-campus", description: "Build a broad academic foundation across humanities, social sciences and communication.", subjects: ["Psychology", "Economics", "English"], icon: BookOpen, level: "Undergraduate", color: "#8C1D40" },
    { id: "us-cs", country: "usa", countryName: "USA", flag: "us", title: "Bachelor of Science in Computer Science", short: "B.S. Computer Science", field: "Technology", duration: "4 years", mode: "On-campus", description: "Learn algorithms, software engineering, systems and the foundations of computing.", subjects: ["Programming", "Algorithms", "AI"], icon: Code2, level: "Undergraduate", color: "#8C1D40" },
    { id: "us-business", country: "usa", countryName: "USA", flag: "us", title: "Bachelor of Business Administration", short: "BBA", field: "Business", duration: "4 years", mode: "On-campus", description: "Prepare for business careers through core management subjects and applied projects.", subjects: ["Management", "Accounting", "Marketing"], icon: BriefcaseBusiness, level: "Undergraduate", color: "#8C1D40" },

    // FRANCE
    { id: "fr-bba", country: "france", countryName: "France", flag: "fr", title: "Bachelor in Business Administration", short: "BBA", field: "Business", duration: "3–4 years", mode: "On-campus", description: "Explore international business, management and entrepreneurship in a European setting.", subjects: ["International business", "Marketing", "Management"], icon: BriefcaseBusiness, level: "Undergraduate", color: "#315B86" },
    { id: "fr-design", country: "france", countryName: "France", flag: "fr", title: "Bachelor in Design", short: "BA Design", field: "Design", duration: "3 years", mode: "On-campus", description: "Develop creative practice in visual communication, product thinking and digital design.", subjects: ["Visual design", "Creative practice", "Digital media"], icon: Palette, level: "Undergraduate", color: "#315B86" },
    { id: "fr-computer", country: "france", countryName: "France", flag: "fr", title: "Bachelor in Computer Science", short: "BSc Computer Science", field: "Technology", duration: "3 years", mode: "On-campus", description: "Build technical foundations in programming, data structures and software systems.", subjects: ["Programming", "Data", "Software"], icon: Code2, level: "Undergraduate", color: "#315B86" },
    { id: "fr-hospitality", country: "france", countryName: "France", flag: "fr", title: "Bachelor in Hospitality Management", short: "BA Hospitality", field: "Hospitality", duration: "3 years", mode: "On-campus", description: "Learn hotel operations, guest experience and international tourism management.", subjects: ["Hotel operations", "Tourism", "Service management"], icon: Globe2, level: "Undergraduate", color: "#315B86" },

    // GERMANY
    { id: "de-bsc", country: "germany", countryName: "Germany", flag: "de", title: "Bachelor of Science in Computer Science", short: "B.Sc. Informatik", field: "Technology", duration: "3 years", mode: "On-campus", description: "Study computer science fundamentals, software systems and applied problem-solving.", subjects: ["Informatics", "Algorithms", "Software"], icon: Code2, level: "Undergraduate", color: "#55715B" },
    { id: "de-engineering", country: "germany", countryName: "Germany", flag: "de", title: "Bachelor of Engineering", short: "B.Eng.", field: "Engineering", duration: "3–3.5 years", mode: "On-campus", description: "Combine engineering theory with practical projects and technical applications.", subjects: ["Mechanical", "Electrical", "Industrial"], icon: Building2, level: "Undergraduate", color: "#55715B" },
    { id: "de-business", country: "germany", countryName: "Germany", flag: "de", title: "Bachelor in International Business", short: "B.A. International Business", field: "Business", duration: "3–3.5 years", mode: "On-campus", description: "Understand global markets, cross-cultural management and international trade.", subjects: ["Economics", "Management", "Global markets"], icon: BriefcaseBusiness, level: "Undergraduate", color: "#55715B" },
    { id: "de-media", country: "germany", countryName: "Germany", flag: "de", title: "Bachelor in Media & Communication", short: "B.A. Media", field: "Arts & Humanities", duration: "3 years", mode: "On-campus", description: "Explore media industries, communication theory and digital storytelling.", subjects: ["Media studies", "Communication", "Digital culture"], icon: BookOpen, level: "Undergraduate", color: "#55715B" },

    // MALTA
    { id: "mt-it", country: "malta", countryName: "Malta", flag: "mt", title: "Bachelor of Science in Computing", short: "B.Sc. Computing", field: "Technology", duration: "3 years", mode: "On-campus", description: "Develop skills in software development, computing systems and digital technologies.", subjects: ["Software", "Networks", "Databases"], icon: Code2, level: "Undergraduate", color: "#A94B52" },
    { id: "mt-business", country: "malta", countryName: "Malta", flag: "mt", title: "Bachelor in Business Management", short: "BA Business", field: "Business", duration: "3 years", mode: "On-campus", description: "Build a foundation in business operations, management and organisational strategy.", subjects: ["Management", "Accounting", "Marketing"], icon: BriefcaseBusiness, level: "Undergraduate", color: "#A94B52" },
    { id: "mt-tourism", country: "malta", countryName: "Malta", flag: "mt", title: "Bachelor in Tourism & Hospitality", short: "BA Tourism", field: "Hospitality", duration: "3 years", mode: "On-campus", description: "Prepare for careers in tourism, events and the international hospitality sector.", subjects: ["Tourism", "Events", "Hospitality"], icon: Globe2, level: "Undergraduate", color: "#A94B52" },
    { id: "mt-accounting", country: "malta", countryName: "Malta", flag: "mt", title: "Bachelor in Accountancy", short: "BA Accountancy", field: "Commerce", duration: "3 years", mode: "On-campus", description: "Study financial reporting, audit, taxation and business finance.", subjects: ["Accounting", "Audit", "Finance"], icon: Calculator, level: "Undergraduate", color: "#A94B52" },

    // UAE
    { id: "ae-business", country: "uae", countryName: "UAE", flag: "ae", title: "Bachelor of Business Administration", short: "BBA", field: "Business", duration: "3–4 years", mode: "On-campus", description: "Study business fundamentals in a dynamic international commercial environment.", subjects: ["Management", "Finance", "Marketing"], icon: BriefcaseBusiness, level: "Undergraduate", color: "#8A6A35" },
    { id: "ae-it", country: "uae", countryName: "UAE", flag: "ae", title: "Bachelor of Information Technology", short: "BSc IT", field: "Technology", duration: "3–4 years", mode: "On-campus", description: "Explore software, networks, information systems and digital transformation.", subjects: ["IT systems", "Cybersecurity", "Programming"], icon: Code2, level: "Undergraduate", color: "#8A6A35" },
    { id: "ae-engineering", country: "uae", countryName: "UAE", flag: "ae", title: "Bachelor of Engineering", short: "B.Eng.", field: "Engineering", duration: "4 years", mode: "On-campus", description: "Develop engineering knowledge through technical study and applied project work.", subjects: ["Civil", "Mechanical", "Electrical"], icon: Building2, level: "Undergraduate", color: "#8A6A35" },
    { id: "ae-health", country: "uae", countryName: "UAE", flag: "ae", title: "Bachelor of Public Health", short: "BPH", field: "Health Sciences", duration: "4 years", mode: "On-campus", description: "Explore community health, prevention, health systems and population wellbeing.", subjects: ["Public health", "Health policy", "Epidemiology"], icon: Stethoscope, level: "Undergraduate", color: "#8A6A35" },
];

const fields = ["All fields", "Technology", "Business", "Commerce", "Engineering", "Science", "Arts & Humanities", "Design", "Hospitality", "Health Sciences"];

const countryDetails = {
    india: { headline: "Study in India", copy: "Explore undergraduate pathways across technology, business, commerce and more.", accent: "#1F4E8C", image: "photo-1562774053-701939374585", note: "Check UGC recognition, programme mode and institution-specific eligibility." },
    usa: { headline: "Study in the USA", copy: "Discover a broad range of four-year bachelor's degrees and flexible academic pathways.", accent: "#8C1D40", image: "photo-1498243691581-b145c3f54a5a", note: "Admission, credit requirements and English proficiency vary by institution." },
    france: { headline: "Study in France", copy: "Explore business, design, technology and hospitality programmes in France.", accent: "#315B86", image: "photo-1502602898657-3e91760cbb34", note: "Check the language of instruction and Campus France procedures where applicable." },
    germany: { headline: "Study in Germany", copy: "Compare engineering, computing, business and humanities pathways.", accent: "#55715B", image: "photo-1467269204594-9661b134dd2b", note: "Verify university entrance qualification, language requirements and any Studienkolleg pathway." },
    malta: { headline: "Study in Malta", copy: "Explore computing, business, accountancy and tourism programmes in an English-speaking study destination.", accent: "#A94B52", image: "photo-1518548419970-58e3b4079ab2", note: "Confirm accreditation, entry requirements and visa conditions with the institution." },
    uae: { headline: "Study in the UAE", copy: "Discover international university campuses and undergraduate opportunities across the Emirates.", accent: "#8A6A35", image: "photo-1512453979798-5ea266f8880c", note: "Check campus-specific accreditation, programme recognition and admission criteria." },
};

const imageUrl = (id, width = 1400) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

function Flag({ code }) {
    return <img src={`https://flagcdn.com/w40/${code}.png`} alt="" width="20" height="15" className="h-[15px] w-5 rounded-[3px] object-cover shadow-sm" />;
}

function ProgramCard({ program, saved, onSave }) {
    const Icon = program.icon;
    return (
        <article className="group flex min-h-[370px] flex-col overflow-hidden rounded-[26px] border border-[#e3e0d6] bg-[#fffefa] transition duration-300 hover:-translate-y-1 hover:border-[#aaa99d] hover:shadow-[0_24px_60px_rgba(32,59,55,0.12)]">
            <div className="flex items-start justify-between px-6 pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl" style={{ backgroundColor: `${program.color}16`, color: program.color }}>
                    <Icon size={23} strokeWidth={1.8} />
                </div>
                <button type="button" onClick={() => onSave(program.id)} aria-label={saved ? "Remove from saved programs" : "Save program"} aria-pressed={saved} className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e9e6dc] text-[#77776f] transition hover:border-[#d6a2a8] hover:text-[#b94c5a]">
                    <Heart size={17} className={saved ? "fill-[#c45a68] text-[#c45a68]" : ""} />
                </button>
            </div>
            <div className="px-6 pt-5">
                <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[.16em] text-[#85857a]">
                    <span>{program.field}</span><span className="h-1 w-1 rounded-full bg-[#c9c6ba]" /><span>{program.countryName}</span>
                </div>
                <h3 className="mt-3 text-[20px] font-semibold leading-[1.2] tracking-[-.035em] text-[#171717]">{program.title}</h3>
                <p className="mt-1.5 text-xs font-medium text-[#9a998f]">{program.short}</p>
                <p className="mt-4 text-[13px] leading-[1.75] text-[#6b6d64]">{program.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {program.subjects.map(subject => <span key={subject} className="rounded-full border border-[#e8e6dc] bg-[#f8f7f2] px-3 py-1.5 text-[10px] font-medium text-[#696b62]">{subject}</span>)}
                </div>
            </div>
            <div className="mt-auto px-6 pb-6 pt-5">
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[#eeece4] pt-4 text-[11px] text-[#77776f]">
                    <span className="inline-flex items-center gap-1.5"><Clock3 size={14} />{program.duration}</span>
                    <span className="inline-flex items-center gap-1.5"><Globe2 size={14} />{program.mode}</span>
                </div>
                <Link href={`/counselling?program=${encodeURIComponent(program.title)}&country=${encodeURIComponent(program.countryName)}`} className="mt-5 flex items-center justify-between rounded-full bg-[#171717] py-2 pl-5 pr-2 text-[13px] font-semibold text-white transition hover:bg-[#77776f]">
                    Explore program <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15"><ArrowUpRight size={17} /></span>
                </Link>
            </div>
        </article>
    );
}

export default function BachelorProgramsPage() {
    const [selectedCountry, setSelectedCountry] = useState("all");
    const [selectedField, setSelectedField] = useState("All fields");
    const [search, setSearch] = useState("");
    const [saved, setSaved] = useState([]);
    const [showAll, setShowAll] = useState(false);

    const filteredPrograms = useMemo(() => {
        const q = search.trim().toLowerCase();
        return programs.filter(p => {
            const countryMatch = selectedCountry === "all" || p.country === selectedCountry;
            const fieldMatch = selectedField === "All fields" || p.field === selectedField;
            const textMatch = !q || [p.title, p.short, p.field, p.countryName, ...p.subjects].join(" ").toLowerCase().includes(q);
            return countryMatch && fieldMatch && textMatch;
        });
    }, [selectedCountry, selectedField, search]);

    const selectedDetails = selectedCountry === "all" ? null : countryDetails[selectedCountry];
    const visiblePrograms = showAll ? filteredPrograms : filteredPrograms.slice(0, 9);
    const clearFilters = () => { setSelectedCountry("all"); setSelectedField("All fields"); setSearch(""); setShowAll(false); };
    const toggleSave = (id) => setSaved(current => current.includes(id) ? current.filter(x => x !== id) : [...current, id]);

    return (
        <main className="min-h-screen bg-[#f5f3ed] text-[#171717]">
            {/* <Navbar /> */}

            {/* HERO */}
            <section className="relative isolate overflow-hidden bg-[#f5f3ed]">
                <div className="absolute inset-0 -z-10 opacity-[.24]" style={{ backgroundImage: "radial-gradient(#77776f 0.7px, transparent 0.7px)", backgroundSize: "17px 17px" }} />
                <div className="mx-auto grid max-w-[1500px] items-center gap-12 px-5 pb-16 pt-12 sm:px-8 md:pb-24 md:pt-16 lg:grid-cols-[1.05fr_.95fr] lg:px-14">
                    <div>
                        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.2em] text-[#8a897f]"><span>CampusSeat</span><span>/</span><span>Bachelor's programs</span></div>
                        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#e3e0d6] bg-white/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[.17em] text-[#1c6b5f]"><GraduationCap size={14} /> Undergraduate study guide</div>
                        <h1 className="mt-6 max-w-3xl text-[44px] font-semibold leading-[1.02] tracking-[-.065em] sm:text-6xl lg:text-[76px]">
                            Your first degree.
                            <span className="mt-2 block font-serif font-normal italic text-[#77776f]">A world of possibility.</span>
                        </h1>
                        <p className="mt-6 max-w-xl text-[15px] leading-[1.9] text-[#6b6d64] sm:text-base">
                            Explore bachelor's programs across six study destinations. Compare fields, discover course pathways and find a starting point for your future.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <a href="#browse-programs" className="inline-flex items-center gap-3 rounded-full bg-[#171717] px-6 py-4 text-[13px] font-semibold text-white transition hover:bg-[#77776f]">Browse bachelor's programs <ArrowRight size={17} /></a>
                            <Link href="/career-guidance" className="inline-flex items-center gap-2 rounded-full border border-[#d8d5ca] bg-white/60 px-6 py-4 text-[13px] font-semibold text-[#34362f] transition hover:bg-white">Get study guidance <ArrowUpRight size={16} /></Link>
                        </div>
                        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-[#e3e0d6] pt-6 text-[12px] text-[#77776f]">
                            <span className="inline-flex items-center gap-2"><Globe2 size={16} className="text-[#1c6b5f]" /> 6 study destinations</span>
                            <span className="inline-flex items-center gap-2"><BookOpen size={16} className="text-[#1c6b5f]" /> 24 course pathways</span>
                            <span className="inline-flex items-center gap-2"><GraduationCap size={16} className="text-[#1c6b5f]" /> Undergraduate level</span>
                        </div>
                    </div>
                    <div className="relative mx-auto w-full max-w-[600px]">
                        <div className="absolute -left-5 top-10 h-28 w-28 rounded-full border border-[#b7b3a6]" />
                        <div className="relative h-[390px] overflow-hidden rounded-[34px] border-[7px] border-white shadow-[0_28px_75px_rgba(32,59,55,.18)] sm:h-[520px]">
                            {/* <img src={imageUrl("photo-1523050854058-8df90110c9f1",1100)} alt="University graduates celebrating together" className="h-full w-full object-cover"/> */}
                            <img
                                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=90"
                                alt="Students studying together at university"
                                className="h-full w-full object-cover"
                                loading="eager"
                                onError={(e) => {
                                    e.currentTarget.src =
                                        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=85";
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/65 via-transparent to-[#171717]/10" />
                            <div className="absolute bottom-7 left-7 right-7 text-white">
                                <p className="text-[10px] font-bold uppercase tracking-[.2em] text-white/75">Start your journey</p>
                                <p className="mt-2 max-w-sm text-3xl font-semibold leading-tight tracking-[-.04em]">Choose a course that opens doors.</p>
                            </div>
                        </div>
                        <div className="absolute -bottom-5 -left-3 rounded-2xl border border-[#e3e0d6] bg-[#fffefa] px-5 py-4 shadow-[0_15px_40px_rgba(32,59,55,.12)] sm:-left-8">
                            <div className="flex items-center gap-3">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1c6b5f]/10 text-[#1c6b5f]"><Globe2 size={20} /></span>
                                <div><p className="text-sm font-semibold">Study across borders</p><p className="mt-1 text-[10px] text-[#8a897f]">India · USA · Europe · UAE</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* COUNTRY SELECTOR */}
            <section className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-14">
                <div className="rounded-[28px] border border-[#e3e0d6] bg-[#fffefa] p-5 shadow-[0_12px_36px_rgba(32,59,55,.06)] sm:p-7">
                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
                        <div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#8a897f]">Choose your destination</p><h2 className="mt-2 text-2xl font-semibold tracking-[-.04em]">Where would you like to study?</h2></div>
                        <p className="text-xs text-[#8a897f]">Select a country to explore its bachelor's pathways</p>
                    </div>
                    <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
                        {countries.map(country => {
                            const active = selectedCountry === country.id;
                            const count = country.id === "all" ? programs.length : programs.filter(p => p.country === country.id).length;
                            return (
                                <button key={country.id} type="button" onClick={() => { setSelectedCountry(country.id); setShowAll(false); }} aria-pressed={active} className={`group flex min-h-[76px] items-center gap-3 rounded-2xl border px-3 py-3 text-left transition ${active ? "border-[#171717] bg-[#171717] text-white shadow-lg" : "border-[#e9e6dc] bg-[#fbfaf5] text-[#34362f] hover:border-[#aaa99d] hover:bg-white"}`}>
                                    {country.code ? <Flag code={country.code} /> : <Globe2 size={19} className={active ? "text-white" : "text-[#1c6b5f]"} />}
                                    <span className="min-w-0"><span className="block text-[12px] font-semibold">{country.name}</span><span className={`mt-1 block text-[10px] ${active ? "text-white/60" : "text-[#9a998f]"}`}>{count} programs</span></span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* COUNTRY FEATURE */}
            {selectedDetails && (
                <section className="mx-auto max-w-[1500px] px-5 pt-12 sm:px-8 lg:px-14">
                    <div className="grid overflow-hidden rounded-[30px] border border-[#e3e0d6] bg-[#fffefa] md:grid-cols-[.9fr_1.1fr]">
                        <div className="relative min-h-[230px] md:min-h-[300px]">
                            <img src={imageUrl(selectedDetails.image, 1000)} alt={selectedDetails.headline} className="absolute inset-0 h-full w-full object-cover" />
                            <div className="absolute inset-0" style={{ background: `linear-gradient(0deg, ${selectedDetails.accent}b8, transparent 85%)` }} />
                            <h2 className="absolute bottom-6 left-7 text-3xl font-semibold tracking-[-.04em] text-white">{selectedDetails.headline}</h2>
                        </div>
                        <div className="flex flex-col justify-center p-7 md:p-10">
                            <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#8a897f]">Destination spotlight</p>
                            <p className="mt-4 max-w-xl text-2xl font-semibold leading-snug tracking-[-.035em] text-[#20231e]">{selectedDetails.copy}</p>
                            <p className="mt-4 max-w-xl text-[12px] leading-6 text-[#77776f]">{selectedDetails.note}</p>
                            <a href="#browse-programs" className="mt-6 inline-flex w-fit items-center gap-2 text-[13px] font-semibold text-[#1c6b5f] hover:underline">View available programs <ArrowRight size={16} /></a>
                        </div>
                    </div>
                </section>
            )}

            {/* PROGRAM DIRECTORY */}
            <section id="browse-programs" className="mx-auto max-w-[1500px] scroll-mt-24 px-5 pb-20 pt-16 sm:px-8 md:pt-20 lg:px-14">
                <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#8a897f]">Explore courses</p>
                        <h2 className="mt-3 text-3xl font-semibold tracking-[-.05em] sm:text-4xl">{selectedCountry === "all" ? "Bachelor's programs" : `Bachelor's programs in ${countries.find(c => c.id === selectedCountry)?.name}`}</h2>
                        <p className="mt-3 max-w-xl text-sm leading-7 text-[#77776f]">Find the right course for your future. Search and compare undergraduate study options by country and subject.</p>
                    </div>
                    <span className="w-fit rounded-full border border-[#e3e0d6] bg-white px-4 py-2.5 text-xs text-[#77776f]"><strong className="text-[#171717]">{filteredPrograms.length}</strong> programs listed</span>
                </div>

                <div className="mt-8 rounded-[24px] border border-[#e3e0d6] bg-white p-4 sm:p-5">
                    <div className="grid gap-3 md:grid-cols-[1fr_250px]">
                        <div className="relative">
                            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8a897f]" />
                            <input value={search} onChange={e => { setSearch(e.target.value); setShowAll(false); }} placeholder="Search course, subject or keyword..." className="h-12 w-full rounded-full border border-[#e7e4da] bg-[#fbfaf5] pl-11 pr-10 text-sm outline-none transition focus:border-[#77776f] focus:ring-4 focus:ring-[#77776f]/10" />
                            {search && <button type="button" onClick={() => setSearch("")} aria-label="Clear search" className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-[#8a897f] hover:bg-black/5"><X size={15} /></button>}
                        </div>
                        <div className="relative">
                            <SlidersHorizontal size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#8a897f]" />
                            <select value={selectedField} onChange={e => { setSelectedField(e.target.value); setShowAll(false); }} className="h-12 w-full appearance-none rounded-full border border-[#e7e4da] bg-[#fbfaf5] pl-11 pr-9 text-sm text-[#55584f] outline-none focus:border-[#77776f]">
                                {fields.map(field => <option key={field}>{field}</option>)}
                            </select>
                            <ChevronDown size={15} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#8a897f]" />
                        </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between border-t border-[#f0eee7] pt-4">
                        <p className="text-[10px] font-bold uppercase tracking-[.16em] text-[#9a998f]">Quick country filters</p>
                        {(selectedCountry !== "all" || selectedField !== "All fields" || search) && <button type="button" onClick={clearFilters} className="inline-flex items-center gap-1 text-xs font-semibold text-[#1c6b5f]"><X size={13} /> Reset all</button>}
                    </div>
                    <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                        {countries.map(country => <button key={country.id} type="button" onClick={() => { setSelectedCountry(country.id); setShowAll(false); }} className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition ${selectedCountry === country.id ? "bg-[#77776f] text-white" : "border border-[#e7e4da] bg-[#fbfaf5] text-[#6b6d64] hover:border-[#aaa99d]"}`}>{country.name}</button>)}
                    </div>
                </div>

                <div className="mb-5 mt-7 flex items-center justify-between">
                    <p className="text-xs text-[#8a897f]">Showing <strong className="text-[#34362f]">{visiblePrograms.length}</strong> of {filteredPrograms.length} programs</p>
                    {saved.length > 0 && <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1c6b5f]"><Heart size={14} className="fill-current" />{saved.length} saved</span>}
                </div>

                {visiblePrograms.length ? (
                    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                        {visiblePrograms.map(program => <ProgramCard key={program.id} program={program} saved={saved.includes(program.id)} onSave={toggleSave} />)}
                    </div>
                ) : (
                    <div className="rounded-[26px] border border-dashed border-[#d8d5ca] bg-white px-6 py-16 text-center">
                        <BookOpen size={32} className="mx-auto text-[#aaa99d]" />
                        <h3 className="mt-4 text-xl font-semibold">No matching programs</h3>
                        <p className="mt-2 text-sm text-[#77776f]">Try another search term or reset your filters.</p>
                        <button onClick={clearFilters} className="mt-5 rounded-full bg-[#171717] px-6 py-3 text-xs font-semibold text-white">Show all programs</button>
                    </div>
                )}

                {filteredPrograms.length > 9 && <div className="mt-10 flex justify-center"><button onClick={() => setShowAll(v => !v)} className="inline-flex items-center gap-3 rounded-full border border-[#d8d5ca] bg-white px-7 py-3.5 text-xs font-semibold text-[#34362f] transition hover:border-[#77776f] hover:bg-[#fbfaf5]">{showAll ? "Show fewer programs" : `View all ${filteredPrograms.length} programs`}<ArrowRight size={16} className={showAll ? "-rotate-90" : "rotate-90"} /></button></div>}
            </section>

            {/* ADMISSION CHECKLIST */}
            <section className="bg-[#fbfaf5] py-16 sm:py-20">
                <div className="mx-auto grid max-w-[1500px] gap-10 px-5 sm:px-8 lg:grid-cols-[.85fr_1.15fr] lg:px-14">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#8a897f]">Before you apply</p>
                        <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-.05em] sm:text-4xl">A little preparation goes a long way.</h2>
                        <p className="mt-4 max-w-md text-sm leading-7 text-[#77776f]">Entry requirements are different in every country and institution. Use this checklist as a starting point, then confirm the exact criteria with your chosen university.</p>
                        <Link href="/career-guidance" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#1c6b5f] hover:underline">Talk to an advisor <ArrowUpRight size={16} /></Link>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                        {[
                            ["Academic transcripts", "School certificates and marksheets"],
                            ["English or local language", "IELTS, TOEFL or other accepted proof if required"],
                            ["Passport & documents", "Valid passport, photos and supporting records"],
                            ["Course-specific criteria", "Prerequisites, portfolio or entrance tests where applicable"],
                        ].map(([title, desc]) => <div key={title} className="rounded-2xl border border-[#e3e0d6] bg-white p-5"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1c6b5f]/10 text-[#1c6b5f]"><Check size={16} /></span><h3 className="mt-4 text-sm font-semibold">{title}</h3><p className="mt-2 text-xs leading-6 text-[#77776f]">{desc}</p></div>)}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 md:py-20 lg:px-14">
                <div className="relative overflow-hidden rounded-[30px] bg-[#171717] px-7 py-10 text-white sm:px-12 sm:py-14">
                    <div className="absolute -right-16 -top-28 h-80 w-80 rounded-full border-[45px] border-white/[.06]" />
                    <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
                        <div className="max-w-2xl"><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#c6b99e]">Your next chapter</p><h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-.05em] sm:text-4xl">Not sure where to begin?</h2><p className="mt-3 max-w-xl text-sm leading-7 text-white/65">Get help exploring courses, destinations and admission requirements that match your goals.</p></div>
                        <Link href="/career-guidance" className="inline-flex w-fit items-center gap-3 rounded-full bg-[#f5f3ed] px-7 py-4 text-xs font-bold text-[#171717] transition hover:bg-white">Get personalised guidance <ArrowUpRight size={17} /></Link>
                    </div>
                </div>
                <p className="mt-5 max-w-5xl text-[10px] leading-5 text-[#96958b]">Course titles and durations shown are indicative examples, not a guarantee that every institution offers the programme. Admission criteria, language of instruction, tuition fees, recognition and visa rules vary by institution and intake. Confirm details directly with the university before applying.</p>
            </section>
        </main>
    );
}
