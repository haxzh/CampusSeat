
// "use client";

// import { useMemo, useState } from "react";
// import Link from "next/link";
// import {
//   Search, SlidersHorizontal, ChevronDown, ChevronRight,
//   Clock3, Globe2, Star, ArrowUpRight, Bookmark,
//   BookOpen, Code2, Brain, Palette, BriefcaseBusiness,
//   ShieldCheck, Database, Megaphone, Cloud, Smartphone,
//   X, Check, GraduationCap, Filter, Sparkles
// } from "lucide-react";

// const courses = [
//   {
//     id: 1,
//     title: "Full Stack Web Development",
//     category: "Technology",
//     industry: "IT & Software",
//     provider: "Tech Academy",
//     duration: "6 Months",
//     hours: "240 Hours",
//     mode: "Online",
//     price: "Free",
//     rating: 4.8,
//     reviews: 1240,
//     language: "English",
//     level: "Beginner",
//     image: "photo-1498050108023-c5249f4df085",
//     tags: ["HTML", "CSS", "JavaScript", "React"],
//     color: "#e5f1ed",
//   },
//   {
//     id: 2,
//     title: "Artificial Intelligence",
//     category: "Technology",
//     industry: "IT & Software",
//     provider: "Digital Skills Institute",
//     duration: "4 Months",
//     hours: "160 Hours",
//     mode: "Online",
//     price: "Free",
//     rating: 4.9,
//     reviews: 980,
//     language: "English",
//     level: "Intermediate",
//     image: "photo-1677442136019-21780ecad995",
//     tags: ["AI", "Python", "Deep Learning"],
//     color: "#e9e8fa",
//   },
//   {
//     id: 3,
//     title: "Data Analytics & Visualization",
//     category: "Technology",
//     industry: "IT & Software",
//     provider: "Skill Development Centre",
//     duration: "3 Months",
//     hours: "120 Hours",
//     mode: "Online",
//     price: "Free",
//     rating: 4.7,
//     reviews: 760,
//     language: "English",
//     level: "Beginner",
//     image: "photo-1551288049-bebda4e38f71",
//     tags: ["Excel", "SQL", "Power BI"],
//     color: "#e6eefb",
//   },
//   {
//     id: 4,
//     title: "Digital Marketing Masterclass",
//     category: "Business",
//     industry: "Marketing",
//     provider: "Growth Learning Hub",
//     duration: "2 Months",
//     hours: "80 Hours",
//     mode: "Online",
//     price: "Free",
//     rating: 4.6,
//     reviews: 530,
//     language: "Hindi",
//     level: "Beginner",
//     image: "photo- digital",
//     tags: ["SEO", "Social Media", "Ads"],
//     color: "#f8e9df",
//   },
//   {
//     id: 5,
//     title: "Cybersecurity Fundamentals",
//     category: "Technology",
//     industry: "IT & Software",
//     provider: "Cyber Learning Centre",
//     duration: "4 Months",
//     hours: "150 Hours",
//     mode: "Online",
//     price: "Paid",
//     rating: 4.9,
//     reviews: 670,
//     language: "English",
//     level: "Intermediate",
//     image: "photo-1550751827-4bd374c3f58b",
//     tags: ["Networking", "Security", "Ethical Hacking"],
//     color: "#e6edf5",
//   },
//   {
//     id: 6,
//     title: "UI/UX Design Professional",
//     category: "Design",
//     industry: "Creative",
//     provider: "Creative Skills Academy",
//     duration: "3 Months",
//     hours: "100 Hours",
//     mode: "Online",
//     price: "Paid",
//     rating: 4.8,
//     reviews: 410,
//     language: "English",
//     level: "Beginner",
//     image: "photo-1561070791-2526d30994b5",
//     tags: ["Figma", "Wireframing", "Prototyping"],
//     color: "#f1e9f7",
//   },
//   {
//     id: 7,
//     title: "Python Programming",
//     category: "Technology",
//     industry: "IT & Software",
//     provider: "Tech Academy",
//     duration: "3 Months",
//     hours: "120 Hours",
//     mode: "Online",
//     price: "Free",
//     rating: 4.8,
//     reviews: 1100,
//     language: "Hindi",
//     level: "Beginner",
//     image: "photo-1526379095098-d400fd0bf935",
//     tags: ["Python", "Programming", "Projects"],
//     color: "#e9f0fa",
//   },
//   {
//     id: 8,
//     title: "Cloud Computing & AWS",
//     category: "Technology",
//     industry: "IT & Software",
//     provider: "Cloud Skills Institute",
//     duration: "4 Months",
//     hours: "140 Hours",
//     mode: "Online",
//     price: "Paid",
//     rating: 4.7,
//     reviews: 390,
//     language: "English",
//     level: "Intermediate",
//     image: "photo-1451187580459-43490279c0fa",
//     tags: ["AWS", "Cloud", "DevOps"],
//     color: "#e5f0f7",
//   },
//   {
//     id: 9,
//     title: "Business & Entrepreneurship",
//     category: "Business",
//     industry: "Management",
//     provider: "Entrepreneurship Centre",
//     duration: "2 Months",
//     hours: "75 Hours",
//     mode: "Hybrid",
//     price: "Free",
//     rating: 4.5,
//     reviews: 290,
//     language: "Hindi",
//     level: "Beginner",
//     image: "photo-1460925895917-afdab827c52f",
//     tags: ["Business", "Startup", "Finance"],
//     color: "#f5eddf",
//   },
//   {
//     id: 10,
//     title: "Graphic Design & Branding",
//     category: "Design",
//     industry: "Creative",
//     provider: "Creative Skills Academy",
//     duration: "2 Months",
//     hours: "90 Hours",
//     mode: "Online",
//     price: "Free",
//     rating: 4.6,
//     reviews: 320,
//     language: "English",
//     level: "Beginner",
//     image: "photo-1626785774573-4b799315345d",
//     tags: ["Photoshop", "Illustrator", "Branding"],
//     color: "#f7e9e5",
//   },
//   {
//     id: 11,
//     title: "Machine Learning",
//     category: "Technology",
//     industry: "IT & Software",
//     provider: "AI Learning Academy",
//     duration: "5 Months",
//     hours: "180 Hours",
//     mode: "Online",
//     price: "Paid",
//     rating: 4.9,
//     reviews: 520,
//     language: "English",
//     level: "Advanced",
//     image: "photo-1518770660439-4636190af475",
//     tags: ["Python", "ML", "AI"],
//     color: "#e7eafa",
//   },
//   {
//     id: 12,
//     title: "Mobile App Development",
//     category: "Technology",
//     industry: "IT & Software",
//     provider: "Tech Academy",
//     duration: "4 Months",
//     hours: "150 Hours",
//     mode: "Online",
//     price: "Free",
//     rating: 4.7,
//     reviews: 450,
//     language: "English",
//     level: "Intermediate",
//     image: "photo-1512941937669-90a1b58e7e9a",
//     tags: ["React Native", "Flutter", "Mobile"],
//     color: "#e4f1ed",
//   },
// ];

// const imageUrl = (id) =>
//   `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=85`;

// const categories = [
//   { name: "All Courses", icon: BookOpen },
//   { name: "Technology", icon: Code2 },
//   { name: "Business", icon: BriefcaseBusiness },
//   { name: "Design", icon: Palette },
// ];

// const filterGroups = [
//   {
//     title: "Industry",
//     options: ["IT & Software", "Marketing", "Creative", "Management"],
//   },
//   {
//     title: "Duration",
//     options: ["Less than 1 Month", "1–3 Months", "3–6 Months", "6+ Months"],
//   },
//   {
//     title: "Learning Mode",
//     options: ["Online", "Offline", "Hybrid"],
//   },
//   {
//     title: "Price",
//     options: ["Free", "Paid"],
//   },
//   {
//     title: "Course Level",
//     options: ["Beginner", "Intermediate", "Advanced"],
//   },
//   {
//     title: "Language",
//     options: ["English", "Hindi"],
//   },
// ];

