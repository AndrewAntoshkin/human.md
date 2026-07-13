import type { Collection } from "@/lib/types";
import { assetPath } from "@/lib/asset-path";

function img(
  id: string,
  slug: string,
  kind: "flat" | "model",
  color: "white" | "black",
  side: "front" | "back",
) {
  return assetPath(`/collection/${id}-${slug}-${kind}-${color}-${side}.png`);
}

function productImages(id: string, slug: string) {
  return {
    white: {
      flatFront: img(id, slug, "flat", "white", "front"),
      flatBack: img(id, slug, "flat", "white", "back"),
      modelFront: img(id, slug, "model", "white", "front"),
      modelBack: img(id, slug, "model", "white", "back"),
    },
    black: {
      flatFront: img(id, slug, "flat", "black", "front"),
      flatBack: img(id, slug, "flat", "black", "back"),
      modelFront: img(id, slug, "model", "black", "front"),
      modelBack: img(id, slug, "model", "black", "back"),
    },
  };
}

export const COLLECTION_V1: Collection = {
  version: "1.0.0",
  name: "Human",
  taglines: [
    "Statements for humans.",
    "Made by humans.",
    "Supported by AI.",
  ],
  objectCount: 6,
  material: "100% Cotton",
  products: [
    {
      id: "01",
      slug: "human-md",
      frontText: "human.md",
      backText: "Documentation\nfor humans.",
      images: productImages("01", "human-md"),
    },
    {
      id: "02",
      slug: "memory",
      frontText: "memory",
      backText: "I told my\nmemory.md\nabout you.",
      images: productImages("02", "memory"),
    },
    {
      id: "03",
      slug: "context",
      frontText: "context",
      backText: "You changed\nmy context.",
      images: productImages("03", "context"),
    },
    {
      id: "04",
      slug: "branch",
      frontText: "branch",
      backText: "Different branch.\nSame human.",
      images: productImages("04", "branch"),
    },
    {
      id: "05",
      slug: "readme",
      frontText: "README",
      backText: "Read me\nfirst.",
      images: productImages("05", "readme"),
    },
    {
      id: "06",
      slug: "human",
      frontText: "human",
      backText: "Made by humans.\nSupported by AI.",
      images: productImages("06", "human"),
    },
  ],
};

export const PRODUCT_PRICE_AMOUNT = 4500;
export const PRODUCT_PRICE = "4 500 ₽";

export function getProductBySlug(slug: string) {
  return COLLECTION_V1.products.find((p) => p.slug === slug);
}
