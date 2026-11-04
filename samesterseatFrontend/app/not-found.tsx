import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-[60vh] place-items-center bg-[#f4f3ee] px-5 text-[#171717]">
      <div className="max-w-md rounded-[24px] border border-[#deded8] bg-white p-8 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#77776f]">404</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">Page not found</h1>
        <p className="mt-4 text-sm leading-7 text-[#77776f]">The page you requested does not exist or may have moved.</p>
        <Link href="/" className="mt-6 inline-flex rounded-full bg-[#171717] px-5 py-3 text-sm font-bold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
          Return home
        </Link>
      </div>
    </main>
  );
}
