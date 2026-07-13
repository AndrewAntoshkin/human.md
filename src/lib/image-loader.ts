const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function imageLoader({ src }: { src: string; width: number }) {
  return `${basePath}${src}`;
}
