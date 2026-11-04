import Link from "next/link";
import { ArrowRight, BookOpenCheck, CalendarDays, FileText } from "lucide-react";

export default function ScholarshipsPage() {
    const steps = [
        {
            icon: BookOpenCheck,
            title: "Find a programme",
            text: "Confirm the course, institution and eligibility criteria on the provider's official website.",
        },
        {
            icon: FileText,
            title: "Prepare your documents",
            text: "Keep academic records, proof of identity, recommendation letters and financial documents ready.",
        },
        {
            icon: CalendarDays,
            title: "Track the deadline",
            text: "Scholarship dates and requirements can change. Always verify current information with the provider.",
        },
    ];

    return (
        <main className="min-h-screen bg-[#f7f5ed] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
            <div className="mx-auto max-w-[1200px]">
                <div className="max-w-3xl">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#187c70]">Scholarship guidance</p>
                    <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-[#171717] sm:text-6xl">
                        Make the funding plan part of your college plan.
                    </h1>
                    <p className="mt-6 max-w-2xl text-base leading-8 text-[#77776f]">
                        CampusSeat does not publish scholarship awards without verified programme details. Use the checklist below and confirm every opportunity with the awarding institution.
                    </p>
                </div>

                <div className="mt-12 grid gap-5 md:grid-cols-3">
                    {steps.map((step) => {
                        const Icon = step.icon;
                        return (
                            <article key={step.title} className="rounded-[24px] border border-[#d8e3db] bg-white p-7 shadow-sm">
                                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e1eee4] text-[#187c70]">
                                    <Icon size={20} />
                                </span>
                                <h2 className="mt-6 text-xl font-semibold text-[#171717]">{step.title}</h2>
                                <p className="mt-3 text-sm leading-7 text-[#77776f]">{step.text}</p>
                            </article>
                        );
                    })}
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                    <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#187c70] px-6 py-3.5 text-sm font-bold text-white">
                        Talk to a counsellor <ArrowRight size={16} />
                    </Link>
                    <Link href="/admissions" className="inline-flex items-center rounded-full border border-[#b9cbc1] px-6 py-3.5 text-sm font-bold text-[#171717]">
                        View admissions guidance
                    </Link>
                </div>
            </div>
        </main>
    );
}
