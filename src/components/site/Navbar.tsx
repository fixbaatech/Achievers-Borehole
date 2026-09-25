import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { Logo } from "@/components/site/Logo";
import { siteConfig, telLink, whatsappLink } from "@/config/site";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Videos", to: "/videos" },
  // { label: "Testimonials", to: "/testimonials" },
  { label: "Contact", to: "/contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-border/80 bg-background/85 py-3 backdrop-blur-xl" // Increased to py-3
            : "border-b border-transparent py-6", // Increased to py-6 for a larger, moderate padding
        )}
      >
        <div className="shell flex items-center justify-between gap-8 px-4 lg:px-6">
          <Link to="/" aria-label="Achievers Geotechnical Services — home">
            <Logo light={!scrolled} />
          </Link>

          <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                className={cn(
                  "rounded-full px-4 py-2.5 text-sm font-medium transition-colors",
                  scrolled 
                    ? "text-navy-deep hover:bg-black/5" 
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                )}
                activeProps={{ className: "!text-[#022866] bg-white shadow-sm" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2.5 lg:flex">
            {/* Dynamic WhatsApp Button: White on dark background, Dark on white background */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "btn btn-sm gap-2 border transition-colors duration-300",
                scrolled 
                  ? "border-border text-navy-deep hover:bg-muted" 
                  : "border-white/40 text-white hover:bg-white/10"
              )}
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp
            </a>
            <Link to="/request-a-quote" className="btn btn-sm btn-accent">
              Request a Quote
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center rounded-full border lg:hidden transition-colors duration-300",
              scrolled 
                ? "border-border text-navy-deep" 
                : "border-white/30 text-white"
            )}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Moved top padding from 68px to 76px to accommodate the taller header */}
      {open && (
        <div className="fixed inset-x-0 top-[76px] bottom-0 z-40 overflow-y-auto border-t border-border bg-background lg:hidden">
          <nav aria-label="Mobile navigation" className="shell flex flex-col py-4">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                className="border-b border-border/70 py-4 font-display text-lg font-semibold text-navy-deep"
                activeProps={{ className: "text-teal-deep" }}
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-6 flex flex-col gap-3">
              <Link to="/request-a-quote" className="btn btn-accent w-full">
                Request a Quote
              </Link>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-teal w-full"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-current"
                  aria-hidden="true"
                >
                  <path d="M20.52 3.48A11.82 11.82 0 0 0 12.08 0C5.56 0 .25 5.31.25 11.83c0 2.08.54 4.11 1.56 5.91L.16 24l6.4-1.68a11.8 11.8 0 0 0 5.52 1.37h.01c6.52 0 11.83-5.31 11.83-11.83 0-3.16-1.23-6.13-3.4-8.38ZM12.09 21.67h-.01a9.83 9.83 0 0 1-5.01-1.37l-.36-.21-3.8 1 1.02-3.7-.23-.38a9.83 9.83 0 1 1 8.39 4.66Zm5.4-7.37c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.19.29-.76.95-.93 1.15-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.43-.86-.76-1.44-1.7-1.61-1.99-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.49.1-.19.05-.37-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.58-.48-.5-.66-.51h-.56c-.19 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.44s1.05 2.83 1.2 3.03c.15.19 2.07 3.16 5.01 4.43.7.3 1.25.48 1.68.61.7.22 1.34.19 1.84.12.56-.08 1.72-.7 1.96-1.37.24-.68.24-1.25.17-1.37-.07-.12-.27-.19-.56-.34Z" />
                </svg>
                Chat on WhatsApp
              </a>
              <a
                href={telLink(siteConfig.contact.phones[0])}
                className="btn btn-outline w-full"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {siteConfig.contact.phones[0]}
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}