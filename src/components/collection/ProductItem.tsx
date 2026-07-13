"use client";

import Link from "next/link";
import { useState } from "react";
import type { Product, ProductColor } from "@/lib/types";
import type { Dictionary } from "@/i18n/types";
import { localePath, type Locale } from "@/i18n/config";
import { COLLECTION_V1, PRODUCT_PRICE } from "@/data/collection-v1";
import { ObjectLabel } from "./ObjectLabel";
import { ProductHoverScrub } from "./ProductHoverScrub";
import { ColorSwitcher } from "./ColorSwitcher";
import { PreorderModal } from "./PreorderModal";

type ProductItemProps = {
  product: Product;
  locale: Locale;
  dict: Dictionary;
  priority?: boolean;
};

export function ProductItem({
  product,
  locale,
  dict,
  priority = false,
}: ProductItemProps) {
  const [color, setColor] = useState<ProductColor>("white");
  const [preorderOpen, setPreorderOpen] = useState(false);

  return (
    <article className="flex flex-col gap-6">
      <ProductHoverScrub
        key={color}
        product={product}
        color={color}
        dict={dict}
        priority={priority}
      />

      <ColorSwitcher color={color} onChange={setColor} dict={dict} />

      <div className="flex flex-col gap-3">
        <ObjectLabel
          product={product}
          collectionVersion={COLLECTION_V1.version}
          collectionName={COLLECTION_V1.name}
        />

        <div className="flex items-baseline justify-between">
          <span className="text-sm">{PRODUCT_PRICE}</span>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setPreorderOpen(true)}
              className="text-sm tracking-tight transition-opacity hover:opacity-60"
            >
              {dict.preorder.cta}
            </button>
            <Link
              href={localePath(locale, `/collection/${product.slug}`)}
              className="text-sm tracking-tight transition-opacity hover:opacity-60"
            >
              {dict.product.view}
            </Link>
          </div>
        </div>
      </div>

      <PreorderModal
        product={product}
        dict={dict}
        locale={locale}
        open={preorderOpen}
        onClose={() => setPreorderOpen(false)}
        initialColor={color}
      />
    </article>
  );
}
