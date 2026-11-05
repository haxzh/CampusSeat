// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import {
//   ArrowRight,
//   ChevronDown,
//   ChevronRight,
//   GraduationCap,
//   Menu,
//   Search,
//   X,
// } from "lucide-react";

// // ==========================================
// // TYPES
// // ==========================================

// type Course = {
//   name: string;
//   slug: string;
// };

// type ProgramCategory = {
//   name: string;
//   href: string;
//   courses: Course[];
// };

// type NavChild = {
//   name: string;
//   href: string;
// };

// type NavItem = {
//   name: string;
//   href: string;
//   items?: NavChild[];
// };

// // ==========================================
// // PROGRAM DATA
// // ==========================================

// const programCategories: ProgramCategory[] = [
//   {
//     name: "Doctorate Programs",
//     href: "/programs/doctorate",
//     courses: [
//     //   { name: "PhD in Computer Science", slug: "phd-computer-science" },
//     //   { name: "PhD in Artificial Intelligence", slug: "phd-artificial-intelligence" },
//       { name: "PhD in Data Science", slug: "phd-data-science" },
//       { name: "PhD in Engineering", slug: "phd-engineering" },
//       { name: "Doctor of Business Administration (DBA)", slug: "dba" },
//       { name: "Doctor of Education (EdD)", slug: "edd" },
//         { name: "Doctor of Psychology (PsyD)", slug: "psyd" },
//         { name: "Doctor of Nursing Practice (DNP)", slug: "dnp" },
//         { name: "Doctor of Public Health (DrPH)", slug: "drph" },
//     ],
//   },

//   {
//     name: "Bachelor's Programs",
//     href: "/programs/bachelor",
//     courses: [
//         { name: "Bachelor of Science (B.Sc)", slug: "bsc" },
//         { name: "Bachelor of Arts (BA)", slug: "ba" },
//         { name: "Bachelor of Commerce (B.Com)", slug: "bcom" },
//         { name: "Bachelor of Business Administration (BBA)", slug: "bba" },
//         { name: "Bachelor of Computer Applications (BCA)", slug: "bca" },
//         // { name: "Bachelor of Engineering (B.E)", slug: "be" },
//         // { name: "Bachelor of Technology (B.Tech)", slug: "btech" },
//         { name: "Bachelor of Fine Arts (BFA)", slug: "bfa" },
//         { name: "Bachelor of Design (B.Des)", slug: "bdes" },
//         // { name: "Bachelor of Laws (LLB)", slug: "llb" },
//     ],
//     },
//   {
//     name: "Master's Programs",
//     href: "/programs/master",
//     courses: [
//       { name: "Master of Business Administration (MBA)", slug: "mba" },
//       { name: "Master of Computer Applications (MCA)", slug: "mca" },
//     //   { name: "Master of Technology (M.Tech)", slug: "mtech" },
//       { name: "Master of Science (M.Sc)", slug: "msc" },
//       { name: "Master of Arts (MA)", slug: "ma" },
//       { name: "Master of Commerce (M.Com)", slug: "mcom" },
//       { name: "Master of Data Science", slug: "data-science" },
//       { name: "Master of Cybersecurity", slug: "cybersecurity" },
//       { name: "Master of Finance", slug: "finance" },
//     ],
//   },

//   {
//     name: "Professional Education",
//     href: "/programs/professional",
//     courses: [
//       { name: "Full Stack Development", slug: "full-stack-development" },
//       { name: "Artificial Intelligence", slug: "artificial-intelligence" },
//       { name: "Machine Learning", slug: "machine-learning" },
//       { name: "Data Analytics", slug: "data-analytics" },
//       { name: "Cybersecurity", slug: "cybersecurity" },
//       { name: "Cloud Computing", slug: "cloud-computing" },
//       { name: "Digital Marketing", slug: "digital-marketing" },
//       { name: "UI/UX Design", slug: "ui-ux-design" },
//     ],
//   },

//   // {
//   //   name: "Executive Education",
//   //   href: "/programs/executive",
//   //   courses: [
//   //     { name: "Executive MBA", slug: "executive-mba" },
//   //     { name: "Executive DBA", slug: "executive-dba" },
//   //     { name: "Executive Leadership", slug: "executive-leadership" },
//   //     { name: "Strategic Management", slug: "strategic-management" },
//   //     { name: "Business Transformation", slug: "business-transformation" },
//   //     {name: "Innovation & Entrepreneurship", slug: "innovation-entrepreneurship" },
//   //     { name: "Global Business Strategy", slug: "global-business-strategy" },
//   //   ],
//   // },

//   // {
//   //   name: "Diploma Programs",
//   //   href: "/programs/diploma",
//   //   courses: [
//   //     { name: "Diploma in Computer Applications", slug: "dca" },
//   //     { name: "Diploma in Engineering", slug: "engineering" },
//   //     { name: "Diploma in Mechanical Engineering", slug: "mechanical-engineering" },
//   //     { name: "Diploma in Civil Engineering", slug: "civil-engineering" },
//   //     { name: "Diploma in Hotel Management", slug: "hotel-management" },
//   //     { name: "Diploma in Nursing", slug: "nursing" },
//   //   ],
//   // },

//   {
//     name: "Short-Term Courses",
//     href: "/programs/short-term",
//     courses: [
//       { name: "IELTS Preparation", slug: "ielts" },
//       { name: "English Language", slug: "english-language" },
//       { name: "German Language", slug: "german-language" },
//       { name: "French Language", slug: "french-language" },
//       { name: "Professional Certification", slug: "professional-certification" },
//     ],
//   },
// ];

// // ==========================================
// // NAVIGATION
// // ==========================================

// const navigation: NavItem[] = [
//   {
//     name: "Programs",
//     href: "/programs",
//     items: [
//       { name: "Explore Programs", href: "/programs" },
//       ...programCategories.map((program) => ({
//         name: program.name,
//         href: program.href,
//       })),
//     ],
//   },

