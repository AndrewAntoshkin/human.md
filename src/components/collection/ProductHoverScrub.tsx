"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import type { Product, ProductColor } from "@/lib/types";
import { getProductImages } from "@/lib/types";
import type { Dictionary } from "@/i18n/types";

type ProductHoverScrubProps = {
  product: Product;
  color: ProductColor;
  dict: Dictionary;
  priority?: boolean;
  className?: string;
};

export function ProductHoverScrub({
  product,
  color,
  dict,
  priority = false,
  className = "",
}: ProductHoverScrubProps) {
  const images = getProductImages(product, color);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleMove = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (clientX - rect.left) / rect.width;
    setProgress(Math.min(1, Math.max(0, x)));
  }, []);

  const viewLabel =
    !hovered || progress < 0.5 ? dict.product.front : dict.product.back;

  return (
    <div
      ref={containerRef}
      className={`group relative aspect-[3/4] w-full cursor-crosshair overflow-hidden bg-white ${className}`}
      onMouseEnter={() => {
        setHovered(true);
        setProgress(0);
      }}
      onMouseLeave={() => {
        setHovered(false);
        setProgress(0);
      }}
      onMouseMove={(e) => {
        if (hovered) handleMove(e.clientX);
      }}
      onTouchStart={() => setHovered(true)}
      onTouchMove={(e) => {
        if (e.touches[0]) handleMove(e.touches[0].clientX);
      }}
      onTouchEnd={() => setHovered(false)}
    >
      <Image
        src={hovered ? images.modelFront : images.flatFront}
        alt={`${product.frontText} — ${dict.product.front}`}
        fill
        priority={priority}
        loading={priority ? undefined : "eager"}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover object-center transition-opacity duration-300"
      />

      {hovered && (
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 0 0 ${progress * 100}%)` }}
        >
          <Image
            src={images.modelBack}
            alt={`${product.frontText} — ${dict.product.back}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-center"
          />
        </div>
      )}

      {hovered && progress > 0 && (
        <div
          className="pointer-events-none absolute inset-y-0 w-px bg-black/20"
          style={{ left: `${progress * 100}%` }}
        />
      )}

      <div className="pointer-events-none absolute inset-0 flex items-end justify-between p-4">
        <span className="text-[10px] uppercase tracking-[0.2em] text-black/30">
          {product.id}
        </span>
        <span
          className={`text-[10px] uppercase tracking-[0.2em] transition-opacity duration-300 ${
            hovered ? "text-black/40" : "text-black/0"
          }`}
        >
          {viewLabel}
        </span>
      </div>
    </div>
  );
}
