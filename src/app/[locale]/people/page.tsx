import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { StayHuman } from "@/components/layout/StayHuman";
import { PeopleFooter } from "@/components/people/PeopleFooter";
import { PeoplePageView } from "@/components/people/PeoplePageView";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";

type PeoplePageProps = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({
  params,
}: PeoplePageProps): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return {
    title: dict.peoplePage.meta.title,
    description: dict.peoplePage.meta.description,
  };
}

export default async function PeoplePage({ params }: PeoplePageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <>
      <Header locale={locale} dict={dict} activeNav="people" />
      <main>
        <PeoplePageView dict={dict} />
        <StayHuman dict={dict} />
      </main>
      <PeopleFooter locale={locale} dict={dict} />
    </>
  );
}
