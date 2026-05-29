// ── Gold photos (8) ──────────────────────────────────────────────
import gold1 from "@/assets/Gold photos/gold 1.jpg";
import gold2 from "@/assets/Gold photos/gold 2.jpg";
import gold3 from "@/assets/Gold photos/gold 3.jpg";
import gold4 from "@/assets/Gold photos/gold 4.jpg";
import gold5 from "@/assets/Gold photos/gold 5.jpg";
import gold6 from "@/assets/Gold photos/gold 6.jpg";
import gold7 from "@/assets/Gold photos/gold 7.jpg";
import gold8 from "@/assets/Gold photos/gold 8.jpg";

// ── Silver photos (8) ────────────────────────────────────────────
import silver1 from "@/assets/Silver photos/silver 1.jpg";
import silver2 from "@/assets/Silver photos/silver 2.jpg";
import silver3 from "@/assets/Silver photos/silver 3.jpg";
import silver4 from "@/assets/Silver photos/silver 4.jpg";
import silver5 from "@/assets/Silver photos/silver 5.jpg";
import silver6 from "@/assets/Silver photos/silver 6.jpg";
import silver7 from "@/assets/Silver photos/silver 7.jpg";
import silver8 from "@/assets/Silver photos/silver 8.jpg";

// ── 92.5 Silver (4) ──────────────────────────────────────────────
// Note: filenames contain double spaces — preserved exactly as on disk
import silver925_1 from "@/assets/92.5 Silver/92.5  photo1.jpg";
import silver925_2 from "@/assets/92.5 Silver/92.5  photo 2.jpg";
import silver925_3 from "@/assets/92.5 Silver/92.5  photo3.jpg";
import silver925_4 from "@/assets/92.5 Silver/92.5  photo4.jpg";

// ── 1gm Gold Plated (4) ──────────────────────────────────────────
import platedBangles   from "@/assets/1gm gold plated/cat-bangles.jpg";
import platedEarrings  from "@/assets/1gm gold plated/cat-earrings.jpg";
import platedNecklaces from "@/assets/1gm gold plated/cat-necklaces.jpg";
import platedRings     from "@/assets/1gm gold plated/cat-rings.jpg";

// ─────────────────────────────────────────────────────────────────

export type Product = {
  id: string;
  name: string;
  category: "Gold" | "Silver" | "92.5 Silver" | "1gm Gold Plated";
  description: string;
  details: string;
  priceRange?: string;
  image: string;
};

export const categories = [
  "All",
  "Gold",
  "Silver",
  "92.5 Silver",
  "1gm Gold Plated",
] as const;

