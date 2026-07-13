"use client";

import { useEffect } from "react";
import type { Locale } from "@/i18n/config";

type SetLangProps = {
  locale: Locale;
};

export function SetLang({ locale }: SetLangProps) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
