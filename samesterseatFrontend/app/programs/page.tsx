
// // "use client";

// // import { useState } from "react";
// // import Link from "next/link";
// // // import Navbar from "../../src/components/Navbar";
// // import {
// //     Search,
// //     GraduationCap,
// //     Clock,
// //     IndianRupee,
// //     ArrowRight,
// //     BookOpen,
// //     Code2,
// //     BriefcaseBusiness,
// //     Palette,
// //     BarChart3,
// // } from "lucide-react";

// // const categories = [
// //     "All Courses",
// //     "Technology",
// //     "Management",
// //     "Commerce",
// //     "Design",
// // ];

// // const courses = [
// //     {
// //         id: 1,
// //         title: "Bachelor of Computer Applications",
// //         shortTitle: "BCA",
// //         category: "Technology",
// //         level: "Undergraduate",
// //         duration: "3–4 Years",
// //         fees: "₹30,000–₹1,50,000/year",
// //         description:
// //             "Learn programming, databases, web development and the fundamentals of computer applications.",
// //         subjects: ["Programming", "Database", "Web Development"],
// //         icon: Code2,
// //         color: "bg-[#f7f7f4] text-[#171717]",
// //     },
// //     {
// //         id: 2,
// //         title: "Master of Computer Applications",
// //         shortTitle: "MCA",
// //         category: "Technology",
// //         level: "Postgraduate",
// //         duration: "2 Years",
// //         fees: "₹50,000–₹2,00,000/year",
// //         description:
// //             "Develop advanced skills in software engineering, application development and computing.",
// //         subjects: ["Software Engineering", "Cloud", "AI"],
// //         icon: Code2,
// //         color: "bg-indigo-50 text-indigo-700",
// //     },
// //     {
// //         id: 3,
// //         title: "Bachelor of Business Administration",
// //         shortTitle: "BBA",
// //         category: "Management",
// //         level: "Undergraduate",
// //         duration: "3–4 Years",
// //         fees: "₹40,000–₹2,00,000/year",
// //         description:
// //             "Build a foundation in business management, leadership, marketing and organizational strategy.",
// //         subjects: ["Marketing", "Management", "Finance"],
// //         icon: BriefcaseBusiness,
// //         color: "bg-amber-50 text-amber-700",
// //     },
// //     {
// //         id: 4,
// //         title: "Master of Business Administration",
// //         shortTitle: "MBA",
// //         category: "Management",
// //         level: "Postgraduate",
// //         duration: "2 Years",
// //         fees: "₹1,00,000–₹5,00,000/year",
// //         description:
// //             "Explore business strategy, operations, finance and management for career advancement.",
// //         subjects: ["Strategy", "Finance", "Leadership"],
// //         icon: BarChart3,
// //         color: "bg-neutral-50 text-neutral-700",
// //     },
// //     {
// //         id: 5,
// //         title: "Bachelor of Commerce",
// //         shortTitle: "B.Com",
// //         category: "Commerce",
// //         level: "Undergraduate",
// //         duration: "3–4 Years",
// //         fees: "₹10,000–₹1,00,000/year",
// //         description:
// //             "Study accounting, business law, economics and financial management.",
// //         subjects: ["Accounting", "Economics", "Taxation"],
// //         icon: IndianRupee,
// //         color: "bg-neutral-50 text-neutral-700",
// //     },
// //     {
// //         id: 6,
// //         title: "Bachelor of Design",
// //         shortTitle: "B.Des",
// //         category: "Design",
// //         level: "Undergraduate",
// //         duration: "4 Years",
// //         fees: "₹80,000–₹3,00,000/year",
// //         description:
// //             "Explore visual communication, user experience and creative design processes.",
// //         subjects: ["UI/UX", "Visual Design", "Prototyping"],
// //         icon: Palette,
// //         color: "bg-pink-50 text-pink-700",
// //     },
// // ];

// // export default function CoursesPage() {
// //     const [search, setSearch] = useState("");
// //     const [activeCategory, setActiveCategory] = useState("All Courses");

// //     const filteredCourses = courses.filter((course) => {
// //         const matchesCategory =
// //             activeCategory === "All Courses" ||
// //             course.category === activeCategory;

// //         const query = search.toLowerCase();

// //         const matchesSearch =
// //             course.title.toLowerCase().includes(query) ||
// //             course.shortTitle.toLowerCase().includes(query) ||
// //             course.category.toLowerCase().includes(query) ||
// //             course.subjects.some((subject) =>
// //                 subject.toLowerCase().includes(query)
// //             );

// //         return matchesCategory && matchesSearch;
// //     });

// //     return (
// //         <>
// //             {/* <Navbar /> */}

// //             <main className="min-h-screen bg-[#f4f3ee] text-[#171717]">
// //                 {/* Hero */}
// //                 <section className="bg-[#171717] px-5 py-16 text-white md:py-20">
// //                     <div className="mx-auto max-w-7xl">
// //                         <div className="mb-5 flex items-center gap-2 text-sm text-[#ededE7]">
// //                             <GraduationCap size={20} />
// //                             CampusSeat / Courses
// //                         </div>

// //                         <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
// //                             Discover your course.
// //                             <span className="mt-2 block text-[#ededE7]">
// //                                 Shape your future.
// //                             </span>
// //                         </h1>

// //                         <p className="mt-6 max-w-2xl leading-7 text-[#ededE7] md:text-lg">
// //                             Explore undergraduate and postgraduate courses, compare
// //                             study options and find a program that matches your goals.
// //                         </p>

// //                         <div className="mt-8 flex flex-wrap gap-3">
// //                             <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
// //                                 Multiple disciplines
// //                             </span>
// //                             <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
// //                                 UG & PG programs
// //                             </span>
// //                             <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
// //                                 Find your path
// //                             </span>
// //                         </div>
// //                     </div>
// //                 </section>

// //                 {/* Courses */}
// //                 <section className="mx-auto max-w-7xl px-5 py-12 md:py-16">
// //                     <div className="mb-8">
// //                         <h2 className="text-2xl font-bold md:text-3xl">
// //                             Explore courses
// //                         </h2>
// //                         <p className="mt-2 text-[#77776f]">
// //                             Search by course name, category or subject.
// //                         </p>
// //                     </div>

// //                     {/* Search */}
// //                     <div className="relative mb-6">
// //                         <Search
// //                             size={20}
// //                             className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
// //                         />
// //                         <input
// //                             type="text"
// //                             value={search}
// //                             onChange={(event) => setSearch(event.target.value)}
// //                             placeholder="Search BCA, MBA, programming, design..."
// //                             className="w-full rounded-xl border border-[#deded8] bg-white py-4 pl-12 pr-4 outline-none transition focus:border-[#171717] focus:ring-2 focus:ring-black/5"
// //                         />
// //                     </div>

// //                     {/* Category filters */}
// //                     <div className="mb-8 flex flex-wrap gap-3">
// //                         {categories.map((category) => (
// //                             <button
// //                                 key={category}
// //                                 type="button"
// //                                 onClick={() => setActiveCategory(category)}
// //                                 className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${activeCategory === category
// //                                     ? "bg-[#171717] text-white shadow-md"
// //                                     : "border border-[#deded8] bg-white text-[#77776f] hover:border-blue-300 hover:text-[#171717]"
// //                                     }`}
// //                             >
// //                                 {category}
// //                             </button>
// //                         ))}
// //                     </div>

// //                     <div className="mb-5 flex items-center justify-between">
// //                         <p className="text-sm text-[#77776f]">
// //                             {filteredCourses.length} courses found
// //                         </p>

// //                         {(search || activeCategory !== "All Courses") && (
// //                             <button
// //                                 type="button"
// //                                 onClick={() => {
// //                                     setSearch("");
// //                                     setActiveCategory("All Courses");
// //                                 }}
// //                                 className="text-sm font-semibold text-[#171717] hover:underline"
// //                             >
// //                                 Clear filters
// //                             </button>
// //                         )}
// //                     </div>

