import { useState } from 'react';
import { User } from 'lucide-react';
import { entourage, Person } from '../data/entourage';

function PersonCard({ person }: { person: Person }) {
  const hasImage = !!person.image;

  return (
    <div className="flex flex-col items-center text-center space-y-2 w-[120px]">
      {/* Image / Fallback */}
      {hasImage ? (
        <img
          src={person.image}
          alt={person.name}
          className="w-20 h-20 rounded-full object-cover border border-light-sage/40 transition-transform duration-300 hover:scale-105"
        />
      ) : (
        <div className="w-20 h-20 rounded-full flex items-center justify-center bg-light-sage/20 border border-light-sage/40">
          <User className="w-6 h-6 text-deep-olive/60" strokeWidth={1.5} />
        </div>
      )}

      {/* Name */}
      <p className="font-serif text-deep-olive leading-tight">
        {person.name}
      </p>

      {/* Role */}
      {person.role && (
        <p className="text-xs text-deep-olive/60 italic leading-tight">
          {person.role}
        </p>
      )}
    </div>
  );
}

function Section({
  title,
  people,
}: {
  title: string;
  people: Person[];
}) {
  if (!people || people.length === 0) return null;

  return (
    <div className="space-y-6">
      {/* Section Title */}
      <h3 className="text-center font-serif text-xl text-deep-olive tracking-widest uppercase">
        {title}
      </h3>

      {/* ✅ CLEAN GRID (LEFT → RIGHT, CENTERED BLOCK) */}
      <div className="max-w-2xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {people.map((p, i) => (
            <div key={i} className="flex justify-center">
              <PersonCard person={p} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Entourage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-12 pt-10">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="font-script text-4xl md:text-5xl text-deep-olive mb-2">
          Entourage
        </h2>

        <button
          onClick={() => setOpen(!open)}
          className="text-sm text-deep-olive/70 hover:underline transition"
        >
          {open ? 'Hide Entourage' : 'View Entourage'}
        </button>
      </div>

      {/* Content */}
      <div
        className={`transition-all duration-500 ${
          open
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-2 pointer-events-none h-0 overflow-hidden'
        }`}
      >
        <div className="space-y-12">
          <Section title="Parents" people={entourage.parents} />

          <Section
            title="Principal Sponsors"
            people={entourage.principalSponsors}
          />

          <Section
            title="Maid of Honor"
            people={entourage.entourage.maidOfHonor}
          />

          <Section
            title="Best Man"
            people={entourage.entourage.bestMan}
          />

          <Section
            title="Bridesmaids"
            people={entourage.entourage.bridesmaids}
          />

          <Section
            title="Groomsmen"
            people={entourage.entourage.groomsmen}
          />

          <Section title="Bearers" people={entourage.bearers} />
        </div>
      </div>
    </div>
  );
}