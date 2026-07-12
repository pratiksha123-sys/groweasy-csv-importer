export default function MetricsGrid({ success, skipped }: { success: number; skipped: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
      <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl shadow-sm">
        <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Successfully Processed</p>
        <p className="text-3xl font-bold text-emerald-400 mt-1">{success} records</p>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl shadow-sm">
        <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Skipped Records</p>
        <p className="text-3xl font-bold text-rose-400 mt-1">{skipped} records</p>
      </div>
    </div>
  );
}