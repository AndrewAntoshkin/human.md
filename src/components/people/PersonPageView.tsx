import Image from "next/image";
import Link from "next/link";
import type { Person } from "@/data/people";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

type PersonPageViewProps = {
  person: Person;
  locale: Locale;
  dict: Dictionary;
};

export function PersonPageView({ person, locale, dict }: PersonPageViewProps) {
  const { personPage } = dict.peoplePage;

  return (
    <>
      <section className="px-8 pb-16 pt-32 md:pb-24 md:pt-40">
        <Link
          href={localePath(locale, "/people")}
          className="mb-16 inline-block text-sm tracking-tight text-black/50 transition-opacity hover:opacity-50 md:mb-24"
        >
          {personPage.backToArchive}
        </Link>

        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-24">
          <div className="relative aspect-[3/4] overflow-hidden bg-black/[0.03]">
            <Image
              src={person.image}
              alt={person.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-center"
            />
          </div>

          <div className="flex flex-col gap-10 md:gap-12">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl tracking-tight md:text-4xl">
                {person.name}
              </h1>
              <p className="text-sm text-black/50">{person.role}</p>
              <p className="text-sm text-black/50">{person.city}</p>
              <p className="text-xs text-black/40">{person.version}</p>
            </div>

            {person.statement && (
              <p className="whitespace-pre-line text-xl leading-[1.2] tracking-tight md:text-2xl">
                {person.statement}
              </p>
            )}

            {person.bio && (
              <div className="flex max-w-lg flex-col gap-4">
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
          </div>
        </div>
      </section>

      {person.interview && person.interview.length > 0 && (
        <section className="border-t border-black/10 px-8 py-32 md:py-48">
          <p className="mb-16 text-xs uppercase tracking-[0.2em] text-black/40 md:mb-24">
            {personPage.interview}
          </p>
          <div className="mx-auto flex max-w-2xl flex-col gap-16 md:gap-20">
            {person.interview.map((item) => (
              <div key={item.question} className="flex flex-col gap-6">
                <p className="text-sm text-black/50">{item.question}</p>
                <p className="text-base leading-relaxed tracking-tight md:text-lg">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {person.principles && person.principles.length > 0 && (
        <section className="border-t border-black/10 px-8 py-32 md:py-48">
          <p className="mb-16 text-xs uppercase tracking-[0.2em] text-black/40 md:mb-24">
            {personPage.principles}
          </p>
          <ul className="mx-auto flex max-w-2xl flex-col gap-6">
            {person.principles.map((principle) => (
              <li
                key={principle}
                className="text-sm leading-relaxed text-black/70 md:text-base"
              >
                {principle}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="border-t border-black/10 px-8 py-32 md:py-48">
        <div className="mx-auto max-w-2xl border border-black/10 px-8 py-12 md:px-12 md:py-16">
          <div className="flex flex-col gap-10 md:gap-12">
            <h2 className="text-xl tracking-tight md:text-2xl">
              # {person.name}
            </h2>

            {person.identity && (
              <div>
                <h3 className="mb-4 text-xs uppercase tracking-[0.15em] text-black/40">
                  ## {personPage.identity}
                </h3>
                <ul className="flex flex-col gap-2">
                  {person.identity.map((item) => (
                    <li key={item} className="text-sm text-black/70">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {person.context && (
              <div>
                <h3 className="mb-4 text-xs uppercase tracking-[0.15em] text-black/40">
                  ## {personPage.currentContext}
                </h3>
                <ul className="flex flex-col gap-2">
                  {person.context.map((item) => (
                    <li key={item} className="text-sm text-black/70">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {person.favoritePiece && (
              <div>
                <h3 className="mb-4 text-xs uppercase tracking-[0.15em] text-black/40">
                  ## {personPage.favoritePiece}
                </h3>
                <p className="text-sm text-black/70">{person.favoritePiece}</p>
              </div>
            )}

            {person.status && (
              <div>
                <h3 className="mb-4 text-xs uppercase tracking-[0.15em] text-black/40">
                  ## {personPage.status}
                </h3>
                <p className="text-sm text-black/70">{person.status}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {person.environmentImages && person.environmentImages.length > 0 && (
        <section className="border-t border-black/10 px-8 py-32 md:py-48">
          <p className="mb-16 text-xs uppercase tracking-[0.2em] text-black/40 md:mb-24">
            {personPage.environment}
          </p>
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            {person.environmentImages.map((src, index) => (
              <figure
                key={src}
                className="relative aspect-[3/4] overflow-hidden bg-black/[0.03]"
              >
                <Image
                  src={src}
                  alt={`${person.name} — ${personPage.environment} ${index + 1}`}
                  fill
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </figure>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
