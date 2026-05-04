import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { company, navLinks } from '../data/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-page flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <img
            src="/images/logo.png"
            alt={`${company.name} logo`}
            className={`w-auto transition-all duration-300 ${
              scrolled ? 'h-10' : 'h-12'
            }`}
            onError={(e) => {
              // Graceful fallback if logo file is not yet saved to /public/images/
              (e.currentTarget as HTMLImageElement).style.display = 'none';
            }}
          />
          <div className="leading-tight hidden sm:block">
            <div
              className={`font-display font-bold text-lg ${
                scrolled ? 'text-navy-900' : 'text-white'
              }`}
            >
              {company.name}
            </div>
            <div
              className={`text-[10px] tracking-widest uppercase ${
                scrolled ? 'text-navy-500' : 'text-white/70'
              }`}
            >
              {company.tagline}
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? 'text-navy-700 hover:text-gold-600'
                  : 'text-white/90 hover:text-gold-400'
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-md bg-gold-500 text-navy-900 text-sm font-semibold hover:bg-gold-600 transition-colors"
          >
            Get a Quote
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          className={`lg:hidden p-2 rounded-md ${
            scrolled ? 'text-navy-900' : 'text-white'
          }`}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="container-page py-4 bg-white shadow-lg">
          <div className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-md text-navy-800 hover:bg-navy-50 font-medium"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 px-5 py-3 rounded-md bg-gold-500 text-navy-900 text-center font-semibold"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}