//   {
//     name: "Destinations",
//     href: "/countries",
//     items: [
//       { name: "All Destinations", href: "/countries" },
//       { name: "United States", href: "/countries/united-states" },
//       { name: "United Kingdom", href: "/countries/united-kingdom" },
//       { name: "Germany", href: "/countries/germany" },
//       // { name: "Canada", href: "/countries/canada" },
//       // { name: "Australia", href: "/countries/australia" },
//       { name: "France", href: "/countries/france" },
//       { name: "Switzerland", href: "/countries/switzerland" },
//       { name: "India", href: "/countries/india" },
//     ],
//   },

//   { name: "Online Universities", href: "/online-universities" },
//   { name: "Admissions", href: "/admissions" },
//   { name: "Compare", href: "/compare" },
//   { name: "About Us", href: "/about-us" },
//   { name: "Career Guidance", href: "/career-guidance" },
//   { name: "Scholarships", href: "/scholarships" },
//   // { name: "Counselling", href: "/counselling" },
//   { name: "Blog", href: "/blog" },
// ];

// // ==========================================
// // NAVBAR COMPONENT
// // ==========================================

// type NavbarProps = {
//   brandName?: string;
//   brandTagline?: string;
//   flush?: boolean;
//   appearance?: "light" | "dark";
// };

// export default function Navbar({
//   brandName = "CampusSeat",
//   brandTagline = "Find your way forward",
//   flush = false,
//   appearance = "light",
// }: NavbarProps) {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

//   const [activeProgram, setActiveProgram] = useState<ProgramCategory>(
//     programCategories[1]
//   );
//   const focusRing = `focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
//     appearance === "dark" ? "focus-visible:outline-white" : "focus-visible:outline-[#171717]"
//   }`;

//   const [activeMobileProgram, setActiveMobileProgram] = useState<string | null>(
//     "Bachelor's Programs"
//   );

//   const [countries, setCountries] = useState<
//     Array<{ name: string; slug: string; isActive?: boolean }>
//   >([]);

//   useEffect(() => {
//     if (!flush) return;

//     const updateScrolledState = () => setIsScrolled(window.scrollY > 48);
//     updateScrolledState();
//     window.addEventListener("scroll", updateScrolledState, { passive: true });
//     return () => window.removeEventListener("scroll", updateScrolledState);
//   }, [flush]);

//   // ==========================================
//   // FETCH COUNTRIES
//   // ==========================================

//   useEffect(() => {
//     const apiUrl =
//       process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

//     fetch(`${apiUrl}/countries`)
//       .then((response) => (response.ok ? response.json() : []))
//       .then(
//         (items: Array<{
//           name: string;
//           slug: string;
//           isActive?: boolean;
//         }>) => {
//           setCountries(
//             items.filter((item) => item.isActive !== false)
//           );
//         }
//       )
//       .catch((error) => {
//         console.error("Failed to load countries:", error);
//       });
//   }, []);

//   // ==========================================
//   // DYNAMIC NAVIGATION
//   // ==========================================

//   const liveNavigation: NavItem[] = navigation.map((item) => {
//     if (item.name !== "Destinations") return item;

//     const destinations = new Map(
//       (item.items || []).map((option) => [
//         option.name.trim().toLocaleLowerCase(),
//         option,
//       ])
//     );

//     countries.forEach((country) => {
//       const key = country.name.trim().toLocaleLowerCase();
//       if (!destinations.has(key)) {
//         destinations.set(key, {
//           name: country.name,
//           href: `/countries/${country.slug}`,
//         });
//       }
//     });

//     return { ...item, items: Array.from(destinations.values()) };
//   });

//   // ==========================================
//   // CLOSE MENU
//   // ==========================================

//   const closeMenu = () => {
//     setMenuOpen(false);
//     setActiveDropdown(null);
//   };

//   // ==========================================
//   // JSX
//   // ==========================================

//   return (
//     <header
//       className={
//         flush || appearance === "dark"
//           ? "fixed inset-x-0 top-0 z-50 w-full"
//           : "fixed inset-x-0 top-0 z-50 px-2 py-2 sm:px-4 lg:px-1"
//       }
//     >

//       <nav
//         aria-label="Main navigation"
//         className={`mx-auto flex w-full items-center border border-[#eceae4] px-4 sm:px-6 lg:px-8 ${
//           appearance === "dark" && !flush ? "min-h-[96px]" : "min-h-[76px]"
//         } ${
//           flush
//             ? `max-w-none rounded-none border-x-0 border-t-0 transition-colors duration-300 ${
//                 isScrolled
//                   ? "border-white/10 bg-black shadow-[0_12px_38px_rgba(0,0,0,0.25)]"
//                   : "border-transparent bg-transparent shadow-none"
//               }`
//             : appearance === "dark"
//               ? "max-w-none rounded-none border-0 bg-black shadow-none"
//               : "max-w-[1520px] rounded-[24px] bg-[#f5f3ef]/90 shadow-[0_16px_42px_rgba(0,0,0,0.10)] backdrop-blur-2xl"
//         }`}
//       >

//         {/* ==================================
//             LOGO
//         ================================== */}

//         <Link
//           href="/"
//           onClick={closeMenu}
//           className={`group flex shrink-0 items-center gap-3 rounded-xl ${focusRing}`}
//         >
//           <span className={`flex h-10 w-10 items-center justify-center rounded-[13px] transition-transform group-hover:-rotate-3 ${flush || appearance === "dark" ? "bg-white text-black" : "bg-[#171717] text-white"}`}>
//             <GraduationCap size={22} strokeWidth={1.8} />
//           </span>

//           <span>
//             <span className={`block text-[21px] font-bold leading-none tracking-[-0.055em] sm:text-[23px] ${flush || appearance === "dark" ? "text-white" : "text-[#171717]"}`}>
//               {brandName}<span className={flush || appearance === "dark" ? "text-white/60" : "text-[#77776f]"}>.</span>
//             </span>

//             <span className={`mt-1 block text-[8px] font-bold uppercase tracking-[0.22em] ${flush || appearance === "dark" ? "text-white/65" : "text-[#77776f]"}`}>
//               {brandTagline}
//             </span>
//           </span>
//         </Link>

