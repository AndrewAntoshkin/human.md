"use client";

import Image from "next/image";
import type { Person } from "@/data/people";

type PersonPreviewProps = {
  person: Person;
  priority?: boolean;
};

export function PersonPreview({
  person,
  priority = false,
}: PersonPreviewProps) {
  return (
    <article className="flex flex-col gap-6">
      <div className="relative aspect-[3/4] overflow-hidden bg-black/[0.03]">
        <Image
          src={person.image}
          alt={person.name}
          fill
          priority={priority}
          loading={priority ? undefined : "eager"}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-center"
        />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <p className="text-sm tracking-tight">{person.name}</p>
          <p className="text-xs text-black/50">{person.role}</p>
          <p className="text-xs text-black/50">{person.city}</p>
          <p className="text-xs text-black/40">{person.version}</p>
        </div>

        <p className="text-sm leading-relaxed text-black/70">{person.phrase}</p>
      </div>
    </article>
  );
}
