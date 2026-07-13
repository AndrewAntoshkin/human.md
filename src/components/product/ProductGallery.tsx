import Image from "next/image";
import type { GallerySlide } from "@/lib/product-utils";

type ProductGalleryProps = {
  slides: GallerySlide[];
};

export function ProductGallery({ slides }: ProductGalleryProps) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6 lg:gap-8">
      {slides.map((slide, index) => (
        <div
          key={`${slide.src}-${index}`}
          className="relative aspect-[3/4] w-full bg-white"
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 65vw"
            className="object-cover object-center"
          />
        </div>
      ))}
    </div>
  );
}
