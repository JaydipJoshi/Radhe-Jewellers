import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

const links = [
  { to: "/", label: "Home" },
  { to: "/collection", label: "Collection" },
  { to: "/repair", label: "Repair" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur-md border-b border-border/60">
      <div className="container-luxe flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex flex-col items-start leading-none" onClick={() => setOpen(false)}>
          <span className="font-serif italic text-2xl md:text-3xl tracking-wide text-foreground">
            Radhe <span className="text-accent">Jewellers</span>
          </span>
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-muted-foreground mt-1.5">
            Ahmedabad <span className="text-accent">·</span> Est&nbsp;2014
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-6 xl:gap-9">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `text-sm tracking-wide transition-colors ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center text-sm border border-foreground/80 px-5 py-2.5 rounded-full hover:bg-foreground hover:text-background transition-colors whitespace-nowrap"
        >
          Chat on WhatsApp
        </a>
        <button
          className="lg:hidden p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border/60 animate-fade-in">
          <div className="container-luxe py-4 flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-3 text-base ${isActive ? "text-foreground" : "text-muted-foreground"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center text-sm bg-foreground text-background px-5 py-3 rounded-full"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
