import type { Dictionary } from "@/i18n/types";

type PeopleIntroProps = {
  dict: Dictionary;
};

export function PeopleIntro({ dict }: PeopleIntroProps) {
  const { intro } = dict.peoplePage;

  return (
    <section className="px-8 py-32 md:py-48">
      <div className="mx-auto flex max-w-3xl flex-col gap-16 md:gap-20">
        <h2 className="text-3xl leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
          {intro.headline}
        </h2>

        <div className="flex flex-col gap-4 md:gap-6">
          {intro.lines.map((line) => (
            <p
              key={line}
              className="text-sm leading-relaxed text-black/60 md:text-base"
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
