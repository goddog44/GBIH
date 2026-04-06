"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

const content = {
  fr: {
    tag: "Contact",
    headline: "Parlons de\nVotre Projet",
    sub: "Remplissez le formulaire ci-dessous ou contactez-nous directement. Nous revenons vers vous dans les plus brefs délais.",
    name: "Nom complet *",
    org: "Organisation / Entreprise",
    email: "Adresse email *",
    phone: "Téléphone",
    subject: "Objet du message",
    message: "Décrivez votre projet ou votre demande *",
    send: "Envoyer le message",
    sending: "Envoi en cours…",
    success: "Message envoyé. Nous vous répondrons très prochainement.",
    info: [
      { icon: MapPin, label: "Adresse", value: "Yaoundé, Cameroun" },
      { icon: Phone, label: "Téléphone", value: "+237 000 000 000" },
      { icon: Mail, label: "Email", value: "contact@gbih-747.com" },
      { icon: Clock, label: "Disponibilité", value: "Lun–Ven, 8h–17h" },
    ],
    subjects: ["Demande de devis", "Partenariat stratégique", "Appel d'offres", "Recrutement", "Autre"],
  },
  en: {
    tag: "Contact",
    headline: "Let's Talk About\nYour Project",
    sub: "Fill out the form below or contact us directly. We will get back to you as soon as possible.",
    name: "Full name *",
    org: "Organization / Company",
    email: "Email address *",
    phone: "Phone number",
    subject: "Subject",
    message: "Describe your project or request *",
    send: "Send message",
    sending: "Sending…",
    success: "Message sent. We will reply very shortly.",
    info: [
      { icon: MapPin, label: "Address", value: "Yaoundé, Cameroon" },
      { icon: Phone, label: "Phone", value: "+237 000 000 000" },
      { icon: Mail, label: "Email", value: "contact@gbih-747.com" },
      { icon: Clock, label: "Availability", value: "Mon–Fri, 8am–5pm" },
    ],
    subjects: ["Quote request", "Strategic partnership", "Tender", "Recruitment", "Other"],
  },
};

export default function Contact({ lang }: { lang: "fr" | "en" }) {
  const t = content[lang];
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1500);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid rgba(201,168,76,0.25)",
    padding: "0.75rem 0",
    fontSize: "0.9rem",
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 300,
    color: "#0a0f1e",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "0.7rem",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "#9ca3af",
    fontFamily: "'DM Sans', sans-serif",
    display: "block",
    marginBottom: "0.25rem",
  };

  return (
    <section id="contact" style={{ padding: "7rem 0", background: "#f9f6f0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "6rem", alignItems: "start" }}>
          {/* Left info */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
              <div style={{ width: 40, height: 1, background: "#c9a84c" }} />
              <span style={{ fontSize: "0.72rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#c9a84c", fontFamily: "'DM Sans', sans-serif" }}>{t.tag}</span>
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#0a0f1e", lineHeight: 1.1, whiteSpace: "pre-line", marginBottom: "1.5rem" }}>
              {t.headline}
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.9rem", color: "#64748b", lineHeight: 1.8, marginBottom: "3rem" }}>{t.sub}</p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {t.info.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                    <div style={{ width: 36, height: 36, border: "1px solid rgba(201,168,76,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={15} color="#c9a84c" strokeWidth={1.2} />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a84c", fontFamily: "'DM Sans', sans-serif" }}>{item.label}</div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#374151", fontWeight: 400 }}>{item.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* RDV online badge */}
            <div style={{ marginTop: "2.5rem", padding: "1.25rem 1.5rem", background: "#0a0f1e", display: "flex", gap: "1rem", alignItems: "center" }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#c9a84c", flexShrink: 0 }} />
              <div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "#f9f6f0", fontWeight: 400 }}>{lang === "fr" ? "Prise de rendez-vous en ligne" : "Online appointment booking"}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "rgba(249,246,240,0.45)", marginTop: "0.15rem" }}>{lang === "fr" ? "Disponible bientôt" : "Coming soon"}</div>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div>
            {sent ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "5rem 2rem", textAlign: "center", border: "1px solid rgba(201,168,76,0.2)" }}>
                <CheckCircle size={36} color="#c9a84c" strokeWidth={1} style={{ marginBottom: "1.25rem" }} />
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", color: "#0a0f1e", lineHeight: 1.4 }}>{t.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                  <div>
                    <label style={labelStyle}>{t.name}</label>
                    <input required style={inputStyle} type="text"
                      onFocus={(e) => (e.target.style.borderBottomColor = "#c9a84c")}
                      onBlur={(e) => (e.target.style.borderBottomColor = "rgba(201,168,76,0.25)")} />
                  </div>
                  <div>
                    <label style={labelStyle}>{t.org}</label>
                    <input style={inputStyle} type="text"
                      onFocus={(e) => (e.target.style.borderBottomColor = "#c9a84c")}
                      onBlur={(e) => (e.target.style.borderBottomColor = "rgba(201,168,76,0.25)")} />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                  <div>
                    <label style={labelStyle}>{t.email}</label>
                    <input required style={inputStyle} type="email"
                      onFocus={(e) => (e.target.style.borderBottomColor = "#c9a84c")}
                      onBlur={(e) => (e.target.style.borderBottomColor = "rgba(201,168,76,0.25)")} />
                  </div>
                  <div>
                    <label style={labelStyle}>{t.phone}</label>
                    <input style={inputStyle} type="tel"
                      onFocus={(e) => (e.target.style.borderBottomColor = "#c9a84c")}
                      onBlur={(e) => (e.target.style.borderBottomColor = "rgba(201,168,76,0.25)")} />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>{t.subject}</label>
                  <select style={{ ...inputStyle, cursor: "pointer" }}
                    onFocus={(e) => (e.target.style.borderBottomColor = "#c9a84c")}
                    onBlur={(e) => (e.target.style.borderBottomColor = "rgba(201,168,76,0.25)")}
                  >
                    <option value="">—</option>
                    {t.subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>{t.message}</label>
                  <textarea required rows={5} style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={(e) => (e.target.style.borderBottomColor = "#c9a84c")}
                    onBlur={(e) => (e.target.style.borderBottomColor = "rgba(201,168,76,0.25)")} />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      background: loading ? "#9ca3af" : "#0a0f1e",
                      color: "#f9f6f0",
                      border: "none",
                      padding: "0.9rem 2.25rem",
                      fontSize: "0.78rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 400,
                      cursor: loading ? "not-allowed" : "pointer",
                      transition: "background 0.2s",
                    }}
                    onMouseEnter={(e) => { if (!loading) e.currentTarget.style.background = "#1f2937"; }}
                    onMouseLeave={(e) => { if (!loading) e.currentTarget.style.background = "#0a0f1e"; }}
                  >
                    <Send size={14} strokeWidth={1.5} />
                    {loading ? t.sending : t.send}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
