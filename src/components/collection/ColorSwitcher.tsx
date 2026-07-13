"use client";

import type { ProductColor } from "@/lib/types";
import type { Dictionary } from "@/i18n/types";

type ColorSwitcherProps = {
  color: ProductColor;
  onChange: (color: ProductColor) => void;
  dict: Dictionary;
  label?: string;
};

export function ColorSwitcher({
  color,
  onChange,
  dict,
  label,
}: ColorSwitcherProps) {
  const colors: ProductColor[] = ["white", "black"];

  return (
    <div className="flex flex-col gap-3">
      {label && (
        <span className="text-xs uppercase tracking-[0.15em] text-black/50">
          {label}
        </span>
      )}
      <div className="flex gap-2">
        {colors.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => onChange(c)}
            aria-pressed={color === c}
            className={`border px-4 py-2 text-xs uppercase tracking-tight transition-colors ${
              color === c
                ? "border-black bg-black text-white"
                : "border-black/20 hover:border-black"
            }`}
          >
            {dict.preorder.colors[c]}
          </button>
        ))}
      </div>
    </div>
  );
}
