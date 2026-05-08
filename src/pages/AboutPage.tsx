import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";
import oldShop from "@/assets/about-old-shop.jpg";
import newShowroom from "@/assets/about-new-showroom.jpg";

const values = [
  { k: "Honesty", v: "Transparent pricing and certified materials, always." },
  { k: "Craft", v: "Hand-finished by artisans with decades of experience." },
  { k: "Care", v: "We treat every customer like family — because most are." },
];

const AboutPage = () => {
  return (
    <div>
      <section className="container-luxe pt-14 md:pt-20 pb-12 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="text-[11px] uppercase tracking-[0.32em] text-muted-foreground">Our Story</span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-5 leading-[1.05] text-balance">
            From a humble counter to a luxury showroom.
          </h1>
          <p className="text-muted-foreground text-lg mt-6 leading-relaxed">
            Radhe Jewellers began in 2014 as a small family shop in Bhadaj — a single low wooden counter,
            a cushion to sit on, and a promise to every customer: honesty, craft and care. Today, that
            same promise lives on inside our new luxury showroom in Ahmedabad.
          </p>
        </motion.div>
      </section>

      {/* Journey: alternating image + text rows */}
      <section className="container-luxe py-12 md:py-20 space-y-20 md:space-y-28">

        {/* Row 1 — Image LEFT, Text RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85 }}
          className="flex flex-col md:flex-row items-center gap-10 md:gap-16"
        >
          {/* Image */}
          <div className="w-full md:w-5/12 shrink-0">
            <div className="group aspect-[4/5] rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={oldShop}
                alt="Radhe Jewellers original shop with a low wooden counter, 2014"
                width={1024}
                height={1024}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-7/12 flex flex-col gap-4">
            <span className="text-[11px] uppercase tracking-[0.32em] text-accent">Est. 2014 — The Beginning</span>
            <h3 className="font-serif text-2xl md:text-3xl leading-snug">A small counter. A big dream.</h3>
            <p className="text-muted-foreground leading-relaxed">
              We started with a single low wooden counter in Bhadaj village — sitting on the floor,
              serving every neighbour by name. Each ornament was chosen with care and sold with a
              handshake. That trust became our foundation.
            </p>
          </div>
        </motion.div>

        {/* Row 2 — Text LEFT, Image RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85 }}
          className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16"
        >
          {/* Image */}
          <div className="w-full md:w-5/12 shrink-0">
            <div className="group aspect-[4/5] rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={newShowroom}
                alt="The new Radhe Jewellers luxury showroom in Ahmedabad"
                width={1024}
                height={1024}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-7/12 flex flex-col gap-4">
            <span className="text-[11px] uppercase tracking-[0.32em] text-accent">Today — The Showroom</span>
            <h3 className="font-serif text-2xl md:text-3xl leading-snug">A luxury showroom in Ahmedabad.</h3>
            <p className="text-muted-foreground leading-relaxed">
              A decade later, that little counter has grown into a beautifully designed showroom —
              lit display cases of gold, silver and 1gm gold-plated jewellery, an in-house workshop,
              and the same family welcome that started it all.
            </p>
          </div>
        </motion.div>

      </section>


      <section className="container-luxe py-20 md:py-24 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 border-t border-border/50">
        {values.map((v, i) => (
          <motion.div key={v.k}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}>
            <span className="text-[11px] uppercase tracking-[0.32em] text-muted-foreground">0{i+1}</span>
            <h3 className="font-serif text-2xl mt-3">{v.k}</h3>
            <p className="text-muted-foreground mt-3 leading-relaxed">{v.v}</p>
          </motion.div>
        ))}
      </section>

      <section className="container-luxe pb-24">
        <div className="bg-card border border-border/40 rounded-2xl p-10 md:p-14 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-balance">Come say hello.</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            We'd love to welcome you to our showroom in Ahmedabad — or chat with you on WhatsApp.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-7">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-foreground text-background px-7 py-4 rounded-full text-sm hover:bg-foreground/90 transition-colors">
              <MessageCircle size={16} /> Chat on WhatsApp
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 border border-foreground/80 px-7 py-4 rounded-full text-sm hover:bg-foreground hover:text-background transition-colors">
              Visit the showroom
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
