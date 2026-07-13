import Image from "next/image";
import { getFeaturedPerson } from "@/data/people";
import type { Dictionary } from "@/i18n/types";

type FeaturedHumanProps = {
  dict: Dictionary;
};

export function FeaturedHuman({ dict }: FeaturedHumanProps) {
  const person = getFeaturedPerson();
  const { featured } = dict.peoplePage;

  return (
    <section className="border-t border-black/10 px-8 py-32 md:py-48">
      <p className="mb-16 text-xs uppercase tracking-[0.2em] text-black/40 md:mb-24">
        {featured.label}
      </p>

      <div className="grid gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-24">
        <div className="relative aspect-[3/4] overflow-hidden bg-black/[0.03]">
          <Image
            src={person.image}
            alt={person.name}
            fill
            loading="eager"
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>

        <div className="flex flex-col justify-center gap-10 md:gap-12">
          <div className="flex flex-col gap-2">
            <p className="text-sm tracking-tight">{person.name}</p>
            <p className="text-xs text-black/50">{person.role}</p>
            <p className="text-xs text-black/50">{person.city}</p>
            <p className="text-xs text-black/40">{person.version}</p>
          </div>

          <p className="whitespace-pre-line text-2xl leading-[1.15] tracking-tight md:text-3xl lg:text-4xl">
            {person.statement}
          </p>

          {person.bio && (
            <div className="flex max-w-md flex-col gap-4">
              {person.bio.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-sm leading-relaxed text-black/60"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          )}

          {person.focus && person.focus.length > 0 && (
            <div className="flex flex-col gap-4 border-t border-black/10 pt-10">
              <p className="text-xs uppercase tracking-[0.2em] text-black/40">
                {featured.currentFocus}
              </p>
              <ul className="flex flex-col gap-2">
                {person.focus.map((item) => (
                  <li key={item} className="text-sm text-black/70">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
