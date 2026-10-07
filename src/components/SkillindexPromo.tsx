"use client";

import { useEffect, useRef, useState } from "react";
import CalendlyButton from "@/components/CalendlyButton";

const OCCUPATIONS = [
  { code: "261313", title: "Software Engineer" },
  { code: "254499", title: "Registered Nurse" },
  { code: "233211", title: "Civil Engineer" },
  { code: "351311", title: "Chef" },
];

function TypingCard() {
  const [typed, setTyped] = useState("");
  const [shown, setShown] = useState<(typeof OCCUPATIONS)[number] | null>(null);
  const reduceMotion = useRef(false);

  useEffect(() => {
    reduceMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion.current) {
      setTyped(OCCUPATIONS[0].title);
      setShown(OCCUPATIONS[0]);
      return;
    }

    let cancelled = false;
    const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

    (async () => {
      let i = 0;
      while (!cancelled) {
        const item = OCCUPATIONS[i % OCCUPATIONS.length];
        i++;
        setShown(null);
        setTyped("");
        await wait(600);
        for (let c = 1; c <= item.title.length; c++) {
          if (cancelled) return;
          setTyped(item.title.slice(0, c));
          await wait(70);
        }
        await wait(300);
        if (cancelled) return;
        setShown(item);
        await wait(2600);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div
      className="w-full max-w-sm bg-[#0d0d0d] border border-white/20 rounded-xl p-4 text-left"
      aria-hidden="true"
    >
      <div className="bg-white rounded-lg flex items-center gap-2 px-3 py-2.5 mb-3 min-h-[44px]">
        <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        {typed ? (
          <span className="text-sm text-[var(--color-charcoal)]">{typed}</span>
        ) : (
          <span className="text-sm text-gray-400">Search your occupation...</span>
        )}
      </div>

      <div className="min-h-[48px]">
        <div
          className={`bg-white rounded-lg px-3 py-2.5 flex items-center justify-between gap-2 transition-all duration-300 ${
            shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
          }`}
        >
          <div className="flex items-center min-w-0">
            <span className="bg-[var(--color-gold)] text-white text-[10px] font-medium px-1.5 py-0.5 rounded mr-2">
              {shown?.code ?? ""}
            </span>
            <span className="text-sm text-[var(--color-charcoal)] truncate">{shown?.title ?? ""}</span>
          </div>
          <span className="text-[11px] text-[var(--color-gold)] whitespace-nowrap">View pathways &rarr;</span>
        </div>
      </div>

      <div className="mt-3 pt-2.5 border-t border-white/15 flex justify-between">
        <span className="text-[10px] text-gray-400">3,261 occupations indexed</span>
        <span className="text-[10px] text-gray-400">skillindex.au</span>
      </div>
    </div>
  );
}

export default function SkillindexPromo() {
  return (
    <section className="bg-[var(--color-navy)] py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="eyebrow text-[var(--color-gold)] mb-3">Free tool · skillindex.au</p>
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-6xl font-bold text-white leading-[1.05] mb-4">
          Search first.
          <br />
          Then talk to a human.
        </h2>
        <p className="text-gray-300 text-base md:text-lg max-w-xl mx-auto mb-8">
          Look up your occupation in seconds and see the work visa pathways worth
          exploring. When you&apos;re ready, a MARA-registered agent can map out the next
          steps with you.
        </p>

        <div className="flex justify-center mb-8">
          <TypingCard />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://skillindex.au"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-block"
          >
            Search occupations free
          </a>
          <CalendlyButton className="btn-outline-light inline-block">
            Book a consultation
          </CalendlyButton>
        </div>

        <p className="text-gray-400 text-xs mt-4">Free to use. No sign-up required.</p>
      </div>
    </section>
  );
}
