import React from 'react';
export function AttireGuide() {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 md:px-12">
      <div className="text-center mb-12">
        <h2 className="font-script text-4xl md:text-5xl text-deep-olive mb-4">
          Attire Guide
        </h2>
        <p className="font-serif text-deep-olive/80 text-lg md:text-xl font-medium">
          Garden Wedding Attire
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Bridesmaids */}
        <div className="bg-white p-6 rounded-sm border border-muted-sage/30 text-center flex flex-col items-center justify-center h-full">
          <h3 className="font-serif text-xl text-deep-olive font-medium mb-3">
            Bridesmaids
          </h3>
          <p className="font-serif text-deep-olive/70 text-sm md:text-base mb-4">
            Soft sage green or muted green dresses. Elegant, flowy,
            garden-style.
          </p>
          <div className="flex gap-2">
            <div className="w-6 h-6 rounded-full bg-[#919682] shadow-sm border border-black/5"></div>
            <div className="w-6 h-6 rounded-full bg-[#C7CDBF] shadow-sm border border-black/5"></div>
            <div className="w-6 h-6 rounded-full bg-[#A3B19B] shadow-sm border border-black/5"></div>
          </div>
        </div>

        {/* Groomsmen */}
        <div className="bg-white p-6 rounded-sm border border-muted-sage/30 text-center flex flex-col items-center justify-center h-full">
          <h3 className="font-serif text-xl text-deep-olive font-medium mb-3">
            Groomsmen
          </h3>
          <p className="font-serif text-deep-olive/70 text-sm md:text-base mb-4">
            Neutral or beige suits, white shirt with green accents (tie or
            boutonniere).
          </p>
          <div className="flex gap-2">
            <div className="w-6 h-6 rounded-full bg-[#E8E1D9] shadow-sm border border-black/5"></div>
            <div className="w-6 h-6 rounded-full bg-[#D5C7B8] shadow-sm border border-black/5"></div>
            <div className="w-6 h-6 rounded-full bg-[#FFFFFF] shadow-sm border border-black/5"></div>
          </div>
        </div>
      </div>

      {/* Guest Attire */}
      <div className="bg-white p-8 rounded-sm border border-muted-sage/30 text-center">
        <h3 className="font-serif text-2xl text-deep-olive font-medium mb-2">
          Guest Attire
        </h3>
        <p className="font-serif text-deep-olive/60 tracking-widest uppercase text-xs font-medium mb-6">
          Semi-formal garden attire
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 text-left">
          <div className="space-y-2">
            <h4 className="font-serif text-lg text-deep-olive font-medium border-b border-light-sage/30 pb-2">
              Women
            </h4>
            <p className="font-serif text-deep-olive/80 text-sm md:text-base leading-relaxed">
              Flowy dresses, midi or maxi styles in soft, muted, earthy tones.
              Light, breathable fabrics.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-serif text-lg text-deep-olive font-medium border-b border-light-sage/30 pb-2">
              Men
            </h4>
            <p className="font-serif text-deep-olive/80 text-sm md:text-base leading-relaxed">
              Polos, button-downs, or light suits in neutral tones.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <p className="font-serif text-deep-olive/70 text-sm italic">
            Please avoid overly bright or neon colors.
          </p>
          <div className="flex justify-center gap-3">
            <div
              className="w-8 h-8 rounded-full bg-[#C7A491] shadow-sm border border-black/5"
              title="Warm Beige">
            </div>
            <div
              className="w-8 h-8 rounded-full bg-[#EECFCA] shadow-sm border border-black/5"
              title="Blush Pink">
            </div>
            <div
              className="w-8 h-8 rounded-full bg-[#919682] shadow-sm border border-black/5"
              title="Muted Sage">
            </div>
            <div
              className="w-8 h-8 rounded-full bg-[#EAE6DF] shadow-sm border border-black/5"
              title="Neutral">
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-10">
        <p className="font-serif text-deep-olive text-lg italic">
          "Kindly dress in garden-inspired tones to complement the celebration."
        </p>
      </div>
    </div>);

}