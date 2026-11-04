"use client";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="grid min-h-[60vh] place-items-center bg-[#f4f3ee] px-5 text-[#171717]">
      <div className="max-w-md rounded-[24px] border border-[#deded8] bg-white p-8 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#77776f]">Something went wrong</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight">We could not load this page.</h1>
        <button onClick={reset} className="mt-6 rounded-full bg-[#171717] px-5 py-3 text-sm font-bold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
          Try again
        </button>
      </div>
    </main>
  );
}
