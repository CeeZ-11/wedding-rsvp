import { entourage, Person } from "../data/entourage";
import { Flower2, HandHeart, UsersRound } from "lucide-react";

function PersonRow({ person }: { person: Person }) {
  return (
    <li className="py-3 text-center">
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
    <div className="space-y-16 text-center sm:space-y-20">
      <header className="mx-auto max-w-5xl text-center">
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

      <section className="mx-auto max-w-5xl text-center">
        <div>
          <p className="flex items-center justify-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-olive-secondary">
            <UsersRound aria-hidden="true" className="h-4 w-4 stroke-[1.5]" />
            Our family
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-x-10 sm:grid-cols-2 sm:[&>li:nth-child(even)]:border-l sm:[&>li:nth-child(even)]:border-readable-border sm:[&>li:nth-child(even)]:pl-6">
          {entourage.parents.map((person) => (
            <PersonRow key={person.name} person={person} />
          ))}
        </ul>
      </section>

      <section className="bg-[#354238] px-6 py-10 text-center text-[#F8F5EB] sm:px-10 sm:py-14">
        <div className="mx-auto max-w-5xl">
          <p className="flex items-center justify-center gap-2 font-sans text-xs font-medium uppercase tracking-[0.22em] text-[#D7DDCF]">
            <HandHeart aria-hidden="true" className="h-4 w-4 stroke-[1.5]" />
            With appreciation
          </p>
          <h3 className="mt-3 font-serif text-3xl text-[#F8F5EB] sm:text-4xl">Principal Sponsors</h3>
          <ul className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: Math.ceil(entourage.principalSponsors.length / 2) }, (_, index) => {
              const [firstSponsor, secondSponsor] = entourage.principalSponsors.slice(index * 2, index * 2 + 2);

              return (
                <li key={`${firstSponsor.name}-${secondSponsor?.name ?? 'single'}`} className="flex flex-col items-center justify-center px-3 py-5 text-center">
                  <p className="font-serif text-xl leading-snug text-[#F8F5EB] sm:text-2xl">
                    {firstSponsor.name}
                    {secondSponsor && <><span className="mx-2 text-[#D7DDCF]">&amp;</span>{secondSponsor.name}</>}
                  </p>
                  <p className="mt-2 font-sans text-[0.65rem] font-medium uppercase tracking-[0.16em] text-[#D7DDCF]">
                    Principal Sponsors
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {secondarySponsorGroups.length > 0 && (
        <section className="mx-auto max-w-5xl space-y-6 text-center">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-olive-secondary">
              Secondary sponsors
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-12 sm:grid-cols-2">
            {secondarySponsorGroups.map((group, index) => (
              <div key={group.title} className={index > 0 ? "sm:border-l sm:border-readable-border sm:pl-8" : ""}>
                <h4 className="flex items-center justify-center gap-2 pb-2 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-deep-olive">
                  <Flower2 aria-hidden="true" className="h-4 w-4 stroke-[1.5]" />
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

      <section className="mx-auto max-w-5xl py-4 sm:py-6">
        <div className="mb-8 text-center">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-olive-secondary">
            Our entourage
          </p>
          <h3 className="font-serif text-3xl text-deep-olive sm:text-4xl">Wedding Party</h3>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-0">
          <div>
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

          <div className="pt-2 sm:border-l sm:border-readable-border sm:pt-0">
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
        <div className="text-center">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-olive-secondary">
              The ceremony
            </p>
            <h3 className="mt-2 font-serif text-3xl text-deep-olive sm:text-4xl">
              Ceremony Roles
            </h3>
          </div>
          <div className="mx-auto mt-6 max-w-4xl border-b border-readable-border pb-6">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-olive-secondary">
              Officiating Pastor
            </p>
            <p className="mt-2 font-serif text-xl text-deep-olive sm:text-2xl">
              {entourage.officiatingPastor.name}
            </p>
          </div>
          <ul className="mx-auto mt-5 grid max-w-4xl grid-cols-1 gap-x-10 sm:grid-cols-2 sm:[&>li:nth-child(even)]:border-l sm:[&>li:nth-child(even)]:border-readable-border sm:[&>li:nth-child(even)]:pl-6">
            {entourage.ceremonyRoles.map((person) => (
              <PersonRow key={person.name} person={person} />
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
