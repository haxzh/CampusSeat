// "use client";

// import { useMemo, useState } from "react";
// import Link from "next/link";
// // import Navbar from "@/src/components/Navbar";
// import {
//     ArrowRight,
//     ArrowUpRight,
//     BookOpen,
//     BriefcaseBusiness,
//     Check,
//     ChevronDown,
//     Clock3,
//     Code2,
//     GraduationCap,
//     Globe2,
//     Heart,
//     MapPin,
//     Palette,
//     Search,
//     SlidersHorizontal,
//     X,
//     Building2,
//     FlaskConical,
//     Scale,
//     Stethoscope,
//     Calculator,
// } from "lucide-react";

// const countries = [
//     { id: "all", name: "All countries", code: "", count: 24 },
//     { id: "india", name: "India", code: "in" },
//     { id: "usa", name: "USA", code: "us" },
//     { id: "france", name: "France", code: "fr" },
//     { id: "germany", name: "Germany", code: "de" },
//     { id: "malta", name: "Malta", code: "mt" },
//     { id: "uae", name: "UAE", code: "ae" },
// ];

// const programs = [
//     // INDIA
//     { id: "in-bca", country: "india", countryName: "India", flag: "in", title: "Bachelor of Computer Applications", short: "BCA", field: "Technology", duration: "3–4 years", mode: "On-campus / Online", description: "Build foundations in programming, databases, software development and modern computing.", subjects: ["Programming", "Web development", "Databases"], icon: Code2, level: "Undergraduate", color: "#1F4E8C" },
//     { id: "in-bba", country: "india", countryName: "India", flag: "in", title: "Bachelor of Business Administration", short: "BBA", field: "Business", duration: "3–4 years", mode: "On-campus / Online", description: "Develop business knowledge in management, marketing, finance and entrepreneurship.", subjects: ["Management", "Marketing", "Finance"], icon: BriefcaseBusiness, level: "Undergraduate", color: "#9A6B36" },
//     { id: "in-bcom", country: "india", countryName: "India", flag: "in", title: "Bachelor of Commerce", short: "B.Com", field: "Commerce", duration: "3 years", mode: "On-campus / Online", description: "Explore accounting, economics, taxation and the fundamentals of business.", subjects: ["Accounting", "Economics", "Taxation"], icon: Calculator, level: "Undergraduate", color: "#1C6B5F" },
//     { id: "in-btech", country: "india", countryName: "India", flag: "in", title: "Bachelor of Technology", short: "B.Tech", field: "Engineering", duration: "4 years", mode: "On-campus", description: "Study engineering principles and apply them through laboratories, projects and specialisations.", subjects: ["Computer science", "Mechanical", "Electronics"], icon: Building2, level: "Undergraduate", color: "#77776F" },

//     // USA
//     { id: "us-bs", country: "usa", countryName: "USA", flag: "us", title: "Bachelor of Science", short: "B.S.", field: "Science", duration: "4 years", mode: "On-campus", description: "Choose from scientific disciplines with a strong focus on research, analysis and practical learning.", subjects: ["Biology", "Physics", "Mathematics"], icon: FlaskConical, level: "Undergraduate", color: "#8C1D40" },
//     { id: "us-ba", country: "usa", countryName: "USA", flag: "us", title: "Bachelor of Arts", short: "B.A.", field: "Arts & Humanities", duration: "4 years", mode: "On-campus", description: "Build a broad academic foundation across humanities, social sciences and communication.", subjects: ["Psychology", "Economics", "English"], icon: BookOpen, level: "Undergraduate", color: "#8C1D40" },
//     { id: "us-cs", country: "usa", countryName: "USA", flag: "us", title: "Bachelor of Science in Computer Science", short: "B.S. Computer Science", field: "Technology", duration: "4 years", mode: "On-campus", description: "Learn algorithms, software engineering, systems and the foundations of computing.", subjects: ["Programming", "Algorithms", "AI"], icon: Code2, level: "Undergraduate", color: "#8C1D40" },
//     { id: "us-business", country: "usa", countryName: "USA", flag: "us", title: "Bachelor of Business Administration", short: "BBA", field: "Business", duration: "4 years", mode: "On-campus", description: "Prepare for business careers through core management subjects and applied projects.", subjects: ["Management", "Accounting", "Marketing"], icon: BriefcaseBusiness, level: "Undergraduate", color: "#8C1D40" },

//     // FRANCE
//     { id: "fr-bba", country: "france", countryName: "France", flag: "fr", title: "Bachelor in Business Administration", short: "BBA", field: "Business", duration: "3–4 years", mode: "On-campus", description: "Explore international business, management and entrepreneurship in a European setting.", subjects: ["International business", "Marketing", "Management"], icon: BriefcaseBusiness, level: "Undergraduate", color: "#315B86" },
//     { id: "fr-design", country: "france", countryName: "France", flag: "fr", title: "Bachelor in Design", short: "BA Design", field: "Design", duration: "3 years", mode: "On-campus", description: "Develop creative practice in visual communication, product thinking and digital design.", subjects: ["Visual design", "Creative practice", "Digital media"], icon: Palette, level: "Undergraduate", color: "#315B86" },
//     { id: "fr-computer", country: "france", countryName: "France", flag: "fr", title: "Bachelor in Computer Science", short: "BSc Computer Science", field: "Technology", duration: "3 years", mode: "On-campus", description: "Build technical foundations in programming, data structures and software systems.", subjects: ["Programming", "Data", "Software"], icon: Code2, level: "Undergraduate", color: "#315B86" },
//     { id: "fr-hospitality", country: "france", countryName: "France", flag: "fr", title: "Bachelor in Hospitality Management", short: "BA Hospitality", field: "Hospitality", duration: "3 years", mode: "On-campus", description: "Learn hotel operations, guest experience and international tourism management.", subjects: ["Hotel operations", "Tourism", "Service management"], icon: Globe2, level: "Undergraduate", color: "#315B86" },

//     // GERMANY
//     { id: "de-bsc", country: "germany", countryName: "Germany", flag: "de", title: "Bachelor of Science in Computer Science", short: "B.Sc. Informatik", field: "Technology", duration: "3 years", mode: "On-campus", description: "Study computer science fundamentals, software systems and applied problem-solving.", subjects: ["Informatics", "Algorithms", "Software"], icon: Code2, level: "Undergraduate", color: "#55715B" },
//     { id: "de-engineering", country: "germany", countryName: "Germany", flag: "de", title: "Bachelor of Engineering", short: "B.Eng.", field: "Engineering", duration: "3–3.5 years", mode: "On-campus", description: "Combine engineering theory with practical projects and technical applications.", subjects: ["Mechanical", "Electrical", "Industrial"], icon: Building2, level: "Undergraduate", color: "#55715B" },
//     { id: "de-business", country: "germany", countryName: "Germany", flag: "de", title: "Bachelor in International Business", short: "B.A. International Business", field: "Business", duration: "3–3.5 years", mode: "On-campus", description: "Understand global markets, cross-cultural management and international trade.", subjects: ["Economics", "Management", "Global markets"], icon: BriefcaseBusiness, level: "Undergraduate", color: "#55715B" },
//     { id: "de-media", country: "germany", countryName: "Germany", flag: "de", title: "Bachelor in Media & Communication", short: "B.A. Media", field: "Arts & Humanities", duration: "3 years", mode: "On-campus", description: "Explore media industries, communication theory and digital storytelling.", subjects: ["Media studies", "Communication", "Digital culture"], icon: BookOpen, level: "Undergraduate", color: "#55715B" },

