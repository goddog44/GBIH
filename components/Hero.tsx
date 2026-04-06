"use client";

const content = {
  fr: {
    eyebrow: "Global Business International Holding",
    headline: "Bâtir l'Avenir,\nConnecter les\nOpportunités",
    sub: "Construction, réhabilitation d'infrastructures et acquisition d'équipements — de Yaoundé au monde entier.",
    cta1: "Nos services",
    cta2: "Nous contacter",
    scroll: "Défiler",
  },
  en: {
    eyebrow: "Global Business International Holding",
    headline: "Building the\nFuture, Connecting\nOpportunities",
    sub: "Infrastructure construction, rehabilitation, and equipment acquisition — from Yaoundé to the world.",
    cta1: "Our services",
    cta2: "Contact us",
    scroll: "Scroll",
  },
};

export default function Hero({ lang }: { lang: "fr" | "en" }) {
  const t = content[lang];

  return (
    <section
      id="accueil"
      style={{
        minHeight: "100vh",
        backgroundImage: "linear-gradient(160deg, rgba(10,15,30,0.9) 0%, rgba(13,22,40,0.85) 55%, rgba(17,24,39,0.95) 100%), url('/mslid1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Geometric background elements */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {/* Large arc */}
        <svg viewBox="0 0 1440 900" style={{ position: "absolute", right: -100, top: 0, width: "65%", opacity: 0.07 }} preserveAspectRatio="none">
          <circle cx="900" cy="450" r="380" fill="none" stroke="#c9a84c" strokeWidth="1" />
          <circle cx="900" cy="450" r="280" fill="none" stroke="#c9a84c" strokeWidth="0.5" />
          <circle cx="900" cy="450" r="180" fill="none" stroke="#c9a84c" strokeWidth="0.5" />
        </svg>
        {/* Diagonal lines */}
        <svg viewBox="0 0 600 600" style={{ position: "absolute", left: 0, bottom: 0, width: "35%", opacity: 0.04 }}>
          {Array.from({ length: 15 }).map((_, i) => (
            <line key={i} x1={i * 40} y1="0" x2="0" y2={i * 40} stroke="#c9a84c" strokeWidth="0.8" />
          ))}
        </svg>
        {/* Gold dot grid */}
        <svg viewBox="0 0 200 200" style={{ position: "absolute", right: "5%", bottom: "10%", width: "12%", opacity: 0.12 }}>
          {Array.from({ length: 5 }).map((_, r) =>
            Array.from({ length: 5 }).map((_, c) => (
              <circle key={`${r}-${c}`} cx={c * 40 + 20} cy={r * 40 + 20} r="1.5" fill="#c9a84c" />
            ))
          )}
        </svg>
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem", width: "100%", paddingTop: "7rem" }}>
        <div style={{ maxWidth: 760 }}>
          {/* Eyebrow */}
          <div className="animate-fade-up delay-1" style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.75rem" }}>
            <div style={{ width: 40, height: 1, background: "#c9a84c" }} />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#c9a84c", fontWeight: 400 }}>
              {t.eyebrow}
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up delay-2" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(3rem, 7vw, 5.5rem)", color: "#f9f6f0", lineHeight: 1.05, marginBottom: "1.75rem", whiteSpace: "pre-line" }}>
            {t.headline.split("\n").map((line, i) => (
              <span key={i} style={{ display: "block" }}>
                {i === 1 ? <em style={{ fontStyle: "italic", color: "#c9a84c" }}>{line}</em> : line}
              </span>
            ))}
          </h1>

          {/* Subtext */}
          <p className="animate-fade-up delay-3" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "1rem", color: "rgba(249,246,240,0.6)", maxWidth: 520, lineHeight: 1.75, marginBottom: "2.75rem" }}>
            {t.sub}
          </p>

          {/* CTAs */}
          <div className="animate-fade-up delay-4" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href="#services"
              style={{
                background: "#c9a84c",
                color: "#0a0f1e",
                padding: "0.85rem 2.25rem",
                fontSize: "0.78rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                textDecoration: "none",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                transition: "background 0.2s, transform 0.2s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#e0bf7a"; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#c9a84c"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              {t.cta1}
            </a>
            <a
              href="#contact"
              style={{
                border: "1px solid rgba(201,168,76,0.5)",
                color: "#f9f6f0",
                padding: "0.85rem 2.25rem",
                fontSize: "0.78rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                textDecoration: "none",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 400,
                transition: "border-color 0.2s, color 0.2s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#c9a84c"; e.currentTarget.style.color = "#c9a84c"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)"; e.currentTarget.style.color = "#f9f6f0"; }}
            >
              {t.cta2}
            </a>
          </div>
        </div>

        {/* Holding / Filiale badges */}
        <div className="animate-fade-up delay-5" style={{ position: "absolute", right: "5%", top: "50%", transform: "translateY(-50%)", display: "flex", flexDirection: "column", gap: "1.5rem" }} >
          <div style={{ border: "1px solid rgba(201,168,76,0.25)", padding: "1.25rem 2rem", textAlign: "center", background: "rgba(201,168,76,0.04)" }}>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, color: "#c9a84c", letterSpacing: "0.05em" }}>GBIH</div>
            <div style={{ fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(249,246,240,0.4)", marginTop: "0.25rem" }}>Holding</div>
          </div>
          <div style={{ border: "1px solid rgba(201,168,76,0.25)", padding: "1.25rem 2rem", textAlign: "center", background: "rgba(201,168,76,0.04)" }}>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, color: "#c9a84c", letterSpacing: "0.05em" }}>747</div>
            <div style={{ fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(249,246,240,0.4)", marginTop: "0.25rem" }}>Filiale</div>
          </div>
        </div>
      </div>

      {/* Bottom scroll hint */}
      <div style={{ position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <span style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(249,246,240,0.35)", fontFamily: "'DM Sans', sans-serif" }}>{t.scroll}</span>
        <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, rgba(201,168,76,0.6), transparent)" }} />
      </div>
    </section>
  );
}
