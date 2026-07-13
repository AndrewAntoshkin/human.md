import type { Product } from "@/lib/types";
import type { Dictionary } from "@/i18n/types";
import type { Locale } from "@/i18n/config";
import { ProductItem } from "./ProductItem";

type ProductGridProps = {
  products: Product[];
  locale: Locale;
  dict: Dictionary;
};

export function ProductGrid({ products, locale, dict }: ProductGridProps) {
  return (
    <section className="px-8 py-20 md:py-28 lg:py-36">
      <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-20 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-28">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            locale={locale}
            dict={dict}
            priority
          />
        ))}
      </div>
    </section>
  );
}
