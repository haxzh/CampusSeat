
import Link from "next/link";
import {
    GraduationCap,
    BriefcaseBusiness,
    Clock,
    BookOpen,
    ArrowRight,
    CheckCircle2,
} from "lucide-react";

const programmes = [
    {
        title: "BBA",
        subtitle: "Bachelor of Business Administration",
        duration: "Usually 3–4 years",
        description:
            "Build a foundation in marketing, finance, management and business operations.",
    },
    {
        title: "MBA",
        subtitle: "Master of Business Administration",
        duration: "Usually 2 years",
        description:
            "Develop advanced knowledge of leadership, business strategy and decision-making.",
    },
    {
        title: "PGDM",
        subtitle: "Post Graduate Diploma in Management",
        duration: "Often 2 years",
        description:
            "Study practical business management through projects, case studies and industry learning.",
    },
    {
        title: "Executive MBA",
        subtitle: "Management programme for working professionals",
        duration: "Varies by institution",
        description:
            "Explore management education designed for professionals with relevant work experience.",
    },
];

const subjects = [
    "Marketing Management",
    "Financial Management",
    "Human Resource Management",
    "Business Communication",
    "Operations Management",
    "Business Analytics",
];

export default function ManagementCoursePage() {
    return (
        <main className="min-h-screen bg-[#f4f3ee] text-[#171717]">
            <section className="bg-[#171717] px-5 py-20 text-white">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-6 flex items-center gap-2 text-sm text-[#ededE7]">
                        <Link href="/">CampusSeat</Link>
                        <span>/</span>
                        <Link href="/courses">Courses</Link>
                        <span>/</span>
                        <span>Management</span>
                    </div>

                    <BriefcaseBusiness size={40} className="text-[#ededE7]" />
                    <h1 className="mt-5 text-4xl font-bold md:text-6xl">
                        Management Courses
                    </h1>
                    <p className="mt-5 max-w-2xl text-lg leading-8 text-[#ededE7]">
                        Discover business and management programmes that can help you
                        develop leadership, communication and strategic thinking skills.
                    </p>

                    <Link
                        href="/colleges/management"
                        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-[#171717]"
                    >
                        Explore Management Colleges <ArrowRight size={18} />
                    </Link>
                </div>
            </section>

            <section className="mx-auto grid max-w-7xl gap-5 px-5 py-10 sm:grid-cols-3">
                <div className="rounded-2xl border bg-white p-6">
                    <GraduationCap size={28} className="text-[#171717]" />
                    <h2 className="mt-4 font-bold">Degree Options</h2>
                    <p className="mt-2 text-sm leading-6 text-[#77776f]">
                        Undergraduate and postgraduate business programmes.
                    </p>
                </div>

                <div className="rounded-2xl border bg-white p-6">
                    <Clock size={28} className="text-[#171717]" />
                    <h2 className="mt-4 font-bold">Flexible Durations</h2>
                    <p className="mt-2 text-sm leading-6 text-[#77776f]">
                        Duration depends on programme format and institution.
                    </p>
                </div>

                <div className="rounded-2xl border bg-white p-6">
                    <BookOpen size={28} className="text-[#171717]" />
                    <h2 className="mt-4 font-bold">Business Skills</h2>
                    <p className="mt-2 text-sm leading-6 text-[#77776f]">
                        Explore finance, marketing, operations and leadership.
                    </p>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-5 py-12">
                <h2 className="text-3xl font-bold md:text-4xl">
                    Explore Programmes
                </h2>
                <p className="mt-3 text-[#77776f]">
                    Review programme details and check each institution&apos;s eligibility.
                </p>

                <div className="mt-8 grid gap-6 md:grid-cols-2">
                    {programmes.map((programme) => (
                        <article
                            key={programme.title}
                            className="rounded-2xl border border-[#deded8] bg-white p-7 transition hover:shadow-lg"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f7f7f4] text-[#171717]">
                                <GraduationCap size={26} />
                            </div>

                            <h3 className="mt-5 text-2xl font-bold">{programme.title}</h3>
                            <p className="mt-1 font-medium text-[#171717]">
                                {programme.subtitle}
                            </p>
                            <p className="mt-3 text-sm text-[#77776f]">
                                Duration: {programme.duration}
                            </p>
                            <p className="mt-4 leading-7 text-[#77776f]">
                                {programme.description}
                            </p>

                            <Link
                                href="/colleges/management"
                                className="mt-6 inline-flex items-center gap-2 font-bold text-[#171717] hover:underline"
                            >
                                Find Colleges <ArrowRight size={17} />
                            </Link>
                        </article>
                    ))}
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-5 pb-12">
                <div className="rounded-3xl bg-white p-7 ring-1 ring-slate-200 md:p-10">
                    <h2 className="text-3xl font-bold">Common Study Areas</h2>
                    <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {subjects.map((subject) => (
                            <div key={subject} className="flex items-center gap-3">
                                <CheckCircle2 className="shrink-0 text-neutral-600" size={20} />
                                <span>{subject}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-5 pb-16">
                <div className="rounded-3xl bg-[#171717] p-8 text-center text-white md:p-12">
                    <h2 className="text-3xl font-bold">
                        Find a college for your management journey
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#ededE7]">
                        Compare institutions and check official entrance exam,
                        eligibility and application requirements.
                    </p>
                    <Link
                        href="/colleges/management"
                        className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-[#171717]"
                    >
                        Browse Colleges <ArrowRight size={18} />
                    </Link>
                </div>
            </section>
        </main>
    );
}
