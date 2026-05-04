import { ArrowRight, ChevronDown } from 'lucide-react';
import { hero, stats } from '../data/content';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden bg-navy-900 text-white"
    >
      {/* Background image with slow zoom */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=2000&q=80"
          alt="Global shipping containers at port"
          className="w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/85 to-navy-900/50" />
        <div className="absolute inset-0 bg-grid-pattern bg-[size:64px_64px] opacity-30" />
      </div>

      <div className="container-page relative z-10 pt-32 pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
            <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-white/90">
              {hero.eyebrow}
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] mb-7 animate-fade-up">
            {hero.title.split(' ').slice(0, -2).join(' ')}{' '}
            <span className="text-gold-400 italic">
              {hero.title.split(' ').slice(-2).join(' ')}
            </span>
          </h1>

          <p
            className="text-lg sm:text-xl text-white/85 leading-relaxed mb-10 max-w-2xl animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            {hero.subtitle}
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            <a href="#contact" className="btn-primary">
              {hero.primaryCta}
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#products" className="btn-secondary">
              {hero.secondaryCta}
            </a>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-xl overflow-hidden border border-white/10 backdrop-blur-sm">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-navy-900/60 px-6 py-7 text-center hover:bg-navy-800/60 transition-colors"
            >
              <div className="font-display text-3xl sm:text-4xl font-bold text-gold-400">
                {s.value}
              </div>
              <div className="text-xs sm:text-sm uppercase tracking-wider text-white/70 mt-2">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </a>
    </section>
  );
}