// function CourseCard({ course, selected, onCompare, saved, onSave }) {
//   return (
//     <article className="group overflow-hidden rounded-[20px] border border-[#e9e8e2] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(28,53,47,0.10)]">
//       <div className="relative h-[190px] overflow-hidden bg-[#eef1eb]">
//         <img
//           src={imageUrl(course.image)}
//           alt={course.title}
//           loading="lazy"
//           className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />

//         <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-2 text-[10px] font-bold text-[#171717] shadow-sm">
//           {course.mode}
//         </span>

//         <span className={`absolute right-0 top-0 rounded-bl-xl px-5 py-3 text-[11px] font-bold text-white ${course.price === "Free" ? "bg-[#23844e]" : "bg-[#171717]"}`}>
//           {course.price}
//         </span>

//         <button
//           onClick={() => onSave(course.id)}
//           aria-label="Save course"
//           className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#171717] shadow-md transition hover:bg-[#171717] hover:text-white"
//         >
//           <Bookmark size={16} fill={saved ? "currentColor" : "none"} />
//         </button>
//       </div>

//       <div className="p-5">
//         <div className="mb-3 flex items-center justify-between gap-2">
//           <span className="text-[10px] font-bold uppercase tracking-[0.13em] text-[#b17838]">
//             {course.category}
//           </span>
//           <span className="flex items-center gap-1 text-[11px] font-semibold text-[#263b34]">
//             <Star size={13} fill="#e9aa42" stroke="#e9aa42" />
//             {course.rating}
//             <span className="font-normal text-[#96968d]">({course.reviews})</span>
//           </span>
//         </div>

//         <h3 className="min-h-[48px] text-[17px] font-bold leading-snug tracking-[-0.025em] text-[#171717]">
//           {course.title}
//         </h3>

//         <p className="mt-2 text-[11px] text-[#92948c]">
//           By {course.provider}
//         </p>

//         <div className="mt-5 grid grid-cols-2 gap-y-3 border-y border-[#efeee9] py-4 text-[11px] text-[#777d76]">
//           <span className="flex items-center gap-2">
//             <Clock3 size={14} /> {course.duration}
//           </span>
//           <span className="flex items-center gap-2">
//             <BookOpen size={14} /> {course.hours}
//           </span>
//           <span className="flex items-center gap-2">
//             <Globe2 size={14} /> {course.language}
//           </span>
//           <span className="flex items-center gap-2">
//             <GraduationCap size={15} /> {course.level}
//           </span>
//         </div>

//         <div className="mt-4 flex flex-wrap gap-1.5">
//           {course.tags.slice(0, 3).map((tag) => (
//             <span key={tag} className="rounded-full bg-[#f5f5f0] px-2.5 py-1.5 text-[9px] font-medium text-[#6e766f]">
//               {tag}
//             </span>
//           ))}
//         </div>

//         <div className="mt-5 flex items-center justify-between gap-2">
//           <Link
//             href={`/skillbase/${course.id}`}
//             className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#171717] px-4 py-3 text-[11px] font-bold text-white transition hover:bg-[#77776f]"
//           >
//             View course <ArrowUpRight size={15} />
//           </Link>

//           <label className="flex cursor-pointer items-center gap-1.5 text-[10px] text-[#777d76]">
//             <input
//               type="checkbox"
//               checked={selected}
//               onChange={() => onCompare(course.id)}
//               className="h-4 w-4 accent-[#77776f]"
//             />
//             Compare
//           </label>
//         </div>
//       </div>
//     </article>
//   );
// }

// function FilterGroup({ group, selected, onToggle }) {
//   const [open, setOpen] = useState(true);

//   return (
//     <div className="border-b border-[#eeede7] py-4">
//       <button
//         onClick={() => setOpen(!open)}
//         className="flex w-full items-center justify-between text-left"
//       >
//         <span className="text-[13px] font-bold text-[#263b34]">{group.title}</span>
//         <ChevronDown size={16} className={`text-[#92948c] transition-transform ${open ? "" : "-rotate-90"}`} />
//       </button>

//       {open && (
//         <div className="mt-4 space-y-3">
//           {group.options.map((option) => (
//             <label key={option} className="flex cursor-pointer items-center gap-3 text-[12px] text-[#747a73] hover:text-[#171717]">
//               <input
//                 type="checkbox"
//                 checked={selected.includes(option)}
//                 onChange={() => onToggle(option)}
//                 className="h-4 w-4 rounded accent-[#77776f]"
//               />
//               {option}
//             </label>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default function SkillbasePage() {
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("All Courses");
//   const [filters, setFilters] = useState({});
//   const [sort, setSort] = useState("popular");
//   const [compare, setCompare] = useState([]);
//   const [saved, setSaved] = useState([]);
//   const [mobileFilters, setMobileFilters] = useState(false);

//   const toggleFilter = (key, value) => {
//     setFilters((prev) => {
//       const values = prev[key] || [];
//       return {
//         ...prev,
//         [key]: values.includes(value)
//           ? values.filter((item) => item !== value)
//           : [...values, value],
//       };
//     });
//   };

//   const filteredCourses = useMemo(() => {
//     let result = courses.filter((course) => {
//       const query = search.toLowerCase();

//       const matchesSearch =
//         course.title.toLowerCase().includes(query) ||
//         course.provider.toLowerCase().includes(query) ||
//         course.tags.some((tag) => tag.toLowerCase().includes(query));

//       const matchesCategory =
//         category === "All Courses" || course.category === category;

//       const matchesFilters = filterGroups.every((group) => {
//         const active = filters[group.title] || [];
//         if (!active.length) return true;

//         if (group.title === "Industry") return active.includes(course.industry);
//         if (group.title === "Learning Mode") return active.includes(course.mode);
//         if (group.title === "Price") return active.includes(course.price);
//         if (group.title === "Course Level") return active.includes(course.level);
//         if (group.title === "Language") return active.includes(course.language);

//         if (group.title === "Duration") {
//           const months = parseInt(course.duration);
//           return active.some((item) => {
//             if (item === "Less than 1 Month") return months < 1;
//             if (item === "1–3 Months") return months >= 1 && months <= 3;
//             if (item === "3–6 Months") return months >= 3 && months <= 6;
//             return months > 6;
//           });
//         }
//         return true;
//       });

//       return matchesSearch && matchesCategory && matchesFilters;
//     });

//     if (sort === "rating") result.sort((a, b) => b.rating - a.rating);
//     if (sort === "name") result.sort((a, b) => a.title.localeCompare(b.title));
//     if (sort === "popular") result.sort((a, b) => b.reviews - a.reviews);

//     return result;
//   }, [search, category, filters, sort]);

//   const toggleCompare = (id) => {
//     setCompare((prev) =>
//       prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id].slice(-3)
//     );
//   };

//   const toggleSave = (id) => {
//     setSaved((prev) =>
//       prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
//     );
//   };

//   const clearFilters = () => {
//     setFilters({});
//     setCategory("All Courses");
//     setSearch("");
//   };

//   return (
//     <main className="min-h-screen bg-[#f7f7f3] text-[#171717]">
//       {/* Hero */}
//       <section className="relative overflow-hidden bg-[#171717]">
//         <div className="absolute -right-24 -top-40 h-[450px] w-[450px] rounded-full bg-[#77776f]/20 blur-3xl" />
//         <div className="absolute -bottom-40 left-1/3 h-[350px] w-[350px] rounded-full bg-[#b18b52]/15 blur-3xl" />

//         <div className="relative mx-auto max-w-[1500px] px-5 py-14 sm:px-8 sm:py-20 lg:px-14">
//           <div className="max-w-3xl">
//             <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#c8dfd3]">
//               <Sparkles size={13} /> Skill-based education
//             </div>

//             <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
//               Learn skills.
//               <span className="block font-serif font-normal italic text-[#ededE7]">
//                 Build your future.
//               </span>
//             </h1>

//             <p className="mt-6 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
//               Explore practical courses, learn in-demand skills and prepare
//               yourself for the opportunities of tomorrow.
//             </p>

