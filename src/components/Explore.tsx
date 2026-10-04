export function Explore() {
  const places = [
    {
      name: "The Ruins",
      desc: "A historic mansion with beautiful gardens and a romantic sunset view.",
      image: "/images/explore/the-ruins.jpg",
      width: 1200,
      height: 900,
      link: "https://maps.google.com/?q=The+Ruins+Bacolod",
    },
    {
      name: "Manokan Country",
      desc: "Famous spot for authentic Bacolod chicken inasal.",
      image: "/images/explore/manokan.jpg",
      width: 1200,
      height: 900,
      link: "https://maps.google.com/?q=Manokan+Country+Bacolod",
    },
    {
      name: "Campuestohan Highland Resort",
      desc: "Cool mountain air, scenic views, and fun activities.",
      image: "/images/explore/campuestohan.jpg",
      width: 1200,
      height: 675,
      link: "https://maps.google.com/?q=Campuestohan+Highland+Resort",
    },
    {
      name: "Calea & Local Cafés",
      desc: "Best desserts and cozy café spots around Bacolod.",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&h=600&q=75",
      width: 900,
      height: 600,
      link: "https://maps.google.com/?q=Calea+Bacolod",
    },
  ];

  return (
    <div className="space-y-12 text-center">

      {/* Header */}
      <div className="flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-deep-olive font-[Playfair Display] mb-3">
          Explore Bacolod
        </h2>
        <div className="w-16 h-px bg-readable-border"></div>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">

        {places.map((place, i) => (
          <a
            key={i}
            href={place.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl overflow-hidden border border-readable-border
                       bg-light-sage/10 hover:-translate-y-1 hover:shadow-md 
                       transition-all duration-300 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep-olive"
          >
            {/* Image */}
            <div className="h-40 w-full overflow-hidden">
              <img
                src={place.image}
                alt={place.name}
                  width={place.width}
                  height={place.height}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="p-5 space-y-2">
              <h3 className="text-lg font-semibold text-deep-olive font-[Playfair Display]">
                {place.name}
              </h3>

              <p className="text-sm text-deep-olive font-sans leading-relaxed">
                {place.desc}
              </p>
            </div>
          </a>
        ))}

      </div>

    </div>
  );
}