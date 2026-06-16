import { Linkedin, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { company, contact, navLinks, products } from '../data/content';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white/80">
      <div className="container-page py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/images/logo.png"
                alt={`${company.name} logo`}
                className="h-12 w-auto"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                }}
              />
              <div>
                <div className="font-display font-bold text-lg text-white">
                  {company.name}
                </div>
                <div className="text-[10px] tracking-widest uppercase text-white/60">
                  {company.tagline}
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-sm mb-6">
              {company.legalLine}. We connect international buyers with the finest products from our home market — sourced, quality-checked, and shipped with care.
            </p>

            <div className="flex gap-3">
              {contact.social.linkedin && (
                <SocialLink href={contact.social.linkedin} icon={<Linkedin className="w-4 h-4" />} />
              )}
              {contact.social.facebook && (
                <SocialLink href={contact.social.facebook} icon={<Facebook className="w-4 h-4" />} />
              )}
              {contact.social.instagram && (
                <SocialLink href={contact.social.instagram} icon={<Instagram className="w-4 h-4" />} />
              )}
              {contact.social.twitter && (
                <SocialLink href={contact.social.twitter} icon={<Twitter className="w-4 h-4" />} />
              )}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-white mb-5">Explore</h4>
            <ul className="space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-gold-400 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-white mb-5">Categories</h4>
            <ul className="space-y-3 text-sm">
              {products.items.slice(0, 6).map((p) => (
                <li key={p.name}>
                  <a href="#products" className="hover:text-gold-400 transition-colors">
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-white mb-5">Reach Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-gold-400 flex-shrink-0" />
                <span>
                  {contact.address.line1}, {contact.address.line2}, {contact.address.country}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="hover:text-gold-400 transition-colors">
                  {contact.phone}
                </a>
              </li>
              {contact.phone2 && (
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                  <a href={`tel:${contact.phone2.replace(/\s/g, '')}`} className="hover:text-gold-400 transition-colors">
                    {contact.phone2}
                  </a>
                </li>
              )}
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <a href={`mailto:${contact.salesEmail}`} className="hover:text-gold-400 transition-colors">
                  {contact.salesEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <div>© {year} {company.name}. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <a href="#privacy" className="hover:text-gold-400 transition-colors">
              Privacy & Data
            </a>
            <span>Established {company.founded} · IEC Registered Exporter</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 rounded-md bg-white/10 hover:bg-gold-500 hover:text-navy-900 flex items-center justify-center transition-colors"
    >
      {icon}
    </a>
  );
}
