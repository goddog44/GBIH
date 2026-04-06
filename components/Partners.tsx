"use client";
import { Globe, Award, TrendingUp } from "lucide-react";

const content = {
  fr: {
    tag: "Partenaires",
    headline: "Construisons\nEnsemble",
    sub: "GBIH recherche activement des partenaires stratégiques — investisseurs, bureaux d'études, entrepreneurs locaux et institutions internationales — prêts à co-développer des projets d'envergure en Afrique et à l'international.",
    cta: "Devenir partenaire",
    items: [
      { icon: Globe, title: "Portée Internationale", text: "Accès à des réseaux de partenaires en Afrique, en Europe et au-delà." },
      { icon: Award, title: "Standards Reconnus", text: "Projets menés selon les normes et réglementations internationales." },
      { icon: TrendingUp, title: "Croissance Mutuelle", text: "Des partenariats pensés pour créer de la valeur à long terme." },
    ],
  },
  en: {
    tag: "Partners",
    headline: "Let's Build\nTogether",
    sub: "GBIH actively seeks strategic partners — investors, engineering firms, local entrepreneurs and international institutions — ready to co-develop large-scale projects in Africa and beyond.",
    cta: "Become a partner",
    items: [
      { icon: Globe, title: "International Reach", text: "Access to partner networks across Africa, Europe and beyond." },
      { icon: Award, title: "Recognized Standards", text: "Projects carried out according to international norms and regulations." },
      { icon: TrendingUp, title: "Mutual Growth", text: "Partnerships designed to create long-term value." },
    ],
  },
};

export default function Partners({ lang }: { lang: "fr" | "en" }) {
  const t = content[lang];

  return (
    <section id="partenaires" style={{ padding: "7rem 0", background: "#0a0f1e", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", left: -100, bottom: -100, width: 500, height: 500, border: "1px solid rgba(201,168,76,0.06)", borderRadius: "50%", pointerEvents: "none" }} />
      <div style={{ position: "absolute", left: -50, bottom: -50, width: 350, height: 350, border: "1px solid rgba(201,168,76,0.06)", borderRadius: "50%", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem", position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
              <div style={{ width: 40, height: 1, background: "#c9a84c" }} />
              <span style={{ fontSize: "0.72rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#c9a84c", fontFamily: "'DM Sans', sans-serif" }}>{t.tag}</span>
            </div>

            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(2.2rem, 4vw, 3.25rem)", color: "#f9f6f0", lineHeight: 1.1, whiteSpace: "pre-line", marginBottom: "1.75rem" }}>
              {t.headline}
            </h2>

            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.95rem", color: "rgba(249,246,240,0.55)", lineHeight: 1.8, marginBottom: "2.5rem" }}>
              {t.sub}
            </p>

            <a
              href="#contact"
              style={{
                display: "inline-block",
                background: "#c9a84c",
                color: "#0a0f1e",
                padding: "0.85rem 2.25rem",
                fontSize: "0.78rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                textDecoration: "none",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#e0bf7a")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#c9a84c")}
            >
              {t.cta}
            </a>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {t.items.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start", padding: "1.5rem", border: "1px solid rgba(201,168,76,0.12)", transition: "border-color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.35)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.12)")}
                >
                  <div style={{ flexShrink: 0, width: 36, height: 36, border: "1px solid rgba(201,168,76,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon size={16} color="#c9a84c" strokeWidth={1.2} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "1.1rem", color: "#f9f6f0", marginBottom: "0.4rem" }}>{item.title}</div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.88rem", color: "rgba(249,246,240,0.5)", lineHeight: 1.6 }}>{item.text}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
