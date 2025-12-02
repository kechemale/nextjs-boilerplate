"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

function AssistantMessage({ title, bullets, source }: { title?: string; bullets: string[]; source?: string }) {
  return (
    <div className="mb-4 w-full">
      <div className="card p-4">
        {title && <div className="mb-2 font-semibold">{title}</div>}
        <ul className="list-disc pl-5 text-sm">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
        {source && <div className="mt-3"><span className="pill-blue">{source}</span></div>}
      </div>
    </div>
  );
}

function UserMessage({ text }: { text: string }) {
  return (
    <div className="mb-4 flex justify-end">
      <div className="rounded-md bg-[#2E7D32] px-4 py-2 text-white">{text}</div>
    </div>
  );
}

export default function ChatPage() {
  const params = useSearchParams();
  const q = params?.get("q") ?? "";
  const [input, setInput] = useState(q);

  return (
    <div className="py-4">
      <div className="mb-4 flex items-center gap-3">
        <button className="text-sm">← Back</button>
        <div className="text-lg font-semibold">MOH Clinical Assistant</div>
        <div className="ml-auto text-sm text-zinc-500">i</div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
        <aside className="col-span-1 max-h-[60vh] overflow-auto rounded card p-3">
          <div className="mb-3 font-medium">Conversations</div>
          <div className="flex flex-col gap-2 text-sm text-zinc-700">
            <div className="cursor-pointer rounded px-2 py-1 hover:bg-zinc-100">Malaria Treatment</div>
            <div className="cursor-pointer rounded px-2 py-1 hover:bg-zinc-100">NCD Guidelines Question</div>
          </div>
        </aside>

        <main className="col-span-1 sm:col-span-3 flex flex-col">
          <div className="mb-4 flex-1 overflow-auto">
            <AssistantMessage title="Assessment" bullets={["Fever and altered consciousness", "Parasitemia confirmed"]} source={"MOH Malaria Guideline 2023 – p.14"} />
            <AssistantMessage title="Treatment" bullets={["Start IV artesunate", "Supportive care and monitoring"]} source={"MOH Malaria Guideline 2023 – p.16"} />
            <UserMessage text={input || "What is the recommended dose for IV artesunate?"} />
          </div>

          <div className="mt-4 flex items-center gap-3">
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your question..." className="flex-1 rounded-md border px-3 py-2" />
            <button className="rounded bg-[#2E7D32] px-4 py-2 text-white">Send</button>
          </div>
        </main>
      </div>
    </div>
  );
}
