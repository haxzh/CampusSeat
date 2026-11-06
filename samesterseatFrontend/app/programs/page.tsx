"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
  type FormEvent,
} from "react";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Compass,
  GraduationCap,
  Globe2,
  Laptop,
  Lightbulb,
  Search,
  ShieldCheck,
  Users,
  X,
} from "lucide-react";
import LoadingButton from "@/src/components/ui/LoadingButton";

import {
  bachelorProgrammes,
  bachelorStats,
  bachelorFaqs,
  bachelorOutcomes,
} from "@/src/data/bachelor";
import {
  masterProgrammes,
  masterStats,
  masterFaqs,
  masterOutcomes,
} from "@/src/data/master";
import {
  modules,
  programmeHighlights,
  programmeStages,
  faqs as doctorateFaqs,
  graduateOutcomes,
  partners,
} from "@/src/data/doctorate";

type Level = "bachelor" | "master" | "doctorate";
type ProgramRecord = {
  id: string;
  level: Level;
  code: string;
  title: string;
  tagline: string;
  description: string;
  duration: string;
  mode: string;
  image: string;
  specialisations: string[];
  careers: string[];
  eligibility: string;
};

type GenericRecord = Record<string, unknown>;
type FaqItem = { question: string; answer: string };
type OutcomeItem = { title: string; description: string; iconName?: string };

const imageFallbacks = {
  bachelor: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1800&q=85",
  master: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1800&q=85",
  doctorate: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1800&q=85",
  hero: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2400&q=90",
};

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

function asRecord(value: unknown): GenericRecord {
  return value !== null && typeof value === "object" ? value as GenericRecord : {};
}

function readString(record: GenericRecord, keys: string[], fallback = ""): string {
  for (const key of keys) {
    const value = record[key];
    if (typeof value === "string" && value.trim()) return value.trim();
    if (typeof value === "number") return String(value);
  }
  return fallback;
}

function readStringArray(record: GenericRecord, keys: string[]): string[] {
  for (const key of keys) {
    const value = record[key];
    if (Array.isArray(value)) {
      return value
        .map((item: unknown) => {
          if (typeof item === "string") return item;
          const itemRecord = asRecord(item);
          return readString(itemRecord, ["name", "title", "label", "specialisation", "value"]);
        })
        .filter(Boolean);
    }
    if (typeof value === "string" && value.trim()) {
      return value.split(/[,|•]/).map((part) => part.trim()).filter(Boolean);
    }
  }
  return [];
}

function normalizeProgramme(value: unknown, level: "bachelor" | "master", index: number): ProgramRecord {
  const item = asRecord(value);
  const title = readString(item, ["title", "name", "programme", "programName", "courseName"], `${level === "bachelor" ? "Bachelor" : "Master"} Programme ${index + 1}`);
  return {
    id: readString(item, ["id", "slug", "code"], `${level}-${index + 1}`),
    level,
    code: readString(item, ["code", "programmeCode", "programCode", "shortCode"], `${level === "bachelor" ? "B" : "M"}${String(index + 1).padStart(2, "0")}`),
    title,
    tagline: readString(item, ["tagline", "subtitle", "shortDescription", "summary"], "Build knowledge, confidence and practical capability for your next step."),
    description: readString(item, ["description", "overview", "about", "longDescription"], "Explore this programme and speak with the CampusSeat admissions team to understand its curriculum, entry requirements and available study options."),
    duration: readString(item, ["duration", "courseDuration", "length"], level === "bachelor" ? "3–4 years" : "1–2 years"),
    mode: readString(item, ["mode", "studyMode", "deliveryMode"], level === "bachelor" ? "Full-time" : "Online"),
    image: readString(item, ["image", "imageUrl", "banner", "coverImage", "thumbnail"], level === "bachelor" ? imageFallbacks.bachelor : imageFallbacks.master),
    specialisations: readStringArray(item, ["specialisations", "specializations", "specializationsList", "majors", "subjects", "highlights"]).slice(0, 8),
    careers: readStringArray(item, ["careers", "careerPaths", "careerOptions", "outcomes", "jobs"]).slice(0, 8),
    eligibility: readString(item, ["eligibility", "entryRequirements", "requirements", "qualification"], "Eligibility varies by programme. Contact admissions for a review of your academic background."),
  };
}

function normalizeFaqs(value: unknown): FaqItem[] {
  if (!Array.isArray(value)) return [];
  return value.map((item: unknown) => {
    if (Array.isArray(item)) return { question: String(item[0] ?? ""), answer: String(item[1] ?? "") };
    const record = asRecord(item);
    return {
      question: readString(record, ["question", "title", "q"]),
      answer: readString(record, ["answer", "description", "content", "a"]),
    };
  }).filter((item) => item.question && item.answer);
}

function normalizeOutcomes(value: unknown): OutcomeItem[] {
  if (!Array.isArray(value)) return [];
  return value.map((item: unknown) => {
    const record = asRecord(item);
    return {
      title: readString(record, ["title", "name", "label"], typeof item === "string" ? item : "Career development"),
      description: readString(record, ["description", "detail", "text"], "Develop the knowledge and capabilities to progress in your chosen field."),
      iconName: readString(record, ["iconName", "icon"]),
    };
  });
}

function normalizeInfoItems(value: unknown, fallbackPrefix: string): Array<{ title: string; description: string }> {
  if (!Array.isArray(value)) return [];
  return value.map((item: unknown, index) => {
    if (typeof item === "string") return { title: item, description: "" };
    const record = asRecord(item);
    return {
      title: readString(record, ["title", "name", "label", "value"], `${fallbackPrefix} ${index + 1}`),
      description: readString(record, ["description", "detail", "text", "subtitle"], ""),
    };
  });
}

const bachelorList = (Array.isArray(bachelorProgrammes) ? bachelorProgrammes : []).map((item: unknown, index: number) => normalizeProgramme(item, "bachelor", index));
const masterList = (Array.isArray(masterProgrammes) ? masterProgrammes : []).map((item: unknown, index: number) => normalizeProgramme(item, "master", index));

const doctorateModuleRecords = Array.isArray(modules) ? modules.map((item: unknown) => asRecord(item)) : [];
const doctorateAssessment = doctorateModuleRecords.map((item, index) => ({
  number: String(index + 1).padStart(2, "0"),
  title: readString(item, ["title", "name", "module", "label"], `DBA Module ${index + 1}`),
  description: readString(item, ["description", "assessment", "summary", "detail"], "Review the learning objectives, applied assessment and research expectations for this module."),
}));

const doctorateProgram: ProgramRecord = {
  id: "doctorate-dba",
  level: "doctorate",
  code: "DBA",
  title: "Doctor of Business Administration",
  tagline: "Research-led leadership for experienced professionals.",
  description: "The Doctor of Business Administration is designed for experienced professionals who want to connect advanced management thinking with applied organisational research. The programme combines taught learning, independent research and a final viva voce.",
  duration: "~3 years",
  mode: "Online",
  image: imageFallbacks.doctorate,
  specialisations: ["Strategic Leadership", "Applied Business Research", "Organisational Transformation"],
  careers: ["Executive leadership", "Business consultancy", "Academic and applied research", "Board-level strategy"],
  eligibility: "Typically suited to experienced professionals with a relevant postgraduate qualification. Final entry requirements are subject to the programme's admissions assessment.",
};

