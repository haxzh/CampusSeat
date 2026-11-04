import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/src/components/Navbar";
import SiteFooter from "@/src/components/layout/SiteFooter";

export type CountryPageProps = {
  country: string;
  heroTitle: string;
  heroAccent?: string;
  heroDescription?: string;
  colleges?: Array<{ name: string; short: string; location: string; type: string }>;
};

export default function CountryPage({
  country,
  heroTitle,
  heroAccent,
  heroDescription,
  colleges = [],
}: CountryPageProps) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f4f3ee] text-[#171717]">
        <section className="overflow-hidden bg-[#171717] px-5 py-16 text-white sm:px-8 sm:py-24">
          <div className="mx-auto max-w-[1440px]">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ededE7]">{country}</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
              {heroTitle}
              {heroAccent && <span className="mt-2 block text-[#ededE7]">{heroAccent}</span>}
            </h1>
            {heroDescription && <p className="mt-6 max-w-2xl text-base leading-8 text-[#ededE7] sm:text-lg">{heroDescription}</p>}
            <Link href="#country-content" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-bold text-[#171717]">
              Explore options <ArrowRight size={18} />
            </Link>
          </div>
        </section>
        <section id="country-content" className="px-5 py-14 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {colleges.map((college) => (
                <article key={`${college.name}-${college.location}`} className="rounded-[24px] border border-[#deded8] bg-white p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#171717] text-white">
                    <CheckCircle2 size={22} />
                  </div>
                  <h2 className="mt-5 text-xl font-bold">{college.short || college.name}</h2>
                  <p className="mt-2 text-sm text-[#77776f]">{college.location}</p>
                  <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-[#77776f]">{college.type}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
