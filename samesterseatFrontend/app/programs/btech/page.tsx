
import Link from "next/link";
import {
    GraduationCap,
    Clock,
    BookOpen,
    BriefcaseBusiness,
    CheckCircle2,
    ArrowRight,
    Code2,
    Cpu,
    Database,
    BrainCircuit,
} from "lucide-react";

const specializations = [
    {
        title: "Computer Science Engineering",
        description: "Software development, algorithms and computer systems.",
        icon: Code2,
    },
    {
        title: "Artificial Intelligence",
        description: "Machine learning, intelligent systems and AI applications.",
        icon: BrainCircuit,
    },
    {
        title: "Electronics Engineering",
        description: "Electronic circuits, communication and embedded systems.",
        icon: Cpu,
    },
    {
        title: "Information Technology",
        description: "Networks, databases, web development and IT infrastructure.",
        icon: Database,
    },
];

const subjects = [
    "Engineering Mathematics",
    "Programming Fundamentals",
    "Data Structures and Algorithms",
    "Database Management Systems",
    "Computer Networks",
    "Operating Systems",
    "Software Engineering",
    "Project Work and Internships",
];

const careers = [
    "Software Developer",
    "Web Developer",
    "Data Analyst",
    "System Engineer",
    "Network Engineer",
    "AI / ML Engineer",
];

