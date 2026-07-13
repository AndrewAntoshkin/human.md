import { redirect } from "next/navigation";
import { localePath, type Locale } from "@/i18n/config";

type ManifestoPageProps = {
  params: Promise<{ locale: Locale }>;
};

export default async function ManifestoPage({ params }: ManifestoPageProps) {
  const { locale } = await params;

  redirect(localePath(locale, "/about"));
}
