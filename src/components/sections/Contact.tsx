"use client";
import { useState } from "react";
import { Send, Mail, Phone, MapPin, MessageCircle, Calendar } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", projectType: "", budget: "", timeline: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", projectType: "", budget: "", timeline: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-wrapper" style={{ background: "var(--surface)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="section-tag">📩 Contact</div>
          <h2 className="section-title">Let's Build Something Together</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Have a project in mind? Drop me a message and I'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid-2" style={{ gap: 48, alignItems: "start" }}>
          {/* Left: Info */}
          <div>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: 24 }}>Get in Touch</h3>

            {[
              { icon: <Mail size={20} />, label: "Email", value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
              { icon: <Phone size={20} />, label: "Phone / WhatsApp", value: SITE_CONFIG.phone, href: `https://wa.me/${SITE_CONFIG.whatsapp}` },
              { icon: <MapPin size={20} />, label: "Location", value: SITE_CONFIG.location, href: "#" },
            ].map((c, i) => (
              <a key={i} href={c.href} target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 20px", marginBottom: 12, borderRadius: 12, border: "1px solid var(--border-light)", background: "var(--surface-2)", textDecoration: "none", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--primary)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border-light)"; }}
              >
                <div style={{ width: 44, height: 44, background: "rgba(108,99,255,0.12)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)", flexShrink: 0 }}>
                  {c.icon}
                </div>
                <div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 2 }}>{c.label}</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "var(--foreground)" }}>{c.value}</div>
                </div>
              </a>
            ))}

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi%20Ram%2C%20I'd%20like%20to%20discuss%20a%20project!`}
              target="_blank" rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: 12, padding: "16px 24px", marginTop: 8, borderRadius: 12, background: "rgba(37,211,102,0.1)", border: "1px solid rgba(37,211,102,0.3)", color: "#25d366", textDecoration: "none", fontWeight: 600, fontSize: 15, transition: "all 0.2s" }}
            >
              <MessageCircle size={20} /> Chat on WhatsApp (Fastest response)
            </a>

            {/* Calendly */}
            <a
              href={SITE_CONFIG.calendly}
              target="_blank" rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: 12, padding: "16px 24px", marginTop: 12, borderRadius: 12, background: "rgba(108,99,255,0.08)", border: "1px solid rgba(108,99,255,0.2)", color: "var(--primary-light)", textDecoration: "none", fontWeight: 600, fontSize: 15, transition: "all 0.2s" }}
            >
              <Calendar size={20} /> Book a Free Consultation Call
            </a>

            {/* Response time */}
            <div style={{ marginTop: 24, padding: 16, background: "var(--surface-3)", borderRadius: 12 }}>
              <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 8 }}>⚡ Response Times</div>
              <div style={{ fontSize: 13, color: "var(--text-muted)", display: "flex", flexDirection: "column", gap: 4 }}>
                <span>📧 Email: Within 24 hours</span>
                <span>💬 WhatsApp: Within 2 hours</span>
                <span>📅 Consultation: Book any slot</span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="glass-card" style={{ padding: 32 }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 24 }}>Send a Message</h3>

            {status === "success" ? (
              <div style={{ textAlign: "center", padding: 40 }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
                <h4 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: 8 }}>Message Sent!</h4>
                <p style={{ color: "var(--text-muted)" }}>I'll get back to you within 24 hours. Check your email for confirmation.</p>
                <button onClick={() => setStatus("idle")} className="btn-primary" style={{ marginTop: 20 }}>Send Another</button>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div className="grid-2" style={{ gap: 14 }}>
                  <div>
                    <label className="form-label">Name *</label>
                    <input className="form-input" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="form-label">Email *</label>
                    <input className="form-input" type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
                  </div>
                </div>

                <div className="grid-2" style={{ gap: 14 }}>
                  <div>
                    <label className="form-label">Phone / WhatsApp</label>
                    <input className="form-input" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" />
                  </div>
                  <div>
                    <label className="form-label">Project Type</label>
                    <select className="form-input" name="projectType" value={form.projectType} onChange={handleChange}>
                      <option value="">Select type...</option>
                      <option>Business Website</option>
                      <option>E-commerce Store</option>
                      <option>Mobile App</option>
                      <option>SaaS / Web App</option>
                      <option>AI Solution</option>
                      <option>Portfolio / Resume Site</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid-2" style={{ gap: 14 }}>
                  <div>
                    <label className="form-label">Budget Range</label>
                    <select className="form-input" name="budget" value={form.budget} onChange={handleChange}>
                      <option value="">Select budget...</option>
                      <option>Under ₹10,000</option>
                      <option>₹10,000 – ₹20,000</option>
                      <option>₹20,000 – ₹40,000</option>
                      <option>₹40,000+</option>
                      <option>Let's discuss</option>
                    </select>
                  </div>
                  <div>
                    <label className="form-label">Timeline</label>
                    <select className="form-input" name="timeline" value={form.timeline} onChange={handleChange}>
                      <option value="">Select timeline...</option>
                      <option>Flexible</option>
                      <option>Within 4 weeks</option>
                      <option>Within 2 weeks</option>
                      <option>Urgent (&lt;1 week)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="form-label">Project Description *</label>
                  <textarea
                    className="form-input"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project — what you need, who it's for, and any specific requirements..."
                    rows={5}
                    style={{ resize: "vertical" }}
                  />
                </div>

                {status === "error" && (
                  <div style={{ padding: 12, background: "rgba(255,80,80,0.1)", border: "1px solid rgba(255,80,80,0.3)", borderRadius: 10, fontSize: 13, color: "#ff5050" }}>
                    ⚠️ Something went wrong. Please try WhatsApp or email directly.
                  </div>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={status === "loading"}
                  className="btn-primary"
                  style={{ width: "100%", justifyContent: "center", opacity: status === "loading" ? 0.7 : 1 }}
                >
                  {status === "loading" ? "Sending..." : <><Send size={16} /> Send Message</>}
                </button>

                <p style={{ fontSize: 12, color: "var(--text-muted)", textAlign: "center" }}>
                  🔒 Your details are safe. I'll never share your information.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact .grid-2 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