//     // MALTA
//     { id: "mt-it", country: "malta", countryName: "Malta", flag: "mt", title: "Bachelor of Science in Computing", short: "B.Sc. Computing", field: "Technology", duration: "3 years", mode: "On-campus", description: "Develop skills in software development, computing systems and digital technologies.", subjects: ["Software", "Networks", "Databases"], icon: Code2, level: "Undergraduate", color: "#A94B52" },
//     { id: "mt-business", country: "malta", countryName: "Malta", flag: "mt", title: "Bachelor in Business Management", short: "BA Business", field: "Business", duration: "3 years", mode: "On-campus", description: "Build a foundation in business operations, management and organisational strategy.", subjects: ["Management", "Accounting", "Marketing"], icon: BriefcaseBusiness, level: "Undergraduate", color: "#A94B52" },
//     { id: "mt-tourism", country: "malta", countryName: "Malta", flag: "mt", title: "Bachelor in Tourism & Hospitality", short: "BA Tourism", field: "Hospitality", duration: "3 years", mode: "On-campus", description: "Prepare for careers in tourism, events and the international hospitality sector.", subjects: ["Tourism", "Events", "Hospitality"], icon: Globe2, level: "Undergraduate", color: "#A94B52" },
//     { id: "mt-accounting", country: "malta", countryName: "Malta", flag: "mt", title: "Bachelor in Accountancy", short: "BA Accountancy", field: "Commerce", duration: "3 years", mode: "On-campus", description: "Study financial reporting, audit, taxation and business finance.", subjects: ["Accounting", "Audit", "Finance"], icon: Calculator, level: "Undergraduate", color: "#A94B52" },

//     // UAE
//     { id: "ae-business", country: "uae", countryName: "UAE", flag: "ae", title: "Bachelor of Business Administration", short: "BBA", field: "Business", duration: "3–4 years", mode: "On-campus", description: "Study business fundamentals in a dynamic international commercial environment.", subjects: ["Management", "Finance", "Marketing"], icon: BriefcaseBusiness, level: "Undergraduate", color: "#8A6A35" },
//     { id: "ae-it", country: "uae", countryName: "UAE", flag: "ae", title: "Bachelor of Information Technology", short: "BSc IT", field: "Technology", duration: "3–4 years", mode: "On-campus", description: "Explore software, networks, information systems and digital transformation.", subjects: ["IT systems", "Cybersecurity", "Programming"], icon: Code2, level: "Undergraduate", color: "#8A6A35" },
//     { id: "ae-engineering", country: "uae", countryName: "UAE", flag: "ae", title: "Bachelor of Engineering", short: "B.Eng.", field: "Engineering", duration: "4 years", mode: "On-campus", description: "Develop engineering knowledge through technical study and applied project work.", subjects: ["Civil", "Mechanical", "Electrical"], icon: Building2, level: "Undergraduate", color: "#8A6A35" },
//     { id: "ae-health", country: "uae", countryName: "UAE", flag: "ae", title: "Bachelor of Public Health", short: "BPH", field: "Health Sciences", duration: "4 years", mode: "On-campus", description: "Explore community health, prevention, health systems and population wellbeing.", subjects: ["Public health", "Health policy", "Epidemiology"], icon: Stethoscope, level: "Undergraduate", color: "#8A6A35" },
// ];

// const fields = ["All fields", "Technology", "Business", "Commerce", "Engineering", "Science", "Arts & Humanities", "Design", "Hospitality", "Health Sciences"];

// const countryDetails = {
//     india: { headline: "Study in India", copy: "Explore undergraduate pathways across technology, business, commerce and more.", accent: "#1F4E8C", image: "photo-1562774053-701939374585", note: "Check UGC recognition, programme mode and institution-specific eligibility." },
//     usa: { headline: "Study in the USA", copy: "Discover a broad range of four-year bachelor's degrees and flexible academic pathways.", accent: "#8C1D40", image: "photo-1498243691581-b145c3f54a5a", note: "Admission, credit requirements and English proficiency vary by institution." },
//     france: { headline: "Study in France", copy: "Explore business, design, technology and hospitality programmes in France.", accent: "#315B86", image: "photo-1502602898657-3e91760cbb34", note: "Check the language of instruction and Campus France procedures where applicable." },
//     germany: { headline: "Study in Germany", copy: "Compare engineering, computing, business and humanities pathways.", accent: "#55715B", image: "photo-1467269204594-9661b134dd2b", note: "Verify university entrance qualification, language requirements and any Studienkolleg pathway." },
//     malta: { headline: "Study in Malta", copy: "Explore computing, business, accountancy and tourism programmes in an English-speaking study destination.", accent: "#A94B52", image: "photo-1518548419970-58e3b4079ab2", note: "Confirm accreditation, entry requirements and visa conditions with the institution." },
//     uae: { headline: "Study in the UAE", copy: "Discover international university campuses and undergraduate opportunities across the Emirates.", accent: "#8A6A35", image: "photo-1512453979798-5ea266f8880c", note: "Check campus-specific accreditation, programme recognition and admission criteria." },
// };

// const imageUrl = (id, width = 1400) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

// function Flag({ code }) {
//     return <img src={`https://flagcdn.com/w40/${code}.png`} alt="" width="20" height="15" className="h-[15px] w-5 rounded-[3px] object-cover shadow-sm" />;
// }

// function ProgramCard({ program, saved, onSave }) {
//     const Icon = program.icon;
//     return (
//         <article className="group flex min-h-[370px] flex-col overflow-hidden rounded-[26px] border border-[#e3e0d6] bg-[#fffefa] transition duration-300 hover:-translate-y-1 hover:border-[#aaa99d] hover:shadow-[0_24px_60px_rgba(32,59,55,0.12)]">
//             <div className="flex items-start justify-between px-6 pt-6">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-2xl" style={{ backgroundColor: `${program.color}16`, color: program.color }}>
//                     <Icon size={23} strokeWidth={1.8} />
//                 </div>
//                 <button type="button" onClick={() => onSave(program.id)} aria-label={saved ? "Remove from saved programs" : "Save program"} aria-pressed={saved} className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e9e6dc] text-[#77776f] transition hover:border-[#d6a2a8] hover:text-[#b94c5a]">
//                     <Heart size={17} className={saved ? "fill-[#c45a68] text-[#c45a68]" : ""} />
//                 </button>
//             </div>
//             <div className="px-6 pt-5">
//                 <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[.16em] text-[#85857a]">
//                     <span>{program.field}</span><span className="h-1 w-1 rounded-full bg-[#c9c6ba]" /><span>{program.countryName}</span>
//                 </div>
//                 <h3 className="mt-3 text-[20px] font-semibold leading-[1.2] tracking-[-.035em] text-[#171717]">{program.title}</h3>
//                 <p className="mt-1.5 text-xs font-medium text-[#9a998f]">{program.short}</p>
//                 <p className="mt-4 text-[13px] leading-[1.75] text-[#6b6d64]">{program.description}</p>
//                 <div className="mt-4 flex flex-wrap gap-2">
//                     {program.subjects.map(subject => <span key={subject} className="rounded-full border border-[#e8e6dc] bg-[#f8f7f2] px-3 py-1.5 text-[10px] font-medium text-[#696b62]">{subject}</span>)}
//                 </div>
//             </div>
//             <div className="mt-auto px-6 pb-6 pt-5">
//                 <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[#eeece4] pt-4 text-[11px] text-[#77776f]">
//                     <span className="inline-flex items-center gap-1.5"><Clock3 size={14} />{program.duration}</span>
//                     <span className="inline-flex items-center gap-1.5"><Globe2 size={14} />{program.mode}</span>
//                 </div>
//                 <Link href={`/counselling?program=${encodeURIComponent(program.title)}&country=${encodeURIComponent(program.countryName)}`} className="mt-5 flex items-center justify-between rounded-full bg-[#171717] py-2 pl-5 pr-2 text-[13px] font-semibold text-white transition hover:bg-[#77776f]">
//                     Explore program <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15"><ArrowUpRight size={17} /></span>
//                 </Link>
//             </div>
//         </article>
//     );
// }

// export default function BachelorProgramsPage() {
//     const [selectedCountry, setSelectedCountry] = useState("all");
//     const [selectedField, setSelectedField] = useState("All fields");
//     const [search, setSearch] = useState("");
//     const [saved, setSaved] = useState([]);
//     const [showAll, setShowAll] = useState(false);