export const products: Product[] = [
  // ── GOLD (8) ────────────────────────────────────────────────────
  {
    id: "gold-ruby-halo-ring",
    name: "Regal Oval Ruby Halo Gold Ring with Filigree Detailing",
    category: "Gold",
    description:
      "Exquisitely crafted in 22kt yellow gold, this stunning statement ring features an oval ruby centrepiece surrounded by a halo of sparkling CZ stones with intricate filigree detailing.",
    details:
      "Exquisitely crafted in 22kt yellow gold, this stunning statement ring features an oval ruby centrepiece surrounded by a halo of sparkling cubic zirconia stones. The band is adorned with delicate filigree detailing, a hallmark of traditional Indian goldsmithing. A bold yet refined piece for festive occasions and bridal styling.",
    priceRange: "On request",
    image: gold1,
  },
  {
    id: "gold-emerald-floral-ring",
    name: "Royal Emerald Floral Filigree Gold Ring",
    category: "Gold",
    description:
      "An exquisite masterpiece of traditional Indian craftsmanship, this gold ring features a lush floral design set with deep green emeralds and delicate filigree work.",
    details:
      "An exquisite masterpiece of traditional Indian craftsmanship, this 22kt yellow gold ring features a lush floral design encrusted with deep green emeralds and sparkling CZ accents. Intricate filigree work surrounds the central cluster, creating a piece that celebrates heritage artistry. Perfect for special occasions and bridal wear.",
    priceRange: "On request",
    image: gold2,
  },
  {
    id: "gold-filigree-dangle-earrings",
    name: "Aura Traditional 22kt Gold Filigree Dangle Earrings",
    category: "Gold",
    description:
      "Exquisitely crafted in 22-karat yellow gold, these stunning dangle earrings showcase intricate filigree work and traditional Indian craftsmanship.",
    details:
      "Exquisitely crafted in 22-karat yellow gold, these stunning dangle earrings showcase intricate filigree work, gemstone accents, and cascading gold drops. The layered chandelier design draws from centuries of traditional Indian goldsmithing. A statement piece for weddings, festivals, and special celebrations.",
    priceRange: "On request",
    image: gold3,
  },
  {
    id: "gold-floral-teardrop-earrings",
    name: "Elegant 22k Gold Floral Teardrop Earrings",
    category: "Gold",
    description:
      "Exquisitely crafted with a delicate floral motif enclosed in a stone-encrusted teardrop frame with a hanging pearl drop.",
    details:
      "Exquisitely crafted in 22k yellow gold, these elegant teardrop earrings feature a delicate floral motif enclosed in a stone-encrusted frame. A graceful pearl drop hangs below, adding refined movement. The combination of gold, gemstones, and pearl creates a timeless piece ideal for weddings and festive occasions.",
    priceRange: "On request",
    image: gold4,
  },
  {
    id: "gold-bead-bali-earrings",
    name: "Traditional 22k Gold Textured Bead Bali Earrings",
    category: "Gold",
    description:
      "A charming pair of 22k yellow gold bali earrings featuring intricate textured bead detailing along the hoop.",
    details:
      "A charming pair of 22k yellow gold bali earrings featuring intricate textured bead detailing along the hoop. The classic circular design is elevated with hand-finished granulation work, making these a versatile choice for both daily wear and festive occasions. Lightweight and comfortable for all-day styling.",
    priceRange: "On request",
    image: gold5,
  },
  {
    id: "gold-mini-bali-cz-earrings",
    name: "Charming 22k Gold Mini Bali Earrings with CZ Drops",
    category: "Gold",
    description:
      "Adorn your everyday look with these exquisite 22k yellow gold mini huggie earrings featuring delicate CZ-set drops.",
    details:
      "Adorn your everyday look with these exquisite 22k yellow gold mini huggie bali earrings. Each hoop features fine textured detailing and is adorned with a sparkling cubic zirconia drop pendant. Lightweight and effortlessly chic, these earrings transition beautifully from casual to formal styling.",
    priceRange: "On request",
    image: gold6,
  },
  {
    id: "gold-teardrop-om-pendant",
    name: "Divine Teardrop Om Two-Tone Gold Pendant",
    category: "Gold",
    description:
      "Embodying spirituality and elegance, this stunning gold pendant features a teardrop silhouette with an Om symbol rendered in two-tone gold.",
    details:
      "Embodying spirituality and elegance, this stunning 22k gold pendant features a teardrop silhouette with an Om symbol rendered in contrasting two-tone gold. The combination of yellow and rose-tone gold creates a visually striking spiritual ornament. A meaningful gift and a timeless everyday piece.",
    priceRange: "On request",
    image: gold7,
  },
  {
    id: "gold-marquise-cz-pendant-set",
    name: "Elegant Marquise CZ Gold Pendant Set",
    category: "Gold",
    description:
      "Adorn yourself with the timeless grace of this stunning 22k gold pendant and earring set featuring a marquise CZ design.",
    details:
      "Adorn yourself with the timeless grace of this stunning 22k gold pendant and earring set. The centrepiece features a marquise-shaped cubic zirconia framed in hand-finished gold, accompanied by a matching pair of stud earrings. A coordinated set that offers understated luxury for everyday and special occasion wear.",
    priceRange: "On request",
    image: gold8,
  },

  // ── SILVER (8) ──────────────────────────────────────────────────
  {
    id: "silver-rajputana-payal-toe-rings",
    name: "Rajputana Heritage Oxidized Silver Payal with Attached Toe Rings",
    category: "Silver",
    description:
      "An exquisite celebration of traditional craftsmanship, this heavy oxidized silver payal features an attached toe ring for a complete heritage look.",
    details:
      "An exquisite celebration of traditional craftsmanship, this heavy oxidized silver payal features intricate hand-engraved motifs, layered chains, and attached silver toe rings. The bold Rajputana-inspired design is a stunning tribute to Indian heritage jewellery, perfect for bridal ceremonies and festive occasions.",
    priceRange: "On request",
    image: silver1,
  },
  {
    id: "silver-elephant-payal",
    name: "Royal Elephant Motif Oxidized Silver Payal",
    category: "Silver",
    description:
      "Embrace timeless Indian heritage with these exquisite oxidized silver payals featuring intricate elephant motifs and layered chain detailing.",
    details:
      "Embrace timeless Indian heritage with these exquisite oxidized silver payals featuring intricate elephant motifs, floral patterns, and multi-layered chain detailing. Crafted with fine silver work, this pair of anklets carries the grandeur of traditional Indian jewellery. A treasured piece for bridal and festive occasions.",
    priceRange: "On request",
    image: silver2,
  },
  {
    id: "silver-elephant-kamar-chabi",
    name: "Royal Elephant Motif Oxidized Silver Kamar Chabi Chhalla",
    category: "Silver",
    description:
      "Enhance your traditional attire with this majestic oxidized silver waist keychain featuring regal elephant motifs and cascading chains.",
    details:
      "Enhance your traditional attire with this majestic oxidized silver Kamar Chabi Chhalla featuring regal elephant motifs, intricate floral work, and beautifully cascading chains with hanging charms. A statement waist accessory that adds dramatic elegance to sarees and lehengas for bridal and festive styling.",
    priceRange: "On request",
    image: silver3,
  },
  {
    id: "silver-peacock-saree-chabi",
    name: "Traditional Peacock Kundan Silver Saree Chabi Challa",
    category: "Silver",
    description:
      "Adorn your waistline with this exquisite oxidised silver Chabi Challa, beautifully designed with peacock motifs and Kundan stone accents.",
    details:
      "Adorn your waistline with this exquisite oxidised silver Chabi Challa, beautifully designed with peacock motifs and Kundan stone accents. The cascading chain design with decorative drops creates a regal statement. An essential bridal accessory that adds grandeur and traditional charm to sarees and lehengas.",
    priceRange: "On request",
    image: silver4,
  },
  {
    id: "silver-vedic-saree-chabi",
    name: "Vedic Heritage Oxidized Silver Multi-Strand Saree Chabi Challa",
    category: "Silver",
    description:
      "An exquisite masterpiece of traditional craftsmanship, this premium oxidized silver Saree Chabi Challa features multi-strand layered chains.",
    details:
      "An exquisite masterpiece of traditional craftsmanship, this premium oxidized silver Saree Chabi Challa features multi-strand layered chains with intricate floral and geometric motifs. The cascading design with decorative drops creates a dramatic statement accessory. Ideal for bridal ceremonies and festive occasions.",
    priceRange: "On request",
    image: silver5,
  },
  {
    id: "silver-multichain-hair-brooch",
    name: "Royal Heritage Oxidized Silver Multi-Chain Hair Brooch",
    category: "Silver",
    description:
      "A regal oxidized silver hair accessory featuring five layered chains with decorative drops and intricate traditional motifs.",
    details:
      "A regal oxidized silver hair accessory featuring five layered chains adorned with intricate traditional motifs and decorative drops. This exquisite multi-chain hair brooch is crafted with fine silverwork that celebrates Indian heritage artistry. A stunning bridal hair accessory that adds dramatic elegance to any traditional ensemble.",
    priceRange: "On request",
    image: silver6,
  },
  {
    id: "silver-cz-enamel-statement-rings",
    name: "Aura of Royalty: CZ and Enamel Silver Statement Rings",
    category: "Silver",
    description:
      "Adorn your fingers with the regal charm of these meticulously crafted sterling silver statement rings featuring CZ stones and vibrant enamel work.",
    details:
      "Adorn your fingers with the regal charm of these meticulously crafted sterling silver statement rings. Featuring sparkling CZ stones set in intricate patterns alongside vibrant enamel accents, these rings are a bold expression of traditional Indian artistry. Available in multiple designs, perfect for layering or wearing solo.",
    priceRange: "On request",
    image: silver7,
  },
  {
    id: "silver-floral-trio-bichhiya",
    name: "Ethnic Floral Trio-Color Oxidized Silver Bichhiya",
    category: "Silver",
    description:
      "Enhance your traditional charm with these beautifully crafted oxidized silver toe rings featuring a floral design in tri-color finish.",
    details:
      "Enhance your traditional charm with these beautifully crafted oxidized silver bichhiya (toe rings) featuring a floral design rendered in a stunning tri-color finish. The combination of oxidized silver, gold tone, and coloured enamel creates a vibrant yet ethnic look. Adjustable for a comfortable fit, perfect for daily and bridal wear.",
    priceRange: "On request",
    image: silver8,
  },

  // ── 92.5 SILVER (4) ─────────────────────────────────────────────
  {
    id: "925-princess-cut-bracelet",
    name: "Vogue Princess-Cut Halo 92.5 Silver Bracelet",
    category: "92.5 Silver",
    description:
      "An exquisite sterling silver link bracelet featuring brilliant princess-cut cubic zirconia stones set in elegant halo settings.",
    details:
      "An exquisite sterling silver link bracelet featuring brilliant princess-cut cubic zirconia stones set in elegant halo settings. Crafted in BIS-hallmarked 92.5 sterling silver, this bracelet combines modern luxury with timeless elegance. The sparkling stones catch the light beautifully, making it a perfect gift or everyday luxury piece.",
    priceRange: "On request",
    image: silver925_1,
  },
  {
    id: "925-baguette-cuban-bracelet",
    name: "Icy Baguette Cuban 92.5 Sterling Silver Bracelet",
    category: "92.5 Silver",
    description:
      "Make a bold, sophisticated statement with this premium 92.5 sterling silver Cuban link bracelet set with icy baguette cubic zirconia stones.",
    details:
      "Make a bold, sophisticated statement with this premium 92.5 sterling silver Cuban link bracelet set with icy baguette cubic zirconia stones. The chunky Cuban link design combined with the brilliant stone setting creates a contemporary luxury piece. BIS-hallmarked for guaranteed purity, ideal for gifting and special occasions.",
    priceRange: "On request",
    image: silver925_2,
  },
  {
    id: "925-curb-link-chain",
    name: "Classic 92.5 Sterling Silver Curb Link Chain",
    category: "92.5 Silver",
    description:
      "A timeless testament to minimalist elegance, this premium 92.5 sterling silver curb link chain offers understated sophistication.",
    details:
      "A timeless testament to minimalist elegance, this premium 92.5 sterling silver curb link chain offers understated sophistication. The classic flat interlocking links are polished to a mirror finish, creating a versatile chain that can be worn solo or layered with pendants. BIS-hallmarked for guaranteed quality and purity.",
    priceRange: "On request",
    image: silver925_3,
  },
  {
    id: "925-radiant-solitaire-mangalsutra",
    name: "Modern Radiant Solitaire 92.5 Sterling Silver Mangalsutra",
    category: "92.5 Silver",
    description:
      "A beautiful fusion of traditional sentiment and contemporary style, this 92.5 sterling silver mangalsutra features a radiant solitaire pendant.",
    details:
      "A beautiful fusion of traditional sentiment and contemporary style, this 92.5 sterling silver mangalsutra features a radiant solitaire cubic zirconia pendant on a delicate chain. The minimalist design honours the mangalsutra's sacred significance while offering modern everyday wearability. BIS-hallmarked for guaranteed silver purity.",
    priceRange: "On request",
    image: silver925_4,
  },

  // ── 1GM GOLD PLATED (4) ─────────────────────────────────────────
  {
    id: "plated-pendant-set",
    name: "1gm Gold Plated Pendant Set",
    category: "1gm Gold Plated",
    description: "A graceful pendant set with a rich gold-plated finish.",
    details:
      "A graceful 1gm gold plated pendant set featuring a sparkling solitaire pendant on a delicate chain. The rich gold-plated finish gives the look of fine jewellery at an accessible price point. Anti-tarnish coating ensures long-lasting shine for everyday wear.",
    priceRange: "On request",
    image: platedBangles,
  },
  {
    id: "plated-statement-ring",
    name: "1gm Gold Plated Ring",
    category: "1gm Gold Plated",
    description: "A bold ring crafted with premium 1gm gold plating.",
    details:
      "A bold ring crafted with premium 1gm gold plating and a sparkling solitaire CZ centre stone. The elegant prong setting showcases the stone beautifully, offering the look of a diamond engagement ring at a fraction of the cost. Anti-tarnish coating for lasting wear.",
    priceRange: "On request",
    image: platedRings,
  },
  {
    id: "plated-bridal-necklace",
    name: "1gm Gold Plated Bridal Necklace",
    category: "1gm Gold Plated",
    description: "A statement bridal-style necklace with rich gold plating.",
    details:
      "A statement bridal-style 1gm gold plated necklace featuring a sparkling solitaire pendant on a layered chain. The rich gold-plated finish and brilliant CZ centrepiece create a luxurious bridal look. Lightweight and comfortable for extended wear at weddings and special occasions.",
    priceRange: "On request",
    image: platedNecklaces,
  },
  {
    id: "plated-jhumkas",
    name: "1gm Gold Plated Jhumkas",
    category: "1gm Gold Plated",
    description: "Festive jhumka earrings with premium gold plating.",
    details:
      "Festive 1gm gold plated jhumka earrings featuring a sparkling solitaire stud design. The brilliant CZ stone set in a gold-plated prong setting creates an effortlessly elegant look. Lightweight and comfortable, perfect for both everyday wear and special occasions.",
    priceRange: "On request",
    image: platedEarrings,
  },
];

export const getProductById = (id: string) =>
  products.find((p) => p.id === id);
