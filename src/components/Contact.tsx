import { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { contact, formspreeEndpoint, products } from '../data/content';
import InquiryOptions from './InquiryOptions';
import SecurityBadge from './SecurityBadge';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot check: if a bot filled the hidden _gotcha field, silently
    // pretend the submission succeeded without actually sending anywhere.
    if (data.get('_gotcha')) {
      setStatus('success');
      form.reset();
      return;
    }

    if (formspreeEndpoint) {
      setStatus('sending');
      try {
        const res = await fetch(formspreeEndpoint, {
          method: 'POST',
          body: data,
          headers: { Accept: 'application/json' },
        });
        if (res.ok) {
          setStatus('success');
          form.reset();
        } else {
          setStatus('error');
        }
      } catch {
        setStatus('error');
      }
    } else {
      // Fallback: open the user's mail client with a pre-filled message
      const fields = Object.fromEntries(data.entries()) as Record<string, string>;
      const body = encodeURIComponent(
        `Name: ${fields.name}\nCompany: ${fields.company}\nCountry: ${fields.country}\nProduct: ${fields.product}\nQuantity: ${fields.quantity}\n\nMessage:\n${fields.message}`
      );
      const subject = encodeURIComponent(
        `Export Inquiry — ${fields.product || 'General'}`
      );
      window.location.href = `mailto:${contact.salesEmail}?subject=${subject}&body=${body}`;
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-navy-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-10" />
      <div className="absolute -top-20 left-0 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-3xl" />

      <div className="container-page relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left: Contact info */}
          <div>
            <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-gold-400 mb-4">
              Get In Touch
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Let’s Talk About Your Next Shipment
            </h2>
            <p className="text-lg text-white/75 leading-relaxed mb-10 max-w-md">
              Send us your requirement and we’ll respond within one business day with a quotation, sample availability, and shipping timeline.
            </p>

            <div className="space-y-6">
              <ContactItem
                icon={<MapPin className="w-5 h-5" />}
                label="Office"
                lines={[
                  contact.address.line1,
                  contact.address.line2,
                  contact.address.country,
                ]}
              />
              <ContactItem
                icon={<Phone className="w-5 h-5" />}
                label="WhatsApp"
                lines={[contact.phone]}
                href={`https://wa.me/${contact.whatsapp}`}
                target="_blank"
              />
              <ContactItem
                icon={<Mail className="w-5 h-5" />}
                label="Email"
                lines={[contact.salesEmail, contact.email]}
                href={`mailto:${contact.salesEmail}`}
              />
              <ContactItem
                icon={<Clock className="w-5 h-5" />}
                label="Hours"
                lines={[contact.hours]}
              />
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white text-navy-900 p-8 sm:p-10 rounded-2xl shadow-2xl">
            <h3 className="font-display text-2xl font-bold mb-6">
              Request a Quotation
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Honeypot — hidden from humans; bots fill it and get silently dropped */}
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  left: '-9999px',
                  width: '1px',
                  height: '1px',
                  opacity: 0,
                  pointerEvents: 'none',
                }}
              />

              <div className="grid sm:grid-cols-2 gap-5">
                <Field
                  label="Your Name"
                  name="name"
                  type="text"
                  required
                  placeholder="Full name"
                />
                <Field
                  label="Company"
                  name="company"
                  type="text"
                  placeholder="Company name"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                />
                <Field
                  label="Country"
                  name="country"
                  type="text"
                  required
                  placeholder="Destination country"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-navy-800 mb-2">
                    Product of Interest
                  </label>
                  <select
                    name="product"
                    required
                    className="w-full px-4 py-3 rounded-md border border-navy-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all bg-white"
                  >
                    <option value="">Select a category</option>
                    {products.items.map((p) => (
                      <option key={p.name} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                    <option value="Other / Custom">Other / Custom</option>
                  </select>
                </div>
                <Field
                  label="Estimated Quantity"
                  name="quantity"
                  type="text"
                  placeholder="e.g. 1×20ft container"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-navy-800 mb-2">
                  Your Requirement
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about specifications, packaging, target price, or any questions."
                  className="w-full px-4 py-3 rounded-md border border-navy-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-navy-900 hover:bg-navy-800 text-white font-semibold rounded-md transition-all disabled:opacity-60"
              >
                {status === 'sending' ? (
                  'Sending...'
                ) : (
                  <>
                    Send Inquiry <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="flex items-start gap-2 p-4 rounded-md bg-green-50 border border-green-200 text-green-800 text-sm">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  Thank you — we’ve received your inquiry and will reply within one business day.
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-start gap-2 p-4 rounded-md bg-red-50 border border-red-200 text-red-800 text-sm">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  Something went wrong. Please email us directly at {contact.salesEmail}.
                </div>
              )}

              <SecurityBadge />

              <InquiryOptions />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  lines,
  href,
  target,
}: {
  icon: React.ReactNode;
  label: string;
  lines: string[];
  href?: string;
  target?: string;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="w-11 h-11 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0 text-gold-400">
        {icon}
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-white/60 mb-1">
          {label}
        </div>
        {lines.map((l, i) => (
          <div key={i} className="text-white/95">
            {l}
          </div>
        ))}
      </div>
    </div>
  );
  return href ? (
    <a
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      className="block hover:text-gold-400 transition-colors"
    >
      {content}
    </a>
  ) : (
    content
  );
}

function Field({
  label,
  name,
  type,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-navy-800 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-md border border-navy-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all"
      />
    </div>
  );
}
