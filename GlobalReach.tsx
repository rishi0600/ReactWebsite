import { MapPin } from 'lucide-react';
import { globalReach } from '../data/content';

export default function GlobalReach() {
  return (
    <section
      id="global-reach"
      className="py-24 sm:py-32 bg-navy-50/50 relative overflow-hidden"
    >
      <div className="container-page relative">
        <div className="max-w-3xl mb-16">
          <span className="section-eyebrow">{globalReach.eyebrow}</span>
          <h2 className="section-title">{globalReach.title}</h2>
          <p className="section-subtitle">{globalReach.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Stylized world illustration */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-navy-900 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1400&q=80"
              alt="World map / earth from space"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-navy-900/80 via-navy-900/40 to-navy-900/80" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="font-display font-bold text-5xl sm:text-6xl text-gold-400">
                  {globalReach.regions.reduce(
                    (a, r) => a + r.countries.length,
                    0
                  )}
                  +
                </div>
                <div className="text-sm uppercase tracking-[0.25em] mt-3 text-white/80">
                  Markets we are building toward
                </div>
              </div>
            </div>
          </div>

          {/* Region accordion-style list */}
          <div className="space-y-5">
            {globalReach.regions.map((r) => (
              <div
                key={r.name}
                className="p-6 rounded-xl bg-white border border-navy-100 hover:border-gold-400 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gold-50 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-gold-600" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-navy-900">
                    {r.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 ml-13">
                  {r.countries.map((c) => (
                    <span
                      key={c}
                      className="text-sm px-3 py-1 rounded-full bg-navy-50 text-navy-700 font-medium"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}