import type { Dictionary } from "@/i18n/types";

type PeopleStatementProps = {
  dict: Dictionary;
};

export function PeopleStatement({ dict }: PeopleStatementProps) {
  const { statement } = dict.peoplePage;

  return (
    <section className="border-t border-black/10 px-8 py-32 md:py-48">
      <div className="mx-auto flex max-w-4xl flex-col gap-12 md:gap-16">
        <h2 className="whitespace-pre-line text-3xl leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
          {statement.headline}
        </h2>

        <div className="flex flex-col gap-4 md:gap-6">
          {statement.lines.map((line) => (
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
