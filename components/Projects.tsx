"use client";

const content = {
  fr: {
    tag: "Nos Réalisations",
    headline: "Des Projets Qui\nParent d'Eux-mêmes",
    sub: "Un portefeuille de projets en cours de constitution — nos premières réalisations témoignent de notre capacité d'exécution et de notre standard d'excellence.",
    badge: "Photos à venir",
    projects: [
      { cat: "Construction", title: "Bâtiment Administratif", location: "Yaoundé, Cameroun", status: "Livré" },
      { cat: "Réhabilitation", title: "Rénovation de Complexe", location: "Centre, Cameroun", status: "En cours" },
      { cat: "Équipements", title: "Acquisition & Livraison", location: "National", status: "Réalisé" },
    ],
  },
  en: {
    tag: "Our Projects",
    headline: "Projects That\nSpeak for Themselves",
    sub: "A portfolio under construction — our first achievements demonstrate our execution capability and standard of excellence.",
    badge: "Photos coming soon",
    projects: [
      { cat: "Construction", title: "Administrative Building", location: "Yaoundé, Cameroon", status: "Delivered" },
      { cat: "Rehabilitation", title: "Complex Renovation", location: "Centre, Cameroon", status: "Ongoing" },
      { cat: "Equipment", title: "Acquisition & Delivery", location: "National", status: "Completed" },
    ],
  },
};

export default function Projects({ lang }: { lang: "fr" | "en" }) {
  const t = content[lang];

  return (
    <section id="realisations" style={{ padding: "7rem 0", background: "#f9f6f0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
          <div style={{ width: 40, height: 1, background: "#c9a84c" }} />
          <span style={{ fontSize: "0.72rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#c9a84c", fontFamily: "'DM Sans', sans-serif" }}>{t.tag}</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start", marginBottom: "4rem" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(2.2rem, 4vw, 3.25rem)", color: "#0a0f1e", lineHeight: 1.1, whiteSpace: "pre-line" }}>
            {t.headline}
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.95rem", color: "#374151", lineHeight: 1.8, paddingTop: "0.5rem" }}>{t.sub}</p>
        </div>

        {/* Project cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", marginBottom: "3rem" }}>
          {t.projects.map((p, i) => (
            <div key={i} style={{ background: "#fff", border: "1px solid rgba(201,168,76,0.15)", overflow: "hidden" }}>
              {/* Image placeholder */}
              <div
                style={{
                  height: 200,
                  background: `linear-gradient(135deg, #0a0f1e ${i * 10}%, #111827)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ opacity: 0.18 }}>
                  <rect x="6" y="18" width="36" height="24" rx="1" stroke="#c9a84c" strokeWidth="1.5" />
                  <path d="M6 22L24 10L42 22" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" />
                  <rect x="18" y="30" width="12" height="12" stroke="#c9a84c" strokeWidth="1.2" />
                </svg>
                <div style={{ position: "absolute", top: "0.75rem", right: "0.75rem", background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.3)", padding: "0.2rem 0.6rem" }}>
                  <span style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c", fontFamily: "'DM Sans', sans-serif" }}>{t.badge}</span>
                </div>
              </div>
              <div style={{ padding: "1.5rem" }}>
                <div style={{ fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "0.5rem", fontFamily: "'DM Sans', sans-serif" }}>{p.cat}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.25rem", fontWeight: 600, color: "#0a0f1e", marginBottom: "0.5rem" }}>{p.title}</h3>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.8rem", color: "#9ca3af", fontFamily: "'DM Sans', sans-serif" }}>{p.location}</span>
                  <span style={{ fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#374151", fontFamily: "'DM Sans', sans-serif", borderLeft: "2px solid #c9a84c", paddingLeft: "0.5rem" }}>{p.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <a
            href="#contact"
            style={{
              display: "inline-block",
              border: "1px solid #0a0f1e",
              color: "#0a0f1e",
              padding: "0.85rem 2.25rem",
              fontSize: "0.78rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              textDecoration: "none",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 400,
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#0a0f1e"; e.currentTarget.style.color = "#f9f6f0"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#0a0f1e"; }}
          >
            {lang === "fr" ? "Discuter d'un projet" : "Discuss a project"}
          </a>
        </div>
      </div>
    </section>
  );
}
