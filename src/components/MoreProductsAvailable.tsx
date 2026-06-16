import { Package, ArrowRight } from 'lucide-react';

export default function MoreProductsAvailable() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-gold-500/10 via-transparent to-gold-500/10 border-y border-gold-200/40">
      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-navy-900 mb-4">
              Looking for Something Specific?
            </h3>
            <p className="text-navy-600 text-lg leading-relaxed mb-6">
              The five categories above are our core export portfolio — but Karvelis Global Exports has access to a much wider range of premium agri-products and commodities. Whether you need a bulk quantity of an existing product, a custom blend, or a product outside our standard list, we can source it.
            </p>
            <ul className="space-y-2.5 text-navy-700 text-base">
              <li className="flex items-start gap-2">
                <span className="text-gold-600 font-bold mt-1">✓</span>
                <span>Custom MOQ &amp; packaging options</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-600 font-bold mt-1">✓</span>
                <span>Sourcing from verified producers nationwide</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-600 font-bold mt-1">✓</span>
                <span>Full compliance &amp; FSSAI certification for food products</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-600 font-bold mt-1">✓</span>
                <span>Rapid turnaround on sample &amp; pilot orders</span>
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="p-8 rounded-2xl bg-white border-2 border-gold-300 shadow-xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-14 h-14 rounded-lg bg-gold-100 flex items-center justify-center">
                  <Package className="w-7 h-7 text-gold-600" />
                </div>
                <div>
                  <div className="font-display font-bold text-navy-900">
                    Custom Product Sourcing
                  </div>
                  <div className="text-sm text-navy-500">
                    Tell us what you need
                  </div>
                </div>
              </div>

              <p className="text-navy-600 text-sm leading-relaxed mb-6">
                Have a specific requirement? Sourcing a product we haven't listed? Need bulk quantities with a tight timeline?
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 hover:bg-navy-800 text-white font-semibold rounded-lg transition-colors"
              >
                Request a Custom Quote
                <ArrowRight className="w-4 h-4" />
              </a>

              <p className="text-xs text-navy-500 mt-4">
                Response within 24 hours · Full confidentiality maintained
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
