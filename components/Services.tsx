"use client";
import { Building2, Wrench, Package, Handshake, Globe, Users } from "lucide-react";

const services = {
  fr: [
    { icon: Building2, title: "Construction d'Infrastructures", desc: "Conception et réalisation de bâtiments résidentiels, commerciaux et industriels selon les normes internationales." },
    { icon: Wrench, title: "Réhabilitation", desc: "Remise en état et modernisation d'infrastructures existantes pour les rendre conformes aux standards actuels." },
    { icon: Package, title: "Fourniture d'Équipements", desc: "Acquisition, importation et livraison de matériaux et équipements de construction de haute qualité." },
    { icon: Handshake, title: "Identification de Partenaires", desc: "Mise en relation avec des partenaires stratégiques locaux et internationaux pour la réalisation de projets d'envergure." },
    { icon: Globe, title: "Marchés Internationaux", desc: "Accompagnement à l'accès aux appels d'offres internationaux et aux marchés publics étrangers." },
    { icon: Users, title: "Conseil & Assistance", desc: "Conseil en montage de projets, gestion de chantiers et optimisation des ressources pour clients publics et privés." },
  ],
  en: [
    { icon: Building2, title: "Infrastructure Construction", desc: "Design and construction of residential, commercial and industrial buildings to international standards." },
    { icon: Wrench, title: "Rehabilitation", desc: "Restoration and modernization of existing infrastructures to bring them up to current standards." },
    { icon: Package, title: "Equipment Supply", desc: "Acquisition, import and delivery of high-quality construction materials and equipment." },
    { icon: Handshake, title: "Partner Identification", desc: "Connecting with strategic local and international partners for large-scale project execution." },
    { icon: Globe, title: "International Markets", desc: "Guidance for accessing international tenders and foreign public markets." },
    { icon: Users, title: "Consulting & Assistance", desc: "Advice on project development, site management and resource optimization for public and private clients." },
  ],
};

export default function Services({ lang }: { lang: "fr" | "en" }) {
  const items = services[lang];
  const tag = lang === "fr" ? "Nos Services" : "Our Services";
  const headline = lang === "fr" ? "Ce Que Nous\nSavons Faire" : "What We\nDo Best";

  return (
    <section id="services" style={{ padding: "7rem 0", background: "#0a0f1e", position: "relative", overflow: "hidden" }}>
      {/* Background pattern */}
      <svg viewBox="0 0 800 800" style={{ position: "absolute", right: -200, top: -200, width: "60%", opacity: 0.04, pointerEvents: "none" }}>
        <circle cx="400" cy="400" r="350" fill="none" stroke="#c9a84c" strokeWidth="1" />
        <circle cx="400" cy="400" r="250" fill="none" stroke="#c9a84c" strokeWidth="0.5" />
        <circle cx="400" cy="400" r="150" fill="none" stroke="#c9a84c" strokeWidth="0.5" />
      </svg>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem", position: "relative" }}>
        {/* Header */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", marginBottom: "5rem", alignItems: "end" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
              <div style={{ width: 40, height: 1, background: "#c9a84c" }} />
              <span style={{ fontSize: "0.72rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#c9a84c", fontFamily: "'DM Sans', sans-serif" }}>{tag}</span>
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(2.2rem, 4vw, 3.5rem)", color: "#f9f6f0", lineHeight: 1.1, whiteSpace: "pre-line" }}>
              {headline}
            </h2>
          </div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.95rem", color: "rgba(249,246,240,0.55)", lineHeight: 1.8 }}>
            {lang === "fr"
              ? "De la construction à l'acquisition d'équipements, en passant par l'identification de partenaires stratégiques — GBIH et sa filiale 747 couvrent l'ensemble du cycle de réalisation de vos projets."
              : "From construction to equipment acquisition, including strategic partner identification — GBIH and its subsidiary 747 cover the full project delivery cycle."}
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "rgba(201,168,76,0.1)" }}>
          {items.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                style={{
                  background: "#0a0f1e",
                  padding: "2.5rem",
                  transition: "background 0.3s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#0d1628")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#0a0f1e")}
              >
                <div style={{ marginBottom: "1.25rem", width: 40, height: 40, border: "1px solid rgba(201,168,76,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon size={18} color="#c9a84c" strokeWidth={1.2} />
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "1.25rem", color: "#f9f6f0", marginBottom: "0.75rem" }}>{s.title}</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.88rem", color: "rgba(249,246,240,0.5)", lineHeight: 1.75 }}>{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
