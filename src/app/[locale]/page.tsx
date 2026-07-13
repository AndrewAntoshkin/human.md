import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StayHuman } from "@/components/layout/StayHuman";
import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { CollectionPreview } from "@/components/home/CollectionPreview";
import { FeaturedObject } from "@/components/home/FeaturedObject";
import { Manifesto } from "@/components/home/Manifesto";
import { People } from "@/components/home/People";
import { Principles } from "@/components/home/Principles";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";

type HomeProps = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({
  params,
}: HomeProps): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return {
    title: dict.home.meta.title,
    description: dict.home.meta.description,
  };
}

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <>
      <Header locale={locale} dict={dict} />
      <main>
        <Hero locale={locale} dict={dict} />
        <Intro dict={dict} />
        <CollectionPreview locale={locale} dict={dict} />
        <FeaturedObject locale={locale} dict={dict} />
        <Manifesto locale={locale} dict={dict} />
        <People dict={dict} />
        <Principles dict={dict} />
        <StayHuman dict={dict} />
      </main>
      <Footer locale={locale} dict={dict} />
    </>
  );
}
