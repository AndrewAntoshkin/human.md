import Link from "next/link";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { LocaleSwitcher } from "./LocaleSwitcher";

export type NavKey = "collection" | "people" | "about";

type HeaderProps = {
  locale: Locale;
  dict: Dictionary;
  activeNav?: NavKey;
};

export function Header({ locale, dict, activeNav }: HeaderProps) {
  const homePath = localePath(locale, "/");

  const navItems: { key: NavKey; label: string; href: string }[] = [
    {
      key: "collection",
      label: dict.nav.collection,
      href: localePath(locale, "/collection"),
    },
    {
      key: "people",
      label: dict.nav.people,
      href: localePath(locale, "/people"),
    },
    {
      key: "about",
      label: dict.nav.about,
      href: localePath(locale, "/about"),
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm">
      <div className="flex h-14 items-center justify-between px-6 md:h-16 md:px-8">
        <Link
          href={homePath}
          className="text-sm tracking-tight transition-opacity hover:opacity-50"
        >
          human.md
        </Link>

        <nav className="flex items-center gap-4 md:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              aria-current={activeNav === item.key ? "page" : undefined}
              className={`text-sm tracking-tight transition-opacity hover:opacity-50 ${
                activeNav === item.key ? "text-black" : "text-black/50"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <LocaleSwitcher locale={locale} />
        </nav>
      </div>
    </header>
  );
}
