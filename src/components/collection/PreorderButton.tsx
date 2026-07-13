"use client";

import { useState } from "react";
import type { Product } from "@/lib/types";
import type { Dictionary } from "@/i18n/types";
import type { Locale } from "@/i18n/config";
import { PreorderModal } from "./PreorderModal";

type PreorderButtonProps = {
  product: Product;
  dict: Dictionary;
  locale: Locale;
};

export function PreorderButton({ product, dict, locale }: PreorderButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="w-full border border-black bg-black py-4 text-sm tracking-tight text-white transition-colors hover:bg-white hover:text-black"
      >
        {dict.preorder.cta}
      </button>

      <PreorderModal
        product={product}
        dict={dict}
        locale={locale}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
