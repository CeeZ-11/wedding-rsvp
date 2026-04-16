export function Seating() {
  return (
    <div className="space-y-12 text-center">

      {/* Header */}
      <div className="flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-deep-olive font-[Playfair Display] mb-3">
          Seating
        </h2>
        <div className="w-16 h-[1px] bg-light-sage"></div>
      </div>

      {/* Card */}
      <div className="py-12 px-6 border border-dashed border-light-sage/40 rounded-2xl bg-light-sage/10 max-w-xl mx-auto">

        <p className="text-lg italic text-deep-olive font-medium font-sans leading-relaxed">
          Seating arrangements will be shared closer to the date.
          <br className="hidden md:block" />
          Please check back for updates.
        </p>

      </div>

    </div>
  );
}