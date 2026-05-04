import { Lock, ShieldCheck, EyeOff, Mail, Database, Cookie } from 'lucide-react';
import { contact, company } from '../data/content';

export default function Privacy() {
  return (
    <section id="privacy" className="py-20 sm:py-28 bg-navy-50/40">
      <div className="container-page max-w-5xl">
        <div className="max-w-3xl mb-12">
          <span className="section-eyebrow">Your Data, Handled Responsibly</span>
          <h2 className="section-title">Privacy & Data Security</h2>
          <p className="section-subtitle">
            We take the privacy of every visitor and buyer seriously. Here is exactly what
            happens when you use this website — explained in plain language, no fine print.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <PrivacyCard
            icon={<Database className="w-5 h-5" />}
            title="What we collect"
            body="Only what you voluntarily type into the inquiry form: your name, email, country, the product category you’re interested in, your estimated quantity, and your message. Nothing is collected silently in the background."
          />
          <PrivacyCard
            icon={<Mail className="w-5 h-5" />}
            title="Where it goes"
            body={`Form submissions are delivered through Formspree (a SOC 2-aligned form-handling service) directly to our private business inbox. We do not store buyer details in any database on this website.`}
          />
          <PrivacyCard
            icon={<EyeOff className="w-5 h-5" />}
            title="No tracking, no analytics"
            body="This site does not use Google Analytics, Facebook Pixel, advertising trackers, or any third-party telemetry. Your browsing here is private — we don’t know who visits which page, and we don’t want to."
          />
          <PrivacyCard
            icon={<Cookie className="w-5 h-5" />}
            title="No cookies"
            body="We do not set any cookies on your browser. There is nothing to consent to, nothing to opt out of."
          />
          <PrivacyCard
            icon={<Lock className="w-5 h-5" />}
            title="Encrypted in transit"
            body="The entire site is served over HTTPS with HSTS preload. The contact form posts only to our trusted endpoint (Formspree) over TLS — no data is transmitted in plain text."
          />
          <PrivacyCard
            icon={<ShieldCheck className="w-5 h-5" />}
            title="Hardened by design"
            body="Strict Content Security Policy, X-Frame-Options DENY, and a Permissions-Policy that blocks camera, microphone, and geolocation access. We don’t ask for what we don’t need."
          />
        </div>

        <div className="mt-12 p-7 rounded-xl bg-white border border-navy-100">
          <h3 className="font-display text-xl font-bold text-navy-900 mb-3">
            Your rights
          </h3>
          <p className="text-navy-700 leading-relaxed mb-4">
            In line with India’s Digital Personal Data Protection Act 2023 (DPDP Act) and
            the EU GDPR for European buyers, you have the right to access, correct, or
            delete any personal information you have shared with us. To exercise any of
            these rights, simply email{' '}
            <a
              href={`mailto:${contact.email}`}
              className="text-gold-700 font-semibold hover:underline"
            >
              {contact.email}
            </a>{' '}
            with your request and we will respond within 7 business days.
          </p>
          <p className="text-sm text-navy-500 italic">
            Last updated: {new Date().getFullYear()} · {company.name}
          </p>
        </div>
      </div>
    </section>
  );
}

function PrivacyCard({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="p-6 rounded-xl bg-white border border-navy-100 hover:border-gold-300 hover:shadow-lg transition-all">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-lg bg-gold-50 flex items-center justify-center text-gold-600">
          {icon}
        </div>
        <h3 className="font-display font-bold text-navy-900">{title}</h3>
      </div>
      <p className="text-navy-600 text-sm leading-relaxed">{body}</p>
    </div>
  );
}
