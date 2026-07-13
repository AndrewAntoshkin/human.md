import { assetPath } from "@/lib/asset-path";
import Image from "next/image";
import { ARCHIVE_VERSION, PEOPLE } from "@/data/people";
import type { Dictionary } from "@/i18n/types";

type PeopleHeroProps = {
  dict: Dictionary;
};

const HERO_IMAGE = assetPath("/generated/tech-laptop-hand.png");

export function PeopleHero({ dict }: PeopleHeroProps) {
  const { hero } = dict.peoplePage;

  return (
    <section className="min-h-[100svh]">
      <div className="grid min-h-[100svh] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
        <div className="flex flex-col justify-end px-8 pb-16 pt-32 lg:pb-24 lg:pt-40">
          <div className="flex max-w-xl flex-col gap-10">
            <h1 className="whitespace-pre-line text-4xl leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              {hero.title}
            </h1>

            <div className="flex max-w-sm flex-col gap-6">
              {hero.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-sm leading-relaxed text-black/60"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex flex-col gap-1 text-xs text-black/40">
              <p>{hero.archiveLabel} {ARCHIVE_VERSION}</p>
              <p>
                {PEOPLE.length} {hero.humanCount}
              </p>
            </div>
          </div>
        </div>

        <div className="relative min-h-[60vh] lg:min-h-[100svh]">
          <div className="absolute inset-0">
            <Image
              src={HERO_IMAGE}
              alt={hero.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
