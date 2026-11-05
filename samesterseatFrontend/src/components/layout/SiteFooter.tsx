import Link from "next/link";
import { GraduationCap } from "lucide-react";

const groups = [
  { title: "Explore", links: [["Find colleges", "/colleges"], ["Explore courses", "/program"], ["Compare colleges", "/compare"], ["Online universities", "/online-universities"]] },
  { title: "Resources", links: [["Career guidance", "/career-guidance"], ["Scholarships", "/scholarships"], ["Admission guide", "/admissions"], ["Student reviews", "/reviews"]] },
  { title: "Company", links: [["Contact", "/contact"], ["Privacy policy", "/privacy-policy"], ["Terms of use", "/terms"]] },
] as const;

export default function SiteFooter({ monochrome = false }: { monochrome?: boolean }) {
  const footerClass = monochrome
    ? "border-t border-[#3a3a38] bg-[#0a0a0a] text-white"
    : "border-t border-[#e3e0d6] bg-[#fffaf2]";
  const mutedText = monochrome ? "text-white/60" : "text-[#77776f]";

  return (
    <footer className={`${footerClass} px-5 pb-8 pt-14 sm:px-8 lg:px-14 lg:pt-16`}>
      <div className="mx-auto max-w-[1500px]">
        <div className={`grid gap-10 border-b pb-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr] ${monochrome ? "border-white/15" : "border-[#deded8]"}`}>
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-3">
              <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${monochrome ? "bg-white text-black" : "bg-[#171717] text-white"}`}>
                <GraduationCap size={23} />
              </span>
              <span className={`text-xl font-bold tracking-tight ${monochrome ? "text-white" : "text-[#171717]"}`}>
                CampusSeat<span className={monochrome ? "text-white/60" : "text-[#77776f]"}>.</span>
              </span>
            </Link>
            <p className={`mt-5 text-sm leading-7 ${mutedText}`}>
              Helping students explore colleges, discover courses and plan their education journey with more clarity.
            </p>
          </div>
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className={`text-sm font-bold ${monochrome ? "text-white" : "text-[#171717]"}`}>{group.title}</h3>
              <div className="mt-5 space-y-4">
                {group.links.map(([label, href]) => (
                  <Link key={label} href={href} className={`block text-sm transition hover:text-current ${mutedText}`}>
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={`flex flex-col justify-between gap-3 pt-6 text-xs leading-6 sm:flex-row sm:items-center ${mutedText}`}>
          <p>© 2026 CampusSeat. All rights reserved.</p>
          <p className="max-w-2xl">Verify current fees, eligibility, approvals and admission dates directly with official institutions.</p>
        </div>
      </div>
    </footer>
  );
}
