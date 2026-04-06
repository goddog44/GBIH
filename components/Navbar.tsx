"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#accueil", labelFr: "Accueil", labelEn: "Home" },
  { href: "#apropos", labelFr: "À propos", labelEn: "About" },
  { href: "#services", labelFr: "Services", labelEn: "Services" },
  { href: "#realisations", labelFr: "Réalisations", labelEn: "Projects" },
  { href: "#partenaires", labelFr: "Partenaires", labelEn: "Partners" },
  { href: "#contact", labelFr: "Contact", labelEn: "Contact" },
];

export default function Navbar({ lang, onLangToggle }: { lang: "fr" | "en"; onLangToggle: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.4s, box-shadow 0.4s",
        background: scrolled ? "rgba(10,15,30,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,168,76,0.15)" : "none",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        {/* Logo */}
        <a href="#accueil" style={{ textDecoration: "none", display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "1.35rem", color: "#c9a84c", letterSpacing: "0.08em" }}>GBIH</span>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.6rem", color: "rgba(255,255,255,0.5)", letterSpacing: "0.25em", textTransform: "uppercase" }}>Filiale 747</span>
        </a>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="hidden md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "0.78rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "color 0.2s",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 400,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
            >
              {lang === "fr" ? l.labelFr : l.labelEn}
            </a>
          ))}

          <button
            onClick={onLangToggle}
            style={{
              background: "transparent",
              border: "1px solid rgba(201,168,76,0.4)",
              color: "#c9a84c",
              padding: "0.3rem 0.75rem",
              borderRadius: 2,
              cursor: "pointer",
              fontSize: "0.72rem",
              letterSpacing: "0.2em",
              fontFamily: "'DM Sans', sans-serif",
              transition: "all 0.2s",
            }}
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>
        </div>

        {/* Mobile */}
        <button onClick={() => setOpen(!open)} style={{ background: "none", border: "none", cursor: "pointer", color: "#c9a84c", display: "none" }} className="block md:hidden">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "rgba(10,15,30,0.98)", borderTop: "1px solid rgba(201,168,76,0.15)", padding: "1.5rem 2rem" }}>
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "0.75rem 0",
                color: "rgba(255,255,255,0.8)",
                fontSize: "0.85rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderBottom: "1px solid rgba(201,168,76,0.08)",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {lang === "fr" ? l.labelFr : l.labelEn}
            </a>
          ))}
          <button onClick={onLangToggle} style={{ marginTop: "1rem", background: "transparent", border: "1px solid rgba(201,168,76,0.4)", color: "#c9a84c", padding: "0.4rem 1rem", borderRadius: 2, cursor: "pointer", fontSize: "0.75rem", letterSpacing: "0.2em", fontFamily: "'DM Sans', sans-serif" }}>
            {lang === "fr" ? "EN" : "FR"}
          </button>
        </div>
      )}
    </nav>
  );
}
