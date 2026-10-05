import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { prenupPhotos } from '../data/prenupPhotos';
import { BotanicalMark } from './BotanicalMark';

export function PrenupGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerButtonRef = useRef<HTMLButtonElement | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const reduceMotion = useReducedMotion();
  const isOpen = activeIndex !== null;
  const activePhoto = activeIndex === null ? null : prenupPhotos[activeIndex];
  const indexedPhotos = prenupPhotos.map((photo, index) => ({ photo, index }));
  const featuredPhoto = indexedPhotos.find(({ photo }) => photo.feature);
  const remainingPhotos = indexedPhotos.filter(({ photo }) => !photo.feature);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      triggerButtonRef.current?.focus();
    };
  }, [isOpen]);

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === null
        ? null
        : (current + prenupPhotos.length - 1) % prenupPhotos.length,
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % prenupPhotos.length,
    );
  };

  const handleDialogKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      setActiveIndex(null);
      return;
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      showPrevious();
      return;
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      showNext();
      return;
    }

    if (event.key === 'Tab') {
      const focusableElements = dialogRef.current?.querySelectorAll<HTMLElement>(
        'button:not([disabled])',
      );
      if (!focusableElements?.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const startX = touchStartX.current;
    const endX = event.changedTouches[0]?.clientX;
    touchStartX.current = null;

    if (startX === null || endX === undefined) return;
    const distance = endX - startX;
    if (Math.abs(distance) < 48) return;
    if (distance > 0) showPrevious();
    else showNext();
  };

  const renderPhoto = (
    photo: (typeof prenupPhotos)[number],
    index: number,
    className: string,
  ) => (
    <motion.figure
      key={photo.src}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: reduceMotion ? 0 : 0.55,
        delay: reduceMotion ? 0 : (index % 3) * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`break-inside-avoid ${className}`}
    >
      <button
        ref={(element) => {
          if (activeIndex === index && element) {
            triggerButtonRef.current = element;
          }
        }}
        type="button"
        onClick={(event) => {
          triggerButtonRef.current = event.currentTarget;
          setActiveIndex(index);
        }}
        aria-label={`View photo ${index + 1}: ${photo.alt}`}
        className={`group relative block w-full overflow-hidden bg-light-sage/20 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-olive focus-visible:ring-offset-4 ${
          photo.feature
            ? ''
            : photo.galleryShape === 'portrait'
            ? 'aspect-[4/5]'
            : photo.galleryShape === 'square'
            ? 'aspect-square'
            : 'aspect-[4/3]'
        }`}
      >
        <img
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          loading="lazy"
          decoding="async"
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 42vw"
          className={`block w-full transition-transform duration-700 ease-out group-hover:scale-[1.025] group-focus-visible:scale-[1.025] ${
            photo.feature ? 'h-auto' : 'h-full object-cover'
          }`}
        />
        <span className="absolute inset-0 bg-deep-olive/0 transition-colors duration-300 group-hover:bg-deep-olive/10 group-focus-visible:bg-deep-olive/10" />
        <span className="absolute bottom-3 right-3 inline-flex h-9 w-9 items-center justify-center border border-white/70 bg-deep-olive/50 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
          <Expand aria-hidden="true" size={16} strokeWidth={1.5} />
        </span>
      </button>
      <figcaption className={`pt-2 text-center font-serif text-sm text-olive-secondary md:text-left ${photo.feature ? 'sm:text-base' : ''}`}>
        {photo.caption}
      </figcaption>
    </motion.figure>
  );

  return (
    <>
      <section
        id="our-prenup"
        aria-labelledby="prenup-heading"
        className="mt-20 bg-light-sage/20 py-16 sm:mt-28 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <motion.header
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 text-center sm:mb-14 md:text-center"
        >
          <p className="mb-3 font-sans text-xs uppercase tracking-[0.24em] text-olive-secondary sm:tracking-[0.3em]">
            Before the day
          </p>
          <h2
            id="prenup-heading"
            className="font-script text-5xl leading-tight text-deep-olive sm:text-6xl"
          >
            Our Prenup
          </h2>
          <BotanicalMark className="mx-auto mt-3 h-7 w-12 text-olive-secondary" />
          <p className="mx-auto mt-3 max-w-md font-serif text-base text-olive-secondary sm:text-lg">
            A little glimpse of our story before the big day.
          </p>
        </motion.header>

        {featuredPhoto && (
          <div className="grid grid-cols-1 items-start gap-x-8 gap-y-8 md:grid-cols-12 lg:gap-x-12">
            {renderPhoto(
              featuredPhoto.photo,
              featuredPhoto.index,
              'md:col-span-7',
            )}
            {remainingPhotos[0] && renderPhoto(
              remainingPhotos[0].photo,
              remainingPhotos[0].index,
              'md:col-span-5 md:mt-16',
            )}
          </div>
        )}

        <div className="mt-10 grid grid-cols-2 items-start gap-x-4 gap-y-8 sm:gap-x-6 lg:mt-16 lg:grid-cols-3 lg:gap-x-8">
          {remainingPhotos.slice(1).map(({ photo, index }, itemIndex) =>
            renderPhoto(
              photo,
              index,
              itemIndex === 2
                ? 'col-span-2 lg:col-span-1'
                : itemIndex === 3
                  ? 'lg:mt-16'
                  : itemIndex === 4
                    ? 'lg:mt-8'
                    : '',
            ),
          )}
        </div>
        </div>
      </section>

      <AnimatePresence>
        {activePhoto && activeIndex !== null && (
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label="Prenup photo viewer"
            tabIndex={-1}
            onKeyDown={handleDialogKeyDown}
            onClick={(event) => {
              if (event.target === event.currentTarget) setActiveIndex(null);
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.22 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#171915]/95 px-4 py-16 text-white sm:px-8"
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setActiveIndex(null)}
              aria-label="Close photo viewer"
              className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center border border-white/35 text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-7 sm:top-7"
            >
              <X aria-hidden="true" size={22} strokeWidth={1.5} />
            </button>

            <p
              aria-live="polite"
              className="absolute left-1/2 top-5 -translate-x-1/2 font-sans text-xs tracking-[0.2em] text-white/75 sm:top-8"
            >
              {String(activeIndex + 1).padStart(2, '0')} /{' '}
              {String(prenupPhotos.length).padStart(2, '0')}
            </p>

            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous photo"
              className="absolute left-2 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/35 text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:left-6 sm:h-12 sm:w-12"
            >
              <ChevronLeft aria-hidden="true" size={24} strokeWidth={1.5} />
            </button>

            <div
              className="flex max-h-full w-full max-w-5xl flex-col items-center justify-center"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activePhoto.src}
                  src={activePhoto.src}
                  alt={activePhoto.alt}
                  width={activePhoto.width}
                  height={activePhoto.height}
                  draggable={false}
                  initial={reduceMotion ? false : { opacity: 0, scale: 0.985 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduceMotion ? undefined : { opacity: 0, scale: 0.985 }}
                  transition={{ duration: reduceMotion ? 0 : 0.2 }}
                  className="max-h-[70vh] w-auto max-w-full select-none object-contain sm:max-h-[76vh]"
                />
              </AnimatePresence>
              <p className="mt-4 text-center font-serif text-base text-white/85 sm:text-lg">
                {activePhoto.caption}
              </p>
            </div>

            <button
              type="button"
              onClick={showNext}
              aria-label="Next photo"
              className="absolute right-2 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/35 text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-6 sm:h-12 sm:w-12"
            >
              <ChevronRight aria-hidden="true" size={24} strokeWidth={1.5} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
