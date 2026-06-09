import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { categories, products } from "@/data/products";
import ProductCard from "@/components/site/ProductCard";
import { useSEO } from "@/hooks/useSEO";

const CollectionPage = () => {
  const [params, setParams] = useSearchParams();
  const initial = params.get("category") || "All";
  const [active, setActive] = useState<string>(initial);

  useEffect(() => {
    setActive(params.get("category") || "All");
  }, [params]);

  const filtered = useMemo(() => {
    if (active === "All") return products;
    return products.filter(p => p.category === active);
  }, [active]);

  const pageTitle = active === "All"
    ? "Jewellery Collection – Gold, Silver & 925 Silver | Radhe Jewellers Ahmedabad"
    : `${active} Jewellery Collection | Radhe Jewellers Ahmedabad`;

  const pageDesc = active === "All"
    ? "Browse Radhe Jewellers\u2019 full collection of gold jewellery, silver jewellery, 925 silver & 1gm gold plated pieces in Ahmedabad. Crafted with care in Bhadaj, Gujarat."
    : `Explore our ${active} jewellery collection at Radhe Jewellers, Bhadaj, Ahmedabad. Hand-finished pieces crafted with quality and care.`;

  useSEO({
    title: pageTitle,
    description: pageDesc,
    canonical: active === "All"
      ? "https://radhejewellers.in/collection"
      : `https://radhejewellers.in/collection?category=${encodeURIComponent(active)}`,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": "https://radhejewellers.in/collection",
      "url": "https://radhejewellers.in/collection",
      "name": pageTitle,
      "description": pageDesc,
      "inLanguage": "en-IN",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://radhejewellers.in/" },
          { "@type": "ListItem", "position": 2, "name": "Collection", "item": "https://radhejewellers.in/collection" }
        ]
      }
    }
  });

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

      <section className="container-luxe" aria-label="Jewellery collection filter and grid">
        <nav aria-label="Filter jewellery by category">
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
        </nav>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 pb-20" role="list" aria-label={`${filtered.length} jewellery pieces`}>
          {filtered.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>
      </section>
    </div>
  );
};

export default CollectionPage;
