const guestPalette = [
  { color: "#C7A491", label: "Warm taupe" },
  { color: "#EECFCA", label: "Dusty rose" },
  { color: "#919682", label: "Sage" },
  { color: "#EAE6DF", label: "Soft neutral" },
];

export function AttireGuide() {
  return (
    <div className="mx-auto max-w-6xl space-y-14 sm:space-y-20">
      <header className="max-w-2xl">
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

      <section className="grid grid-cols-1 gap-x-12 gap-y-10 border-y border-readable-border py-10 sm:grid-cols-[0.7fr_1.3fr] sm:py-14">
        <div>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-olive-secondary">
            Wedding party
          </p>
          <h3 className="mt-2 font-serif text-3xl text-deep-olive sm:text-4xl">
            Attendant attire
          </h3>
        </div>

        <div>
          <div className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
            <div className="pb-7 sm:pb-0">
              <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-olive-secondary">
                Bridesmaids
              </h4>
              <p className="mt-3 font-serif text-xl leading-relaxed text-deep-olive">
                Soft sage green or muted tones; elegant, flowy garden-style dresses.
              </p>
              <div className="mt-5 flex gap-2" aria-label="Suggested bridesmaid colors">
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

            <div className="border-t border-readable-border pt-7 sm:border-l sm:border-t-0 sm:pl-10 sm:pt-0">
              <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-olive-secondary">
                Groomsmen &amp; Best Man
              </h4>
              <p className="mt-3 font-serif text-xl leading-relaxed text-deep-olive">
                Neutral or beige suits, paired with white shirts and subtle green accents.
              </p>
              <div className="mt-5 flex gap-2" aria-label="Suggested suit colors">
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

          <p className="mt-8 border-t border-readable-border pt-5 font-sans text-sm leading-relaxed text-olive-secondary">
            Bridesmaids, Groomsmen, and the Best Man should follow fitting instructions from Jadore Bridal.
          </p>
          <p className="mt-4 font-sans text-sm leading-relaxed text-deep-olive">
            <span className="font-semibold">Maid of Honor:</span> Please provide your own attire; no Jadore Bridal fitting is needed.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-olive-secondary">
            For guests
          </p>
          <h3 className="mt-2 font-serif text-3xl text-deep-olive sm:text-4xl">
            Garden formal
          </h3>
          <p className="mt-3 font-sans text-sm leading-relaxed text-olive-secondary">
            Guest guidance only. Guests do not need to visit Jadore Bridal or attend a fitting.
          </p>
          <div className="mt-6 flex gap-3" aria-label="Suggested guest color palette">
            {guestPalette.map(({ color, label }) => (
              <span
                key={label}
                aria-label={label}
                className="h-8 w-8 rounded-full border border-black/10 sm:h-9 sm:w-9"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <p className="mt-3 font-sans text-xs text-olive-secondary">
            Earth tones · Sage · Olive · Neutrals
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
          <div className="border-t border-readable-border py-5 sm:border-t-0 sm:py-0">
            <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-olive-secondary">
              Ladies
            </h4>
            <p className="mt-3 font-serif text-xl leading-relaxed text-deep-olive">
              Flowy dresses, midi or maxi styles in soft, muted, earthy tones. Light, breathable fabrics are recommended.
            </p>
          </div>
          <div className="border-t border-readable-border py-5 sm:border-l sm:border-t-0 sm:pl-10 sm:py-0">
            <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-olive-secondary">
              Gentlemen
            </h4>
            <p className="mt-3 font-serif text-xl leading-relaxed text-deep-olive">
              Polos, button-downs, or light suits in neutral tones.
            </p>
          </div>
          <p className="col-span-full mt-4 font-sans text-sm italic text-olive-secondary">
            Please avoid overly bright or neon colors.
          </p>
        </div>
      </section>
    </div>
  );
}