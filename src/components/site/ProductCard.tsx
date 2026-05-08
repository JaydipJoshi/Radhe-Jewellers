import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Product } from "@/data/products";
import { whatsappLink } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

const ProductCard = ({ product, index = 0 }: { product: Product; index?: number }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col"
    >
      <Link
        to={`/product/${product.id}`}
        className="relative overflow-hidden rounded-xl bg-secondary aspect-[4/5] block"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={768}
          height={960}
          className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.05]"
        />
        <span className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.22em] bg-card/85 backdrop-blur px-2.5 py-1 rounded-full text-muted-foreground">
          {product.category}
        </span>
      </Link>
      <div className="pt-5 flex flex-col gap-2">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-lg leading-tight hover:text-primary transition-colors">{product.name}</h3>
        </Link>
        <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
        <a
          href={whatsappLink(`Hello, I am interested in ${product.name}`)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-2 text-sm text-foreground border-b border-foreground/30 pb-1 self-start hover:border-foreground transition-colors"
        >
          <MessageCircle size={15} /> Ask on WhatsApp
        </a>
      </div>
    </motion.article>
  );
};

export default ProductCard;
