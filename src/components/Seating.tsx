export function Seating() {
  return (
    <div className="mx-auto max-w-5xl space-y-10">
      <div className="text-center">
        <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-olive-secondary">
          A note for guests
        </p>
        <h2 className="mb-3 font-serif text-4xl font-medium text-deep-olive sm:text-5xl">
          Seating
        </h2>
        <p className="mx-auto max-w-xl font-sans text-sm leading-relaxed text-olive-secondary">
          Seating will be organized for family, wedding party, and guests.
        </p>
      </div>

      <div className="grid grid-cols-1 border-y border-readable-border sm:grid-cols-2">
        <article className="py-7 sm:pr-10 sm:py-9">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-olive-secondary">
            Ceremony
          </p>
          <h3 className="mt-2 font-serif text-2xl font-medium text-deep-olive sm:text-3xl">
            Ceremony Seating
          </h3>
          <p className="mt-2 max-w-xs font-sans text-sm leading-relaxed text-olive-secondary sm:text-base">
            Seating will be arranged for our ceremony.
          </p>
        </article>

        <article className="border-t border-readable-border py-7 sm:border-l sm:py-9 sm:pl-10">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-olive-secondary">
            Reception
          </p>
          <h3 className="mt-2 font-serif text-2xl font-medium text-deep-olive sm:text-3xl">
            Reception Seating
          </h3>
          <p className="mt-2 max-w-xs font-sans text-sm leading-relaxed text-olive-secondary sm:text-base">
            A separate seating arrangement will be prepared for the reception.
          </p>
        </article>
      </div>
    </div>
  );
}
