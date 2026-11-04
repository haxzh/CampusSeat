import Link from "next/link";
import {
    GraduationCap,
    Clock,
    BookOpen,
    Code2,
    ArrowRight,
    CheckCircle2,
} from "lucide-react";

const subjects = [
    "Programming Fundamentals",
    "C and C++ Programming",
    "Python or Java Programming",
    "Database Management Systems",
    "Web Development",
    "Computer Networks",
    "Software Engineering",
    "Data Structures",
];

const careers = [
    "Software Developer",
    "Web Developer",
    "Application Developer",
    "Database Administrator",
    "IT Support Specialist",
    "Junior Programmer",
];

export default function ComputerApplicationsPage() {
    return (
        <main className="min-h-screen bg-[#f4f3ee] text-[#171717]">
            <section className="bg-[#171717] px-5 py-20 text-white">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-6 flex items-center gap-2 text-sm text-[#ededE7]">
                        <Link href="/">CampusSeat</Link>
                        <span>/</span>
                        <Link href="/courses">Courses</Link>
                        <span>/</span>
                        <span>Computer Applications</span>
                    </div>

                    <Code2 size={40} className="text-[#ededE7]" />
                    <h1 className="mt-5 text-4xl font-bold md:text-6xl">
                        Computer Applications
                    </h1>
                    <p className="mt-5 max-w-2xl text-lg leading-8 text-[#ededE7]">
                        Explore computer application programmes and build a foundation
                        in programming, databases, software and web technologies.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <Link
                            href="/colleges"
                            className="rounded-xl bg-white px-6 py-3.5 font-bold text-[#171717]"
                        >
                            Find Colleges <ArrowRight className="ml-2 inline" size={18} />
                        </Link>
                        <Link
                            href="/admissions"
                            className="rounded-xl border border-white/30 px-6 py-3.5 font-semibold"
                        >
                            Admission Guide
                        </Link>
                    </div>
                </div>
            </section>

            <section className="mx-auto grid max-w-7xl gap-5 px-5 py-10 md:grid-cols-3">
                <div className="rounded-2xl border bg-white p-6">
                    <GraduationCap size={28} className="text-[#171717]" />
                    <h2 className="mt-4 font-bold">Degree Options</h2>
                    <p className="mt-2 text-sm leading-6 text-[#77776f]">
                        BCA, MCA and related computer application programmes.
                    </p>
                </div>

                <div className="rounded-2xl border bg-white p-6">
                    <Clock size={28} className="text-[#171717]" />
                    <h2 className="mt-4 font-bold">Course Duration</h2>
                    <p className="mt-2 text-sm leading-6 text-[#77776f]">
                        BCA is commonly 3 or 4 years depending on the university and
                        programme structure. MCA duration also varies.
                    </p>
                </div>

                <div className="rounded-2xl border bg-white p-6">
                    <BookOpen size={28} className="text-[#171717]" />
                    <h2 className="mt-4 font-bold">Practical Learning</h2>
                    <p className="mt-2 text-sm leading-6 text-[#77776f]">
                        Learn coding, databases, application development and software
                        project skills.
                    </p>
                </div>
            </section>

            <section className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-2">
                <div className="rounded-2xl border bg-white p-7 md:p-9">
                    <h2 className="text-2xl font-bold">What You Can Study</h2>
                    <p className="mt-3 text-[#77776f]">
                        Typical subjects depend on your selected programme and university.
                    </p>

                    <div className="mt-7 space-y-4">
                        {subjects.map((subject) => (
                            <div key={subject} className="flex gap-3">
                                <CheckCircle2 className="shrink-0 text-neutral-600" size={20} />
                                <span>{subject}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="rounded-2xl bg-[#171717] p-7 text-white md:p-9">
                    <h2 className="text-2xl font-bold">Career Opportunities</h2>
                    <p className="mt-3 leading-7 text-[#ededE7]">
                        Computer application graduates can pursue software and IT roles,
                        depending on their skills, experience and qualifications.
                    </p>

                    <div className="mt-7 space-y-4">
                        {careers.map((career) => (
                            <div key={career} className="flex items-center gap-3">
                                <CheckCircle2 className="text-[#ededE7]" size={20} />
                                <span>{career}</span>
                            </div>
                        ))}
                    </div>

                    <Link
                        href="/colleges"
                        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-[#171717]"
                    >
                        Find Colleges <ArrowRight size={18} />
                    </Link>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-5 pb-16">
                <div className="rounded-3xl bg-[#171717] p-8 text-center text-white md:p-12">
                    <h2 className="text-3xl font-bold">Start planning your IT career</h2>
                    <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#ededE7]">
                        Compare institutions and verify programme eligibility, fees
                        and admission requirements before applying.
                    </p>
                    <Link
                        href="/admissions"
                        className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-[#171717]"
                    >
                        Admission Information <ArrowRight size={18} />
                    </Link>
                </div>
            </section>
        </main>
    );
}
