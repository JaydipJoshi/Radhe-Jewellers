import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle, Clock, Mail } from "lucide-react";
import { ADDRESS, PHONE_NUMBER, PHONE_TEL, MAPS_QUERY, whatsappLink } from "@/lib/whatsapp";

const ContactPage = () => {
  return (
    <div>
      <section className="container-luxe pt-14 md:pt-20 pb-10 max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="text-[11px] uppercase tracking-[0.32em] text-muted-foreground">Contact</span>
          <h1 className="font-serif text-4xl md:text-5xl mt-4 leading-tight">We're here, in Ahmedabad.</h1>
          <p className="text-muted-foreground mt-5 leading-relaxed">
            Visit our boutique, give us a ring, or message us on WhatsApp — whichever feels easiest.
          </p>
        </motion.div>
      </section>

      <section className="container-luxe pb-24 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7 }} className="bg-card rounded-2xl border border-border/40 p-8 md:p-10 shadow-soft">
          <ul className="space-y-7">
            <li className="flex gap-4">
              <span className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-primary" strokeWidth={1.5} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Address</p>
                <p className="mt-1.5">{ADDRESS}</p>
                <a href={`https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`} target="_blank" rel="noopener noreferrer"
                  className="inline-block mt-2 text-sm border-b border-foreground/30 hover:border-foreground transition-colors">
                  Get directions
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                <Phone size={18} className="text-primary" strokeWidth={1.5} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Phone</p>
                <a href={`tel:${PHONE_TEL}`} className="mt-1.5 block hover:text-primary transition-colors">{PHONE_NUMBER}</a>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                <MessageCircle size={18} className="text-primary" strokeWidth={1.5} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">WhatsApp</p>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="mt-1.5 block hover:text-primary transition-colors">
                  Chat with us — usually replies in minutes
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                <Clock size={18} className="text-primary" strokeWidth={1.5} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Store Hours</p>
                <p className="mt-1.5">Mon – Sun · 10:00 AM – 8:30 PM</p>
                <p className="text-sm text-muted-foreground">Open all days</p>
              </div>
            </li>
          </ul>

          <div className="flex flex-wrap gap-3 mt-10 pt-8 border-t border-border/60">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 rounded-full text-sm hover:bg-foreground/90 transition-colors">
              <MessageCircle size={16} /> WhatsApp
            </a>
            <a href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 border border-foreground/80 px-6 py-3.5 rounded-full text-sm hover:bg-foreground hover:text-background transition-colors">
              <Phone size={16} /> Call now
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }} className="rounded-2xl overflow-hidden border border-border/40 shadow-soft min-h-[420px]">
          <iframe
            title="Dhara Jewellers location"
            src={`https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`}
            className="w-full h-full min-h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </section>
    </div>
  );
};

export default ContactPage;