//         {/* ==================================
//             DESKTOP NAVIGATION
//         ================================== */}

//         <div className="hidden min-w-0 flex-1 items-center justify-center gap-[2px] lg:flex xl:gap-1">

//           {liveNavigation.map((item) => (

//             <div
//               key={item.name}
//               className="group relative"
//             >

//               {/* NAVIGATION LINK */}

//               <Link
//                 href={item.href}
//                 className={`inline-flex items-center gap-1 rounded-full px-[8px] py-3 text-[11px] font-semibold transition xl:px-[10px] xl:text-[12px] 2xl:px-3 ${flush ? "text-white hover:bg-white/10 hover:text-[#d6b46c]" : appearance === "dark" ? "text-white hover:bg-white/10 hover:text-white" : "text-[#343434] hover:bg-[#f1f1ed] hover:text-black"} ${focusRing}`}
//               >
//                 {item.name}

//                 {item.items && (
//                   <ChevronDown
//                     size={13}
//                     className="transition-transform group-hover:rotate-180"
//                   />
//                 )}
//               </Link>

//               {/* ==================================
//                   PROGRAMS MEGA MENU
//               ================================== */}

//               {item.name === "Programs" && (

//                 <div
//                   className="invisible absolute left-0 top-full z-50 w-[690px] translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"
//                 >

//                   <div className="flex overflow-hidden rounded-2xl border border-[#deded8] bg-white shadow-[0_24px_60px_rgba(0,0,0,0.16)]">

//                     {/* LEFT CATEGORY PANEL */}

//                     <div className="w-[280px] shrink-0 border-r border-[#ecece7] p-3">

//                       <Link
//                         href="/programs"
//                         className={`mb-2 flex items-center justify-between rounded-xl px-3.5 py-3 text-sm font-semibold text-[#343434] transition hover:bg-[#f1f1ed] ${focusRing}`}
//                       >
//                         Explore Programs
//                         <ArrowRight size={15} />
//                       </Link>

//                       {/* <div className="mb-2 px-3.5 pt-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#999990]">
//                         Study Categories
//                       </div> */}

//                       {programCategories.map((program) => (

//                         <Link
//                           key={program.name}
//                           href={program.href}
//                           onMouseEnter={() => setActiveProgram(program)}
//                           onFocus={() => setActiveProgram(program)}
//                           className={`flex items-center justify-between rounded-xl px-3.5 py-3 text-[13px] font-medium transition ${
//                             activeProgram.name === program.name
//                               ? "bg-[#f1f1ed] text-[#171717]"
//                               : "text-[#55554f] hover:bg-[#f7f7f4]"
//                           } ${focusRing}`}
//                         >
//                           {program.name}

//                           <ChevronRight
//                             size={16}
//                             className={
//                               activeProgram.name === program.name
//                                 ? "text-[#171717]"
//                                 : "text-[#999990]"
//                             }
//                           />

//                         </Link>

//                       ))}

//                     </div>

//                     {/* RIGHT COURSES PANEL */}

//                     <div className="min-w-0 flex-1 p-5">

//                       <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#999990]">
//                         Explore Courses
//                       </div>

//                       <h3 className="mb-1 text-lg font-bold tracking-tight text-[#171717]">
//                         {activeProgram.name}
//                       </h3>

//                       <p className="mb-4 text-xs text-[#888880]">
//                         Find the right course for your future.
//                       </p>

//                       <div className="max-h-[340px] space-y-1 overflow-y-auto pr-1">

//                         {activeProgram.courses.map((course) => (

//                           <Link
//                             key={course.slug}
//                             href={`${activeProgram.href}/${course.slug}`}
//                             className={`group/course flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-[12px] font-medium text-[#55554f] transition hover:bg-[#f1f1ed] hover:text-[#171717] ${focusRing}`}
//                           >
//                             <span>{course.name}</span>

//                             <ArrowRight
//                               size={14}
//                               className="shrink-0 text-[#aaa9a0] transition-transform group-hover/course:translate-x-1 group-hover/course:text-[#171717]"
//                             />

//                           </Link>

//                         ))}

//                       </div>

//                       <div className="mt-4 border-t border-[#ecece7] pt-3">

//                         <Link
//                           href={activeProgram.href}
//                           className="inline-flex items-center gap-2 text-xs font-bold text-[#171717] hover:underline"
//                         >
//                           View all {activeProgram.name}
//                           <ArrowRight size={14} />
//                         </Link>

//                       </div>

//                     </div>

//                   </div>

//                 </div>
//               )}

//               {/* ==================================
//                   DESTINATIONS DROPDOWN
//               ================================== */}

//               {item.items && item.name !== "Programs" && (

//                 <div className="invisible absolute left-0 top-full z-50 w-64 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">

//                   <div className="max-h-[420px] overflow-y-auto rounded-2xl border border-[#deded8] bg-white p-2 shadow-[0_24px_60px_rgba(0,0,0,0.16)]">

//                     {item.items.map((option) => (

//                       <Link
//                         key={option.name}
//                         href={option.href}
//                         className={`flex items-center justify-between rounded-xl px-3.5 py-3 text-sm font-medium text-[#3f3f3b] transition hover:bg-[#f1f1ed] ${focusRing}`}
//                       >
//                         {option.name}
//                         <ArrowRight size={14} className="text-[#77776f]" />
//                       </Link>

//                     ))}

//                   </div>

//                 </div>

//               )}

//             </div>

//           ))}

//         </div>

//         {/* ==================================
//             DESKTOP ACTION BUTTONS
//         ================================== */}

//         <div className="hidden shrink-0 items-center gap-2 lg:flex">

//           <Link
//             href="/programs"
//             aria-label="Search Programs"
//             className={`grid h-11 w-11 place-items-center rounded-full border transition ${
//               flush
//                 ? "border-white/30 text-white hover:bg-white/10"
//                 : appearance === "dark"
//                   ? "border-white/30 text-white hover:bg-white/10"
//                   : "border-[#deded8] hover:bg-[#f1f1ed]"
//             }`}
//           >
//             <Search size={18} />
//           </Link>

