import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Star, ShieldCheck, Gem, HeartHandshake, MapPin } from "lucide-react";
import hero from "@/assets/hero-jewellery.jpg";
import store from "@/assets/store.jpg";
import { products } from "@/data/products";
import { categories } from "@/data/products";
import ProductCard from "@/components/site/ProductCard";
import SectionHeading from "@/components/site/SectionHeading";
import { whatsappLink, ADDRESS } from "@/lib/whatsapp";
import goldImg from "@/assets/cat-bangles.jpg";
import silverImg from "@/assets/cat-earrings.jpg";
import platedImg from "@/assets/cat-necklaces.jpg";
import bisLogo from "@/assets/BIS-Hallmark.svg";

const categoryCards = [
  { name: "Gold", image: goldImg },
  { name: "Silver", image: silverImg },
  { name: "1gm Gold Plated", image: platedImg },
];

const trustItems = [
  { icon: Gem, title: "Hand-finished craftsmanship", text: "Every piece is finished by master artisans with care and precision." },
  { icon: ShieldCheck, title: "Certified & assured", text: "Hallmarked gold and quality-assured pieces — clarity you can trust." },
  { icon: HeartHandshake, title: "Trusted in Bhadaj", text: "A local family-run jeweller our community returns to, year after year." },
];

const testimonials = [
  { name: "Krupa Bhavsar", text: "Beautifully made and the team genuinely listens. My ring is everything I dreamed of.", role: "Bhadaj" },
  { name: "Neel", text: "Trustworthy, transparent pricing and exquisite craftsmanship. Highly recommended.", role: "Ahmedabad" },
  { name: "Nitesh Prajapati", text: "They restored my mother's necklace like new. So grateful for their patience and skill.", role: "Science City" },
];

const HomePage = () => {
  const featured = [
    products.find((p) => p.id === "plated-pendant-set")!,
    products.find((p) => p.id === "plated-statement-ring")!,
    products.find((p) => p.id === "classic-gold-bangle")!,
    products.find((p) => p.id === "silver-drop-earrings")!,
  ];

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative">
        <div className="container-luxe pt-10 md:pt-16 pb-16 md:pb-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex flex-col gap-7"
          >
            <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
              <span className="hairline" /> Bhadaj, Gujarat
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-balance">
              Crafting Timeless<br /> Elegance.
            </h1>
            <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
              A quietly beautiful collection of fine jewellery — designed to be worn, loved and passed on.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/collection"
                className="inline-flex items-center gap-2 bg-foreground text-background px-7 py-4 rounded-full text-sm tracking-wide hover:bg-foreground/90 transition-colors group"
              >
                View Collection <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-foreground/80 px-7 py-4 rounded-full text-sm tracking-wide hover:bg-foreground hover:text-background transition-colors"
              >
                <MessageCircle size={16} /> Chat on WhatsApp
              </a>
            </div>
            <div className="flex items-center gap-6 pt-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-foreground text-foreground" />)}
                </div>
                <span>5.0 on Google</span>
              </div>
              <span className="hidden sm:inline">·</span>
              <span className="hidden sm:inline">Loved by families in Bhadaj</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/5] md:aspect-[5/6] rounded-[14px] overflow-hidden bg-secondary shadow-elevated">
              <img
                src={hero}
                alt="A delicate gold necklace from Radhe Jewellers"
                width={1536}
                height={1024}
                loading="eager"
                {...({ fetchpriority: "high" } as any)}
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="hidden md:block absolute -bottom-6 -left-6 bg-card shadow-card rounded-xl px-5 py-4 max-w-[220px]">
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">New Arrivals</p>
              <p className="font-serif text-base mt-1.5">The Lumière Collection</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-16 md:py-24 bg-card/50 cv-auto">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Explore"
            title="Find your forever piece"
            subtitle="Curated categories for every chapter of your story."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7 mt-14">
            {categoryCards.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link to={`/collection?category=${cat.name}`} className="group block">
                  <div className="aspect-square rounded-xl overflow-hidden bg-secondary">
                    <img src={cat.image} alt={cat.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.06]" />
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <h3 className="font-serif text-lg">{cat.name}</h3>
                    <ArrowRight size={15} className="text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 md:py-28 cv-auto">
        <div className="container-luxe">
          <SectionHeading eyebrow="Why Radhe" title="Quiet luxury, honestly made." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-14">
            {trustItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-card rounded-xl p-8 shadow-soft border border-border/40"
              >
                <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center mb-6">
                  <item.icon size={20} className="text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="py-16 md:py-24 bg-card/50 cv-auto">
        <div className="container-luxe">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <SectionHeading eyebrow="Featured" title="Pieces our customers love" align="left" />
            <Link to="/collection" className="inline-flex items-center gap-2 text-sm border-b border-foreground/30 pb-1 self-start hover:border-foreground transition-colors">
              View all <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {featured.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-28 cv-auto">
        <div className="container-luxe">
          <SectionHeading eyebrow="Testimonials" title="Words from our customers" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-14">
            {testimonials.map((t, i) => (
              <motion.blockquote
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-card rounded-xl p-8 border border-border/40"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} size={13} className="fill-foreground text-foreground" />)}
                </div>
                <p className="font-serif text-lg leading-snug text-balance">"{t.text}"</p>
                <footer className="mt-6 text-sm text-muted-foreground">
                  <span className="text-foreground">{t.name}</span> · {t.role}
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="py-12 border-y border-border/60 bg-card/40 cv-auto">
        <div className="container-luxe grid grid-cols-2 md:grid-cols-4 gap-8 text-center items-center">
          {[
            { k: "5.0 ★", v: "Google Rating" },
            { k: "Local", v: "Trusted in Bhadaj" },
            { k: "100%", v: "Customer-First" },
          ].map(({ k, v }) => (
            <div key={v} className="flex flex-col items-center">
              <span className="font-serif text-2xl md:text-3xl">{k}</span>
              <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground mt-2">{v}</span>
            </div>
          ))}
          <div className="flex flex-col items-center justify-center">
            <img src={bisLogo} alt="BIS Hallmark" className="h-16 md:h-20 object-contain mix-blend-multiply" />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-28 cv-auto">
        <div className="container-luxe">
          <div className="relative overflow-hidden rounded-2xl bg-card shadow-card border border-border/40 grid grid-cols-1 lg:grid-cols-2">
            <img src={store} alt="Inside the Radhe Jewellers store in Bhadaj" loading="lazy" className="h-72 lg:h-full w-full object-cover" />
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <span className="text-[11px] uppercase tracking-[0.32em] text-muted-foreground">Visit Us</span>
              <h2 className="font-serif text-3xl md:text-4xl mt-4 leading-tight text-balance">
                Visit our store in Bhadaj or chat with us.
              </h2>
              <p className="text-muted-foreground mt-4 max-w-md leading-relaxed">
                Step into our store in Bhadaj, or reach out on WhatsApp — we'd be delighted to help you find your piece.
              </p>
              <p className="flex items-start gap-2 text-sm text-muted-foreground mt-6">
                <MapPin size={16} className="mt-0.5 shrink-0" /> {ADDRESS}
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 rounded-full text-sm hover:bg-foreground/90 transition-colors"
                >
                  <MessageCircle size={16} /> Chat on WhatsApp
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border border-foreground/80 px-6 py-3.5 rounded-full text-sm hover:bg-foreground hover:text-background transition-colors"
                >
                  Get Directions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
