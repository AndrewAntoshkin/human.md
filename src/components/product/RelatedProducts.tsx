import Link from "next/link";
import type { Product } from "@/lib/types";
import type { Dictionary } from "@/i18n/types";
import { localePath, type Locale } from "@/i18n/config";
import { formatPrice } from "@/lib/product-utils";
import { COLLECTION_V1, PRODUCT_PRICE_AMOUNT } from "@/data/collection-v1";
import { ObjectLabel } from "@/components/collection/ObjectLabel";
import { ProductHoverScrub } from "@/components/collection/ProductHoverScrub";

type RelatedProductsProps = {
  products: Product[];
  locale: Locale;
  dict: Dictionary;
};

export function RelatedProducts({
  products,
  locale,
  dict,
}: RelatedProductsProps) {
  if (products.length === 0) return null;

  return (
    <section className="border-t border-black/10">
      <div className="py-16 lg:py-24">
        <div className="mb-12 flex items-baseline justify-between">
          <h2 className="text-xs uppercase tracking-[0.15em]">
            / {dict.productPage.relatedTitle}
          </h2>
          <Link
            href={localePath(locale, "/collection")}
            className="text-xs uppercase tracking-[0.12em] transition-opacity hover:opacity-60"
          >
            {dict.productPage.viewAll}
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-8">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col gap-4">
              <Link
                href={localePath(locale, `/collection/${product.slug}`)}
                className="group block"
              >
                <ProductHoverScrub
                  product={product}
                  color="white"
                  dict={dict}
                  priority
                />
              </Link>
              <Link
                href={localePath(locale, `/collection/${product.slug}`)}
                className="flex flex-col gap-2 transition-opacity hover:opacity-60"
              >
                <ObjectLabel
                  product={product}
                  collectionVersion={COLLECTION_V1.version}
                  collectionName={COLLECTION_V1.name}
                />
                <span className="text-xs text-black/50">
                  {formatPrice(PRODUCT_PRICE_AMOUNT, locale)}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