//           <Link
//             href="/contact"
//             className={`group inline-flex items-center gap-1.5 rounded-full px-4 py-3 text-xs font-bold transition hover:-translate-y-0.5 xl:px-5 xl:text-sm ${
//               flush || appearance === "dark"
//                 ? `bg-white text-black ${appearance === "dark" ? "hover:bg-[#e8e8e5]" : "hover:bg-[#d6b46c]"}`
//                 : "bg-[#171717] text-white"
//             } ${focusRing}`}
//           >
//             Get counselling
//             <ArrowRight size={15} />
//           </Link>

//         </div>

//         {/* ==================================
//             MOBILE MENU BUTTON
//         ================================== */}

//         <button
//           type="button"
//           aria-label={menuOpen ? "Close navigation" : "Open navigation"}
//           aria-expanded={menuOpen}
//           onClick={() => setMenuOpen((open) => !open)}
//           className={`ml-auto flex h-11 w-11 items-center justify-center rounded-xl border lg:hidden ${
//             flush || appearance === "dark"
//               ? "border-white/30 bg-black/20 text-white"
//               : "border-[#deded8] bg-white text-[#171717]"
//           } ${focusRing}`}
//         >
//           {menuOpen ? <X size={21} /> : <Menu size={21} />}
//         </button>

//       </nav>

//       {/* ==================================
//           MOBILE NAVIGATION
//       ================================== */}

//       {menuOpen && (

//         <div
//           className={`mx-auto max-h-[calc(100vh-76px)] w-full overflow-y-auto border border-[#deded8] bg-white p-3 shadow-[0_24px_60px_rgba(0,0,0,0.16)] lg:hidden ${
//             flush
//               ? "rounded-none border-x-0"
//               : "mt-2 max-w-[1440px] rounded-[22px]"
//           }`}
//         >

//           {liveNavigation.map((item) => (

//             <div
//               key={item.name}
//               className="border-b border-[#ecece7] last:border-0"
//             >

//               {/* MOBILE MAIN LINK */}

//               <div className="flex items-center">

//                 <Link
//                   href={item.href}
//                   onClick={closeMenu}
//                   className={`flex-1 rounded-xl px-3 py-3.5 text-sm font-semibold text-[#343434] hover:bg-[#f1f1ed] ${focusRing}`}
//                 >
//                   {item.name}
//                 </Link>

//                 {item.items && (

//                   <button
//                     type="button"
//                     aria-label={`Toggle ${item.name} submenu`}
//                     aria-expanded={activeDropdown === item.name}
//                     onClick={() =>
//                       setActiveDropdown((current) =>
//                         current === item.name ? null : item.name
//                       )
//                     }
//                     className={`rounded-xl p-3 text-[#343434] hover:bg-[#f1f1ed] ${focusRing}`}
//                   >
//                     <ChevronDown
//                       size={18}
//                       className={`transition-transform ${
//                         activeDropdown === item.name ? "rotate-180" : ""
//                       }`}
//                     />
//                   </button>

//                 )}

//               </div>

//               {/* ==================================
//                   MOBILE PROGRAM CATEGORIES
//               ================================== */}

//               {item.name === "Programs" &&
//                 activeDropdown === "Programs" && (

//                   <div className="mb-3 ml-3 border-l border-[#d6d6cf] pl-3">

//                     <Link
//                       href="/programs"
//                       onClick={closeMenu}
//                       className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-[#171717] hover:bg-[#f1f1ed]"
//                     >
//                       Explore All Programs
//                     </Link>

//                     {programCategories.map((program) => (

//                       <div key={program.name}>

//                         {/* CATEGORY */}

//                         <button
//                           type="button"
//                           onClick={() =>
//                             setActiveMobileProgram((current) =>
//                               current === program.name
//                                 ? null
//                                 : program.name
//                             )
//                           }
//                           className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-medium text-[#55554f] hover:bg-[#f1f1ed]"
//                         >
//                           {program.name}

//                           <ChevronDown
//                             size={15}
//                             className={`transition-transform ${
//                               activeMobileProgram === program.name
//                                 ? "rotate-180"
//                                 : ""
//                             }`}
//                           />

//                         </button>

//                         {/* COURSES */}

//                         {activeMobileProgram === program.name && (

//                           <div className="mb-2 ml-3 border-l border-[#deded8] pl-3">

//                             {program.courses.map((course) => (

//                               <Link
//                                 key={course.slug}
//                                 href={`${program.href}/${course.slug}`}
//                                 onClick={closeMenu}
//                                 className="block rounded-lg px-3 py-2.5 text-xs text-[#77776f] transition hover:bg-[#f1f1ed] hover:text-[#171717]"
//                               >
//                                 {course.name}
//                               </Link>

//                             ))}

//                             <Link
//                               href={program.href}
//                               onClick={closeMenu}
//                               className="block px-3 py-2 text-xs font-bold text-[#171717] hover:underline"
//                             >
//                               View All Programs →
//                             </Link>

//                           </div>

//                         )}

//                       </div>

//                     ))}

//                   </div>

//                 )}

//               {/* ==================================
//                   MOBILE DESTINATIONS
//               ================================== */}

//               {item.items &&
//                 item.name !== "Programs" &&
//                 activeDropdown === item.name && (

//                   <div className="mb-3 ml-4 border-l border-[#d6d6cf] pl-3">

//                     {item.items.map((option) => (

//                       <Link
//                         key={option.name}
//                         href={option.href}
//                         onClick={closeMenu}
//                         className={`block rounded-lg px-3 py-2.5 text-sm text-[#686860] hover:bg-[#f1f1ed] ${focusRing}`}
//                       >
//                         {option.name}
//                       </Link>

//                     ))}

//                   </div>

//                 )}

//             </div>

//           ))}

//           {/* MOBILE COUNSELLING BUTTON */}

//           <div className="mt-4 pb-1">

//             <Link
//               href="/contact"
//               onClick={closeMenu}
//               className={`inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#171717] px-3 py-3 text-sm font-bold text-white ${focusRing}`}
//             >
//               Get counselling
//               <ArrowRight size={15} />
//             </Link>

