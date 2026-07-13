import Image from "next/image";
import { PEOPLE } from "@/data/people";
import type { Dictionary } from "@/i18n/types";

type PeopleProps = {
  dict: Dictionary;
};

export function People({ dict }: PeopleProps) {
  const { people } = dict.home;

  return (
    <section id="people" className="px-8 py-32 md:py-48">
      <h2 className="mb-20 whitespace-pre-line text-3xl leading-[1.1] tracking-tight md:mb-28 md:text-5xl lg:text-6xl">
        {people.title}
      </h2>

      <div className="grid grid-cols-2 gap-12 md:grid-cols-4 md:gap-8 lg:gap-12">
        {PEOPLE.map((person) => (
          <article key={person.id} className="flex flex-col gap-6">
            <div className="relative aspect-[3/4] overflow-hidden bg-black/[0.03]">
              <Image
                src={person.image}
                alt={person.name}
                fill
                loading="eager"
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover object-center grayscale"
              />
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-sm tracking-tight">{person.name}</p>
              <p className="text-xs text-black/50">{person.role}</p>
              <p className="text-xs text-black/40">{person.version}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
