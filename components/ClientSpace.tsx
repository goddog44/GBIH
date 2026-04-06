"use client";
import { CalendarDays, Lock, FileText, Bell } from "lucide-react";

const content = {
  fr: {
    tag: "Espace Client",
    headline: "Votre Espace\nPersonnalisé",
    sub: "Suivez l'avancement de vos projets, accédez à vos documents contractuels et planifiez vos rendez-vous — depuis un espace sécurisé dédié.",
    features: [
      { icon: CalendarDays, title: "Prise de rendez-vous", text: "Réservez une consultation directement en ligne, sans appel téléphonique." },
      { icon: Lock, title: "Accès sécurisé", text: "Connexion protégée à votre dossier client personnel." },
      { icon: FileText, title: "Documents & Rapports", text: "Consultez vos contrats, devis et rapports d'avancement à tout moment." },
      { icon: Bell, title: "Notifications", text: "Recevez des alertes sur les étapes clés de vos projets." },
    ],
    btn: "Bientôt disponible",
    notify: "M'avertir à l'ouverture",
  },
  en: {
    tag: "Client Area",
    headline: "Your Personalized\nSpace",
    sub: "Track project progress, access your contractual documents and schedule appointments — from a dedicated, secure space.",
    features: [
      { icon: CalendarDays, title: "Online booking", text: "Book a consultation directly online, without a phone call." },
      { icon: Lock, title: "Secure access", text: "Protected login to your personal client file." },
      { icon: FileText, title: "Documents & Reports", text: "View your contracts, quotes and progress reports at any time." },
      { icon: Bell, title: "Notifications", text: "Receive alerts on key milestones of your projects." },
    ],
    btn: "Coming soon",
    notify: "Notify me at launch",
  },
};

export default function ClientSpace({ lang }: { lang: "fr" | "en" }) {
  const t = content[lang];

  return (
    <section id="espace-client" style={{ padding: "7rem 0", background: "#fff", borderTop: "1px solid rgba(201,168,76,0.1)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
          <div style={{ width: 40, height: 1, background: "#c9a84c" }} />
          <span style={{ fontSize: "0.72rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#c9a84c", fontFamily: "'DM Sans', sans-serif" }}>{t.tag}</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "6rem", alignItems: "start" }}>
          <div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#0a0f1e", lineHeight: 1.1, whiteSpace: "pre-line", marginBottom: "1.5rem" }}>
              {t.headline}
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.9rem", color: "#64748b", lineHeight: 1.8, marginBottom: "2rem" }}>{t.sub}</p>

            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", border: "1px solid rgba(201,168,76,0.35)", padding: "0.6rem 1.25rem", marginBottom: "1rem" }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#c9a84c" }} />
              <span style={{ fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a84c", fontFamily: "'DM Sans', sans-serif" }}>{t.btn}</span>
            </div>

            <div>
              <a href="#contact" style={{ display: "block", fontSize: "0.78rem", color: "#0a0f1e", textDecoration: "underline", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.05em" }}>{t.notify} →</a>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "rgba(201,168,76,0.1)" }}>
            {t.features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} style={{ background: "#fff", padding: "2rem", transition: "background 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#fdf9f2")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}
                >
                  <div style={{ width: 36, height: 36, border: "1px solid rgba(201,168,76,0.3)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                    <Icon size={16} color="#c9a84c" strokeWidth={1.2} />
                  </div>
                  <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "1.1rem", color: "#0a0f1e", marginBottom: "0.5rem" }}>{f.title}</h4>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.85rem", color: "#64748b", lineHeight: 1.65 }}>{f.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
