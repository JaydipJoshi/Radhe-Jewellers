import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

/**
 * FloatingWhatsApp – framer-motion removed; CSS transitions used instead.
 * This avoids loading the full framer-motion bundle just for a tooltip show/hide.
 */
const FloatingWhatsApp = () => {
  const [showBubble, setShowBubble] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowBubble(true), 3500);
    return () => clearTimeout(t);
  }, []);

  const bubbleVisible = showBubble && !dismissed;

  return (
    <div className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-50 flex flex-col items-end gap-3">
      {/* Tooltip bubble — CSS opacity/transform transition instead of framer-motion */}
      <div
        aria-hidden={!bubbleVisible}
        style={{
          opacity: bubbleVisible ? 1 : 0,
          transform: bubbleVisible ? "translateY(0) scale(1)" : "translateY(10px) scale(0.95)",
          pointerEvents: bubbleVisible ? "auto" : "none",
          transition: "opacity 0.3s ease, transform 0.3s ease",
        }}
        className="relative bg-card shadow-elevated rounded-2xl pl-4 pr-9 py-3 max-w-[260px] border border-border/60"
      >
        <button
          onClick={() => setDismissed(true)}
          className="absolute top-1.5 right-1.5 p-1 text-muted-foreground hover:text-foreground"
          aria-label="Dismiss"
          tabIndex={bubbleVisible ? 0 : -1}
        >
          <X size={14} />
        </button>
        <p className="text-sm text-foreground font-medium">Need help?</p>
        <p className="text-xs text-muted-foreground mt-0.5">Chat with us — we usually reply in minutes.</p>
      </div>

      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative bg-whatsapp text-whatsapp-foreground rounded-full h-14 w-14 md:h-16 md:w-16 flex items-center justify-center shadow-elevated animate-subtle-pulse hover:scale-105 transition-transform"
      >
        <MessageCircle size={26} strokeWidth={2} />
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
