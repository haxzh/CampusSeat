"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock3,
  GraduationCap,
  Lightbulb,
  Search,
  X,
  Globe2,
  BriefcaseBusiness,
  Sparkles,
} from "lucide-react";

import Navbar from "@/src/components/Navbar";

type ArticleSection = {
  heading?: string;
  paragraphs: string[];
  bullets?: string[];
};

type BlogPost = {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  sections: ArticleSection[];
};

const posts: BlogPost[] = [
  {
    id: 1,
    category: "Degree Guide",
    title: "Bachelor's, Master's or DBA: Which Degree Is Right for Your Future?",
    excerpt:
      "Understand the difference between undergraduate, postgraduate and doctoral study, and choose a qualification that fits your experience, ambitions and next career move.",
    date: "July 22, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "University graduates celebrating together on campus",
    sections: [
      {
        paragraphs: [
          "Choosing your next academic step can feel confusing. Bachelor's, Master's and DBA programmes serve different purposes, and the right option depends on where you are in your education and career. This guide explains the key differences so you can make a more informed decision.",
        ],
      },
      {
        heading: "Bachelor's degree: building the foundation",
        paragraphs: [
          "A Bachelor's degree is usually the first step in higher education. It is designed for students beginning their academic journey or moving into a new subject area. Students build core knowledge, develop foundational skills and gain broad exposure to their chosen field.",
          "Consider a Bachelor's degree if you are finishing school, entering a profession for the first time or need an undergraduate qualification before progressing to further study.",
        ],
      },
      {
        heading: "Master's degree: developing specialist expertise",
        paragraphs: [
          "A Master's degree builds on undergraduate learning. It allows students and professionals to explore a subject in greater depth, develop advanced skills and prepare for specialist or leadership responsibilities.",
          "It may be a good fit if you already hold a Bachelor's degree and want to specialise, move into a new area or strengthen your profile for career progression.",
        ],
      },
      {
        heading: "DBA: advanced study for experienced leaders",
        paragraphs: [
          "A Doctor of Business Administration is a professional doctorate focused on applying research and advanced thinking to real organisational challenges. It is generally suited to experienced professionals and leaders who want to investigate complex business problems while continuing their careers.",
          "A DBA may suit senior professionals seeking to strengthen their strategic, analytical and leadership capabilities.",
        ],
      },
      {
        heading: "What to check before choosing",
        paragraphs: [
          "Look beyond the programme title. Compare the curriculum, entry requirements, duration, learning format, assessment approach and total cost. Always verify the awarding institution, accreditation and recognition relevant to your intended career or destination.",
          "If you plan to study internationally, check country-specific admission requirements and whether your previous qualifications meet the institution's criteria.",
        ],
        bullets: [
          "Your current academic and career stage",
          "The time you can realistically commit to study",
          "Recognition and accreditation of the qualification",
          "The balance between academic learning and practical experience",
        ],
      },
      {
        heading: "Make your next step a considered one",
        paragraphs: [
          "The right qualification should connect with your goals, not simply sound impressive. Compare your options carefully, ask institutions direct questions and seek guidance when you need help understanding entry requirements or study pathways.",
        ],
      },
    ],
  },
  {
    id: 2,
    category: "Inside CampusSeat",
    title: "Why We Built CampusSeat: Making College Discovery Simpler",
    excerpt:
      "Choosing a college should feel exciting, not overwhelming. Discover the thinking behind CampusSeat and our goal of bringing courses, destinations and admission guidance into one place.",
    date: "July 20, 2026",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Students working together around a laptop",
    sections: [
      {
        paragraphs: [
          "Choosing where and what to study is one of the most important decisions a student makes. Yet the information needed to make that decision is often spread across university websites, brochures, admission portals and conversations with different people.",
          "CampusSeat is built around a simple idea: make it easier for students to explore their options, understand the next steps and move forward with greater clarity.",
        ],
      },
      {
        heading: "The challenge students face",
        paragraphs: [
          "Students often have to compare institutions, courses, locations, fees, eligibility requirements and application timelines separately. Important details can be difficult to find, and it is not always clear which information applies to a particular student's situation.",
          "That can turn an exciting education decision into a confusing research process.",
        ],
      },
      {
        heading: "A clearer way to explore",
        paragraphs: [
          "CampusSeat brings key parts of the discovery journey together. Students can explore study destinations, browse colleges and courses, learn about admission pathways and find guidance as they compare their options.",
          "The aim is not to make the decision for students. It is to help them ask better questions and make decisions with useful information in front of them.",
        ],
      },
      {
        heading: "More than a list of colleges",
        paragraphs: [
          "A college choice is about more than a name. Course fit, location, learning environment, affordability, eligibility and future plans all matter. A useful discovery experience should help students consider these factors together.",
          "CampusSeat is designed to support that journey, from early exploration to taking the next step towards an application.",
        ],
      },
      {
        heading: "What this means for students",
        paragraphs: [
          "Whether you are beginning to explore undergraduate options, considering postgraduate study or comparing international destinations, start with your goals. Shortlist institutions, verify details with the university and seek advice when a requirement is unclear.",
          "We want CampusSeat to make that process more organised, approachable and student-focused.",
        ],
      },
    ],
  },
  {
    id: 3,
    category: "Study Abroad",
    title: "How to Choose an International University: 7 Things to Compare",
    excerpt:
      "From course structure and entry requirements to location and living costs, use these practical checkpoints to compare universities before applying abroad.",
    date: "July 18, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "University students walking through a university campus",
    sections: [
      {
        paragraphs: [
          "Studying abroad can open up new academic and personal experiences, but choosing a university requires careful research. A popular destination or well-known institution is not automatically the best fit for every student.",
          "Use these seven checkpoints to build a shortlist that reflects your academic goals, budget and preferred learning environment.",
        ],
      },
      {
        heading: "1. Course content and learning outcomes",
        paragraphs: [
          "Read the course curriculum rather than relying only on the programme title. Compare modules, practical projects, specialisations, teaching methods and the skills the course is designed to develop.",
        ],
      },
      {
        heading: "2. Entry requirements",
        paragraphs: [
          "Check academic prerequisites, accepted qualifications, subject requirements, language proficiency and any portfolio or experience requirements. Confirm that the information applies to your intended intake.",
        ],
      },
      {
        heading: "3. Accreditation and recognition",
        paragraphs: [
          "Verify the institution and the qualification with the relevant official bodies. If you plan to work or continue studying in another country after graduation, check the recognition requirements that may apply there.",
        ],
      },
      {
        heading: "4. Total cost of study",
        paragraphs: [
          "Compare tuition, accommodation, food, transport, insurance, visa costs and other required expenses. Look at the full cost of the programme rather than tuition fees alone, and confirm scholarship conditions directly with the institution.",
        ],
      },
      {
        heading: "5. Location and student experience",
        paragraphs: [
          "Consider the city, climate, transport, housing availability, campus facilities and student support. Think about the kind of environment in which you will feel comfortable studying and living.",
        ],
      },
      {
        heading: "6. Career and practical opportunities",
        paragraphs: [
          "Explore internships, placements, project work, employer engagement and career services. Ask what support is available and whether opportunities are guaranteed or competitive.",
        ],
      },
      {
        heading: "7. Application timeline and support",
        paragraphs: [
          "Create a timeline for documents, tests, applications, offers, deposits, visa steps and accommodation. Keep copies of official communication and use university sources to confirm deadlines.",
        ],
      },
      {
        heading: "Build a shortlist that works for you",
        paragraphs: [
          "Compare universities using the same criteria and keep notes about what you verify. A thoughtful shortlist should balance academic fit, affordability, practical requirements and your longer-term plans.",
        ],
      },
    ],
  },
];