// //                     {/* Course cards */}
// //                     {filteredCourses.length > 0 ? (
// //                         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
// //                             {filteredCourses.map((course) => {
// //                                 const Icon = course.icon;

// //                                 return (
// //                                     <article
// //                                         key={course.id}
// //                                         className="group flex flex-col rounded-2xl border border-[#deded8] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
// //                                     >
// //                                         <div className="mb-5 flex items-start justify-between gap-3">
// //                                             <div
// //                                                 className={`flex h-14 w-14 items-center justify-center rounded-2xl ${course.color}`}
// //                                             >
// //                                                 <Icon size={28} />
// //                                             </div>

// //                                             <span className="rounded-full bg-[#f7f7f4] px-3 py-1.5 text-xs font-medium text-[#77776f]">
// //                                                 {course.level}
// //                                             </span>
// //                                         </div>

// //                                         <p className="text-sm font-bold text-[#171717]">
// //                                             {course.shortTitle}
// //                                         </p>

// //                                         <h3 className="mt-2 text-xl font-bold leading-snug">
// //                                             {course.title}
// //                                         </h3>

// //                                         <p className="mt-3 flex-1 text-sm leading-6 text-[#77776f]">
// //                                             {course.description}
// //                                         </p>

// //                                         <div className="mt-5 flex flex-wrap gap-2">
// //                                             {course.subjects.map((subject) => (
// //                                                 <span
// //                                                     key={subject}
// //                                                     className="rounded-lg bg-[#f7f7f4] px-3 py-1.5 text-xs font-medium text-[#171717]"
// //                                                 >
// //                                                     {subject}
// //                                                 </span>
// //                                             ))}
// //                                         </div>

// //                                         <div className="mt-6 space-y-3 border-t border-slate-100 pt-5">
// //                                             <div className="flex items-center gap-2 text-sm text-[#77776f]">
// //                                                 <Clock size={17} className="text-[#171717]" />
// //                                                 <span>Duration: {course.duration}</span>
// //                                             </div>

// //                                             <div className="flex items-start gap-2 text-sm text-[#77776f]">
// //                                                 <IndianRupee
// //                                                     size={17}
// //                                                     className="mt-0.5 shrink-0 text-[#171717]"
// //                                                 />
// //                                                 <span>Indicative fees: {course.fees}</span>
// //                                             </div>
// //                                         </div>

// //                                         <Link
// //                                             href="/contact"
// //                                             className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-[#171717] px-5 py-3 font-semibold text-white transition hover:bg-black"
// //                                         >
// //                                             Enquire Now
// //                                             <ArrowRight
// //                                                 size={18}
// //                                                 className="transition group-hover:translate-x-1"
// //                                             />
// //                                         </Link>
// //                                     </article>
// //                                 );
// //                             })}
// //                         </div>
// //                     ) : (
// //                         <div className="rounded-2xl border border-[#deded8] bg-white px-5 py-16 text-center">
// //                             <BookOpen
// //                                 size={40}
// //                                 className="mx-auto mb-4 text-slate-400"
// //                             />
// //                             <h3 className="text-lg font-bold">No courses found</h3>
// //                             <p className="mt-2 text-sm text-[#77776f]">
// //                                 Try another course name or select a different category.
// //                             </p>
// //                             <button
// //                                 type="button"
// //                                 onClick={() => {
// //                                     setSearch("");
// //                                     setActiveCategory("All Courses");
// //                                 }}
// //                                 className="mt-5 rounded-lg bg-[#171717] px-5 py-2.5 font-semibold text-white hover:bg-black"
// //                             >
// //                                 View all courses
// //                             </button>
// //                         </div>
// //                     )}
// //                 </section>

// //                 {/* CTA */}
// //                 <section className="mx-auto max-w-7xl px-5 pb-16">
// //                     <div className="flex flex-col justify-between gap-6 rounded-3xl bg-[#171717] p-8 text-white md:flex-row md:items-center md:p-12">
// //                         <div>
// //                             <p className="text-sm font-semibold uppercase tracking-widest text-[#ededE7]">
// //                                 Need help deciding?
// //                             </p>
// //                             <h2 className="mt-3 text-2xl font-bold md:text-3xl">
// //                                 Find the right course for your future.
// //                             </h2>
// //                             <p className="mt-3 max-w-2xl leading-7 text-[#ededE7]">
// //                                 Explore career paths and get guidance before choosing
// //                                 your next academic step.
// //                             </p>
// //                         </div>

// //                         <Link
// //                             href="/career-guidance"
// //                             className="flex w-fit shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-[#171717] transition hover:bg-[#f7f7f4]"
// //                         >
// //                             Career Guidance
// //                             <ArrowRight size={18} />
// //                         </Link>
// //                     </div>

// //                     <p className="mt-5 text-xs leading-5 text-[#77776f]">
// //                         Fees and durations are illustrative ranges, not official
// //                         quotations. Confirm eligibility, course duration and fees
// //                         with the relevant university before applying.
// //                     </p>
// //                 </section>
// //             </main>
// //         </>
// //     );
// // }




// "use client";

// import { useMemo, useState } from "react";
// import Link from "next/link";
// import {
//   Search,
//   GraduationCap,
//   Clock3,
//   IndianRupee,
//   ArrowRight,
//   BookOpen,
//   Code2,
//   BriefcaseBusiness,
//   Palette,
//   BarChart3,
//   HeartPulse,
//   Scale,
//   FlaskConical,
//   PenTool,
//   Languages,
//   Wrench,
//   Microscope,
//   Laptop,
//   Award,
//   SlidersHorizontal,
//   X,
//   Sparkles,
// } from "lucide-react";

// const categories = [
//   "All Programs",
//   "Technology",
//   "Business",
//   "Commerce",
//   "Engineering",
//   "Health Sciences",
//   "Design",
//   "Law",
//   "Arts & Humanities",
//   "Science",
//   "Education",
// ];

