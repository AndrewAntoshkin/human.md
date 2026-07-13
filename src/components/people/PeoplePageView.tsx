import type { Dictionary } from "@/i18n/types";
import { FeaturedHuman } from "./FeaturedHuman";
import { PeopleArchiveForm } from "./PeopleArchiveForm";
import { PeopleGrid } from "./PeopleGrid";
import { PeopleHero } from "./PeopleHero";
import { PeopleIntro } from "./PeopleIntro";
import { PeopleStatement } from "./PeopleStatement";

type PeoplePageViewProps = {
  dict: Dictionary;
};

export function PeoplePageView({ dict }: PeoplePageViewProps) {
  return (
    <>
      <PeopleHero dict={dict} />
      <PeopleIntro dict={dict} />
      <PeopleGrid />
      <FeaturedHuman dict={dict} />
      <PeopleStatement dict={dict} />
      <PeopleArchiveForm dict={dict} />
    </>
  );
}
