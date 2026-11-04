"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Navbar from "../../src/components/Navbar";
import {
    ArrowRight,
    BadgeCheck,
    Building2,
    GraduationCap,
    MessageSquare,
    Search,
    Star,
    TrendingUp,
    Users,
    ThumbsUp,
    SlidersHorizontal,
    MapPin,
} from "lucide-react";

type Review = {
    id: number;
    name: string;
    course: string;
    college: string;
    location: string;
    rating: number;
    date: string;
    title: string;
    review: string;
    placement: string;
    helpful: number;
    tags: string[];
};

const reviews: Review[] = [
    {
        id: 1,
        name: "Aarav Sharma",
        course: "B.Tech Computer Science",
        college: "Sample Institute of Technology",
        location: "Noida, Uttar Pradesh",
        rating: 5,
        date: "October 2026",
        title: "Good learning environment",
        review:
            "The computer science curriculum provides a good foundation. Practical assignments and group projects help students understand concepts. Students should also work on internships and personal projects.",
        placement: "Placement experience: Positive",
        helpful: 24,
        tags: ["Academics", "Infrastructure"],
    },
    {
        id: 2,
        name: "Priya Verma",
        course: "BBA",
        college: "Example School of Management",
        location: "Delhi, India",
        rating: 4,
        date: "September 2026",
        title: "Helpful faculty and activities",
        review:
            "The course covers management fundamentals, presentations and teamwork. Campus activities provide opportunities to develop communication skills. Research placement data independently before admission.",
        placement: "Placement experience: Good",
        helpful: 18,
        tags: ["Faculty", "Campus Life"],
    },
    {
        id: 3,
        name: "Rohan Gupta",
        course: "BCA",
        college: "Demo College of Computer Applications",
        location: "Greater Noida, Uttar Pradesh",
        rating: 4,
        date: "August 2026",
        title: "Useful for building technical basics",
        review:
            "The program introduces programming and database concepts. I recommend practising coding regularly, building projects and preparing for interviews alongside college coursework.",
        placement: "Placement experience: Average",
        helpful: 15,
        tags: ["Curriculum", "Placements"],
    },
    {
        id: 4,
        name: "Ananya Singh",
        course: "MBA",
        college: "Illustrative Business University",
        location: "Gurugram, Haryana",
        rating: 5,
        date: "July 2026",
        title: "Good opportunities to learn teamwork",
        review:
            "Case studies, presentations and collaborative activities can help develop business skills. Check the latest official placement report and internship opportunities for your chosen specialization.",
        placement: "Placement experience: Positive",
        helpful: 21,
        tags: ["Faculty", "Career Support"],
    },
    {
        id: 5,
        name: "Kabir Mehta",
        course: "B.Tech Information Technology",
        college: "Sample Institute of Technology",
        location: "Noida, Uttar Pradesh",
        rating: 3,
        date: "June 2026",
        title: "Self-learning is important",
        review:
            "The college experience depends on your goals and involvement. Students interested in software roles should strengthen programming fundamentals and look for project-based learning opportunities.",
        placement: "Placement experience: Mixed",
        helpful: 9,
        tags: ["Placements", "Academics"],
    },
    {
        id: 6,
        name: "Meera Joshi",
        course: "B.Sc. Data Science",
        college: "Example Science College",
        location: "Delhi, India",
        rating: 4,
        date: "May 2026",
        title: "Explore projects beyond the syllabus",
        review:
            "Statistics and programming are important parts of the learning journey. Building a portfolio and practising data analysis can help students demonstrate their skills to employers.",
        placement: "Placement experience: Good",
        helpful: 12,
        tags: ["Curriculum", "Career Support"],
    },
];

const categories = [
    "All Reviews",
    "Academics",
    "Faculty",
    "Placements",
    "Infrastructure",
    "Campus Life",
];

function RatingStars({ rating }: { rating: number }) {
    return (
        <div
            className="flex items-center gap-1"
            aria-label={`${rating} out of 5 stars`}
        >
            {[1, 2, 3, 4, 5].map((star) => (
                <Star
                    key={star}
                    size={16}
                    className={
                        star <= rating
                            ? "fill-amber-400 text-amber-400"
                            : "text-slate-300"
                    }
                />
            ))}
        </div>
    );
}