// const programs = [
//   {
//     id: 1,
//     title: "Bachelor of Computer Applications",
//     shortTitle: "BCA",
//     category: "Technology",
//     level: "Bachelor's",
//     duration: "3–4 Years",
//     fees: "₹30,000–₹1,50,000/year",
//     description: "Build a strong foundation in programming, databases, web development and modern computing.",
//     subjects: ["Programming", "Database Systems", "Web Development"],
//     icon: Code2,
//     accent: "blue",
//     tag: "Popular choice",
//   },
//   {
//     id: 2,
//     title: "Bachelor of Technology",
//     shortTitle: "B.Tech",
//     category: "Engineering",
//     level: "Bachelor's",
//     duration: "4 Years",
//     fees: "₹60,000–₹3,00,000/year",
//     description: "Develop technical and problem-solving skills through engineering fundamentals and practical projects.",
//     subjects: ["Computer Science", "Electronics", "Mechanical"],
//     icon: Wrench,
//     accent: "violet",
//   },
//   {
//     id: 3,
//     title: "Bachelor of Business Administration",
//     shortTitle: "BBA",
//     category: "Business",
//     level: "Bachelor's",
//     duration: "3–4 Years",
//     fees: "₹40,000–₹2,00,000/year",
//     description: "Learn management, marketing, entrepreneurship and the fundamentals of running an organisation.",
//     subjects: ["Marketing", "Management", "Entrepreneurship"],
//     icon: BriefcaseBusiness,
//     accent: "amber",
//   },
//   {
//     id: 4,
//     title: "Bachelor of Commerce",
//     shortTitle: "B.Com",
//     category: "Commerce",
//     level: "Bachelor's",
//     duration: "3–4 Years",
//     fees: "₹10,000–₹1,00,000/year",
//     description: "Understand accounting, taxation, economics and financial decision-making.",
//     subjects: ["Accounting", "Economics", "Taxation"],
//     icon: IndianRupee,
//     accent: "emerald",
//   },
//   {
//     id: 5,
//     title: "Bachelor of Design",
//     shortTitle: "B.Des",
//     category: "Design",
//     level: "Bachelor's",
//     duration: "4 Years",
//     fees: "₹80,000–₹3,00,000/year",
//     description: "Turn creative ideas into meaningful visual, product and digital experiences.",
//     subjects: ["UI/UX", "Visual Design", "Product Design"],
//     icon: Palette,
//     accent: "pink",
//   },
//   {
//     id: 6,
//     title: "Bachelor of Science in Nursing",
//     shortTitle: "B.Sc Nursing",
//     category: "Health Sciences",
//     level: "Bachelor's",
//     duration: "4 Years",
//     fees: "₹50,000–₹2,50,000/year",
//     description: "Prepare for professional nursing practice through clinical learning and health sciences.",
//     subjects: ["Clinical Practice", "Anatomy", "Patient Care"],
//     icon: HeartPulse,
//     accent: "rose",
//   },
//   {
//     id: 7,
//     title: "Bachelor of Laws",
//     shortTitle: "LL.B",
//     category: "Law",
//     level: "Bachelor's",
//     duration: "3 Years",
//     fees: "₹30,000–₹2,00,000/year",
//     description: "Study legal systems, constitutional principles, contracts and professional legal practice.",
//     subjects: ["Constitutional Law", "Contracts", "Legal Research"],
//     icon: Scale,
//     accent: "slate",
//   },
//   {
//     id: 8,
//     title: "Bachelor of Arts",
//     shortTitle: "B.A",
//     category: "Arts & Humanities",
//     level: "Bachelor's",
//     duration: "3–4 Years",
//     fees: "₹10,000–₹1,00,000/year",
//     description: "Explore society, culture, communication and human thought across a range of disciplines.",
//     subjects: ["Psychology", "Political Science", "English"],
//     icon: Languages,
//     accent: "orange",
//   },
//   {
//     id: 9,
//     title: "Bachelor of Science",
//     shortTitle: "B.Sc",
//     category: "Science",
//     level: "Bachelor's",
//     duration: "3–4 Years",
//     fees: "₹20,000–₹1,50,000/year",
//     description: "Build scientific knowledge through theory, laboratory work and analytical thinking.",
//     subjects: ["Physics", "Chemistry", "Mathematics"],
//     icon: FlaskConical,
//     accent: "cyan",
//   },
//   {
//     id: 10,
//     title: "Bachelor of Education",
//     shortTitle: "B.Ed",
//     category: "Education",
//     level: "Bachelor's",
//     duration: "2 Years",
//     fees: "₹25,000–₹1,20,000/year",
//     description: "Develop teaching methods, classroom skills and an understanding of how students learn.",
//     subjects: ["Pedagogy", "Learning Psychology", "Teaching Practice"],
//     icon: BookOpen,
//     accent: "teal",
//   },
//   {
//     id: 11,
//     title: "Master of Computer Applications",
//     shortTitle: "MCA",
//     category: "Technology",
//     level: "Master's",
//     duration: "2 Years",
//     fees: "₹50,000–₹2,00,000/year",
//     description: "Advance your skills in software engineering, application development and computing.",
//     subjects: ["Software Engineering", "Cloud", "AI & ML"],
//     icon: Laptop,
//     accent: "blue",
//     tag: "Career focused",
//   },
//   {
//     id: 12,
//     title: "Master of Business Administration",
//     shortTitle: "MBA",
//     category: "Business",
//     level: "Master's",
//     duration: "1–2 Years",
//     fees: "₹1,00,000–₹5,00,000/year",
//     description: "Strengthen strategic, financial and leadership skills for business and management roles.",
//     subjects: ["Strategy", "Finance", "Leadership"],
//     icon: BarChart3,
//     accent: "amber",
//   },
//   {
//     id: 13,
//     title: "Master of Science in Data Science",
//     shortTitle: "M.Sc Data Science",
//     category: "Technology",
//     level: "Master's",
//     duration: "1–2 Years",
//     fees: "₹60,000–₹3,00,000/year",
//     description: "Learn to analyse complex data and build evidence-led solutions using statistical and computing methods.",
//     subjects: ["Python", "Machine Learning", "Statistics"],
//     icon: BarChart3,
//     accent: "violet",
//   },
//   {
//     id: 14,
//     title: "Master of Technology",
//     shortTitle: "M.Tech",
//     category: "Engineering",
//     level: "Master's",
//     duration: "2 Years",
//     fees: "₹50,000–₹2,50,000/year",
//     description: "Specialise in an engineering discipline through advanced coursework, research and projects.",
//     subjects: ["Advanced Computing", "Research", "Engineering"],
//     icon: Wrench,
//     accent: "violet",
//   },
//   {
//     id: 15,
//     title: "Master of Public Health",
//     shortTitle: "MPH",
//     category: "Health Sciences",
//     level: "Master's",
//     duration: "1–2 Years",
//     fees: "₹70,000–₹3,00,000/year",
//     description: "Explore population health, epidemiology, health policy and community wellbeing.",
//     subjects: ["Epidemiology", "Health Policy", "Biostatistics"],
//     icon: HeartPulse,
//     accent: "rose",
//   },
//   {
//     id: 16,
//     title: "Doctor of Philosophy",
//     shortTitle: "PhD",
//     category: "Science",
//     level: "Doctorate",
//     duration: "3–6 Years",
//     fees: "Varies by institution",
//     description: "Conduct original research and contribute new knowledge to your chosen academic field.",
//     subjects: ["Research Methods", "Dissertation", "Specialisation"],
//     icon: Microscope,
//     accent: "emerald",
//   },
//   {
//     id: 17,
//     title: "Doctor of Business Administration",
//     shortTitle: "DBA",
//     category: "Business",
//     level: "Doctorate",
//     duration: "3–5 Years",
//     fees: "Varies by institution",
//     description: "Apply advanced research and strategic thinking to complex organisational challenges.",
//     subjects: ["Applied Research", "Leadership", "Strategy"],
//     icon: BriefcaseBusiness,
//     accent: "amber",
//   },
//   {
//     id: 18,
//     title: "Diploma in Computer Applications",
//     shortTitle: "DCA",
//     category: "Technology",
//     level: "Diploma",
//     duration: "6–12 Months",
//     fees: "₹8,000–₹40,000",
//     description: "Gain practical computer, office productivity and introductory application skills.",
//     subjects: ["Computer Basics", "Office Tools", "Internet"],
//     icon: Laptop,
//     accent: "blue",
//   },
//   {
//     id: 19,
//     title: "Postgraduate Diploma in Management",
//     shortTitle: "PGDM",
//     category: "Business",
//     level: "Diploma",
//     duration: "1–2 Years",
//     fees: "₹1,00,000–₹8,00,000/year",
//     description: "Build applied management capabilities through business cases, projects and industry learning.",
//     subjects: ["Marketing", "Operations", "Finance"],
//     icon: BriefcaseBusiness,
//     accent: "amber",
//   },
//   {
//     id: 20,
//     title: "Certificate in Cybersecurity",
//     shortTitle: "Cybersecurity",
//     category: "Technology",
//     level: "Certificate",
//     duration: "8–24 Weeks",
//     fees: "₹5,000–₹60,000",
//     description: "Understand security fundamentals, network protection, threat awareness and safe computing.",
//     subjects: ["Network Security", "Threats", "Risk Basics"],
//     icon: Award,
//     accent: "emerald",
//   },
//   {
//     id: 21,
//     title: "Certificate in Digital Marketing",
//     shortTitle: "Digital Marketing",
//     category: "Business",
//     level: "Certificate",
//     duration: "8–16 Weeks",
//     fees: "₹5,000–₹50,000",
//     description: "Learn digital campaign planning, search marketing, content strategy and performance analytics.",
//     subjects: ["SEO", "Social Media", "Analytics"],
//     icon: Sparkles,
//     accent: "pink",
//   },
//   {
//     id: 22,
//     title: "Executive Leadership Programme",
//     shortTitle: "Executive Leadership",
//     category: "Business",
//     level: "Executive",
//     duration: "6–16 Weeks",
//     fees: "Varies by institution",
//     description: "Designed for working professionals seeking to strengthen leadership and decision-making skills.",
//     subjects: ["Leadership", "Strategy", "Decision-making"],
//     icon: Award,
//     accent: "slate",
//   },
//   {
//     id: 23,
//     title: "Short Course in UI/UX Design",
//     shortTitle: "UI/UX Design",
//     category: "Design",
//     level: "Short Course",
//     duration: "4–12 Weeks",
//     fees: "₹5,000–₹45,000",
//     description: "Learn user research, wireframing, prototyping and the fundamentals of digital product design.",
//     subjects: ["Figma", "Wireframing", "Prototyping"],
//     icon: PenTool,
//     accent: "pink",
//   },
//   {
//     id: 24,
//     title: "Professional Certificate in Project Management",
//     shortTitle: "Project Management",
//     category: "Business",
//     level: "Certificate",
//     duration: "8–20 Weeks",
//     fees: "₹8,000–₹75,000",
//     description: "Build practical skills in project planning, delivery, stakeholder communication and risk management.",
//     subjects: ["Planning", "Agile", "Risk Management"],
//     icon: SlidersHorizontal,
//     accent: "cyan",
//   },
// ];

