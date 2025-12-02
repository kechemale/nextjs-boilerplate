"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-[#2E7D32] flex items-center justify-center text-white font-semibold">RH</div>
            <div>
              <div className="text-sm font-semibold" style={{ color: "#1A1A1A" }}>Clinical Assistant</div>
              <div className="text-xs text-zinc-500">MOH Guidelines</div>
            </div>
          </div>
          <nav className="hidden ml-6 items-center gap-4 text-sm text-zinc-700 md:flex">
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/guidelines" className="hover:underline">Guidelines</Link>
            <Link href="/feedback" className="hover:underline">Feedback</Link>
          </nav>
        </div>

        <div className="flex items-center gap-3 text-sm">
          <Link href="/chat" className="rounded bg-[#2E7D32] px-3 py-1 text-white text-sm">Start Chat</Link>
        </div>
      </div>
    </header>
  );
}
