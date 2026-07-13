import Link from "next/link";
import { site } from "@/config/site";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

type FooterProps = {
  locale: Locale;
  dict: Dictionary;
};

export function Footer({ locale, dict }: FooterProps) {
  const homePath = localePath(locale, "/");

  return (
    <footer className="px-8 py-20 md:py-28">
      <div className="flex flex-col gap-16 md:gap-20">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <Link
            href={homePath}
            className="text-sm tracking-tight transition-opacity hover:opacity-50"
          >
            human.md
          </Link>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            <Link
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm tracking-tight transition-opacity hover:opacity-50"
            >
              {dict.footer.instagram}
            </Link>
            <Link
              href={site.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm tracking-tight transition-opacity hover:opacity-50"
            >
              {dict.footer.telegram}
            </Link>
            <Link
              href={site.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm tracking-tight transition-opacity hover:opacity-50"
            >
              {dict.footer.handle}
            </Link>
          </nav>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
          <p className="text-xs text-black/40">{dict.footer.copyright}</p>
          <p className="text-xs text-black/40">{dict.footer.signature}</p>
        </div>
      </div>
    </footer>
  );
}