// const accentStyles = {
//   blue: "bg-blue-50 text-blue-700 ring-blue-100",
//   violet: "bg-violet-50 text-violet-700 ring-violet-100",
//   amber: "bg-amber-50 text-amber-700 ring-amber-100",
//   emerald: "bg-emerald-50 text-emerald-700 ring-emerald-100",
//   pink: "bg-pink-50 text-pink-700 ring-pink-100",
//   rose: "bg-rose-50 text-rose-700 ring-rose-100",
//   slate: "bg-slate-100 text-slate-700 ring-slate-200",
//   orange: "bg-orange-50 text-orange-700 ring-orange-100",
//   cyan: "bg-cyan-50 text-cyan-700 ring-cyan-100",
//   teal: "bg-teal-50 text-teal-700 ring-teal-100",
// };

// const levels = ["All Levels", "Bachelor's", "Master's", "Doctorate", "Diploma", "Certificate", "Executive", "Short Course"];

// export default function CoursesPage() {
//   const [search, setSearch] = useState("");
//   const [activeCategory, setActiveCategory] = useState("All Programs");
//   const [activeLevel, setActiveLevel] = useState("All Levels");
//   const [showAll, setShowAll] = useState(false);

//   const filteredPrograms = useMemo(() => {
//     const query = search.trim().toLowerCase();
//     return programs.filter((program) => {
//       const matchesCategory = activeCategory === "All Programs" || program.category === activeCategory;
//       const matchesLevel = activeLevel === "All Levels" || program.level === activeLevel;
//       const searchable = [
//         program.title,
//         program.shortTitle,
//         program.category,
//         program.level,
//         ...program.subjects,
//       ].join(" ").toLowerCase();
//       return matchesCategory && matchesLevel && searchable.includes(query);
//     });
//   }, [search, activeCategory, activeLevel]);

//   const visiblePrograms = showAll ? filteredPrograms : filteredPrograms.slice(0, 9);
//   const hasFilters = search || activeCategory !== "All Programs" || activeLevel !== "All Levels";

//   const clearFilters = () => {
//     setSearch("");
//     setActiveCategory("All Programs");
//     setActiveLevel("All Levels");
//     setShowAll(false);
//   };

//   return (
//     <main className="min-h-screen bg-[#f7f8fa] text-[#172033]">
//       {/* Hero */}
//       <section className="relative isolate overflow-hidden bg-[#101c32] px-5 pb-16 pt-12 text-white md:pb-24 md:pt-16">
//         <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
//         <div className="pointer-events-none absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
//         <div className="relative mx-auto max-w-7xl">
//           <div className="mb-8 flex items-center gap-2 text-sm text-blue-100/80">
//             <GraduationCap size={19} />
//             <span>CampusSeat</span>
//             <span className="text-white/40">/</span>
//             <span>Explore Programs</span>
//           </div>

//           <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]">
//             <div>
//               <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-xs font-semibold tracking-wide text-blue-100">
//                 <Sparkles size={14} />
//                 FIND A PROGRAM THAT MOVES YOU FORWARD
//               </div>
//               <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
//                 Explore programs.
//                 <span className="mt-2 block text-blue-200">Discover your potential.</span>
//               </h1>
//               <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
//                 From your first degree to advanced research and career-focused learning,
//                 find an academic path that fits your ambitions.
//               </p>
//               <div className="mt-8 flex flex-wrap gap-3 text-sm">
//                 {["Undergraduate", "Postgraduate", "Doctorate", "Professional learning"].map((item) => (
//                   <span key={item} className="rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-slate-200">
//                     {item}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-3 sm:gap-4">
//               {[
//                 { value: "24+", label: "Program options" },
//                 { value: "10", label: "Study areas" },
//                 { value: "8", label: "Program levels" },
//                 { value: "1 goal", label: "Your next step" },
//               ].map((stat) => (
//                 <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur-sm">
//                   <p className="text-2xl font-semibold tracking-tight sm:text-3xl">{stat.value}</p>
//                   <p className="mt-1 text-xs text-slate-300 sm:text-sm">{stat.label}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Program directory */}
//       <section className="mx-auto max-w-7xl px-5 py-12 md:py-16">
//         <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
//           <div>
//             <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">Your next chapter starts here</p>
//             <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#172033] md:text-4xl">Explore study programs</h2>
//             <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 md:text-base">
//               Browse degrees, diplomas and professional courses across popular study disciplines.
//             </p>
//           </div>
//           <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 shadow-sm">
//             <span className="font-semibold text-[#172033]">{filteredPrograms.length}</span> programs available
//           </div>
//         </div>

//         {/* Search and level filter */}
//         <div className="mb-6 grid gap-3 md:grid-cols-[1fr_230px]">
//           <div className="relative">
//             <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
//             <input
//               type="search"
//               value={search}
//               onChange={(event) => {
//                 setSearch(event.target.value);
//                 setShowAll(false);
//               }}
//               placeholder="Search programs, subjects or keywords..."
//               className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
//             />
//             {search && (
//               <button onClick={() => setSearch("")} aria-label="Clear search" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700">
//                 <X size={18} />
//               </button>
//             )}
//           </div>
//           <select
//             value={activeLevel}
//             onChange={(event) => {
//               setActiveLevel(event.target.value);
//               setShowAll(false);
//             }}
//             className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm text-slate-700 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
//           >
//             {levels.map((level) => <option key={level} value={level}>{level}</option>)}
//           </select>
//         </div>

//         {/* Category filters */}
//         <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
//           {categories.map((category) => {
//             const active = activeCategory === category;
//             return (
//               <button
//                 key={category}
//                 type="button"
//                 onClick={() => {
//                   setActiveCategory(category);
//                   setShowAll(false);
//                 }}
//                 className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold transition ${
//                   active
//                     ? "bg-[#172b4d] text-white shadow-md shadow-blue-950/10"
//                     : "border border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-800"
//                 }`}
//               >
//                 {category}
//               </button>
//             );
//           })}
//         </div>

//         <div className="mb-5 flex items-center justify-between">
//           <p className="text-sm text-slate-500">
//             Showing <span className="font-semibold text-slate-800">{visiblePrograms.length}</span> of{" "}
//             <span className="font-semibold text-slate-800">{filteredPrograms.length}</span> programs
//           </p>
//           {hasFilters && (
//             <button onClick={clearFilters} className="text-sm font-semibold text-blue-700 hover:text-blue-900">
//               Clear filters
//             </button>
//           )}
//         </div>

//         {/* Cards */}
//         {visiblePrograms.length > 0 ? (
//           <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
//             {visiblePrograms.map((program) => {
//               const Icon = program.icon;
//               return (
//                 <article
//                   key={program.id}
//                   className="group flex min-h-[390px] flex-col rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_4px_18px_rgba(15,23,42,0.035)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.09)]"
//                 >
//                   <div className="flex items-start justify-between gap-3">
//                     <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ring-1 ${accentStyles[program.accent]}`}>
//                       <Icon size={26} strokeWidth={1.8} />
//                     </div>
//                     {program.tag ? (
//                       <span className="rounded-full bg-blue-50 px-3 py-1.5 text-[11px] font-bold text-blue-700">{program.tag}</span>
//                     ) : (
//                       <span className="rounded-full bg-slate-100 px-3 py-1.5 text-[11px] font-semibold text-slate-600">{program.level}</span>
//                     )}
//                   </div>