//     const filteredPrograms = useMemo(() => {
//         const q = search.trim().toLowerCase();
//         return programs.filter(p => {
//             const countryMatch = selectedCountry === "all" || p.country === selectedCountry;
//             const fieldMatch = selectedField === "All fields" || p.field === selectedField;
//             const textMatch = !q || [p.title, p.short, p.field, p.countryName, ...p.subjects].join(" ").toLowerCase().includes(q);
//             return countryMatch && fieldMatch && textMatch;
//         });
//     }, [selectedCountry, selectedField, search]);

//     const selectedDetails = selectedCountry === "all" ? null : countryDetails[selectedCountry];
//     const visiblePrograms = showAll ? filteredPrograms : filteredPrograms.slice(0, 9);
//     const clearFilters = () => { setSelectedCountry("all"); setSelectedField("All fields"); setSearch(""); setShowAll(false); };
//     const toggleSave = (id) => setSaved(current => current.includes(id) ? current.filter(x => x !== id) : [...current, id]);

//     return (
//         <main className="min-h-screen bg-[#f5f3ed] text-[#171717]">
//             {/* <Navbar /> */}

//             {/* HERO */}
//             <section className="relative isolate overflow-hidden bg-[#f5f3ed]">
//                 <div className="absolute inset-0 -z-10 opacity-[.24]" style={{ backgroundImage: "radial-gradient(#77776f 0.7px, transparent 0.7px)", backgroundSize: "17px 17px" }} />
//                 <div className="mx-auto grid max-w-[1500px] items-center gap-12 px-5 pb-16 pt-12 sm:px-8 md:pb-24 md:pt-16 lg:grid-cols-[1.05fr_.95fr] lg:px-14">
//                     <div>
//                         <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.2em] text-[#8a897f]"><span>CampusSeat</span><span>/</span><span>Bachelor's programs</span></div>
//                         <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#e3e0d6] bg-white/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[.17em] text-[#1c6b5f]"><GraduationCap size={14} /> Undergraduate study guide</div>
//                         <h1 className="mt-6 max-w-3xl text-[44px] font-semibold leading-[1.02] tracking-[-.065em] sm:text-6xl lg:text-[76px]">
//                             Your first degree.
//                             <span className="mt-2 block font-serif font-normal italic text-[#77776f]">A world of possibility.</span>
//                         </h1>
//                         <p className="mt-6 max-w-xl text-[15px] leading-[1.9] text-[#6b6d64] sm:text-base">
//                             Explore bachelor's programs across six study destinations. Compare fields, discover course pathways and find a starting point for your future.
//                         </p>
//                         <div className="mt-8 flex flex-wrap gap-3">
//                             <a href="#browse-programs" className="inline-flex items-center gap-3 rounded-full bg-[#171717] px-6 py-4 text-[13px] font-semibold text-white transition hover:bg-[#77776f]">Browse bachelor's programs <ArrowRight size={17} /></a>
//                             <Link href="/career-guidance" className="inline-flex items-center gap-2 rounded-full border border-[#d8d5ca] bg-white/60 px-6 py-4 text-[13px] font-semibold text-[#34362f] transition hover:bg-white">Get study guidance <ArrowUpRight size={16} /></Link>
//                         </div>
//                         <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-[#e3e0d6] pt-6 text-[12px] text-[#77776f]">
//                             <span className="inline-flex items-center gap-2"><Globe2 size={16} className="text-[#1c6b5f]" /> 6 study destinations</span>
//                             <span className="inline-flex items-center gap-2"><BookOpen size={16} className="text-[#1c6b5f]" /> 24 course pathways</span>
//                             <span className="inline-flex items-center gap-2"><GraduationCap size={16} className="text-[#1c6b5f]" /> Undergraduate level</span>
//                         </div>
//                     </div>
//                     <div className="relative mx-auto w-full max-w-[600px]">
//                         <div className="absolute -left-5 top-10 h-28 w-28 rounded-full border border-[#b7b3a6]" />
//                         <div className="relative h-[390px] overflow-hidden rounded-[34px] border-[7px] border-white shadow-[0_28px_75px_rgba(32,59,55,.18)] sm:h-[520px]">
//                             {/* <img src={imageUrl("photo-1523050854058-8df90110c9f1",1100)} alt="University graduates celebrating together" className="h-full w-full object-cover"/> */}
//                             <img
//                                 src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=90"
//                                 alt="Students studying together at university"
//                                 className="h-full w-full object-cover"
//                                 loading="eager"
//                                 onError={(e) => {
//                                     e.currentTarget.src =
//                                         "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=85";
//                                 }}
//                             />
//                             <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/65 via-transparent to-[#171717]/10" />
//                             <div className="absolute bottom-7 left-7 right-7 text-white">
//                                 <p className="text-[10px] font-bold uppercase tracking-[.2em] text-white/75">Start your journey</p>
//                                 <p className="mt-2 max-w-sm text-3xl font-semibold leading-tight tracking-[-.04em]">Choose a course that opens doors.</p>
//                             </div>
//                         </div>
//                         <div className="absolute -bottom-5 -left-3 rounded-2xl border border-[#e3e0d6] bg-[#fffefa] px-5 py-4 shadow-[0_15px_40px_rgba(32,59,55,.12)] sm:-left-8">
//                             <div className="flex items-center gap-3">
//                                 <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1c6b5f]/10 text-[#1c6b5f]"><Globe2 size={20} /></span>
//                                 <div><p className="text-sm font-semibold">Study across borders</p><p className="mt-1 text-[10px] text-[#8a897f]">India · USA · Europe · UAE</p></div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* COUNTRY SELECTOR */}
//             <section className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-14">
//                 <div className="rounded-[28px] border border-[#e3e0d6] bg-[#fffefa] p-5 shadow-[0_12px_36px_rgba(32,59,55,.06)] sm:p-7">
//                     <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
//                         <div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#8a897f]">Choose your destination</p><h2 className="mt-2 text-2xl font-semibold tracking-[-.04em]">Where would you like to study?</h2></div>
//                         <p className="text-xs text-[#8a897f]">Select a country to explore its bachelor's pathways</p>
//                     </div>
//                     <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
//                         {countries.map(country => {
//                             const active = selectedCountry === country.id;
//                             const count = country.id === "all" ? programs.length : programs.filter(p => p.country === country.id).length;
//                             return (
//                                 <button key={country.id} type="button" onClick={() => { setSelectedCountry(country.id); setShowAll(false); }} aria-pressed={active} className={`group flex min-h-[76px] items-center gap-3 rounded-2xl border px-3 py-3 text-left transition ${active ? "border-[#171717] bg-[#171717] text-white shadow-lg" : "border-[#e9e6dc] bg-[#fbfaf5] text-[#34362f] hover:border-[#aaa99d] hover:bg-white"}`}>
//                                     {country.code ? <Flag code={country.code} /> : <Globe2 size={19} className={active ? "text-white" : "text-[#1c6b5f]"} />}
//                                     <span className="min-w-0"><span className="block text-[12px] font-semibold">{country.name}</span><span className={`mt-1 block text-[10px] ${active ? "text-white/60" : "text-[#9a998f]"}`}>{count} programs</span></span>
//                                 </button>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </section>

//             {/* COUNTRY FEATURE */}
//             {selectedDetails && (
//                 <section className="mx-auto max-w-[1500px] px-5 pt-12 sm:px-8 lg:px-14">
//                     <div className="grid overflow-hidden rounded-[30px] border border-[#e3e0d6] bg-[#fffefa] md:grid-cols-[.9fr_1.1fr]">
//                         <div className="relative min-h-[230px] md:min-h-[300px]">
//                             <img src={imageUrl(selectedDetails.image, 1000)} alt={selectedDetails.headline} className="absolute inset-0 h-full w-full object-cover" />
//                             <div className="absolute inset-0" style={{ background: `linear-gradient(0deg, ${selectedDetails.accent}b8, transparent 85%)` }} />
//                             <h2 className="absolute bottom-6 left-7 text-3xl font-semibold tracking-[-.04em] text-white">{selectedDetails.headline}</h2>
//                         </div>
//                         <div className="flex flex-col justify-center p-7 md:p-10">
//                             <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#8a897f]">Destination spotlight</p>
//                             <p className="mt-4 max-w-xl text-2xl font-semibold leading-snug tracking-[-.035em] text-[#20231e]">{selectedDetails.copy}</p>
//                             <p className="mt-4 max-w-xl text-[12px] leading-6 text-[#77776f]">{selectedDetails.note}</p>
//                             <a href="#browse-programs" className="mt-6 inline-flex w-fit items-center gap-2 text-[13px] font-semibold text-[#1c6b5f] hover:underline">View available programs <ArrowRight size={16} /></a>
//                         </div>
//                     </div>
//                 </section>
//             )}

