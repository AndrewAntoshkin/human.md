import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StayHuman } from "@/components/layout/StayHuman";
import { ProductPageView } from "@/components/product/ProductPageView";
import { RelatedProducts } from "@/components/product/RelatedProducts";
import { COLLECTION_V1, getProductBySlug } from "@/data/collection-v1";
import { getProductContent } from "@/data/products-content";
import { getDictionary } from "@/i18n/get-dictionary";
import { locales, type Locale } from "@/i18n/config";
import { getRelatedProducts } from "@/lib/product-utils";

type ProductPageProps = {
  params: Promise<{ locale: Locale; slug: string }>;
};

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    COLLECTION_V1.products.map((product) => ({
      locale,
      slug: product.slug,
    })),
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { locale, slug } = await params;
  const dict = await getDictionary(locale);
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const content = getProductContent(locale, slug);
  const related = getRelatedProducts(COLLECTION_V1.products, slug, 5);

  return (
    <>
      <Header locale={locale} dict={dict} />
      <main>
        <div className="px-8">
          <ProductPageView
            product={product}
            dict={dict}
            locale={locale}
            content={content}
            collectionVersion={COLLECTION_V1.version}
          />

          <RelatedProducts products={related} locale={locale} dict={dict} />
        </div>
        <StayHuman dict={dict} />
      </main>
      <Footer locale={locale} dict={dict} />
    </>
  );
}
