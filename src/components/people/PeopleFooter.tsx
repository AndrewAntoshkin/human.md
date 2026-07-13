import Link from "next/link";
import { site } from "@/config/site";
import { ARCHIVE_VERSION } from "@/data/people";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

type PeopleFooterProps = {
  locale: Locale;
  dict: Dictionary;
};

export function PeopleFooter({ locale, dict }: PeopleFooterProps) {
  const homePath = localePath(locale, "/");
  const { footer } = dict.peoplePage;

  const navItems = [
    { label: dict.nav.collection, href: localePath(locale, "/collection") },
    { label: dict.nav.people, href: localePath(locale, "/people") },
    { label: dict.nav.about, href: localePath(locale, "/about") },
  ];

  return (
    <footer className="border-t border-black/10 px-8 py-20 md:py-28">
      <div className="flex flex-col gap-16 md:gap-20">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-3">
            <Link
              href={homePath}
              className="text-sm tracking-tight transition-opacity hover:opacity-50"
            >
              human.md
            </Link>
            <p className="text-xs text-black/40">
              {footer.archiveLabel} {ARCHIVE_VERSION}
            </p>
            <p className="text-xs text-black/40">{footer.copyright}</p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm tracking-tight transition-opacity hover:opacity-50"
              >
                {item.label}
              </Link>
            ))}
          </nav>

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
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm tracking-tight transition-opacity hover:opacity-50"
            >
              {dict.footer.handle}
            </Link>
          </nav>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
          <p className="text-xs text-black/40">{footer.tagline}</p>
          <p className="text-xs text-black/40">{footer.signature}</p>
        </div>
      </div>
    </footer>
  );
}
