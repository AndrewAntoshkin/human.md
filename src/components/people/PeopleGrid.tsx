import { PEOPLE } from "@/data/people";
import { PersonPreview } from "./PersonPreview";

export function PeopleGrid() {
  return (
    <section className="px-8 py-32 md:py-48">
      <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 md:gap-12 lg:grid-cols-4 lg:gap-8 xl:gap-12">
        {PEOPLE.map((person, index) => (
          <PersonPreview
            key={person.id}
            person={person}
            priority={index < 4}
          />
        ))}
      </div>
    </section>
  );
}
