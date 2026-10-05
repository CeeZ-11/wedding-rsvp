import { entourage, Person } from "../data/entourage";

function PersonRow({ person }: { person: Person }) {
  return (
    <li className="border-b border-readable-border/70 py-4 text-left last:border-b-0">
      <p className="font-serif text-xl text-deep-olive sm:text-2xl">{person.name}</p>
      {(person.role || person.relation) && (
        <p className="mt-1 font-sans text-xs leading-relaxed text-olive-secondary sm:text-sm">
          {[person.role, person.relation].filter(Boolean).join(" · ")}
        </p>
      )}
    </li>
  );
}

export function Entourage() {
  const secondarySponsorGroups = [
    { title: "Veil", people: entourage.secondarySponsors.veil },
    { title: "Cord", people: entourage.secondarySponsors.cord },
  ].filter((group) => group.people.some((person) => person.name));

  return (
    <div className="space-y-16 text-left sm:space-y-20">
      <header className="mx-auto max-w-5xl border-b border-readable-border pb-8 text-center sm:pb-10">
        <p className="mb-3 font-sans text-xs font-medium uppercase tracking-[0.24em] text-olive-secondary">
          With gratitude
        </p>
        <h2 className="font-serif text-4xl font-medium text-deep-olive sm:text-5xl md:text-6xl">
          The people beside us
        </h2>
        <p className="mx-auto mt-3 max-w-xl font-sans text-base leading-relaxed text-olive-secondary">
          Meet our family, sponsors, and wedding party.
        </p>
      </header>

      <section className="mx-auto grid max-w-5xl grid-cols-1 gap-10 sm:grid-cols-[0.7fr_1.3fr] sm:gap-16">
        <div className="text-center sm:text-left">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-olive-secondary">
            Our family
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
          {entourage.parents.map((person) => (
            <PersonRow key={person.name} person={person} />
          ))}
        </ul>
      </section>

      <section className="bg-[#354238] px-6 py-10 text-center text-[#F8F5EB] sm:px-10 sm:py-14 sm:text-left">
        <div className="mx-auto max-w-5xl">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.22em] text-[#D7DDCF]">
            With appreciation
          </p>
          <h3 className="mt-3 font-serif text-3xl text-[#F8F5EB] sm:text-4xl">Principal Sponsors</h3>
          <ul className="mt-8 grid grid-cols-1 gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
            {entourage.principalSponsors.map((person) => (
              <li
                key={person.name}
                className="border-t border-[#AAB3A3]/60 py-4 font-serif text-xl text-[#F8F5EB] sm:text-2xl"
              >
                {person.name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {secondarySponsorGroups.length > 0 && (
        <section className="mx-auto grid max-w-5xl grid-cols-1 gap-10 sm:grid-cols-[0.7fr_1.3fr] sm:gap-16">
          <div className="text-center sm:text-left">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-olive-secondary">
              Secondary sponsors
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-12 sm:grid-cols-2">
            {secondarySponsorGroups.map((group) => (
              <div key={group.title}>
                <h4 className="border-b border-readable-border pb-2 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-deep-olive">
                  {group.title} sponsors
                </h4>
                <ul>
                  {group.people.filter((person) => person.name).map((person) => (
                    <PersonRow key={person.name} person={person} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-5xl border-y border-readable-border py-10 sm:py-14">
        <div className="mb-8 grid grid-cols-1 gap-2 sm:grid-cols-[0.7fr_1.3fr] sm:items-end sm:gap-16">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-olive-secondary">
            Our entourage
          </p>
          <h3 className="text-center font-serif text-3xl text-deep-olive sm:text-left sm:text-4xl">Wedding Party</h3>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-0">
          <div className="sm:pr-10">
            <p className="mb-2 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-olive-secondary">
              Groom&apos;s side · Men
            </p>
            <ul>
              <PersonRow person={entourage.groomSide.bestMan} />
              {entourage.groomSide.groomsmen.map((person) => (
                <PersonRow key={person.name} person={person} />
              ))}
            </ul>
          </div>

          <div className="border-t border-readable-border pt-8 sm:border-l sm:border-t-0 sm:pl-10 sm:pt-0">
            <p className="mb-2 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-olive-secondary">
              Bride&apos;s side · Women
            </p>
            <ul>
              <PersonRow person={entourage.brideSide.maidOfHonor} />
              {entourage.brideSide.bridesmaids.map((person) => (
                <PersonRow key={person.name} person={person} />
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-[0.7fr_1.3fr] sm:gap-16">
          <div className="text-center sm:text-left">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-olive-secondary">
              The ceremony
            </p>
            <h3 className="mt-2 font-serif text-3xl text-deep-olive sm:text-4xl">
              Ceremony Roles
            </h3>
          </div>
          <ul className="mt-5 grid grid-cols-1 gap-x-10 sm:mt-0 sm:grid-cols-2">
            {entourage.ceremonyRoles.map((person) => (
              <PersonRow key={person.name} person={person} />
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
