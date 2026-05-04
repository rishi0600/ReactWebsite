import { Award, ShieldCheck } from 'lucide-react';
import { quality } from '../data/content';

export default function Quality() {
  if (!quality.certifications.length) return null;

  return (
    <section className="py-24 sm:py-32 bg-navy-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-20" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-3xl" />

      <div className="container-page relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-gold-400 mb-4">
              {quality.eyebrow}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              {quality.title}
            </h2>
            <p className="text-lg text-white/75 mt-6 leading-relaxed max-w-xl">
              {quality.subtitle}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <div className="flex items-start gap-3 p-5 rounded-lg bg-white/5 border border-white/10 backdrop-blur">
                <ShieldCheck className="w-6 h-6 text-gold-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">Pre-shipment QC</div>
                  <div className="text-sm text-white/60">On every order</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-5 rounded-lg bg-white/5 border border-white/10 backdrop-blur">
                <Award className="w-6 h-6 text-gold-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">Lab-tested batches</div>
                  <div className="text-sm text-white/60">Reports shared</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {quality.certifications.map((c) => (
              <div
                key={c.name}
                className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur hover:bg-white/10 hover:border-gold-400/40 transition-all"
              >
                <div className="w-10 h-10 rounded-md bg-gold-500/20 flex items-center justify-center mb-4">
                  <Award className="w-5 h-5 text-gold-400" />
                </div>
                <div className="font-display text-lg font-bold mb-1">
                  {c.name}
                </div>
                <div className="text-sm text-white/60">{c.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}