//             <div className="mt-9 flex flex-wrap gap-3 text-[11px] font-semibold text-white/80">
//               <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">12+ Courses</span>
//               <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">Multiple Skill Areas</span>
//               <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">Online & Hybrid</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Main listing */}
//       <section className="mx-auto max-w-[1500px] px-5 py-12 sm:px-8 lg:px-14">
//         <div className="mb-9 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
//           <div>
//             <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#a17c4d]">
//               Find your next skill
//             </p>
//             <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
//               Explore courses
//             </h2>
//             <p className="mt-2 text-sm text-[#858980]">
//               Discover learning paths that match your goals.
//             </p>
//           </div>

//           <div className="flex flex-col gap-3 sm:flex-row">
//             <div className="flex h-12 items-center gap-3 rounded-full border border-[#e6e5de] bg-white px-5 sm:w-[320px]">
//               <Search size={17} className="text-[#77776f]" />
//               <input
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search skills, courses..."
//                 className="w-full bg-transparent text-xs outline-none placeholder:text-[#a5a69d]"
//               />
//               {search && (
//                 <button onClick={() => setSearch("")}><X size={15} /></button>
//               )}
//             </div>

//             <select
//               value={sort}
//               onChange={(e) => setSort(e.target.value)}
//               className="h-12 rounded-full border border-[#e6e5de] bg-white px-5 text-xs font-semibold outline-none"
//             >
//               <option value="popular">Most popular</option>
//               <option value="rating">Top rated</option>
//               <option value="name">Name A–Z</option>
//             </select>

//             <button
//               onClick={() => setMobileFilters(true)}
//               className="flex h-12 items-center justify-center gap-2 rounded-full border border-[#e6e5de] bg-white px-5 text-xs font-bold lg:hidden"
//             >
//               <SlidersHorizontal size={15} /> Filters
//             </button>
//           </div>
//         </div>

//         {/* Category tabs */}
//         <div className="mb-9 flex gap-2 overflow-x-auto pb-2">
//           {categories.map(({ name, icon: Icon }) => (
//             <button
//               key={name}
//               onClick={() => setCategory(name)}
//               className={`flex shrink-0 items-center gap-2 rounded-full px-5 py-3 text-xs font-bold transition ${
//                 category === name
//                   ? "bg-[#171717] text-white shadow-lg"
//                   : "border border-[#e6e5de] bg-white text-[#6d776f] hover:border-[#77776f]"
//               }`}
//             >
//               <Icon size={15} /> {name}
//             </button>
//           ))}
//         </div>

//         <div className="flex items-start gap-8">
//           {/* Desktop sidebar */}
//           <aside className="hidden w-[250px] shrink-0 rounded-[20px] border border-[#e9e8e2] bg-white px-5 py-5 lg:block">
//             <div className="mb-3 flex items-center justify-between">
//               <h3 className="flex items-center gap-2 text-sm font-bold">
//                 <Filter size={16} /> Filters
//               </h3>
//               <button onClick={clearFilters} className="text-[10px] font-bold text-[#77776f]">
//                 Clear all
//               </button>
//             </div>

//             {filterGroups.map((group) => (
//               <FilterGroup
//                 key={group.title}
//                 group={group}
//                 selected={filters[group.title] || []}
//                 onToggle={(value) => toggleFilter(group.title, value)}
//               />
//             ))}
//           </aside>

//           {/* Mobile filters */}
//           {mobileFilters && (
//             <div className="fixed inset-0 z-[100] bg-black/40 lg:hidden">
//               <div className="absolute bottom-0 left-0 right-0 max-h-[85vh] overflow-y-auto rounded-t-[25px] bg-white p-6">
//                 <div className="mb-5 flex items-center justify-between">
//                   <h3 className="font-bold">Filter courses</h3>
//                   <button onClick={() => setMobileFilters(false)}><X /></button>
//                 </div>
//                 {filterGroups.map((group) => (
//                   <FilterGroup
//                     key={group.title}
//                     group={group}
//                     selected={filters[group.title] || []}
//                     onToggle={(value) => toggleFilter(group.title, value)}
//                   />
//                 ))}
//                 <button
//                   onClick={() => setMobileFilters(false)}
//                   className="mt-5 w-full rounded-full bg-[#171717] py-4 text-sm font-bold text-white"
//                 >
//                   Show {filteredCourses.length} courses
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* Course grid */}
//           <div className="min-w-0 flex-1">
//             <div className="mb-6 flex items-center justify-between">
//               <p className="text-xs text-[#858980]">
//                 Showing <strong className="text-[#171717]">{filteredCourses.length}</strong> courses
//               </p>
//               <span className="hidden text-[10px] font-semibold uppercase tracking-wider text-[#77776f] sm:block">
//                 Learn something new today ↗
//               </span>
//             </div>

//             {filteredCourses.length > 0 ? (
//               <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
//                 {filteredCourses.map((course) => (
//                   <CourseCard
//                     key={course.id}
//                     course={course}
//                     selected={compare.includes(course.id)}
//                     onCompare={toggleCompare}
//                     saved={saved.includes(course.id)}
//                     onSave={toggleSave}
//                   />
//                 ))}
//               </div>
//             ) : (
//               <div className="rounded-[20px] border border-[#e9e8e2] bg-white px-5 py-20 text-center">
//                 <Search size={30} className="mx-auto text-[#77776f]" />
//                 <h3 className="mt-4 text-lg font-bold">No courses found</h3>
//                 <p className="mt-2 text-sm text-[#858980]">
//                   Try changing your search or filters.
//                 </p>
//                 <button onClick={clearFilters} className="mt-5 rounded-full bg-[#171717] px-6 py-3 text-xs font-bold text-white">
//                   Clear filters
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Compare bar */}
//         {compare.length > 0 && (
//           <div className="fixed bottom-5 left-1/2 z-50 flex w-[calc(100%-32px)] max-w-2xl -translate-x-1/2 items-center justify-between gap-3 rounded-2xl bg-[#171717] p-4 text-white shadow-2xl">
//             <div>
//               <p className="text-xs font-bold">{compare.length} courses selected</p>
//               <p className="mt-1 text-[10px] text-white/60">Select up to 3 courses</p>
//             </div>
//             <div className="flex items-center gap-2">
//               <button onClick={() => setCompare([])} className="rounded-full px-3 py-2 text-[10px] font-bold text-white/70">
//                 Clear
//               </button>
//               <button
//                 onClick={() => alert("Course comparison: " + compare.map(id => courses.find(c => c.id === id)?.title).join(", "))}
//                 className="rounded-full bg-[#ededE7] px-5 py-3 text-[10px] font-bold text-[#171717]"
//               >
//                 Compare now
//               </button>
//             </div>
//           </div>
//         )}
//       </section>

//       {/* Bottom CTA */}
//       <section className="mx-auto max-w-[1500px] px-5 pb-16 sm:px-8 lg:px-14">
//         <div className="flex flex-col justify-between gap-7 rounded-[25px] bg-[#e8eee8] p-8 sm:p-12 lg:flex-row lg:items-center">
//           <div>
//             <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#77776f]">
//               Take the next step
//             </p>
//             <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-[#171717] sm:text-4xl">
//               Your future starts with one skill.
//             </h2>
//             <p className="mt-3 max-w-xl text-sm leading-7 text-[#78837a]">
//               Choose a course, build practical knowledge and move closer to your career goals.
//             </p>
//           </div>
//           <Link
//             href="/counselling"
//             className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#171717] px-7 py-4 text-xs font-bold text-white transition hover:bg-[#77776f]"
//           >
//             Get career guidance <ArrowUpRight size={16} />
//           </Link>
//         </div>
//       </section>
//     </main>
//   );
// }



"use client";

