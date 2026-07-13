import type { Locale } from "@/i18n/config";

export type ProductContent = {
  description: [string, string];
  story: string;
};

export const PRODUCT_CONTENT: Record<
  Locale,
  Record<string, ProductContent>
> = {
  en: {
    "human-md": {
      description: [
        "Heavyweight oversized t-shirt.",
        "Made for humans.",
      ],
      story:
        "The entry point to the collection. A filename that became a manifesto — documentation written not for machines, but for people.",
    },
    memory: {
      description: [
        "Heavyweight oversized t-shirt.",
        "Made for humans.",
      ],
      story:
        "Memory is the most human file format. This piece speaks to what we choose to remember — and what we tell our systems about the people we love.",
    },
    context: {
      description: [
        "Heavyweight oversized t-shirt.",
        "Made for humans.",
      ],
      story:
        "This collection explores the relationship between humans and artificial intelligence through familiar technical language.\n\nThe phrase can be understood as both code and emotion.",
    },
    branch: {
      description: [
        "Heavyweight oversized t-shirt.",
        "Made for humans.",
      ],
      story:
        "Every decision is a fork. Different paths, same person underneath. A statement about identity in a world of infinite versions.",
    },
    readme: {
      description: [
        "Heavyweight oversized t-shirt.",
        "Made for humans.",
      ],
      story:
        "Before anything else, read this. The most important file in any repository — and the gentlest instruction we could print on cotton.",
    },
    human: {
      description: [
        "Heavyweight oversized t-shirt.",
        "Made for humans.",
      ],
      story:
        "The closing statement of Collection v1.0.0. Technology assists, but humanity remains the author.",
    },
  },
  ru: {
    "human-md": {
      description: [
        "Плотная оверсайз футболка.",
        "Сделана для людей.",
      ],
      story:
        "Точка входа в коллекцию. Имя файла, ставшее манифестом — документация, написанная не для машин, а для людей.",
    },
    memory: {
      description: [
        "Плотная оверсайз футболка.",
        "Сделана для людей.",
      ],
      story:
        "Память — самый человеческий формат файла. Эта вещь о том, что мы выбираем помнить — и что рассказываем нашим системам о близких.",
    },
    context: {
      description: [
        "Плотная оверсайз футболка.",
        "Сделана для людей.",
      ],
      story:
        "Коллекция исследует отношения между людьми и искусственным интеллектом через знакомый технический язык.\n\nФразу можно понять и как код, и как эмоцию.",
    },
    branch: {
      description: [
        "Плотная оверсайз футболка.",
        "Сделана для людей.",
      ],
      story:
        "Каждое решение — развилка. Разные пути, один и тот же человек внутри. Заявление об идентичности в мире бесконечных версий.",
    },
    readme: {
      description: [
        "Плотная оверсайз футболка.",
        "Сделана для людей.",
      ],
      story:
        "Прежде всего — прочитай это. Самый важный файл в любом репозитории — и самая мягкая инструкция, которую мы могли напечатать на хлопке.",
    },
    human: {
      description: [
        "Плотная оверсайз футболка.",
        "Сделана для людей.",
      ],
      story:
        "Заключительное заявление Collection v1.0.0. Технология помогает, но автором остаётся человек.",
    },
  },
};

export function getProductContent(
  locale: Locale,
  slug: string,
): ProductContent {
  return (
    PRODUCT_CONTENT[locale][slug] ?? PRODUCT_CONTENT.en[slug] ?? {
      description: ["Heavyweight oversized t-shirt.", "Made for humans."],
      story: "",
    }
  );
}
