import { User } from "lucide-react";
import { entourage, Person } from "../data/entourage";

/* =========================
   Person Card
========================= */
function PersonCard({ person }: { person: Person }) {
  const hasImage = !!person.image;

  return (
    <div className="flex flex-col items-center text-center space-y-3">
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

      <p className="text-base md:text-lg font-semibold text-deep-olive font-[Playfair Display]">
        {person.name}
      </p>

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

/* =========================
   Pair Card
========================= */
function PairCard({
  left,
  right,
}: {
  left?: Person;
  right?: Person;
}) {
  return (
    <div className="flex items-center justify-center gap-6">
      {left && <PersonCard person={left} />}

      {left && right && (
        <span className="text-deep-olive/50 font-serif text-lg">&</span>
      )}

      {right && <PersonCard person={right} />}
    </div>
  );
}

/* =========================
   Section Wrapper (NEW 🔥)
========================= */
function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center">
        <h3 className="text-xl md:text-2xl font-semibold text-deep-olive font-[Playfair Display] mb-2">
          {title}
        </h3>
        <div className="w-12 h-[1px] bg-light-sage"></div>
      </div>

      {children}
    </div>
  );
}

/* =========================
   Entourage
========================= */
export function Entourage() {
  const pair = (arr1: Person[], arr2: Person[]) =>
    arr1.map((p, i) => [p, arr2[i]]);

  /* Sponsors pairing */
  const sponsorPairs = [];
  for (let i = 0; i < entourage.principalSponsors.length; i += 2) {
    sponsorPairs.push([
      entourage.principalSponsors[i],
      entourage.principalSponsors[i + 1],
    ]);
  }

  /* Secondary Sponsors */
  const veilPairs =
    entourage.secondarySponsors && "veil" in entourage.secondarySponsors
      ? pair(
          entourage.secondarySponsors.veil,
          entourage.secondarySponsors.veil.slice(1)
        ).filter((_, i) => i % 2 === 0)
      : [];

  const cordPairs =
    entourage.secondarySponsors && "cord" in entourage.secondarySponsors
      ? pair(
          entourage.secondarySponsors.cord,
          entourage.secondarySponsors.cord.slice(1)
        ).filter((_, i) => i % 2 === 0)
      : [];

  /* Bridesmaids ↔ Groomsmen */
  const entouragePairs = pair(
    entourage.entourage.bridesmaids,
    entourage.entourage.groomsmen
  );

  return (
    <div className="space-y-20 text-center">

      {/* Title */}
      <div className="space-y-2">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-widest text-deep-olive font-[Playfair Display]">
          Entourage
        </h2>
        <p className="text-lg text-deep-olive font-medium font-sans">
          Meet the people who will be part of our special day
        </p>
      </div>

      {/* Parents */}
      <Section title="Parents">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {entourage.parents.map((p, i) => (
            <PersonCard key={i} person={p} />
          ))}
        </div>
      </Section>

      {/* Principal Sponsors */}
      <Section title="Principal Sponsors">
        <div className="space-y-6">
          {sponsorPairs.map(([a, b], i) => (
            <PairCard key={i} left={a} right={b} />
          ))}
        </div>
      </Section>

      {/* Veil Sponsors */}
      {veilPairs.length > 0 && (
        <Section title="Veil Sponsors">
          {veilPairs.map(([a, b], i) => (
            <PairCard key={i} left={a} right={b} />
          ))}
        </Section>
      )}

      {/* Cord Sponsors */}
      {cordPairs.length > 0 && (
        <Section title="Cord Sponsors">
          {cordPairs.map(([a, b], i) => (
            <PairCard key={i} left={a} right={b} />
          ))}
        </Section>
      )}

      {/* Maid of Honor & Best Man */}
      <Section title="Maid of Honor & Best Man">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-xl mx-auto">

          <div className="space-y-3">
            <p className="text-xs uppercase tracking-widest text-deep-olive/60">
              Maid of Honor
            </p>
            <div className="flex justify-center">
              <PersonCard person={entourage.entourage.maidOfHonor[0]} />
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs uppercase tracking-widest text-deep-olive/60">
              Best Man
            </p>
            <div className="flex justify-center">
              <PersonCard person={entourage.entourage.bestMan[0]} />
            </div>
          </div>

        </div>
      </Section>

      {/* Bridesmaids & Groomsmen */}
      <Section title="Bridesmaids & Groomsmen">
        <div className="space-y-6">
          {entouragePairs.map(([b, g], i) => (
            <PairCard key={i} left={b} right={g} />
          ))}
        </div>
      </Section>

      {/* Bearers */}
      <Section title="Bearers">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {entourage.bearers.map((p, i) => (
            <PersonCard key={i} person={p} />
          ))}
        </div>
      </Section>

      {/* Flower Girls */}
      <Section title="Flower Girls">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {entourage.entourage.flowerGirls.map((p, i) => (
            <PersonCard key={i} person={p} />
          ))}
        </div>
      </Section>

    </div>
  );
}