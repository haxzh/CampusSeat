
"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Search, ArrowRight, GraduationCap } from "lucide-react";

const locations = [
    { city: "Delhi", state: "Delhi", count: "120+", slug: "delhi" },
    { city: "Noida", state: "Uttar Pradesh", count: "80+", slug: "noida" },
    { city: "Gurugram", state: "Haryana", count: "60+", slug: "gurugram" },
    { city: "Mumbai", state: "Maharashtra", count: "100+", slug: "mumbai" },
    { city: "Bengaluru", state: "Karnataka", count: "110+", slug: "bengaluru" },
    { city: "Pune", state: "Maharashtra", count: "90+", slug: "pune" },
    { city: "Jaipur", state: "Rajasthan", count: "70+", slug: "jaipur" },
    { city: "Chennai", state: "Tamil Nadu", count: "75+", slug: "chennai" },
];

export default function CollegeLocationPage() {
    const [search, setSearch] = useState("");

    const filtered = locations.filter((item) =>
        `${item.city} ${item.state}`.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <main className="min-h-screen bg-[#f4f3ee] text-[#171717]">
            <section className="bg-[#171717] px-5 py-20 text-white">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-6 flex items-center gap-2 text-sm text-[#ededE7]">
                        <Link href="/">CampusSeat</Link>
                        <span>/</span>
                        <Link href="/colleges">Colleges</Link>
                        <span>/</span>
                        <span>Locations</span>
                    </div>

                    <MapPin size={38} className="text-[#ededE7]" />
                    <h1 className="mt-5 text-4xl font-bold md:text-6xl">
                        Find Colleges by Location
                    </h1>
                    <p className="mt-5 max-w-2xl leading-8 text-[#ededE7]">
                        Discover colleges across India and explore study opportunities
                        in cities that suit your educational goals.
                    </p>

                    <div className="relative mt-8 max-w-xl">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search city or state..."
                            className="w-full rounded-xl bg-white py-4 pl-12 pr-4 text-[#171717] outline-none focus:ring-4 focus:ring-blue-300"
                        />
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-5 py-14">
                <h2 className="mb-8 text-3xl font-bold">Popular Education Cities</h2>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {filtered.map((item) => (
                        <article
                            key={item.slug}
                            className="rounded-2xl border border-[#deded8] bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f7f7f4] text-[#171717]">
                                <GraduationCap size={26} />
                            </div>

                            <h3 className="mt-5 text-xl font-bold">{item.city}</h3>
                            <p className="mt-2 text-sm text-[#77776f]">{item.state}</p>
                            <p className="mt-4 text-sm font-semibold text-[#171717]">
                                {item.count} colleges
                            </p>

                            <Link
                                href="/colleges"
                                className="mt-5 inline-flex items-center gap-2 font-semibold text-[#171717] hover:underline"
                            >
                                Explore Colleges <ArrowRight size={16} />
                            </Link>
                        </article>
                    ))}
                </div>

                {filtered.length === 0 && (
                    <p className="py-12 text-center text-[#77776f]">
                        No cities found. Try another search.
                    </p>
                )}

                <div className="mt-12 rounded-2xl bg-[#171717] p-8 text-white md:p-10">
                    <h2 className="text-2xl font-bold">Explore courses and colleges</h2>
                    <p className="mt-3 text-[#ededE7]">
                        Browse available programmes and review admission requirements.
                    </p>
                    <Link
                        href="/courses"
                        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-[#171717]"
                    >
                        Browse Courses <ArrowRight size={18} />
                    </Link>
                </div>
            </section>
        </main>
    );
}
