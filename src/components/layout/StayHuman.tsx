"use client";

import { useState } from "react";
import type { Dictionary } from "@/i18n/types";

type StayHumanProps = {
  dict: Dictionary;
};

export function StayHuman({ dict }: StayHumanProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { stayHuman } = dict;

  return (
    <section className="border-t border-black/10 px-8 py-32 md:py-48">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-12 md:gap-16">
        <h2 className="text-5xl leading-[1.02] tracking-tight md:text-7xl lg:text-8xl">
          {stayHuman.title}
        </h2>

        <form
          className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-10"
          onSubmit={(event) => {
            event.preventDefault();
            setEmail("");
            setSubmitted(true);
          }}
        >
          <label className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.2em] text-black/35">
              {stayHuman.label}
            </span>
            <input
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setSubmitted(false);
              }}
              placeholder={stayHuman.placeholder}
              required
              className="w-full border-b border-black/20 bg-transparent py-4 text-base tracking-tight outline-none transition-colors placeholder:text-black/25 focus:border-black/70 md:text-lg"
            />
          </label>

          <button
            type="submit"
            className="w-fit text-base tracking-tight md:pb-4 md:text-lg"
          >
            {stayHuman.cta}
          </button>
        </form>

        <p className="whitespace-pre-line text-sm leading-relaxed text-black/40">
          {submitted ? stayHuman.success : stayHuman.disclaimer}
        </p>
      </div>
    </section>
  );
}
