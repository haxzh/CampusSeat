
"use client";
import Navbar from "@/src/components/Navbar";
import { useState } from "react";
import {
    ArrowLeftRight,
    GraduationCap,
    IndianRupee,
    MapPin,
    Star,
    BriefcaseBusiness,
    CheckCircle2,
    X,
} from "lucide-react";

type College = {
    id: number;
    name: string;
    location: string;
    type: string;
    fees: number;
    package: number;
    rating: number;
    courses: string[];
    highlights: string[];
};

const colleges: College[] = [
    {
        id: 1,
        name: "IIT Delhi",
        location: "New Delhi, Delhi",
        type: "Government",
        fees: 250000,
        package: 2500000,
        rating: 4.8,
        courses: ["B.Tech", "M.Tech", "MBA"],
        highlights: ["Research facilities", "Engineering programs"],
    },
    {
        id: 2,
        name: "BITS Pilani",
        location: "Pilani, Rajasthan",
        type: "Private",
        fees: 550000,
        package: 1800000,
        rating: 4.6,
        courses: ["B.E.", "M.E.", "MBA"],
        highlights: ["Industry connections", "Flexible academics"],
    },
    {
        id: 3,
        name: "Delhi University",
        location: "New Delhi, Delhi",
        type: "Government",
        fees: 50000,
        package: 900000,
        rating: 4.5,
        courses: ["B.Com", "B.A.", "B.Sc.", "BCA"],
        highlights: ["Affordable education", "Wide course selection"],
    },
    {
        id: 4,
        name: "Amity University",
        location: "Noida, Uttar Pradesh",
        type: "Private",
        fees: 350000,
        package: 800000,
        rating: 4.2,
        courses: ["B.Tech", "BCA", "MBA"],
        highlights: ["Modern campus", "Multiple study programs"],
    },
];

const formatMoney = (amount: number) =>
    `₹${amount.toLocaleString("en-IN")}`;