//                   <div className="mt-5">
//                     <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">{program.category}</p>
//                     <h3 className="mt-2 text-xl font-semibold leading-snug tracking-tight text-[#172033]">{program.title}</h3>
//                     <p className="mt-1 text-sm font-medium text-slate-400">{program.shortTitle}</p>
//                     <p className="mt-3 text-sm leading-6 text-slate-500">{program.description}</p>
//                   </div>

//                   <div className="mt-5 flex flex-wrap gap-2">
//                     {program.subjects.map((subject) => (
//                       <span key={subject} className="rounded-lg bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 ring-1 ring-slate-100">
//                         {subject}
//                       </span>
//                     ))}
//                   </div>

//                   <div className="mt-auto">
//                     <div className="mt-6 grid grid-cols-2 gap-3 border-t border-slate-100 pt-5">
//                       <div className="flex items-center gap-2 text-xs text-slate-500">
//                         <Clock3 size={16} className="shrink-0 text-slate-400" />
//                         <span>{program.duration}</span>
//                       </div>
//                       <div className="flex items-center gap-2 text-xs text-slate-500">
//                         <GraduationCap size={16} className="shrink-0 text-slate-400" />
//                         <span>{program.level}</span>
//                       </div>
//                     </div>
//                     <p className="mt-3 text-xs text-slate-500">
//                       <span className="font-semibold text-slate-700">Indicative fees:</span> {program.fees}
//                     </p>
//                     <Link
//                       href="/contact"
//                       className="mt-5 flex items-center justify-between rounded-xl bg-[#172b4d] px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-800"
//                     >
//                       Enquire about this program
//                       <ArrowRight size={18} className="transition group-hover:translate-x-1" />
//                     </Link>
//                   </div>
//                 </article>
//               );
//             })}
//           </div>
//         ) : (
//           <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
//             <BookOpen size={42} className="mx-auto text-slate-300" />
//             <h3 className="mt-4 text-xl font-semibold text-slate-800">No programs found</h3>
//             <p className="mt-2 text-sm text-slate-500">Try a different keyword, study area or program level.</p>
//             <button onClick={clearFilters} className="mt-6 rounded-xl bg-[#172b4d] px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800">
//               Show all programs
//             </button>
//           </div>
//         )}

//         {filteredPrograms.length > 9 && (
//           <div className="mt-10 flex justify-center">
//             <button
//               type="button"
//               onClick={() => setShowAll((value) => !value)}
//               className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800"
//             >
//               {showAll ? "Show fewer programs" : `View all ${filteredPrograms.length} programs`}
//               <ArrowRight size={17} className={showAll ? "-rotate-90" : "rotate-90"} />
//             </button>
//           </div>
//         )}
//       </section>

//       {/* Guidance CTA */}
//       <section className="mx-auto max-w-7xl px-5 pb-16">
//         <div className="relative overflow-hidden rounded-[2rem] bg-[#eaf1fb] p-8 md:p-12">
//           <div className="pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full bg-blue-200/60 blur-3xl" />
//           <div className="relative flex flex-col justify-between gap-7 md:flex-row md:items-center">
//             <div className="max-w-2xl">
//               <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-800">
//                 <GraduationCap size={14} /> Personalised guidance
//               </div>
//               <h2 className="mt-4 text-2xl font-semibold tracking-tight text-[#172b4d] md:text-3xl">
//                 Not sure which program is right for you?
//               </h2>
//               <p className="mt-3 text-sm leading-6 text-slate-600 md:text-base">
//                 Talk to our guidance team about your interests, eligibility and the next steps toward your academic goals.
//               </p>
//             </div>
//             <Link
//               href="/career-guidance"
//               className="inline-flex w-fit shrink-0 items-center gap-3 rounded-xl bg-[#172b4d] px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-950/10 transition hover:bg-blue-800"
//             >
//               Get career guidance <ArrowRight size={18} />
//             </Link>
//           </div>
//         </div>
//         <p className="mt-5 text-xs leading-5 text-slate-400">
//           Program availability, eligibility, duration and fees vary by institution, country and intake. Fee ranges are illustrative only and are not official quotations. Always verify details with the institution before applying.
//         </p>
//       </section>
//     </main>
//   );
// }





"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import {
  Search,
  GraduationCap,
  Clock3,
  IndianRupee,
  ArrowRight,
  BookOpen,
  Code2,
  BriefcaseBusiness,
  Palette,
  BarChart3,
  HeartPulse,
  Scale,
  FlaskConical,
  PenTool,
  Languages,
  Wrench,
  Microscope,
  Laptop,
  Award,
  SlidersHorizontal,
  X,
  Sparkles,
} from "lucide-react";

const categories = [
  "All Programs",
  "Technology",
  "Business",
  "Commerce",
  "Engineering",
  "Health Sciences",
  "Design",
  "Law",
  "Arts & Humanities",
  "Science",
  "Education",
];

