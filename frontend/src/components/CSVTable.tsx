export default function CSVTable({ data, title }: { data: any[]; title: string }) {
  if (!data || data.length === 0) return null;
  const headers = Object.keys(data[0]);

  return (
    <div className="mt-8 bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-xl">
      <div className="px-6 py-4 border-b border-zinc-800 bg-zinc-900/80 backend-blur">
        <h3 className="font-semibold text-zinc-200 text-base">{title}</h3>
      </div>
      <div className="max-h-[450px] overflow-x-auto overflow-y-auto">
        <table className="w-full text-left text-sm border-collapse">
          <thead className="sticky top-0 bg-zinc-800 text-zinc-300 z-10 shadow-md">
            <tr>
              {headers.map((h) => (
                <th key={h} className="px-4 py-3.5 uppercase tracking-wider text-xs font-bold whitespace-nowrap border-b border-zinc-700">
                  {h.replace(/_/g, ' ')}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800 text-zinc-400">
            {data.map((row, idx) => (
              <tr key={idx} className="hover:bg-zinc-800/40 transition-colors">
                {headers.map((h) => (
                  <td key={h} className="px-4 py-3 whitespace-nowrap max-w-xs overflow-hidden text-ellipsis">
                    {typeof row[h] === 'object' ? JSON.stringify(row[h]) : String(row[h] ?? '')}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}