"use client";

import { useState } from "react";
import type { Dictionary } from "@/i18n/types";

type PeopleArchiveFormProps = {
  dict: Dictionary;
};

export function PeopleArchiveForm({ dict }: PeopleArchiveFormProps) {
  const { archiveForm } = dict.peoplePage;
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="border-t border-black/10 px-8 py-32 md:py-48">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-12 md:gap-16">
        <div className="flex flex-col gap-10">
          <h2 className="max-w-4xl text-5xl leading-[1.02] tracking-tight md:text-7xl lg:text-8xl">
            {archiveForm.title}
          </h2>
          <p className="max-w-xl whitespace-pre-line text-base leading-relaxed text-black/50 md:text-lg">
            {archiveForm.text}
          </p>
        </div>

        <form
          className="grid gap-8 md:grid-cols-2 md:gap-x-12 md:gap-y-10"
          onSubmit={(event) => {
            event.preventDefault();
            event.currentTarget.reset();
            setSubmitted(true);
          }}
        >
          {archiveForm.fields.map((field) => (
            <label key={field.name} className="flex flex-col gap-3">
              <span className="text-xs uppercase tracking-[0.2em] text-black/35">
                {field.label}
              </span>
              <input
                name={field.name}
                type={field.type}
                required={field.required}
                placeholder={field.placeholder}
                onChange={() => setSubmitted(false)}
                className="w-full border-b border-black/20 bg-transparent py-4 text-base tracking-tight outline-none transition-colors placeholder:text-black/25 focus:border-black/70"
              />
            </label>
          ))}

          <div className="flex flex-col gap-8 md:col-span-2 md:flex-row md:items-start md:justify-between">
            <button type="submit" className="w-fit text-base tracking-tight">
              {archiveForm.cta}
            </button>

            <div className="flex max-w-sm flex-col gap-2 text-sm leading-relaxed text-black/40">
              {(submitted ? [archiveForm.success] : archiveForm.disclaimer).map(
                (line) => (
                  <p key={line}>{line}</p>
                ),
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
