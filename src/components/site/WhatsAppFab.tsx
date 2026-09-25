import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/config/site";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Achievers Geotechnical Services on WhatsApp"
      className="fixed right-4 bottom-4 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#20bd5a] px-4 py-3.5 text-sm font-semibold text-white shadow-[0_16px_40px_-16px_rgba(37,211,102,0.6)] transition-all hover:-translate-y-0.5 md:right-6 md:bottom-6"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}