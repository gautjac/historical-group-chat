"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { clearApiKey, getApiKey, setApiKey } from "@/lib/storage";

function maskKey(key: string) {
  if (!key) return "";
  const tail = key.slice(-4);
  return `sk-ant-…${tail}`;
}

export default function SettingsPage() {
  const [value, setValue] = useState("");
  const [storedTail, setStoredTail] = useState("");

  useEffect(() => {
    const existing = getApiKey();
    setValue(existing);
    setStoredTail(existing);
  }, []);

  function onChange(next: string) {
    setValue(next);
    const trimmed = next.trim();
    setApiKey(trimmed);
    setStoredTail(trimmed);
  }

  function clear() {
    clearApiKey();
    setValue("");
    setStoredTail("");
  }

  const valid = storedTail.startsWith("sk-ant-") && storedTail.length > 20;

  return (
    <div className="flex flex-col min-h-dvh max-w-xl w-full mx-auto">
      <header className="px-5 pt-8 pb-2 flex items-center gap-3">
        <Link
          href="/"
          aria-label="Home"
          className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 text-xl leading-none w-7 h-7 flex items-center justify-center -ml-1"
        >
          ←
        </Link>
        <div className="text-xs uppercase tracking-wider text-zinc-500">
          Settings
        </div>
      </header>

      <main className="flex-1 px-5 pb-10">
        <h1 className="text-2xl font-semibold mb-2">Anthropic API key</h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
          Historical Group Chat generates the live conversation in your browser
          using your own Anthropic key. The key is stored only in localStorage
          and sent to the app's server route, which proxies the Anthropic call
          and discards the key after each request.
        </p>

        <div className="grid gap-3">
          <label
            htmlFor="api-key"
            className="text-xs uppercase tracking-wider text-zinc-500"
          >
            sk-ant-…
          </label>
          <input
            id="api-key"
            type="password"
            autoComplete="off"
            spellCheck={false}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="sk-ant-api03-..."
            className="rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2.5 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-zinc-400"
          />

          {storedTail ? (
            <div
              className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm ${
                valid
                  ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300"
                  : "bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300"
              }`}
            >
              <div className="flex items-center gap-2 min-w-0">
                <span
                  className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                    valid ? "bg-emerald-500" : "bg-amber-500"
                  }`}
                />
                <span className="truncate">
                  {valid
                    ? `Saved: ${maskKey(storedTail)}`
                    : "Saved, but this doesn't look like an Anthropic key — should start with sk-ant-"}
                </span>
              </div>
              <button
                type="button"
                onClick={clear}
                className="text-xs underline underline-offset-2 ml-3 shrink-0"
              >
                Clear
              </button>
            </div>
          ) : (
            <div className="rounded-lg px-3 py-2 text-sm bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400">
              No key stored yet.
            </div>
          )}
        </div>

        <p className="mt-6 text-xs text-zinc-500 leading-relaxed">
          Changes save automatically. Create a key at{" "}
          <a
            href="https://console.anthropic.com/settings/keys"
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            console.anthropic.com/settings/keys
          </a>
          {" — "}
          you'll also need credits at{" "}
          <a
            href="https://console.anthropic.com/settings/billing"
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            settings/billing
          </a>
          . The app uses claude-sonnet-4-6 by default.
        </p>
      </main>
    </div>
  );
}
