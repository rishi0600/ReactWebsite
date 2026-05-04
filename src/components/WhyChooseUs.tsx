import * as Icons from 'lucide-react';
import { whyChooseUs } from '../data/content';

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 sm:py-32 bg-white">
      <div className="container-page">
        <div className="max-w-3xl mb-16">
          <span className="section-eyebrow">{whyChooseUs.eyebrow}</span>
          <h2 className="section-title">{whyChooseUs.title}</h2>
          <p className="section-subtitle">{whyChooseUs.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-navy-100 rounded-2xl overflow-hidden border border-navy-100">
          {whyChooseUs.reasons.map((r) => {
            const Icon = (Icons as Record<string, any>)[r.icon] ?? Icons.Star;
            return (
              <div
                key={r.title}
                className="group bg-white p-8 lg:p-10 hover:bg-navy-50/40 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-gold-50 flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-colors">
                  <Icon className="w-7 h-7 text-gold-600 group-hover:text-navy-900 transition-colors" />
                </div>
                <h3 className="font-display text-xl font-bold text-navy-900 mb-3">
                  {r.title}
                </h3>
                <p className="text-navy-600 leading-relaxed">{r.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}