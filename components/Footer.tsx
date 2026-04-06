"use client";

export default function Footer({ lang }: { lang: "fr" | "en" }) {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#060a13", borderTop: "1px solid rgba(201,168,76,0.12)", padding: "3rem 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "3rem", marginBottom: "2.5rem" }}>
          {/* Brand */}
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "1.5rem", color: "#c9a84c", letterSpacing: "0.08em", marginBottom: "0.35rem" }}>GBIH</div>
            <div style={{ fontSize: "0.62rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "1rem" }}>Global Business International Holding · Filiale 747</div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.85rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.7, maxWidth: 280 }}>
              {lang === "fr"
                ? "Construction, réhabilitation d'infrastructures et acquisition d'équipements. Yaoundé, Cameroun."
                : "Infrastructure construction, rehabilitation and equipment acquisition. Yaoundé, Cameroon."}
            </p>
          </div>

          {/* Links col 1 */}
          <div>
            <div style={{ fontSize: "0.68rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.25rem", fontFamily: "'DM Sans', sans-serif" }}>
              {lang === "fr" ? "Navigation" : "Navigation"}
            </div>
            {(lang === "fr"
              ? ["Accueil", "À propos", "Services", "Réalisations"]
              : ["Home", "About", "Services", "Projects"]).map((l, i) => (
              <a key={i} href={`#${["accueil","apropos","services","realisations"][i]}`}
                style={{ display: "block", fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.4)", textDecoration: "none", marginBottom: "0.6rem", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
              >{l}</a>
            ))}
          </div>

          {/* Links col 2 */}
          <div>
            <div style={{ fontSize: "0.68rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.25rem", fontFamily: "'DM Sans', sans-serif" }}>
              {lang === "fr" ? "Autres" : "More"}
            </div>
            {(lang === "fr"
              ? ["Partenaires", "Contact", "Espace client"]
              : ["Partners", "Contact", "Client portal"]).map((l, i) => (
              <a key={i} href={`#${["partenaires","contact","contact"][i]}`}
                style={{ display: "block", fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.4)", textDecoration: "none", marginBottom: "0.6rem", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
              >{l}</a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: "0.68rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.25rem", fontFamily: "'DM Sans', sans-serif" }}>
              {lang === "fr" ? "Contacts" : "Contacts"}
            </div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.9 }}>
              <div>Yaoundé, Cameroun</div>
              <div>+237 000 000 000</div>
              <div>contact@gbih-747.com</div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: "1px solid rgba(201,168,76,0.08)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.25)" }}>
            © {year} GBIH · Filiale 747. {lang === "fr" ? "Tous droits réservés." : "All rights reserved."}
          </span>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["LinkedIn", "Facebook"].map((s) => (
              <a key={s} href="#" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", letterSpacing: "0.12em", color: "rgba(255,255,255,0.25)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.25)")}
              >{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
