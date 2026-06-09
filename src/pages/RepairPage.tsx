import { motion } from "framer-motion";
import {
  MessageCircle,
  Sparkles,
  Wrench,
  RefreshCcw,
  Gem,
  Phone,
  Scissors,
  Hammer,
  Scale,
  Coins,
  ShieldCheck,
  Clock,
  Camera,
  CheckCircle2,
} from "lucide-react";
import repair from "@/assets/repair.jpg";
import { whatsappLink, PHONE_TEL, PHONE_NUMBER } from "@/lib/whatsapp";
import { useSEO } from "@/hooks/useSEO";

const services = [
  { icon: Sparkles, title: "Polishing & cleaning", text: "Deep cleaning and mirror polish for rings, chains, bangles and idols — back to brand-new shine." },
  { icon: Wrench, title: "Resizing & soldering", text: "Ring resizing, chain & clasp repair, broken joints — done in-house with precision soldering." },
  { icon: RefreshCcw, title: "Restoration & redesign", text: "Bring old or damaged jewellery back to life, or redesign heirlooms into pieces you'll wear daily." },
  { icon: Gem, title: "Stone setting & replacement", text: "Re-set loose stones, replace missing diamonds or coloured stones with carefully matched quality." },
  { icon: Hammer, title: "Custom order & manufacturing", text: "Bring a design or photo — we'll handcraft it in 22k gold, silver or 1gm gold plated." },
  { icon: Scissors, title: "Engraving & finishing", text: "Personal engraving, matte / hi-polish finish, rhodium and gold plating on silver." },
  { icon: Scale, title: "Old gold exchange & valuation", text: "Honest, transparent valuation of your old gold — exchange it for new pieces or cash value." },
  { icon: Coins, title: "Gold & silver coin sales", text: "Hallmarked gold coins and 999 pure silver coins available for gifting and investment." },
];

const steps = [
  { icon: Camera, title: "1. Send a photo", text: "WhatsApp us a clear photo of your piece and tell us what you'd like done." },
  { icon: MessageCircle, title: "2. Free estimate", text: "We share a transparent estimate and timeline — no obligation, no hidden charges." },
  { icon: Wrench, title: "3. Expert in-house work", text: "Our master craftsmen carry out the work right here in our Bhadaj workshop." },
  { icon: CheckCircle2, title: "4. Pickup or delivery", text: "Collect from our store or we'll arrange safe delivery within Ahmedabad." },
];

const trust = [
  { icon: ShieldCheck, title: "11+ years of trust", text: "Established 2014. A family-run name Bhadaj relies on." },
  { icon: Gem, title: "In-house master karigars", text: "Your jewellery never leaves our workshop — no risky outsourcing." },
  { icon: Clock, title: "Quick turnaround", text: "Most polishing & small repairs ready the same day or next." },
];

