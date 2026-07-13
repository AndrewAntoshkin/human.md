import type { Collection } from "@/lib/types";
import type { Dictionary } from "@/i18n/types";

type CollectionHeroProps = {
  collection: Collection;
  dict: Dictionary;
};

export function CollectionHero({ collection, dict }: CollectionHeroProps) {
  return (
    <section className="border-b border-black/10">
      <div className="grid gap-16 px-8 py-20 md:grid-cols-[1fr_auto] md:items-end md:py-28 lg:py-36">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-[0.2em] text-black/50">
              {dict.hero.collectionLabel} v{collection.version}
            </p>
            <h1 className="text-5xl tracking-tight md:text-7xl lg:text-8xl">
              {collection.name}
            </h1>
          </div>

          <div className="max-w-sm space-y-1 text-base leading-relaxed text-black/70 md:text-lg">
            {collection.taglines.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 text-xs uppercase tracking-[0.15em] text-black/50 md:text-right">
          <div className="flex flex-col gap-1 md:items-end">
            <span>{dict.hero.version}</span>
            <span className="text-sm text-black">{collection.version}</span>
          </div>
          <div className="flex flex-col gap-1 md:items-end">
            <span>{dict.hero.objects}</span>
          </div>
          <div className="flex flex-col gap-1 md:items-end">
            <span>{dict.hero.material}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
