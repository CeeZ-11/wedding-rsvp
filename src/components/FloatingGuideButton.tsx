import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { MusicPlayer } from './MusicPlayer';

const galleryUrl = 'https://wed-snap-nine.vercel.app/';

export function FloatingGuideButton() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuTriggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let previousY = window.scrollY;
    const update = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 24);
      setHidden(currentY > 120 && currentY > previousY + 2 && !menuOpen);
      if (currentY < 24 || currentY < previousY - 2) setHidden(false);
      previousY = currentY;
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    const menuTrigger = menuTriggerRef.current;
    document.body.style.overflow = 'hidden';
    menuRef.current?.querySelector<HTMLElement>('button, a[href]')?.focus();
    const handleMenuKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        return;
      }
      if (event.key !== 'Tab') return;
      const focusable = menuRef.current?.querySelectorAll<HTMLElement>('button:not([disabled]), a[href]');
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener('keydown', handleMenuKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleMenuKeyDown);
      menuTrigger?.focus();
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-deep-olive focus:px-5 focus:py-3 focus:text-sm focus:text-white">
        Skip to content
      </a>
      <header className={`fixed inset-x-0 top-0 z-50 border-b transition-[transform,background-color,border-color] duration-300 motion-reduce:transition-none ${scrolled ? 'border-readable-border bg-cream-bg/95 backdrop-blur-sm' : 'border-transparent bg-transparent'} ${hidden && !menuOpen ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:h-[4.5rem] lg:px-12">
          <Link to="/" aria-label="Seamor and Lady Stephanie, home" className={`font-serif text-xl leading-none tracking-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep-olive ${scrolled ? 'text-deep-olive' : 'text-deep-olive sm:text-white'}`}>
            S<span className="mx-0.5 italic text-warm-beige-strong">&amp;</span>LS
          </Link>
          <nav aria-label="Wedding links" className="hidden items-center gap-8 lg:flex">
            <Link to="/" className="text-[0.68rem] font-medium uppercase tracking-[0.17em] text-deep-olive transition-colors hover:text-warm-beige-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep-olive">Wedding</Link>
            <Link to="/guide" className="text-[0.68rem] font-medium uppercase tracking-[0.17em] text-deep-olive transition-colors hover:text-warm-beige-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep-olive">Wedding Guide</Link>
            <a href={galleryUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[0.68rem] font-medium uppercase tracking-[0.17em] text-deep-olive transition-colors hover:text-warm-beige-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep-olive">Wedding Gallery <ArrowUpRight aria-hidden="true" className="h-3 w-3" /></a>
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            <MusicPlayer inline />
            <Link to="/#rsvp" className="hidden min-h-10 items-center border border-deep-olive bg-deep-olive px-5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#4a4e3c] sm:inline-flex">RSVP</Link>
            <button ref={menuTriggerRef} type="button" onClick={() => setMenuOpen(true)} aria-expanded={menuOpen} aria-controls="wedding-mobile-menu" className="inline-flex min-h-10 items-center gap-2 px-1 text-deep-olive focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep-olive lg:hidden">
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.14em]">Menu</span><Menu aria-hidden="true" className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div ref={menuRef} id="wedding-mobile-menu" role="dialog" aria-modal="true" aria-label="Wedding navigation" className="fixed inset-0 z-[60] flex flex-col bg-[#F7F4EE] px-7 pb-10 pt-6 text-deep-olive sm:px-12">
          <div className="flex items-center justify-between border-b border-readable-border pb-5">
            <span className="font-serif text-xl">Seamor <span className="italic text-warm-beige-strong">&amp;</span> Lady Stephanie</span>
            <button type="button" onClick={closeMenu} aria-label="Close navigation" className="inline-flex h-11 w-11 items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-olive"><X aria-hidden="true" /></button>
          </div>
          <nav aria-label="Mobile wedding links" className="my-auto">
            <ul className="divide-y divide-readable-border border-y border-readable-border">
              <li><Link onClick={closeMenu} to="/" className="block py-5 font-serif text-3xl">Wedding</Link></li>
              <li><Link onClick={closeMenu} to="/guide" className="block py-5 font-serif text-3xl">Wedding Guide</Link></li>
              <li><a onClick={closeMenu} href={galleryUrl} target="_blank" rel="noopener noreferrer" className="block py-5 font-serif text-3xl">Wedding Gallery <ArrowUpRight aria-hidden="true" className="inline h-5 w-5" /></a></li>
              <li><Link onClick={closeMenu} to="/#rsvp" className="block py-5 font-serif text-3xl">RSVP</Link></li>
            </ul>
          </nav>
          <p className="font-sans text-[0.65rem] uppercase tracking-[0.2em] text-olive-secondary">December 27, 2026 · Balai Ramirez DSB</p>
        </div>
      )}
    </>
  );
}
