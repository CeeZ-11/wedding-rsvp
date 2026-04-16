import { User } from "lucide-react";
import { entourage, Person } from "../data/entourage";

function PersonCard({ person }: { person: Person }) {
  const hasImage = !!person.image;

  return (
    <div className="flex flex-col items-center text-center space-y-3">
      {/* Image */}
      {hasImage ? (
        <img
          src={person.image}
          alt={person.name}
          className="w-24 h-24 rounded-full object-cover border border-light-sage/40"
        />
      ) : (
        <div className="w-24 h-24 rounded-full flex items-center justify-center bg-light-sage/20 border border-light-sage/40">
          <User className="w-7 h-7 text-deep-olive" strokeWidth={1.5} />
        </div>
      )}

      {/* Name */}
      <p className="text-base md:text-lg font-semibold text-deep-olive font-[Playfair Display]">
        {person.name}
      </p>

      {/* Role + Relation */}
      {(person.role || person.relation) && (
        <div className="text-sm text-deep-olive font-sans leading-tight">
          {person.role && <div>{person.role}</div>}
          {person.relation && (
            <div className="text-xs text-deep-olive/70">
              {person.relation}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export function Entourage() {
  // ✅ Combine all into one array
  const allPeople: Person[] = [
    ...entourage.parents,
    ...entourage.principalSponsors,
    ...(entourage.secondarySponsors && 'veil' in entourage.secondarySponsors ? entourage.secondarySponsors.veil : []),
    ...(entourage.secondarySponsors && 'cord' in entourage.secondarySponsors ? entourage.secondarySponsors.cord : []),
    ...entourage.entourage.maidOfHonor,
    ...entourage.entourage.bestMan,
    ...entourage.entourage.bridesmaids,
    ...entourage.entourage.groomsmen,
    ...entourage.bearers,
    ...entourage.entourage.flowerGirls,
  ];

  return (
    <div className="space-y-10 text-center">

      {/* Title */}
      <div className="space-y-2">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-widest text-deep-olive font-[Playfair Display]">
          Entourage
        </h2>

        <p className="text-lg text-deep-olive font-medium font-sans">
          Meet the people who will be part of our special day
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-6">
        {allPeople.map((person, i) => (
          <div key={i} className="flex justify-center">
            <PersonCard person={person} />
          </div>
        ))}
      </div>

    </div>
  );
}