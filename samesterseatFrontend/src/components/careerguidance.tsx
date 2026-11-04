
import Link from "next/link";
import {
    ArrowRight,
    Brain,
    BriefcaseBusiness,
    CheckCircle2,
    Code2,
    Compass,
    GraduationCap,
    HeartPulse,
    Lightbulb,
    Palette,
    Search,
    ShieldCheck,
    TrendingUp,
    Users,
    Wallet,
} from "lucide-react";
import Navbar from "../components/Navbar";
import SiteFooter from "./layout/SiteFooter";

const streams = [
    "All Careers",
    "Science",
    "Commerce",
    "Arts & Humanities",
    "Technology",
];

const careers = [
    {
        title: "Software Developer",
        category: "Technology",
        description:
            "Build websites, applications and digital products used by people and businesses.",
        skills: ["Programming", "Problem-solving"],
        icon: Code2,
        color: "bg-[#f1f1ed] text-[#171717]",
        href: "/career-guidance/software-developer",
    },
    {
        title: "Data Scientist",
        category: "Science",
        description:
            "Turn data into insights using statistics, programming and machine learning.",
        skills: ["Python", "Analytics"],
        icon: Brain,
        color: "bg-[#f1f1ed] text-[#343434]",
        href: "/career-guidance/data-scientist",
    },
    {
        title: "Business Manager",
        category: "Commerce",
        description:
            "Coordinate teams, manage operations and help organizations achieve their goals.",
        skills: ["Leadership", "Strategy"],
        icon: BriefcaseBusiness,
        color: "bg-[#fffaf2] text-[#77776f]",
        href: "/career-guidance/business-manager",
    },
    {
        title: "UI/UX Designer",
        category: "Arts & Humanities",
        description:
            "Design useful, accessible and engaging digital experiences for real users.",
        skills: ["Creativity", "Research"],
        icon: Palette,
        color: "bg-[#fbfaf5] text-[#77776f]",
        href: "/career-guidance/ui-ux-designer",
    },
    {
        title: "Cybersecurity Analyst",
        category: "Technology",
        description:
            "Help protect systems, networks and data from security threats.",
        skills: ["Networking", "Security"],
        icon: ShieldCheck,
        color: "bg-[#f1f1ed] text-[#171717]",
        href: "/career-guidance/cybersecurity-analyst",
    },
    {
        title: "Healthcare Professional",
        category: "Science",
        description:
            "Explore patient care, health sciences and other healthcare career pathways.",
        skills: ["Communication", "Care"],
        icon: HeartPulse,
        color: "bg-[#fffefa] text-[#343434]",
        href: "/career-guidance/healthcare",
    },
];

const roadmap = [
    {
        number: "01",
        title: "Discover yourself",
        description:
            "Understand your interests, strengths, preferred subjects and working style.",
        icon: Compass,
    },
    {
        number: "02",
        title: "Explore career options",
        description:
            "Compare career responsibilities, qualifications and potential opportunities.",
        icon: Search,
    },
    {
        number: "03",
        title: "Choose your pathway",
        description:
            "Explore suitable degrees, certifications, entrance exams and colleges.",
        icon: GraduationCap,
    },
    {
        number: "04",
        title: "Build your future",
        description:
            "Develop practical skills, complete projects and prepare for the workplace.",
        icon: TrendingUp,
    },
];

const resources = [
    {
        title: "Courses after Class 12",
        description: "Understand degree options, streams and eligibility.",
        href: "/courses",
        icon: GraduationCap,
    },
    {
        title: "Explore Colleges",
        description: "Research institutions, programs and admission options.",
        href: "/colleges",
        icon: BriefcaseBusiness,
    },
    {
        title: "Fees & Scholarships",
        description: "Plan education expenses and research financial support.",
        href: "/scholarships",
        icon: Wallet,
    },
];