const programs = [
  {
    id: 1,
    title: "Bachelor of Computer Applications",
    shortTitle: "BCA",
    category: "Technology",
    level: "Bachelor's",
    duration: "3–4 Years",
    fees: "₹30,000–₹1,50,000/year",
    description: "Build a strong foundation in programming, databases, web development and modern computing.",
    subjects: ["Programming", "Database Systems", "Web Development"],
    icon: Code2,
    accent: "blue",
    tag: "Popular choice",
  },
  {
    id: 2,
    title: "Bachelor of Technology",
    shortTitle: "B.Tech",
    category: "Engineering",
    level: "Bachelor's",
    duration: "4 Years",
    fees: "₹60,000–₹3,00,000/year",
    description: "Develop technical and problem-solving skills through engineering fundamentals and practical projects.",
    subjects: ["Computer Science", "Electronics", "Mechanical"],
    icon: Wrench,
    accent: "violet",
  },
  {
    id: 3,
    title: "Bachelor of Business Administration",
    shortTitle: "BBA",
    category: "Business",
    level: "Bachelor's",
    duration: "3–4 Years",
    fees: "₹40,000–₹2,00,000/year",
    description: "Learn management, marketing, entrepreneurship and the fundamentals of running an organisation.",
    subjects: ["Marketing", "Management", "Entrepreneurship"],
    icon: BriefcaseBusiness,
    accent: "amber",
  },
  {
    id: 4,
    title: "Bachelor of Commerce",
    shortTitle: "B.Com",
    category: "Commerce",
    level: "Bachelor's",
    duration: "3–4 Years",
    fees: "₹10,000–₹1,00,000/year",
    description: "Understand accounting, taxation, economics and financial decision-making.",
    subjects: ["Accounting", "Economics", "Taxation"],
    icon: IndianRupee,
    accent: "emerald",
  },
  {
    id: 5,
    title: "Bachelor of Design",
    shortTitle: "B.Des",
    category: "Design",
    level: "Bachelor's",
    duration: "4 Years",
    fees: "₹80,000–₹3,00,000/year",
    description: "Turn creative ideas into meaningful visual, product and digital experiences.",
    subjects: ["UI/UX", "Visual Design", "Product Design"],
    icon: Palette,
    accent: "pink",
  },
  {
    id: 6,
    title: "Bachelor of Science in Nursing",
    shortTitle: "B.Sc Nursing",
    category: "Health Sciences",
    level: "Bachelor's",
    duration: "4 Years",
    fees: "₹50,000–₹2,50,000/year",
    description: "Prepare for professional nursing practice through clinical learning and health sciences.",
    subjects: ["Clinical Practice", "Anatomy", "Patient Care"],
    icon: HeartPulse,
    accent: "rose",
  },
  {
    id: 7,
    title: "Bachelor of Laws",
    shortTitle: "LL.B",
    category: "Law",
    level: "Bachelor's",
    duration: "3 Years",
    fees: "₹30,000–₹2,00,000/year",
    description: "Study legal systems, constitutional principles, contracts and professional legal practice.",
    subjects: ["Constitutional Law", "Contracts", "Legal Research"],
    icon: Scale,
    accent: "slate",
  },
  {
    id: 8,
    title: "Bachelor of Arts",
    shortTitle: "B.A",
    category: "Arts & Humanities",
    level: "Bachelor's",
    duration: "3–4 Years",
    fees: "₹10,000–₹1,00,000/year",
    description: "Explore society, culture, communication and human thought across a range of disciplines.",
    subjects: ["Psychology", "Political Science", "English"],
    icon: Languages,
    accent: "orange",
  },
  {
    id: 9,
    title: "Bachelor of Science",
    shortTitle: "B.Sc",
    category: "Science",
    level: "Bachelor's",
    duration: "3–4 Years",
    fees: "₹20,000–₹1,50,000/year",
    description: "Build scientific knowledge through theory, laboratory work and analytical thinking.",
    subjects: ["Physics", "Chemistry", "Mathematics"],
    icon: FlaskConical,
    accent: "cyan",
  },
  {
    id: 10,
    title: "Bachelor of Education",
    shortTitle: "B.Ed",
    category: "Education",
    level: "Bachelor's",
    duration: "2 Years",
    fees: "₹25,000–₹1,20,000/year",
    description: "Develop teaching methods, classroom skills and an understanding of how students learn.",
    subjects: ["Pedagogy", "Learning Psychology", "Teaching Practice"],
    icon: BookOpen,
    accent: "teal",
  },
  {
    id: 11,
    title: "Master of Computer Applications",
    shortTitle: "MCA",
    category: "Technology",
    level: "Master's",
    duration: "2 Years",
    fees: "₹50,000–₹2,00,000/year",
    description: "Advance your skills in software engineering, application development and computing.",
    subjects: ["Software Engineering", "Cloud", "AI & ML"],
    icon: Laptop,
    accent: "blue",
    tag: "Career focused",
  },
  {
    id: 12,
    title: "Master of Business Administration",
    shortTitle: "MBA",
    category: "Business",
    level: "Master's",
    duration: "1–2 Years",
    fees: "₹1,00,000–₹5,00,000/year",
    description: "Strengthen strategic, financial and leadership skills for business and management roles.",
    subjects: ["Strategy", "Finance", "Leadership"],
    icon: BarChart3,
    accent: "amber",
  },
  {
    id: 13,
    title: "Master of Science in Data Science",
    shortTitle: "M.Sc Data Science",
    category: "Technology",
    level: "Master's",
    duration: "1–2 Years",
    fees: "₹60,000–₹3,00,000/year",
    description: "Learn to analyse complex data and build evidence-led solutions using statistical and computing methods.",
    subjects: ["Python", "Machine Learning", "Statistics"],
    icon: BarChart3,
    accent: "violet",
  },
  {
    id: 14,
    title: "Master of Technology",
    shortTitle: "M.Tech",
    category: "Engineering",
    level: "Master's",
    duration: "2 Years",
    fees: "₹50,000–₹2,50,000/year",
    description: "Specialise in an engineering discipline through advanced coursework, research and projects.",
    subjects: ["Advanced Computing", "Research", "Engineering"],
    icon: Wrench,
    accent: "violet",
  },
  {
    id: 15,
    title: "Master of Public Health",
    shortTitle: "MPH",
    category: "Health Sciences",
    level: "Master's",
    duration: "1–2 Years",
    fees: "₹70,000–₹3,00,000/year",
    description: "Explore population health, epidemiology, health policy and community wellbeing.",
    subjects: ["Epidemiology", "Health Policy", "Biostatistics"],
    icon: HeartPulse,
    accent: "rose",
  },
  {
    id: 16,
    title: "Doctor of Philosophy",
    shortTitle: "PhD",
    category: "Science",
    level: "Doctorate",
    duration: "3–6 Years",
    fees: "Varies by institution",
    description: "Conduct original research and contribute new knowledge to your chosen academic field.",
    subjects: ["Research Methods", "Dissertation", "Specialisation"],
    icon: Microscope,
    accent: "emerald",
  },
  {
    id: 17,
    title: "Doctor of Business Administration",
    shortTitle: "DBA",
    category: "Business",
    level: "Doctorate",
    duration: "3–5 Years",
    fees: "Varies by institution",
    description: "Apply advanced research and strategic thinking to complex organisational challenges.",
    subjects: ["Applied Research", "Leadership", "Strategy"],
    icon: BriefcaseBusiness,
    accent: "amber",
  },
  {
    id: 18,
    title: "Diploma in Computer Applications",
    shortTitle: "DCA",
    category: "Technology",
    level: "Diploma",
    duration: "6–12 Months",
    fees: "₹8,000–₹40,000",
    description: "Gain practical computer, office productivity and introductory application skills.",
    subjects: ["Computer Basics", "Office Tools", "Internet"],
    icon: Laptop,
    accent: "blue",
  },
  {
    id: 19,
    title: "Postgraduate Diploma in Management",
    shortTitle: "PGDM",
    category: "Business",
    level: "Diploma",
    duration: "1–2 Years",
    fees: "₹1,00,000–₹8,00,000/year",
    description: "Build applied management capabilities through business cases, projects and industry learning.",
    subjects: ["Marketing", "Operations", "Finance"],
    icon: BriefcaseBusiness,
    accent: "amber",
  },
  {
    id: 20,
    title: "Certificate in Cybersecurity",
    shortTitle: "Cybersecurity",
    category: "Technology",
    level: "Certificate",
    duration: "8–24 Weeks",
    fees: "₹5,000–₹60,000",
    description: "Understand security fundamentals, network protection, threat awareness and safe computing.",
    subjects: ["Network Security", "Threats", "Risk Basics"],
    icon: Award,
    accent: "emerald",
  },
  {
    id: 21,
    title: "Certificate in Digital Marketing",
    shortTitle: "Digital Marketing",
    category: "Business",
    level: "Certificate",
    duration: "8–16 Weeks",
    fees: "₹5,000–₹50,000",
    description: "Learn digital campaign planning, search marketing, content strategy and performance analytics.",
    subjects: ["SEO", "Social Media", "Analytics"],
    icon: Sparkles,
    accent: "pink",
  },
  {
    id: 22,
    title: "Executive Leadership Programme",
    shortTitle: "Executive Leadership",
    category: "Business",
    level: "Executive",
    duration: "6–16 Weeks",
    fees: "Varies by institution",
    description: "Designed for working professionals seeking to strengthen leadership and decision-making skills.",
    subjects: ["Leadership", "Strategy", "Decision-making"],
    icon: Award,
    accent: "slate",
  },
  {
    id: 23,
    title: "Short Course in UI/UX Design",
    shortTitle: "UI/UX Design",
    category: "Design",
    level: "Short Course",
    duration: "4–12 Weeks",
    fees: "₹5,000–₹45,000",
    description: "Learn user research, wireframing, prototyping and the fundamentals of digital product design.",
    subjects: ["Figma", "Wireframing", "Prototyping"],
    icon: PenTool,
    accent: "pink",
  },
  {
    id: 24,
    title: "Professional Certificate in Project Management",
    shortTitle: "Project Management",
    category: "Business",
    level: "Certificate",
    duration: "8–20 Weeks",
    fees: "₹8,000–₹75,000",
    description: "Build practical skills in project planning, delivery, stakeholder communication and risk management.",
    subjects: ["Planning", "Agile", "Risk Management"],
    icon: SlidersHorizontal,
    accent: "cyan",
  },
];