//           </div>

//         </div>

//       )}

//     </header>
//   );
// }







// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import {
//   ArrowRight,
//   ChevronDown,
//   GraduationCap,
//   Menu,
//   Search,
//   X,
// } from "lucide-react";

// // ==========================================
// // TYPES
// // ==========================================

// type NavChild = {
//   name: string;
//   href: string;
// };

// type NavItem = {
//   name: string;
//   href: string;
//   items?: NavChild[];
// };

// type Program = {
//   name: string;
//   href: string;
// };

// // ==========================================
// // MAIN PROGRAMS
// // Only 5 main folders
// // ==========================================

// const programs: Program[] = [
//   {
//     name: "Bachelor's Programs",
//     href: "/programs/bachelor",
//   },
//   {
//     name: "Doctorate Programs",
//     href: "/programs/doctorate",
//   },
//   {
//     name: "Master's Programs",
//     href: "/programs/master",
//   },
//   {
//     name: "Professional Programs",
//     href: "/programs/professional",
//   },
//   {
//     name: "Short-Term Courses",
//     href: "/programs/short-term",
//   },
// ];

// // ==========================================
// // NAVIGATION
// // ==========================================

// const navigation: NavItem[] = [
//   {
//     name: "Programs",
//     href: "/programs",
//   },
//   {
//     name: "Destinations",
//     href: "/countries",
//     items: [
//       { name: "All Destinations", href: "/countries" },
//       {
//         name: "United States",
//         href: "/countries/united-states",
//       },
//       {
//         name: "United Kingdom",
//         href: "/countries/united-kingdom",
//       },
//       {
//         name: "Germany",
//         href: "/countries/germany",
//       },
//       {
//         name: "France",
//         href: "/countries/france",
//       },
//       {
//         name: "Switzerland",
//         href: "/countries/switzerland",
//       },
//       {
//         name: "India",
//         href: "/countries/india",
//       },
//     ],
//   },

//   // {
//   //   name: "Online Universities",
//   //   href: "/online-universities",
//   // },
//   {
//     name: "Doctorate Programs",
//     href: "/programs/doctorate",
//   },
//   // {
//   //   name: "Admissions",
//   //   href: "/admissions",
//   // },
//   {
//     name: "Master's Programs",
//     href: "/programs/master",
//   },

//   {
//     name: "Bachelor's Programs",
//     href: "/programs/bachelor",
//   },
//   // {
//   //   name: "Compare",
//   //   href: "/compare",
//   // },
//   {
//     name: "Professional Programs",
//     href: "/programs/professional",
//   },
//   {
//     name: "Short-Term Courses",
//     href: "/programs/short-term",
//   },
//   {
//     name: "About Us",
//     href: "/about-us",
//   },
//   {
//     name: "Career Guidance",
//     href: "/career-guidance",
//   },
//   {
//     name: "Scholarships",
//     href: "/scholarships",
//   },
//   {
//     name: "Blog",
//     href: "/blog",
//   },
// ];

// // ==========================================
// // NAVBAR COMPONENT
// // ==========================================

// type NavbarProps = {
//   brandName?: string;
//   brandTagline?: string;
//   flush?: boolean;
//   appearance?: "light" | "dark";
// };

// export default function Navbar({
//   brandName = "CampusSeat",
//   brandTagline = "Find your way forward",
//   flush = false,
//   appearance = "dark",
// }: NavbarProps) {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const [activeDropdown, setActiveDropdown] =
//     useState<string | null>(null);

//   const [countries, setCountries] = useState<
//     Array<{
//       name: string;
//       slug: string;
//       isActive?: boolean;
//     }>
//   >([]);

//   const focusRing = `focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${appearance === "dark"
//       ? "focus-visible:outline-white"
//       : "focus-visible:outline-[#171717]"
//     }`;

//   // ==========================================
//   // SCROLL EFFECT
//   // ==========================================

//   useEffect(() => {
//     if (!flush) return;

//     const updateScrolledState = () => {
//       setIsScrolled(window.scrollY > 48);
//     };

//     updateScrolledState();

//     window.addEventListener("scroll", updateScrolledState, {
//       passive: true,
//     });

//     return () => {
//       window.removeEventListener("scroll", updateScrolledState);
//     };
//   }, [flush]);

//   // ==========================================
//   // FETCH COUNTRIES
//   // ==========================================

//   useEffect(() => {
//     const apiUrl =
//       process.env.NEXT_PUBLIC_API_URL ||
//       "http://localhost:5000/api";

//     const controller = new AbortController();

//     fetch(`${apiUrl}/countries`, {
//       signal: controller.signal,
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch countries");
//         }

//         return response.json();
//       })
//       .then(
//         (
//           items: Array<{
//             name: string;
//             slug: string;
//             isActive?: boolean;
//           }>
//         ) => {
//           if (Array.isArray(items)) {
//             setCountries(
//               items.filter(
//                 (item) => item.isActive !== false
//               )
//             );
//           }
//         }
//       )
//       .catch((error) => {
//         if (error.name !== "AbortError") {
//           console.error(
//             "Failed to load countries:",
//             error
//           );
//         }
//       });

//     return () => controller.abort();
//   }, []);

//   // ==========================================
//   // DYNAMIC DESTINATIONS
//   // ==========================================

//   const liveNavigation: NavItem[] = navigation.map(
//     (item) => {
//       if (item.name !== "Destinations") {
//         return item;
//       }

//       const destinations = new Map(
//         (item.items || []).map((option) => [
//           option.name.trim().toLowerCase(),
//           option,
//         ])
//       );

//       countries.forEach((country) => {
//         const key = country.name.trim().toLowerCase();

//         if (!destinations.has(key)) {
//           destinations.set(key, {
//             name: country.name,
//             href: `/countries/${country.slug}`,
//           });
//         }
//       });

//       return {
//         ...item,
//         items: Array.from(destinations.values()),
//       };
//     }
//   );

//   // ==========================================
//   // CLOSE MENU
//   // ==========================================

//   const closeMenu = () => {
//     setMenuOpen(false);
//     setActiveDropdown(null);
//   };