//             {/* PROGRAM DIRECTORY */}
//             <section id="browse-programs" className="mx-auto max-w-[1500px] scroll-mt-24 px-5 pb-20 pt-16 sm:px-8 md:pt-20 lg:px-14">
//                 <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
//                     <div>
//                         <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#8a897f]">Explore courses</p>
//                         <h2 className="mt-3 text-3xl font-semibold tracking-[-.05em] sm:text-4xl">{selectedCountry === "all" ? "Bachelor's programs" : `Bachelor's programs in ${countries.find(c => c.id === selectedCountry)?.name}`}</h2>
//                         <p className="mt-3 max-w-xl text-sm leading-7 text-[#77776f]">Find the right course for your future. Search and compare undergraduate study options by country and subject.</p>
//                     </div>
//                     <span className="w-fit rounded-full border border-[#e3e0d6] bg-white px-4 py-2.5 text-xs text-[#77776f]"><strong className="text-[#171717]">{filteredPrograms.length}</strong> programs listed</span>
//                 </div>

//                 <div className="mt-8 rounded-[24px] border border-[#e3e0d6] bg-white p-4 sm:p-5">
//                     <div className="grid gap-3 md:grid-cols-[1fr_250px]">
//                         <div className="relative">
//                             <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8a897f]" />
//                             <input value={search} onChange={e => { setSearch(e.target.value); setShowAll(false); }} placeholder="Search course, subject or keyword..." className="h-12 w-full rounded-full border border-[#e7e4da] bg-[#fbfaf5] pl-11 pr-10 text-sm outline-none transition focus:border-[#77776f] focus:ring-4 focus:ring-[#77776f]/10" />
//                             {search && <button type="button" onClick={() => setSearch("")} aria-label="Clear search" className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-[#8a897f] hover:bg-black/5"><X size={15} /></button>}
//                         </div>
//                         <div className="relative">
//                             <SlidersHorizontal size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#8a897f]" />
//                             <select value={selectedField} onChange={e => { setSelectedField(e.target.value); setShowAll(false); }} className="h-12 w-full appearance-none rounded-full border border-[#e7e4da] bg-[#fbfaf5] pl-11 pr-9 text-sm text-[#55584f] outline-none focus:border-[#77776f]">
//                                 {fields.map(field => <option key={field}>{field}</option>)}
//                             </select>
//                             <ChevronDown size={15} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#8a897f]" />
//                         </div>
//                     </div>
//                     <div className="mt-4 flex items-center justify-between border-t border-[#f0eee7] pt-4">
//                         <p className="text-[10px] font-bold uppercase tracking-[.16em] text-[#9a998f]">Quick country filters</p>
//                         {(selectedCountry !== "all" || selectedField !== "All fields" || search) && <button type="button" onClick={clearFilters} className="inline-flex items-center gap-1 text-xs font-semibold text-[#1c6b5f]"><X size={13} /> Reset all</button>}
//                     </div>
//                     <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
//                         {countries.map(country => <button key={country.id} type="button" onClick={() => { setSelectedCountry(country.id); setShowAll(false); }} className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition ${selectedCountry === country.id ? "bg-[#77776f] text-white" : "border border-[#e7e4da] bg-[#fbfaf5] text-[#6b6d64] hover:border-[#aaa99d]"}`}>{country.name}</button>)}
//                     </div>
//                 </div>

//                 <div className="mb-5 mt-7 flex items-center justify-between">
//                     <p className="text-xs text-[#8a897f]">Showing <strong className="text-[#34362f]">{visiblePrograms.length}</strong> of {filteredPrograms.length} programs</p>
//                     {saved.length > 0 && <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1c6b5f]"><Heart size={14} className="fill-current" />{saved.length} saved</span>}
//                 </div>

//                 {visiblePrograms.length ? (
//                     <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
//                         {visiblePrograms.map(program => <ProgramCard key={program.id} program={program} saved={saved.includes(program.id)} onSave={toggleSave} />)}
//                     </div>
//                 ) : (
//                     <div className="rounded-[26px] border border-dashed border-[#d8d5ca] bg-white px-6 py-16 text-center">
//                         <BookOpen size={32} className="mx-auto text-[#aaa99d]" />
//                         <h3 className="mt-4 text-xl font-semibold">No matching programs</h3>
//                         <p className="mt-2 text-sm text-[#77776f]">Try another search term or reset your filters.</p>
//                         <button onClick={clearFilters} className="mt-5 rounded-full bg-[#171717] px-6 py-3 text-xs font-semibold text-white">Show all programs</button>
//                     </div>
//                 )}

//                 {filteredPrograms.length > 9 && <div className="mt-10 flex justify-center"><button onClick={() => setShowAll(v => !v)} className="inline-flex items-center gap-3 rounded-full border border-[#d8d5ca] bg-white px-7 py-3.5 text-xs font-semibold text-[#34362f] transition hover:border-[#77776f] hover:bg-[#fbfaf5]">{showAll ? "Show fewer programs" : `View all ${filteredPrograms.length} programs`}<ArrowRight size={16} className={showAll ? "-rotate-90" : "rotate-90"} /></button></div>}
//             </section>

//             {/* ADMISSION CHECKLIST */}
//             <section className="bg-[#fbfaf5] py-16 sm:py-20">
//                 <div className="mx-auto grid max-w-[1500px] gap-10 px-5 sm:px-8 lg:grid-cols-[.85fr_1.15fr] lg:px-14">
//                     <div>
//                         <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#8a897f]">Before you apply</p>
//                         <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-.05em] sm:text-4xl">A little preparation goes a long way.</h2>
//                         <p className="mt-4 max-w-md text-sm leading-7 text-[#77776f]">Entry requirements are different in every country and institution. Use this checklist as a starting point, then confirm the exact criteria with your chosen university.</p>
//                         <Link href="/career-guidance" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#1c6b5f] hover:underline">Talk to an advisor <ArrowUpRight size={16} /></Link>
//                     </div>
//                     <div className="grid gap-3 sm:grid-cols-2">
//                         {[
//                             ["Academic transcripts", "School certificates and marksheets"],
//                             ["English or local language", "IELTS, TOEFL or other accepted proof if required"],
//                             ["Passport & documents", "Valid passport, photos and supporting records"],
//                             ["Course-specific criteria", "Prerequisites, portfolio or entrance tests where applicable"],
//                         ].map(([title, desc]) => <div key={title} className="rounded-2xl border border-[#e3e0d6] bg-white p-5"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1c6b5f]/10 text-[#1c6b5f]"><Check size={16} /></span><h3 className="mt-4 text-sm font-semibold">{title}</h3><p className="mt-2 text-xs leading-6 text-[#77776f]">{desc}</p></div>)}
//                     </div>
//                 </div>
//             </section>

//             {/* CTA */}
//             <section className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 md:py-20 lg:px-14">
//                 <div className="relative overflow-hidden rounded-[30px] bg-[#171717] px-7 py-10 text-white sm:px-12 sm:py-14">
//                     <div className="absolute -right-16 -top-28 h-80 w-80 rounded-full border-[45px] border-white/[.06]" />
//                     <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
//                         <div className="max-w-2xl"><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#c6b99e]">Your next chapter</p><h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-.05em] sm:text-4xl">Not sure where to begin?</h2><p className="mt-3 max-w-xl text-sm leading-7 text-white/65">Get help exploring courses, destinations and admission requirements that match your goals.</p></div>
//                         <Link href="/career-guidance" className="inline-flex w-fit items-center gap-3 rounded-full bg-[#f5f3ed] px-7 py-4 text-xs font-bold text-[#171717] transition hover:bg-white">Get personalised guidance <ArrowUpRight size={17} /></Link>
//                     </div>
//                 </div>
//                 <p className="mt-5 max-w-5xl text-[10px] leading-5 text-[#96958b]">Course titles and durations shown are indicative examples, not a guarantee that every institution offers the programme. Admission criteria, language of instruction, tuition fees, recognition and visa rules vary by institution and intake. Confirm details directly with the university before applying.</p>
//             </section>
//         </main>
//     );
// }



