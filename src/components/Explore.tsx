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
    <section className="mx-auto max-w-5xl">
      <header className="mb-8 border-b border-readable-border pb-5 text-center sm:mb-10 sm:pb-7 sm:text-left">
        <p className="mb-2 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-olive-secondary">
          Nearby places
        </p>
        <h2 className="font-serif text-4xl font-medium text-deep-olive sm:text-5xl">
          Explore Bacolod
        </h2>
      </header>

      <ul className="divide-y divide-readable-border border-y border-readable-border">
        {places.map((place, index) => (
          <li key={place.name}>
            <a
              href={place.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid grid-cols-[minmax(0,1fr)_6rem] items-center gap-x-4 py-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep-olive sm:grid-cols-[2.5rem_minmax(0,1fr)_15rem] sm:gap-x-7 sm:py-7"
            >
              <span
                aria-hidden="true"
                className="hidden font-serif text-2xl tabular-nums text-olive-secondary/70 sm:block"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-serif text-2xl font-medium text-deep-olive transition-colors group-hover:text-olive-secondary sm:text-3xl">
                  {place.name}
                </h3>
                <p className="mt-1 font-sans text-sm leading-relaxed text-olive-secondary sm:mt-2 sm:text-base">
                  {place.desc}
                </p>
                <span className="mt-2 inline-block font-sans text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-deep-olive sm:mt-3">
                  View on map <span aria-hidden="true">↗</span>
                </span>
              </div>
              <img
                src={place.image}
                alt=""
                width={place.width}
                height={place.height}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
