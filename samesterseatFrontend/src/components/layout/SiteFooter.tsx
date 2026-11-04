import Link from "next/link";
import { GraduationCap } from "lucide-react";

const groups = [
  { title: "Explore", links: [["Find colleges", "/colleges"], ["Explore courses", "/program"], ["Compare colleges", "/compare"], ["Online universities", "/online-universities"]] },
  { title: "Resources", links: [["Career guidance", "/career-guidance"], ["Scholarships", "/scholarships"], ["Admission guide", "/admissions"], ["Student reviews", "/reviews"]] },
  { title: "Company", links: [["Contact", "/contact"], ["Privacy policy", "/privacy"], ["Terms of use", "/terms"]] },
] as const;

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#e3e0d6] bg-[#fffaf2] px-5 pb-8 pt-14 sm:px-8 lg:px-14 lg:pt-16">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-10 border-b border-[#deded8] pb-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr]">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#171717] text-white">
                <GraduationCap size={23} />
              </span>
              <span className="text-xl font-bold tracking-tight text-[#171717]">
                CampusSeat<span className="text-[#77776f]">.</span>
              </span>
            </Link>
            <p className="mt-5 text-sm leading-7 text-[#77776f]">
              Helping students explore colleges, discover courses and plan their education journey with more clarity.
            </p>
          </div>
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-bold text-[#171717]">{group.title}</h3>
              <div className="mt-5 space-y-4">
                {group.links.map(([label, href]) => (
                  <Link key={label} href={href} className="block text-sm text-[#77776f] transition hover:text-[#171717]">
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-between gap-3 pt-6 text-xs leading-6 text-[#77776f] sm:flex-row sm:items-center">
          <p>© 2026 CampusSeat. All rights reserved.</p>
          <p className="max-w-2xl">Verify current fees, eligibility, approvals and admission dates directly with official institutions.</p>
        </div>
      </div>
    </footer>
  );
}
