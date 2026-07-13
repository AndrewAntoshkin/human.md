import Image from "next/image";
import Link from "next/link";
import { COLLECTION_V1, PRODUCT_PRICE } from "@/data/collection-v1";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { getProductImages } from "@/lib/types";
import { ObjectLabel } from "@/components/collection/ObjectLabel";

type CollectionPreviewProps = {
  locale: Locale;
  dict: Dictionary;
};

export function CollectionPreview({ locale, dict }: CollectionPreviewProps) {
  const { collection } = dict.home;

  return (
    <section id="collection" className="px-8 py-32 md:py-48">
      <div className="mb-20 flex flex-col gap-4 md:mb-28 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-[0.2em] text-black/40">
            {collection.title}
          </p>
          <h2 className="text-3xl tracking-tight md:text-4xl">
            {collection.version} {collection.name}
          </h2>
        </div>

        <div className="flex flex-col gap-1 text-sm text-black/50">
          <span>{collection.subtitle}</span>
          <span>{collection.objectCount}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-24 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-32">
        {COLLECTION_V1.products.map((product, index) => {
          const images = getProductImages(product, "white");

          return (
            <article key={product.id} className="group flex flex-col gap-6">
              <Link
                href={localePath(locale, `/collection/${product.slug}`)}
                className="image-zoom relative block aspect-[3/4] overflow-hidden"
              >
                <Image
                  src={images.modelBack}
                  alt={product.backText.replace("\n", " ")}
                  fill
                  priority={index < 3}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-opacity duration-500 group-hover:opacity-90"
                />
              </Link>

              <div className="flex items-baseline justify-between gap-4">
                <div className="flex flex-col gap-3">
                  <ObjectLabel
                    product={product}
                    collectionVersion={COLLECTION_V1.version}
                    collectionName={COLLECTION_V1.name}
                  />
                  <span className="text-sm text-black/50">{PRODUCT_PRICE}</span>
                </div>

                <Link
                  href={localePath(locale, `/collection/${product.slug}`)}
                  className="shrink-0 text-sm tracking-tight transition-opacity hover:opacity-50"
                >
                  {dict.product.view}
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
