export function AttireGuide() {
  return (
    <div className="space-y-16 text-center">

      {/* Title */}
      <div className="space-y-3">
        <h2 className="text-3xl md:text-4xl font-bold tracking-widest text-deep-olive">
          Dress Code
        </h2>
        <p className="text-lg md:text-xl text-deep-olive font-medium font-sans">
          Garden Wedding Attire
        </p>
      </div>

      {/* Bridal Party */}
      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">

        {/* Bridesmaids */}
        <div className="p-8 border border-light-sage/30 rounded-xl space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-deep-olive">
            Bridesmaids
          </h3>

          <p className="text-base text-deep-olive font-sans leading-relaxed">
            Soft sage green or muted tones. Elegant, flowy, garden-style dresses.
          </p>

          <div className="flex justify-center gap-3">
            <div className="w-7 h-7 rounded-full bg-[#919682]" />
            <div className="w-7 h-7 rounded-full bg-[#C7CDBF]" />
            <div className="w-7 h-7 rounded-full bg-[#A3B19B]" />
          </div>
        </div>

        {/* Groomsmen */}
        <div className="p-8 border border-light-sage/30 rounded-xl space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-deep-olive">
            Groomsmen
          </h3>

          <p className="text-base text-deep-olive font-sans leading-relaxed">
            Neutral or beige suits, paired with white shirts and subtle green accents.
          </p>

          <div className="flex justify-center gap-3">
            <div className="w-7 h-7 rounded-full bg-[#E8E1D9]" />
            <div className="w-7 h-7 rounded-full bg-[#D5C7B8]" />
            <div className="w-7 h-7 rounded-full bg-[#FFFFFF] border border-light-sage/40" />
          </div>
        </div>
      </div>

      {/* Guests */}
      <div className="max-w-3xl mx-auto p-10 border border-light-sage/30 rounded-xl space-y-8">

        <div className="space-y-2">
          <h3 className="text-2xl md:text-3xl font-bold text-deep-olive">
            Guest Attire
          </h3>
          <p className="text-sm uppercase tracking-widest text-deep-olive font-medium">
            Semi-formal garden attire
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 text-left font-sans">

          {/* Women */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-deep-olive border-b border-light-sage/30 pb-2">
              Women
            </h4>
            <p className="text-deep-olive leading-relaxed">
              Flowy dresses, midi or maxi styles in soft, muted, earthy tones.
              Light, breathable fabrics are recommended.
            </p>
          </div>

          {/* Men */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-deep-olive border-b border-light-sage/30 pb-2">
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