"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
    ArrowUpRight,
    Briefcase,
    Check,
    Clock3,
    FileText,
    GraduationCap,
    Mail,
    MessageSquareText,
    Phone,
    Sparkles,
    UserRound,
    X,
} from "lucide-react";
import Navbar from "@/src/components/Navbar";
import LoadingButton from "@/src/components/ui/LoadingButton";
import { partners } from "@/src/data/doctorate";
import UniversityPartnersCarousel from "@/src/components/UniversityPartnersCarousel";
import {
    bachelorFaqs,
    bachelorHeroImage,
    bachelorHighlights,
    bachelorOutcomes,
    bachelorProgrammes,
    bachelorStages,
    bachelorStats,
    courseOptions,
} from "@/src/data/bachelor";
import type { BachelorProgramme } from "@/src/data/bachelor";

type FormValues = {
    name: string;
    email: string;
    countryCode: string;
    phone: string;
    course: string;
    message: string;
    consent: boolean;
    website: string;
};

type FormErrors = Partial<Record<"name" | "email" | "phone" | "course" | "consent", string>>;

const initialForm: FormValues = {
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    course: "",
    message: "",
    consent: false,
    website: "",
};

const inputCls =
    "w-full rounded-2xl border border-[#e3e0d6] bg-[#fffefa] py-3 pl-11 pr-4 text-[14px] outline-none transition focus:border-[#77776f] focus:ring-4 focus:ring-[#77776f]/10";

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
    return (
        <h2
            id={id}
            className="relative w-fit pb-4 text-[26px] font-semibold tracking-[-0.05em]"
        >
            {children}
            <span className="absolute bottom-0 left-0 h-[3px] w-12 rounded-full bg-[#b18b52]" />
        </h2>
    );
}

function InterestForm({ presetCourse }: { presetCourse: string }) {
    const [values, setValues] = useState(initialForm);
    const [errors, setErrors] = useState<FormErrors>({});
    const [submitError, setSubmitError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        if (presetCourse) setValues((c) => ({ ...c, course: presetCourse }));
    }, [presetCourse]);

    function update<K extends keyof FormValues>(field: K, value: FormValues[K]) {
        setValues((c) => ({ ...c, [field]: value }));
        setErrors((c) => ({ ...c, [field]: undefined }));
        setSubmitError("");
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const next: FormErrors = {};
        const email = values.email.trim();
        const digits = values.phone.replace(/\D/g, "");

        if (values.name.trim().length < 2) next.name = "Enter your full name.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email address.";
        if (digits.length < 6 || digits.length > 15) next.phone = "Enter a valid phone number.";
        if (!values.course) next.course = "Select a programme.";
        if (!values.consent) next.consent = "Please confirm you agree to be contacted.";

        setErrors(next);
        if (Object.keys(next).length > 0) return;

        setIsSubmitting(true);
        setSubmitError("");
        try {
            const response = await fetch("/api/enquiry", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...values,
                    name: values.name.trim(),
                    email,
                    phone: values.phone.trim(),
                }),
            });
            const result: { error?: string } = await response.json();
            if (!response.ok) {
                setSubmitError(result.error || "Unable to submit your request. Please try again.");
                return;
            }
            setIsSubmitted(true);
        } catch {
            setSubmitError("Unable to submit your request. Please check your connection and try again.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section
            id="interest-form"
            aria-labelledby="interest-heading"
            className="scroll-mt-28 rounded-[28px] border border-[#e3e0d6] bg-white p-6 shadow-[0_16px_45px_rgba(23,23,23,0.06)] sm:p-7"
        >
            <SectionHeading id="interest-heading">Show Interest</SectionHeading>
            <p className="mt-4 text-[13px] leading-6 text-[#6b6d64]">
                Share your details with our admissions team.
            </p>

            {isSubmitted ? (
                <div
                    role="status"
                    className="mt-6 flex items-start gap-3 rounded-2xl border border-[#77776f]/20 bg-[#f5f3ed] p-5 text-[14px] leading-6"
                >
                    <Check size={20} className="mt-0.5 shrink-0 text-[#77776f]" />
                    <p>Thanks, our admissions team will contact you shortly.</p>
                </div>
            ) : (
                <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
                    <div className="relative">
                        <label htmlFor="enquiry-name" className="mb-1.5 block text-[13px] font-medium">
                            Full name*
                        </label>
                        <UserRound aria-hidden="true" size={17} className="pointer-events-none absolute left-4 top-[42px] text-[#77776f]" />
                        <input
                            id="enquiry-name"
                            name="name"
                            autoComplete="name"
                            required
                            value={values.name}
                            onChange={(e) => update("name", e.target.value)}
                            aria-invalid={Boolean(errors.name)}
                            aria-describedby={errors.name ? "enquiry-name-error" : undefined}
                            className={inputCls}
                        />
                        {errors.name && <p id="enquiry-name-error" className="mt-1 text-[12px] text-red-700">{errors.name}</p>}
                    </div>

                    <div className="relative">
                        <label htmlFor="enquiry-email" className="mb-1.5 block text-[13px] font-medium">
                            Email address*
                        </label>
                        <Mail aria-hidden="true" size={17} className="pointer-events-none absolute left-4 top-[42px] text-[#77776f]" />
                        <input
                            id="enquiry-email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            value={values.email}
                            onChange={(e) => update("email", e.target.value)}
                            aria-invalid={Boolean(errors.email)}
                            aria-describedby={errors.email ? "enquiry-email-error" : undefined}
                            className={inputCls}
                        />
                        {errors.email && <p id="enquiry-email-error" className="mt-1 text-[12px] text-red-700">{errors.email}</p>}
                    </div>

                    <div>
                        <label htmlFor="enquiry-phone" className="mb-1.5 block text-[13px] font-medium">
                            Phone number*
                        </label>
                        <div className="relative flex">
                            <Phone aria-hidden="true" size={17} className="pointer-events-none absolute left-4 top-3.5 z-10 text-[#77776f]" />
                            <select
                                aria-label="Country calling code"
                                autoComplete="tel-country-code"
                                value={values.countryCode}
                                onChange={(e) => update("countryCode", e.target.value)}
                                className="w-[100px] shrink-0 rounded-l-2xl border border-r-0 border-[#e3e0d6] bg-[#fffefa] py-3 pl-11 pr-1 text-[13px] outline-none transition focus:z-10 focus:border-[#77776f] focus:ring-4 focus:ring-[#77776f]/10"
                            >
                                {["+91", "+1", "+44", "+61", "+64", "+971"].map((c) => (
                                    <option key={c} value={c}>{c}</option>
                                ))}
                            </select>
                            <input
                                id="enquiry-phone"
                                name="phone"
                                type="tel"
                                autoComplete="tel-national"
                                required
                                value={values.phone}
                                onChange={(e) => update("phone", e.target.value)}
                                aria-invalid={Boolean(errors.phone)}
                                aria-describedby={errors.phone ? "enquiry-phone-error" : undefined}
                                className="min-w-0 flex-1 rounded-r-2xl border border-[#e3e0d6] bg-[#fffefa] px-3 py-3 text-[14px] outline-none transition focus:z-10 focus:border-[#77776f] focus:ring-4 focus:ring-[#77776f]/10"
                            />
                        </div>
                        {errors.phone && <p id="enquiry-phone-error" className="mt-1 text-[12px] text-red-700">{errors.phone}</p>}
                    </div>

                    <div className="relative">
                        <label htmlFor="enquiry-course" className="mb-1.5 block text-[13px] font-medium">
                            Select a programme*
                        </label>
                        <FileText aria-hidden="true" size={17} className="pointer-events-none absolute left-4 top-[42px] text-[#77776f]" />
                        <select
                            id="enquiry-course"
                            name="course"
                            required
                            value={values.course}
                            onChange={(e) => update("course", e.target.value)}
                            aria-invalid={Boolean(errors.course)}
                            aria-describedby={errors.course ? "enquiry-course-error" : undefined}
                            className={`${inputCls} appearance-none`}
                        >
                            <option value="" disabled>Select a programme</option>
                            {courseOptions.map((c) => (
                                <option key={c} value={c}>{c}</option>
                            ))}
                        </select>
                        {errors.course && <p id="enquiry-course-error" className="mt-1 text-[12px] text-red-700">{errors.course}</p>}
                    </div>

                    <div className="relative">
                        <label htmlFor="enquiry-message" className="mb-1.5 block text-[13px] font-medium">
                            Message (optional)
                        </label>
                        <MessageSquareText aria-hidden="true" size={17} className="pointer-events-none absolute left-4 top-11 text-[#77776f]" />
                        <textarea
                            id="enquiry-message"
                            name="message"
                            rows={3}
                            maxLength={2000}
                            value={values.message}
                            onChange={(e) => update("message", e.target.value)}
                            className={`${inputCls} resize-y`}
                        />
                    </div>

                    <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden">
                        <label htmlFor="enquiry-website">Leave this field empty</label>
                        <input
                            id="enquiry-website"
                            name="website"
                            tabIndex={-1}
                            autoComplete="off"
                            value={values.website}
                            onChange={(e) => update("website", e.target.value)}
                        />
                    </div>

                    {submitError && <p role="alert" className="text-[13px] leading-5 text-red-700">{submitError}</p>}

                    <LoadingButton
                        type="submit"
                        loading={isSubmitting}
                        loadingText="Submitting request..."
                        className="group/submit inline-flex min-h-14 w-full items-center justify-between rounded-full bg-[#171717] py-2 pl-6 pr-2 text-[14px] font-semibold text-white transition-colors hover:bg-[#77776f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#77776f] disabled:cursor-wait disabled:opacity-70"
                    >
                        Submit Request
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover/submit:rotate-45">
                            <ArrowUpRight size={18} aria-hidden="true" />
                        </span>
                    </LoadingButton>

                    <div className="flex items-start gap-2 text-[12px] leading-5 text-[#6b6d64]">
                        <input
                            id="enquiry-consent"
                            name="consent"
                            type="checkbox"
                            required
                            checked={values.consent}
                            onChange={(e) => update("consent", e.target.checked)}
                            aria-invalid={Boolean(errors.consent)}
                            aria-describedby={errors.consent ? "enquiry-consent-error" : undefined}
                            className="mt-1 h-4 w-4 shrink-0 accent-[#77776f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#77776f]"
                        />
                        <label htmlFor="enquiry-consent">
                            I agree to be contacted about my programme enquiry.
                            {errors.consent && (
                                <span id="enquiry-consent-error" className="block text-red-700">{errors.consent}</span>
                            )}
                        </label>
                    </div>
                </form>
            )}
        </section>
    );
}

