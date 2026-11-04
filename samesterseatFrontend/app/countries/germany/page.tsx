"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/src/components/Navbar";
import {
  ArrowRight, ArrowUpRight, Award, BriefcaseBusiness, Building2,
  CheckCircle2, ChevronDown, ChevronRight, CircleHelp, Compass,
  GraduationCap, Globe2, HeartHandshake, Languages, MapPin, Microscope,
  Search, ShieldCheck, Laptop, Plane, FileText, Landmark, Users,
  TrainFront, Utensils, HeartPulse, Euro, ExternalLink, RotateCcw,
  Code2, BrainCircuit, Database, Cog, Calculator, Megaphone, Hotel,
  BookMarked, Target
} from "lucide-react";

/*
 * CampusSeat — Germany country landing page
 * Route: app/countries/germany/page.tsx (adjust to your existing route folder)
 * Existing Navbar is intentionally reused. This route renders its own footer
 * because the current root layout does not provide a shared footer component.
 *
 * University-specific facts below are deliberately conservative. Check each
 * university's current programme finder and admission pages before publishing
 * an individual course intake or admission requirement.
 */

type University = {
  id: string;
  name: string;
  city: string[];
  type: "Private";
  description: string;
  official: string;
  campusPage: string;
  logo: string;
  image: string;
  imageAlt: string;
  studyAreas: string[];
  degreeLevels: string[];
  modes: string[];
  note: string;
};

const universities: University[] = [
  {
    id: "constructor",
    name: "Constructor University",
    city: ["Bremen"],
    type: "Private",
    description: "An international, research-oriented university in Bremen with an English-language learning environment and a residential campus community.",
    official: "https://constructor.university/",
    campusPage: "https://constructor.university/explore-constructor-university",
    logo: "https://constructor.university/favicon.ico",
    image: "https://constructor.university/sites/default/files/styles/lp_header_image_mobile/public/2026-06/2014_CU_campus_aerial.jpg.webp?itok=F9nJAoBD",
    imageAlt: "Aerial view of Constructor University's green campus and red-brick academic buildings in Bremen.",
    studyAreas: ["Computer Science", "Engineering", "Business", "Natural Sciences"],
    degreeLevels: ["Bachelor's", "Master's", "Doctorate"],
    modes: ["On-campus"],
    note: "Confirm the exact programme, intake and language of instruction on the official course page.",
  },
  {
    id: "iu",
    name: "IU International University of Applied Sciences",
    city: ["Erfurt", "Berlin", "Cologne"],
    type: "Private",
    description: "A private university of applied sciences with a broad portfolio of study options and flexible learning formats.",
    official: "https://www.iu.org/",
    campusPage: "https://www.iu.org/on-campus/berlin/",
    logo: "https://www.iu.org/logos/intl-logo.svg",
    image: "https://res.cloudinary.com/iugroup/image/upload/v1737642860/IU_Campus_Berlin_101_qpl3hs.jpg",
    imageAlt: "Official IU Berlin campus entrance and student learning location.",
    studyAreas: ["Business", "Computer Science", "Engineering", "Health", "Design"],
    degreeLevels: ["Bachelor's", "Master's"],
    modes: ["On-campus", "Online"],
    note: "IU's online and campus options differ by programme and location; verify the chosen course format.",
  },
  {
    id: "srh",
    name: "SRH University",
    city: ["Heidelberg"],
    type: "Private",
    description: "A private university with an applied, practice-oriented learning approach and a campus in Heidelberg.",
    official: "https://www.srh-university.de/",
    campusPage: "https://www.srh-university.de/en/our-campuses/heidelberg/",
    logo: "https://www.srh-university.de/favicon.ico",
    image: "https://www.srh-university.de/fileadmin/_processed_/7/a/csm_Event-Campusfuehrung_cc304025d1.jpg",
    imageAlt: "Official SRH University Heidelberg campus photograph.",
    studyAreas: ["Business", "Computer Science", "Engineering", "Psychology", "Design"],
    degreeLevels: ["Bachelor's", "Master's"],
    modes: ["On-campus", "Online", "Hybrid"],
    note: "SRH describes on-campus, online and mixed study formats; check the Heidelberg programme finder for each course’s actual delivery mode.",
  },
  {
    id: "ue",
    name: "University of Europe for Applied Sciences",
    city: ["Berlin", "Hamburg"],
    type: "Private",
    description: "A private university of applied sciences with programmes spanning business, technology, sport and creative disciplines.",
    official: "https://www.ue-germany.com/",
    campusPage: "https://www.ue-germany.com/news-centre/press",
    logo: "https://www.ue-germany.com/uploads/sites/9/2024/07/final-vectors-transparent_logo-1.png",
    image: "https://www.ue-germany.com/uploads/sites/9/2023/11/berlin_campus_building__gallery.png?crop=1&h=900&quality=85&w=1400",
    imageAlt: "Official University of Europe for Applied Sciences Berlin campus entrance.",
    studyAreas: ["Business", "Computer Science", "Design", "Sports"],
    degreeLevels: ["Bachelor's", "Master's"],
    modes: ["On-campus"],
    note: "Campus availability and programme locations can change; verify details on the official course page.",
  },
  {
    id: "code",
    name: "CODE University of Applied Sciences",
    city: ["Berlin"],
    type: "Private",
    description: "A private university in Berlin focused on digital disciplines, project-based learning and an entrepreneurial community.",
    official: "https://code.berlin/",
    campusPage: "https://code.berlin/en/studies/campus/",
    logo: "https://code.berlin/favicon.ico",
    image: "https://cdn.sanity.io/images/vwbnrb3f/production/784c8e00ed278505d069d1445264fb63be87b634-1800x1800.png?fm=webp&q=85",
    imageAlt: "Official CODE University campus learning environment in Berlin.",
    studyAreas: ["Software Engineering", "Business Management", "Digital Design", "Technology & Management"],
    degreeLevels: ["Bachelor's", "Master's"],
    modes: ["On-campus"],
    note: "CODE's official site currently lists Bachelor's and Master's programmes; verify each programme's recognition and intake.",
  },
];

