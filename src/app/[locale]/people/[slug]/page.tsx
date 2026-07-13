import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { StayHuman } from "@/components/layout/StayHuman";
import { PeopleFooter } from "@/components/people/PeopleFooter";
import { PersonPageView } from "@/components/people/PersonPageView";
import { getPersonBySlug, PEOPLE } from "@/data/people";
import { getDictionary } from "@/i18n/get-dictionary";
import { locales, type Locale } from "@/i18n/config";

type PersonPageProps = {
  params: Promise<{ locale: Locale; slug: string }>;
};

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    PEOPLE.map((person) => ({
      locale,
      slug: person.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: PersonPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const person = getPersonBySlug(slug);

  if (!person) {
    return {};
  }

  const dict = await getDictionary(locale);

  return {
    title: `${person.name} — ${dict.peoplePage.meta.title}`,
    description: person.phrase,
  };
}

export default async function PersonPage({ params }: PersonPageProps) {
  const { locale, slug } = await params;
  const person = getPersonBySlug(slug);

  if (!person) {
    notFound();
  }

  const dict = await getDictionary(locale);

  return (
    <>
      <Header locale={locale} dict={dict} activeNav="people" />
      <main>
        <PersonPageView person={person} locale={locale} dict={dict} />
        <StayHuman dict={dict} />
      </main>
      <PeopleFooter locale={locale} dict={dict} />
    </>
  );
}
