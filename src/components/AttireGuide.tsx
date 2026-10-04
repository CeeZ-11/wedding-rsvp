export function AttireGuide() {
  return (
    <div className="space-y-12 text-center">

      {/* Title */}
      <div className="space-y-3">
        <h2 className="text-3xl md:text-4xl font-semibold text-deep-olive font-[Playfair Display] mb-3">
          Dress Code
        </h2>
        <p className="text-lg md:text-xl text-deep-olive font-medium font-sans">
          Garden Wedding Attire
        </p>
      </div>

      {/* Wedding party attire */}
      <div className="max-w-3xl mx-auto space-y-6">
        <h3 className="text-2xl md:text-3xl font-bold text-deep-olive">
          Wedding Party Attire
        </h3>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Bridesmaids */}
          <div className="p-6 sm:p-8 border border-readable-border rounded-xl space-y-4">
            <h4 className="text-xl md:text-2xl font-semibold text-deep-olive">
              Bridesmaids
            </h4>

            <p className="text-base text-deep-olive font-sans leading-relaxed">
              Soft sage green or muted tones. Elegant, flowy, garden-style dresses.
            </p>

            <div className="flex justify-center gap-3">
              <div className="w-7 h-7 rounded-full bg-[#919682]" />
              <div className="w-7 h-7 rounded-full bg-[#C7CDBF]" />
              <div className="w-7 h-7 rounded-full bg-[#A3B19B]" />
            </div>
          </div>

          {/* Groomsmen and Best Man */}
          <div className="p-6 sm:p-8 border border-readable-border rounded-xl space-y-4">
            <h4 className="text-xl md:text-2xl font-semibold text-deep-olive">
              Groomsmen &amp; Best Man
            </h4>

            <p className="text-base text-deep-olive font-sans leading-relaxed">
              Neutral or beige suits, paired with white shirts and subtle green accents.
            </p>

            <div className="flex justify-center gap-3">
              <div className="w-7 h-7 rounded-full bg-[#E8E1D9]" />
              <div className="w-7 h-7 rounded-full bg-[#D5C7B8]" />
              <div className="w-7 h-7 rounded-full bg-[#FFFFFF] border border-readable-border" />
            </div>
          </div>
        </div>

        <p className="font-sans text-sm leading-relaxed text-olive-secondary">
          Bridesmaids, Groomsmen, and the Best Man should follow fitting instructions from Jadore Bridal.
        </p>

        <p className="border-t border-readable-border pt-5 font-sans text-sm leading-relaxed text-deep-olive">
          <span className="font-semibold">Maid of Honor:</span> Please provide your own attire; no Jadore Bridal fitting is needed.
        </p>
      </div>

      {/* Guests */}
      <div className="max-w-3xl mx-auto p-6 sm:p-10 border border-readable-border rounded-xl space-y-6">

        <div className="space-y-2">
          <h3 className="text-2xl md:text-3xl font-bold text-deep-olive">
            Guest Attire
          </h3>
          <p className="text-sm uppercase tracking-widest text-deep-olive font-medium">
            Semi-formal garden attire
          </p>
          <p className="pt-2 font-sans text-sm leading-relaxed text-olive-secondary">
            These guidelines are for guests. Guests do not need to visit Jadore Bridal or attend a fitting.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 text-left font-sans">

          {/* Women */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-deep-olive border-b border-readable-border pb-2">
              Women
            </h4>
            <p className="text-deep-olive leading-relaxed">
              Flowy dresses, midi or maxi styles in soft, muted, earthy tones.
              Light, breathable fabrics are recommended.
            </p>
          </div>

          {/* Men */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-deep-olive border-b border-readable-border pb-2">
              Men
            </h4>
            <p className="text-deep-olive leading-relaxed">
              Polos, button-downs, or light suits in neutral tones.
            </p>
          </div>
        </div>

        <div className="space-y-5 text-center">
          <p className="text-sm italic text-deep-olive font-sans">
            Please avoid overly bright or neon colors.
          </p>

          <div className="flex justify-center gap-4">
            <div className="w-9 h-9 rounded-full bg-[#C7A491]" />
            <div className="w-9 h-9 rounded-full bg-[#EECFCA]" />
            <div className="w-9 h-9 rounded-full bg-[#919682]" />
            <div className="w-9 h-9 rounded-full bg-[#EAE6DF]" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div>
        <p className="text-lg italic text-deep-olive font-medium">
          Kindly dress in garden-inspired tones to complement the celebration.
        </p>
      </div>
    </div>
  );
}