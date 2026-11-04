"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Compass,
  Globe2,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  Menu,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  X,
} from "lucide-react";
import Navbar from "@/src/components/Navbar";

const images = {
  hero: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1800&q=85",
  students: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=85",
  campus: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=85",
  graduate: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=85",
  library: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1200&q=85",
  counselling: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=85",
};

const values = [
  {
    icon: Target,
    title: "Student-first guidance",
    text: "We start with your ambitions, circumstances and interests, then help you explore pathways that make sense for your next step.",
    tone: "sage",
  },
  {
    icon: ShieldCheck,
    title: "Clarity you can trust",
    text: "We make it easier to compare universities, programmes, entry requirements and important application details.",
    tone: "gold",
  },
  {
    icon: Globe2,
    title: "A wider world of choice",
    text: "Explore study destinations and learning opportunities across India and around the world from one place.",
    tone: "blue",
  },
  {
    icon: HeartHandshake,
    title: "Support at every step",
    text: "From the first shortlist to your application journey, our aim is to make the process feel more manageable.",
    tone: "rose",
  },
];

const journey = [
  {
    number: "01",
    title: "Discover your direction",
    text: "Tell us what you want to study, where you hope to go and what matters most to you.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Explore your options",
    text: "Compare destinations, universities and programmes to build a shortlist that fits your goals.",
    icon: BookOpen,
  },
  {
    number: "03",
    title: "Make an informed choice",
    text: "Understand the details, ask questions and get guidance before moving forward.",
    icon: CheckCircle2,
  },
  {
    number: "04",
    title: "Take your next step",
    text: "Prepare for the application journey with a clearer plan and the right information.",
    icon: GraduationCap,
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#8b7047]">
      <span className="h-px w-8 bg-[#b18b52]" />
      {children}
    </div>
  );
}