export default function ReviewsPage() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All Reviews");
    const [minimumRating, setMinimumRating] = useState("0");
    const [sort, setSort] = useState("helpful");
    const [helpfulReviews, setHelpfulReviews] = useState<number[]>([]);

    const filteredReviews = useMemo(() => {
        const query = search.toLowerCase().trim();

        return reviews
            .filter((review) => {
                const matchesSearch =
                    !query ||
                    [
                        review.college,
                        review.course,
                        review.location,
                        review.name,
                        review.title,
                    ].some((value) => value.toLowerCase().includes(query));

                const matchesCategory =
                    category === "All Reviews" || review.tags.includes(category);

                const matchesRating = review.rating >= Number(minimumRating);

                return matchesSearch && matchesCategory && matchesRating;
            })
            .sort((a, b) => {
                if (sort === "rating") return b.rating - a.rating;
                if (sort === "newest") {
                    return b.id - a.id;
                }
                return (
                    b.helpful +
                    (helpfulReviews.includes(b.id) ? 1 : 0) -
                    (a.helpful + (helpfulReviews.includes(a.id) ? 1 : 0))
                );
            });
    }, [search, category, minimumRating, sort, helpfulReviews]);

    const handleHelpful = (id: number) => {
        setHelpfulReviews((current) =>
            current.includes(id)
                ? current.filter((reviewId) => reviewId !== id)
                : [...current, id]
        );
    };

    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-[#f4f3ee] text-[#171717]">
                {/* Hero */}
                <section className="relative overflow-hidden bg-[#171717] text-white">
                    <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-[#f7f7f4]0/20 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />

                    <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:px-10">
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-[#ededE7]">
                                <MessageSquare size={16} />
                                STUDENT REVIEWS & PLACEMENTS
                            </div>

                            <h1 className="mt-7 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                                Make your college decision with
                                <span className="mt-2 block text-[#ededE7]">
                                    more confidence.
                                </span>
                            </h1>

                            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                                Explore student experiences, compare college feedback and
                                research placement information before choosing your next step.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <a
                                    href="#student-reviews"
                                    className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-[#0B1D42] transition hover:bg-[#f7f7f4]"
                                >
                                    Read Reviews <ArrowRight size={18} />
                                </a>

                                <Link
                                    href="/colleges"
                                    className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
                                >
                                    Explore Colleges
                                </Link>
                            </div>
                        </div>

                        <div className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-sm sm:p-8">
                            <div className="flex items-center gap-4">
                                <div className="rounded-2xl bg-black/10 p-4 text-[#ededE7]">
                                    <GraduationCap size={32} />
                                </div>
                                <div>
                                    <p className="text-sm text-[#ededE7]">
                                        CHOOSE WITH CARE
                                    </p>
                                    <h2 className="mt-1 text-2xl font-bold">
                                        Look beyond ratings
                                    </h2>
                                </div>
                            </div>

                            <div className="mt-7 space-y-4">
                                {[
                                    {
                                        icon: Building2,
                                        title: "Academic experience",
                                        text: "Review courses, faculty and infrastructure.",
                                    },
                                    {
                                        icon: TrendingUp,
                                        title: "Placement information",
                                        text: "Check official reports, packages and eligibility.",
                                    },
                                    {
                                        icon: Users,
                                        title: "Student perspectives",
                                        text: "Compare different experiences and opinions.",
                                    },
                                ].map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <div
                                            key={item.title}
                                            className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4"
                                        >
                                            <Icon
                                                size={22}
                                                className="mt-1 shrink-0 text-[#ededE7]"
                                            />
                                            <div>
                                                <h3 className="font-semibold">{item.title}</h3>
                                                <p className="mt-1 text-sm leading-6 text-slate-300">
                                                    {item.text}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <p className="mt-5 text-xs leading-5 text-slate-400">
                                Ratings and reviews are only one part of your decision.
                                Verify important claims with official college sources.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Summary cards */}
                <section className="mx-auto max-w-7xl px-5 pt-10 sm:px-8 lg:px-10">
                    <div className="grid gap-4 sm:grid-cols-3">
                        {[
                            {
                                icon: MessageSquare,
                                title: "Student experiences",
                                text: "Read feedback on academics and campus life.",
                            },
                            {
                                icon: Star,
                                title: "Rating insights",
                                text: "Compare opinions and review details.",
                            },
                            {
                                icon: TrendingUp,
                                title: "Placement research",
                                text: "Know what to verify before admission.",
                            },
                        ].map((item) => {
                            const Icon = item.icon;

                            return (
                                <article
                                    key={item.title}
                                    className="rounded-2xl border border-[#deded8] bg-white p-5"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="rounded-xl bg-[#f7f7f4] p-3 text-[#171717]">
                                            <Icon size={22} />
                                        </div>
                                        <h2 className="font-bold">{item.title}</h2>
                                    </div>
                                    <p className="mt-3 text-sm leading-6 text-[#77776f]">
                                        {item.text}
                                    </p>
                                </article>
                            );
                        })}
                    </div>
                </section>

                {/* Reviews */}
                <section
                    id="student-reviews"
                    className="scroll-mt-28 py-16 sm:py-20"
                >
                    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
                            <div>
                                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#171717]">
                                    Student voices
                                </p>
                                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                                    College reviews & experiences
                                </h2>
                                <p className="mt-4 max-w-2xl leading-7 text-[#77776f]">
                                    Search by college, course or city. Filter reviews by topic
                                    and rating to explore the feedback most relevant to you.
                                </p>
                            </div>

                            <div className="text-sm text-[#77776f]">
                                Showing{" "}
                                <span className="font-bold text-[#171717]">
                                    {filteredReviews.length}
                                </span>{" "}
                                of {reviews.length} sample reviews
                            </div>
                        </div>

                        {/* Search and filters */}
                        <div className="mt-8 rounded-2xl border border-[#deded8] bg-white p-4 shadow-sm sm:p-5">
                            <div className="flex flex-col gap-3 lg:flex-row">
                                <div className="relative flex-1">
                                    <Search
                                        size={20}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                                    />
                                    <input
                                        value={search}
                                        onChange={(event) => setSearch(event.target.value)}
                                        placeholder="Search college, course or city..."
                                        aria-label="Search college reviews"
                                        className="w-full rounded-xl border border-[#deded8] py-3.5 pl-12 pr-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-black/5"
                                    />
                                </div>

                                <div className="flex items-center gap-2">
                                    <SlidersHorizontal
                                        size={18}
                                        className="shrink-0 text-[#77776f]"
                                    />
                                    <select
                                        value={minimumRating}
                                        onChange={(event) => setMinimumRating(event.target.value)}
                                        aria-label="Minimum rating"
                                        className="w-full rounded-xl border border-[#deded8] bg-white px-3 py-3.5 text-sm outline-none focus:border-blue-500 sm:w-auto"
                                    >
                                        <option value="0">All ratings</option>
                                        <option value="3">3+ stars</option>
                                        <option value="4">4+ stars</option>
                                        <option value="5">5 stars</option>
                                    </select>

                                    <select
                                        value={sort}
                                        onChange={(event) => setSort(event.target.value)}
                                        aria-label="Sort reviews"
                                        className="w-full rounded-xl border border-[#deded8] bg-white px-3 py-3.5 text-sm outline-none focus:border-blue-500 sm:w-auto"
                                    >
                                        <option value="helpful">Most helpful</option>
                                        <option value="rating">Highest rated</option>
                                        <option value="newest">Latest sample</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {categories.map((item) => (
                                    <button
                                        key={item}
                                        type="button"
                                        onClick={() => setCategory(item)}
                                        className={`rounded-full border px-4 py-2 text-sm font-medium transition ${category === item
                                            ? "border-blue-900 bg-[#171717] text-white"
                                            : "border-[#deded8] bg-white text-[#77776f] hover:border-blue-300 hover:text-[#171717]"
                                            }`}
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8 grid items-start gap-6 lg:grid-cols-[1fr_300px]">
                            <div className="space-y-5">
                                {filteredReviews.map((review) => (
                                    <article
                                        key={review.id}
                                        className="rounded-2xl border border-[#deded8] bg-white p-5 transition hover:border-blue-200 hover:shadow-lg sm:p-7"
                                    >
                                        <div className="flex flex-col justify-between gap-4 sm:flex-row">
                                            <div className="flex gap-4">
                                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f7f7f4] font-bold text-[#171717]">
                                                    {review.name
                                                        .split(" ")
                                                        .map((part) => part[0])
                                                        .join("")
                                                        .slice(0, 2)}
                                                </div>

                                                <div>
                                                    <div className="flex flex-wrap items-center gap-2">
                                                        <h3 className="font-bold text-[#171717]">
                                                            {review.name}
                                                        </h3>
                                                        <span className="inline-flex items-center gap-1 rounded-full bg-[#f7f7f4] px-2 py-1 text-xs text-[#77776f]">
                                                            <BadgeCheck size={13} />
                                                            Sample review
                                                        </span>
                                                    </div>

                                                    <p className="mt-1 text-sm text-[#77776f]">
                                                        {review.course}
                                                    </p>
                                                    <p className="mt-1 text-xs text-slate-400">
                                                        {review.date}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="sm:text-right">
                                                <div className="flex items-center gap-2 sm:justify-end">
                                                    <span className="text-lg font-bold">
                                                        {review.rating}.0
                                                    </span>
                                                    <RatingStars rating={review.rating} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-6">
                                            <h4 className="text-lg font-bold">{review.title}</h4>

                                            <Link
                                                href="/colleges"
                                                className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-[#171717] hover:text-[#171717]"
                                            >
                                                <Building2 size={15} />
                                                {review.college}
                                            </Link>

                                            <p className="mt-2 flex items-center gap-1.5 text-sm text-[#77776f]">
                                                <MapPin size={15} />
                                                {review.location}
                                            </p>

                                            <p className="mt-4 text-sm leading-7 text-[#77776f]">
                                                {review.review}
                                            </p>

                                            <div className="mt-4 rounded-xl bg-[#f4f3ee] p-3 text-sm text-[#343434]">
                                                <span className="font-semibold">
                                                    {review.placement}
                                                </span>
                                                <p className="mt-1 text-xs leading-5 text-[#77776f]">
                                                    This is a sample student perspective, not a verified
                                                    placement statistic.
                                                </p>
                                            </div>

                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {review.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="rounded-full bg-[#f7f7f4] px-3 py-1.5 text-xs font-medium text-[#171717]"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
                                                <button
                                                    type="button"
                                                    onClick={() => handleHelpful(review.id)}
                                                    aria-pressed={helpfulReviews.includes(review.id)}
                                                    className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition ${helpfulReviews.includes(review.id)
                                                        ? "bg-[#f7f7f4] text-[#171717]"
                                                        : "text-[#77776f] hover:bg-[#f7f7f4]"
                                                        }`}
                                                >
                                                    <ThumbsUp size={16} />
                                                    {helpfulReviews.includes(review.id)
                                                        ? "Marked helpful"
                                                        : "Helpful"}{" "}
                                                    ({review.helpful +
                                                        (helpfulReviews.includes(review.id) ? 1 : 0)})
                                                </button>

                                                <span className="text-xs text-slate-400">
                                                    For research purposes
                                                </span>
                                            </div>
                                        </div>
                                    </article>
                                ))}

                                {filteredReviews.length === 0 && (
                                    <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
                                        <Search
                                            size={35}
                                            className="mx-auto text-slate-400"
                                        />
                                        <h3 className="mt-4 text-lg font-bold">
                                            No matching reviews
                                        </h3>
                                        <p className="mt-2 text-sm text-[#77776f]">
                                            Try another search term or reset your filters.
                                        </p>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setSearch("");
                                                setCategory("All Reviews");
                                                setMinimumRating("0");
                                                setSort("helpful");
                                            }}
                                            className="mt-5 rounded-xl bg-[#171717] px-5 py-3 font-semibold text-white hover:bg-black"
                                        >
                                            Reset filters
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Sidebar */}
                            <aside className="space-y-5">
                                <div className="rounded-2xl border border-[#deded8] bg-white p-6">
                                    <div className="rounded-xl bg-[#f7f7f4] p-3 text-[#171717] w-fit">
                                        <TrendingUp size={25} />
                                    </div>
                                    <h3 className="mt-4 text-xl font-bold">
                                        Research placements
                                    </h3>
                                    <p className="mt-3 text-sm leading-7 text-[#77776f]">
                                        Review the latest official placement report, median
                                        salary, recruiter information and placement eligibility.
                                    </p>

                                    <ul className="mt-4 space-y-3 text-sm text-[#77776f]">
                                        {[
                                            "Median and average package",
                                            "Number of students placed",
                                            "Internship opportunities",
                                            "Course-wise placement data",
                                        ].map((item) => (
                                            <li key={item} className="flex gap-2">
                                                <BadgeCheck
                                                    size={17}
                                                    className="shrink-0 text-[#171717]"
                                                />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        href="/colleges"
                                        className="mt-6 inline-flex items-center gap-2 font-semibold text-[#171717] hover:text-[#171717]"
                                    >
                                        Explore colleges <ArrowRight size={17} />
                                    </Link>
                                </div>

                                <div className="rounded-2xl bg-[#171717] p-6 text-white">
                                    <GraduationCap size={30} className="text-[#ededE7]" />
                                    <h3 className="mt-4 text-xl font-bold">
                                        Need help choosing?
                                    </h3>
                                    <p className="mt-3 text-sm leading-7 text-slate-300">
                                        Explore courses and colleges that align with your goals.
                                    </p>
                                    <Link
                                        href="/contact"
                                        className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-[#0B1D42] hover:bg-[#f7f7f4]"
                                    >
                                        Get guidance <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>

                {/* Footer CTA */}
                <section className="px-5 pb-16 sm:px-8 lg:px-10">
                    <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-3xl border border-[#deded8] bg-[#f7f7f4] p-8 sm:p-10 md:flex-row md:items-center">
                        <div>
                            <h2 className="text-2xl font-bold sm:text-3xl">
                                Your next chapter starts with good research.
                            </h2>
                            <p className="mt-3 max-w-2xl leading-7 text-[#77776f]">
                                Compare colleges, understand your options and make an informed
                                decision about your education.
                            </p>
                        </div>

                        <Link
                            href="/colleges"
                            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#171717] px-6 py-3.5 font-semibold text-white transition hover:bg-black"
                        >
                            Find a College <ArrowRight size={18} />
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}