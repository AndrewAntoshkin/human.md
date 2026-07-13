"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localePath, locales, type Locale } from "@/i18n/config";

type LocaleSwitcherProps = {
  locale: Locale;
};

export function LocaleSwitcher({ locale }: LocaleSwitcherProps) {
  const pathname = usePathname();

  const pathWithoutLocale =
    pathname.replace(new RegExp(`^/(${locales.join("|")})(?=/|$)`), "") || "/";

  return (
    <div className="flex items-center gap-2 text-xs tracking-tight">
      {locales.map((loc) => (
        <Link
          key={loc}
          href={localePath(loc, pathWithoutLocale)}
          prefetch={false}
          scroll={false}
          className={`uppercase transition-opacity hover:opacity-60 ${
            loc === locale ? "text-black" : "text-black/30"
          }`}
          aria-current={loc === locale ? "page" : undefined}
        >
          {loc}
        </Link>
      ))}
    </div>
  );
}
