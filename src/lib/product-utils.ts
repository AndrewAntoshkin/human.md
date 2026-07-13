import type { Product, ProductColor } from "@/lib/types";
import { assetPath } from "@/lib/asset-path";
import { getProductImages } from "@/lib/types";

export const SHARED_GALLERY = {
  fabric: assetPath("/collection/shared-fabric.png"),
  collar: assetPath("/collection/shared-collar.png"),
} as const;

export type GallerySlide = {
  src: string;
  alt: string;
};

type GalleryLabels = {
  flat: string;
  front: string;
  back: string;
  fabric: string;
  print: string;
  detail: string;
};

export function getProductGallery(
  product: Product,
  color: ProductColor,
  labels: GalleryLabels,
): GallerySlide[] {
  const images = getProductImages(product, color);

  return [
    { src: images.flatFront, alt: labels.flat },
    { src: images.modelFront, alt: labels.front },
    { src: images.modelBack, alt: labels.back },
    { src: images.flatBack, alt: labels.print },
    { src: SHARED_GALLERY.fabric, alt: labels.fabric },
    { src: SHARED_GALLERY.collar, alt: labels.detail },
  ];
}

export function formatPrice(amount: number, locale: string): string {
  const formatted = amount.toLocaleString(locale === "ru" ? "ru-RU" : "en-US");
  return `${formatted} ₽`;
}

export function getStatementText(text: string): string {
  return text.replace(/\n/g, " ");
}

export function getRelatedProducts(
  products: Product[],
  currentSlug: string,
  limit = 4,
): Product[] {
  return products.filter((p) => p.slug !== currentSlug).slice(0, limit);
}
