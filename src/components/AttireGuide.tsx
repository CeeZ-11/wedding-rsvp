import { Shirt, UsersRound } from "lucide-react";

const guestPalette = [
  { color: "#C7A491", label: "Warm taupe" },
  { color: "#EECFCA", label: "Dusty rose" },
  { color: "#919682", label: "Sage" },
  { color: "#EAE6DF", label: "Soft neutral" },
];

export function AttireGuide() {
  return (
    <div className="mx-auto max-w-6xl space-y-14 sm:space-y-20">
      <header className="mx-auto max-w-2xl text-center sm:mx-0 sm:text-left">
        <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-olive-secondary">
          Garden wedding
        </p>
        <h2 className="font-serif text-5xl font-medium text-deep-olive sm:text-6xl">
          What to wear
        </h2>
        <p className="mt-4 font-serif text-xl text-olive-secondary sm:text-2xl">
          Semi-formal attire in soft, garden-inspired tones.
        </p>
      </header>

      <section className="grid grid-cols-1 gap-x-12 gap-y-10 py-4 sm:grid-cols-[0.7fr_1.3fr] sm:py-6">
        <div className="text-center sm:text-left">
          <p className="flex items-center justify-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-olive-secondary sm:justify-start">
            <UsersRound aria-hidden="true" className="h-4 w-4 stroke-[1.5]" /> Wedding party
          </p>
          <h3 className="mt-2 font-serif text-3xl text-deep-olive sm:text-4xl">
            Attendant attire
          </h3>
        </div>

        <div className="text-center sm:text-left">
          <div className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
            <div className="pb-7 sm:pb-0">
              <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-olive-secondary">
                Bridesmaids
              </h4>
              <p className="mx-auto mt-3 max-w-md font-serif text-xl leading-relaxed text-deep-olive sm:mx-0">
                Soft sage green or muted tones; elegant, flowy garden-style dresses.
              </p>
              <div className="mt-5 flex justify-center gap-2 sm:justify-start" aria-label="Suggested bridesmaid colors">
                {["#919682", "#C7CDBF", "#A3B19B"].map((color) => (
                  <span
                    key={color}
                    aria-hidden="true"
                    className="h-7 w-7 rounded-full border border-black/10"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            <div className="pt-2 sm:border-l sm:border-readable-border sm:pl-10 sm:pt-0">
              <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-olive-secondary">
                Groomsmen &amp; Best Man
              </h4>
              <p className="mx-auto mt-3 max-w-md font-serif text-xl leading-relaxed text-deep-olive sm:mx-0">
                Neutral or beige suits, paired with white shirts and subtle green accents.
              </p>
              <div className="mt-5 flex justify-center gap-2 sm:justify-start" aria-label="Suggested suit colors">
                {["#E8E1D9", "#D5C7B8", "#FFFFFF"].map((color) => (
                  <span
                    key={color}
                    aria-hidden="true"
                    className="h-7 w-7 rounded-full border border-readable-border"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-lg font-sans text-sm leading-relaxed text-olive-secondary sm:mx-0">
            Bridesmaids, Groomsmen, and the Best Man should follow fitting instructions from Jadore Bridal.
          </p>

        </div>
      </section>

      <section className="grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-[0.7fr_1.3fr]">
        <div className="text-center sm:text-left">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-olive-secondary">
            For guests
          </p>
          <h3 className="mt-2 font-serif text-3xl text-deep-olive sm:text-4xl">
            Garden formal
          </h3>
          <p className="mx-auto mt-3 max-w-sm font-sans text-sm leading-relaxed text-olive-secondary sm:mx-0">
            Guest guidance only. Guests do not need to visit Jadore Bridal or attend a fitting.
          </p>
          <div className="mt-6 flex justify-center gap-3 sm:justify-start" aria-label="Suggested guest color palette">
            {guestPalette.map(({ color, label }) => (
              <span
                key={label}
                aria-label={label}
                className="h-8 w-8 rounded-full border border-black/10 sm:h-9 sm:w-9"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <p className="mt-3 text-center font-sans text-xs text-olive-secondary sm:text-left">
            Earth tones · Sage · Olive · Neutrals
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-10 text-center sm:grid-cols-2 sm:text-left">
          <div className="py-3 sm:py-0">
            <h4 className="flex items-center justify-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-olive-secondary sm:justify-start">
              <Shirt aria-hidden="true" className="h-4 w-4 stroke-[1.5]" /> Ladies
            </h4>
            <p className="mx-auto mt-3 max-w-md font-serif text-xl leading-relaxed text-deep-olive sm:mx-0">
              Flowy dresses, midi or maxi styles in soft, muted, earthy tones. Light, breathable fabrics are recommended.
            </p>
          </div>
          <div className="py-3 sm:border-l sm:border-readable-border sm:pl-10 sm:py-0">
            <h4 className="flex items-center justify-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-olive-secondary sm:justify-start">
              <Shirt aria-hidden="true" className="h-4 w-4 stroke-[1.5]" /> Gentlemen
            </h4>
            <p className="mx-auto mt-3 max-w-md font-serif text-xl leading-relaxed text-deep-olive sm:mx-0">
              Polos, button-downs, or light suits in neutral tones.
            </p>
          </div>
          <p className="col-span-full mx-auto mt-4 max-w-lg font-sans text-sm italic text-olive-secondary sm:mx-0">
            Please avoid overly bright or neon colors.
          </p>
        </div>
      </section>
    </div>
  );
}