export default function BTechPage() {
    return (
        <main className="min-h-screen bg-[#f4f3ee] text-[#171717]">
            {/* Hero */}
            <section className="relative overflow-hidden bg-[#171717] px-5 py-16 text-white md:py-24">
                <div className="absolute -right-20 -top-16 h-80 w-80 rounded-full border border-white/10" />
                <div className="absolute right-10 top-20 h-56 w-56 rounded-full border border-white/10" />

                <div className="relative mx-auto max-w-7xl">
                    <div className="mb-6 flex items-center gap-2 text-sm text-[#ededE7]">
                        <GraduationCap size={22} />
                        <Link href="/" className="hover:text-white">
                            CampusSeat
                        </Link>
                        <span>/</span>
                        <Link href="/courses" className="hover:text-white">
                            Courses
                        </Link>
                        <span>/</span>
                        <span>B.Tech</span>
                    </div>

                    <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
                        Undergraduate Engineering Degree
                    </span>

                    <h1 className="mt-7 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
                        Bachelor of Technology
                        <span className="mt-2 block text-[#ededE7]">(B.Tech)</span>
                    </h1>

                    <p className="mt-6 max-w-2xl text-base leading-8 text-[#ededE7] md:text-lg">
                        Explore engineering specializations, understand eligibility
                        requirements and discover career opportunities in technology
                        and engineering.
                    </p>

                    <div className="mt-9 flex flex-wrap gap-4">
                        <Link
                            href="/colleges"
                            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-[#171717] transition hover:bg-[#f7f7f4]"
                        >
                            Explore Colleges <ArrowRight size={18} />
                        </Link>

                        <Link
                            href="/admissions"
                            className="rounded-xl border border-white/30 px-6 py-3.5 font-semibold transition hover:bg-white/10"
                        >
                            Admission Guide
                        </Link>
                    </div>
                </div>
            </section>

            {/* Overview */}
            <section className="mx-auto grid max-w-7xl gap-5 px-5 py-10 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-2xl border border-[#deded8] bg-white p-6">
                    <Clock size={28} className="text-[#171717]" />
                    <h2 className="mt-4 text-lg font-bold">Course Duration</h2>
                    <p className="mt-2 text-sm text-[#77776f]">
                        Typically 4 years, divided into 8 semesters.
                    </p>
                </div>

                <div className="rounded-2xl border border-[#deded8] bg-white p-6">
                    <BookOpen size={28} className="text-[#171717]" />
                    <h2 className="mt-4 text-lg font-bold">Eligibility</h2>
                    <p className="mt-2 text-sm leading-6 text-[#77776f]">
                        Usually Class 12 with Physics and Mathematics, along with
                        other subjects as specified by the institution.
                    </p>
                </div>

                <div className="rounded-2xl border border-[#deded8] bg-white p-6 sm:col-span-2 lg:col-span-1">
                    <BriefcaseBusiness size={28} className="text-[#171717]" />
                    <h2 className="mt-4 text-lg font-bold">Career Opportunities</h2>
                    <p className="mt-2 text-sm text-[#77776f]">
                        Opportunities across software, engineering, research and
                        technology industries.
                    </p>
                </div>
            </section>

            {/* Specializations */}
            <section className="mx-auto max-w-7xl px-5 py-12">
                <div className="mb-9">
                    <p className="text-sm font-bold uppercase tracking-widest text-[#171717]">
                        Choose your path
                    </p>
                    <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                        Popular B.Tech specializations
                    </h2>
                    <p className="mt-3 max-w-2xl leading-7 text-[#77776f]">
                        Explore different engineering fields and choose a specialization
                        based on your interests and career goals.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {specializations.map((item) => {
                        const Icon = item.icon;

                        return (
                            <article
                                key={item.title}
                                className="rounded-2xl border border-[#deded8] bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f7f7f4] text-[#171717]">
                                    <Icon size={25} />
                                </div>

                                <h3 className="mt-5 text-lg font-bold">{item.title}</h3>

                                <p className="mt-3 text-sm leading-6 text-[#77776f]">
                                    {item.description}
                                </p>

                                <Link
                                    href="/colleges"
                                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#171717] hover:underline"
                                >
                                    Find Colleges <ArrowRight size={16} />
                                </Link>
                            </article>
                        );
                    })}
                </div>
            </section>

            {/* Subjects */}
            <section className="mx-auto max-w-7xl px-5 py-12">
                <div className="grid gap-10 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:grid-cols-2 md:p-10">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-widest text-[#171717]">
                            What you will study
                        </p>

                        <h2 className="mt-3 text-3xl font-bold">
                            Core subjects
                        </h2>

                        <p className="mt-4 leading-7 text-[#77776f]">
                            Subjects depend on the university and specialization.
                            Common topics may include:
                        </p>

                        <div className="mt-7 space-y-4">
                            {subjects.map((subject) => (
                                <div key={subject} className="flex items-start gap-3">
                                    <CheckCircle2
                                        size={20}
                                        className="mt-0.5 shrink-0 text-neutral-600"
                                    />
                                    <span className="text-sm text-[#343434]">{subject}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-2xl bg-[#171717] p-7 text-white md:p-9">
                        <GraduationCap size={36} className="text-[#ededE7]" />

                        <h3 className="mt-5 text-2xl font-bold">
                            Check admission requirements
                        </h3>

                        <p className="mt-4 leading-7 text-[#ededE7]">
                            Eligibility, entrance examinations, fees and selection
                            criteria vary by college. Check the official institution
                            website before applying.
                        </p>

                        <Link
                            href="/admissions"
                            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-[#171717] transition hover:bg-[#f7f7f4]"
                        >
                            Admission Information <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Careers */}
            <section className="mx-auto max-w-7xl px-5 py-12">
                <div className="mb-8">
                    <p className="text-sm font-bold uppercase tracking-widest text-[#171717]">
                        After graduation
                    </p>
                    <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                        Career opportunities
                    </h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {careers.map((career) => (
                        <div
                            key={career}
                            className="flex items-center gap-3 rounded-xl border border-[#deded8] bg-white p-5"
                        >
                            <CheckCircle2 size={21} className="text-[#171717]" />
                            <span className="font-semibold">{career}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="mx-auto max-w-7xl px-5 pb-16 pt-4">
                <div className="rounded-3xl bg-[#171717] px-6 py-10 text-center text-white md:px-12 md:py-14">
                    <h2 className="text-3xl font-bold md:text-4xl">
                        Find the right college for your future
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#ededE7]">
                        Compare your options and review each college&apos;s official
                        eligibility, fees and admission details.
                    </p>

                    <Link
                        href="/colleges"
                        className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-[#171717] transition hover:bg-[#f7f7f4]"
                    >
                        Explore Colleges <ArrowRight size={18} />
                    </Link>
                </div>
            </section>
        </main>
    );
}