export default function CareerGuidancePage() {
    return (
        <>
            <Navbar />

            <main className="overflow-hidden bg-[#fbfaf5] text-[#171717]">
                {/* HERO */}
                <section className="relative bg-[#171717] text-white">
                    <div className="pointer-events-none absolute -right-32 -top-24 h-96 w-96 rounded-full bg-white/[0.04] blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-white/[0.03] blur-3xl" />

                    <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:px-10">
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/70">
                                <Lightbulb size={16} />
                                EDUPATH CAREER STUDIO
                            </div>

                            <h1 className="mt-7 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                                Your future isn&apos;t a guess.
                                <span className="mt-2 block font-serif italic text-[#77776f]">
                                    It&apos;s a plan.
                                </span>
                            </h1>

                            <p className="mt-6 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
                                Discover career paths that match your interests.
                                Explore the right courses, compare your options
                                and make your next move with confidence.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <a
                                    href="#career-explorer"
                                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-[#171717] transition hover:bg-[#f1f1ed]"
                                >
                                    Explore Careers <ArrowRight size={18} />
                                </a>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
                                >
                                    Get Career Guidance
                                </Link>
                            </div>

                            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/70">
                                <span className="flex items-center gap-2">
                                    <CheckCircle2 size={17} className="text-white/70" />
                                    Explore career pathways
                                </span>
                                <span className="flex items-center gap-2">
                                    <CheckCircle2 size={17} className="text-white/70" />
                                    Compare education options
                                </span>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="rounded-3xl border border-white/15 bg-white/[0.07] p-5 shadow-2xl backdrop-blur-sm sm:p-7">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <p className="text-sm text-white/70">
                                            YOUR JOURNEY STARTS HERE
                                        </p>
                                        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                                            Find your direction
                                        </h2>
                                    </div>
                                    <div className="rounded-2xl bg-white/[0.08] p-3 text-white/70">
                                        <Compass size={29} />
                                    </div>
                                </div>

                                <div className="mt-7 space-y-3">
                                    {[
                                        ["01", "Discover your interests", "What do you enjoy?"],
                                        ["02", "Explore possibilities", "What could you become?"],
                                        ["03", "Plan your next step", "How will you get there?"],
                                    ].map(([number, title, subtitle]) => (
                                        <div
                                            key={number}
                                            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4"
                                        >
                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.08] font-bold text-white/70">
                                                {number}
                                            </div>
                                            <div>
                                                <h3 className="font-semibold">{title}</h3>
                                                <p className="mt-1 text-sm text-white/70">
                                                    {subtitle}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-5 rounded-xl bg-white/[0.06] p-4 text-sm leading-6 text-white/70">
                                    The best career decision starts with understanding
                                    yourself and researching your options.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CAREER EXPLORER */}
                <section id="career-explorer" className="scroll-mt-28 py-20 sm:py-24">
                    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                        <div className="max-w-3xl">
                            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#77776f]">
                                Explore possibilities
                            </p>
                            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                                A career that fits your ambition
                            </h2>
                            <p className="mt-4 leading-7 text-[#6b6d64]">
                                Explore different fields, understand the skills they
                                require and discover potential education pathways.
                            </p>
                        </div>

                        <form
                            action="/career-guidance"
                            method="GET"
                            className="mt-8 flex flex-col gap-3 rounded-[28px] border border-[#e3e0d6] bg-[#fffefa] p-3 shadow-[0_10px_30px_rgba(32,59,55,0.05)] sm:flex-row"
                        >
                            <Search className="ml-2 hidden self-center text-[#8a897f] sm:block" size={22} />
                            <input
                                type="search"
                                name="q"
                                placeholder="Search careers, skills or industries..."
                                aria-label="Search careers"
                                className="min-w-0 flex-1 rounded-xl px-4 py-3 outline-none placeholder:text-[#8a897f]"
                            />
                            <button
                                type="submit"
                                className="rounded-full bg-[#171717] px-6 py-3 font-semibold text-white transition hover:bg-[#77776f]"
                            >
                                Find Careers
                            </button>
                        </form>

                        <div className="mt-10 flex flex-wrap gap-2">
                            {streams.map((stream, index) => (
                                <a
                                    key={stream}
                                    href={
                                        index === 0
                                            ? "#career-list"
                                            : `/career-guidance?stream=${encodeURIComponent(stream)}#career-list`
                                    }
                                    className={`rounded-full border px-4 py-2.5 text-sm font-medium transition ${index === 0
                                        ? "border-[#171717] bg-[#171717] text-white"
                                        : "border-[#e3e0d6] bg-white text-[#6b6d64] hover:border-[#77776f] hover:text-[#171717]"
                                        }`}
                                >
                                    {stream}
                                </a>
                            ))}
                        </div>

                        <div
                            id="career-list"
                            className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
                        >
                            {careers.map((career) => {
                                const Icon = career.icon;

                                return (
                                    <article
                                        key={career.title}
                                        className="group flex flex-col rounded-[28px] border border-[#e3e0d6] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#77776f] hover:shadow-[0_18px_50px_rgba(32,59,55,0.10)]"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className={`rounded-xl p-3 ${career.color}`}>
                                                <Icon size={25} />
                                            </div>
                                            <span className="rounded-full bg-[#f1f1ed] px-3 py-1.5 text-xs font-medium text-[#6b6d64]">
                                                {career.category}
                                            </span>
                                        </div>

                                        <h3 className="mt-5 text-xl font-bold">
                                            {career.title}
                                        </h3>
                                        <p className="mt-3 flex-1 text-sm leading-7 text-[#6b6d64]">
                                            {career.description}
                                        </p>

                                        <div className="mt-5 flex flex-wrap gap-2">
                                            {career.skills.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="rounded-full bg-[#fbfaf5] px-2.5 py-1.5 text-xs font-medium text-[#77776f]"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>

                                        <Link
                                            href={career.href}
                                            className="mt-6 inline-flex items-center gap-2 border-t border-[#e3e0d6] pt-5 text-sm font-semibold text-[#171717] transition group-hover:gap-3"
                                        >
                                            Explore career <ArrowRight size={17} />
                                        </Link>
                                    </article>
                                );
                            })}
                        </div>

                        <p className="mt-5 text-xs leading-5 text-[#8a897f]">
                            Career examples are for exploration. Suitability and
                            eligibility depend on individual interests, qualifications
                            and the requirements of each profession.
                        </p>
                    </div>
                </section>

                {/* ROADMAP */}
                <section className="bg-[#fffefa] py-20 sm:py-24">
                    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                        <div className="mx-auto max-w-3xl text-center">
                            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#77776f]">
                                Your roadmap
                            </p>
                            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                                From confusion to a clear direction
                            </h2>
                            <p className="mt-4 leading-7 text-[#6b6d64]">
                                Break a big career decision into four manageable steps.
                            </p>
                        </div>

                        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                            {roadmap.map((step) => {
                                const Icon = step.icon;

                                return (
                                    <article
                                        key={step.number}
                                        className="rounded-[28px] border border-[#e3e0d6] bg-white p-6"
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-bold text-[#77776f]">
                                                STEP {step.number}
                                            </span>
                                            <Icon size={23} className="text-[#77776f]" />
                                        </div>
                                        <h3 className="mt-6 text-lg font-bold">
                                            {step.title}
                                        </h3>
                                        <p className="mt-3 text-sm leading-7 text-[#6b6d64]">
                                            {step.description}
                                        </p>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* EDUCATION RESOURCES */}
                <section className="py-20 sm:py-24">
                    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                            <div>
                                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#77776f]">
                                    Make informed decisions
                                </p>
                                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                                    Resources for your next step
                                </h2>
                            </div>
                            <p className="max-w-lg leading-7 text-[#6b6d64]">
                                Connect your career goals with courses, colleges and
                                practical education planning.
                            </p>
                        </div>

                        <div className="mt-9 grid gap-5 md:grid-cols-3">
                            {resources.map((resource) => {
                                const Icon = resource.icon;

                                return (
                                    <Link
                                        key={resource.title}
                                        href={resource.href}
                                        className="group rounded-[28px] border border-[#e3e0d6] bg-[#fffefa] p-6 transition hover:border-[#77776f] hover:shadow-[0_18px_50px_rgba(32,59,55,0.10)]"
                                    >
                                        <Icon size={28} className="text-[#77776f]" />
                                        <h3 className="mt-5 text-lg font-bold">
                                            {resource.title}
                                        </h3>
                                        <p className="mt-2 text-sm leading-7 text-[#6b6d64]">
                                            {resource.description}
                                        </p>
                                        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#171717]">
                                            Explore now
                                            <ArrowRight
                                                size={16}
                                                className="transition group-hover:translate-x-1"
                                            />
                                        </span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* COUNSELLING CTA */}
                <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-10">
                    <div className="mx-auto flex max-w-[1500px] flex-col items-start justify-between gap-8 rounded-[28px] bg-[#171717] p-8 text-white sm:p-12 lg:flex-row lg:items-center">
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-2 text-sm font-semibold text-white/70">
                                <Users size={18} />
                                PERSONALIZED GUIDANCE
                            </div>
                            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                                Every student has a different path. Let&apos;s find yours.
                            </h2>
                            <p className="mt-4 leading-7 text-white/70">
                                Get help exploring education options, comparing pathways
                                and identifying the questions you should ask before
                                choosing your next step.
                            </p>
                        </div>

                        <Link
                            href="/contact"
                            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-4 font-semibold text-[#171717] transition hover:bg-[#f1f1ed]"
                        >
                            Talk to an Advisor <ArrowRight size={18} />
                        </Link>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </>
    );
}