//   // ==========================================
//   // TOGGLE MOBILE DROPDOWN
//   // ==========================================

//   const toggleDropdown = (name: string) => {
//     setActiveDropdown((current) =>
//       current === name ? null : name
//     );
//   };

//   // ==========================================
//   // JSX
//   // ==========================================

//   return (
//     <header
//       className={
//         flush || appearance === "dark"
//           ? "fixed inset-x-0 top-0 z-50 w-full"
//           : "fixed inset-x-0 top-0 z-50 px-2 py-2 sm:px-4 lg:px-1"
//       }
//     >
//       <nav
//         aria-label="Main navigation"
//         className={`mx-auto flex w-full items-center border border-[#eceae4] px-4 sm:px-6 lg:px-8 ${appearance === "dark" && !flush
//             ? "min-h-[96px]"
//             : "min-h-[76px]"
//           } ${flush
//             ? `max-w-none rounded-none border-x-0 border-t-0 transition-colors duration-300 ${isScrolled
//               ? "border-white/10 bg-black shadow-[0_12px_38px_rgba(0,0,0,0.25)]"
//               : "border-transparent bg-transparent shadow-none"
//             }`
//             : appearance === "dark"
//               ? "max-w-none rounded-none border-0 bg-black shadow-none"
//               : "max-w-[1520px] rounded-[24px] bg-[#f5f3ef]/90 shadow-[0_16px_42px_rgba(0,0,0,0.10)] backdrop-blur-2xl"
//           }`}
//       >

//         {/* ==================================
//             LOGO
//         ================================== */}

//         <Link
//           href="/"
//           onClick={closeMenu}
//           className={`group flex shrink-0 items-center gap-3 rounded-xl ${focusRing}`}
//         >
//           <span
//             className={`flex h-10 w-10 items-center justify-center rounded-[13px] transition-transform group-hover:-rotate-3 ${flush || appearance === "dark"
//                 ? "bg-white text-black"
//                 : "bg-[#171717] text-white"
//               }`}
//           >
//             <GraduationCap
//               size={22}
//               strokeWidth={1.8}
//             />
//           </span>

//           <span>
//             <span
//               className={`block text-[21px] font-bold leading-none tracking-[-0.055em] sm:text-[23px] ${flush || appearance === "dark"
//                   ? "text-white"
//                   : "text-[#171717]"
//                 }`}
//             >
//               {brandName}
//               <span
//                 className={
//                   flush || appearance === "dark"
//                     ? "text-white/60"
//                     : "text-[#77776f]"
//                 }
//               >
//                 .
//               </span>
//             </span>

//             <span
//               className={`mt-1 block text-[8px] font-bold uppercase tracking-[0.22em] ${flush || appearance === "dark"
//                   ? "text-white/65"
//                   : "text-[#77776f]"
//                 }`}
//             >
//               {brandTagline}
//             </span>
//           </span>
//         </Link>

//         {/* ==================================
//             DESKTOP NAVIGATION
//         ================================== */}

//         <div className="hidden min-w-0 flex-1 items-center justify-center gap-[2px] lg:flex xl:gap-1">

//           {liveNavigation.map((item) => (
//             <div
//               key={item.name}
//               className="group relative"
//             >

//               {/* MAIN NAVIGATION LINK */}

//               <Link
//                 href={item.href}
//                 className={`inline-flex items-center gap-1 rounded-full px-[8px] py-3 text-[11px] font-semibold transition xl:px-[10px] xl:text-[12px] 2xl:px-3 ${flush
//                     ? "text-white hover:bg-white/10 hover:text-[#d6b46c]"
//                     : appearance === "dark"
//                       ? "text-white hover:bg-white/10"
//                       : "text-[#343434] hover:bg-[#f1f1ed] hover:text-black"
//                   } ${focusRing}`}
//               >
//                 {item.name}

//                 {(item.name === "Programs" ||
//                   item.items) && (
//                     <ChevronDown
//                       size={13}
//                       className="transition-transform group-hover:rotate-180"
//                     />
//                   )}
//               </Link>

//               {/* ==================================
//                   PROGRAMS DROPDOWN
//                   ONLY 5 MAIN PROGRAMS
//                   NO ARROWS
//                   NO VIEW ALL BUTTON
//               ================================== */}

//               {item.name === "Programs" && (
//                 <div className="invisible absolute left-0 top-full z-50 w-[400px] translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">

//                   <div className="overflow-hidden rounded-[22px] border border-[#deded8] bg-white p-3 shadow-[0_24px_60px_rgba(0,0,0,0.16)]">

//                     {/* DROPDOWN HEADER */}

//                     <div className="border-b border-[#ecece7] px-4 py-4">
//                       <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#999990]">
//                         Explore Programs
//                       </p>

//                       <h3 className="mt-1 text-xl font-bold text-[#171717]">
//                         Find Your Program
//                       </h3>

//                       <p className="mt-1 text-xs text-[#888880]">
//                         Find the right course for your future.
//                       </p>
//                     </div>

//                     {/* PROGRAM LINKS */}

//                     <div className="py-2">

//                       {programs.map((program) => (
//                         <Link
//                           key={program.href}
//                           href={program.href}
//                           className={`block rounded-xl px-4 py-4 text-[14px] font-semibold text-[#454540] transition hover:bg-[#f5f3ef] hover:text-[#171717] ${focusRing}`}
//                         >
//                           {program.name}
//                         </Link>
//                       ))}

//                     </div>

//                   </div>
//                 </div>
//               )}

//               {/* ==================================
//                   DESTINATIONS DROPDOWN
//               ================================== */}

//               {item.name === "Destinations" &&
//                 item.items && (
//                   <div className="invisible absolute left-0 top-full z-50 w-64 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">

//                     <div className="max-h-[420px] overflow-y-auto rounded-2xl border border-[#deded8] bg-white p-2 shadow-[0_24px_60px_rgba(0,0,0,0.16)]">