const categories = ["All Articles", "Degree Guide", "Inside CampusSeat", "Study Abroad"];

const discoveryLinks = [
  {
    title: "Explore destinations",
    description: "Compare countries and study options",
    href: "/destinations",
    icon: Globe2,
  },
  {
    title: "Find universities",
    description: "Discover colleges and institutions",
    href: "/online-universities",
    icon: GraduationCap,
  },
  {
    title: "Explore programmes",
    description: "Browse courses and degree pathways",
    href: "/programs",
    icon: BookOpen,
  },
  {
    title: "Career guidance",
    description: "Plan your next academic step",
    href: "/career-guidance",
    icon: BriefcaseBusiness,
  },
];

function BlogCard({
  post,
  index,
  onRead,
}: {
  post: BlogPost;
  index: number;
  onRead: (post: BlogPost) => void;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="group flex h-full flex-col overflow-hidden rounded-[26px] border border-slate-200/80 bg-white shadow-[0_12px_40px_rgba(24,39,75,0.06)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_55px_rgba(24,39,75,0.13)]"
    >
      <button
        type="button"
        onClick={() => onRead(post)}
        className="relative block h-[230px] w-full overflow-hidden bg-slate-100 text-left"
        aria-label={`Read ${post.title}`}
      >
        <img
          src={post.image}
          alt={post.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101b3c]/55 via-transparent to-[#101b3c]/10" />
        <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-[#14244a]/85 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white shadow-lg backdrop-blur-md">
          {post.category}
        </span>
        <span className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#17264b] shadow-lg transition-transform duration-300 group-hover:rotate-45">
          <ArrowUpRight size={19} />
        </span>
      </button>

      <div className="flex flex-1 flex-col px-6 pb-6 pt-6 sm:px-7">
        <div className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7485a5]">
          <span>{post.date}</span>
          <span className="h-1 w-1 rounded-full bg-[#c5cede]" />
          <span>{post.readTime}</span>
        </div>
        <h2 className="text-[19px] font-bold leading-[1.4] tracking-[-0.025em] text-[#142044] transition-colors group-hover:text-[#4168b5] sm:text-[21px]">
          {post.title}
        </h2>
        <p className="mt-3 flex-1 text-[14px] leading-7 text-slate-500">
          {post.excerpt}
        </p>
        <div className="mt-6 border-t border-slate-100 pt-4">
          <button
            type="button"
            onClick={() => onRead(post)}
            className="inline-flex items-center gap-2 text-[13px] font-bold text-[#1c2d58] transition-all hover:gap-3 hover:text-[#4168b5]"
          >
            Read article <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

function ArticleModal({
  post,
  onClose,
}: {
  post: BlogPost | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {post && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-[#08142d]/70 px-4 py-8 backdrop-blur-sm sm:py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <motion.article
            role="dialog"
            aria-modal="true"
            aria-labelledby="article-title"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="relative my-auto w-full max-w-[850px] overflow-hidden rounded-[28px] bg-white shadow-2xl"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close article"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-[#17264b] shadow-lg transition hover:rotate-90"
            >
              <X size={19} />
            </button>
            <div className="relative h-[240px] sm:h-[340px]">
              <img
                src={post.image}
                alt={post.imageAlt}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1837]/80 via-[#0d1837]/10 to-transparent" />
              <div className="absolute bottom-7 left-6 right-6 sm:bottom-9 sm:left-10 sm:right-10">
                <span className="inline-flex rounded-full bg-white/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur">
                  {post.category}
                </span>
                <h1
                  id="article-title"
                  className="mt-4 max-w-3xl text-2xl font-extrabold leading-tight tracking-[-0.035em] text-white sm:text-4xl"
                >
                  {post.title}
                </h1>
                <p className="mt-3 flex items-center gap-3 text-xs font-medium text-white/80">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </p>
              </div>
            </div>
            <div className="px-6 py-8 sm:px-10 sm:py-10">
              <p className="mb-8 border-l-[3px] border-[#d5a84e] pl-5 text-[16px] leading-8 text-slate-600">
                {post.excerpt}
              </p>
              <div className="space-y-8">
                {post.sections.map((section, index) => (
                  <section key={`${post.id}-${index}`}>
                    {section.heading && (
                      <h2 className="mb-3 text-xl font-bold tracking-tight text-[#17264b] sm:text-2xl">
                        {section.heading}
                      </h2>
                    )}
                    {section.paragraphs.map((paragraph, paragraphIndex) => (
                      <p
                        key={paragraphIndex}
                        className="mb-3 text-[15px] leading-8 text-slate-600"
                      >
                        {paragraph}
                      </p>
                    ))}
                    {section.bullets && (
                      <ul className="mt-4 space-y-3">
                        {section.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex gap-3 text-[14px] leading-7 text-slate-600"
                          >
                            <CheckCircle2
                              size={18}
                              className="mt-1 shrink-0 text-[#4d75bd]"
                            />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>
              <div className="mt-10 rounded-2xl bg-[#f2f5fb] p-6 sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#7184a7]">
                  Your next step
                </p>
                <h3 className="mt-2 text-xl font-bold text-[#17264b]">
                  Explore your study options with CampusSeat.
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-500">
                  Compare destinations, discover universities and get clarity
                  on the next steps in your education journey.
                </p>
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#17264b] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#294578]"
                >
                  Get guidance <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All Articles");
  const [search, setSearch] = useState("");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const reduceMotion = useReducedMotion();

  const filteredPosts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return posts.filter((post) => {
      const matchesCategory =
        activeCategory === "All Articles" || post.category === activeCategory;
      const searchableText = [
        post.title,
        post.excerpt,
        post.category,
        ...post.sections.flatMap((section) => [
          section.heading ?? "",
          ...section.paragraphs,
          ...(section.bullets ?? []),
        ]),
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && (!query || searchableText.includes(query));
    });
  }, [activeCategory, search]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-hidden bg-[#f6f8fc] text-[#142044]">
        {/* HERO */}
        <section className="relative isolate flex min-h-[430px] items-center overflow-hidden bg-[#101d3d] px-5 pb-20 pt-28 sm:min-h-[500px] sm:px-8 sm:pb-24 sm:pt-32">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-20 bg-[url('https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=2200&q=90')] bg-cover bg-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[linear-gradient(105deg,rgba(9,20,47,0.94)_0%,rgba(14,31,66,0.82)_48%,rgba(17,38,76,0.48)_100%)]"
          />
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-32 -z-10 h-[440px] w-[440px] rounded-full border border-white/10"
          />
          <div
            aria-hidden="true"
            className="absolute -right-8 -top-16 -z-10 h-[300px] w-[300px] rounded-full border border-white/10"
          />

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto w-full max-w-[1240px]"
          >
            <div className="max-w-[780px]">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#e2bd76]/35 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.17em] text-[#f0c879] backdrop-blur-md">
                <Sparkles size={14} />
                The CampusSeat Journal
              </span>
              <h1 className="mt-7 text-4xl font-extrabold leading-[1.08] tracking-[-0.05em] text-white sm:text-5xl md:text-[66px]">
                Ideas that move
                <span className="block text-[#e8c47f]">your future forward.</span>
              </h1>
              <p className="mt-6 max-w-[650px] text-[15px] leading-8 text-slate-200 sm:text-[18px]">
                Explore practical education guides, university insights and
                study-abroad advice to make your next academic decision with
                confidence.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-semibold text-white/75">
                <span className="inline-flex items-center gap-2">
                  <BookOpen size={15} /> Student-first insights
                </span>
                <span className="h-1 w-1 rounded-full bg-[#e8c47f]" />
                <span className="inline-flex items-center gap-2">
                  <Lightbulb size={15} /> Guidance for every next step
                </span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* CONTENT */}
        <section className="relative px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12">
          <div className="mx-auto -mt-8 grid max-w-[1320px] items-start gap-8 lg:grid-cols-[minmax(0,1fr)_340px] xl:gap-10">
            <div className="min-w-0">
              <div className="rounded-[22px] border border-slate-200/80 bg-white p-4 shadow-[0_12px_40px_rgba(24,39,75,0.07)] sm:p-5">
                <div className="relative max-w-[520px]">
                  <Search
                    size={18}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#8a9ab6]"
                  />
                  <input
                    type="search"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search articles, topics or study guides..."
                    aria-label="Search blog articles"
                    className="h-12 w-full rounded-xl border border-slate-200 bg-[#f9faff] pl-11 pr-4 text-sm text-[#17264b] outline-none transition placeholder:text-slate-400 focus:border-[#718fc5] focus:bg-white focus:ring-4 focus:ring-[#718fc5]/10"
                  />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      aria-pressed={activeCategory === category}
                      className={`rounded-full border px-4 py-2.5 text-[12px] font-bold transition-all ${
                        activeCategory === category
                          ? "border-[#17264b] bg-[#17264b] text-white shadow-md shadow-[#17264b]/15"
                          : "border-slate-200 bg-white text-slate-600 hover:border-[#9aaccb] hover:text-[#17264b]"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-5 mt-8 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-[#17264b]">
                    {filteredPosts.length}{" "}
                    {filteredPosts.length === 1 ? "article" : "articles"}
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Fresh perspectives for your education journey
                  </p>
                </div>
                <span className="hidden items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#91a0ba] sm:inline-flex">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#d8ad5c]" />
                  Learn · Explore · Decide
                </span>
              </div>

              {filteredPosts.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2">
                  {filteredPosts.map((post, index) => (
                    <BlogCard
                      key={post.id}
                      post={post}
                      index={index}
                      onRead={setSelectedPost}
                    />
                  ))}
                </div>
              ) : (
                <div className="rounded-[24px] border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eef2fa] text-[#526b9c]">
                    <Search size={23} />
                  </span>
                  <h2 className="mt-5 text-xl font-bold text-[#17264b]">
                    No articles found
                  </h2>
                  <p className="mt-2 text-sm text-slate-500">
                    Try a different keyword or select another category.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearch("");
                      setActiveCategory("All Articles");
                    }}
                    className="mt-5 rounded-full bg-[#17264b] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#294578]"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>

            {/* SIDEBAR */}
            <aside className="lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-[25px] border border-slate-200 bg-white p-6 shadow-[0_14px_45px_rgba(24,39,75,0.07)] sm:p-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#8a9bb9]">
                  Find your direction
                </p>
                <h2 className="mt-2 text-[23px] font-extrabold leading-tight tracking-[-0.04em] text-[#17264b]">
                  Your next chapter starts here.
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-500">
                  Explore the key parts of your college discovery journey with
                  CampusSeat.
                </p>

                <div className="mt-6 space-y-3">
                  {discoveryLinks.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="group flex min-h-[76px] items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-[#f8faff] px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c4d1e8] hover:bg-white hover:shadow-lg"
                      >
                        <span className="flex min-w-0 items-center gap-3">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eaf0fb] text-[#263d70] transition-colors group-hover:bg-[#17264b] group-hover:text-white">
                            <Icon size={19} />
                          </span>
                          <span className="min-w-0">
                            <span className="block text-[13px] font-bold text-[#17264b]">
                              {item.title}
                            </span>
                            <span className="mt-1 block text-[11px] leading-4 text-slate-500">
                              {item.description}
                            </span>
                          </span>
                        </span>
                        <ArrowRight
                          size={16}
                          className="shrink-0 text-[#91a2bf] transition-transform group-hover:translate-x-1"
                        />
                      </Link>
                    );
                  })}
                </div>

                <div className="relative mt-6 overflow-hidden rounded-2xl bg-[#17264b] p-5 text-white">
                  <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full border border-white/10" />
                  <div className="absolute -right-2 -top-2 h-20 w-20 rounded-full border border-white/10" />
                  <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#edc577]">
                    <GraduationCap size={21} />
                  </span>
                  <h3 className="relative mt-4 text-[17px] font-bold">
                    Need help choosing?
                  </h3>
                  <p className="relative mt-2 text-[12px] leading-6 text-slate-300">
                    Talk through your goals and get support with your next
                    education steps.
                  </p>
                  <Link
                    href="/contact"
                    className="relative mt-4 inline-flex items-center gap-2 text-[12px] font-bold text-[#edc577] transition-all hover:gap-3"
                  >
                    Get counselling <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="relative overflow-hidden bg-[#eaf0f8] px-5 py-16 sm:px-8 sm:py-20">
          <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full border border-[#cbd6e7]" />
          <div className="absolute -right-8 -top-16 h-48 w-48 rounded-full border border-[#cbd6e7]" />
          <div className="relative mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.17em] text-[#5774a8]">
                <Lightbulb size={14} />
                Make your next move count
              </span>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.045em] text-[#17264b] sm:text-4xl">
                Your goals. Your options. A clearer way forward.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
                Discover courses, compare study destinations and take the next
                step with CampusSeat.
              </p>
            </div>
            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center gap-5 rounded-full bg-[#17264b] py-2 pl-6 pr-2 text-sm font-bold text-white shadow-lg shadow-[#17264b]/15 transition hover:bg-[#294578]"
            >
              Talk to an advisor
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8c47f] text-[#17264b] transition-transform group-hover:rotate-45">
                <ArrowUpRight size={18} />
              </span>
            </Link>
          </div>
        </section>
      </main>

      <ArticleModal
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
      />
    </>
  );
}
