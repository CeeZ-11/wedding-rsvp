const attireCards = [
  {
    number: '01',
    title: 'Bridesmaids',
    image: '/images/attire/01-bridesmaids-attire.jpg',
    alt: 'Bridesmaids attire guide with elegant dresses in suggested pastel colors',
    width: 1536,
    height: 1024,
    description: 'An elegant mix of pastel shades, including soft sage. Please follow fitting instructions from Jadore Bridal.',
  },
  {
    number: '02',
    title: "Groom’s Party",
    image: '/images/attire/02-grooms-party-attire.jpg',
    alt: 'Groom’s party attire guide showing black and white outfits for groomsmen, the groom, and the best man',
    width: 1536,
    height: 1024,
    description: 'Classic black and white, with role-specific looks shown above. Please follow fitting instructions from Jadore Bridal.',
  },
  {
    number: '03',
    title: 'Parents',
    image: '/images/attire/03-parents-attire.jpg',
    alt: 'Parents attire guide showing a cream Barong Tagalog for fathers and muted gowns for mothers',
    width: 1536,
    height: 1024,
    description: 'Fathers in cream or ivory Barong Tagalog; mothers in elegant gowns in soft, muted tones.',
  },
  {
    number: '04',
    title: 'Children',
    image: '/images/attire/04-childrens-attire.jpg',
    alt: 'Children’s attire guide for the flower girl, ring bearer, Bible bearer, and coin bearer',
    width: 1536,
    height: 1024,
    description: 'The flower girl wears white or ivory with pastel accents. The boys wear white shirts, black trousers, suspenders, and bow ties.',
  },
  {
    number: '05',
    title: 'Wedding Sponsors',
    image: '/images/attire/05-wedding-sponsors-attire.jpg',
    alt: 'Wedding sponsors attire guide showing formal garden outfits for principal, candle, veil, and cord sponsors',
    width: 1536,
    height: 1024,
    description: 'Ninongs wear a cream or ivory Barong Tagalog with dark trousers. Ninangs wear elegant floor-length or midi gowns in soft, muted tones.',
  },
  {
    number: '06',
    title: 'Guests',
    image: '/images/attire/06-guests-attire.jpg',
    alt: 'Guests attire guide for a garden semi-formal wedding, with outfit ideas for ladies and gentlemen',
    width: 1536,
    height: 1024,
    description: 'Garden Semi-Formal. Choose soft, garden-inspired colors and light fabrics. Barong Tagalog is welcome; no fitting is needed.',
  },
];

export function AttireGuide() {
  return (
    <div className="mx-auto max-w-7xl space-y-10 sm:space-y-14">
      <header className="mx-auto max-w-2xl text-center">
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

      <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 md:gap-x-14 md:gap-y-16">
        {attireCards.map((card) => (
          <article key={card.title} className="min-w-0 text-left">
            <div className="aspect-[3/2] bg-[#F7F4EE]">
              <img
                src={card.image}
                alt={card.alt}
                width={card.width}
                height={card.height}
                loading="lazy"
                decoding="async"
                className="block h-full w-full object-contain"
              />
            </div>
            <div className="mt-5 border-t border-readable-border pt-4 sm:mt-6 sm:pt-5">
              <div className="flex items-baseline gap-4 sm:gap-5">
                <span aria-hidden="true" className="font-serif text-lg italic text-warm-beige-strong">{card.number}</span>
                <h3 className="font-serif text-2xl font-medium text-deep-olive sm:text-3xl">{card.title}</h3>
              </div>
              <p className="mt-2 pl-9 font-sans text-sm leading-relaxed text-olive-secondary sm:pl-11 sm:text-base">
                {card.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
