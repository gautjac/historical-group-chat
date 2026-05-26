"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { clearApiKey, getApiKey, setApiKey } from "@/lib/storage";

export default function SettingsPage() {
  const [value, setValue] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setValue(getApiKey());
  }, []);

  function save(e: React.FormEvent) {
    e.preventDefault();
    setApiKey(value.trim());
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  }

  function clear() {
    clearApiKey();
    setValue("");
  }

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

        <form onSubmit={save} className="grid gap-3">
          <label className="text-xs uppercase tracking-wider text-zinc-500">
            sk-ant-...
          </label>
          <input
            type="password"
            autoComplete="off"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="sk-ant-api03-..."
            className="rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400"
          />
          <div className="flex gap-2">
            <button
              type="submit"
              className="rounded-full bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 px-5 py-2 text-sm font-medium"
            >
              {saved ? "Saved" : "Save"}
            </button>
            {value && (
              <button
                type="button"
                onClick={clear}
                className="rounded-full border border-zinc-300 dark:border-zinc-700 px-5 py-2 text-sm"
              >
                Clear
              </button>
            )}
          </div>
        </form>

        <p className="mt-6 text-xs text-zinc-500 leading-relaxed">
          You can create a key at{" "}
          <a
            href="https://console.anthropic.com/settings/keys"
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            console.anthropic.com
          </a>
          . The app uses claude-sonnet-4-6 by default.
        </p>
      </main>
    </div>
  );
}
