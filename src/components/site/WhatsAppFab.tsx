import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Phone, X } from "lucide-react";
import { siteConfig, telLink, whatsappLink } from "@/config/site";

export function WhatsAppFab() {
  const [showPopup, setShowPopup] = useState(false);

  // Trigger the popup after exactly 5 seconds (No memory check)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {/* 1. THE 5-SECOND DELAY POPUP */}
      {showPopup && (
        <div className="fixed bottom-24 left-4 right-4 z-40 animate-in slide-in-from-bottom-5 fade-in duration-500 md:bottom-6 md:left-6 md:right-auto md:w-[360px]">
          <div className="relative overflow-hidden rounded-2xl bg-white p-5 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] ring-1 ring-border">
            <button
              onClick={handleClosePopup}
              className="absolute right-3 top-3 rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Close popup"
            >
              <X className="h-4 w-4" />
            </button>

            <h3 className="pr-6 font-display text-[1.1rem] font-bold leading-tight text-navy-deep">
              Need a borehole drilling service?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Our engineers are ready to help with surveys, drilling, and maintenance across Ogun State.
            </p>

            <div className="mt-5 flex flex-col gap-2.5">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClosePopup}
                className="btn w-full gap-2 border-none bg-[#25D366] text-white shadow-sm hover:bg-[#20bd5a]"
              >
                {/* Official WhatsApp Icon */}
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51h-.57c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Chat on WhatsApp
              </a>

              <div className="flex gap-2.5">
                <a href={telLink(siteConfig.contact.phones[0])} className="btn btn-outline flex-1 px-0 text-xs">
                  <Phone className="mr-1.5 h-3.5 w-3.5" /> Call Us
                </a>
                <Link to="/request-a-quote" onClick={handleClosePopup} className="btn btn-outline flex-1 px-0 text-xs">
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. THE FLOATING WHATSAPP BUTTON (With Real Logo) */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Achievers Geotechnical Services on WhatsApp"
        className="fixed right-4 bottom-4 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#20bd5a] px-4 py-3.5 text-sm font-semibold text-white shadow-[0_16px_40px_-16px_rgba(37,211,102,0.6)] transition-all hover:-translate-y-0.5 md:right-6 md:bottom-6"
      >
        {/* Official WhatsApp Icon */}
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51h-.57c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </>
  );
}