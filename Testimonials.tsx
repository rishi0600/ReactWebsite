import { Quote } from 'lucide-react';
import { testimonials } from '../data/content';

export default function Testimonials() {
  if (!testimonials.items.length) return null;

  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="container-page">
        <div className="max-w-3xl mb-16">
          <span className="section-eyebrow">{testimonials.eyebrow}</span>
          <h2 className="section-title">{testimonials.title}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.items.map((t, i) => (
            <figure
              key={i}
              className="relative p-8 lg:p-10 rounded-2xl bg-navy-50/40 border border-navy-100 hover:shadow-xl hover:border-gold-300 transition-all"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-gold-200" />
              <blockquote className="text-navy-800 leading-relaxed text-base sm:text-lg mb-6 relative">
                “{t.quote}”
              </blockquote>
              <figcaption className="border-t border-navy-100 pt-5">
                <div className="font-display font-bold text-navy-900">
                  {t.name}
                </div>
                <div className="text-sm text-navy-600">
                  {t.role} · {t.company}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}