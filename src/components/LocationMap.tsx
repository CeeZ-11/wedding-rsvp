export function LocationMap() {
  const mapLink = "https://maps.app.goo.gl/ZXqCjSzFiSum3R749";

  return (
    <div className="w-full max-w-2xl mx-auto px-4 md:px-12">
      
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="font-script text-4xl md:text-5xl text-deep-olive mb-4">
          Event Location
        </h2>
      </div>

      {/* Map */}
      <div className="bg-white p-2 rounded-sm border border-muted-sage/30 shadow-sm">
        <div className="h-[250px] md:h-[300px] w-full rounded-sm overflow-hidden relative">
          
          <iframe
            src="https://www.google.com/maps?q=H67H+WJM+Salvador+Benedicto+Negros+Occidental&z=15&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>

        </div>
      </div>

      {/* Address */}
      <div className="text-center mt-6 space-y-3">
        <p className="font-serif text-xl text-deep-olive font-medium">
          Salvador Benedicto Venue
        </p>

        <p className="font-serif text-deep-olive/70 text-sm md:text-base">
          H67H+WJM, Unnamed Road, Salvador Benedicto, Negros Occidental
        </p>

        {/* Exact directions link */}
        <a
          href={mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 font-serif text-sm tracking-widest uppercase text-deep-olive border-b border-deep-olive/30 hover:border-deep-olive pb-1 transition-colors"
        >
          Get Directions
        </a>
      </div>

    </div>
  );
}