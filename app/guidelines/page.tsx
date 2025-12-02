export default function GuidelinesPage() {
  const guidelines = [
    { title: "Malaria", year: 2023, tags: ["adult"] },
    { title: "HIV National Guidelines", year: 2022, tags: ["adult"] },
    { title: "NCD Guidelines", year: 2021, tags: ["adult"] },
    { title: "Maternal Health Guidelines", year: 2020, tags: ["maternal"] },
    { title: "IMNCI", year: 2019, tags: ["child"] },
    { title: "TB Protocol", year: 2022, tags: ["child"] },
  ];

  return (
    <div className="py-8">
      <h2 className="mb-4 text-2xl font-semibold">Guideline Library</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {guidelines.map((g) => (
          <div key={g.title} className="card p-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-medium">{g.title}</h3>
                <div className="text-sm text-zinc-500">{g.year} • {g.tags.join(", ")}</div>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <a className="rounded border px-3 py-1 text-sm" href={`/guidelines/${g.title.replace(/\s+/g, "-").toLowerCase()}`}>Open</a>
              <a className="rounded bg-[#2E7D32] px-3 py-1 text-sm text-white" href={`/chat?q=${encodeURIComponent(`Ask about ${g.title}`)}`}>Ask from this guideline</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