//                       {item.items.map((option) => (
//                         <Link
//                           key={option.name}
//                           href={option.href}
//                           className={`flex items-center justify-between rounded-xl px-3.5 py-3 text-sm font-medium text-[#3f3f3b] transition hover:bg-[#f1f1ed] ${focusRing}`}
//                         >
//                           {option.name}

//                           <ArrowRight
//                             size={14}
//                             className="text-[#77776f]"
//                           />
//                         </Link>
//                       ))}

//                     </div>
//                   </div>
//                 )}

//             </div>
//           ))}

//         </div>

//         {/* ==================================
//             DESKTOP ACTION BUTTONS
//         ================================== */}

//         <div className="hidden shrink-0 items-center gap-2 lg:flex">

//           <Link
//             href="/programs"
//             aria-label="Search Programs"
//             className={`grid h-11 w-11 place-items-center rounded-full border transition ${flush
//                 ? "border-white/30 text-white hover:bg-white/10"
//                 : appearance === "dark"
//                   ? "border-white/30 text-white hover:bg-white/10"
//                   : "border-[#deded8] hover:bg-[#f1f1ed]"
//               }`}
//           >
//             <Search size={18} />
//           </Link>

//           <Link
//             href="/contact"
//             className={`group inline-flex items-center gap-1.5 rounded-full px-4 py-3 text-xs font-bold transition hover:-translate-y-0.5 xl:px-5 xl:text-sm ${flush || appearance === "dark"
//                 ? "bg-white text-black hover:bg-[#e8e8e5]"
//                 : "bg-[#171717] text-white"
//               } ${focusRing}`}
//           >
//             Get counselling
//             <ArrowRight size={15} />
//           </Link>

//         </div>

//         {/* ==================================
//             MOBILE MENU BUTTON
//         ================================== */}

//         <button
//           type="button"
//           aria-label={
//             menuOpen
//               ? "Close navigation"
//               : "Open navigation"
//           }
//           aria-expanded={menuOpen}
//           onClick={() =>
//             setMenuOpen((open) => !open)
//           }
//           className={`ml-auto flex h-11 w-11 items-center justify-center rounded-xl border lg:hidden ${flush || appearance === "dark"
//               ? "border-white/30 bg-black/20 text-white"
//               : "border-[#deded8] bg-white text-[#171717]"
//             } ${focusRing}`}
//         >
//           {menuOpen ? (
//             <X size={21} />
//           ) : (
//             <Menu size={21} />
//           )}
//         </button>

//       </nav>

//       {/* ==================================
//           MOBILE NAVIGATION
//       ================================== */}

//       {menuOpen && (
//         <div
//           className={`mx-auto max-h-[calc(100vh-76px)] w-full overflow-y-auto border border-[#deded8] bg-white p-3 shadow-[0_24px_60px_rgba(0,0,0,0.16)] lg:hidden ${flush
//               ? "rounded-none border-x-0"
//               : "mt-2 max-w-[1440px] rounded-[22px]"
//             }`}
//         >

//           {liveNavigation.map((item) => (
//             <div
//               key={item.name}
//               className="border-b border-[#ecece7] last:border-0"
//             >

//               {/* MOBILE MAIN LINK */}

//               <div className="flex items-center">

//                 <Link
//                   href={item.href}
//                   onClick={closeMenu}
//                   className={`flex-1 rounded-xl px-3 py-3.5 text-sm font-semibold text-[#343434] hover:bg-[#f1f1ed] ${focusRing}`}
//                 >
//                   {item.name}
//                 </Link>

//                 {/* DROPDOWN TOGGLE */}

//                 {(item.name === "Programs" ||
//                   item.name === "Destinations") && (
//                     <button
//                       type="button"
//                       aria-label={`Toggle ${item.name} submenu`}
//                       aria-expanded={
//                         activeDropdown === item.name
//                       }
//                       onClick={() =>
//                         toggleDropdown(item.name)
//                       }
//                       className={`rounded-xl p-3 text-[#343434] hover:bg-[#f1f1ed] ${focusRing}`}
//                     >
//                       <ChevronDown
//                         size={18}
//                         className={`transition-transform ${activeDropdown === item.name
//                             ? "rotate-180"
//                             : ""
//                           }`}
//                       />
//                     </button>
//                   )}

//               </div>

//               {/* ==================================
//                   MOBILE PROGRAMS
//                   ONLY 5 MAIN PROGRAMS
//                   NO ARROWS
//                   NO VIEW ALL
//               ================================== */}

//               {item.name === "Programs" &&
//                 activeDropdown === "Programs" && (
//                   <div className="mb-3 ml-3 border-l border-[#d6d6cf] pl-3">

//                     {programs.map((program) => (
//                       <Link
//                         key={program.href}
//                         href={program.href}
//                         onClick={closeMenu}
//                         className="block rounded-lg px-3 py-3.5 text-sm font-medium text-[#686860] transition hover:bg-[#f1f1ed] hover:text-[#171717]"
//                       >
//                         {program.name}
//                       </Link>
//                     ))}

//                   </div>
//                 )}

//               {/* ==================================
//                   MOBILE DESTINATIONS
//               ================================== */}

//               {item.name === "Destinations" &&
//                 item.items &&
//                 activeDropdown === "Destinations" && (
//                   <div className="mb-3 ml-3 border-l border-[#d6d6cf] pl-3">

//                     {item.items.map((option) => (
//                       <Link
//                         key={option.name}
//                         href={option.href}
//                         onClick={closeMenu}
//                         className={`block rounded-lg px-3 py-2.5 text-sm text-[#686860] transition hover:bg-[#f1f1ed] ${focusRing}`}
//                       >
//                         {option.name}
//                       </Link>
//                     ))}

//                   </div>
//                 )}

//             </div>
//           ))}

//           {/* MOBILE COUNSELLING BUTTON */}

//           <div className="mt-4 pb-1">
//             <Link
//               href="/contact"
//               onClick={closeMenu}
//               className={`inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#171717] px-3 py-3 text-sm font-bold text-white ${focusRing}`}
//             >
//               Get counselling
//               <ArrowRight size={15} />
//             </Link>
//           </div>

//         </div>
//       )}

//     </header>
//   );
// }















"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { GraduationCap, Menu, X } from "lucide-react";

