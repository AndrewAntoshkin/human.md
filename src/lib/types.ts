export type ProductColor = "white" | "black";

export type ProductImages = {
  flatFront: string;
  flatBack: string;
  modelFront: string;
  modelBack: string;
};

export type Product = {
  id: string;
  slug: string;
  frontText: string;
  backText: string;
  images: Record<ProductColor, ProductImages>;
};

export type Collection = {
  version: string;
  name: string;
  taglines: [string, string, string];
  objectCount: number;
  material: string;
  products: Product[];
};

export const PRODUCT_COLORS: ProductColor[] = ["white", "black"];

export function getProductImages(
  product: Product,
  color: ProductColor,
): ProductImages {
  return product.images[color];
}
