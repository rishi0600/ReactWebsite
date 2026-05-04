import { Lock } from 'lucide-react';

export default function SecurityBadge() {
  return (
    <div className="flex items-start gap-2 mt-5 px-3 py-2.5 rounded-md bg-navy-50/60 border border-navy-100">
      <Lock className="w-4 h-4 text-navy-500 flex-shrink-0 mt-0.5" />
      <p className="text-xs text-navy-600 leading-relaxed">
        Your inquiry is sent over HTTPS to our private inbox. We never share, sell, or use
        your details for marketing — they are used solely to respond to your specific
        request.
      </p>
    </div>
  );
}