const allPrograms: ProgramRecord[] = [...bachelorList, ...masterList, doctorateProgram];
const courseOptions = allPrograms.map((program) => `${program.title} (${program.code})`);

function SmartImage({ src, alt, className = "", priority = false }: { src: string; alt: string; className?: string; priority?: boolean }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`relative overflow-hidden bg-[linear-gradient(135deg,#d8d3c5,#aaa38f)] ${className}`}>
      {!failed && (
        <Image
          src={src || imageFallbacks.hero}
          alt={alt}
          fill
          priority={priority}
          unoptimized
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.045]"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

function PillLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="group inline-flex min-h-12 items-center justify-between gap-5 rounded-full bg-[#171717] py-1.5 pl-5 pr-2 text-sm font-semibold text-white transition hover:bg-[#39382f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b18b52]">
      {children}
      <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15 transition-transform duration-300 group-hover:rotate-45"><ArrowUpRight size={17} /></span>
    </Link>
  );
}

function ProgramCard({ program, onOpen }: { program: ProgramRecord; onOpen: (program: ProgramRecord) => void }) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-[#e3e0d6] bg-white shadow-[0_12px_34px_rgba(23,23,23,.045)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(23,23,23,.09)]">
      <div className="relative h-56 overflow-hidden">
        <SmartImage src={program.image} alt={program.title} className="h-full w-full transition-transform duration-700 group-hover:scale-[1.04]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
        <div className="absolute left-5 top-5 rounded-full border border-white/35 bg-black/25 px-3 py-1.5 text-[10px] font-bold tracking-[.12em] text-white backdrop-blur">{program.code}</div>
        <p className="absolute bottom-5 left-5 right-5 text-sm font-medium leading-6 text-white">{program.tagline}</p>
      </div>
      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[.13em] text-[#8c795c]">
          <span>{program.duration}</span><span className="h-1 w-1 rounded-full bg-[#b18b52]" /><span>{program.mode}</span>
        </div>
        <h3 className="mt-3 text-xl font-semibold leading-tight tracking-[-.045em] text-[#171717]">{program.title}</h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#6b6d64]">{program.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {(program.specialisations.length ? program.specialisations : ["Programme overview", "Academic pathway", "Career development"]).slice(0, 3).map((tag) => (
            <span key={tag} className="rounded-full bg-[#f3f1ea] px-3 py-1.5 text-[10px] font-medium text-[#6b6d64]">{tag}</span>
          ))}
        </div>
        <button type="button" onClick={() => onOpen(program)} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#8b6a3d] hover:text-[#171717] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b18b52]">
          Know more <ArrowUpRight size={16} />
        </button>
      </div>
    </article>
  );
}

function ProgramSpotlight({ program, badge, onOpen }: { program: ProgramRecord; badge: string; onOpen: (program: ProgramRecord) => void }) {
  return (
    <div className="grid overflow-hidden rounded-[36px] bg-[#191a17] text-white shadow-[0_24px_70px_rgba(23,23,23,.15)] lg:grid-cols-[1.05fr_.95fr]">
      <div className="group relative min-h-[280px] lg:min-h-[440px]">
        <SmartImage src={program.image} alt={program.title} className="h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
      </div>
      <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
        <span className="w-fit rounded-full border border-[#d5b47d]/40 bg-[#d5b47d]/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.18em] text-[#d5b47d]">{badge}</span>
        <p className="mt-7 text-[10px] font-bold uppercase tracking-[.2em] text-white/45">{program.code} · {program.duration} · {program.mode}</p>
        <h3 className="mt-4 text-3xl font-semibold leading-[1.05] tracking-[-.055em] sm:text-4xl">{program.title}</h3>
        <p className="mt-4 text-sm leading-7 text-white/65">{program.tagline}</p>
        <button type="button" onClick={() => onOpen(program)} className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#171717] transition hover:bg-[#e8dfce] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d5b47d]">
          Know more <ArrowUpRight size={16} />
        </button>
      </div>
    </div>
  );
}

const levelInfo: Array<{ level: Level; title: string; description: string; duration: string; image: string }> = [
  { level: "bachelor", title: "Bachelor", description: "Build a strong academic foundation and discover where your interests can take you.", duration: "Typically 3–4 years", image: imageFallbacks.bachelor },
  { level: "master", title: "Master’s", description: "Deepen your expertise, sharpen your perspective and prepare for the next level.", duration: "Typically 1–2 years", image: imageFallbacks.master },
  { level: "doctorate", title: "Doctorate", description: "Turn professional experience into meaningful research and strategic impact.", duration: "Approximately 3 years", image: imageFallbacks.doctorate },
];

function getCount(level: Level): number {
  if (level === "bachelor") return bachelorList.length;
  if (level === "master") return masterList.length;
  return 1;
}

