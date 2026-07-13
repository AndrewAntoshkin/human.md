import { assetPath } from "@/lib/asset-path";
import Image from "next/image";
import type { Dictionary } from "@/i18n/types";

type AboutPageViewProps = {
  dict: Dictionary;
};

const PHOTOS = {
  personBack: assetPath("/generated/tech-laptop-hand.png"),
  workspace: assetPath("/generated/tech-collaboration.png"),
  streetWalk: assetPath("/generated/tech-workspace.png"),
  fabricMacro: assetPath("/collection/shared-collar.png"),
} as const;

function AboutPhoto({
  src,
  alt,
  priority = false,
  aspect = "wide",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  aspect?: "wide" | "tall";
}) {
  return (
    <figure className="w-full">
      <div
        className={`relative w-full ${
          aspect === "tall" ? "aspect-[3/4] md:aspect-[4/5]" : "aspect-[4/3] md:aspect-[16/10]"
        }`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
    </figure>
  );
}

function SectionLabel({ label }: { label: string }) {
  return (
    <p className="mb-12 text-xs tracking-tight text-black/40 md:mb-16">
      {label}
    </p>
  );
}

function TextSection({
  label,
  headline,
  body,
  headlineSize = "large",
}: {
  label: string;
  headline: string;
  body: string;
  headlineSize?: "large" | "xlarge";
}) {
  const headlineClass =
    headlineSize === "xlarge"
      ? "whitespace-pre-line text-4xl leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
      : "whitespace-pre-line text-3xl leading-[1.08] tracking-tight md:text-5xl lg:text-6xl";

  return (
    <section className="flex min-h-[80svh] flex-col justify-center px-8 py-32 md:min-h-[85svh] md:py-48 lg:py-64">
      <div className="mx-auto flex w-full max-w-4xl flex-col">
        <SectionLabel label={label} />
        <h2 className={headlineClass}>{headline}</h2>
        <p className="mt-10 max-w-lg whitespace-pre-line text-sm leading-relaxed text-black/60 md:mt-14 md:text-base">
          {body}
        </p>
      </div>
    </section>
  );
}

function PhotoTextSection({
  label,
  headline,
  body,
  photoSrc,
  photoAlt,
  photoFirst = false,
}: {
  label: string;
  headline: string;
  body: string;
  photoSrc: string;
  photoAlt: string;
  photoFirst?: boolean;
}) {
  const textBlock = (
    <div className="flex flex-col justify-center px-8 py-20 md:py-32 lg:py-40">
      <div className="mx-auto flex w-full max-w-4xl flex-col">
        <SectionLabel label={label} />
        <h2 className="whitespace-pre-line text-3xl leading-[1.08] tracking-tight md:text-5xl lg:text-6xl">
          {headline}
        </h2>
        <p className="mt-10 max-w-lg whitespace-pre-line text-sm leading-relaxed text-black/60 md:mt-14 md:text-base">
          {body}
        </p>
      </div>
    </div>
  );

  const photoBlock = (
    <div className="flex items-center justify-center px-8 py-12 md:py-20 lg:px-16">
      <div className="w-full max-w-5xl">
        <AboutPhoto src={photoSrc} alt={photoAlt} aspect="wide" />
      </div>
    </div>
  );

  return (
    <section className="min-h-[90svh] lg:grid lg:min-h-[100svh] lg:grid-cols-2 lg:items-center">
      {photoFirst ? (
        <>
          {photoBlock}
          {textBlock}
        </>
      ) : (
        <>
          {textBlock}
          {photoBlock}
        </>
      )}
    </section>
  );
}

export function AboutPageView({ dict }: AboutPageViewProps) {
  const { aboutPage: a } = dict;

  return (
    <>
      <section className="flex min-h-[100svh] flex-col justify-end px-8 pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 md:gap-12">
          <div className="flex flex-col gap-4 md:gap-6">
            <h1 className="text-5xl leading-[1.02] tracking-tight md:text-7xl lg:text-8xl">
              {a.hero.title}
            </h1>
            <p className="text-sm tracking-tight text-black/60 md:text-base">
              {a.hero.subtitle}
            </p>
          </div>
          <p className="max-w-md whitespace-pre-line text-sm leading-relaxed text-black/60 md:text-base">
            {a.hero.body}
          </p>
        </div>
      </section>

      <div className="px-8 pb-20 md:pb-32">
        <div className="mx-auto w-full max-w-6xl">
          <AboutPhoto
            src={PHOTOS.personBack}
            alt={a.photos.personBack}
            priority
            aspect="tall"
          />
        </div>
      </div>

      <TextSection
        label={a.sections.section01}
        headline={a.section01.headline}
        body={a.section01.body}
        headlineSize="xlarge"
      />

      <PhotoTextSection
        label={a.sections.section02}
        headline={a.section02.headline}
        body={a.section02.body}
        photoSrc={PHOTOS.workspace}
        photoAlt={a.photos.workspace}
        photoFirst
      />

      <section className="flex min-h-[80svh] flex-col justify-center px-8 py-32 md:min-h-[85svh] md:py-48 lg:py-64">
        <div className="mx-auto flex w-full max-w-4xl flex-col">
          <SectionLabel label={a.sections.section03} />
          <h2 className="whitespace-pre-line text-4xl leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            {a.section03.headline}
          </h2>
          <p className="mt-10 max-w-lg whitespace-pre-line text-sm leading-relaxed text-black/60 md:mt-14 md:text-base">
            {a.section03.body}
          </p>
        </div>
      </section>

      <PhotoTextSection
        label={a.sections.section04}
        headline={a.section04.headline}
        body={a.section04.body}
        photoSrc={PHOTOS.streetWalk}
        photoAlt={a.photos.streetWalk}
      />

      <TextSection
        label={a.sections.section05}
        headline={a.section05.headline}
        body={a.section05.body}
      />

      <TextSection
        label={a.sections.section06}
        headline={a.section06.headline}
        body={a.section06.body}
      />

      <PhotoTextSection
        label={a.sections.section07}
        headline={a.section07.headline}
        body={a.section07.body}
        photoSrc={PHOTOS.fabricMacro}
        photoAlt={a.photos.fabricMacro}
        photoFirst
      />

      <TextSection
        label={a.sections.section08}
        headline={a.section08.headline}
        body={a.section08.body}
        headlineSize="xlarge"
      />
    </>
  );
}
