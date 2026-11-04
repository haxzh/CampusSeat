"use client";

import { FormEvent, ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
    Building2, CalendarCheck, Earth, GraduationCap, LayoutDashboard, LogOut,
    MessageSquareText, Pencil, Plus, Trash2, TrendingUp, Users,
} from "lucide-react";

type College = {
    id: string; name: string; shortName: string; location: string; type: string; institutionType: string;
    category: string; description: string; image: string; fees: string;
    courses: string[]; courseFees: { name: string; fee: number; duration: string }[];
    averageSalary: number; highestSalary: number; rating: number; website: string;
};
type Country = { id: string; name: string; slug: string; code: string; isActive: boolean; popularCourses: string[] };
type RecordItem = { id: string; name?: string; firstName?: string; lastName?: string; email?: string; phone?: string; date?: string; time?: string; status?: string; reference?: string; preferredCountry?: string; university?: string; course?: string; createdAt?: string };

const emptyCollege: College = {
    id: "", name: "", shortName: "", location: "", type: "Private", institutionType: "College", category: "Engineering",
    description: "", image: "", fees: "Varies by programme", courses: [], courseFees: [],
    averageSalary: 0, highestSalary: 0, rating: 0, website: "",
};
const emptyCountry: Country = { id: "", name: "", slug: "", code: "", isActive: true, popularCourses: [] };
const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export default function AdminDashboard() {
    const router = useRouter();
    const [active, setActive] = useState("dashboard");
    const [colleges, setColleges] = useState<College[]>([]);
    const [countries, setCountries] = useState<Country[]>([]);
    const [students, setStudents] = useState<RecordItem[]>([]);
    const [enquiries, setEnquiries] = useState<RecordItem[]>([]);
    const [bookings, setBookings] = useState<RecordItem[]>([]);
    const [stats, setStats] = useState({ students: 0, enquiries: 0, newEnquiries: 0, bookings: 0, colleges: 0, countries: 0 });
    const [collegeForm, setCollegeForm] = useState(emptyCollege);
    const [collegeModal, setCollegeModal] = useState(false);
    const [editingCollege, setEditingCollege] = useState(false);
    const [countryForm, setCountryForm] = useState(emptyCountry);
    const [countryModal, setCountryModal] = useState(false);
    const [editingCountry, setEditingCountry] = useState(false);
    const [error, setError] = useState("");

    const token = () => typeof window === "undefined" ? "" : localStorage.getItem("campusseat_admin_token") || "";
    const authHeaders = (): HeadersInit => ({
        "Content-Type": "application/json",
        Authorization: `Bearer ${token()}`,
    });

    async function load() {
        const session = await fetch(`${apiUrl}/admin/session`, { headers: { Authorization: `Bearer ${token()}` } });
        if (!session.ok) {
            router.push("/admin/login");
            return;
        }
        const headers = { Authorization: `Bearer ${token()}` };
        const [collegeRes, countryRes, studentRes, enquiryRes, bookingRes, statsRes] = await Promise.all([
            fetch(`${apiUrl}/colleges`), fetch(`${apiUrl}/countries`), fetch(`${apiUrl}/users/students`, { headers }),
            fetch(`${apiUrl}/enquiries`, { headers }), fetch(`${apiUrl}/counselling`, { headers }),
            fetch(`${apiUrl}/admin/dashboard`, { headers }),
        ]);
        if (collegeRes.ok) setColleges(await collegeRes.json());
        if (countryRes.ok) setCountries(await countryRes.json());
        if (studentRes.ok) setStudents(await studentRes.json());
        if (enquiryRes.ok) setEnquiries(await enquiryRes.json());
        if (bookingRes.ok) setBookings(await bookingRes.json());
        if (statsRes.ok) setStats(await statsRes.json());
    }

    useEffect(() => {
        const timer = window.setTimeout(() => void load(), 0);
        return () => window.clearTimeout(timer);
    }, []);

    async function saveCollege(event: FormEvent) {
        event.preventDefault();
        setError("");
        const response = await fetch(editingCollege ? `${apiUrl}/colleges/${collegeForm.id}` : `${apiUrl}/colleges`, {
            method: editingCollege ? "PATCH" : "POST", headers: authHeaders(), body: JSON.stringify(collegeForm),
        });
        if (!response.ok) {
            setError((await response.json()).error || "Unable to save college.");
            return;
        }
        setCollegeModal(false); setCollegeForm(emptyCollege); await load();
    }

    async function removeCollege(id: string) {
        if (!confirm("Delete this college?")) return;
        const response = await fetch(`${apiUrl}/colleges/${id}`, { method: "DELETE", headers: { Authorization: `Bearer ${token()}` } });
        if (response.ok) await load();
    }

    async function saveCountry(event: FormEvent) {
        event.preventDefault();
        const body = { ...countryForm, popularCourses: countryForm.popularCourses };
        const response = await fetch(editingCountry ? `${apiUrl}/countries/${countryForm.id}` : `${apiUrl}/countries`, {
            method: editingCountry ? "PATCH" : "POST", headers: authHeaders(), body: JSON.stringify(body),
        });
        if (!response.ok) {
            setError((await response.json()).error || "Unable to save country.");
            return;
        }
        setCountryModal(false); setCountryForm(emptyCountry); await load();
    }

    async function removeCountry(id: string) {
        if (!confirm("Delete this country?")) return;
        const response = await fetch(`${apiUrl}/countries/${id}`, { method: "DELETE", headers: { Authorization: `Bearer ${token()}` } });
        if (response.ok) await load();
    }

    async function logout() {
        localStorage.removeItem("campusseat_admin_token");
        await fetch(`${apiUrl}/admin/logout`, { method: "POST" });
        router.push("/admin/login");
    }

    const institutions = colleges.map((college) => ({
        ...college,
        institutionType: college.institutionType || (/university|institute/i.test(`${college.name} ${college.type}`) ? "University" : "College"),
    }));
    const universities = institutions.filter((college) => college.institutionType === "University").length;
    const collegeCount = colleges.length - universities;
    const overviewSeries = [
        { label: "Students", value: stats.students, color: "#171717" },
        { label: "Leads", value: stats.newEnquiries, color: "#6d5dfc" },
        { label: "Counselling", value: stats.bookings, color: "#ef8354" },
        { label: "Countries", value: stats.countries, color: "#35a98b" },
    ];
    const chartMaximum = Math.max(...overviewSeries.map((item) => item.value), 1);
    const cards = [
        ["Colleges", collegeCount, Building2],
        ["Universities", universities, GraduationCap],
        ["Students", stats.students, Users],
        ["New leads", stats.newEnquiries, MessageSquareText],
        ["Counselling requests", stats.bookings, CalendarCheck],
        ["Countries", stats.countries, Earth],
    ] as const;
    const dashboardCards = cards.filter(([label]) => !["Colleges", "Universities"].includes(label));

    const nav = [
        ["dashboard", LayoutDashboard, "Dashboard"],
        ["colleges", Building2, "Colleges"],
        ["countries", Earth, "Countries"],
        ["students", Users, "Students"],
        ["enquiries", MessageSquareText, "Enquiries"],
        ["counselling", CalendarCheck, "Counselling"],
    ] as const;

    const tableWrap = (title: string, count: number, action: ReactNode, children: ReactNode) => (
        <div className="overflow-hidden rounded-[24px] border border-[#deded8] bg-white">
            <div className="flex items-center justify-between border-b border-[#e9e9e4] p-5">
                <div><h2 className="font-semibold">{title}</h2><p className="mt-1 text-xs text-[#77776f]">{count} records</p></div>{action}
            </div>{children}
        </div>
    );

    return (
        <main className="min-h-screen bg-[#f3f3ef] text-[#171717]">
            <aside className="fixed inset-y-0 left-0 hidden w-64 flex-col bg-[#171717] p-5 text-white md:flex">
                <div className="flex items-center gap-3 px-2 py-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-[#171717]"><GraduationCap size={21} /></span>
                    <div><b>CampusSeat</b><p className="text-[10px] uppercase tracking-[0.2em] text-white/50">Admin panel</p></div>
                </div>
                <nav className="mt-10 space-y-2 text-sm">
                    {nav.map(([key, Icon, label]) => (
                        <button key={key} onClick={() => setActive(key)} className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left ${active === key ? "bg-white/10 text-white" : "text-white/65 hover:bg-white/5"}`}>
                            <Icon size={18} /> {label}
                        </button>
                    ))}
                </nav>
                <button onClick={logout} className="mt-auto flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-white/70 hover:bg-white/10"><LogOut size={18} /> Sign out</button>
            </aside>
            <div className="md:ml-64">
                <header className="border-b border-[#deded8] bg-white px-5 py-5 sm:px-8">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#77776f]">CampusSeat administration</p>
                    <h1 className="mt-1 text-2xl font-semibold capitalize">{active === "dashboard" ? "Overview" : active}</h1>
                </header>
                <section className="p-5 sm:p-8">
                    {active === "dashboard" && (
                        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                            {dashboardCards.map(([label, value, Icon]) => (
                                <div key={label} className="rounded-2xl border border-[#deded8] bg-white p-5">
                                    <div className="flex items-center justify-between text-sm text-[#77776f]">{label}<Icon size={19} /></div>
                                    <b className="mt-4 block text-3xl">{value}</b>
                                </div>
                            ))}
                        </div>
                    )}

                    {active === "dashboard" && (
                        <div className="mt-6">
                            <div className="rounded-[24px] border border-[#deded8] bg-white p-6 shadow-[0_12px_35px_rgba(0,0,0,.04)]">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#77776f]">Performance</p>
                                        <h2 className="mt-1 text-lg font-semibold">Campus activity</h2>
                                    </div>
                                    <span className="flex items-center gap-1 rounded-full bg-neutral-50 px-3 py-1.5 text-xs font-semibold text-neutral-700"><TrendingUp size={14} /> Live</span>
                                </div>
                                <div className="mt-7 flex h-52 items-end gap-4 border-b border-[#e7e7e2] px-2">
                                    {overviewSeries.map((item) => (
                                        <div key={item.label} className="flex h-full flex-1 items-end justify-center">
                                            <div className="group flex w-full max-w-16 flex-col items-center justify-end">
                                                <span className="mb-2 text-xs font-bold">{item.value}</span>
                                                <div className="w-full rounded-t-xl transition-all duration-500" style={{ height: `${Math.max((item.value / chartMaximum) * 168, item.value ? 18 : 5)}px`, backgroundColor: item.color }} />
                                                <span className="mt-3 whitespace-nowrap text-[11px] font-semibold text-[#77776f]">{item.label}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {active === "colleges" && <div className="mt-8">
                        {tableWrap("College and university directory", colleges.length,
                            <button onClick={() => { setCollegeForm(emptyCollege); setEditingCollege(false); setCollegeModal(true); }} className="flex items-center gap-2 rounded-xl bg-[#171717] px-4 py-3 text-sm font-bold text-white"><Plus size={17} /> Add college</button>,
                            <div className="overflow-x-auto"><table className="w-full text-left text-sm"><thead className="bg-[#f7f7f3] text-xs uppercase text-[#77776f]"><tr><th className="px-5 py-4">Institution</th><th className="px-5 py-4">College / University</th><th className="px-5 py-4">Location</th><th className="px-5 py-4">Category</th><th className="px-5 py-4 text-right">Actions</th></tr></thead><tbody>{institutions.map((college) => (
                                <tr key={college.id} className="border-t border-[#ecece7]"><td className="px-5 py-4"><b>{college.name}</b><p className="text-xs text-[#77776f]">{college.type || "Institution"}</p></td><td className="px-5 py-4"><span className={`rounded-full px-3 py-1 text-xs font-bold ${college.institutionType === "University" ? "bg-violet-50 text-violet-700" : "bg-sky-50 text-sky-700"}`}>{college.institutionType}</span></td><td className="px-5 py-4">{college.location || "-"}</td><td className="px-5 py-4">{college.category || "-"}</td><td className="px-5 py-4 text-right"><button aria-label={`Edit ${college.name}`} onClick={() => { setCollegeForm(college); setEditingCollege(true); setCollegeModal(true); }} className="mr-2 rounded-lg border p-2"><Pencil size={16} /></button><button aria-label={`Delete ${college.name}`} onClick={() => removeCollege(college.id)} className="rounded-lg border p-2 text-red-600"><Trash2 size={16} /></button></td></tr>
                            ))}</tbody></table></div>
                        )}
                    </div>}

                    {active === "countries" && <div>
                        {tableWrap("Countries", countries.length,
                            <button onClick={() => { setCountryForm(emptyCountry); setEditingCountry(false); setCountryModal(true); }} className="flex items-center gap-2 rounded-xl bg-[#171717] px-4 py-3 text-sm font-bold text-white"><Plus size={17} /> Add country</button>,
                            <div className="overflow-x-auto"><table className="w-full text-left text-sm"><thead className="bg-[#f7f7f3] text-xs uppercase text-[#77776f]"><tr><th className="px-5 py-4">Country</th><th className="px-5 py-4">Code</th><th className="px-5 py-4">Popular courses</th><th className="px-5 py-4 text-right">Actions</th></tr></thead><tbody>{countries.map((country) => (
                                <tr key={country.id} className="border-t border-[#ecece7]"><td className="px-5 py-4"><b>{country.name}</b></td><td className="px-5 py-4">{country.code}</td><td className="px-5 py-4">{country.popularCourses?.join(", ") || "-"}</td><td className="px-5 py-4 text-right"><button aria-label={`Edit ${country.name}`} onClick={() => { setCountryForm(country); setEditingCountry(true); setCountryModal(true); }} className="mr-2 rounded-lg border p-2"><Pencil size={16} /></button><button aria-label={`Delete ${country.name}`} onClick={() => removeCountry(country.id)} className="rounded-lg border p-2 text-red-600"><Trash2 size={16} /></button></td></tr>
                            ))}</tbody></table></div>
                        )}
                    </div>}

                    {active === "students" && tableWrap("Registered students", students.length, null, <SimpleTable rows={students} columns={[["name", "Student"], ["email", "Email"], ["mobile", "Mobile"]]} />)}
                    {active === "enquiries" && tableWrap(`Enquiries Â· ${stats.newEnquiries} new`, enquiries.length, null, <SimpleTable rows={enquiries} columns={[["name", "Student"], ["email", "Email"], ["phone", "Phone"], ["preferredCountry", "Country"], ["status", "Status"]]} />)}
                    {active === "counselling" && tableWrap("Counselling requests", bookings.length, null, <SimpleTable rows={bookings} columns={[["name", "Student"], ["email", "Email"], ["phone", "Phone"], ["date", "Date"], ["time", "Time"], ["status", "Status"]]} />)}
                </section>
            </div>

            {collegeModal && <Modal title={editingCollege ? "Edit college" : "Add college"} close={() => setCollegeModal(false)}>
                <form onSubmit={saveCollege}>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {[["name", "College name"], ["shortName", "Short name"], ["location", "Location"], ["type", "Institution type"], ["category", "Category"], ["fees", "Fees"], ["averageSalary", "Average salary"], ["highestSalary", "Highest salary"], ["image", "Image URL"], ["website", "Website"]].map(([key, label]) => (
                            <label key={key} className="text-xs font-bold uppercase text-[#77776f]">{label}<input required={key === "name"} value={String(collegeForm[key as keyof College] ?? "")} onChange={(event) => setCollegeForm({ ...collegeForm, [key]: key === "averageSalary" || key === "highestSalary" ? Number(event.target.value) || 0 : event.target.value })} className="mt-2 w-full rounded-xl border px-3 py-3 text-sm normal-case text-black" /></label>
                        ))}
                        <label className="text-xs font-bold uppercase text-[#77776f]">College / University
                            <select value={collegeForm.institutionType || "College"} onChange={(event) => setCollegeForm({ ...collegeForm, institutionType: event.target.value })} className="mt-2 w-full rounded-xl border px-3 py-3 text-sm normal-case text-black">
                                <option value="College">College</option>
                                <option value="University">University</option>
                            </select>
                        </label>
                    </div>
                    <label className="mt-4 block text-xs font-bold uppercase text-[#77776f]">Description<textarea value={collegeForm.description} onChange={(event) => setCollegeForm({ ...collegeForm, description: event.target.value })} className="mt-2 min-h-24 w-full rounded-xl border px-3 py-3 text-sm normal-case text-black" /></label>
                    <label className="mt-4 block text-xs font-bold uppercase text-[#77776f]">Courses (comma separated)<input value={collegeForm.courses.join(", ")} onChange={(event) => setCollegeForm({ ...collegeForm, courses: event.target.value.split(",").map((v) => v.trim()).filter(Boolean) })} className="mt-2 w-full rounded-xl border px-3 py-3 text-sm normal-case text-black" /></label>
                    <label className="mt-4 block text-xs font-bold uppercase text-[#77776f]">Course fees<textarea value={collegeForm.courseFees.map((course) => `${course.name}|${course.fee}|${course.duration}`).join("\n")} onChange={(event) => setCollegeForm({ ...collegeForm, courseFees: event.target.value.split("\n").map((line) => line.split("|")).filter(([name]) => name?.trim()).map(([name, fee, duration]) => ({ name: name.trim(), fee: Number(fee) || 0, duration: (duration || "").trim() })) })} placeholder={"B.Tech|250000|4 years"} className="mt-2 min-h-24 w-full rounded-xl border px-3 py-3 text-sm normal-case text-black" /></label>
                    {error && <p className="mt-4 rounded-xl bg-red-50 p-3 text-sm text-red-700">{error}</p>}
                    <button className="mt-6 w-full rounded-xl bg-[#171717] py-3.5 font-bold text-white">{editingCollege ? "Save changes" : "Add college"}</button>
                </form>
            </Modal>}

            {countryModal && <Modal title={editingCountry ? "Edit country" : "Add country"} close={() => setCountryModal(false)}>
                <form onSubmit={saveCountry} className="grid gap-4">
                    {[["name", "Country name"], ["slug", "Slug"], ["code", "Country code"]].map(([key, label]) => <label key={key} className="text-xs font-bold uppercase text-[#77776f]">{label}<input required={key === "name"} value={String(countryForm[key as keyof Country] ?? "")} onChange={(event) => setCountryForm({ ...countryForm, [key]: event.target.value })} className="mt-2 w-full rounded-xl border px-3 py-3 text-sm normal-case text-black" /></label>)}
                    <label className="text-xs font-bold uppercase text-[#77776f]">Popular courses (comma separated)<input value={countryForm.popularCourses.join(", ")} onChange={(event) => setCountryForm({ ...countryForm, popularCourses: event.target.value.split(",").map((v) => v.trim()).filter(Boolean) })} className="mt-2 w-full rounded-xl border px-3 py-3 text-sm normal-case text-black" /></label>
                    {error && <p className="rounded-xl bg-red-50 p-3 text-sm text-red-700">{error}</p>}
                    <button className="rounded-xl bg-[#171717] py-3.5 font-bold text-white">{editingCountry ? "Save changes" : "Add country"}</button>
                </form>
            </Modal>}
        </main>
    );
}

function Modal({ title, close, children }: { title: string; close: () => void; children: ReactNode }) {
    return <div className="fixed inset-0 z-50 grid overflow-y-auto bg-black/60 p-4 place-items-center">
        <div className="my-4 max-h-[calc(100vh-32px)] w-full max-w-2xl overflow-y-auto rounded-[24px] bg-white p-6">
            <div className="flex items-center justify-between"><h2 className="text-xl font-semibold">{title}</h2><button type="button" onClick={close} className="text-2xl">Ã—</button></div><div className="mt-6">{children}</div>
        </div>
    </div>;
}

function SimpleTable({ rows, columns }: { rows: RecordItem[]; columns: [string, string][] }) {
    return <div className="overflow-x-auto"><table className="w-full text-left text-sm"><thead className="bg-[#f7f7f3] text-xs uppercase text-[#77776f]"><tr>{columns.map(([, label]) => <th key={label} className="px-5 py-4">{label}</th>)}</tr></thead><tbody>{rows.map((row) => <tr key={row.id} className="border-t border-[#ecece7]">{columns.map(([key]) => <td key={key} className="px-5 py-4">{key === "name" ? (row.name || `${row.firstName || ""} ${row.lastName || ""}`.trim()) : String(row[key as keyof RecordItem] || "-")}</td>)}</tr>)}</tbody></table>{rows.length === 0 && <p className="p-8 text-center text-sm text-[#77776f]">No records found.</p>}</div>;
}
