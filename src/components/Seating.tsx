import { Armchair, Church, Utensils } from "lucide-react";

export function Seating() {
  return (
    <div className="mx-auto max-w-5xl space-y-10">
      <div className="text-center">
        <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-olive-secondary">
          A note for guests
        </p>
        <h2 className="mb-3 flex items-center justify-center gap-2 font-serif text-4xl font-medium text-deep-olive sm:text-5xl">
          <Armchair aria-hidden="true" className="h-6 w-6 stroke-[1.5]" /> Seating
        </h2>
        <p className="mx-auto max-w-xl font-sans text-sm leading-relaxed text-olive-secondary">
          Seating will be organized for family, wedding party, and guests.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-12">
        <article className="py-4 text-center sm:pr-10 sm:text-left">
          <p className="flex items-center justify-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-olive-secondary sm:justify-start">
            <Church aria-hidden="true" className="h-4 w-4 stroke-[1.5]" />
            Ceremony
          </p>
          <h3 className="mt-2 font-serif text-2xl font-medium text-deep-olive sm:text-3xl">
            Ceremony Seating
          </h3>
          <p className="mx-auto mt-2 max-w-xs font-sans text-sm leading-relaxed text-olive-secondary sm:mx-0 sm:text-base">
            Seating will be arranged for our ceremony.
          </p>
        </article>

        <article className="py-4 text-center sm:border-l sm:border-readable-border sm:pl-10 sm:text-left">
          <p className="flex items-center justify-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-olive-secondary sm:justify-start">
            <Utensils aria-hidden="true" className="h-4 w-4 stroke-[1.5]" />
            Reception
          </p>
          <h3 className="mt-2 font-serif text-2xl font-medium text-deep-olive sm:text-3xl">
            Reception Seating
          </h3>
          <p className="mx-auto mt-2 max-w-xs font-sans text-sm leading-relaxed text-olive-secondary sm:mx-0 sm:text-base">
            A separate seating arrangement will be prepared for the reception.
          </p>
        </article>
      </div>
    </div>
  );
}