<<<<<<< HEAD
const courseCategories = [
  { title: "Computer Science", icon: Code2, area: "Technology" },
  { title: "Artificial Intelligence", icon: BrainCircuit, area: "Technology" },
  { title: "Data Science", icon: Database, area: "Technology" },
  { title: "Business Administration", icon: BriefcaseBusiness, area: "Business" },
  { title: "International Business", icon: Globe2, area: "Business" },
  { title: "Engineering", icon: Cog, area: "Engineering" },
  { title: "Cybersecurity", icon: ShieldCheck, area: "Technology" },
  { title: "Information Technology", icon: Laptop, area: "Technology" },
  { title: "Mechanical Engineering", icon: Cog, area: "Engineering" },
  { title: "Finance and Accounting", icon: Calculator, area: "Business" },
  { title: "Digital Marketing", icon: Megaphone, area: "Business" },
  { title: "Hospitality Management", icon: Hotel, area: "Hospitality" },
];
=======
export default function GermanyCollegesPage() {
    const [search, setSearch] = useState("");
    const [type, setType] = useState("All");
>>>>>>> 9717747 (Update 04/11/2026)

const benefits = [
  { icon: Award, title: "Globally recognised education", text: "Germany's higher-education system includes research universities and universities of applied sciences. Always check the recognition and accreditation of your chosen institution and programme." },
  { icon: Microscope, title: "Research and innovation", text: "Explore an ecosystem where universities, research institutes and industry collaborate across science, engineering and emerging technologies." },
  { icon: BriefcaseBusiness, title: "Industry-oriented learning", text: "Many applied-sciences programmes emphasise practical projects, internships or industry links. The exact structure varies by course." },
  { icon: Users, title: "International student community", text: "Join a diverse student environment. DAAD reported around 420,000 international students and doctoral candidates in winter semester 2025/26." },
  { icon: Target, title: "Career opportunities", text: "Germany has opportunities across technology, engineering, business and research. Employment depends on your skills, language ability and current labour-market needs." },
  { icon: Compass, title: "Diverse study options", text: "Choose from universities, universities of applied sciences and specialist institutions, with programmes taught in German and English." },
];

const requirements = [
  { icon: GraduationCap, title: "Academic qualifications", text: "A school-leaving qualification or previous degree that meets the entry requirements for the selected programme. Some applicants may need a preparatory pathway." },
  { icon: Languages, title: "Language proficiency", text: "English-taught programmes may ask for IELTS, TOEFL or another accepted test. German-taught programmes usually require proof of German proficiency at the level set by the institution." },
  { icon: FileText, title: "Academic documents", text: "Prepare transcripts, certificates, grading details and certified translations where required." },
  { icon: BookMarked, title: "Motivation documents", text: "A statement of purpose, motivation letter, portfolio or letters of recommendation may be requested depending on the course." },
  { icon: ShieldCheck, title: "Identity and visa documents", text: "A valid passport and supporting documents for the student visa process. The embassy checklist is the final authority." },
  { icon: Building2, title: "University-specific criteria", text: "Some courses have subject prerequisites, aptitude assessments, interviews, work experience or application-platform requirements." },
];

const costs = [
  { icon: Euro, title: "Tuition fees", text: "Many public universities do not charge general tuition for standard Bachelor's and many Master's programmes, but exceptions apply. Private universities charge programme-specific fees." },
  { icon: Building2, title: "Accommodation", text: "Rent is often the largest monthly expense. Prices vary substantially by city, room type and whether you live in student housing or the private market." },
  { icon: Utensils, title: "Food and daily needs", text: "Budget for groceries, meals, household items and personal expenses. Costs depend on your habits and location." },
  { icon: TrainFront, title: "Transportation", text: "Check whether your semester contribution includes a local or regional transport ticket. Coverage varies by institution and region." },
  { icon: HeartPulse, title: "Health insurance", text: "Health insurance is required for enrolment and residence. Eligibility and monthly premiums depend on age, status and insurance provider." },
  { icon: Wallet, title: "Other expenses", text: "Plan for semester contributions, study materials, phone, internet, residence permit fees and an emergency reserve." },
];

const visaSteps = [
  "Secure admission to a recognised German higher-education institution or meet the requirements for the relevant study-preparation route.",
  "Prepare proof of financing. For 2026, the official Make it in Germany portal lists at least €11,904 in a blocked account, or an accepted alternative such as a scholarship or declaration of commitment.",
  "Arrange health-insurance evidence that meets the requirements for your visa and enrolment stage.",
  "Prepare your passport, admission evidence, academic documents, financial proof, application forms and any additional documents requested by the German mission.",
  "Apply through the official German mission / Consular Services Portal for your place of residence and follow its current appointment and document instructions.",
];

<<<<<<< HEAD
const faqs = [
  { q: "Why should I study in Germany?", a: "Germany offers a wide range of recognised higher-education institutions, strong research activity and programmes across many disciplines. Whether it is right for you depends on your subject, language, budget and career goals." },
  { q: "Can international students study in English?", a: "Yes. Many institutions offer English-taught programmes, particularly at Master's level, and some at Bachelor's level. Always verify the language of instruction for the exact programme." },
  { q: "What are the popular courses in Germany?", a: "Common areas of interest include computer science, engineering, business, data science, AI, natural sciences and design. Availability differs by institution and intake." },
  { q: "What are the admission requirements?", a: "Requirements vary by university and programme. They can include recognised prior qualifications, subject prerequisites, language tests, transcripts, a motivation letter, recommendations or an aptitude assessment." },
  { q: "Can I work while studying?", a: "The official German government portal states that international students may work up to 140 full days or 280 half days per year, or up to 20 hours per week. Check the current rules and any conditions attached to your residence status." },
  { q: "How much does studying in Germany cost?", a: "Costs depend on the institution, state and city. DAAD gives an indicative living-cost range of about €900–€1,200 per month; tuition and semester contributions must be checked separately." },
  { q: "How can I apply to German universities?", a: "Shortlist programmes, check eligibility and deadlines on official university pages, prepare documents, apply through the university or its specified platform, and follow the institution's admission instructions." },
  { q: "Do I need IELTS for admission?", a: "Not always. English-taught programmes may accept IELTS, TOEFL or other evidence, and some may waive a test under specific conditions. German-taught programmes have separate German-language requirements." },
];

const cities = ["Berlin", "Bremen", "Heidelberg", "Erfurt", "Hamburg"];
const degreeOptions = ["Bachelor's", "Master's", "Doctorate"];
const modeOptions = ["On-campus", "Online", "Hybrid"];

function SectionHeading({ eyebrow, title, description, light = false }: { eyebrow: string; title: string; description?: string; light?: boolean }) {
  return (
    <div className="mb-9 max-w-3xl">
      <p className={`text-[11px] font-bold uppercase tracking-[.2em] ${light ? "text-[#a9d9cc]" : "text-[#2f887a]"}`}>{eyebrow}</p>
      <h2 className={`mt-3 text-3xl font-semibold leading-tight tracking-[-.045em] sm:text-4xl lg:text-[42px] ${light ? "text-white" : "text-[#172b43]"}`}>{title}</h2>
      {description && <p className={`mt-4 max-w-2xl text-sm leading-7 ${light ? "text-white/65" : "text-slate-600"}`}>{description}</p>}
    </div>
  );
=======
    return (
        <>
            <Navbar />
        <main className="min-h-screen bg-[#f4f3ee] text-[#171717]">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-[#171717] px-5 py-16 text-white md:py-24">
                <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full border border-white/10" />
                <div className="absolute right-12 top-20 h-48 w-48 rounded-full border border-white/10" />

                <div className="relative mx-auto max-w-7xl">
                    <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-[#ededE7]">
                        <GraduationCap size={22} />
                        <Link href="/" className="hover:text-white">
                            CampusSeat
                        </Link>
                        <span>/</span>
                        <Link href="/colleges" className="hover:text-white">
                             australia Colleges
                        </Link>
                        <span>/</span>
                        <span>germany</span>
                    </div>

                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ededE7]">
                        Learn. Lead. Grow.
                    </p>

                    <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
                         Colleges
                        <span className="mt-2 block text-[#ededE7]">
                            Shape your future in business.
                        </span>
                    </h1>

                    <p className="mt-6 max-w-2xl text-base leading-8 text-[#ededE7] md:text-lg">
                        Explore business schools, discover germany programmes and
                        find opportunities to develop your leadership and business skills.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href="#college-list"
                            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-[#171717] transition hover:bg-[#f7f7f4]"
                        >
                            Explore Colleges <ArrowRight size={18} />
                        </a>

                        <Link
                            href="/admissions"
                            className="rounded-xl border border-white/30 px-6 py-3.5 font-semibold transition hover:bg-white/10"
                        >
                            Admission Guide
                        </Link>
                    </div>
                </div>
            </section>

            {/* Highlights */}
            <section className="mx-auto grid max-w-7xl gap-5 px-5 py-10 sm:grid-cols-3">
                <div className="rounded-2xl border border-[#deded8] bg-white p-6">
                    <BriefcaseBusiness size={28} className="text-[#171717]" />
                    <h2 className="mt-4 font-bold">Business Education</h2>
                    <p className="mt-2 text-sm leading-6 text-[#77776f]">
                        Explore germany courses for business and leadership careers.
                    </p>
                </div>

                <div className="rounded-2xl border border-[#deded8] bg-white p-6">
                    <BookOpen size={28} className="text-[#171717]" />
                    <h2 className="mt-4 font-bold">Multiple Programmes</h2>
                    <p className="mt-2 text-sm leading-6 text-[#77776f]">
                        Discover MBA, PGDM and executive education options.
                    </p>
                </div>

                <div className="rounded-2xl border border-[#deded8] bg-white p-6">
                    <CheckCircle2 size={28} className="text-[#171717]" />
                    <h2 className="mt-4 font-bold">Admission Guidance</h2>
                    <p className="mt-2 text-sm leading-6 text-[#77776f]">
                        Review entrance exams and eligibility on official websites.
                    </p>
                </div>
            </section>

            {/* Search and College List */}
            <section
                id="college-list"
                className="mx-auto max-w-7xl scroll-mt-8 px-5 py-10"
            >
                <div className="mb-8">
                    <p className="text-sm font-bold uppercase tracking-widest text-[#171717]">
                        Find your institution
                    </p>
                    <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                        Explore Austrelia Colleges
                    </h2>
                    <p className="mt-3 text-[#77776f]">
                        Search by college name, location or specialization.
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
                            placeholder="Search colleges, cities or specializations..."
                            className="w-full rounded-xl border border-[#deded8] py-3.5 pl-12 pr-4 outline-none focus:border-[#171717] focus:ring-4 focus:ring-black/5"
                        />
                    </div>

                    <select
                        value={type}
                        onChange={(event) => setType(event.target.value)}
                        aria-label="Filter colleges by type"
                        className="w-full rounded-xl border border-[#deded8] bg-white px-4 py-3.5 outline-none focus:border-[#171717]"
                    >
                        <option value="All">All Colleges</option>
                        <option value="Government">Government</option>
                        <option value="Private">Private</option>
                    </select>
                </div>

                <div className="mb-5 flex items-center justify-between">
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
                                <div className="flex items-center justify-between gap-3">
                                    <span className="rounded-full bg-[#f7f7f4] px-3 py-1 text-xs font-bold text-[#171717]">
                                        {college.type}
                                    </span>

                                    <span className="flex items-center gap-1 text-sm font-semibold text-[#343434]">
                                        <Star
                                            size={16}
                                            className="fill-amber-400 text-amber-400"
                                        />
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
                                    <p className="mt-1 text-sm font-medium">
                                        {college.courses}
                                    </p>
                                </div>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {college.specializations.map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-lg bg-[#f7f7f4] px-2.5 py-1.5 text-xs text-[#77776f]"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>

                                <Link
                                    href="/admissions"
                                    className="mt-auto mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[#171717] px-4 py-3 text-sm font-semibold text-white transition hover:bg-black"
                                >
                                    Admission Guide <ArrowRight size={16} />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                {filteredColleges.length === 0 && (
                    <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-14 text-center">
                        <Search size={34} className="mx-auto text-slate-400" />
                        <h3 className="mt-4 text-xl font-bold">No colleges found</h3>
                        <p className="mt-2 text-[#77776f]">
                            Try another college name, city or specialization.
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

            {/* Bottom CTA */}
            <section className="mx-auto max-w-7xl px-5 pb-16 pt-6">
                <div className="rounded-3xl bg-[#171717] px-6 py-10 text-center text-white md:px-12 md:py-14">
                    <h2 className="text-3xl font-bold md:text-4xl">
                        Take the next step in your career
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#ededE7]">
                        Compare programmes and verify admission requirements directly
                        with the institution before applying.
                    </p>
                    <Link
                        href="/admissions"
                        className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-[#171717] transition hover:bg-[#f7f7f4]"
                    >
                        View Admission Guide <ArrowRight size={18} />
                    </Link>
                </div>
            </section>
        </main>
        </>
    );
>>>>>>> 9717747 (Update 04/11/2026)
}

function Flag() {
  return <span aria-label="German flag" role="img" className="inline-flex h-5 w-8 flex-col overflow-hidden rounded-[3px] shadow-sm"><span className="h-1/3 bg-black"/><span className="h-1/3 bg-[#dd0000]"/><span className="h-1/3 bg-[#ffce00]"/></span>;
}

function UniversityIdentity({ university }: { university: University }) {
  const [logoFailed, setLogoFailed] = useState(false);
  const initials = university.name.split(" ").filter(Boolean).slice(0, 2).map((word) => word[0]).join("");
  return (
    <div className="flex h-[58px] min-w-0 max-w-[230px] items-center gap-3 rounded-xl border border-slate-100 bg-white px-3" aria-label={university.name + " official website identity"}>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white">
        {!logoFailed ? <Image src={university.logo} alt={university.name + " official website icon"} width={40} height={40} unoptimized onError={() => setLogoFailed(true)} className="h-9 w-9 object-contain" /> : <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#edf4f5] text-xs font-bold text-[#2f887a]">{initials}</span>}
      </span>
      <span className="min-w-0"><span className="block truncate text-[10px] font-bold text-[#203c59]">{university.name}</span><span className="mt-0.5 block text-[9px] text-slate-400">Official brand mark</span></span>
    </div>
  );
}

function UniversityCard({ university }: { university: University }) {
  const [imageFailed, setImageFailed] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-slate-200/80 bg-white shadow-[0_8px_28px_rgba(20,42,67,.045)] transition duration-300 hover:-translate-y-1 hover:border-[#b9d8d0] hover:shadow-[0_22px_50px_rgba(20,42,67,.12)]">
      <div aria-busy={!imageLoaded && !imageFailed} className="relative h-[205px] overflow-hidden bg-gradient-to-br from-[#eaf0f3] via-[#dce8e8] to-[#cbd9e4]">
        {!imageFailed && university.image ? (
          <><div aria-hidden="true" className={"absolute inset-0 animate-pulse bg-gradient-to-br from-[#eaf0f3] via-[#dce8e8] to-[#cbd9e4] transition-opacity " + (imageLoaded ? "opacity-0" : "opacity-100")} /><Image src={university.image} alt={university.imageAlt} fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" onLoad={() => setImageLoaded(true)} onError={() => { setImageFailed(true); setImageLoaded(false); }} className="object-cover transition duration-700 group-hover:scale-105" /></>
        ) : (
          <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_20%_20%,#fff,transparent_42%),linear-gradient(135deg,#e7eff0,#cbd9e4)]">
            <div className="text-center"><Building2 className="mx-auto h-10 w-10 text-[#6b8494]"/><p className="mt-2 text-xs font-semibold text-[#526b7c]">Campus image coming soon</p></div>
          </div>
        )}
        <div className="absolute left-4 top-4"><span className="rounded-full border border-white/70 bg-white/90 px-3 py-1.5 text-[10px] font-bold text-[#203c59] backdrop-blur">{university.type} university</span></div>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <UniversityIdentity university={university}/>
          <span className="inline-flex items-center gap-1.5 pt-2 text-[11px] font-medium text-slate-500"><MapPin size={13}/>{university.city.join(" / ")}</span>
        </div>
        <h3 className="mt-5 text-[19px] font-semibold leading-snug tracking-[-.025em] text-[#172b43]">{university.name}</h3>
        <p className="mt-3 min-h-[68px] text-[13px] leading-6 text-slate-600">{university.description}</p>
        <div className="mt-5 border-t border-slate-100 pt-4">
          <p className="text-[10px] font-bold uppercase tracking-[.14em] text-slate-400">Study areas to explore</p>
          <div className="mt-3 flex flex-wrap gap-2">{university.studyAreas.map(area => <span key={area} className="rounded-full bg-[#f1f5f6] px-2.5 py-1.5 text-[10px] font-medium text-[#526b7c]">{area}</span>)}</div>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <div><p className="text-[10px] font-bold uppercase tracking-[.13em] text-slate-400">Degree levels</p><div className="mt-2 flex flex-wrap gap-1.5">{university.degreeLevels.map(level => <span key={level} className="rounded-md border border-slate-200 px-2 py-1 text-[10px] text-slate-600">{level}</span>)}</div></div>
          <div><p className="text-[10px] font-bold uppercase tracking-[.13em] text-slate-400">Study mode</p><div className="mt-2 flex flex-wrap gap-1.5">{university.modes.map(item => <span key={item} className="rounded-md border border-slate-200 px-2 py-1 text-[10px] text-slate-600">{item}</span>)}</div></div>
        </div>
        <p className="mt-4 text-[10px] leading-5 text-slate-400">{university.note}</p>
        <div className="mt-auto grid grid-cols-2 gap-2 pt-6">
          <a href={university.official} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 px-3 py-3 text-[11px] font-semibold text-[#203c59] transition hover:border-[#203c59] hover:bg-slate-50">Official website <ExternalLink size={13}/></a>
          <a href={university.campusPage} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#173b60] px-3 py-3 text-[11px] font-semibold text-white transition hover:bg-[#245783]">View university <ArrowUpRight size={14}/></a>
          <Link href="/Programs" className="col-span-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#edf4f5] px-3 py-3 text-[11px] font-semibold text-[#245d57] transition hover:bg-[#dcece7]">Explore courses <ArrowRight size={13}/></Link>
        </div>
      </div>
    </article>
  );
}

function FilterSelect({ label, value, onChange, options }: { label: string; value: string; onChange: (value: string) => void; options: string[] }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] font-semibold text-slate-600">{label}</span>
      <span className="relative block"><select value={value} onChange={event => onChange(event.target.value)} className="h-12 w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 pr-10 text-xs text-slate-700 outline-none transition focus:border-[#2f887a] focus:ring-4 focus:ring-[#2f887a]/10"><option value="All">All {label.toLowerCase()}s</option>{options.map(option => <option key={option} value={option}>{option}</option>)}</select><ChevronDown size={15} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"/></span>
    </label>
  );
}

function Accordion() {
  const [active, setActive] = useState<number | null>(0);
  return <div className="divide-y divide-slate-200 border-y border-slate-200">{faqs.map((faq, index) => <div key={faq.q} className="py-5"><button type="button" aria-expanded={active === index} onClick={() => setActive(active === index ? null : index)} className="flex w-full items-center justify-between gap-5 text-left"><span className="text-sm font-semibold text-[#172b43] sm:text-[15px]">{faq.q}</span><span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${active === index ? "bg-[#173b60] text-white" : "bg-slate-100 text-slate-500"}`}><ChevronDown size={15} className={`transition ${active === index ? "rotate-180" : ""}`}/></span></button>{active === index && <p className="max-w-3xl pt-4 pr-10 text-[13px] leading-7 text-slate-600">{faq.a}</p>}</div>)}</div>;
}

export default function GermanyPage() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("All");
  const [degree, setDegree] = useState("All");
  const [mode, setMode] = useState("All");
  const [type, setType] = useState("All");

  const filteredUniversities = useMemo(() => universities.filter(university => {
    const query = search.trim().toLowerCase();
    const searchable = [university.name, ...university.city, ...university.studyAreas, university.description].join(" ").toLowerCase();
    return (!query || searchable.includes(query))
      && (city === "All" || university.city.includes(city))
      && (degree === "All" || university.degreeLevels.includes(degree))
      && (mode === "All" || university.modes.includes(mode))
      && (type === "All" || university.type === type);
  }), [search, city, degree, mode, type]);

  const clearFilters = () => { setSearch(""); setCity("All"); setDegree("All"); setMode("All"); setType("All"); };
  const filtersActive = Boolean(search || city !== "All" || degree !== "All" || mode !== "All" || type !== "All");

  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-x-hidden bg-[#fbfcfd] text-[#172b43]">
        {/* HERO */}
        <section className="relative isolate overflow-hidden bg-[#102d4b]">
          <div className="absolute inset-0 -z-20 bg-[linear-gradient(100deg,rgba(9,31,54,.97)_0%,rgba(13,47,76,.9)_48%,rgba(14,55,76,.48)_100%)]"/>
          <div className="absolute inset-0 -z-30 bg-[url('https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=2200&q=90')] bg-cover bg-center"/>
          <div className="absolute -right-28 -top-40 -z-10 h-[520px] w-[520px] rounded-full border border-white/10"/>
          <div className="absolute -right-10 -top-20 -z-10 h-[360px] w-[360px] rounded-full border border-white/10"/>
          <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.08fr_.92fr] lg:px-14 lg:py-28">
            <div>
              <div className="mb-8 flex items-center gap-2 text-xs font-medium text-white/65"><Link href="/" className="transition hover:text-white">Home</Link><ChevronRight size={13}/><Link href="/countries" className="transition hover:text-white">Countries</Link><ChevronRight size={13}/><span className="text-white">Germany</span></div>
              <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 backdrop-blur"><Flag/><span className="text-[10px] font-bold uppercase tracking-[.18em] text-white">Study destination · Europe</span></div>
              <h1 className="mt-7 max-w-3xl text-[44px] font-semibold leading-[1.04] tracking-[-.055em] text-white sm:text-6xl lg:text-[72px]">Study in <span className="text-[#a9d9cc]">Germany.</span></h1>
              <p className="mt-6 max-w-2xl text-sm leading-8 text-white/75 sm:text-base">Discover world-class universities, innovative education and exciting career opportunities in Germany.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href="#universities" className="inline-flex h-13 items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-xs font-bold text-[#143657] transition hover:-translate-y-0.5 hover:bg-[#eaf5f2]">Explore Universities <ArrowRight size={16}/></a><Link href="/counselling" className="inline-flex h-13 items-center justify-center gap-2 rounded-xl border border-white/35 px-6 py-4 text-xs font-bold text-white transition hover:bg-white/10">Get Free Counselling <ArrowUpRight size={15}/></Link></div>
              <div className="mt-10 grid max-w-2xl grid-cols-2 gap-x-5 gap-y-4 border-t border-white/15 pt-7 sm:grid-cols-4">
                {[ ["400+", "Higher education institutions"], ["Global", "Recognised qualifications"], ["English", "Taught programmes"], ["Industry", "Research connections"] ].map(([value,label])=><div key={label}><p className="text-xl font-semibold tracking-tight text-white sm:text-2xl">{value}</p><p className="mt-1 text-[10px] leading-5 text-white/55">{label}</p></div>)}
              </div>
              <p className="mt-3 text-[10px] text-white/40">Institution count: approx. 400; see DAAD's Germany higher-education landscape.</p>
            </div>
            <div className="relative mx-auto w-full max-w-[530px] lg:ml-auto">
              <div className="absolute -left-7 top-10 h-28 w-28 rounded-full bg-[#6da99d]/25 blur-3xl"/>
              <div className="relative h-[360px] overflow-hidden rounded-[28px] border border-white/25 bg-white/10 p-3 shadow-2xl backdrop-blur-sm sm:h-[440px]">
                <Image src="https://images.unsplash.com/photo-1599946347371-68eb71b16afc?auto=format&fit=crop&w=1200&q=90" alt="Historic German city architecture beside a river" fill priority sizes="(max-width: 1024px) 100vw, 45vw" className="rounded-[21px] object-cover" />
                <div className="absolute bottom-7 left-7 right-7 z-10 rounded-2xl border border-white/60 bg-white/95 p-5 shadow-xl"><div className="flex items-center justify-between"><div><p className="text-[10px] font-bold uppercase tracking-[.15em] text-[#2f887a]">Your next chapter</p><p className="mt-1 text-lg font-semibold tracking-tight text-[#173b60]">A world of possibilities.</p></div><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e8f2ef] text-[#2f887a]"><GraduationCap size={20}/></span></div><p className="mt-2 text-[11px] leading-5 text-slate-500">Find a programme that fits your ambitions, strengths and future plans.</p></div>
              </div>
              <div className="absolute -right-3 top-8 hidden items-center gap-3 rounded-xl border border-white/60 bg-white p-3 shadow-xl sm:flex"><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#e9f3ef] text-[#2f887a]"><Globe2 size={17}/></span><div><p className="text-[11px] font-bold text-[#173b60]">International outlook</p><p className="text-[9px] text-slate-500">Learn across cultures</p></div></div>
            </div>
          </div>
        </section>

        {/* INTRO STRIP */}
        <section className="mx-auto grid max-w-[1440px] gap-4 px-5 py-10 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-14 lg:py-14">
          {[{icon:Landmark,title:"A broad university landscape",text:"Research universities and applied-sciences institutions."},{icon:Languages,title:"German and English",text:"Programme language depends on the course."},{icon:Microscope,title:"Research-led ecosystem",text:"Explore science, technology and innovation."},{icon:Users,title:"International community",text:"A destination for students from around the world."}].map(item=>{const Icon=item.icon;return <div key={item.title} className="flex gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_5px_20px_rgba(20,42,67,.03)]"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#edf4f5] text-[#2f887a]"><Icon size={20}/></span><div><h2 className="text-[13px] font-semibold text-[#173b60]">{item.title}</h2><p className="mt-1.5 text-[11px] leading-5 text-slate-500">{item.text}</p></div></div>})}
        </section>

        {/* UNIVERSITY FINDER */}
        <section id="universities" className="scroll-mt-24 bg-[#f3f6f7] py-16 sm:py-20">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
            <SectionHeading eyebrow="Find your institution" title="Explore top universities in Germany" description="Find the right university for your academic goals. Explore leading institutions, discover courses and compare study opportunities."/>
            <div className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-[0_8px_30px_rgba(20,42,67,.045)] sm:p-5">
              <div className="grid gap-3 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
                <label className="block"><span className="mb-2 block text-[11px] font-semibold text-slate-600">Search universities</span><span className="relative block"><Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"/><input value={search} onChange={event=>setSearch(event.target.value)} placeholder="Name, city or study area..." className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-xs outline-none transition placeholder:text-slate-400 focus:border-[#2f887a] focus:ring-4 focus:ring-[#2f887a]/10"/></span></label>
                <FilterSelect label="City" value={city} onChange={setCity} options={cities}/>
                <FilterSelect label="Degree level" value={degree} onChange={setDegree} options={degreeOptions}/>
                <FilterSelect label="Study mode" value={mode} onChange={setMode} options={modeOptions}/>
                <FilterSelect label="University type" value={type} onChange={setType} options={["Private"]}/>
              </div>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4"><p className="text-xs text-slate-500">Showing <strong className="text-[#173b60]">{filteredUniversities.length}</strong> of {universities.length} universities</p>{filtersActive&&<button onClick={clearFilters} className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#2f887a] transition hover:text-[#173b60]"><RotateCcw size={13}/> Clear all filters</button>}</div>
            </div>
            <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{filteredUniversities.map(university=><UniversityCard key={university.id} university={university}/>)}</div>
            {filteredUniversities.length===0&&<div className="mt-7 rounded-[22px] border border-dashed border-slate-300 bg-white px-5 py-16 text-center"><Search size={30} className="mx-auto text-slate-400"/><h3 className="mt-4 text-lg font-semibold text-[#173b60]">No universities found</h3><p className="mt-2 text-sm text-slate-500">Try another university name, city or study area.</p><button onClick={clearFilters} className="mt-5 rounded-xl bg-[#173b60] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#245783]">Clear filters</button></div>}
            <p className="mt-6 text-[10px] leading-5 text-slate-400">Listings are discovery starting points, not an endorsement or guarantee of admission. Confirm accreditation, programme availability, fees, campus location and current entry criteria with each university.</p>
          </div>
        </section>

        {/* COURSES */}
        <section id="courses" className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14">
          <SectionHeading eyebrow="Explore your interests" title="Popular courses to explore" description="Germany offers study options across technology, business, engineering and creative fields. These are subject areas to research — not a claim that every listed university offers each course."/>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">{courseCategories.map(item=>{const Icon=item.icon;return <Link key={item.title} href="/Programs" className="group flex min-h-[125px] flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-1 hover:border-[#b8d7cf] hover:shadow-lg sm:p-5"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#edf4f5] text-[#2f887a] transition group-hover:bg-[#173b60] group-hover:text-white"><Icon size={19}/></span><span className="mt-5 flex items-center justify-between gap-2"><span className="text-[12px] font-semibold text-[#173b60] sm:text-[13px]">{item.title}</span><ArrowUpRight size={14} className="shrink-0 text-slate-400 transition group-hover:text-[#2f887a]"/></span><span className="mt-3 text-[10px] font-semibold text-[#2f887a]">Explore course <ArrowRight size={12} className="ml-1 inline-block transition group-hover:translate-x-1"/></span></Link>})}</div>
        </section>

        {/* WHY GERMANY */}
        <section className="bg-[#102d4b] py-16 sm:py-20">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14"><SectionHeading eyebrow="Why choose Germany" title="An education experience built for discovery" description="From research-intensive study to applied learning, explore what makes Germany an attractive destination for international students." light/><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{benefits.map(item=>{const Icon=item.icon;return <article key={item.title} className="rounded-[20px] border border-white/10 bg-white/[.055] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#9bd2c5]/40 hover:bg-white/[.09]"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#9bd2c5]/15 text-[#a9d9cc]"><Icon size={20}/></span><h3 className="mt-5 text-[15px] font-semibold text-white">{item.title}</h3><p className="mt-3 text-[12px] leading-7 text-white/60">{item.text}</p></article>})}</div></div>
        </section>

        {/* ADMISSION */}
        <section id="admission" className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div><SectionHeading eyebrow="Plan your application" title="Admission requirements" description="Prepare your application with care. The exact criteria, accepted tests and document formats are set by each university and programme."/><a href="https://www.study-in-germany.com/en/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[#173b60] px-5 py-3.5 text-xs font-semibold text-white transition hover:bg-[#245783]">Official study guide <ExternalLink size={14}/></a><div className="mt-8 rounded-2xl border border-[#d8e7e3] bg-[#f0f7f4] p-5"><div className="flex items-center gap-2 text-[#2f887a]"><CircleHelp size={18}/><p className="text-xs font-bold">Important</p></div><p className="mt-2 text-[12px] leading-6 text-slate-600">Some international qualifications need an assessment or preparatory route before direct university entry. Check your qualification in the official admission resources and with the university.</p></div></div>
            <div className="grid gap-4 sm:grid-cols-2">{requirements.map(item=>{const Icon=item.icon;return <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-[#b9d8d0] hover:shadow-md"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#edf4f5] text-[#2f887a]"><Icon size={18}/></span><h3 className="mt-4 text-[13px] font-semibold text-[#173b60]">{item.title}</h3><p className="mt-2 text-[11px] leading-6 text-slate-600">{item.text}</p></article>})}</div>
          </div>
        </section>

        {/* COSTS */}
        <section className="bg-[#f3f6f7] py-16 sm:py-20">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14"><div className="grid gap-10 lg:grid-cols-[.78fr_1.22fr]"><div><SectionHeading eyebrow="Plan your budget" title="Cost of studying in Germany" description="Build a realistic budget before applying. Costs depend on the institution, federal state, city, insurance status and lifestyle."/><div className="rounded-2xl border border-[#d8e7e3] bg-white p-5"><p className="text-[10px] font-bold uppercase tracking-[.15em] text-[#2f887a]">DAAD living-cost estimate · checked Nov 2026</p><p className="mt-3 text-3xl font-semibold tracking-tight text-[#173b60]">€900–€1,200 <span className="text-sm font-medium text-slate-500">/ month</span></p><p className="mt-2 text-[11px] leading-6 text-slate-500">DAAD currently estimates €900–€1,200 per month. Actual spending can be higher, especially in expensive cities; check the live guidance before applying.</p><a href="https://www.daad.de/en/studying-in-germany/living-in-germany/finances/" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold text-[#2f887a]">View DAAD cost guidance <ExternalLink size={13}/></a></div></div><div className="grid gap-3 sm:grid-cols-2">{costs.map(item=>{const Icon=item.icon;return <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5"><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#edf4f5] text-[#2f887a]"><Icon size={17}/></span><h3 className="mt-4 text-[13px] font-semibold text-[#173b60]">{item.title}</h3><p className="mt-2 text-[11px] leading-6 text-slate-600">{item.text}</p></article>})}</div></div><p className="mt-6 text-[10px] leading-5 text-slate-400">DAAD also notes that semester contributions are separate from tuition and vary by institution. Confirm the latest amounts with your university. Figures and rules can change; source pages should be checked again before each intake.</p></div>
        </section>

        {/* VISA */}
        <section id="visa" className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14">
          <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
            <div><SectionHeading eyebrow="From offer to arrival" title="Germany student visa overview" description="Once you have a study plan and admission route, prepare your visa documents early and follow the instructions issued for your country of residence."/><div className="rounded-2xl bg-[#102d4b] p-6 text-white"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[#a9d9cc]"><Plane size={20}/></span><h3 className="mt-5 text-lg font-semibold">2026 financial proof reference</h3><p className="mt-2 text-3xl font-semibold tracking-tight">€11,904</p><p className="mt-2 text-[11px] leading-6 text-white/60">Minimum blocked-account amount listed for study purposes by the official Make it in Germany portal for 2026. Accepted alternatives and exact evidence are determined by the competent mission.</p><a href="https://www.make-it-in-germany.com/en/visa-residence/types/studying" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold text-[#a9d9cc]">Check official visa guidance <ExternalLink size={13}/></a></div></div>
            <div><div className="mb-5 flex items-center gap-2"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#edf4f5] text-[#2f887a]"><CheckCircle2 size={18}/></span><h3 className="text-sm font-semibold text-[#173b60]">A typical preparation checklist</h3></div><ol className="relative space-y-5 border-l border-slate-200 pl-7">{visaSteps.map((step,index)=><li key={step} className="relative"><span className="absolute -left-[35px] top-0 flex h-7 w-7 items-center justify-center rounded-full border-4 border-[#fbfcfd] bg-[#2f887a] text-[10px] font-bold text-white">{index+1}</span><p className="text-[12px] leading-7 text-slate-600">{step}</p></li>)}</ol><div className="mt-8 flex flex-wrap gap-3"><a href="https://india.diplo.de/in-en/service/visa" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-[11px] font-semibold text-[#173b60] transition hover:border-[#2f887a]">German missions in India <ExternalLink size={13}/></a><a href="https://www.auswaertiges-amt.de/en/visa-service" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-[11px] font-semibold text-[#173b60] transition hover:border-[#2f887a]">Federal Foreign Office <ExternalLink size={13}/></a></div></div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-[#f3f6f7] py-16 sm:py-20"><div className="mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-8 lg:grid-cols-[.72fr_1.28fr] lg:px-14"><div><SectionHeading eyebrow="Need clarity?" title="Frequently asked questions" description="Quick answers to common questions about choosing a course, applying and preparing for Germany."/><div className="hidden rounded-2xl bg-[#e6f0ed] p-5 lg:block"><HeartHandshake className="text-[#2f887a]" size={23}/><p className="mt-3 text-sm font-semibold text-[#173b60]">Want help planning your next step?</p><p className="mt-2 text-[11px] leading-6 text-slate-600">Speak with the CampusSeat counselling team about your study goals.</p><Link href="/admissions" className="mt-4 inline-flex items-center gap-2 text-[11px] font-bold text-[#2f887a]">Get guidance <ArrowRight size={14}/></Link></div></div><Accordion/></div></section>

        {/* FINAL CTA */}
        <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14"><div className="relative overflow-hidden rounded-[28px] bg-[#173b60] px-7 py-12 sm:px-12 lg:px-16 lg:py-16"><div className="absolute -right-16 -top-32 h-80 w-80 rounded-full border border-white/10"/><div className="absolute -right-2 -top-20 h-56 w-56 rounded-full border border-white/10"/><div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center"><div className="max-w-2xl"><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#a9d9cc]">Your next chapter starts here</p><h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-.04em] text-white sm:text-5xl">Your future starts in Germany.</h2><p className="mt-4 max-w-xl text-sm leading-7 text-white/65">Find your ideal university and take the first step towards an international education.</p></div><div className="flex flex-col gap-3 sm:flex-row"><a href="#universities" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-xs font-bold text-[#173b60] transition hover:-translate-y-0.5 hover:bg-[#eaf5f2]">Explore Universities <ArrowRight size={15}/></a><Link href="/counselling" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-6 py-4 text-xs font-bold text-white transition hover:bg-white/10">Get Free Counselling <ArrowUpRight size={15}/></Link></div></div></div></section>

        <footer className="border-t border-slate-200 bg-white px-5 py-10 sm:px-8 lg:px-14">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-8 border-b border-slate-100 pb-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_.8fr_.8fr_.8fr]">
              <div className="max-w-sm">
                <Link href="/" className="text-xl font-bold tracking-tight text-[#173b60]">CampusSeat<span className="text-[#2f887a]">.</span></Link>
                <p className="mt-4 text-sm leading-7 text-slate-500">Explore universities, discover courses and plan your international education journey with clarity.</p>
              </div>
              {[
                { title: "Explore", links: [["Universities", "/colleges"], ["Courses", "/Programs"], ["Destinations", "/countries"]] },
                { title: "Plan", links: [["Admissions", "/admissions"], ["Scholarships", "/scholarships"], ["Counselling", "/counselling"]] },
                { title: "CampusSeat", links: [["About us", "/about"], ["Contact", "/contact"], ["FAQs", "/faq"]] },
              ].map((group) => <div key={group.title}><h3 className="text-xs font-bold uppercase tracking-[.15em] text-[#173b60]">{group.title}</h3><div className="mt-4 space-y-3">{group.links.map(([label, href]) => <Link key={label} href={href} className="block text-sm text-slate-500 transition hover:text-[#2f887a]">{label}</Link>)}</div></div>)}
            </div>
          </div>
        </footer>
        <div className="border-t border-slate-200 bg-white"><div className="mx-auto flex max-w-[1440px] flex-col gap-2 px-5 py-6 text-[10px] leading-5 text-slate-400 sm:px-8 lg:px-14"><p>Information is provided as a general starting point and is not immigration, legal or admissions advice. Verify current details with the relevant university, DAAD and German authorities.</p><p>University marks use official website icons or published brand assets where available. Check each institution’s brand-use guidance before commercial publication.</p></div></div>
      </main>
    </>
  );
}