const RepairPage = () => {
  useSEO({
    title: "Jewellery Repair in Ahmedabad – Radhe Jewellers | Polishing, Resizing & Restoration",
    description: "Expert jewellery repair services in Bhadaj, Ahmedabad: polishing, resizing, stone setting, restoration, engraving & old gold exchange. Same-day turnaround. WhatsApp or call Radhe Jewellers.",
    canonical: "https://radhejewellers.in/repair",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://radhejewellers.in/repair",
      "url": "https://radhejewellers.in/repair",
      "name": "Jewellery Repair Services in Ahmedabad – Radhe Jewellers",
      "description": "Expert jewellery repair in Bhadaj, Ahmedabad. Polishing, resizing, stone setting, old gold exchange and more.",
      "inLanguage": "en-IN",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://radhejewellers.in/" },
          { "@type": "ListItem", "position": 2, "name": "Repair Services", "item": "https://radhejewellers.in/repair" }
        ]
      },
      "mainEntity": {
        "@type": "Service",
        "name": "Jewellery Repair & Services",
        "provider": { "@id": "https://radhejewellers.in/#business" },
        "areaServed": { "@type": "City", "name": "Ahmedabad" },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Jewellery Repair Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Jewellery Polishing & Cleaning" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ring Resizing & Soldering" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Jewellery Restoration & Redesign" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Stone Setting & Replacement" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Jewellery Manufacturing" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Engraving & Finishing" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Old Gold Exchange & Valuation" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gold & Silver Coin Sales" } }
          ]
        }
      }
    }
  });
  return (
    <div>
      {/* HERO */}
      <section className="container-luxe pt-14 md:pt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="text-[11px] uppercase tracking-[0.32em] text-muted-foreground">Repair & Services</span>
          <h1 className="font-serif text-4xl md:text-5xl mt-4 leading-tight text-balance">
            Heirlooms restored.<br />Favourites renewed.
          </h1>
          <p className="text-muted-foreground mt-5 leading-relaxed max-w-md">
            From a quick polish to a full restoration, custom orders to old-gold exchange — at Radhe Jewellers we do it all,
            in-house, with the care your jewellery deserves.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a href={whatsappLink("Hello, I'd like to inquire about a jewellery repair / service")} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-foreground text-background px-7 py-4 rounded-full text-sm hover:bg-foreground/90 transition-colors">
              <MessageCircle size={16} /> Send a photo on WhatsApp
            </a>
            <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 border border-foreground/80 px-7 py-4 rounded-full text-sm hover:bg-foreground hover:text-background transition-colors">
              <Phone size={16} /> Call {PHONE_NUMBER}
            </a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.1 }}
          className="aspect-[5/4] rounded-xl overflow-hidden bg-secondary shadow-elevated">
          <img src={repair} alt="Master craftsman at Radhe Jewellers repairing a piece of jewellery in Bhadaj, Ahmedabad" loading="eager" {...({ fetchpriority: "high" } as any)} className="h-full w-full object-cover" />
        </motion.div>
      </section>

      {/* SERVICES GRID */}
      <section className="container-luxe pt-20 md:pt-28">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] uppercase tracking-[0.32em] text-muted-foreground">What we do</span>
          <h2 className="font-serif text-3xl md:text-4xl mt-3">Everything your jewellery may need — under one roof</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="bg-card rounded-xl p-7 border border-border/40 shadow-soft hover:shadow-elevated transition-shadow"
            >
              <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center mb-5">
                <s.icon size={20} className="text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-lg">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="container-luxe pt-20 md:pt-28">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] uppercase tracking-[0.32em] text-muted-foreground">How it works</span>
          <h2 className="font-serif text-3xl md:text-4xl mt-3">Simple, honest, and quick</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative bg-card rounded-xl p-7 border border-border/40 shadow-soft"
            >
              <div className="h-11 w-11 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <s.icon size={18} className="text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-lg">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TRUST */}
      <section className="container-luxe pt-20 md:pt-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trust.map((t) => (
            <div key={t.title} className="bg-card rounded-xl p-7 border border-border/40 text-center">
              <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                <t.icon size={20} className="text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-lg">{t.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-luxe py-20 md:py-28">
        <div className="bg-card border border-border/40 rounded-2xl p-10 md:p-14 text-center max-w-3xl mx-auto shadow-soft">
          <h3 className="font-serif text-2xl md:text-3xl">Not sure what your piece needs?</h3>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Send us a photo on WhatsApp and we'll suggest the best approach with a transparent estimate — no obligation.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-7">
            <a href={whatsappLink("Hello, I'd like a free estimate for a repair / service. Sending a photo.")} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-foreground text-background px-7 py-4 rounded-full text-sm hover:bg-foreground/90 transition-colors">
              <MessageCircle size={16} /> Get a free estimate
            </a>
            <a href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 border border-foreground/80 px-7 py-4 rounded-full text-sm hover:bg-foreground hover:text-background transition-colors">
              <Phone size={16} /> Call {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RepairPage;
