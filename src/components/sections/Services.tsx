"use client";
import { Check, ArrowRight } from "lucide-react";
import { SERVICES } from "@/data/site";

export default function Services() {
  return (
    <section id="services" className="section-wrapper">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="section-tag">⚡ Services</div>
          <h2 className="section-title">What I Build For You</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            From simple landing pages to complex AI-powered SaaS platforms — I deliver production-quality software on time.
          </p>
        </div>

        <div className="grid-4" style={{ gap: 20 }}>
          {SERVICES.map((s) => (
            <div key={s.slug} className="glass-card" style={{ padding: 24, display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ fontSize: 32, marginBottom: 4 }}>{s.icon}</div>
              <h3 style={{ fontSize: "1rem", fontWeight: 700 }}>{s.title}</h3>
              <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, flex: 1 }}>{s.desc}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {s.features.map((f) => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--text-secondary)" }}>
                    <Check size={13} color="var(--accent)" strokeWidth={3} />
                    {f}
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 4, paddingTop: 12, borderTop: "1px solid var(--border-light)" }}>
                <span style={{ fontWeight: 700, color: "var(--primary-light)", fontSize: 15 }}>From {s.price}</span>
                <a href="/#contact" style={{ color: "var(--accent)", display: "flex", alignItems: "center", gap: 4, fontSize: 13, fontWeight: 600, textDecoration: "none" }}>
                  Hire <ArrowRight size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="glass-card" style={{ marginTop: 60, padding: "40px 48px", background: "linear-gradient(135deg, rgba(108,99,255,0.15) 0%, rgba(0,212,170,0.1) 100%)", textAlign: "center", borderColor: "rgba(108,99,255,0.3)" }}>
          <h3 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 12 }}>Have a custom project in mind?</h3>
          <p style={{ color: "var(--text-secondary)", marginBottom: 24 }}>Tell me what you need and I'll send a detailed proposal within 24 hours.</p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/#contact" className="btn-primary">Start a Project <ArrowRight size={16} /></a>
            <a href="/#pricing" className="btn-outline">View Packages</a>
          </div>
        </div>
      </div>
    </section>
  );
}
