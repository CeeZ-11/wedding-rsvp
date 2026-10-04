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
          className="w-24 h-24 rounded-full object-cover border border-readable-border"
        />
      ) : (
        <div className="w-24 h-24 rounded-full flex items-center justify-center bg-light-sage/30 border border-readable-border">
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
            <div className="text-xs text-olive-secondary">
              {person.relation}
            </div>
          )}
        </div>
      )}
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
        <div className="w-12 h-px bg-readable-border"></div>
      </div>

      {children}
    </div>
  );
}

/* =========================
   Entourage
========================= */
export function Entourage() {
  const secondarySponsorGroups = [
    { title: "Veil Sponsors", people: entourage.secondarySponsors.veil },
    { title: "Cord Sponsors", people: entourage.secondarySponsors.cord },
  ].filter((group) => group.people.some((person) => person.name));

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
        <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-4 sm:gap-8 max-w-3xl mx-auto">
          {entourage.principalSponsors.map((person) => (
            <PersonCard key={person.name} person={person} />
          ))}
        </div>
      </Section>

      {/* Secondary Sponsors */}
      {secondarySponsorGroups.length > 0 && (
        <Section title="Secondary Sponsors">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            {secondarySponsorGroups.map((group) => (
              <div key={group.title} className="space-y-6">
                <h4 className="text-sm uppercase tracking-widest text-olive-secondary">
                  {group.title}
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {group.people.filter((person) => person.name).map((person) => (
                    <PersonCard key={person.name} person={person} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Wedding Party */}
      <Section title="Wedding Party">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-10">
          <div className="space-y-8">
            <h4 className="text-sm uppercase tracking-[0.18em] text-olive-secondary">
              Groom&apos;s Side · Men
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-10">
              <PersonCard person={entourage.groomSide.bestMan} />
              {entourage.groomSide.groomsmen.map((person) => (
                <PersonCard key={person.name} person={person} />
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-sm uppercase tracking-[0.18em] text-olive-secondary">
              Bride&apos;s Side · Women
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-10">
              <PersonCard person={entourage.brideSide.maidOfHonor} />
              {entourage.brideSide.bridesmaids.map((person) => (
                <PersonCard key={person.name} person={person} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Ceremony Roles */}
      <Section title="Ceremony Roles">
        <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
          {entourage.ceremonyRoles.map((person) => (
            <PersonCard key={person.name} person={person} />
          ))}
        </div>
      </Section>

    </div>
  );
}