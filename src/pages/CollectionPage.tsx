import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { categories, products } from "@/data/products";
import ProductCard from "@/components/site/ProductCard";

const CollectionPage = () => {
  const [params, setParams] = useSearchParams();
  const initial = params.get("category") || "All";
  const [active, setActive] = useState<string>(initial);

  useEffect(() => {
    setActive(params.get("category") || "All");
  }, [params]);

  const filtered = useMemo(() => {
    if (active !== "All") return products.filter(p => p.category === active);
    // Show 3 Gold, 3 Silver, 2 × 92.5 Silver, 2 × 1gm Gold Plated interleaved
    const gold    = products.filter(p => p.category === "Gold").slice(0, 3);
    const silver  = products.filter(p => p.category === "Silver").slice(0, 3);
    const s925    = products.filter(p => p.category === "92.5 Silver").slice(0, 2);
    const plated  = products.filter(p => p.category === "1gm Gold Plated").slice(0, 2);
    // Interleave across four categories for a visually balanced showcase
    return [
      gold[0],   silver[0],  s925[0],   plated[0],
      gold[1],   silver[1],  s925[1],   plated[1],
      gold[2],   silver[2],
    ].filter(Boolean);
  }, [active]);

  const setCategory = (c: string) => {
    if (c === "All") setParams({}); else setParams({ category: c });
  };

  return (
    <div>
      <section className="container-luxe pt-14 md:pt-20 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <span className="text-[11px] uppercase tracking-[0.32em] text-muted-foreground">The Collection</span>
          <h1 className="font-serif text-4xl md:text-5xl mt-4 leading-tight">Explore the collection</h1>
          <p className="text-muted-foreground mt-5 leading-relaxed">
            A considered selection of fine jewellery — quietly luxurious, made to last.
          </p>
        </motion.div>
      </section>

      <section className="container-luxe">
        <div className="flex flex-wrap gap-2 border-y border-border/60 py-5 mb-10 sticky top-16 md:top-20 bg-background/85 backdrop-blur z-20">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-4 py-2 text-sm rounded-full transition-colors ${
                active === c
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className={`grid ${active === "All" ? "grid-cols-3" : "grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"} gap-6 md:gap-8 pb-20`}>
          {filtered.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>
      </section>
    </div>
  );
};

export default CollectionPage;
