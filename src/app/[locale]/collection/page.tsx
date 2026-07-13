import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StayHuman } from "@/components/layout/StayHuman";
import { CollectionHero } from "@/components/collection/CollectionHero";
import { ProductGrid } from "@/components/collection/ProductGrid";
import { COLLECTION_V1 } from "@/data/collection-v1";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";

type CollectionPageProps = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({
  params,
}: CollectionPageProps): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return {
    title: dict.meta.title,
    description: dict.meta.description,
  };
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <>
      <Header locale={locale} dict={dict} />
      <main>
        <CollectionHero collection={COLLECTION_V1} dict={dict} />
        <ProductGrid
          products={COLLECTION_V1.products}
          locale={locale}
          dict={dict}
        />
        <StayHuman dict={dict} />
      </main>
      <Footer locale={locale} dict={dict} />
    </>
  );
}
