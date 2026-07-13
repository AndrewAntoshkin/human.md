import Link from "next/link";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

type ManifestoProps = {
  locale: Locale;
  dict: Dictionary;
};

export function Manifesto({ locale, dict }: ManifestoProps) {
  const { manifesto } = dict.home;

  return (
    <section id="manifesto" className="px-8 py-32 md:py-48 lg:py-64">
      <div className="mx-auto flex max-w-5xl flex-col gap-16 md:gap-24">
        <h2 className="whitespace-pre-line text-3xl leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
          {manifesto.title}
        </h2>

        <div className="flex max-w-2xl flex-col gap-8">
          {manifesto.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="text-sm leading-relaxed text-black/60 md:text-base"
            >
              {paragraph}
            </p>
          ))}

          <p className="whitespace-pre-line text-base leading-relaxed tracking-tight md:text-lg">
            {manifesto.principle}
          </p>

          <Link
            href={localePath(locale, "/about")}
            className="text-sm tracking-tight transition-opacity hover:opacity-50"
          >
            {manifesto.readAbout}
          </Link>
        </div>
      </div>
    </section>
  );
}