const accentStyles = {
  blue: "bg-blue-50 text-blue-700 ring-blue-100",
  violet: "bg-violet-50 text-violet-700 ring-violet-100",
  amber: "bg-amber-50 text-amber-700 ring-amber-100",
  emerald: "bg-emerald-50 text-emerald-700 ring-emerald-100",
  pink: "bg-pink-50 text-pink-700 ring-pink-100",
  rose: "bg-rose-50 text-rose-700 ring-rose-100",
  slate: "bg-slate-100 text-slate-700 ring-slate-200",
  orange: "bg-orange-50 text-orange-700 ring-orange-100",
  cyan: "bg-cyan-50 text-cyan-700 ring-cyan-100",
  teal: "bg-teal-50 text-teal-700 ring-teal-100",
};

const levels = ["All Levels", "Bachelor's", "Master's", "Doctorate", "Diploma", "Certificate", "Executive", "Short Course"];


export default function CoursesPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Programs");
  const [activeLevel, setActiveLevel] = useState("All Levels");
  const [showAll, setShowAll] = useState(false);

  const filteredPrograms = useMemo(() => {
    const query = search.trim().toLowerCase();
    return programs.filter((program) => {
      const matchesCategory = activeCategory === "All Programs" || program.category === activeCategory;
      const matchesLevel = activeLevel === "All Levels" || program.level === activeLevel;
      const searchable = [program.title, program.shortTitle, program.category, program.level, ...program.subjects]
        .join(" ").toLowerCase();
      return matchesCategory && matchesLevel && searchable.includes(query);
    });
  }, [search, activeCategory, activeLevel]);

  const visiblePrograms = showAll ? filteredPrograms : filteredPrograms.slice(0, 9);
  const hasFilters = search || activeCategory !== "All Programs" || activeLevel !== "All Levels";

  const clearFilters = () => {
    setSearch("");
    setActiveCategory("All Programs");
    setActiveLevel("All Levels");
    setShowAll(false);
  };

  const levelCounts = levels.slice(1).map((level) => ({
    level,
    count: programs.filter((program) => program.level === level).length,
  }));

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f8f5] text-[#18251f]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#102a24] text-white">
        <div className="absolute inset-0 -z-10 opacity-[0.13]" style={{ backgroundImage: "radial-gradient(#d9e8d9 0.8px, transparent 0.8px)", backgroundSize: "18px 18px" }} />
        <div className="absolute -right-32 -top-44 -z-10 h-[34rem] w-[34rem] rounded-full bg-[#6ca88c]/25 blur-3xl" />
        <div className="absolute -bottom-56 left-[28%] -z-10 h-[30rem] w-[30rem] rounded-full bg-[#d6b77b]/10 blur-3xl" />

        <div className="mx-auto max-w-7xl px-5 pb-16 pt-8 md:pb-24 md:pt-12">
          <div className="flex items-center gap-2 text-xs font-medium tracking-wide text-[#c7d8cf]">
            <span>CampusSeat</span><span className="text-white/35">/</span><span className="text-white">Explore programs</span>
          </div>

          <div className="mt-12 grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.17em] text-[#d7e8dd]">
                <Sparkles size={14} /> Find your direction
              </div>
              <h1 className="mt-6 max-w-3xl text-[2.7rem] font-semibold leading-[1.04] tracking-[-0.055em] sm:text-6xl lg:text-[4.35rem]">
                A world of learning.
                <span className="mt-2 block font-serif font-normal italic text-[#b8d5c1]">One next step.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-[#d1ddd6] md:text-lg">
                Explore degrees, diplomas and career-focused learning across disciplines.
                Find a program that fits your interests and where you want to go next.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="#program-directory" className="inline-flex items-center gap-3 rounded-full bg-[#d9e9dc] px-6 py-3.5 text-sm font-semibold text-[#17372b] transition hover:-translate-y-0.5 hover:bg-white">
                  Explore programs <ArrowRight size={17} />
                </a>
                <Link href="/career-guidance" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
                  Get guidance
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/15 pt-6 text-sm text-[#d1ddd6]">
                <span className="flex items-center gap-2"><GraduationCap size={17} className="text-[#b8d5c1]" /> Undergraduate to doctorate</span>
                <span className="flex items-center gap-2"><BookOpen size={16} className="text-[#b8d5c1]" /> 10 study areas</span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[510px]">
              <div className="absolute -left-5 top-12 hidden h-24 w-24 rounded-full border border-[#b8d5c1]/30 lg:block" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#f1f2e9] p-5 text-[#18251f] shadow-2xl shadow-black/20 sm:p-7">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#68796e]">Your learning map</span>
                  <span className="rounded-full bg-[#dce9dc] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#315b45]">Explore</span>
                </div>
                <div className="mt-7 grid grid-cols-2 gap-3">
                  <div className="col-span-2 rounded-2xl bg-[#183a2e] p-5 text-white">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-xs text-[#b9d2c2]">Start with what inspires you</p>
                        <p className="mt-2 text-2xl font-semibold tracking-tight">Find your field.</p>
                      </div>
                      <div className="rounded-xl bg-white/10 p-3"><GraduationCap size={23} /></div>
                    </div>
                    <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-white/15">
                      <div className="h-full w-[72%] rounded-full bg-[#b8d5c1]" />
                    </div>
                    <p className="mt-2 text-[11px] text-[#c8d9cf]">Explore possibilities at your own pace</p>
                  </div>
                  {[
                    { icon: Code2, label: "Technology", note: "Build what's next", tint: "bg-[#e3ecdf]" },
                    { icon: BriefcaseBusiness, label: "Business", note: "Lead with purpose", tint: "bg-[#f1e8d7]" },
                    { icon: Palette, label: "Creative arts", note: "Make ideas real", tint: "bg-[#eee4e9]" },
                    { icon: FlaskConical, label: "Science", note: "Ask bigger questions", tint: "bg-[#e2e9ef]" },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className={`${item.tint} rounded-2xl p-4`}>
                        <Icon size={21} className="text-[#315b45]" />
                        <p className="mt-5 text-sm font-semibold">{item.label}</p>
                        <p className="mt-1 text-[11px] text-[#718077]">{item.note}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-4 flex items-center justify-between rounded-2xl border border-[#dfe4da] bg-white/70 px-4 py-3">
                  <div>
                    <p className="text-xs font-semibold">A path for every ambition</p>
                    <p className="mt-1 text-[11px] text-[#7b877e]">Degrees · Diplomas · Short courses</p>
                  </div>
                  <div className="flex -space-x-2">
                    {["bg-[#b8d5c1]", "bg-[#e6d1a9]", "bg-[#d9c4d2]"].map((color, index) => (
                      <span key={index} className={`h-8 w-8 rounded-full border-2 border-[#f1f2e9] ${color}`} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-5 -right-3 hidden rounded-2xl bg-[#d9e9dc] px-5 py-3 text-[#17372b] shadow-xl sm:block">
                <p className="text-xl font-semibold">24+</p>
                <p className="text-[10px] font-semibold uppercase tracking-wider">Program options</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK LEVEL STRIP */}
      <section className="relative z-10 mx-auto -mt-7 max-w-7xl px-5">
        <div className="grid overflow-hidden rounded-2xl border border-[#e7e9e2] bg-white shadow-[0_14px_40px_rgba(28,48,37,0.07)] sm:grid-cols-2 lg:grid-cols-4">
          {[
            { value: "Bachelor's", label: "Start your academic journey" },
            { value: "Master's", label: "Take your expertise further" },
            { value: "Doctorate", label: "Create new knowledge" },
            { value: "Professional", label: "Build practical skills" },
          ].map((item, index) => (
            <div key={item.value} className={`px-5 py-5 ${index ? "border-t border-[#edf0e9] sm:border-l sm:border-t-0" : ""}`}>
              <p className="text-sm font-semibold text-[#203b2e]">{item.value}</p>
              <p className="mt-1 text-xs text-[#879188]">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DIRECTORY */}
      <section id="program-directory" className="mx-auto max-w-7xl px-5 pb-16 pt-16 md:pb-24 md:pt-24">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#64856d]">The program directory</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#1c3026] md:text-4xl">Find the right fit.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#77837a] md:text-base">
              Search by subject, explore a study area or narrow your options by qualification level.
            </p>
          </div>
          <div className="flex items-center gap-3 text-sm text-[#7a877d]">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e6eee5] text-[#315b45]"><BookOpen size={18} /></span>
            <span><strong className="text-[#203b2e]">{filteredPrograms.length}</strong> programs to explore</span>
          </div>
        </div>

        <div className="mt-9 rounded-[1.6rem] border border-[#e5e9e1] bg-white p-4 shadow-[0_8px_30px_rgba(28,48,37,0.04)] sm:p-5">
          <div className="grid gap-3 md:grid-cols-[1fr_230px]">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94a097]" size={19} />
              <input
                type="search"
                value={search}
                onChange={(event) => { setSearch(event.target.value); setShowAll(false); }}
                placeholder="What would you like to study?"
                className="w-full rounded-xl border border-[#e7ebe5] bg-[#fafbf8] py-4 pl-12 pr-11 text-sm text-[#24372c] outline-none transition placeholder:text-[#a1aaa2] focus:border-[#8ba994] focus:bg-white focus:ring-4 focus:ring-[#e8f0e8]"
              />
              {search && (
                <button type="button" onClick={() => setSearch("")} aria-label="Clear search" className="absolute right-4 top-1/2 -translate-y-1/2 text-[#849087] hover:text-[#203b2e]">
                  <X size={17} />
                </button>
              )}
            </div>
            <div className="relative">
              <SlidersHorizontal className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#839087]" size={17} />
              <select
                value={activeLevel}
                onChange={(event) => { setActiveLevel(event.target.value); setShowAll(false); }}
                className="w-full appearance-none rounded-xl border border-[#e7ebe5] bg-[#fafbf8] py-4 pl-11 pr-4 text-sm text-[#405248] outline-none focus:border-[#8ba994] focus:ring-4 focus:ring-[#e8f0e8]"
              >
                {levels.map((level) => <option key={level} value={level}>{level}</option>)}
              </select>
            </div>
          </div>

          <div className="mt-5">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#929d93]">Browse by study area</p>
              {hasFilters && <button type="button" onClick={clearFilters} className="text-xs font-semibold text-[#547b5e] hover:text-[#203b2e]">Reset filters</button>}
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => { setActiveCategory(category); setShowAll(false); }}
                  className={`shrink-0 rounded-full px-4 py-2.5 text-xs font-semibold transition ${
                    activeCategory === category
                      ? "bg-[#244b39] text-white shadow-sm"
                      : "border border-[#e6eae3] bg-white text-[#718076] hover:border-[#b7cbb9] hover:bg-[#f4f8f2] hover:text-[#315b45]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-5 mt-8 flex items-center justify-between">
          <p className="text-xs text-[#8a958c]">Showing <span className="font-semibold text-[#30483a]">{visiblePrograms.length}</span> of {filteredPrograms.length}</p>
          <p className="hidden text-xs text-[#9aa39b] sm:block">Select a program to enquire</p>
        </div>

        {visiblePrograms.length ? (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {visiblePrograms.map((program, index) => {
              const Icon = program.icon;
              return (
                <article key={program.id} className="group relative flex min-h-[390px] flex-col overflow-hidden rounded-[1.6rem] border border-[#e5e9e1] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#b9cdbb] hover:shadow-[0_20px_50px_rgba(31,60,42,0.10)]">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#315b45] via-[#9bb99c] to-[#e4d2a9] opacity-0 transition group-hover:opacity-100" />
                  <div className="flex items-start justify-between gap-3">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ring-1 ${accentStyles[program.accent as keyof typeof accentStyles] || "bg-[#edf3ec] text-[#315b45] ring-[#dce8dc]"}`}>
                      <Icon size={25} strokeWidth={1.8} />
                    </div>
                    <span className="rounded-full bg-[#f3f6f1] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#607565]">{program.level}</span>
                  </div>

                  <div className="mt-6">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#77927b]">{program.category}</span>
                      {program.tag && <><span className="h-1 w-1 rounded-full bg-[#c5cec4]" /><span className="text-[10px] font-semibold text-[#b08b4f]">{program.tag}</span></>}
                    </div>
                    <h3 className="mt-2 text-xl font-semibold leading-snug tracking-[-0.025em] text-[#20372a]">{program.title}</h3>
                    <p className="mt-1 text-xs font-semibold tracking-wide text-[#a0aaa0]">{program.shortTitle}</p>
                    <p className="mt-4 text-sm leading-6 text-[#78847a]">{program.description}</p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {program.subjects.map((subject) => (
                      <span key={subject} className="rounded-lg border border-[#edf0ea] bg-[#f8faf6] px-2.5 py-1.5 text-[10px] font-medium text-[#68776c]">{subject}</span>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <div className="mt-6 grid grid-cols-2 gap-3 border-t border-[#edf0ea] pt-5">
                      <div className="flex items-center gap-2 text-xs text-[#7c897f]"><Clock3 size={15} className="text-[#8fa293]" />{program.duration}</div>
                      <div className="flex items-center gap-2 text-xs text-[#7c897f]"><GraduationCap size={16} className="text-[#8fa293]" />{program.level}</div>
                    </div>
                    <p className="mt-3 text-[11px] text-[#929c93]"><span className="font-semibold text-[#627368]">Indicative fees:</span> {program.fees}</p>
                    <Link href="/contact" className="mt-5 flex items-center justify-between rounded-xl bg-[#244b39] px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-[#173a2b]">
                      Enquire about program <ArrowRight size={17} className="transition group-hover:translate-x-1" />
                    </Link>
                  </div>
                  <span className="pointer-events-none absolute right-6 top-[5.5rem] text-[10px] font-medium tracking-widest text-[#d6ddd5]">0{index + 1}</span>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="rounded-[1.6rem] border border-dashed border-[#cbd7ca] bg-white px-6 py-16 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#edf3ec] text-[#547b5e]"><BookOpen size={25} /></div>
            <h3 className="mt-5 text-xl font-semibold text-[#20372a]">No programs match your search</h3>
            <p className="mt-2 text-sm text-[#829087]">Try another keyword or clear the filters to see all programs.</p>
            <button type="button" onClick={clearFilters} className="mt-6 rounded-full bg-[#244b39] px-6 py-3 text-sm font-semibold text-white hover:bg-[#173a2b]">Show all programs</button>
          </div>
        )}

        {filteredPrograms.length > 9 && (
          <div className="mt-10 flex justify-center">
            <button type="button" onClick={() => setShowAll((value) => !value)} className="inline-flex items-center gap-3 rounded-full border border-[#cfdacf] bg-white px-7 py-3.5 text-sm font-semibold text-[#315b45] transition hover:border-[#78977e] hover:bg-[#f1f6ef]">
              {showAll ? "Show fewer programs" : `Explore all ${filteredPrograms.length} programs`}
              <ArrowRight size={17} className={showAll ? "-rotate-90" : "rotate-90"} />
            </button>
          </div>
        )}
      </section>

      {/* GUIDANCE CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-16 md:pb-24">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#e7eee4] px-7 py-9 md:px-12 md:py-12">
          <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full border-[35px] border-white/30" />
          <div className="absolute -right-4 -bottom-36 h-72 w-72 rounded-full bg-[#c9dcc9]/60 blur-2xl" />
          <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#52765a]"><GraduationCap size={14} /> Personalised support</span>
              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#203b2e] md:text-4xl">Big goals begin with the right guidance.</h2>
              <p className="mt-4 max-w-xl text-sm leading-6 text-[#687a6d] md:text-base">Not sure which course or qualification suits you? Speak with our guidance team and take the next step with confidence.</p>
            </div>
            <Link href="/career-guidance" className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-[#244b39] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#244b39]/15 transition hover:-translate-y-0.5 hover:bg-[#173a2b]">
              Talk to an advisor <ArrowRight size={18} />
            </Link>
          </div>
        </div>
        <p className="mt-5 max-w-4xl text-[11px] leading-5 text-[#9aa49a]">
          Program availability, eligibility, duration and fees vary by institution, country and intake. Fee ranges are illustrative only and are not official quotations. Always confirm details with the institution before applying.
        </p>
      </section>
    </main>
  );
}
