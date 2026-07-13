import type { Dictionary } from "@/i18n/types";

type PrinciplesProps = {
  dict: Dictionary;
};

export function Principles({ dict }: PrinciplesProps) {
  const { principles } = dict.home;

  return (
    <section id="principles" className="px-8 py-32 md:py-48 lg:py-64">
      <div className="mx-auto flex max-w-5xl flex-col gap-16 md:gap-24">
        <div className="flex flex-col gap-8">
          <h2 className="text-3xl leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
            {principles.title}
          </h2>

          <div className="flex max-w-2xl flex-col gap-4">
            {principles.intro.map((line) => (
              <p
                key={line}
                className="text-sm leading-relaxed text-black/60 md:text-base"
              >
                {line}
              </p>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-20 md:gap-28">
          {principles.items.map((item, index) => (
            <article
              key={item.title}
              className="flex flex-col gap-6 md:flex-row md:gap-16"
            >
              <span className="w-8 shrink-0 text-xs text-black/30 md:w-12">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="flex max-w-2xl flex-col gap-6">
                <h3 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                  {item.title}
                </h3>

                <div className="flex flex-col gap-3">
                  {item.lines.map((line) => (
                    <p
                      key={line}
                      className="text-sm leading-relaxed text-black/60 md:text-base"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
