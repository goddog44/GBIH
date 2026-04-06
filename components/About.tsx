"use client";

const content = {
  fr: {
    tag: "À propos",
    headline: "Une Vision Globale,\nUne Exécution Locale",
    body1: "Global Business International Holding (GBIH) est une structure d'affaires opérant à l'intersection des marchés locaux et internationaux, portée par une filiale opérationnelle — 747 — spécialisée dans le BTP et les services à forte valeur ajoutée.",
    body2: "Nous accompagnons aussi bien les acteurs privés que les administrations publiques dans la concrétisation de leurs projets d'infrastructure, d'équipement et de développement, en faisant le lien entre l'expertise locale et les standards internationaux.",
    values: [
      { label: "Fiabilité", text: "Nous honorons nos engagements avec rigueur et transparence." },
      { label: "Excellence", text: "Chaque projet est traité avec le plus haut niveau d'exigence." },
      { label: "Innovation", text: "Nous intégrons les meilleures pratiques mondiales à chaque mission." },
    ],
    stat1: "National & International",
    stat1sub: "Portée géographique",
    stat2: "BTP & Équipements",
    stat2sub: "Secteurs d'activité",
  },
  en: {
    tag: "About",
    headline: "Global Vision,\nLocal Execution",
    body1: "Global Business International Holding (GBIH) operates at the intersection of local and international markets, driven by its operational subsidiary — 747 — specialized in construction and high-value-added services.",
    body2: "We support both private actors and public administrations in realizing their infrastructure, equipment and development projects, bridging local expertise with international standards.",
    values: [
      { label: "Reliability", text: "We honor our commitments with rigor and transparency." },
      { label: "Excellence", text: "Every project is handled with the highest level of standards." },
      { label: "Innovation", text: "We integrate global best practices into every mission." },
    ],
    stat1: "National & International",
    stat1sub: "Geographic reach",
    stat2: "Construction & Equipment",
    stat2sub: "Core sectors",
  },
};

export default function About({ lang }: { lang: "fr" | "en" }) {
  const t = content[lang];

  return (
    <section id="apropos" style={{ padding: "7rem 0", background: "#f9f6f0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "start" }} className="grid-cols-1 lg:grid-cols-2">
          {/* Left */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
              <div style={{ width: 40, height: 1, background: "#c9a84c" }} />
              <span style={{ fontSize: "0.72rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#c9a84c", fontFamily: "'DM Sans', sans-serif" }}>{t.tag}</span>
            </div>

            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(2.2rem, 4vw, 3.25rem)", color: "#0a0f1e", marginBottom: "1.75rem", lineHeight: 1.1, whiteSpace: "pre-line" }}>
              {t.headline}
            </h2>

            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.95rem", color: "#374151", lineHeight: 1.8, marginBottom: "1.25rem" }}>{t.body1}</p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.95rem", color: "#374151", lineHeight: 1.8, marginBottom: "3rem" }}>{t.body2}</p>

            {/* Stats row */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
              {[{ v: t.stat1, s: t.stat1sub }, { v: t.stat2, s: t.stat2sub }].map((s, i) => (
                <div key={i} style={{ borderTop: "1px solid rgba(201,168,76,0.3)", paddingTop: "1rem" }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontWeight: 600, color: "#0a0f1e" }}>{s.v}</div>
                  <div style={{ fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#9ca3af", marginTop: "0.25rem", fontFamily: "'DM Sans', sans-serif" }}>{s.s}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — values */}
          <div style={{ paddingTop: "1rem" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "0", borderLeft: "1px solid rgba(201,168,76,0.2)" }}>
              {t.values.map((v, i) => (
                <div
                  key={i}
                  style={{
                    padding: "2rem 2.25rem",
                    borderBottom: "1px solid rgba(201,168,76,0.15)",
                    transition: "background 0.2s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(201,168,76,0.04)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.6rem" }}>
                    <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "#c9a84c" }}>0{i + 1}</span>
                    <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.35rem", fontWeight: 600, color: "#0a0f1e" }}>{v.label}</span>
                  </div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.9rem", color: "#64748b", lineHeight: 1.7 }}>{v.text}</p>
                </div>
              ))}
            </div>

            {/* Decorative */}
            <div style={{ marginTop: "2.5rem", display: "flex", alignItems: "center", gap: "1.25rem" }}>
              <div style={{ width: 48, height: 48, border: "1px solid rgba(201,168,76,0.35)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", fontWeight: 500, color: "#0a0f1e", letterSpacing: "0.05em" }}>GBIH · Filiale 747</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", color: "#9ca3af", letterSpacing: "0.05em" }}>Yaoundé, Cameroun</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
