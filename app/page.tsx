"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [q, setQ] = useState("");

  function startChat(e?: React.FormEvent) {
    e?.preventDefault();
    // pass query as url param for quick start
    router.push(`/chat?q=${encodeURIComponent(q)}`);
  }

  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="w-full max-w-2xl">
        <h1 className="mb-6 text-center text-3xl font-semibold" style={{ color: "#1A1A1A" }}>Ask a clinical question…</h1>

        <form onSubmit={startChat} className="card p-6">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Ask a clinical question…"
            className="w-full rounded-md border border-zinc-200 px-4 py-4 text-lg focus:outline-none"
          />

          <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-2">
              <span className="text-sm rounded bg-zinc-100 px-3 py-1 text-zinc-600">Treatment for severe malaria</span>
              <span className="text-sm rounded bg-zinc-100 px-3 py-1 text-zinc-600">Hypertension management steps</span>
              <span className="text-sm rounded bg-zinc-100 px-3 py-1 text-zinc-600">Antibiotic dose for pneumonia</span>
            </div>

            <div className="flex gap-2">
              <button type="submit" className="btn-green px-4 py-2 text-sm">Start Chat</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