function ImageWithFallback({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  return failed ? (
    <div
      role="img"
      aria-label={alt}
      className={`bg-[linear-gradient(135deg,#dce7e2,#b9c9c2_55%,#e8dfcf)] ${className}`}
    />
  ) : (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}

export default function AboutUsPage() {
  const reduceMotion = useReducedMotion();
  const [showAll, setShowAll] = useState(false);

  const reveal = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.15 },
          transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[#f5f3ed] text-[#202522]">
        {/* HERO */}
        <section className="relative isolate min-h-[690px] overflow-hidden bg-[#172b2b] pt-28 text-white sm:pt-32">
          <div className="absolute inset-0 -z-20">
            <ImageWithFallback
              src={images.hero}
              alt="Students learning and collaborating together"
              className="h-full w-full opacity-35"
            />
          </div>
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(13,31,31,.96)_0%,rgba(19,43,42,.86)_48%,rgba(19,43,42,.28)_100%)]" />
          <div className="absolute -right-32 top-20 -z-10 h-[440px] w-[440px] rounded-full border border-white/10" />
          <div className="absolute -right-12 top-40 -z-10 h-[280px] w-[280px] rounded-full border border-white/10" />

          <div className="mx-auto grid min-h-[570px] max-w-[1440px] items-center gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:px-14">
            <motion.div {...reveal(0)}>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[.18em] text-[#e8d6b5] backdrop-blur">
                <Sparkles size={14} /> Welcome to CampusSeat
              </div>
              <h1 className="max-w-3xl text-[48px] font-semibold leading-[1.02] tracking-[-.06em] sm:text-6xl lg:text-[76px]">
                Your future has
                <span className="mt-2 block font-serif font-normal italic text-[#d8bd91]">
                  more than one destination.
                </span>
              </h1>
              <p className="mt-8 max-w-xl text-[15px] leading-[1.9] text-white/75 sm:text-[17px]">
                We help students discover universities, compare study options
                and navigate the journey towards an education that fits their
                ambitions.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/colleges"
                  className="group inline-flex h-14 items-center gap-4 rounded-full bg-[#d8bd91] pl-7 pr-2 text-sm font-bold text-[#1c302d] transition hover:bg-white"
                >
                  Explore universities
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1c302d] text-white transition group-hover:rotate-45">
                    <ArrowUpRight size={18} />
                  </span>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-14 items-center gap-2 rounded-full border border-white/35 px-7 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Talk to our team <ArrowRight size={16} />
                </Link>
              </div>
              <div className="mt-14 flex flex-wrap gap-x-9 gap-y-4 border-t border-white/15 pt-7">
                <div>
                  <p className="text-2xl font-semibold tracking-tight">Global</p>
                  <p className="mt-1 text-xs text-white/60">Study destinations</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold tracking-tight">One place</p>
                  <p className="mt-1 text-xs text-white/60">To explore options</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold tracking-tight">You first</p>
                  <p className="mt-1 text-xs text-white/60">Guidance that starts with you</p>
                </div>
              </div>
            </motion.div>

            <motion.div {...reveal(0.15)} className="relative mx-auto hidden h-[500px] w-full max-w-[560px] lg:block">
              <div className="absolute right-0 top-0 h-[82%] w-[78%] overflow-hidden rounded-[34px] border border-white/20 shadow-2xl">
                <ImageWithFallback src={images.campus} alt="Modern university campus" className="h-full w-full" />
              </div>
              <div className="absolute bottom-0 left-0 h-[48%] w-[54%] overflow-hidden rounded-[28px] border-[7px] border-[#172b2b] shadow-2xl">
                <ImageWithFallback src={images.students} alt="Students working together" className="h-full w-full" />
              </div>
              <div className="absolute -left-5 top-[18%] flex items-center gap-3 rounded-2xl border border-white/50 bg-white/95 p-4 text-[#202522] shadow-xl">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e4eee8] text-[#28665b]"><Globe2 size={21} /></span>
                <div><p className="text-sm font-bold">Think globally</p><p className="text-xs text-[#77776f]">Explore more possibilities</p></div>
              </div>
              <div className="absolute bottom-[9%] right-[-12px] flex items-center gap-3 rounded-2xl border border-white/50 bg-white/95 p-4 text-[#202522] shadow-xl">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f2eadc] text-[#987442]"><GraduationCap size={22} /></span>
                <div><p className="text-sm font-bold">Your next chapter</p><p className="text-xs text-[#77776f]">Starts with a clear plan</p></div>
              </div>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 h-2 w-full bg-[linear-gradient(90deg,#b18b52_0%,#d8bd91_45%,#6f9586_100%)]" />
        </section>

        {/* INTRO */}
        <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-14">
          <div className="mx-auto grid max-w-[1300px] items-center gap-14 lg:grid-cols-[.85fr_1.15fr]">
            <motion.div {...reveal()}>
              <Eyebrow>Who we are</Eyebrow>
              <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-.055em] sm:text-5xl lg:text-[60px]">
                Making the world of education
                <span className="font-serif font-normal italic text-[#718b7e]"> easier to navigate.</span>
              </h2>
            </motion.div>
            <motion.div {...reveal(0.1)} className="lg:pl-10">
              <p className="text-[16px] leading-[1.95] text-[#686e68]">
                Choosing where and what to study is a big decision. There are
                destinations to understand, universities to compare, courses
                to research and important details to consider. CampusSeat is
                designed to bring that discovery journey together in one
                student-focused space.
              </p>
              <p className="mt-5 text-[16px] leading-[1.95] text-[#686e68]">
                Our purpose is simple: make it easier for students and families
                to explore opportunities, ask better questions and take their
                next step with greater confidence.
              </p>
              <Link href="/colleges" className="mt-8 inline-flex items-center gap-3 text-sm font-bold text-[#28665b] transition hover:gap-5">
                Discover what you can explore <ArrowUpRight size={18} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* IMAGE / MISSION */}
        <section className="px-5 pb-20 sm:px-8 lg:px-14">
          <div className="mx-auto grid max-w-[1440px] overflow-hidden rounded-[34px] bg-[#e7ece5] lg:grid-cols-2">
            <div className="relative min-h-[380px] lg:min-h-[560px]">
              <ImageWithFallback src={images.graduate} alt="Graduates celebrating their achievement" className="absolute inset-0 h-full w-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#142d2b]/55 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white sm:bottom-12 sm:left-12">
                <p className="text-xs font-bold uppercase tracking-[.2em] text-[#e6d2ae]">The CampusSeat belief</p>
                <p className="mt-3 max-w-md text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">Every student deserves to see what is possible.</p>
              </div>
            </div>
            <div className="flex flex-col justify-center px-7 py-12 sm:px-12 lg:px-16 lg:py-16">
              <Eyebrow>Our mission</Eyebrow>
              <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-.05em] sm:text-5xl">
                Better information.
                <span className="block font-serif font-normal italic text-[#718b7e]">More confident decisions.</span>
              </h2>
              <p className="mt-7 text-[15px] leading-[1.9] text-[#68716a]">
                We bring education discovery, university information and
                student guidance closer together. By making options easier to
                understand, we want to help learners make choices that reflect
                their interests, goals and individual circumstances.
              </p>
              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#d3ddd3] bg-white/65 p-5">
                  <Users className="mb-4 text-[#28665b]" size={23} />
                  <h3 className="font-bold">Built around students</h3>
                  <p className="mt-2 text-sm leading-6 text-[#727970]">Your goals guide the discovery process.</p>
                </div>
                <div className="rounded-2xl border border-[#d3ddd3] bg-white/65 p-5">
                  <Lightbulb className="mb-4 text-[#a47d45]" size={23} />
                  <h3 className="font-bold">Designed for clarity</h3>
                  <p className="mt-2 text-sm leading-6 text-[#727970]">Useful information for considered choices.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="bg-[#fffefa] px-5 py-20 sm:px-8 sm:py-28 lg:px-14">
          <div className="mx-auto max-w-[1300px]">
            <motion.div {...reveal()} className="mx-auto max-w-2xl text-center">
              <Eyebrow>What guides us</Eyebrow>
              <h2 className="text-4xl font-semibold tracking-[-.055em] sm:text-5xl lg:text-[58px]">
                The values behind
                <span className="font-serif font-normal italic text-[#718b7e]"> every decision.</span>
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-[#747970]">
                The way we work matters just as much as the information we share.
              </p>
            </motion.div>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((item, index) => {
                const Icon = item.icon;
                const tones: Record<string, string> = {
                  sage: "bg-[#e6eee8] text-[#28665b]",
                  gold: "bg-[#f2eadc] text-[#9b7743]",
                  blue: "bg-[#e7edf2] text-[#456b83]",
                  rose: "bg-[#f3e8e4] text-[#a16e60]",
                };
                return (
                  <motion.article
                    key={item.title}
                    {...reveal(index * 0.07)}
                    className="group rounded-[26px] border border-[#e8e7df] bg-[#fffefa] p-7 transition duration-500 hover:-translate-y-2 hover:border-[#c9d7cd] hover:shadow-[0_24px_55px_rgba(31,54,47,.09)]"
                  >
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${tones[item.tone]}`}>
                      <Icon size={25} strokeWidth={1.8} />
                    </div>
                    <h3 className="mt-7 text-xl font-semibold tracking-tight">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#737970]">{item.text}</p>
                    <div className="mt-7 h-px w-10 bg-[#b18b52] transition-all duration-500 group-hover:w-16" />
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* JOURNEY */}
        <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-14">
          <div className="mx-auto grid max-w-[1300px] gap-14 lg:grid-cols-[.8fr_1.2fr]">
            <motion.div {...reveal()}>
              <Eyebrow>Your journey</Eyebrow>
              <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-.055em] sm:text-5xl lg:text-[58px]">
                From “what if”
                <span className="block font-serif font-normal italic text-[#718b7e]">to what’s next.</span>
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-8 text-[#737970]">
                A good education decision begins with the right questions.
                CampusSeat helps you bring the pieces together, one step at a time.
              </p>
              <Link href="/contact" className="mt-8 inline-flex h-12 items-center gap-3 rounded-full bg-[#1d3733] px-6 text-sm font-semibold text-white transition hover:bg-[#2d6257]">
                Get in touch <ArrowUpRight size={17} />
              </Link>
            </motion.div>
            <div className="relative">
              <div className="absolute bottom-8 left-[27px] top-8 w-px bg-[#d8d8cc] sm:left-[31px]" />
              <div className="space-y-4">
                {journey.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={step.number}
                      {...reveal(index * 0.07)}
                      className="relative grid grid-cols-[56px_1fr] gap-5 rounded-[24px] border border-[#e5e3d9] bg-white/75 p-5 sm:grid-cols-[64px_1fr] sm:gap-7 sm:p-7"
                    >
                      <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d8e2d9] bg-[#e8efe9] text-[#28665b] sm:h-16 sm:w-16">
                        <Icon size={24} strokeWidth={1.7} />
                      </div>
                      <div className="pt-1">
                        <p className="text-[10px] font-bold tracking-[.2em] text-[#a17e4d]">STEP {step.number}</p>
                        <h3 className="mt-2 text-xl font-semibold tracking-tight">{step.title}</h3>
                        <p className="mt-2 max-w-xl text-sm leading-7 text-[#737970]">{step.text}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* GLOBAL DISCOVERY */}
        <section className="bg-[#1b3431] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-14">
          <div className="mx-auto grid max-w-[1300px] items-center gap-12 lg:grid-cols-[1fr_.8fr]">
            <motion.div {...reveal()}>
              <Eyebrow>Explore beyond borders</Eyebrow>
              <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-.055em] sm:text-5xl lg:text-[62px]">
                One starting point.
                <span className="block font-serif font-normal italic text-[#d8bd91]">A world of possibilities.</span>
              </h2>
              <p className="mt-6 max-w-xl text-[15px] leading-8 text-white/65">
                Discover study destinations, universities and courses in one
                place. Whether you are exploring options close to home or
                considering an international experience, begin with a clearer view.
              </p>
              <Link href="/countries" className="mt-8 inline-flex h-14 items-center gap-4 rounded-full bg-[#d8bd91] pl-7 pr-2 text-sm font-bold text-[#1c302d] transition hover:bg-white">
                Explore study destinations
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1c302d] text-white"><ArrowUpRight size={18} /></span>
              </Link>
            </motion.div>
            <motion.div {...reveal(0.12)} className="relative">
              <div className="overflow-hidden rounded-[30px] border border-white/15">
                <ImageWithFallback src={images.library} alt="University library and study space" className="h-[360px] w-full sm:h-[440px]" />
              </div>
              <div className="absolute -bottom-6 -left-5 flex items-center gap-3 rounded-2xl bg-white p-4 text-[#202522] shadow-2xl sm:-left-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e6eee8] text-[#28665b]"><Globe2 size={22} /></span>
                <div><p className="text-sm font-bold">Explore with confidence</p><p className="text-xs text-[#737970]">Your journey, your choice</p></div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-14">
          <motion.div {...reveal()} className="relative mx-auto max-w-[1300px] overflow-hidden rounded-[34px] bg-[#e8ede6] px-7 py-14 text-center sm:px-14 sm:py-20">
            <div className="absolute -right-16 -top-28 h-72 w-72 rounded-full border-[38px] border-white/40" />
            <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full border-[38px] border-[#d6e1d6]/70" />
            <div className="relative mx-auto max-w-3xl">
              <Eyebrow>Start your next chapter</Eyebrow>
              <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-.055em] sm:text-5xl lg:text-[62px]">
                Your next step starts with
                <span className="font-serif font-normal italic text-[#718b7e]"> the right conversation.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-[15px] leading-8 text-[#6f786f]">
                Tell us what you are looking for. We’ll help you explore the
                information and options you need to move forward.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <Link href="/contact" className="inline-flex h-14 items-center gap-4 rounded-full bg-[#1d3733] pl-7 pr-2 text-sm font-semibold text-white transition hover:bg-[#2d6257]">
                  Connect with CampusSeat <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15"><ArrowUpRight size={18} /></span>
                </Link>
                <Link href="/colleges" className="inline-flex h-14 items-center rounded-full border border-[#cbd5ca] px-7 text-sm font-semibold text-[#28443c] transition hover:bg-white">
                  Browse universities
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

        {/* FOOTER */}
        <footer className="bg-[#142724] px-5 pb-8 pt-14 text-white sm:px-8 lg:px-14">
          <div className="mx-auto grid max-w-[1300px] gap-10 border-b border-white/15 pb-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_.8fr_.8fr]">
            <div>
              <Link href="/" className="text-2xl font-bold tracking-[-.04em]">Campus<span className="text-[#d8bd91]">Seat.</span></Link>
              <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
                A student-focused platform to discover universities, explore
                study destinations and make more informed education decisions.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold">Explore</h3>
              <div className="mt-5 flex flex-col gap-3 text-sm text-white/60">
                <Link className="transition hover:text-white" href="/colleges">Universities</Link>
                <Link className="transition hover:text-white" href="/countries">Study destinations</Link>
                <Link className="transition hover:text-white" href="/courses">Courses</Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold">CampusSeat</h3>
              <div className="mt-5 flex flex-col gap-3 text-sm text-white/60">
                <Link className="transition hover:text-white" href="/about">About us</Link>
                <Link className="transition hover:text-white" href="/contact">Contact</Link>
                <Link className="transition hover:text-white" href="/blog">Blog</Link>
              </div>
            </div>
          </div>
          <div className="mx-auto flex max-w-[1300px] flex-col gap-3 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} CampusSeat. All rights reserved.</p>
            <p>Discover. Compare. Take your next step.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