export default function ProgramsPage() {
  const reduceMotion = useReducedMotion();
  const [activeLevel, setActiveLevel] = useState<"all" | Level>("all");
  const [query, setQuery] = useState("");
  const [durationFilter, setDurationFilter] = useState("all");
  const [activeFaqTab, setActiveFaqTab] = useState<Level>("bachelor");
  const [selectedProgram, setSelectedProgram] = useState<ProgramRecord | null>(null);
  const [formCourse, setFormCourse] = useState("");
  const [showTop, setShowTop] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const partnerCount = useMemo(() => {
    if (Array.isArray(partners)) return partners.length;
    return 0;
  }, []);

  const filteredPrograms = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return allPrograms.filter((program) => {
      const levelMatches = activeLevel === "all" || program.level === activeLevel;
      const text = [program.title, program.code, program.tagline, program.description, ...program.specialisations, ...program.careers].join(" ").toLowerCase();
      const queryMatches = !needle || text.includes(needle);
      const durationMatches = durationFilter === "all" ||
        (durationFilter === "online" && program.mode.toLowerCase().includes("online")) ||
        (durationFilter === "full-time" && program.mode.toLowerCase().includes("full")) ||
        (durationFilter === "short" && /1 year|12 month|18 month/i.test(program.duration));
      return levelMatches && queryMatches && durationMatches;
    });
  }, [activeLevel, query, durationFilter]);

  const programFaqs: Record<Level, FaqItem[]> = {
    bachelor: normalizeFaqs(bachelorFaqs),
    master: normalizeFaqs(masterFaqs),
    doctorate: normalizeFaqs(doctorateFaqs),
  };
  const outcomeItems = [
    ...normalizeOutcomes(bachelorOutcomes),
    ...normalizeOutcomes(masterOutcomes),
    ...normalizeOutcomes(graduateOutcomes),
  ].slice(0, 8);
  const bachelorStatItems = normalizeInfoItems(bachelorStats, "Bachelor statistic");
  const masterStatItems = normalizeInfoItems(masterStats, "Master statistic");
  const doctorateHighlightItems = normalizeInfoItems(programmeHighlights, "Doctorate highlight");
  const doctorateStageItems = normalizeInfoItems(programmeStages, "Doctorate stage");

  const scrollToSection = useCallback((level: Level) => {
    document.getElementById(level)?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    setActiveLevel(level);
  }, [reduceMotion]);

  const openDetails = useCallback((program: ProgramRecord) => {
    setSelectedProgram(program);
    requestAnimationFrame(() => dialogRef.current?.showModal());
  }, []);

  const enquireFor = useCallback((program: ProgramRecord) => {
    setFormCourse(`${program.title} (${program.code})`);
    dialogRef.current?.close();
    window.setTimeout(() => document.getElementById("interest-form")?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" }), 100);
  }, [reduceMotion]);

  useEffect(() => {
    document.title = "Programs | CampusSeat";
    let description = document.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement("meta");
      description.setAttribute("name", "description");
      document.head.appendChild(description);
    }
    description.setAttribute("content", "Explore Bachelor’s, Master’s and Doctor of Business Administration programmes with CampusSeat. Compare study pathways and speak with admissions.");
  }, []);

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("level");
    if (requested === "master" || requested === "bachelor" || requested === "doctorate") {
      setActiveLevel(requested);
      window.setTimeout(() => document.getElementById(requested)?.scrollIntoView({ behavior: "smooth", block: "start" }), 120);
    }
  }, []);

  useEffect(() => {
    const nodes = (["bachelor", "master", "doctorate"] as Level[])
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));
    if (!nodes.length || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target.id) setActiveLevel(visible.target.id as Level);
    }, { rootMargin: "-22% 0px -58% 0px", threshold: [0, 0.15, 0.35, 0.6] });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const reveal = reduceMotion ? {} : {
    variants: revealVariants,
    initial: "hidden" as const,
    whileInView: "visible" as const,
    viewport: { once: true, amount: 0.12 },
  };

  const bachelorSpotlight = bachelorList[0] ?? normalizeProgramme({}, "bachelor", 0);
  const masterSpotlight = masterList[0] ?? normalizeProgramme({}, "master", 0);

  return (
    <main className="overflow-x-clip bg-[#f5f3ed] text-[#171717]">
      {/* HERO */}
      <section aria-labelledby="programs-hero-title" className="relative isolate min-h-[760px] overflow-hidden bg-[#1b1c18] pt-28 text-white sm:pt-32 lg:min-h-[820px]">
        <div className="absolute inset-0 -z-20">
          <Image src={imageFallbacks.hero} alt="Students collaborating in a modern learning environment" fill priority sizes="100vw" className="object-cover opacity-55" />
        </div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(13,14,12,.94)_0%,rgba(13,14,12,.78)_48%,rgba(13,14,12,.45)_100%)]" />
        <div className="absolute -right-24 top-24 -z-10 h-96 w-96 rounded-full bg-[#b18b52]/20 blur-[100px]" />
        <div className="mx-auto grid max-w-[1440px] gap-14 px-5 pb-32 pt-16 sm:px-8 lg:grid-cols-[1.2fr_.8fr] lg:items-center lg:px-14 lg:pb-40 lg:pt-20">
          <motion.div {...reveal}>
            <p className="mb-8 text-[10px] font-semibold uppercase tracking-[.2em] text-white/55"><Link href="/" className="hover:text-white">CampusSeat</Link><span className="mx-3 text-[#d5b47d]">/</span>Programs</p>
            <p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#d5b47d]">Find the next chapter</p>
            <h1 id="programs-hero-title" className="mt-5 max-w-4xl text-[clamp(3.4rem,7vw,7.4rem)] font-semibold leading-[.91] tracking-[-.075em]">Programs built around your <span className="font-serif font-normal italic text-[#d5b47d]">ambition.</span></h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">From your first degree to advanced leadership research, discover a learning pathway designed to move you forward.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <PillLink href="#interest-form">Speak with Admissions</PillLink>
              <Link href="#level-selector" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d5b47d]">Explore programs <ArrowDown size={15} /></Link>
            </div>
          </motion.div>
          <motion.aside {...reveal} className="rounded-[32px] border border-white/20 bg-white/[0.09] p-6 shadow-[0_25px_80px_rgba(0,0,0,.2)] backdrop-blur-xl sm:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#d5b47d]">The CampusSeat approach</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-.045em]">Program highlights</h2>
            <div className="mt-7 space-y-5">
              {[
                [Laptop, "Online delivery", "Flexible ways to fit learning around life and work."],
                [Globe2, "Partner universities", "Explore pathways across an international partner network."],
                [Clock3, "Flexible schedules", "Understand the study commitment before you apply."],
                [ShieldCheck, "Recognition guidance", "Get support reviewing programme and awarding-body information."],
                [Users, "Mentor support", "Speak with an advisor as you plan your next step."],
              ].map(([Icon, title, description]) => {
                const HighlightIcon = Icon as typeof Laptop;
                return <div key={String(title)} className="flex gap-4"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-[#d5b47d]"><HighlightIcon size={18} /></span><div><h3 className="text-sm font-semibold">{String(title)}</h3><p className="mt-1 text-xs leading-5 text-white/55">{String(description)}</p></div></div>;
              })}
            </div>
          </motion.aside>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#f5f3ed] to-transparent" />
      </section>

      {/* COUNTS */}
      <section aria-label="Programmes at a glance" className="relative z-10 mx-auto -mt-12 max-w-[1320px] px-5 sm:px-8 lg:px-14">
        <div className="grid overflow-hidden rounded-[28px] border border-[#e3e0d6] bg-white shadow-[0_18px_55px_rgba(23,23,23,.09)] sm:grid-cols-2 lg:grid-cols-4">
          {[
            [String(bachelorList.length), "Bachelor programmes"],
            [String(masterList.length), "Master’s programmes"],
            ["1", "Doctorate pathway"],
            [String(partnerCount), "University partners"],
          ].map(([value, label], index) => <div key={label} className={`px-6 py-7 sm:px-8 ${index < 3 ? "border-b border-[#e3e0d6] sm:border-r" : ""} ${index === 1 ? "sm:border-r-0 lg:border-r" : ""} ${index === 2 ? "lg:border-r" : ""}`}><p className="text-4xl font-semibold tracking-[-.07em] text-[#171717]">{value}</p><p className="mt-2 text-xs text-[#77776f]">{label}</p></div>)}
        </div>
      </section>

      {/* STICKY SELECTOR */}
      <section id="level-selector" aria-label="Find and filter programmes" className="sticky top-[76px] z-40 mt-16 border-y border-[#e3e0d6]/90 bg-[#f5f3ed]/95 py-3 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-14">
          <div className="flex gap-1 overflow-x-auto pb-1" role="tablist" aria-label="Programme level">
            {(["all", "bachelor", "master", "doctorate"] as const).map((level) => (
              <button key={level} type="button" role="tab" aria-selected={activeLevel === level} onClick={() => level === "all" ? (setActiveLevel("all"), document.getElementById("pick-your-level")?.scrollIntoView({ behavior: "smooth" })) : scrollToSection(level)} className={`shrink-0 rounded-full px-4 py-2.5 text-xs font-semibold capitalize transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b18b52] ${activeLevel === level ? "bg-[#171717] text-white" : "text-[#6b6d64] hover:bg-white"}`}>
                {level === "all" ? "All" : level === "master" ? "Master’s" : level} <span className={`ml-1 ${activeLevel === level ? "text-white/55" : "text-[#9b9b91]"}`}>{level === "all" ? allPrograms.length : getCount(level)}</span>
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-[minmax(190px,1fr)_170px]">
            <label className="relative col-span-2 sm:col-span-1"><span className="sr-only">Search programmes</span><Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8a8b81]" /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search title, specialisation, career" className="h-10 w-full rounded-full border border-[#e3e0d6] bg-white pl-9 pr-4 text-xs outline-none placeholder:text-[#9b9b91] focus-visible:border-[#b18b52] focus-visible:ring-2 focus-visible:ring-[#b18b52]/20" /></label>
            <label><span className="sr-only">Filter by duration or mode</span><select value={durationFilter} onChange={(e) => setDurationFilter(e.target.value)} className="h-10 w-full rounded-full border border-[#e3e0d6] bg-white px-4 text-xs text-[#5e6058] outline-none focus-visible:border-[#b18b52] focus-visible:ring-2 focus-visible:ring-[#b18b52]/20"><option value="all">Any duration / mode</option><option value="online">Online</option><option value="full-time">Full-time</option><option value="short">Up to 18 months</option></select></label>
          </div>
        </div>
        <p role="status" aria-live="polite" className="mx-auto mt-2 max-w-[1440px] px-5 text-[10px] text-[#85867c] sm:px-8 lg:px-14">Showing {filteredPrograms.length} of {allPrograms.length} programmes</p>
      </section>

      {/* PICK YOUR LEVEL */}
      <section id="pick-your-level" className="px-5 py-20 sm:px-8 sm:py-28 lg:px-14">
        <div className="mx-auto max-w-[1320px]">
          <motion.div {...reveal}><SectionHeading eyebrow="Pick your level" title={<>One destination. Three ways to <span className="font-serif italic text-[#b18b52]">move forward.</span></>} description="Start with the level that matches your experience, ambitions and next career milestone." /></motion.div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {levelInfo.map((item, index) => (
              <motion.article key={item.level} {...(reduceMotion ? {} : { initial: { opacity: 0, y: 22 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: index * .08, duration: .6 } })} className="group relative min-h-[420px] overflow-hidden rounded-[32px] bg-[#24251f] text-white">
                <SmartImage src={item.image} alt={`${item.title} study pathway`} className="absolute inset-0 h-full w-full opacity-75 transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/10" />
                <div className="absolute inset-x-0 bottom-0 p-7 sm:p-8">
                  <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#d5b47d]">{getCount(item.level)} programmes</p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-[-.06em]">{item.title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/70">{item.description}</p>
                  <div className="mt-5 flex items-center justify-between gap-3"><span className="text-xs text-white/55">{item.duration}</span><button type="button" onClick={() => scrollToSection(item.level)} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-bold text-[#171717] hover:bg-[#e8dfce] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d5b47d]">Explore <ArrowUpRight size={14} /></button></div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED SPOTLIGHTS */}
      <section className="px-5 pb-20 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-[1320px]">
          <motion.div {...reveal}><SectionHeading eyebrow="Featured pathways" title={<>A closer look at the <span className="font-serif italic text-[#b18b52]">possibilities.</span></>} description="A first look at one pathway from each level. Explore the full programme details below." /></motion.div>
          <div className="mt-10 space-y-5">
            <ProgramSpotlight program={bachelorSpotlight} badge="Popular bachelor pathway" onOpen={openDetails} />
            <ProgramSpotlight program={masterSpotlight} badge="Popular master’s pathway" onOpen={openDetails} />
            <ProgramSpotlight program={doctorateProgram} badge="Executive doctorate" onOpen={openDetails} />
          </div>
        </div>
      </section>

      {/* PROGRAMME DATA HIGHLIGHTS */}
      <section className="px-5 pb-16 sm:px-8 lg:px-14">
        <div className="mx-auto grid max-w-[1320px] gap-5 lg:grid-cols-3">
          <div className="rounded-[28px] border border-[#e3e0d6] bg-white p-6">
            <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#9b784b]">Bachelor insights</p>
            <div className="mt-4 space-y-3">
              {bachelorStatItems.slice(0, 4).map((item, index) => <div key={`${item.title}-${index}`} className="border-b border-[#efede5] pb-3 last:border-0"><p className="text-sm font-semibold">{item.title}</p>{item.description && <p className="mt-1 text-xs leading-5 text-[#77776f]">{item.description}</p>}</div>)}
              {bachelorStatItems.length === 0 && <p className="text-xs leading-6 text-[#77776f]">Explore the Bachelor programme cards to review available study details.</p>}
            </div>
          </div>
          <div className="rounded-[28px] border border-[#e3e0d6] bg-white p-6">
            <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#9b784b]">Master’s insights</p>
            <div className="mt-4 space-y-3">
              {masterStatItems.slice(0, 4).map((item, index) => <div key={`${item.title}-${index}`} className="border-b border-[#efede5] pb-3 last:border-0"><p className="text-sm font-semibold">{item.title}</p>{item.description && <p className="mt-1 text-xs leading-5 text-[#77776f]">{item.description}</p>}</div>)}
              {masterStatItems.length === 0 && <p className="text-xs leading-6 text-[#77776f]">Explore the Master’s programme cards to review available study details.</p>}
            </div>
          </div>
          <div className="rounded-[28px] border border-[#e3e0d6] bg-[#efede5] p-6">
            <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#9b784b]">Doctorate highlights</p>
            <div className="mt-4 space-y-3">
              {[...doctorateHighlightItems, ...doctorateStageItems].slice(0, 4).map((item, index) => <div key={`${item.title}-${index}`} className="border-b border-[#ded9cd] pb-3 last:border-0"><p className="text-sm font-semibold">{item.title}</p>{item.description && <p className="mt-1 text-xs leading-5 text-[#77776f]">{item.description}</p>}</div>)}
              {doctorateHighlightItems.length + doctorateStageItems.length === 0 && <p className="text-xs leading-6 text-[#77776f]">The DBA combines taught learning, applied research and a viva voce.</p>}
            </div>
          </div>
        </div>
      </section>

      {/* BACHELOR */}
      <section id="bachelor" aria-labelledby="bachelor-heading" className="scroll-mt-36 px-5 py-20 sm:px-8 sm:py-28 lg:px-14">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(280px,.95fr)] lg:items-start lg:gap-12">
          <div>
            <motion.div {...reveal}><SectionHeading eyebrow="01 / Undergraduate study" title={<>Bachelor Degree <span className="font-serif italic text-[#b18b52]">Programs.</span></>} description="Build your academic foundation with a programme that connects subject knowledge, practical skills and your future ambitions." /></motion.div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filteredPrograms.filter((program) => program.level === "bachelor").map((program) => <ProgramCard key={program.id} program={program} onOpen={openDetails} />)}
            </div>
            {filteredPrograms.filter((program) => program.level === "bachelor").length === 0 && <p className="mt-8 rounded-2xl border border-dashed border-[#d6d1c4] p-8 text-sm text-[#77776f]">No Bachelor programmes match your search. Try another keyword or filter.</p>}
            <Link href="/programs/bachelor" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#8b6a3d] hover:text-[#171717]">View full Bachelor page <ArrowUpRight size={16} /></Link>
          </div>
          <aside className="space-y-5 lg:sticky lg:top-36"><PartnerCard /><div id="interest-form" className="scroll-mt-28"><InterestForm presetCourse={formCourse} courseOptions={courseOptions} /></div></aside>
        </div>
      </section>

      {/* MASTER */}
      <section id="master" aria-labelledby="master-heading" className="scroll-mt-36 bg-[#fbfaf5] px-5 py-20 sm:px-8 sm:py-28 lg:px-14">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(280px,.95fr)] lg:items-start lg:gap-12">
          <div>
            <motion.div {...reveal}><SectionHeading eyebrow="02 / Postgraduate study" title={<>Master’s Degree <span className="font-serif italic text-[#b18b52]">Programs.</span></>} description="Specialise, expand your perspective and develop the confidence to lead in a changing professional landscape." /></motion.div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filteredPrograms.filter((program) => program.level === "master").map((program) => <ProgramCard key={program.id} program={{ ...program, mode: program.mode || "Online" }} onOpen={openDetails} />)}
            </div>
            {filteredPrograms.filter((program) => program.level === "master").length === 0 && <p className="mt-8 rounded-2xl border border-dashed border-[#d6d1c4] p-8 text-sm text-[#77776f]">No Master’s programmes match your search. Try another keyword or filter.</p>}
            <Link href="/programs/master" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#8b6a3d] hover:text-[#171717]">View full Master’s page <ArrowUpRight size={16} /></Link>
          </div>
          <aside className="space-y-5 lg:sticky lg:top-36"><PartnerCard /><div id="interest-form-master" className="scroll-mt-28"><InterestForm presetCourse={formCourse} courseOptions={courseOptions} /></div></aside>
        </div>
      </section>

      {/* DOCTORATE */}
      <section id="doctorate" aria-labelledby="doctorate-heading" className="scroll-mt-36 bg-[#191a17] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-14">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-12 lg:grid-cols-[1fr_.8fr] lg:items-end">
            <motion.div {...reveal}><SectionHeading light eyebrow="03 / Executive research" title={<>Doctor of Business <span className="font-serif italic text-[#d5b47d]">Administration.</span></>} description="A professional doctorate designed to connect advanced business thinking with applied research and organisational impact." /></motion.div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/[.05] p-5"><p className="text-[10px] uppercase tracking-[.16em] text-white/45">Taught phase</p><p className="mt-2 text-2xl font-semibold">Year 1</p><p className="mt-1 text-xs text-white/55">Structured learning and assessment</p></div>
              <div className="rounded-2xl border border-white/10 bg-white/[.05] p-5"><p className="text-[10px] uppercase tracking-[.16em] text-white/45">Research phase</p><p className="mt-2 text-2xl font-semibold">Years 2–3</p><p className="mt-1 text-xs text-white/55">Thesis development and viva voce</p></div>
            </div>
          </div>
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_.9fr]">
            <div className="rounded-[32px] border border-white/10 bg-white/[.045] p-6 sm:p-8">
              <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#d5b47d]">Programme journey</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  ["01", "Taught phase", "Build advanced management knowledge and research capability."],
                  ["02", "Research phase", "Develop an applied doctoral research project."],
                  ["03", "Viva voce", "Present and defend the completed research."],
                ].map(([number, title, description], index) => <div key={number} className="relative rounded-2xl bg-white/[.06] p-5"><span className="text-xs font-bold text-[#d5b47d]">{number}</span><h3 className="mt-4 text-lg font-semibold">{title}</h3><p className="mt-2 text-xs leading-6 text-white/55">{description}</p>{index < 2 && <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-[#d5b47d] sm:block" size={18} />}</div>)}
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 p-5"><p className="text-xs text-white/45">Year 1</p><p className="mt-2 text-2xl font-semibold">Taught learning</p><p className="mt-2 text-xs leading-5 text-white/55">Core modules, guided learning and applied assessment.</p></div>
                <div className="rounded-2xl border border-white/10 p-5"><p className="text-xs text-white/45">Years 2–3</p><p className="mt-2 text-2xl font-semibold">Doctoral research</p><p className="mt-2 text-xs leading-5 text-white/55">Independent research, thesis preparation and viva voce.</p></div>
              </div>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#d5b47d]">Assessment & modules</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-.04em]">Explore the learning framework.</h3>
              <p className="mt-3 text-sm leading-7 text-white/55">The module list below is taken from the existing doctorate data. Open any item to review its assessment summary.</p>
              <div className="mt-6 space-y-2">
                {doctorateAssessment.map((module) => <details key={module.number} className="group rounded-xl border border-white/10 bg-white/[.04] p-4 open:bg-white/[.08]"><summary className="flex cursor-pointer list-none items-center gap-4 text-sm font-semibold"><span className="text-[10px] text-[#d5b47d]">{module.number}</span><span className="flex-1">{module.title}</span><ChevronDown size={15} className="transition-transform group-open:rotate-180" /></summary><p className="mt-3 pl-9 text-xs leading-6 text-white/55">{module.description}</p></details>)}
                {doctorateAssessment.length === 0 && <p className="rounded-xl border border-white/10 p-4 text-xs text-white/55">Module details are not available in the doctorate data module yet.</p>}
              </div>
              <a href="/doc/dbcontent.pdf" target="_blank" rel="noreferrer" className="mt-7 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#d5b47d] px-5 text-sm font-semibold text-[#171717] transition hover:bg-[#e4cda7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Download DBA programme PDF <ArrowUpRight size={16} /></a>
            </div>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <PartnerCard />
            <div id="interest-form-doctorate" className="scroll-mt-28">
              <InterestForm presetCourse={formCourse || "Doctor of Business Administration (DBA)"} courseOptions={courseOptions} />
            </div>
          </div>
          <Link href="/programs/doctorate" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#d5b47d] hover:text-white">View full Doctorate page <ArrowUpRight size={16} /></Link>
        </div>
      </section>

      {/* COMPARE LEVELS */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-14">
        <div className="mx-auto max-w-[1320px]">
          <motion.div {...reveal}><SectionHeading eyebrow="Choose with clarity" title={<>Compare the levels. Find your <span className="font-serif italic text-[#b18b52]">fit.</span></>} description="A high-level guide to help you understand the difference between each pathway. Exact requirements depend on the selected programme." /></motion.div>
          <div className="mt-10 hidden overflow-hidden rounded-[28px] border border-[#e3e0d6] bg-white shadow-[0_14px_40px_rgba(23,23,23,.04)] md:block">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-[#efede5]"><tr><th className="p-5 text-xs font-bold uppercase tracking-[.14em] text-[#77776f]">Compare</th><th className="p-5 text-sm font-semibold">Bachelor</th><th className="p-5 text-sm font-semibold">Master’s</th><th className="p-5 text-sm font-semibold">Doctorate</th></tr></thead>
              <tbody className="divide-y divide-[#e3e0d6]">
                {[
                  ["Typical duration", "3–4 years", "1–2 years", "~3 years"],
                  ["Eligibility", "Relevant school-leaving qualification", "Relevant undergraduate degree", "Relevant postgraduate background and experience"],
                  ["Mode", "Programme dependent", "Online options", "Online"],
                  ["Outcome", "Subject foundation and career preparation", "Advanced specialisation", "Applied research and strategic contribution"],
                  ["Ideal for", "Starting a degree journey", "Advancing or changing direction", "Experienced professionals and leaders"],
                ].map((row) => <tr key={row[0]}><th className="bg-[#fbfaf5] p-5 text-xs font-semibold text-[#77776f]">{row[0]}</th>{row.slice(1).map((cell, index) => <td key={index} className="p-5 leading-6 text-[#55574f]">{cell}</td>)}</tr>)}
              </tbody>
            </table>
          </div>
          <div className="mt-8 grid gap-4 md:hidden">
            {[
              ["Bachelor", "3–4 years", "Relevant school-leaving qualification", "Programme dependent", "Starting a degree journey"],
              ["Master’s", "1–2 years", "Relevant undergraduate degree", "Online options", "Advancing or changing direction"],
              ["Doctorate", "~3 years", "Relevant postgraduate background and experience", "Online", "Experienced professionals and leaders"],
            ].map(([title, duration, eligibility, mode, ideal]) => <article key={title} className="rounded-[24px] border border-[#e3e0d6] bg-white p-5"><h3 className="text-xl font-semibold">{title}</h3><dl className="mt-4 grid grid-cols-2 gap-4 text-xs"><div><dt className="text-[#92938a]">Duration</dt><dd className="mt-1 font-semibold">{duration}</dd></div><div><dt className="text-[#92938a]">Mode</dt><dd className="mt-1 font-semibold">{mode}</dd></div><div className="col-span-2"><dt className="text-[#92938a]">Eligibility</dt><dd className="mt-1 leading-5 text-[#55574f]">{eligibility}</dd></div><div className="col-span-2"><dt className="text-[#92938a]">Ideal for</dt><dd className="mt-1 leading-5 text-[#55574f]">{ideal}</dd></div></dl></article>)}
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="bg-[#fbfaf5] px-5 py-20 sm:px-8 sm:py-28 lg:px-14">
        <div className="mx-auto max-w-[1320px]">
          <motion.div {...reveal}><SectionHeading eyebrow="Your journey" title={<>From first question to your next <span className="font-serif italic text-[#b18b52]">milestone.</span></>} /></motion.div>
          <div className="relative mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-6">
            <div className="absolute left-0 right-0 top-6 hidden h-px bg-[#d9d4c8] lg:block" />
            {[
              [Compass, "Discover", "Explore study pathways and destinations."],
              [Lightbulb, "Choose", "Shortlist a programme that fits your goals."],
              [ArrowUpRight, "Apply", "Prepare your enquiry and application."],
              [BookOpen, "Learn", "Build knowledge and practical capability."],
              [Award, "Certify", "Complete your programme requirements."],
              [BriefcaseBusiness, "Advance", "Put your learning into action."],
            ].map(([Icon, title, description], index) => {
              const StepIcon = Icon as typeof Compass;
              return <div key={String(title)} className="relative"><span className="relative z-10 grid h-12 w-12 place-items-center rounded-full border border-[#d9d4c8] bg-[#fbfaf5] text-[#9b784b]"><StepIcon size={19} /></span><p className="mt-5 text-[10px] font-bold uppercase tracking-[.16em] text-[#a18a65]">0{index + 1}</p><h3 className="mt-2 text-lg font-semibold">{String(title)}</h3><p className="mt-2 text-xs leading-6 text-[#77776f]">{String(description)}</p></div>;
            })}
          </div>
        </div>
      </section>

      {/* OUTCOMES + WHY */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-14">
        <div className="mx-auto grid max-w-[1320px] gap-14 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <motion.div {...reveal}><SectionHeading eyebrow="Learning outcomes" title={<>Learning that travels <span className="font-serif italic text-[#b18b52]">with you.</span></>} description="Explore the outcomes and capabilities described across the existing programme data." /></motion.div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {(outcomeItems.length ? outcomeItems : [
                { title: "Strategic thinking", description: "Build a wider view of challenges, choices and opportunities." },
                { title: "Applied capability", description: "Connect academic learning with practical professional contexts." },
                { title: "Career progression", description: "Strengthen your readiness for new responsibilities." },
                { title: "Research confidence", description: "Develop the ability to evaluate evidence and ideas." },
              ]).map((item, index) => <article key={`${item.title}-${index}`} className="rounded-[22px] border border-[#e3e0d6] bg-white p-5"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#f1eee6] text-[#9b784b]"><Award size={18} /></span><h3 className="mt-4 text-base font-semibold">{item.title}</h3><p className="mt-2 text-xs leading-6 text-[#77776f]">{item.description}</p></article>)}
            </div>
          </div>
          <div>
            <motion.div {...reveal}><SectionHeading eyebrow="Why CampusSeat" title={<>A more supported way to <span className="font-serif italic text-[#b18b52]">move ahead.</span></>} /></motion.div>
            <div className="mt-8 space-y-3">
              {[
                [Users, "Guidance at each step", "Get help understanding your options, application steps and next decisions."],
                [Globe2, "A global outlook", "Explore academic pathways and partner options across borders."],
                [Laptop, "Flexible learning options", "Review online and flexible study formats where available."],
                [ShieldCheck, "Clearer decisions", "Ask questions about entry requirements, recognition and programme fit before applying."],
              ].map(([Icon, title, description]) => {
                const WhyIcon = Icon as typeof Users;
                return <article key={String(title)} className="flex gap-4 rounded-[22px] border border-[#e3e0d6] bg-[#fbfaf5] p-5"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-[#9b784b]"><WhyIcon size={19} /></span><div><h3 className="text-sm font-semibold">{String(title)}</h3><p className="mt-2 text-xs leading-6 text-[#77776f]">{String(description)}</p></div></article>;
              })}
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="px-5 py-16 sm:px-8 lg:px-14">
        <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div><SectionHeading eyebrow="University partners" title={<>Choose a pathway with a <span className="font-serif italic text-[#b18b52]">wider view.</span></>} description="Learn about the university partner options connected with CampusSeat and discuss programme-specific details with admissions." /><Link href="/online-universities" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#8b6a3d]">Explore partners <ArrowUpRight size={16} /></Link></div>
          <PartnerCard />
        </div>
      </section>
      <UniversityPartnersCarousel />

      {/* FAQ */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-14">
        <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div><SectionHeading eyebrow="Questions, answered" title={<>A little more <span className="font-serif italic text-[#b18b52]">clarity.</span></>} description="Choose a programme level to browse the most relevant questions. If you need more detail, our admissions team can help." /></div>
          <div>
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Frequently asked questions by programme level">
              {(["bachelor", "master", "doctorate"] as Level[]).map((level) => <button key={level} type="button" role="tab" aria-selected={activeFaqTab === level} onClick={() => setActiveFaqTab(level)} className={`rounded-full px-4 py-2.5 text-xs font-semibold capitalize focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b18b52] ${activeFaqTab === level ? "bg-[#171717] text-white" : "bg-[#efede5] text-[#6b6d64] hover:bg-white"}`}>{level === "master" ? "Master’s" : level}</button>)}
            </div>
            <div className="mt-5 space-y-2">
              {(programFaqs[activeFaqTab].length ? programFaqs[activeFaqTab] : [{ question: "How can I check the entry requirements?", answer: "Entry requirements vary by programme. Share your academic background with admissions to discuss the requirements for your chosen pathway." }, { question: "How do I enquire about this programme?", answer: "Use the enquiry form on this page and select the programme you are interested in. An advisor can help you understand the next steps." }]).map((faq, index) => <details key={`${activeFaqTab}-${index}`} className="group rounded-2xl border border-[#e3e0d6] bg-white p-5 open:shadow-[0_12px_35px_rgba(23,23,23,.045)]"><summary className="flex cursor-pointer list-none items-center gap-4 text-sm font-semibold text-[#272821]"><span className="flex-1">{faq.question}</span><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#f1eee6] text-[#8b6a3d] transition-transform duration-300 group-open:rotate-45"><span className="text-xl font-light leading-none">+</span></span></summary><p className="mt-4 pr-10 text-sm leading-7 text-[#77776f]">{faq.answer}</p></details>)}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-28 lg:px-14">
        <div className="relative mx-auto max-w-[1320px] overflow-hidden rounded-[40px] bg-[#191a17] px-7 py-14 text-white sm:px-12 sm:py-20 lg:px-16">
          <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full bg-[#b18b52]/20 blur-[100px]" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div><p className="text-[10px] font-bold uppercase tracking-[.22em] text-[#d5b47d]">Your next step starts here</p><h2 className="mt-4 max-w-3xl text-[clamp(2.5rem,5.5vw,5rem)] font-semibold leading-[.96] tracking-[-.07em]">Speak with Admissions. <span className="font-serif font-normal italic text-[#d5b47d]">Plan what’s next.</span></h2><p className="mt-5 max-w-xl text-sm leading-7 text-white/60">Tell us what you want to achieve. We’ll help you explore the programme options and understand the next steps.</p></div>
            <PillLink href="#interest-form">Speak with Admissions</PillLink>
          </div>
        </div>
      </section>

      {/* DETAIL DIALOG */}
      <dialog ref={dialogRef} onClose={() => setSelectedProgram(null)} className="m-auto max-h-[90vh] w-[min(92vw,760px)] overflow-y-auto rounded-[30px] border border-[#e3e0d6] bg-[#fbfaf5] p-0 text-[#171717] shadow-[0_30px_100px_rgba(0,0,0,.35)] backdrop:bg-black/65">
        {selectedProgram && (
          <div>
            <div className="group relative h-56 sm:h-72">
              <SmartImage src={selectedProgram.image} alt={selectedProgram.title} className="h-full w-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <button type="button" onClick={() => dialogRef.current?.close()} aria-label="Close programme details" className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-black/45 text-white backdrop-blur hover:bg-black/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><X size={18} /></button>
              <div className="absolute bottom-5 left-6 right-6 text-white"><p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#e2c18c]">{selectedProgram.code} · {selectedProgram.duration}</p><h2 className="mt-2 text-3xl font-semibold tracking-[-.05em] sm:text-4xl">{selectedProgram.title}</h2></div>
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-sm leading-7 text-[#62645d]">{selectedProgram.description}</p>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div><h3 className="text-xs font-bold uppercase tracking-[.15em] text-[#9b784b]">Specialisations</h3><div className="mt-3 flex flex-wrap gap-2">{selectedProgram.specialisations.map((item) => <span key={item} className="rounded-full bg-[#efede5] px-3 py-2 text-xs text-[#62645d]">{item}</span>)}</div></div>
                <div><h3 className="text-xs font-bold uppercase tracking-[.15em] text-[#9b784b]">Career paths</h3><ul className="mt-3 space-y-2 text-xs leading-5 text-[#62645d]">{selectedProgram.careers.map((item) => <li key={item} className="flex gap-2"><Check size={14} className="mt-0.5 shrink-0 text-[#9b784b]" />{item}</li>)}</ul></div>
              </div>
              <div className="mt-6 rounded-2xl bg-white p-5"><h3 className="text-xs font-bold uppercase tracking-[.15em] text-[#9b784b]">Eligibility</h3><p className="mt-2 text-sm leading-6 text-[#62645d]">{selectedProgram.eligibility}</p></div>
              {selectedProgram.level === "doctorate" && <a href="/doc/dbcontent.pdf" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#8b6a3d]">Download DBA programme PDF <ArrowUpRight size={16} /></a>}
              <button type="button" onClick={() => enquireFor(selectedProgram)} className="group mt-7 inline-flex min-h-12 w-full items-center justify-between rounded-full bg-[#171717] py-1.5 pl-5 pr-2 text-sm font-semibold text-white hover:bg-[#39382f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b18b52]">Enquire about this programme <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15 transition-transform group-hover:rotate-45"><ArrowUpRight size={17} /></span></button>
            </div>
          </div>
        )}
      </dialog>

      {showTop && <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" })} aria-label="Back to top" className="fixed bottom-5 right-5 z-50 grid h-12 w-12 place-items-center rounded-full bg-[#171717] text-white shadow-[0_10px_30px_rgba(0,0,0,.2)] transition hover:-translate-y-1 hover:bg-[#3c3b34] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b18b52]"><ArrowUp size={19} /></button>}
    </main>
  );
}


/* -------------------------------------------------------------------------- */
/* INLINE COMPONENTS — combined from InterestForm.tsx, SectionHeading.tsx,    */
/* and ProgramPartnerComponents.tsx so this page works as a single TSX file.  */
/* -------------------------------------------------------------------------- */

type InlineSectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  accent?: ReactNode;
  description?: string;
  light?: boolean;
  className?: string;
};

function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  light = false,
  className = "",
}: InlineSectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <p className={`text-[10px] font-bold uppercase tracking-[0.22em] ${light ? "text-[#d5b47d]" : "text-[#9b784b]"}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-4 text-[clamp(2.25rem,5vw,4.6rem)] font-semibold leading-[0.98] tracking-[-0.065em] ${light ? "text-white" : "text-[#171717]"}`}>
        {title}{" "}
        {accent && <span className={`font-serif font-normal italic ${light ? "text-[#d5b47d]" : "text-[#b18b52]"}`}>{accent}</span>}
      </h2>
      {description && (
        <p className={`mt-5 max-w-2xl text-sm leading-7 sm:text-[15px] sm:leading-8 ${light ? "text-white/65" : "text-[#6b6d64]"}`}>
          {description}
        </p>
      )}
    </div>
  );
}

type InlineInterestFormProps = {
  presetCourse?: string;
  courseOptions?: string[];
};

type InlineFormState = {
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
  consent: boolean;
  website: string;
};

const inlineInitialFormState: InlineFormState = {
  name: "",
  email: "",
  phone: "",
  course: "",
  message: "",
  consent: false,
  website: "",
};

function InterestForm({ presetCourse = "", courseOptions = [] }: InlineInterestFormProps) {
  const [values, setValues] = useState<InlineFormState>({ ...inlineInitialFormState, course: presetCourse });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    if (presetCourse) setValues((current) => ({ ...current, course: presetCourse }));
  }, [presetCourse]);

  function update<K extends keyof InlineFormState>(key: K, value: InlineFormState[K]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    if (!values.name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      setError("Please enter your name and a valid email address."); return;
    }
    if (!values.phone.trim() || values.phone.replace(/\D/g, "").length < 8) {
      setError("Please enter a valid phone number."); return;
    }
    if (!values.course.trim()) { setError("Please select a programme."); return; }
    if (!values.consent) { setError("Please confirm that we may contact you about your enquiry."); return; }
    if (values.website.trim()) { setStatus("success"); return; }

    setStatus("loading");
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name.trim(), email: values.email.trim(), phone: values.phone.trim(),
          course: values.course, message: values.message.trim(), consent: values.consent,
          source: "Programs page",
        }),
      });
      if (!response.ok) {
        const result: unknown = await response.json().catch(() => null);
        const message = result && typeof result === "object" && "message" in result &&
          typeof (result as { message?: unknown }).message === "string"
          ? (result as { message: string }).message
          : "We couldn't submit your enquiry. Please try again.";
        throw new Error(message);
      }
      setStatus("success");
      setValues({ ...inlineInitialFormState, course: presetCourse });
    } catch (caught) {
      setStatus("error");
      setError(caught instanceof Error ? caught.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") return (
    <div className="rounded-[28px] border border-[#e3e0d6] bg-white p-7 shadow-[0_16px_45px_rgba(23,23,23,.06)]">
      <CheckCircle2 className="h-10 w-10 text-[#8c815d]" />
      <h3 className="mt-5 text-2xl font-semibold tracking-[-.04em] text-[#171717]">Thank you for reaching out.</h3>
      <p className="mt-3 text-sm leading-7 text-[#6b6d64]">Your enquiry has been received. Our admissions team will get in touch with you.</p>
      <button type="button" onClick={() => setStatus("idle")} className="mt-6 text-sm font-semibold text-[#8c6b3e] underline underline-offset-4">Send another enquiry</button>
    </div>
  );

  const inputClass = "mt-2 w-full rounded-xl border border-[#e3e0d6] bg-[#fbfaf5] px-4 py-3 text-sm text-[#171717] outline-none transition placeholder:text-[#9b9b91] focus-visible:border-[#b18b52] focus-visible:ring-2 focus-visible:ring-[#b18b52]/20";
  return (
    <form onSubmit={handleSubmit} className="rounded-[28px] border border-[#e3e0d6] bg-white p-5 shadow-[0_16px_45px_rgba(23,23,23,.06)] sm:p-6" noValidate>
      <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#9b784b]">Start a conversation</p>
      <h3 className="mt-2 text-2xl font-semibold tracking-[-.05em] text-[#171717]">Tell us what you’re aiming for.</h3>
      <p className="mt-2 text-sm leading-6 text-[#77776f]">Share a few details and an admissions advisor will help you understand your options.</p>
      <div className="mt-5 space-y-3">
        <label className="block text-xs font-semibold text-[#45463f]">Full name
          <input className={inputClass} autoComplete="name" value={values.name} onChange={(e) => update("name", e.target.value)} placeholder="Your full name" required />
        </label>
        <label className="block text-xs font-semibold text-[#45463f]">Email address
          <input className={inputClass} type="email" autoComplete="email" value={values.email} onChange={(e) => update("email", e.target.value)} placeholder="you@example.com" required />
        </label>
        <label className="block text-xs font-semibold text-[#45463f]">Mobile number
          <div className="mt-2 flex overflow-hidden rounded-xl border border-[#e3e0d6] bg-[#fbfaf5] focus-within:border-[#b18b52] focus-within:ring-2 focus-within:ring-[#b18b52]/20">
            <span className="flex items-center border-r border-[#e3e0d6] px-3 text-sm text-[#77776f]">+91</span>
            <input className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm outline-none placeholder:text-[#9b9b91]" type="tel" autoComplete="tel-national" value={values.phone} onChange={(e) => update("phone", e.target.value)} placeholder="Mobile number" required />
          </div>
        </label>
        <label className="block text-xs font-semibold text-[#45463f]">Programme of interest
          {courseOptions.length > 0 ? (
            <select className={inputClass} value={values.course} onChange={(e) => update("course", e.target.value)} required>
              <option value="">Choose a programme</option>
              {courseOptions.map((course) => <option key={course} value={course}>{course}</option>)}
            </select>
          ) : <input className={inputClass} value={values.course} onChange={(e) => update("course", e.target.value)} placeholder="Select a programme from the page" required />}
        </label>
        <label className="block text-xs font-semibold text-[#45463f]">Anything else? <span className="font-normal text-[#92938a]">(optional)</span>
          <textarea className={`${inputClass} min-h-24 resize-y`} value={values.message} onChange={(e) => update("message", e.target.value)} placeholder="Tell us about your goals or questions." />
        </label>
        <label className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">Website
          <input tabIndex={-1} autoComplete="off" value={values.website} onChange={(e) => update("website", e.target.value)} />
        </label>
        <label className="flex items-start gap-3 text-xs leading-5 text-[#77776f]">
          <input className="mt-0.5 h-4 w-4 shrink-0 accent-[#9b784b]" type="checkbox" checked={values.consent} onChange={(e) => update("consent", e.target.checked)} />
          I agree to be contacted by CampusSeat about my programme enquiry.
        </label>
      </div>
      {error && <p role="alert" className="mt-4 rounded-xl bg-red-50 px-3 py-2 text-xs leading-5 text-red-700">{error}</p>}
      {status === "error" && !error && <p role="alert" className="mt-4 text-xs text-red-700">Unable to submit. Please try again.</p>}
      <LoadingButton type="submit" loading={status === "loading"} loadingText="Sending enquiry..." className="group mt-5 inline-flex min-h-12 w-full items-center justify-between rounded-full bg-[#171717] py-1.5 pl-5 pr-2 text-sm font-semibold text-white transition hover:bg-[#3c3b34] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b18b52] disabled:cursor-wait disabled:opacity-70">
        Submit enquiry
        <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15 transition-transform duration-300 group-hover:rotate-45">
          <ArrowUpRight size={18} />
        </span>
      </LoadingButton>
    </form>
  );
}

const inlinePartnerNames = ["EIMT", "LSMT", "STRIDE", "BIRCHWOOD", "RUSHFORD", "DUNSTER"];

function PartnerCard() {
  return (
    <div className="rounded-[28px] border border-[#e3e0d6] bg-[#f4f1e9] p-6">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#171717] text-[#d5b47d]"><GraduationCap size={21} /></div>
      <p className="mt-5 text-[10px] font-bold uppercase tracking-[.2em] text-[#9b784b]">University network</p>
      <h3 className="mt-2 text-2xl font-semibold tracking-[-.05em] text-[#171717]">A wider world of learning.</h3>
      <p className="mt-3 text-sm leading-7 text-[#6b6d64]">Explore academic pathways across CampusSeat’s university partner network. Your advisor can help you understand the available options.</p>
      <div className="mt-5 grid grid-cols-2 gap-2">
        {inlinePartnerNames.map((name) => <span key={name} className="rounded-xl border border-[#e3e0d6] bg-white px-3 py-3 text-center text-[10px] font-bold tracking-[.13em] text-[#45463f]">{name}</span>)}
      </div>
      <a href="/online-universities" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#8c6b3e] hover:text-[#171717] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b18b52]">Explore university partners <ArrowUpRight size={16} /></a>
    </div>
  );
}

function UniversityPartnersCarousel() {
  return (
    <section aria-label="CampusSeat university partners" className="overflow-hidden border-y border-[#e3e0d6] bg-[#f0eee7] py-8">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <p className="mb-5 text-center text-[10px] font-bold uppercase tracking-[.22em] text-[#8d8c81]">Our university partner network</p>
        <div className="group relative overflow-hidden">
          <div className="flex w-max animate-[partner-marquee_32s_linear_infinite] items-center gap-4 group-hover:[animation-play-state:paused]">
            {[...inlinePartnerNames, ...inlinePartnerNames].map((name, index) => <div key={`${name}-${index}`} className="flex h-20 min-w-44 items-center justify-center rounded-2xl border border-[#e3e0d6] bg-white px-7 text-sm font-bold tracking-[.16em] text-[#4d4d46] shadow-[0_8px_25px_rgba(23,23,23,.035)]">{name}</div>)}
          </div>
        </div>
      </div>
      <style jsx>{`@keyframes partner-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } } @media (prefers-reduced-motion: reduce) { .animate-\\[partner-marquee_32s_linear_infinite\\] { animation: none; } }`}</style>
    </section>
  );
}
