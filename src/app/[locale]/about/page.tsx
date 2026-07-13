import type { Metadata } from "next";
import { AboutFooter } from "@/components/about/AboutFooter";
import { AboutPageView } from "@/components/about/AboutPageView";
import { Header } from "@/components/layout/Header";
import { StayHuman } from "@/components/layout/StayHuman";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";

type AboutPageProps = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return {
    title: dict.aboutPage.meta.title,
    description: dict.aboutPage.meta.description,
  };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <>
      <Header locale={locale} dict={dict} activeNav="about" />
      <main>
        <AboutPageView dict={dict} />
        <StayHuman dict={dict} />
      </main>
      <AboutFooter locale={locale} dict={dict} />
    </>
  );
}
