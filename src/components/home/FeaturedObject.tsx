import { assetPath } from "@/lib/asset-path";
import Image from "next/image";
import Link from "next/link";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

type FeaturedObjectProps = {
  locale: Locale;
  dict: Dictionary;
};

const FEATURED_IMAGE = assetPath("/collection/02-memory-model-white-back.png");

export function FeaturedObject({ locale, dict }: FeaturedObjectProps) {
  const { featured } = dict.home;

  return (
    <section className="px-8 py-32 md:py-48">
      <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <div className="image-zoom relative aspect-[3/4] overflow-hidden">
          <Image
            src={FEATURED_IMAGE}
            alt="I told my memory.md about you."
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>

        <div className="flex max-w-md flex-col gap-8 lg:py-12">
          <p className="text-xs uppercase tracking-[0.2em] text-black/40">
            {featured.statement}
          </p>

          <p className="text-xl leading-relaxed tracking-tight md:text-2xl">
            {featured.description}
          </p>

          <Link
            href={localePath(locale, "/collection/memory")}
            className="text-sm tracking-tight transition-opacity hover:opacity-50"
          >
            {featured.viewObject}
          </Link>
        </div>
      </div>
    </section>
  );
}
