import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MessageCircle, Phone, ShieldCheck, Gem, Truck } from "lucide-react";
import { getProductById, products } from "@/data/products";
import { whatsappLink, PHONE_TEL, PHONE_NUMBER } from "@/lib/whatsapp";
import ProductCard from "@/components/site/ProductCard";

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = id ? getProductById(id) : undefined;

  if (!product) {
    return (
      <div className="container-luxe py-32 text-center">
        <h1 className="font-serif text-3xl">Piece not found</h1>
        <Link to="/collection" className="inline-block mt-6 underline">Back to collection</Link>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4);

  return (
    <div>
      <section className="container-luxe pt-8 md:pt-12">
        <Link to="/collection" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft size={14} /> Back to collection
        </Link>
      </section>

      <section className="container-luxe py-10 md:py-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-4"
        >
          <div className="aspect-square rounded-xl overflow-hidden bg-secondary">
            <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[product.image, product.image, product.image].map((img, i) => (
              <div key={i} className="aspect-square rounded-lg overflow-hidden bg-secondary">
                <img src={img} alt="" loading="lazy" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col"
        >
          <span className="text-[11px] uppercase tracking-[0.32em] text-muted-foreground">{product.category}</span>
          <h1 className="font-serif text-4xl md:text-5xl mt-3 leading-tight">{product.name}</h1>
          <p className="text-muted-foreground mt-5 leading-relaxed">{product.details}</p>

          <dl className="mt-8 grid grid-cols-2 gap-y-4 text-sm border-y border-border/60 py-6">
            <dt className="text-muted-foreground">Weight</dt>
            <dd>
              <Link to="/contact" className="underline underline-offset-2 hover:text-foreground transition-colors">
                Visit us to know
              </Link>
            </dd>
            {product.priceRange && (<>
              <dt className="text-muted-foreground">Price</dt>
              <dd>{product.priceRange}</dd>
            </>)}
            <dt className="text-muted-foreground">Made in</dt>
            <dd>Bhadaj, Gujarat</dd>
          </dl>

          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <a
              href={whatsappLink(`Hello, I am interested in ${product.name}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-7 py-4 rounded-full text-sm hover:bg-foreground/90 transition-colors"
            >
              <MessageCircle size={16} /> Inquire on WhatsApp
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center gap-2 border border-foreground/80 px-7 py-4 rounded-full text-sm hover:bg-foreground hover:text-background transition-colors"
            >
              <Phone size={16} /> Call {PHONE_NUMBER}
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: Gem, t: "Hand-finished" },
              { icon: ShieldCheck, t: "Certified & hallmarked" },
              { icon: Truck, t: "Doorstep viewing in Bhadaj" },
            ].map(({ icon: I, t }) => (
              <div key={t} className="flex items-center gap-3 text-sm text-muted-foreground">
                <I size={18} className="text-primary" strokeWidth={1.5} /> {t}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {related.length > 0 && (
        <section className="container-luxe py-16 md:py-24 border-t border-border/60">
          <h2 className="font-serif text-2xl md:text-3xl mb-10">You may also like</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {related.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetailPage;