import { useMemo, useState, type ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import {
  Search, SlidersHorizontal, ChevronDown, ChevronRight, ChevronLeft,
  Clock3, Globe2, Star, ArrowUpRight, Bookmark, BookOpen, Code2,
  Brain, Palette, BriefcaseBusiness, ShieldCheck, Database, Megaphone,
  Cloud, Smartphone, X, Check, GraduationCap, Filter, Sparkles,
  Play, TrendingUp, Users, Award, Zap, Heart, Menu, ArrowRight,
  CircleHelp, Rocket, Laptop, Target, Quote, CheckCircle2, Plus,
  Minus, SlidersHorizontal as Sliders, BadgeCheck
} from "lucide-react";

/*
  Skillbase — premium course discovery page
  Stack: Next.js App Router, React, Tailwind CSS, lucide-react
  Replace the sample course data with your API response when your backend is ready.
*/

type Course = {
  id: number; title: string; category: string; industry: string; provider: string;
  duration: string; hours: string; mode: string; price: string; rating: number;
  reviews: number; language: string; level: string; image: string; tags: string[];
  color: string; featured: boolean; students: string; description: string;
};

const courses: Course[] = [
  {
    id: 1, title: "Full Stack Web Development", category: "Technology",
    industry: "IT & Software", provider: "Tech Academy", duration: "6 Months",
    hours: "240 Hours", mode: "Online", price: "Free", rating: 4.8,
    reviews: 1240, language: "English", level: "Beginner",
    image: "photo-1498050108023-c5249f4df085",
    tags: ["HTML", "CSS", "JavaScript", "React"], color: "#e5f1ed",
    featured: true, students: "12.4k", description: "Build modern websites and production-ready applications from the ground up."
  },
  {
    id: 2, title: "Artificial Intelligence", category: "Technology",
    industry: "IT & Software", provider: "Digital Skills Institute", duration: "4 Months",
    hours: "160 Hours", mode: "Online", price: "Free", rating: 4.9,
    reviews: 980, language: "English", level: "Intermediate",
    image: "photo-1677442136019-21780ecad995",
    tags: ["AI", "Python", "Deep Learning"], color: "#e9e8fa",
    featured: true, students: "9.8k", description: "Understand AI foundations and learn how intelligent systems are built."
  },
  {
    id: 3, title: "Data Analytics & Visualization", category: "Technology",
    industry: "IT & Software", provider: "Skill Development Centre", duration: "3 Months",
    hours: "120 Hours", mode: "Online", price: "Free", rating: 4.7,
    reviews: 760, language: "English", level: "Beginner",
    image: "photo-1551288049-bebda4e38f71",
    tags: ["Excel", "SQL", "Power BI"], color: "#e6eefb",
    featured: false, students: "7.6k", description: "Turn raw data into clear insights, reports and business decisions."
  },
  {
    id: 4, title: "Digital Marketing Masterclass", category: "Business",
    industry: "Marketing", provider: "Growth Learning Hub", duration: "2 Months",
    hours: "80 Hours", mode: "Online", price: "Free", rating: 4.6,
    reviews: 530, language: "Hindi", level: "Beginner",
    image: "photo- digital",
    tags: ["SEO", "Social Media", "Ads"], color: "#f8e9df",
    featured: false, students: "5.3k", description: "Learn how brands grow through content, search and paid campaigns."
  },
  {
    id: 5, title: "Cybersecurity Fundamentals", category: "Technology",
    industry: "IT & Software", provider: "Cyber Learning Centre", duration: "4 Months",
    hours: "150 Hours", mode: "Online", price: "Paid", rating: 4.9,
    reviews: 670, language: "English", level: "Intermediate",
    image: "photo-1550751827-4bd374c3f58b",
    tags: ["Networking", "Security", "Ethical Hacking"], color: "#e6edf5",
    featured: true, students: "6.7k", description: "Explore networks, threats, defensive security and ethical hacking."
  },
  {
    id: 6, title: "UI/UX Design Professional", category: "Design",
    industry: "Creative", provider: "Creative Skills Academy", duration: "3 Months",
    hours: "100 Hours", mode: "Online", price: "Paid", rating: 4.8,
    reviews: 410, language: "English", level: "Beginner",
    image: "photo-1561070791-2526d30994b5",
    tags: ["Figma", "Wireframing", "Prototyping"], color: "#f1e9f7",
    featured: false, students: "4.1k", description: "Design intuitive digital experiences through research and prototyping."
  },
  {
    id: 7, title: "Python Programming", category: "Technology",
    industry: "IT & Software", provider: "Tech Academy", duration: "3 Months",
    hours: "120 Hours", mode: "Online", price: "Free", rating: 4.8,
    reviews: 1100, language: "Hindi", level: "Beginner",
    image: "photo-1526379095098-d400fd0bf935",
    tags: ["Python", "Programming", "Projects"], color: "#e9f0fa",
    featured: false, students: "11k", description: "Start coding with Python and create practical beginner projects."
  },
  {
    id: 8, title: "Cloud Computing & AWS", category: "Technology",
    industry: "IT & Software", provider: "Cloud Skills Institute", duration: "4 Months",
    hours: "140 Hours", mode: "Online", price: "Paid", rating: 4.7,
    reviews: 390, language: "English", level: "Intermediate",
    image: "photo-1451187580459-43490279c0fa",
    tags: ["AWS", "Cloud", "DevOps"], color: "#e5f0f7",
    featured: false, students: "3.9k", description: "Learn cloud infrastructure, deployment and modern DevOps practices."
  },
  {
    id: 9, title: "Business & Entrepreneurship", category: "Business",
    industry: "Management", provider: "Entrepreneurship Centre", duration: "2 Months",
    hours: "75 Hours", mode: "Hybrid", price: "Free", rating: 4.5,
    reviews: 290, language: "Hindi", level: "Beginner",
    image: "photo-1460925895917-afdab827c52f",
    tags: ["Business", "Startup", "Finance"], color: "#f5eddf",
    featured: false, students: "2.9k", description: "Explore business fundamentals, startup thinking and planning."
  },
  {
    id: 10, title: "Graphic Design & Branding", category: "Design",
    industry: "Creative", provider: "Creative Skills Academy", duration: "2 Months",
    hours: "90 Hours", mode: "Online", price: "Free", rating: 4.6,
    reviews: 320, language: "English", level: "Beginner",
    image: "photo-1626785774573-4b799315345d",
    tags: ["Photoshop", "Illustrator", "Branding"], color: "#f7e9e5",
    featured: false, students: "3.2k", description: "Develop visual identities and create compelling brand assets."
  },
  {
    id: 11, title: "Machine Learning", category: "Technology",
    industry: "IT & Software", provider: "AI Learning Academy", duration: "5 Months",
    hours: "180 Hours", mode: "Online", price: "Paid", rating: 4.9,
    reviews: 520, language: "English", level: "Advanced",
    image: "photo-1518770660439-4636190af475",
    tags: ["Python", "ML", "AI"], color: "#e7eafa",
    featured: true, students: "5.2k", description: "Study predictive models, algorithms and applied machine learning."
  },
  {
    id: 12, title: "Mobile App Development", category: "Technology",
    industry: "IT & Software", provider: "Tech Academy", duration: "4 Months",
    hours: "150 Hours", mode: "Online", price: "Free", rating: 4.7,
    reviews: 450, language: "English", level: "Intermediate",
    image: "photo-1512941937669-90a1b58e7e9a",
    tags: ["React Native", "Flutter", "Mobile"], color: "#e4f1ed",
    featured: false, students: "4.5k", description: "Create mobile experiences for Android and iOS devices."
  }
];

const imageUrl = (id?: string) => {
  if (!id || id === "photo- digital") {
    return "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85";
  }
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1000&q=85`;
};

const categories = [
  { name: "All Courses", icon: BookOpen, count: courses.length },
  { name: "Technology", icon: Code2, count: 8 },
  { name: "Business", icon: BriefcaseBusiness, count: 2 },
  { name: "Design", icon: Palette, count: 2 }
];

const filterGroups = [
  { title: "Industry", options: ["IT & Software", "Marketing", "Creative", "Management"] },
  { title: "Duration", options: ["Less than 1 Month", "1–3 Months", "3–6 Months", "6+ Months"] },
  { title: "Learning Mode", options: ["Online", "Offline", "Hybrid"] },
  { title: "Price", options: ["Free", "Paid"] },
  { title: "Course Level", options: ["Beginner", "Intermediate", "Advanced"] },
  { title: "Language", options: ["English", "Hindi"] }
];

const learningPaths = [
  { icon: Code2, title: "Become a developer", text: "Frontend, backend and full-stack foundations.", count: "18 courses", tone: "bg-[#e7f1ec]" },
  { icon: Brain, title: "Explore artificial intelligence", text: "AI, data science and machine learning.", count: "12 courses", tone: "bg-[#eeeafb]" },
  { icon: ShieldCheck, title: "Build a security career", text: "Networks, cloud security and cyber defence.", count: "9 courses", tone: "bg-[#e8edf5]" },
  { icon: Palette, title: "Create digital experiences", text: "UI/UX, graphic design and creative tools.", count: "14 courses", tone: "bg-[#f5eaf0]" }
];

const testimonials = [
  { name: "Aarav Sharma", role: "Web Development learner", quote: "The structured learning path helped me understand what to learn next and how to practise it.", initials: "AS" },
  { name: "Meera Patel", role: "Design learner", quote: "I could compare different learning options and choose a course that matched my goals.", initials: "MP" },
  { name: "Kabir Verma", role: "Data learner", quote: "The course discovery experience made it easier to explore skills beyond my college syllabus.", initials: "KV" }
];

function SectionHeading({ eyebrow, title, description, action }: { eyebrow: string; title: string; description: string; action?: ReactNode }) {
  return (
    <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
      <div className="max-w-2xl">
        <p className="text-[10px] font-extrabold uppercase tracking-[.22em] text-[#a17c4d]">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-.055em] text-[#171717] sm:text-4xl">{title}</h2>
        {description && <p className="mt-3 text-sm leading-7 text-[#858980]">{description}</p>}
      </div>
      {action}
    </div>
  );
}

function CourseCard({ course, selected, onCompare, saved, onSave }: { course: Course; selected: boolean; onCompare: (id: number) => void; saved: boolean; onSave: (id: number) => void }) {
  return (
    <article className="group overflow-hidden rounded-[22px] border border-[#e9e8e2] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#c9d9d0] hover:shadow-[0_22px_55px_rgba(28,53,47,.11)]">
      <div className="relative h-[190px] overflow-hidden bg-[#eef1eb]">
        <img src={imageUrl(course.image)} alt={course.title} loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#142b27]/55 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-white/50 bg-white/95 px-3 py-2 text-[10px] font-bold text-[#171717] shadow-sm">{course.mode}</span>
        <span className={`absolute right-0 top-0 rounded-bl-xl px-5 py-3 text-[11px] font-extrabold text-white ${course.price === "Free" ? "bg-[#23844e]" : "bg-[#171717]"}`}>{course.price}</span>
        <button onClick={() => onSave(course.id)} aria-label={saved ? "Remove saved course" : "Save course"}
          className={`absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full shadow-lg transition ${saved ? "bg-[#ededE7] text-[#171717]" : "bg-white text-[#171717] hover:bg-[#171717] hover:text-white"}`}>
          <Bookmark size={16} fill={saved ? "currentColor" : "none"} />
        </button>
        {course.featured && <span className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-2 text-[9px] font-extrabold uppercase tracking-wider text-[#8a673d]"><Sparkles size={12} /> Featured</span>}
      </div>
      <div className="p-5">
        <div className="mb-3 flex items-center justify-between gap-2">
          <span className="text-[10px] font-extrabold uppercase tracking-[.13em] text-[#b17838]">{course.category}</span>
          <span className="flex items-center gap-1 text-[11px] font-bold text-[#263b34]"><Star size={13} fill="#e9aa42" stroke="#e9aa42" />{course.rating}<span className="font-normal text-[#96968d]">({course.reviews.toLocaleString()})</span></span>
        </div>
        <h3 className="min-h-[48px] text-[17px] font-bold leading-snug tracking-[-.025em] text-[#171717]">{course.title}</h3>
        <p className="mt-2 text-[11px] text-[#92948c]">By {course.provider}</p>
        <div className="mt-5 grid grid-cols-2 gap-y-3 border-y border-[#efeee9] py-4 text-[11px] text-[#777d76]">
          <span className="flex items-center gap-2"><Clock3 size={14} />{course.duration}</span>
          <span className="flex items-center gap-2"><BookOpen size={14} />{course.hours}</span>
          <span className="flex items-center gap-2"><Globe2 size={14} />{course.language}</span>
          <span className="flex items-center gap-2"><GraduationCap size={15} />{course.level}</span>
        </div>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {course.tags.slice(0, 3).map(tag => <span key={tag} className="rounded-full bg-[#f5f5f0] px-2.5 py-1.5 text-[9px] font-semibold text-[#6e766f]">{tag}</span>)}
        </div>
        <div className="mt-5 flex items-center justify-between gap-2">
          <Link href={`/skillbase/${course.id}`} className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#171717] px-4 py-3 text-[11px] font-extrabold text-white transition hover:bg-[#77776f]">
            Explore course <ArrowUpRight size={15} />
          </Link>
          <label className="flex cursor-pointer items-center gap-1.5 text-[10px] font-medium text-[#777d76]">
            <input type="checkbox" checked={selected} onChange={() => onCompare(course.id)} className="h-4 w-4 accent-[#77776f]" /> Compare
          </label>
        </div>
      </div>
    </article>
  );
}

function FilterGroup({ group, selected, onToggle }: { group: { title: string; options: string[] }; selected: string[]; onToggle: (title: string, option: string) => void }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="border-b border-[#eeede7] py-4 last:border-0">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between text-left">
        <span className="text-[13px] font-bold text-[#263b34]">{group.title}</span>
        <ChevronDown size={16} className={`text-[#92948c] transition-transform ${open ? "" : "-rotate-90"}`} />
      </button>
      {open && <div className="mt-4 space-y-3">
        {group.options.map(option => <label key={option} className="flex cursor-pointer items-center gap-3 text-[12px] text-[#747a73] hover:text-[#171717]">
          <input type="checkbox" checked={selected.includes(option)} onChange={() => onToggle(group.title, option)} className="h-4 w-4 rounded accent-[#77776f]" />{option}
        </label>)}
      </div>}
    </div>
  );
}

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [["Discover", "/skillbase"], ["Learning paths", "#paths"], ["For institutions", "#institutions"], ["About us", "#about"]];
  return (
    <header className="sticky top-0 z-40 border-b border-[#e9e8e2] bg-[#fbfbf8]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-14">
        <Link href="/skillbase" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-[#171717] text-[#a8d8c3]"><GraduationCap size={21} /></span>
          <span className="text-[19px] font-black tracking-[-.06em] text-[#171717]">skillbase<span className="text-[#77776f]">.</span><span className="ml-1 hidden text-[9px] font-bold uppercase tracking-[.16em] text-[#9a9c92] sm:inline">learn better</span></span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map(([label, href], i) => <a key={label} href={href} className={`text-[12px] font-semibold transition hover:text-[#77776f] ${i === 0 ? "text-[#77776f]" : "text-[#69756e]"}`}>{label}</a>)}
        </nav>
        <div className="hidden items-center gap-3 sm:flex">
          <Link href="/login" className="rounded-full px-5 py-3 text-[11px] font-bold text-[#171717] transition hover:bg-[#eef2ed]">Log in</Link>
          <Link href="/signup" className="inline-flex items-center gap-2 rounded-full bg-[#171717] px-5 py-3 text-[11px] font-bold text-white transition hover:bg-[#77776f]">Get started <ArrowUpRight size={14} /></Link>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e6e5de] text-[#171717] lg:hidden" aria-label="Toggle navigation">{menuOpen ? <X size={19} /> : <Menu size={19} />}</button>
      </div>
      {menuOpen && <div className="border-t border-[#e9e8e2] bg-white px-5 py-5 lg:hidden">
        <div className="flex flex-col gap-4">{links.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)} className="text-sm font-semibold text-[#52635a]">{label}</a>)}
          <div className="flex gap-3 border-t border-[#eee] pt-4"><Link href="/login" className="rounded-full border border-[#ddd] px-5 py-3 text-xs font-bold">Log in</Link><Link href="/signup" className="rounded-full bg-[#171717] px-5 py-3 text-xs font-bold text-white">Get started</Link></div>
        </div>
      </div>}
    </header>
  );
}

