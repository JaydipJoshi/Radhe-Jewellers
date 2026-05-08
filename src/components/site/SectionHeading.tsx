import { motion } from "framer-motion";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

const SectionHeading = ({ eyebrow, title, subtitle, align = "center", className = "" }: Props) => {
  const alignClass = align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col gap-4 max-w-2xl ${align === "center" ? "mx-auto" : ""} ${alignClass} ${className}`}
    >
      {eyebrow && (
        <span className="text-[11px] uppercase tracking-[0.32em] text-muted-foreground">{eyebrow}</span>
      )}
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-balance">{title}</h2>
      {subtitle && <p className="text-muted-foreground leading-relaxed text-balance">{subtitle}</p>}
    </motion.div>
  );
};

export default SectionHeading;
