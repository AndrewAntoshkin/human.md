import type { Dictionary } from "@/i18n/types";

type IntroProps = {
  dict: Dictionary;
};

export function Intro({ dict }: IntroProps) {
  const { intro } = dict.home;

  return (
    <section id="about" className="px-8 py-32 md:py-48 lg:py-64">
      <div className="mx-auto flex max-w-5xl flex-col gap-16 md:gap-24">
        <div className="flex flex-col gap-4 md:gap-6">
          <p className="text-3xl leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
            {intro.line1}
          </p>
          <p className="text-3xl leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
            {intro.line2}
          </p>
        </div>

        <p className="whitespace-pre-line text-sm leading-relaxed text-black/50 md:text-base">
          {intro.signature}
        </p>
      </div>
    </section>
  );
}
