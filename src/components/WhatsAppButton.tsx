import { MessageCircle } from 'lucide-react';
import { contact } from '../data/content';

export default function WhatsAppButton() {
  if (!contact.whatsapp) return null;
  const href = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
    'Hello, I am interested in your export products. Could you share more details?'
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-2xl flex items-center justify-center transition-all hover:scale-110"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse" />
    </a>
  );
}
