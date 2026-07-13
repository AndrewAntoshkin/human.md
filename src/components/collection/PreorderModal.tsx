"use client";

import { useEffect, useRef, useState } from "react";
import type { Product } from "@/lib/types";
import type { Dictionary } from "@/i18n/types";
import type { Locale } from "@/i18n/config";
import { COLLECTION_V1, PRODUCT_PRICE } from "@/data/collection-v1";
import { ObjectLabel } from "./ObjectLabel";

type PreorderModalProps = {
  product: Product;
  dict: Dictionary;
  locale: Locale;
  open: boolean;
  onClose: () => void;
  initialSize?: string;
  initialColor?: string;
};

type FormState = {
  color: string;
  size: string;
  name: string;
  email: string;
};

const COLORS = ["white", "black"] as const;
const SIZES = ["XS", "S", "M", "L", "XL", "XXL"] as const;

export function PreorderModal({
  product,
  dict,
  locale,
  open,
  onClose,
  initialSize = "M",
  initialColor = "white",
}: PreorderModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [form, setForm] = useState<FormState>({
    color: initialColor,
    size: initialSize,
    name: "",
    email: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [open]);

  const handleClose = () => {
    onClose();
    setForm({
      color: initialColor,
      size: initialSize,
      name: "",
      email: "",
    });
    setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/preorder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          product: product.slug,
          productId: product.id,
          locale,
        }),
      });

      if (!res.ok) throw new Error("Failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={handleClose}
      className="fixed inset-0 z-50 m-0 h-full max-h-full w-full max-w-full border-0 bg-black/40 p-0 backdrop:bg-black/40"
    >
      <div className="flex min-h-full items-center justify-center p-6">
        <div className="relative w-full max-w-md bg-white">
          <button
            type="button"
            onClick={handleClose}
            className="absolute right-4 top-4 text-xs uppercase tracking-[0.15em] text-black/50 transition-opacity hover:opacity-60"
            aria-label={dict.preorder.close}
          >
            {dict.preorder.close}
          </button>

          {status === "success" ? (
            <div className="flex flex-col gap-4 p-8 pt-12">
              <p className="text-xs uppercase tracking-[0.2em] text-black/50">
                {product.id}
              </p>
              <p className="text-lg leading-relaxed">{dict.preorder.success}</p>
              <button
                type="button"
                onClick={handleClose}
                className="mt-4 border border-black bg-black py-4 text-sm text-white transition-colors hover:bg-white hover:text-black"
              >
                {dict.preorder.close}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 p-8 pt-12">
              <div className="flex flex-col gap-2">
                <p className="text-xs uppercase tracking-[0.2em] text-black/50">
                  {dict.preorder.title}
                </p>
                <ObjectLabel
                  product={product}
                  collectionVersion={COLLECTION_V1.version}
                  collectionName={COLLECTION_V1.name}
                />
                <p className="text-sm">{PRODUCT_PRICE}</p>
              </div>

              <fieldset className="flex flex-col gap-3 border-0 p-0">
                <legend className="mb-2 text-xs uppercase tracking-[0.15em] text-black/50">
                  {dict.preorder.color}
                </legend>
                <div className="flex gap-2">
                  {COLORS.map((color) => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => setForm((f) => ({ ...f, color }))}
                      className={`border px-4 py-2 text-xs uppercase tracking-tight transition-colors ${
                        form.color === color
                          ? "border-black bg-black text-white"
                          : "border-black/20 hover:border-black"
                      }`}
                    >
                      {dict.preorder.colors[color]}
                    </button>
                  ))}
                </div>
              </fieldset>

              <fieldset className="flex flex-col gap-3 border-0 p-0">
                <legend className="mb-2 text-xs uppercase tracking-[0.15em] text-black/50">
                  {dict.preorder.size}
                </legend>
                <div className="flex gap-2">
                  {SIZES.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setForm((f) => ({ ...f, size }))}
                      className={`min-w-[48px] border px-3 py-2 text-xs tracking-tight transition-colors ${
                        form.size === size
                          ? "border-black bg-black text-white"
                          : "border-black/20 hover:border-black"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </fieldset>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="preorder-name"
                  className="text-xs uppercase tracking-[0.15em] text-black/50"
                >
                  {dict.preorder.name}
                </label>
                <input
                  id="preorder-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                  className="border border-black/20 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-black"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="preorder-email"
                  className="text-xs uppercase tracking-[0.15em] text-black/50"
                >
                  {dict.preorder.email}
                </label>
                <input
                  id="preorder-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, email: e.target.value }))
                  }
                  className="border border-black/20 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-black"
                />
              </div>

              {status === "error" && (
                <p className="text-xs text-black/70">{dict.preorder.error}</p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="border border-black bg-black py-4 text-sm text-white transition-colors hover:bg-white hover:text-black disabled:opacity-50"
              >
                {status === "loading"
                  ? dict.preorder.submitting
                  : dict.preorder.submit}
              </button>
            </form>
          )}
        </div>
      </div>
    </dialog>
  );
}
