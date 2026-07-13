import { assetPath } from "@/lib/asset-path";
import Image from "next/image";
import Link from "next/link";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

type HeroProps = {
  locale: Locale;
  dict: Dictionary;
};

const HERO_IMAGE = assetPath("/collection/03-context-model-white-back.png");

export function Hero({ locale, dict }: HeroProps) {
  const { hero } = dict.home;

  return (
    <section className="min-h-[100svh]">
      <div className="grid min-h-[100svh] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
        <div className="flex flex-col justify-end px-8 pb-16 pt-32 lg:pb-24 lg:pt-40">
          <div className="flex max-w-xl flex-col gap-10">
            <h1 className="whitespace-pre-line text-4xl leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              {hero.title}
            </h1>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <p className="text-xs uppercase tracking-[0.2em] text-black/40">
                  {hero.collectionLabel}
                </p>
                <p className="text-sm tracking-tight">
                  {hero.collectionVersion} {hero.collectionName}
                </p>
              </div>

              <p className="max-w-sm text-sm leading-relaxed text-black/60">
                {hero.subtitle}
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:gap-8">
                <Link
                  href={localePath(locale, "/collection")}
                  className="text-sm tracking-tight transition-opacity hover:opacity-50"
                >
                  {hero.exploreCollection}
                </Link>
                <Link
                  href={localePath(locale, "/about")}
                  className="text-sm tracking-tight transition-opacity hover:opacity-50"
                >
                  {hero.readAbout}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="relative min-h-[60vh] lg:min-h-[100svh]">
          <div className="image-zoom absolute inset-0">
            <Image
              src={HERO_IMAGE}
              alt="You changed my context."
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
