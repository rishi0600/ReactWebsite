import { process } from '../data/content';

export default function Process() {
  return (
    <section id="process" className="py-24 sm:py-32 bg-white">
      <div className="container-page">
        <div className="max-w-3xl mb-16">
          <span className="section-eyebrow">{process.eyebrow}</span>
          <h2 className="section-title">{process.title}</h2>
          <p className="section-subtitle">{process.subtitle}</p>
        </div>

        <div className="relative">
          {/* Connecting line on lg+ */}
          <div className="hidden lg:block absolute top-12 left-12 right-12 h-px bg-gradient-to-r from-transparent via-navy-200 to-transparent" />

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-6">
            {process.steps.map((s) => (
              <div key={s.number} className="relative">
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full bg-gold-100 group-hover:bg-gold-200 transition-colors" />
                  <div className="absolute inset-2 rounded-full bg-white shadow-lg flex items-center justify-center border-2 border-gold-500">
                    <span className="font-display font-bold text-2xl text-navy-900">
                      {s.number}
                    </span>
                  </div>
                </div>
                <h3 className="font-display text-lg font-bold text-navy-900 text-center mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-navy-600 text-center leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}