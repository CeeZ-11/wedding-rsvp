import { Armchair, Table2 } from "lucide-react";

export function Seating() {
  return (
    <div className="space-y-10 text-center">
      <div className="flex flex-col items-center">
        <h2 className="font-serif text-4xl font-medium text-deep-olive sm:text-5xl mb-3">
          Seating
        </h2>
        <div className="w-16 h-px bg-readable-border"></div>
      </div>

      <p className="font-sans text-sm text-olive-secondary">
        Seating will be organized for family, wedding party, and guests.
      </p>

      <div className="mx-auto grid max-w-2xl grid-cols-1 overflow-hidden rounded-2xl border border-readable-border bg-light-sage/10 md:grid-cols-2">
        <article className="flex flex-col items-center px-6 py-8 sm:px-10 sm:py-10">
          <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-olive-secondary">
            Ceremony
          </p>
          <Armchair aria-hidden="true" className="mb-4 h-8 w-8 text-deep-olive" strokeWidth={1.5} />
          <h3 className="mb-2 font-serif text-2xl font-medium text-deep-olive">
            Ceremony Seating
          </h3>
          <p className="max-w-xs font-sans text-base leading-relaxed text-olive-secondary">
            Seating will be arranged for our ceremony.
          </p>
        </article>

        <article className="flex flex-col items-center border-t border-readable-border px-6 py-8 sm:px-10 sm:py-10 md:border-l md:border-t-0">
          <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-olive-secondary">
            Reception
          </p>
          <Table2 aria-hidden="true" className="mb-4 h-8 w-8 text-deep-olive" strokeWidth={1.5} />
          <h3 className="mb-2 font-serif text-2xl font-medium text-deep-olive">
            Reception Seating
          </h3>
          <p className="max-w-xs font-sans text-base leading-relaxed text-olive-secondary">
            A separate seating arrangement will be prepared for the reception.
          </p>
        </article>
      </div>
    </div>
  );
}