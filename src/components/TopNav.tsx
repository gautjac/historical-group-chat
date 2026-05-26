"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function TopNav() {
  const pathname = usePathname();
  const isSettings = pathname === "/settings";

  return (
    <header className="shrink-0 sticky top-0 z-40 h-12 border-b border-zinc-200 dark:border-zinc-800 bg-white/85 dark:bg-zinc-950/85 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-zinc-950/70">
      <div className="h-full max-w-3xl mx-auto px-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 rounded"
          aria-label="Home"
        >
          <span className="w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 via-rose-500 to-amber-500 shrink-0" />
          <span className="text-[11px] uppercase tracking-[0.18em] text-zinc-700 dark:text-zinc-200 group-hover:text-zinc-900 dark:group-hover:text-zinc-50 transition-colors">
            Historical Group Chat
          </span>
        </Link>
        <Link
          href="/settings"
          aria-current={isSettings ? "page" : undefined}
          className={`text-xs px-2 py-1 rounded transition-colors ${
            isSettings
              ? "text-zinc-900 dark:text-zinc-50 bg-zinc-100 dark:bg-zinc-800"
              : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
          }`}
        >
          Settings
        </Link>
      </div>
    </header>
  );
}