function PartnerCard() {
    return (
        <section
            aria-labelledby="partners-heading"
            className="rounded-[28px] border border-[#e3e0d6] bg-white p-6 shadow-[0_16px_45px_rgba(23,23,23,0.06)] sm:p-7"
        >
            <SectionHeading id="partners-heading">University Partners</SectionHeading>
            <UniversityPartnersCarousel />
        </section>
    );
}

export default function BachelorPage() {
    const reduceMotion = useReducedMotion();
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [selected, setSelected] = useState<BachelorProgramme | null>(null);
    const [presetCourse, setPresetCourse] = useState("");

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;
        if (selected && !dialog.open) dialog.showModal();
        if (!selected && dialog.open) dialog.close();
    }, [selected]);

    const reveal = (delay = 0) =>
        reduceMotion
            ? {}
            : {
                  initial: { opacity: 0, y: 22 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true, margin: "-50px" as const },
                  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
              };

    const [featured, ...rest] = bachelorProgrammes;

    function applyFor(p: BachelorProgramme) {
        setPresetCourse(`${p.title} (${p.code})`);
        setSelected(null);
        requestAnimationFrame(() =>
            document.getElementById("interest-form")?.scrollIntoView({ behavior: "smooth" }),
        );
    }

    return (
        <>
            <Navbar />
            <main className="overflow-hidden bg-[#f5f3ed] text-[#171717]">
                {/* HERO */}
                <section className="relative overflow-hidden rounded-b-[40px] bg-[#171717] px-5 pb-14 pt-36 text-white sm:px-8 sm:pb-20 sm:pt-44 lg:px-14">
                    <div aria-hidden="true" className="absolute inset-0 z-0 bg-[linear-gradient(135deg,#171717_0%,#77776f_100%)]" />
                    <Image
                        src={bachelorHeroImage}
                        alt="Students walking across a university campus"
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
                    <div aria-hidden="true" className="absolute inset-0 z-10 bg-[linear-gradient(110deg,rgba(23,23,23,0.85)_0%,rgba(23,23,23,0.35)_100%)]" />
                    <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-10 z-10 h-[380px] w-[380px] rounded-full bg-[#b18b52]/25 blur-3xl" />

                    <div className="relative z-20 mx-auto grid max-w-[1500px] items-center gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(390px,0.92fr)] lg:gap-16">
                        <div className="max-w-3xl">
                            <p className="mb-6 inline-flex items-center gap-3 text-[13px] font-medium text-white/80">
                                <span className="h-px w-9 bg-[#b18b52]" />
                                CampusSeat / Bachelor
                            </p>
                            <motion.h1
                                {...reveal()}
                                className="text-[42px] font-semibold leading-[1.03] tracking-[-0.06em] sm:text-6xl lg:text-[72px]"
                            >
                                Undergraduate Degrees
                            </motion.h1>
                            <p className="mt-6 font-serif text-[25px] italic leading-tight text-[#b18b52] sm:text-[32px]">
                                Begin a career-defining journey
                            </p>
                            <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-white/80 sm:text-[16px]">
                                Choose from seven bachelor programmes across science, arts,
                                commerce, management, computing and design. Study in academic
                                partnership with our university network and build the knowledge,
                                skills and portfolio that employers and postgraduate schools
                                look for.
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
                                    href="#programmes"
                                    className="inline-flex min-h-14 items-center rounded-full border border-white/30 px-7 text-[14px] font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    Explore programmes
                                </Link>
                            </div>
                        </div>

                        <aside
                            aria-labelledby="highlights-heading"
                            className="rounded-[28px] border border-white/20 bg-white/10 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:p-8"
                        >
                            <h2 id="highlights-heading" className="text-[23px] font-semibold tracking-[-0.04em] sm:text-[26px]">
                                Program Highlights
                            </h2>
                            <dl className="mt-4 divide-y divide-white/15">
                                {bachelorHighlights.map(({ label, value, icon: Icon }) => (
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

                {/* STATS STRIP */}
                <section aria-label="At a glance" className="mx-auto -mt-8 max-w-[1320px] px-5 sm:px-8 lg:px-14">
                    <dl className="relative z-30 grid grid-cols-2 gap-px overflow-hidden rounded-[28px] border border-[#e3e0d6] bg-[#e3e0d6] shadow-[0_20px_60px_rgba(23,23,23,0.10)] md:grid-cols-4">
                        {bachelorStats.map((s) => (
                            <div key={s.label} className="bg-white px-6 py-6 text-center">
                                <dd className="text-[32px] font-semibold tracking-[-0.05em] text-[#171717]">{s.value}</dd>
                                <dt className="mt-1 text-[12px] font-medium uppercase tracking-[0.12em] text-[#77776f]">{s.label}</dt>
                            </div>
                        ))}
                    </dl>
                </section>

                {/* JOURNEY */}
                <section aria-labelledby="structure-heading" className="px-5 py-16 sm:px-8 sm:py-20 lg:px-14">
                    <div className="mx-auto max-w-[1320px]">
                        <div className="max-w-3xl">
                            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#77776f]">Programme overview</p>
                            <h2 id="structure-heading" className="mt-3 text-[34px] font-semibold leading-tight tracking-[-0.055em] sm:text-5xl">
                                Your degree,{" "}
                                <span className="font-serif font-normal italic text-[#77776f]">step by step</span>
                            </h2>
                            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[#6b6d64]">
                                Every programme moves from strong foundations to focused
                                specialisation and finishes with a capstone that prepares you
                                for work or further study.
                            </p>
                        </div>
                        <ol className="relative mt-10 grid gap-4 md:grid-cols-3 md:gap-6">
                            <div aria-hidden="true" className="absolute left-[16%] right-[16%] top-8 hidden h-px bg-[#e3e0d6] md:block" />
                            {bachelorStages.map(({ title, icon: Icon }, index) => (
                                <li
                                    key={title}
                                    className="relative flex items-center gap-4 rounded-[28px] border border-[#e3e0d6] bg-[#fffefa] p-5 shadow-[0_10px_30px_rgba(23,23,23,0.04)] md:flex-col md:items-center md:border-0 md:bg-transparent md:text-center md:shadow-none"
                                >
                                    <span className="z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#e3e0d6] bg-[#fbfaf5] text-[#77776f]">
                                        <Icon size={24} aria-hidden="true" />
                                    </span>
                                    <div>
                                        <p className="text-[11px] font-semibold uppercase tracking-[0.13em] text-[#b18b52]">Step {index + 1}</p>
                                        <h3 className="mt-1 text-[18px] font-semibold tracking-[-0.03em]">{title}</h3>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                {/* PROGRAMMES + SIDEBAR */}
                <section
                    id="programmes"
                    aria-labelledby="programmes-heading"
                    className="mx-auto grid max-w-[1500px] items-start gap-8 px-5 pb-16 sm:px-8 sm:pb-20 lg:grid-cols-[minmax(0,2fr)_minmax(300px,0.95fr)] lg:gap-10 lg:px-14"
                >
                    <div className="min-w-0">
                        <div className="mb-8">
                            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#77776f]">Bachelor programmes</p>
                            <h2 id="programmes-heading" className="mt-3 text-[35px] font-semibold leading-[1.08] tracking-[-0.055em] sm:text-5xl">
                                Bachelor Degree{" "}
                                <span className="font-serif font-normal italic text-[#77776f]">Programs</span>
                            </h2>
                        </div>

                        {/* Featured */}
                        <motion.article
                            {...reveal()}
                            className="group relative mb-5 grid overflow-hidden rounded-[32px] border border-[#e3e0d6] bg-[#171717] text-white shadow-[0_20px_60px_rgba(23,23,23,0.12)] md:grid-cols-2"
                        >
                            <div className="relative min-h-[260px] bg-[linear-gradient(135deg,#77776f_0%,#b18b52_100%)]">
                                <Image
                                    src={featured.image}
                                    alt={`${featured.title} students at work`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    unoptimized
                                    loading="lazy"
                                    onError={(e) => {
                                        e.currentTarget.style.display = "none";
                                    }}
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-[#b18b52] px-3 py-1 text-[11px] font-semibold tracking-[0.1em] text-[#171717]">
                                    <Sparkles size={12} aria-hidden="true" /> POPULAR
                                </span>
                            </div>
                            <div className="flex flex-col justify-center p-6 sm:p-9">
                                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#b18b52]">{featured.code} · {featured.duration}</p>
                                <h3 className="mt-2 text-[28px] font-semibold leading-tight tracking-[-0.05em]">{featured.title}</h3>
                                <p className="mt-3 font-serif text-[18px] italic text-white/70">{featured.tagline}</p>
                                <p className="mt-4 text-[14px] leading-7 text-white/70">{featured.description}</p>
                                <button
                                    type="button"
                                    onClick={() => setSelected(featured)}
                                    className="group/know mt-6 inline-flex min-h-12 w-fit items-center gap-4 rounded-full bg-[#b18b52] py-1 pl-6 pr-1 text-[13px] font-semibold text-[#171717] transition-colors hover:bg-[#fffefa] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    Know more
                                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#171717]/10 transition-transform duration-300 group-hover/know:rotate-45">
                                        <ArrowUpRight size={17} aria-hidden="true" />
                                    </span>
                                </button>
                            </div>
                        </motion.article>

                        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {rest.map((p, index) => (
                                <motion.article
                                    key={p.id}
                                    {...reveal(index * 0.05)}
                                    className="group flex min-w-0 flex-col overflow-hidden rounded-[28px] border border-[#e3e0d6] bg-[#fffefa] shadow-[0_12px_35px_rgba(23,23,23,0.05)] transition-shadow duration-300 hover:shadow-[0_24px_60px_rgba(23,23,23,0.12)]"
                                >
                                    <div className="relative h-[200px] overflow-hidden bg-[linear-gradient(135deg,#77776f_0%,#b18b52_100%)]">
                                        <Image
                                            src={p.image}
                                            alt={`${p.title} students at work`}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1536px) 50vw, 33vw"
                                            unoptimized
                                            loading="lazy"
                                            decoding="async"
                                            onError={(e) => {
                                                e.currentTarget.style.display = "none";
                                            }}
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#171717]/55 via-transparent to-transparent" />
                                        <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-[#171717]/75 px-3 py-1 text-[11px] font-semibold tracking-[0.1em] text-white backdrop-blur-sm">
                                            {p.code}
                                        </span>
                                        <span className="absolute bottom-4 left-4 text-[12px] font-medium text-white/90">{p.tagline}</span>
                                    </div>
                                    <div className="flex flex-1 flex-col p-5">
                                        <h3 className="text-[18px] font-semibold leading-[1.25] tracking-[-0.035em]">{p.title}</h3>
                                        <p className="mt-3 flex-1 text-[13px] leading-[1.7] text-[#6b6d64]">{p.description}</p>
                                        <div className="mt-4 flex flex-wrap gap-1.5">
                                            {p.specialisations.slice(0, 3).map((s) => (
                                                <span key={s} className="rounded-full border border-[#e3e0d6] bg-[#fbfaf5] px-2.5 py-1 text-[11px] font-medium text-[#6b6d64]">
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="mt-5 flex items-center gap-4 border-t border-[#e3e0d6] pt-4 text-[12px] font-medium text-[#6b6d64]">
                                            <span className="inline-flex items-center gap-1.5">
                                                <Clock3 size={15} aria-hidden="true" />
                                                {p.duration}
                                            </span>
                                            <span className="inline-flex items-center gap-1.5">
                                                <GraduationCap size={15} aria-hidden="true" />
                                                Full-time
                                            </span>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => setSelected(p)}
                                            className="group/know mt-4 inline-flex min-h-12 w-full items-center justify-between rounded-full bg-[#171717] px-5 text-[13px] font-semibold text-white transition-colors hover:bg-[#77776f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#77776f]"
                                        >
                                            Know more
                                            <ArrowUpRight size={17} aria-hidden="true" className="transition-transform duration-300 group-hover/know:rotate-45" />
                                        </button>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    </div>

                    <aside className="grid min-w-0 gap-6 lg:sticky lg:top-28">
                        <PartnerCard />
                        <InterestForm presetCourse={presetCourse} />
                    </aside>
                </section>

                {/* DETAIL DIALOG */}
                <dialog
                    ref={dialogRef}
                    aria-labelledby="programme-dialog-heading"
                    onCancel={() => setSelected(null)}
                    onClose={() => setSelected(null)}
                    className="m-auto max-h-[min(88vh,820px)] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto rounded-[28px] border border-[#e3e0d6] bg-[#fffefa] p-0 text-[#171717] shadow-[0_30px_100px_rgba(0,0,0,0.28)] backdrop:bg-[#171717]/70"
                >
                    {selected && (
                        <div>
                            <div className="relative h-44 bg-[linear-gradient(135deg,#77776f_0%,#b18b52_100%)]">
                                <Image
                                    src={selected.image}
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
                                    aria-label="Close programme details"
                                    className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#171717] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#77776f]"
                                >
                                    <X size={18} aria-hidden="true" />
                                </button>
                            </div>
                            <div className="p-6 sm:p-9">
                                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#b18b52]">
                                    {selected.code} · {selected.duration}
                                </p>
                                <h2 id="programme-dialog-heading" className="mt-2 text-[27px] font-semibold leading-tight tracking-[-0.05em] sm:text-3xl">
                                    {selected.title}
                                </h2>
                                <p className="mt-3 text-[14px] leading-7 text-[#6b6d64]">{selected.description}</p>

                                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                    <div className="rounded-2xl border border-[#e3e0d6] bg-[#fbfaf5] p-5">
                                        <h3 className="text-[15px] font-semibold">Specialisations</h3>
                                        <ul className="mt-3 space-y-1.5 text-[13px] text-[#6b6d64]">
                                            {selected.specialisations.map((s) => (
                                                <li key={s} className="flex items-center gap-2">
                                                    <Check size={14} className="text-[#b18b52]" aria-hidden="true" />
                                                    {s}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="rounded-2xl border border-[#e3e0d6] bg-[#fbfaf5] p-5">
                                        <h3 className="text-[15px] font-semibold">Career paths</h3>
                                        <ul className="mt-3 space-y-1.5 text-[13px] text-[#6b6d64]">
                                            {selected.careers.map((c) => (
                                                <li key={c} className="flex items-center gap-2">
                                                    <Briefcase size={14} className="text-[#b18b52]" aria-hidden="true" />
                                                    {c}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-4 rounded-2xl border border-[#e3e0d6] bg-white p-5">
                                    <h3 className="text-[15px] font-semibold">Eligibility</h3>
                                    <p className="mt-2 text-[14px] leading-7 text-[#6b6d64]">{selected.eligibility}</p>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => applyFor(selected)}
                                    className="group/apply mt-6 inline-flex min-h-14 w-full items-center justify-between rounded-full bg-[#171717] py-2 pl-6 pr-2 text-[14px] font-semibold text-white transition-colors hover:bg-[#77776f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#77776f]"
                                >
                                    Enquire about this programme
                                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover/apply:rotate-45">
                                        <ArrowUpRight size={18} aria-hidden="true" />
                                    </span>
                                </button>
                            </div>
                        </div>
                    )}
                </dialog>

                {/* OUTCOMES */}
                <section aria-labelledby="outcomes-heading" className="bg-[#fbfaf5] px-5 py-16 sm:px-8 sm:py-20 lg:px-14">
                    <div className="mx-auto max-w-[1320px]">
                        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#77776f]">Outcomes</p>
                        <h2 id="outcomes-heading" className="mt-3 max-w-3xl text-[35px] font-semibold leading-[1.08] tracking-[-0.055em] sm:text-5xl">
                            What graduates will{" "}
                            <span className="font-serif font-normal italic text-[#77776f]">be able to do</span>
                        </h2>
                        <ul className="mt-9 grid gap-4 md:grid-cols-2">
                            {bachelorOutcomes.map(({ text, icon: Icon }, index) => (
                                <li
                                    key={text}
                                    className={`flex items-start gap-4 rounded-[28px] border border-[#e3e0d6] bg-white p-5 sm:p-6 ${index === 4 ? "md:col-span-2" : ""}`}
                                >
                                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#b18b52]/15 text-[#b18b52]">
                                        <Icon size={20} aria-hidden="true" />
                                    </span>
                                    <p className="pt-1 text-[14px] leading-7 text-[#3d3d38] sm:text-[15px]">{text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* PARTNERS SHOWCASE */}
                {/* <section aria-labelledby="partner-showcase-heading" className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#77776f]">Academic network</p>
                    <h2 id="partner-showcase-heading" className="mt-3 max-w-3xl text-[35px] font-semibold leading-[1.08] tracking-[-0.055em] sm:text-5xl">
                        Our partner{" "}
                        <span className="font-serif font-normal italic text-[#77776f]">universities</span>
                    </h2>
                    <ul className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {partners.map((partner) => (
                            <li
                                key={partner.id}
                                className="group flex flex-col items-center rounded-[28px] border border-[#e3e0d6] bg-white p-7 text-center shadow-[0_10px_30px_rgba(23,23,23,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(23,23,23,0.10)]"
                            >
                                <PartnerLogo name={partner.name} logo={partner.logo} />
                                <p className="mt-4 text-[17px] font-semibold tracking-[-0.03em]">{partner.name}</p>
                                <p className="mt-1 inline-flex items-center gap-1.5 text-[12px] text-[#6b6d64]">
                                    <MapPin size={13} aria-hidden="true" />
                                    {partner.country}
                                </p>
                                {partner.website && (
                                    <Link
                                        href={partner.website}
                                        className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-[#e3e0d6] px-4 py-2 text-[12px] font-semibold transition-colors hover:bg-[#171717] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#77776f]"
                                    >
                                        Visit website
                                        <ArrowUpRight size={14} aria-hidden="true" />
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </section> */}

                {/* FAQ */}
                <section className="mx-auto grid max-w-[1500px] gap-8 px-5 pb-16 sm:px-8 sm:pb-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 lg:px-14">
                    <div>
                        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#77776f]">Frequently asked questions</p>
                        <h2 className="mt-3 text-[35px] font-semibold leading-[1.08] tracking-[-0.055em] sm:text-5xl">
                            Questions about{" "}
                            <span className="font-serif font-normal italic text-[#77776f]">bachelor degrees</span>
                        </h2>
                    </div>
                    <div className="divide-y divide-[#e3e0d6] rounded-[28px] border border-[#e3e0d6] bg-white px-5 shadow-[0_10px_30px_rgba(23,23,23,0.04)] sm:px-8">
                        {bachelorFaqs.map((item) => (
                            <details key={item.question} className="group py-5">
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-[15px] font-semibold tracking-[-0.02em] marker:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#77776f] [&::-webkit-details-marker]:hidden sm:text-[16px]">
                                    {item.question}
                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#e3e0d6] text-[20px] font-normal transition-transform duration-300 group-open:rotate-45">
                                        +
                                    </span>
                                </summary>
                                <p className="mt-3 max-w-3xl pr-2 text-[14px] leading-7 text-[#6b6d64]">{item.answer}</p>
                            </details>
                        ))}
                    </div>
                </section>

                {/* MARQUEE */}
                <section aria-label="University partners" className="overflow-hidden bg-[#fbfaf5] py-12 sm:py-16">
                    <div className="partner-marquee relative overflow-hidden">
                        <div className="partner-track flex w-max items-center gap-12 pr-12 sm:gap-20 sm:pr-20">
                            {[0, 1].map((copy) => (
                                <div key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center gap-12 sm:gap-20">
                                    {partners.map((partner) => (
                                        <span
                                            key={`${copy}-${partner.id}`}
                                            className="whitespace-nowrap text-[28px] font-bold uppercase tracking-[-0.04em] text-[#8a897f]/70 transition-colors duration-300 hover:text-[#171717] sm:text-[42px] lg:text-[54px]"
                                        >
                                            {partner.name}
                                        </span>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="relative overflow-hidden bg-[#171717] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-14">
                    <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-32 h-[380px] w-[380px] rounded-full bg-[#b18b52]/20 blur-3xl" />
                    <div className="relative mx-auto flex max-w-[1320px] flex-col items-start justify-between gap-8 md:flex-row md:items-center">
                        <div className="max-w-2xl">
                            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#b18b52]">CampusSeat / Bachelor</p>
                            <h2 className="mt-3 text-[36px] font-semibold leading-[1.07] tracking-[-0.055em] sm:text-5xl">Speak with Admissions</h2>
                            <p className="mt-4 text-[14px] leading-7 text-white/70 sm:text-[15px]">
                                Not sure which degree fits you? Our team will help you compare
                                programmes, eligibility and partner universities.
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
            <style jsx>{`
                @keyframes partner-marquee {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        transform: translateX(-50%);
                    }
                }
                .partner-track {
                    animation: partner-marquee 32s linear infinite;
                }
                .partner-marquee:hover .partner-track {
                    animation-play-state: paused;
                }
                .partner-marquee {
                    mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
                }
                @media (prefers-reduced-motion: reduce) {
                    .partner-track {
                        animation: none;
                    }
                }
            `}</style>
        </>
    );
}