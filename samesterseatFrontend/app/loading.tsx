export default function Loading() {
  return (
    <main className="grid min-h-[60vh] place-items-center bg-[#f4f3ee] px-5">
      <div className="rounded-[24px] border border-[#deded8] bg-white px-8 py-7 text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-[#deded8] border-t-[#171717]" />
        <p className="mt-4 text-sm font-semibold text-[#343434]">Loading CampusSeat...</p>
      </div>
    </main>
  );
}