export default function CompareCollegesPage() {
    const [selectedIds, setSelectedIds] = useState<number[]>([1, 2]);

    const selectedColleges = selectedIds
        .map((id) => colleges.find((college) => college.id === id))
        .filter((college): college is College => Boolean(college));

    const toggleCollege = (id: number) => {
        setSelectedIds((current) => {
            if (current.includes(id)) {
                return current.filter((item) => item !== id);
            }

            if (current.length >= 3) return current;

            return [...current, id];
        });
    };

    const bestFees =
        selectedColleges.length > 0
            ? Math.min(...selectedColleges.map((c) => c.fees))
            : 0;

    const bestPackage =
        selectedColleges.length > 0
            ? Math.max(...selectedColleges.map((c) => c.package))
            : 0;

    const bestRating =
        selectedColleges.length > 0
            ? Math.max(...selectedColleges.map((c) => c.rating))
            : 0;

    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-[#f4f3ee] text-[#171717]">
                {/* Hero */}
                <section className="bg-[#171717] px-5 py-16 text-white md:py-20">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-5 flex items-center gap-2 text-sm text-[#ededE7]">
                            <GraduationCap size={20} />
                            CampusSeat / Compare Colleges
                        </div>

                        <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
                            Compare colleges.
                            <span className="mt-2 block text-[#ededE7]">
                                Choose your future.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-2xl leading-7 text-[#ededE7] md:text-lg">
                            Compare college fees, placements, courses and ratings
                            in one place to make a confident decision about your future.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3 text-sm">
                            {["Compare up to 3 colleges", "Fees & placements", "Course comparison"].map(
                                (item) => (
                                    <span
                                        key={item}
                                        className="rounded-full border border-white/20 bg-white/10 px-4 py-2"
                                    >
                                        {item}
                                    </span>
                                )
                            )}
                        </div>
                    </div>
                </section>

                {/* College selection */}
                <section className="mx-auto max-w-7xl px-5 py-12 md:py-16">
                    <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                        <div>
                            <h2 className="text-2xl font-bold md:text-3xl">
                                Select colleges
                            </h2>
                            <p className="mt-2 text-sm text-[#77776f]">
                                Select two or three colleges to compare.
                            </p>
                        </div>

                        <span className="w-fit rounded-full bg-[#f7f7f4] px-4 py-2 text-sm font-semibold text-[#171717]">
                            {selectedIds.length}/3 selected
                        </span>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {colleges.map((college) => {
                            const selected = selectedIds.includes(college.id);

                            return (
                                <button
                                    key={college.id}
                                    type="button"
                                    onClick={() => toggleCollege(college.id)}
                                    disabled={!selected && selectedIds.length >= 3}
                                    className={`rounded-2xl border bg-white p-5 text-left transition duration-200 hover:-translate-y-1 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50 ${selected
                                        ? "border-blue-800 ring-2 ring-blue-100"
                                        : "border-[#deded8] hover:border-blue-300"
                                        }`}
                                >
                                    <div className="mb-5 flex items-center justify-between">
                                        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f7f7f4] text-[#171717]">
                                            <GraduationCap size={26} />
                                        </span>

                                        <span
                                            className={`flex h-6 w-6 items-center justify-center rounded-full border ${selected
                                                ? "border-blue-900 bg-[#171717] text-white"
                                                : "border-slate-300 text-transparent"
                                                }`}
                                        >
                                            <CheckCircle2 size={16} />
                                        </span>
                                    </div>

                                    <h3 className="font-bold">{college.name}</h3>

                                    <p className="mt-2 flex items-center gap-1 text-sm text-[#77776f]">
                                        <MapPin size={15} />
                                        {college.location}
                                    </p>

                                    <span className="mt-4 inline-block rounded-full bg-[#f7f7f4] px-3 py-1 text-xs font-medium text-[#343434]">
                                        {college.type}
                                    </span>

                                    <p className="mt-4 text-sm text-[#77776f]">
                                        Annual fees
                                    </p>
                                    <p className="mt-1 text-lg font-bold text-[#171717]">
                                        {formatMoney(college.fees)}
                                    </p>
                                </button>
                            );
                        })}
                    </div>

                    {/* Comparison table */}
                    <div className="mt-12 overflow-hidden rounded-2xl border border-[#deded8] bg-white shadow-sm">
                        <div className="flex flex-col justify-between gap-4 border-b border-[#deded8] p-5 sm:flex-row sm:items-center">
                            <div>
                                <h2 className="text-xl font-bold md:text-2xl">
                                    College comparison
                                </h2>
                                <p className="mt-2 text-sm text-[#77776f]">
                                    Compare your selected colleges side by side.
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={() => setSelectedIds([])}
                                className="w-fit rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold transition hover:border-blue-900 hover:text-[#171717]"
                            >
                                Clear selection
                            </button>
                        </div>

                        {selectedColleges.length === 0 ? (
                            <div className="px-5 py-14 text-center">
                                <GraduationCap
                                    size={42}
                                    className="mx-auto mb-4 text-[#171717]"
                                />
                                <h3 className="text-lg font-bold">
                                    Select colleges to compare
                                </h3>
                                <p className="mt-2 text-sm text-[#77776f]">
                                    Choose colleges from the cards above to see their details.
                                </p>
                            </div>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="w-full min-w-[650px] border-collapse text-left">
                                    <thead>
                                        <tr className="bg-[#f4f3ee]">
                                            <th className="w-48 border-b border-[#deded8] p-4 text-sm text-[#77776f]">
                                                Comparison
                                            </th>

                                            {selectedColleges.map((college) => (
                                                <th
                                                    key={college.id}
                                                    className="min-w-52 border-b border-l border-[#deded8] p-4 align-top"
                                                >
                                                    <div className="flex items-start justify-between gap-3">
                                                        <div>
                                                            <h3 className="font-bold">{college.name}</h3>
                                                            <p className="mt-2 text-xs font-normal text-[#77776f]">
                                                                {college.location}
                                                            </p>
                                                        </div>

                                                        <button
                                                            type="button"
                                                            aria-label={`Remove ${college.name}`}
                                                            onClick={() => toggleCollege(college.id)}
                                                            className="rounded-md p-1 text-slate-400 hover:bg-red-50 hover:text-red-600"
                                                        >
                                                            <X size={17} />
                                                        </button>
                                                    </div>
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td className="border-b border-slate-100 p-4 text-sm text-[#77776f]">
                                                College type
                                            </td>
                                            {selectedColleges.map((college) => (
                                                <td key={college.id} className="border-b border-l border-slate-100 p-4 text-sm">
                                                    {college.type}
                                                </td>
                                            ))}
                                        </tr>

                                        <tr>
                                            <td className="border-b border-slate-100 p-4 text-sm text-[#77776f]">
                                                <span className="flex items-center gap-2">
                                                    <IndianRupee size={16} />
                                                    Annual fees
                                                </span>
                                            </td>
                                            {selectedColleges.map((college) => (
                                                <td key={college.id} className="border-b border-l border-slate-100 p-4">
                                                    <p className="font-bold">{formatMoney(college.fees)}</p>
                                                    {college.fees === bestFees && (
                                                        <span className="mt-2 inline-block rounded-full bg-neutral-100 px-2 py-1 text-xs font-semibold text-neutral-800">
                                                            Lowest fees
                                                        </span>
                                                    )}
                                                </td>
                                            ))}
                                        </tr>

                                        <tr>
                                            <td className="border-b border-slate-100 p-4 text-sm text-[#77776f]">
                                                <span className="flex items-center gap-2">
                                                    <BriefcaseBusiness size={16} />
                                                    Average package
                                                </span>
                                            </td>
                                            {selectedColleges.map((college) => (
                                                <td key={college.id} className="border-b border-l border-slate-100 p-4">
                                                    <p className="font-bold">{formatMoney(college.package)}</p>
                                                    {college.package === bestPackage && (
                                                        <span className="mt-2 inline-block rounded-full bg-neutral-100 px-2 py-1 text-xs font-semibold text-neutral-800">
                                                            Highest figure
                                                        </span>
                                                    )}
                                                </td>
                                            ))}
                                        </tr>

                                        <tr>
                                            <td className="border-b border-slate-100 p-4 text-sm text-[#77776f]">
                                                <span className="flex items-center gap-2">
                                                    <Star size={16} />
                                                    Rating
                                                </span>
                                            </td>
                                            {selectedColleges.map((college) => (
                                                <td key={college.id} className="border-b border-l border-slate-100 p-4">
                                                    <span className="flex items-center gap-2 font-bold">
                                                        <Star size={17} className="fill-amber-400 text-amber-400" />
                                                        {college.rating.toFixed(1)}/5
                                                    </span>
                                                    {college.rating === bestRating && (
                                                        <span className="mt-2 inline-block rounded-full bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-800">
                                                            Highest rating
                                                        </span>
                                                    )}
                                                </td>
                                            ))}
                                        </tr>

                                        <tr>
                                            <td className="border-b border-slate-100 p-4 text-sm text-[#77776f]">
                                                Available courses
                                            </td>
                                            {selectedColleges.map((college) => (
                                                <td key={college.id} className="border-b border-l border-slate-100 p-4">
                                                    <div className="flex flex-wrap gap-2">
                                                        {college.courses.map((course) => (
                                                            <span
                                                                key={course}
                                                                className="rounded-md bg-[#f7f7f4] px-2 py-1 text-xs font-medium text-[#171717]"
                                                            >
                                                                {course}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </td>
                                            ))}
                                        </tr>

                                        <tr>
                                            <td className="p-4 text-sm text-[#77776f]">
                                                Highlights
                                            </td>
                                            {selectedColleges.map((college) => (
                                                <td key={college.id} className="border-l border-slate-100 p-4">
                                                    <ul className="space-y-3">
                                                        {college.highlights.map((highlight) => (
                                                            <li key={highlight} className="flex gap-2 text-sm text-[#343434]">
                                                                <CheckCircle2
                                                                    size={16}
                                                                    className="mt-0.5 shrink-0 text-neutral-600"
                                                                />
                                                                {highlight}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </td>
                                            ))}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>

                    <p className="mt-5 text-xs leading-5 text-[#77776f]">
                        Note: The college fees, packages, and ratings are illustrative
                        sample data. Verify official college sources before publishing.
                    </p>

                    <div className="mt-8 flex items-start gap-3 rounded-2xl border border-[#deded8] bg-[#f7f7f4] p-5">
                        <ArrowLeftRight
                            size={22}
                            className="mt-1 shrink-0 text-[#171717]"
                        />
                        <div>
                            <h3 className="font-bold text-[#171717]">
                                Choose the right college for you
                            </h3>
                            <p className="mt-1 text-sm leading-6 text-[#171717]">
                                Consider eligibility, total course cost, curriculum,
                                placement outcomes and location before making your decision.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
