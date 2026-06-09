import { Link } from "react-router-dom";
import { ADDRESS, PHONE_NUMBER, PHONE_TEL, whatsappLink } from "@/lib/whatsapp";
import { Phone, MapPin, MessageCircle, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/60 mt-24" role="contentinfo" aria-label="Site footer">
      <div className="container-luxe py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2 max-w-sm">
          <div className="flex flex-col items-start leading-none">
            <span className="font-serif italic text-3xl tracking-wide text-foreground">
              Radhe <span className="text-accent">Jewellers</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mt-2">
              Ahmedabad <span className="text-accent">·</span> Est&nbsp;2014
            </span>
          </div>
          <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
            Crafting timeless elegance in Bhadaj. Visit our store or chat with us — we're here to help you find a piece you'll treasure.
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.24em] text-muted-foreground mb-4" id="footer-explore">Explore</h4>
          <ul className="space-y-3 text-sm" aria-labelledby="footer-explore">
            <li><Link to="/collection" className="hover:text-primary transition-colors">Collection</Link></li>
            <li><Link to="/repair" className="hover:text-primary transition-colors">Repair Services</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.24em] text-muted-foreground mb-4" id="footer-contact">Visit & Connect</h4>
          <ul className="space-y-3 text-sm text-muted-foreground" aria-labelledby="footer-contact">
            <li className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0" /><span>{ADDRESS}</span></li>
            <li><a href={`tel:${PHONE_TEL}`} className="flex gap-2 hover:text-foreground transition-colors"><Phone size={16} /> {PHONE_NUMBER}</a></li>
            <li><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex gap-2 hover:text-foreground transition-colors"><MessageCircle size={16} /> WhatsApp us</a></li>
            <li><a href="https://instagram.com/radhejewellers2014" target="_blank" rel="noopener noreferrer" className="flex gap-2 hover:text-foreground transition-colors"><Instagram size={16} /> @radhejewellers2014</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-luxe py-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-muted-foreground text-center md:text-left items-center">
          <span className="md:justify-self-start">© {new Date().getFullYear()} Radhe Jewellers, Bhadaj. All rights reserved.</span>
          <span className="md:justify-self-center">Made with 💖 by G.J.</span>
          <span className="md:justify-self-end">Handcrafted with care in Gujarat, India.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
