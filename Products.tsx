import * as Icons from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { products } from '../data/content';

export default function Products() {
  return (
    <section id="products" className="py-24 sm:py-32 bg-navy-50/50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="container-page relative">
        <div className="max-w-3xl mb-16">
          <span className="section-eyebrow">{products.eyebrow}</span>
          <h2 className="section-title">{products.title}</h2>
          <p className="section-subtitle">{products.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.items.map((p) => {
            const Icon = (Icons as Record<string, any>)[p.icon] ?? Icons.Package;
            return (
              <article
                key={p.name}
                className="group card flex flex-col"
              >
                <div className="relative aspect-[5/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-lg bg-white/95 backdrop-blur flex items-center justify-center shadow-lg">
                    <Icon className="w-6 h-6 text-gold-600" />
                  </div>
                </div>

                <div className="p-7 flex-1 flex flex-col">
                  <h3 className="font-display text-2xl font-bold text-navy-900 mb-3">
                    {p.name}
                  </h3>
                  <p className="text-navy-600 leading-relaxed mb-5 flex-1">
                    {p.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-navy-50 text-navy-700 border border-navy-100"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-gold-700 font-semibold text-sm hover:gap-3 transition-all"
                  >
                    Inquire about this category
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-navy-600 mb-5">
            Looking for something not listed here?
          </p>
          <a href="#contact" className="btn-outline">
            Request a Custom Sourcing
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}