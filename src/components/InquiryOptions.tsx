import { MessageCircle, Mail } from 'lucide-react';
import { contact } from '../data/content';

export default function InquiryOptions() {
  const whatsappMessage = encodeURIComponent(
    `Hi Karvelis Global Exports! 👋\n\nI'm interested in your products and would like to receive a quotation.\n\nPlease let me know your available products, MOQs, and pricing.\n\nThank you!`
  );
  const whatsappLink = `https://wa.me/${contact.whatsapp}?text=${whatsappMessage}`;
  const emailLink = `mailto:${contact.salesEmail}?subject=Product Quotation Request - Karvelis Global Exports`;

  return (
    <div className="mt-8 pt-8 border-t border-navy-100">
      <p className="text-sm font-semibold text-navy-800 mb-4">
        Prefer a different method? Reach us directly:
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          Send via WhatsApp
        </a>
        <a
          href={emailLink}
          className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-colors"
        >
          <Mail className="w-5 h-5" />
          Send via Email
        </a>
      </div>
    </div>
  );
}