// ==========================================
// TYPES
// ==========================================

type NavItem = {
  name: string;
  href: string;
};

// ==========================================
// NAVIGATION
// ==========================================

const navigation: NavItem[] = [
  {
    name: "Doctorate Programs",
    href: "/programs/doctorate",
  },
  {
    name: "Master's Programs",
    href: "/programs/master",
  },
  {
    name: "Bachelor's Programs",
    href: "/programs/bachelor",
  },
  {
    name: "Professional Programs",
    href: "/programs/professional",
  },
  {
    name: "Short-Term Courses",
    href: "/programs/short-term",
  },
  {
    name: "About Us",
    href: "/about-us",
  },
  // {
  //   name: "Career Guidance",
  //   href: "/career-guidance",
  // },
  {
    name: "Blog",
    href: "/blog",
  },
];

// ==========================================
// NAVBAR COMPONENT
// ==========================================

type NavbarProps = {
  brandName?: string;
  brandTagline?: string;
  flush?: boolean;
  appearance?: "light" | "dark";
};

export default function Navbar({
  brandName = "CampusSeat",
  brandTagline = "Find your way forward",
  flush = false,
  appearance = "dark",
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const focusRing = `focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
    appearance === "dark"
      ? "focus-visible:outline-white"
      : "focus-visible:outline-[#171717]"
  }`;

  // ==========================================
  // SCROLL EFFECT
  // ==========================================

  useEffect(() => {
    if (!flush) return;

    const updateScrolledState = () => {
      setIsScrolled(window.scrollY > 48);
    };

    updateScrolledState();

    window.addEventListener("scroll", updateScrolledState, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", updateScrolledState);
    };
  }, [flush]);

  // ==========================================
  // CLOSE MENU
  // ==========================================

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // ==========================================
  // JSX
  // ==========================================

  return (
    <header
      className={
        flush || appearance === "dark"
          ? "fixed inset-x-0 top-0 z-50 w-full"
          : "fixed inset-x-0 top-0 z-50 px-2 py-2 sm:px-4 lg:px-1"
      }
    >
      <nav
        aria-label="Main navigation"
        className={`mx-auto flex w-full items-center border border-[#eceae4] px-4 sm:px-6 lg:px-8 ${
          appearance === "dark" && !flush ? "min-h-[96px]" : "min-h-[76px]"
        } ${
          flush
            ? `max-w-none rounded-none border-x-0 border-t-0 transition-colors duration-300 ${
                isScrolled
                  ? "border-white/10 bg-black shadow-[0_12px_38px_rgba(0,0,0,0.25)]"
                  : "border-transparent bg-transparent shadow-none"
              }`
            : appearance === "dark"
              ? "max-w-none rounded-none border-0 bg-black shadow-none"
              : "max-w-[1520px] rounded-[24px] bg-[#f5f3ef]/90 shadow-[0_16px_42px_rgba(0,0,0,0.10)] backdrop-blur-2xl"
        }`}
      >
        {/* ==================================
            LOGO
        ================================== */}

        <Link
          href="/"
          onClick={closeMenu}
          className={`group flex shrink-0 items-center gap-3 rounded-xl ${focusRing}`}
        >
          <span
            className={`flex h-10 w-10 items-center justify-center rounded-[13px] transition-transform group-hover:-rotate-3 ${
              flush || appearance === "dark"
                ? "bg-white text-black"
                : "bg-[#171717] text-white"
            }`}
          >
            <GraduationCap size={22} strokeWidth={1.8} />
          </span>

          <span>
            <span
              className={`block text-[21px] font-bold leading-none tracking-[-0.055em] sm:text-[23px] ${
                flush || appearance === "dark"
                  ? "text-white"
                  : "text-[#171717]"
              }`}
            >
              {brandName}
              <span
                className={
                  flush || appearance === "dark"
                    ? "text-white/60"
                    : "text-[#77776f]"
                }
              >
                .
              </span>
            </span>

            <span
              className={`mt-1 block text-[8px] font-bold uppercase tracking-[0.22em] ${
                flush || appearance === "dark"
                  ? "text-white/65"
                  : "text-[#77776f]"
              }`}
            >
              {brandTagline}
            </span>
          </span>
        </Link>

        {/* ==================================
            DESKTOP NAVIGATION
        ================================== */}

        <div className="hidden min-w-0 flex-1 items-center justify-end gap-[2px] lg:flex xl:gap-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`inline-flex items-center gap-1 rounded-full px-[8px] py-3 text-[11px] font-semibold transition xl:px-[10px] xl:text-[12px] 2xl:px-3 ${
                flush
                  ? "text-white hover:bg-white/10 hover:text-[#d6b46c]"
                  : appearance === "dark"
                    ? "text-white hover:bg-white/10"
                    : "text-[#343434] hover:bg-[#f1f1ed] hover:text-black"
              } ${focusRing}`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* ==================================
            MOBILE MENU BUTTON
        ================================== */}

        <button
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className={`ml-auto flex h-11 w-11 items-center justify-center rounded-xl border lg:hidden ${
            flush || appearance === "dark"
              ? "border-white/30 bg-black/20 text-white"
              : "border-[#deded8] bg-white text-[#171717]"
          } ${focusRing}`}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {/* ==================================
          MOBILE NAVIGATION
      ================================== */}

      {menuOpen && (
        <div
          className={`mx-auto max-h-[calc(100vh-76px)] w-full overflow-y-auto border border-[#deded8] bg-white p-3 shadow-[0_24px_60px_rgba(0,0,0,0.16)] lg:hidden ${
            flush
              ? "rounded-none border-x-0"
              : "mt-2 max-w-[1440px] rounded-[22px]"
          }`}
        >
          {navigation.map((item) => (
            <div
              key={item.name}
              className="border-b border-[#ecece7] last:border-0"
            >
              <Link
                href={item.href}
                onClick={closeMenu}
                className={`block rounded-xl px-3 py-3.5 text-sm font-semibold text-[#343434] hover:bg-[#f1f1ed] ${focusRing}`}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      )}
    </header>
  );
}