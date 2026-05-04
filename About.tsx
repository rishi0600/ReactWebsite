import { CheckCircle2 } from 'lucide-react';
import { about } from '../data/content';

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white">
      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image collage */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80"
                alt="Quality inspection at warehouse"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:block absolute -bottom-10 -right-10 w-2/3 aspect-square rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&q=80"
                alt="Cargo container shipment"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-6 -left-6 px-6 py-4 bg-gold-500 rounded-lg shadow-xl hidden sm:block">
              <div className="font-display font-bold text-3xl text-navy-900">
                100%
              </div>
              <div className="text-xs uppercase tracking-wider text-navy-800 font-semibold">
                Quality Assured
              </div>
            </div>
          </div>

          {/* Copy */}
          <div>
            <span className="section-eyebrow">{about.eyebrow}</span>
            <h2 className="section-title">{about.title}</h2>
            <div className="mt-8 space-y-5">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="text-navy-600 leading-relaxed text-base sm:text-lg">
                  {p}
                </p>
              ))}
            </div>

            <ul className="mt-10 grid sm:grid-cols-2 gap-3">
              {about.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-600 mt-0.5 flex-shrink-0" />
                  <span className="text-navy-700 font-medium">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}