import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import Navbar from "@/src/components/Navbar";
import EnquiryForm from "@/src/components/EnquiryForm";
import { getDatabase } from "@/lib/mongodb";
import { io } from "next/cache";

export const instant = false;

export default async function UniversityPage({ params }: { params: Promise<{ slug: string }> }) {
    let university: Record<string, unknown> | null = null;
    try {
        const { slug } = await params;
        await io();
        const db = await getDatabase();
        university = await db.collection("colleges").findOne({
            $or: [{ slug }, { shortName: new RegExp(slug.replaceAll("-", " "), "i") }],
        });
    } catch {
        university = null;
    }
    const { slug } = await params;
    if (!university) {
        const title = slug.replaceAll("-", " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
        university = { name: title, location: "Location available on request", description: "Explore this institution and request personalised guidance from CampusSeat." };
    }
    const name = String(university.name || "");
    const location = String(university.location || "");
    const country = location.includes(",") ? location.split(",").at(-1)?.trim() : location;

    return (
        <>
            <Navbar />
            <main className="bg-[#f4f4f0] pb-16">
                <section className="px-5 pb-10 pt-8 sm:px-8 lg:px-12">
                    <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[32px] bg-[#171717] text-white">
                        <div className="relative min-h-[520px] px-7 py-10 sm:px-12 lg:px-16 lg:py-16">
                            {typeof university.image === "string" && university.image && <div className="absolute inset-0 opacity-35" style={{ backgroundImage: `url(${university.image.startsWith("http") ? university.image : "https://images.unsplash.com/" + university.image + "?auto=format&fit=crop&w=1800&q=85"})`, backgroundSize: "cover", backgroundPosition: "center" }} />}
                            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
                            <div className="relative max-w-3xl">
                                <Link href="/colleges" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"><ArrowLeft size={16} /> All universities</Link>
                                <p className="mt-16 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/70"><MapPin size={15} /> {location}</p>
                                <h1 className="mt-5 text-5xl font-semibold leading-[0.92] tracking-[-0.06em] sm:text-7xl">{name}</h1>
                                <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">{String(university.description || "")}</p>
                                <a href="#enquire" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-black">Enquire now <ArrowRight size={16} /></a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mx-auto grid max-w-[1400px] gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_420px] lg:px-12">
                    <div className="rounded-[28px] bg-white p-7 sm:p-10">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#77776f]">University profile</p>
                        <h2 className="mt-3 text-3xl font-semibold tracking-tight">Plan your application with clarity</h2>
                        <p className="mt-5 leading-8 text-[#65655f]">{String(university.description || "CampusSeat can help you understand programme options and prepare your university application. Confirm current fees, eligibility and deadlines with the institution.")}</p>
                        <div className="mt-8 grid gap-4 sm:grid-cols-3">
                            {[["Location", location], ["Programme options", Array.isArray(university.courses) ? university.courses.join(", ") : "Available on enquiry"], ["Official website", typeof university.website === "string" && university.website ? university.website : "Available on enquiry"]].map(([label, value]) => (
                                <div key={label} className="rounded-2xl border border-[#deded8] p-5"><p className="text-xs text-[#77776f]">{label}</p><p className="mt-2 font-semibold">{value}</p></div>
                            ))}
                        </div>
                    </div>
                    <aside id="enquire" className="h-fit rounded-[28px] bg-white p-6 shadow-[0_24px_70px_rgba(0,0,0,0.08)] lg:sticky lg:top-28">
                        <EnquiryForm university={name} country={country || ""} />
                    </aside>
                </section>
            </main>
        </>
    );
}