function Hero({ onSearch }: { onSearch: (value: string) => void }) {
  const [query, setQuery] = useState("");
  return (
    <section className="relative overflow-hidden bg-[#171717]">
      <div className="absolute -right-24 -top-40 h-[520px] w-[520px] rounded-full bg-[#77776f]/20 blur-3xl" />
      <div className="absolute -bottom-52 left-[38%] h-[420px] w-[420px] rounded-full bg-[#b18b52]/15 blur-3xl" />
      <div className="absolute right-[8%] top-[15%] hidden h-[340px] w-[340px] rounded-full border border-white/10 lg:block" />
      <div className="absolute right-[11%] top-[20%] hidden h-[280px] w-[280px] rounded-full border border-white/10 lg:block" />
      <div className="relative mx-auto grid max-w-[1500px] items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.1fr_.9fr] lg:px-14 lg:py-28">
        <div className="max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[.2em] text-[#c8dfd3]"><Sparkles size={13} /> A better way to learn</div>
          <h1 className="text-5xl font-semibold leading-[1.02] tracking-[-.065em] text-white sm:text-6xl lg:text-[76px]">Skills that move you <span className="block font-serif font-normal italic text-[#ededE7]">forward.</span></h1>
          <p className="mt-7 max-w-xl text-sm leading-8 text-white/65 sm:text-base">Discover practical courses, build confidence through learning and take your next step toward a future you choose.</p>
          <form onSubmit={e => { e.preventDefault(); onSearch(query); document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" }); }} className="mt-9 flex max-w-[590px] flex-col gap-2 rounded-[20px] bg-white p-2 shadow-2xl sm:flex-row sm:items-center sm:rounded-full">
            <div className="flex min-w-0 flex-1 items-center gap-3 px-4"><Search size={19} className="shrink-0 text-[#77776f]" /><input value={query} onChange={e => setQuery(e.target.value)} placeholder="What would you like to learn?" className="h-12 w-full min-w-0 bg-transparent text-xs text-[#171717] outline-none placeholder:text-[#a5a69d]" /></div>
            <button className="h-12 rounded-full bg-[#77776f] px-7 text-xs font-extrabold text-white transition hover:bg-[#1d6e62]">Explore courses <ArrowUpRight className="ml-2 inline" size={15} /></button>
          </form>
          <div className="mt-8 flex flex-wrap gap-3 text-[10px] font-semibold text-white/75">
            {["Career-focused learning", "Flexible study options", "Skills for tomorrow"].map(t => <span key={t} className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#ededE7]" />{t}</span>)}
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[520px] lg:ml-auto">
          <div className="absolute -left-5 top-12 h-24 w-24 rounded-full bg-[#b18b52]/30 blur-2xl" />
          <div className="relative overflow-hidden rounded-[34px] border border-white/15 bg-white/10 p-3 shadow-[0_35px_90px_rgba(0,0,0,.25)] backdrop-blur">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1100&q=90" alt="Students learning together" className="h-[330px] w-full rounded-[26px] object-cover sm:h-[390px]" />
            <div className="absolute bottom-7 left-7 right-7 rounded-[22px] border border-white/50 bg-white/95 p-5 shadow-xl backdrop-blur">
              <div className="flex items-center justify-between"><span className="text-[9px] font-extrabold uppercase tracking-[.18em] text-[#9a794c]">Your next chapter</span><span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e5f1ed] text-[#77776f]"><Rocket size={15} /></span></div>
              <p className="mt-2 text-xl font-bold tracking-[-.04em] text-[#171717]">Small steps. Big possibilities.</p>
              <div className="mt-4 flex items-center gap-3"><div className="flex -space-x-2">{["A","M","R","S"].map((x,i)=><span key={x} className={`flex h-7 w-7 items-center justify-center rounded-full border-2 border-white text-[9px] font-bold text-white ${["bg-[#547a6d]","bg-[#b58d5b]","bg-[#6b718c]","bg-[#9a777d]"][i]}`}>{x}</span>)}</div><span className="text-[10px] font-semibold text-[#7d887f]">Learn at your own pace</span></div>
            </div>
          </div>
          <div className="absolute -right-3 top-8 hidden rounded-2xl bg-white p-4 shadow-xl sm:block"><div className="flex items-center gap-2 text-[#171717]"><span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#e8f3ec] text-[#77776f]"><Award size={16} /></span><div><p className="text-[10px] font-extrabold">Keep growing</p><p className="text-[9px] text-[#92948c]">One skill at a time</p></div></div></div>
        </div>
      </div>
      <div className="relative border-t border-white/10 bg-white/[.04]">
        <div className="mx-auto grid max-w-[1500px] grid-cols-2 gap-6 px-5 py-7 sm:grid-cols-4 sm:px-8 lg:px-14">
          {[["12+", "Curated courses"], ["4", "Learning categories"], ["Online", "Learn anywhere"], ["Your pace", "Your journey"]].map(([n,l])=><div key={l}><p className="text-2xl font-semibold tracking-[-.05em] text-white">{n}</p><p className="mt-1 text-[10px] font-medium text-white/45">{l}</p></div>)}
        </div>
      </div>
    </section>
  );
}

function LearningPathSection() {
  return (
    <section id="paths" className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 lg:px-14 lg:py-24">
      <SectionHeading eyebrow="Choose your direction" title="Learning paths for your next move" description="Start with an area that interests you. Explore connected skills and find a course that fits your goals." action={<a href="#courses" className="hidden items-center gap-2 text-xs font-bold text-[#77776f] sm:inline-flex">Browse all courses <ArrowRight size={15} /></a>} />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {learningPaths.map((path,i)=>{const Icon=path.icon;return <a href="#courses" key={path.title} className="group rounded-[22px] border border-[#e9e8e2] bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl"><span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${path.tone} text-[#171717]`}><Icon size={21}/></span><h3 className="mt-6 text-[17px] font-bold tracking-[-.03em] text-[#171717]">{path.title}</h3><p className="mt-2 min-h-[44px] text-xs leading-6 text-[#858980]">{path.text}</p><div className="mt-6 flex items-center justify-between border-t border-[#efeee9] pt-4"><span className="text-[10px] font-bold text-[#9a9d93]">{path.count}</span><span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f2f5f0] text-[#77776f] transition group-hover:bg-[#171717] group-hover:text-white"><ArrowUpRight size={15}/></span></div></a>})}
      </div>
    </section>
  );
}

function WhySkillbase() {
  const items: Array<[LucideIcon, string, string]> = [
    [Target, "Learn with purpose", "Explore courses around practical skills and clear learning goals."],
    [Laptop, "Flexible by design", "Discover online and hybrid options that fit your schedule."],
    [Zap, "Keep building", "Move from foundational concepts to skills you can practise."],
    [BadgeCheck, "Choose with clarity", "Compare course details, levels, formats and learning time."]
  ];
  return <section id="about" className="bg-[#eef2ec] py-16 lg:py-24"><div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-14"><SectionHeading eyebrow="Why learn with Skillbase" title="A clearer way to find what’s next" description="The right learning experience should make your next step feel achievable."/><div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{items.map(([Icon,title,text])=><div key={title}><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#77776f] shadow-sm"><Icon size={19}/></span><h3 className="mt-5 text-sm font-extrabold text-[#171717]">{title}</h3><p className="mt-2 text-xs leading-6 text-[#7e887f]">{text}</p></div>)}</div></div></section>;
}

function Testimonials() {
  return <section className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 lg:px-14 lg:py-24"><SectionHeading eyebrow="Learner stories" title="Learning looks different for everyone" description="A few perspectives on exploring new skills and building confidence."/><div className="grid gap-5 lg:grid-cols-3">{testimonials.map(t=><article key={t.name} className="rounded-[22px] border border-[#e9e8e2] bg-white p-7"><Quote size={23} className="text-[#b18b52]"/><p className="mt-5 min-h-[90px] text-sm leading-7 text-[#65736a]">“{t.quote}”</p><div className="mt-6 flex items-center gap-3 border-t border-[#efeee9] pt-5"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e5f1ed] text-xs font-extrabold text-[#77776f]">{t.initials}</span><div><p className="text-xs font-extrabold text-[#171717]">{t.name}</p><p className="mt-1 text-[10px] text-[#96968d]">{t.role}</p></div></div></article>)}</div></section>;
}

function FAQ() {
  const faqs = [
    ["How do I find the right course?", "Use search, categories and filters to narrow courses by industry, duration, level, language and learning mode."],
    ["Are there free courses available?", "Yes. The course listing includes both free and paid options. Use the Price filter to view the options you want."],
    ["Can I compare courses?", "Yes. Select Compare on up to three course cards and use the comparison bar to review your selected courses."],
    ["Can I save a course for later?", "Yes. Use the bookmark icon on a course card to add or remove it from your saved list during this session."]
  ];
  const [active,setActive]=useState(0);
  return <section className="bg-[#f0f2ed] py-16 lg:py-24"><div className="mx-auto grid max-w-[1500px] gap-10 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:px-14"><div><p className="text-[10px] font-extrabold uppercase tracking-[.22em] text-[#a17c4d]">Good to know</p><h2 className="mt-3 text-3xl font-semibold tracking-[-.055em] text-[#171717] sm:text-4xl">Questions, answered.</h2><p className="mt-4 max-w-sm text-sm leading-7 text-[#858980]">A few quick details to help you get started with Skillbase.</p><a href="mailto:hello@skillbase.example" className="mt-7 inline-flex items-center gap-2 text-xs font-bold text-[#77776f]">Still have a question? <ArrowUpRight size={15}/></a></div><div className="divide-y divide-[#dfe4dc] border-y border-[#dfe4dc]">{faqs.map(([q,a],i)=><div key={q} className="py-5"><button onClick={()=>setActive(active===i?-1:i)} className="flex w-full items-center justify-between gap-5 text-left"><span className="text-sm font-bold text-[#171717]">{q}</span><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#77776f]">{active===i?<Minus size={15}/>:<Plus size={15}/>}</span></button>{active===i&&<p className="max-w-2xl pt-4 text-xs leading-7 text-[#78837a]">{a}</p>}</div>)}</div></div></section>;
}

function Footer() {
  return <footer className="bg-[#171717] text-white"><div className="mx-auto max-w-[1500px] px-5 py-14 sm:px-8 lg:px-14"><div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]"><div><Link href="/skillbase" className="text-2xl font-black tracking-[-.06em]">skillbase<span className="text-[#ededE7]">.</span></Link><p className="mt-4 max-w-xs text-xs leading-7 text-white/50">Explore skills. Discover possibilities. Build a future through learning.</p></div><div><p className="text-[10px] font-extrabold uppercase tracking-[.18em] text-[#ededE7]">Explore</p><div className="mt-5 flex flex-col gap-3 text-xs text-white/60"><a href="#courses" className="hover:text-white">All courses</a><a href="#paths" className="hover:text-white">Learning paths</a><a href="#about" className="hover:text-white">Why Skillbase</a></div></div><div><p className="text-[10px] font-extrabold uppercase tracking-[.18em] text-[#ededE7]">Account</p><div className="mt-5 flex flex-col gap-3 text-xs text-white/60"><Link href="/login" className="hover:text-white">Log in</Link><Link href="/signup" className="hover:text-white">Create account</Link><Link href="/counselling" className="hover:text-white">Career guidance</Link></div></div><div id="institutions"><p className="text-[10px] font-extrabold uppercase tracking-[.18em] text-[#ededE7]">Get in touch</p><div className="mt-5 flex flex-col gap-3 text-xs text-white/60"><a href="mailto:hello@skillbase.example" className="hover:text-white">Contact us</a><a href="#faq" className="hover:text-white">Help centre</a><span>Built for curious minds.</span></div></div></div><div className="flex flex-col justify-between gap-4 pt-7 text-[10px] text-white/40 sm:flex-row"><span>© {new Date().getFullYear()} Skillbase. All rights reserved.</span><span>Learn with curiosity. Grow with confidence.</span></div></div></footer>;
}

export default function SkillbasePage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Courses");
  const [filters, setFilters] = useState<Record<string, string[]>>({});
  const [sort, setSort] = useState("popular");
  const [compare, setCompare] = useState<number[]>([]);
  const [saved, setSaved] = useState<number[]>([]);
  const [mobileFilters, setMobileFilters] = useState(false);
  const [showSavedOnly, setShowSavedOnly] = useState(false);
  const [page, setPage] = useState(1);
  const pageSize = 9;

  const toggleFilter = (key: string, value: string) => {
    setFilters(prev => {
      const values=prev[key]||[];
      return {...prev,[key]:values.includes(value)?values.filter(item=>item!==value):[...values,value]};
    });
    setPage(1);
  };

  const filteredCourses = useMemo(() => {
    const result=courses.filter(course => {
      const query=search.toLowerCase().trim();
      const matchesSearch=!query || course.title.toLowerCase().includes(query) || course.provider.toLowerCase().includes(query) || course.tags.some(tag=>tag.toLowerCase().includes(query)) || course.description.toLowerCase().includes(query);
      const matchesCategory=category==="All Courses" || course.category===category;
      const matchesSaved=!showSavedOnly || saved.includes(course.id);
      const matchesFilters=filterGroups.every(group=>{
        const active=filters[group.title]||[];
        if(!active.length)return true;
        if(group.title==="Industry")return active.includes(course.industry);
        if(group.title==="Learning Mode")return active.includes(course.mode);
        if(group.title==="Price")return active.includes(course.price);
        if(group.title==="Course Level")return active.includes(course.level);
        if(group.title==="Language")return active.includes(course.language);
        if(group.title==="Duration"){
          const months=parseInt(course.duration,10);
          return active.some(item=>{
            if(item==="Less than 1 Month")return months<1;
            if(item==="1–3 Months")return months>=1&&months<=3;
            if(item==="3–6 Months")return months>=3&&months<=6;
            return months>6;
          });
        }
        return true;
      });
      return matchesSearch&&matchesCategory&&matchesFilters&&matchesSaved;
    });
    if(sort==="rating")result.sort((a,b)=>b.rating-a.rating);
    if(sort==="name")result.sort((a,b)=>a.title.localeCompare(b.title));
    if(sort==="popular")result.sort((a,b)=>b.reviews-a.reviews);
    if(sort==="duration")result.sort((a,b)=>parseInt(a.duration,10)-parseInt(b.duration,10));
    return result;
  },[search,category,filters,sort,showSavedOnly,saved]);

  const totalPages=Math.max(1,Math.ceil(filteredCourses.length/pageSize));
  const visibleCourses=filteredCourses.slice((page-1)*pageSize,page*pageSize);
  const activeFilterCount=Object.values(filters).reduce((sum,values)=>sum+values.length,0);

  const toggleCompare = (id: number) => setCompare(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id].slice(-3));
  const toggleSave = (id: number) => setSaved(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
  const clearFilters=()=>{setFilters({});setCategory("All Courses");setSearch("");setShowSavedOnly(false);setPage(1);};

  return (
    <main className="min-h-screen bg-[#fbfbf8] text-[#171717]">
      <SiteHeader />
      <Hero onSearch={setSearch} />

      <LearningPathSection />

      <section id="courses" className="scroll-mt-24 bg-[#f7f7f3] py-16 sm:py-20">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-14">
          <SectionHeading eyebrow="Find your next skill" title="Explore the course library" description="Discover practical learning experiences that match your interests, goals and schedule." />
          <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex min-w-0 flex-col gap-3 sm:flex-row">
              <div className="flex h-12 min-w-0 items-center gap-3 rounded-full border border-[#e6e5de] bg-white px-5 sm:w-[340px]">
                <Search size={17} className="shrink-0 text-[#77776f]" />
                <input value={search} onChange={e=>{setSearch(e.target.value);setPage(1);}} placeholder="Search skills, courses, providers..." className="w-full min-w-0 bg-transparent text-xs outline-none placeholder:text-[#a5a69d]" />
                {search&&<button onClick={()=>setSearch("")} aria-label="Clear search"><X size={15}/></button>}
              </div>
              <select value={sort} onChange={e=>setSort(e.target.value)} className="h-12 rounded-full border border-[#e6e5de] bg-white px-5 text-xs font-semibold outline-none">
                <option value="popular">Most popular</option><option value="rating">Top rated</option><option value="name">Name A–Z</option><option value="duration">Shortest duration</option>
              </select>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button onClick={()=>setShowSavedOnly(!showSavedOnly)} className={`flex h-11 items-center gap-2 rounded-full border px-4 text-[11px] font-bold transition ${showSavedOnly?"border-[#171717] bg-[#171717] text-white":"border-[#e6e5de] bg-white text-[#65736a]"}`}><Bookmark size={14} fill={showSavedOnly?"currentColor":"none"}/> Saved ({saved.length})</button>
              <button onClick={()=>setMobileFilters(true)} className="flex h-11 items-center gap-2 rounded-full border border-[#e6e5de] bg-white px-4 text-[11px] font-bold lg:hidden"><SlidersHorizontal size={14}/> Filters {activeFilterCount>0&&`(${activeFilterCount})`}</button>
            </div>
          </div>

          <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
            {categories.map(({name,icon:Icon,count})=><button key={name} onClick={()=>{setCategory(name);setPage(1);}} className={`flex shrink-0 items-center gap-2 rounded-full px-5 py-3 text-xs font-bold transition ${category===name?"bg-[#171717] text-white shadow-lg":"border border-[#e6e5de] bg-white text-[#6d776f] hover:border-[#77776f]"}`}><Icon size={15}/>{name}<span className={`rounded-full px-2 py-0.5 text-[9px] ${category===name?"bg-white/15 text-white":"bg-[#f2f3ef] text-[#8b9289]"}`}>{count}</span></button>)}
          </div>

          <div className="flex items-start gap-8">
            <aside className="sticky top-24 hidden w-[250px] shrink-0 rounded-[22px] border border-[#e9e8e2] bg-white px-5 py-5 lg:block">
              <div className="mb-3 flex items-center justify-between"><h3 className="flex items-center gap-2 text-sm font-bold"><Filter size={16}/> Filters</h3><button onClick={clearFilters} className="text-[10px] font-bold text-[#77776f]">Clear all</button></div>
              {filterGroups.map(group=><FilterGroup key={group.title} group={group} selected={filters[group.title]||[]} onToggle={value=>toggleFilter(group.title,value)}/>)}
            </aside>

            {mobileFilters&&<div className="fixed inset-0 z-[100] bg-black/40 lg:hidden" onClick={()=>setMobileFilters(false)}><div className="absolute bottom-0 left-0 right-0 max-h-[88vh] overflow-y-auto rounded-t-[25px] bg-white p-6" onClick={e=>e.stopPropagation()}><div className="mb-5 flex items-center justify-between"><div><h3 className="font-bold">Filter courses</h3><p className="mt-1 text-[10px] text-[#92948c]">Refine your learning search</p></div><button onClick={()=>setMobileFilters(false)} aria-label="Close filters"><X/></button></div>{filterGroups.map(group=><FilterGroup key={group.title} group={group} selected={filters[group.title]||[]} onToggle={value=>toggleFilter(group.title,value)}/>) }<div className="mt-5 flex gap-3"><button onClick={clearFilters} className="flex-1 rounded-full border border-[#e6e5de] py-4 text-xs font-bold">Clear all</button><button onClick={()=>setMobileFilters(false)} className="flex-1 rounded-full bg-[#171717] py-4 text-xs font-bold text-white">Show {filteredCourses.length} courses</button></div></div></div>}

            <div className="min-w-0 flex-1">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3"><p className="text-xs text-[#858980]">Showing <strong className="text-[#171717]">{filteredCourses.length}</strong> courses</p><span className="text-[10px] font-semibold uppercase tracking-wider text-[#77776f]">{showSavedOnly?"Your saved courses":"Learn something new today ↗"}</span></div>
              {visibleCourses.length>0?<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">{visibleCourses.map(course=><CourseCard key={course.id} course={course} selected={compare.includes(course.id)} onCompare={toggleCompare} saved={saved.includes(course.id)} onSave={toggleSave}/>)}</div>:<div className="rounded-[22px] border border-[#e9e8e2] bg-white px-5 py-20 text-center"><Search size={30} className="mx-auto text-[#77776f]"/><h3 className="mt-4 text-lg font-bold">No courses found</h3><p className="mt-2 text-sm text-[#858980]">Try changing your search or filters.</p><button onClick={clearFilters} className="mt-5 rounded-full bg-[#171717] px-6 py-3 text-xs font-bold text-white">Clear filters</button></div>}
              {totalPages>1&&<div className="mt-9 flex items-center justify-center gap-2"><button disabled={page===1} onClick={()=>setPage(p=>p-1)} className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e6e5de] bg-white disabled:opacity-30"><ChevronLeft size={16}/></button>{Array.from({length:totalPages},(_,i)=>i+1).map(n=><button key={n} onClick={()=>setPage(n)} className={`h-10 w-10 rounded-full text-xs font-bold ${page===n?"bg-[#171717] text-white":"border border-[#e6e5de] bg-white text-[#65736a]"}`}>{n}</button>)}<button disabled={page===totalPages} onClick={()=>setPage(p=>p+1)} className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e6e5de] bg-white disabled:opacity-30"><ChevronRight size={16}/></button></div>}
            </div>
          </div>
        </div>
      </section>

      <WhySkillbase />
      <Testimonials />

      <section className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 lg:px-14 lg:py-24">
        <div className="relative overflow-hidden rounded-[30px] bg-[#171717] px-7 py-12 sm:px-12 lg:px-16">
          <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full border border-white/10"/><div className="absolute -right-10 -top-20 h-60 w-60 rounded-full border border-white/10"/>
          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center"><div className="max-w-2xl"><p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-[#ededE7]">Take the next step</p><h2 className="mt-4 text-3xl font-semibold tracking-[-.055em] text-white sm:text-5xl">Your future starts with one skill.</h2><p className="mt-4 max-w-xl text-sm leading-7 text-white/60">Choose a course, build practical knowledge and move closer to the career you want.</p></div><Link href="/counselling" className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#ededE7] px-7 py-4 text-xs font-extrabold text-[#171717] transition hover:bg-white">Get career guidance <ArrowUpRight size={16}/></Link></div>
        </div>
      </section>

      <FAQ />
      <Footer />

      {compare.length>0&&<div className="fixed bottom-5 left-1/2 z-50 flex w-[calc(100%-32px)] max-w-2xl -translate-x-1/2 items-center justify-between gap-3 rounded-2xl bg-[#171717] p-4 text-white shadow-2xl"><div><p className="text-xs font-bold">{compare.length} courses selected</p><p className="mt-1 text-[10px] text-white/60">Select up to 3 courses</p></div><div className="flex items-center gap-2"><button onClick={()=>setCompare([])} className="rounded-full px-3 py-2 text-[10px] font-bold text-white/70">Clear</button><button onClick={()=>{const names=compare.map(id=>courses.find(c=>c.id===id)?.title).filter(Boolean);window.alert("Selected courses:\\n"+names.join("\\n"));}} className="rounded-full bg-[#ededE7] px-5 py-3 text-[10px] font-bold text-[#171717]">Compare now</button></div></div>}
    </main>
  );
}
