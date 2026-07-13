"use client";

import { useState } from "react";
import Link from "next/link";
import type { Product, ProductColor } from "@/lib/types";
import type { Dictionary } from "@/i18n/types";
import type { Locale } from "@/i18n/config";
import type { ProductContent } from "@/data/products-content";
import { localePath } from "@/i18n/config";
import { formatPrice, getProductGallery } from "@/lib/product-utils";
import { COLLECTION_V1, PRODUCT_PRICE_AMOUNT } from "@/data/collection-v1";
import { ObjectLabel } from "@/components/collection/ObjectLabel";
import { PreorderModal } from "@/components/collection/PreorderModal";
import { ColorSwitcher } from "@/components/collection/ColorSwitcher";
import { ProductGallery } from "@/components/product/ProductGallery";

const SIZES = ["XS", "S", "M", "L", "XL", "XXL"] as const;

type ProductAccordionProps = {
  title: string;
  children: React.ReactNode;
};

function ProductAccordion({ title, children }: ProductAccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-black/10">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left text-xs uppercase tracking-[0.12em] transition-opacity hover:opacity-60"
      >
        <span>{title}</span>
        <span className="text-black/40">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="pb-5 text-sm leading-relaxed text-black/70">
          {children}
        </div>
      )}
    </div>
  );
}

type ProductPageViewProps = {
  product: Product;
  dict: Dictionary;
  locale: Locale;
  content: ProductContent;
  collectionVersion: string;
};

export function ProductPageView({
  product,
  dict,
  locale,
  content,
  collectionVersion,
}: ProductPageViewProps) {
  const [color, setColor] = useState<ProductColor>("black");
  const [size, setSize] = useState("M");
  const [modalOpen, setModalOpen] = useState(false);

  const gallery = getProductGallery(product, color, dict.productPage.gallery);

  return (
    <>
      <div className="py-8 lg:py-12">
        <Link
          href={localePath(locale, "/collection")}
          className="mb-10 inline-block text-xs uppercase tracking-[0.15em] transition-opacity hover:opacity-60"
        >
          {dict.productPage.backToCollection}
        </Link>

        <div className="grid items-start lg:grid-cols-[1.85fr_1fr] lg:gap-16 xl:gap-20">
          <div className="pb-12 lg:pb-24 lg:pr-4">
            <ProductGallery key={color} slides={gallery} />
          </div>

          <div className="lg:sticky lg:top-[72px] lg:max-h-[calc(100vh-72px)] lg:overflow-y-auto lg:pl-4 xl:pl-8">
            <div className="flex flex-col gap-8 pb-8 lg:pb-12">
              <div className="flex flex-col gap-5">
                <ObjectLabel
                  product={product}
                  collectionVersion={collectionVersion}
                  collectionName={COLLECTION_V1.name}
                />

                <p className="text-xs uppercase tracking-[0.15em] text-black/50">
                  {dict.preorder.colors[color]}{" "}
                  <span className="text-black">· {dict.productPage.inStock}</span>
                </p>

                <p className="text-lg tracking-tight">
                  {formatPrice(PRODUCT_PRICE_AMOUNT, locale)}
                </p>
              </div>

              <div className="border-t border-black/10 pt-6">
                <p className="text-xs uppercase tracking-[0.12em] text-black/50">
                  {dict.productPage.specs.join(" · ")}
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <ColorSwitcher
                  color={color}
                  onChange={setColor}
                  dict={dict}
                  label={dict.preorder.color}
                />

                <div className="flex flex-col gap-3">
                  <span className="text-xs uppercase tracking-[0.15em] text-black/50">
                    {dict.productPage.size}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {SIZES.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSize(s)}
                        className={`flex h-10 min-w-[40px] items-center justify-center px-2 text-xs tracking-tight transition-colors ${
                          size === s
                            ? "bg-black text-white"
                            : "text-black/50 hover:text-black"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="w-full bg-black py-4 text-xs uppercase tracking-[0.15em] text-white transition-colors hover:bg-black/80"
                >
                  {dict.productPage.addToCart}
                </button>
              </div>

              <div className="flex flex-col border-t border-black/10">
                <ProductAccordion title={dict.productPage.description}>
                  <div className="space-y-4">
                    {content.description.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                    <p className="whitespace-pre-line">{content.story}</p>
                  </div>
                </ProductAccordion>

                <ProductAccordion title={dict.productPage.fitSizing}>
                  <ul className="space-y-2">
                    {dict.productPage.detailsItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </ProductAccordion>

                <ProductAccordion title={dict.productPage.shipping}>
                  <ul className="space-y-2">
                    {dict.productPage.shippingItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </ProductAccordion>

                <ProductAccordion title={dict.productPage.care}>
                  <ul className="space-y-2">
                    {dict.productPage.careItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </ProductAccordion>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PreorderModal
        key={`${product.slug}-${color}-${size}`}
        product={product}
        dict={dict}
        locale={locale}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        initialSize={size}
        initialColor={color}
      />
    </>
  );
}
