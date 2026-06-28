"use client";
import { useState } from "react";
import { Check, X, Zap } from "lucide-react";
import { PACKAGES, ADD_ONS } from "@/data/site";

export default function Pricing() {
  const [showAddons, setShowAddons] = useState(false);

  return (
    <section id="pricing" className="section-wrapper">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="section-tag">💰 Pricing</div>
          <h2 className="section-title">Transparent Pricing</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            No hidden fees. Pick a package or get a custom quote tailored to your project.
          </p>
        </div>

        {/* Packages */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, alignItems: "start", marginBottom: 60 }}>
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className="glass-card"
              style={{
                padding: 32,
                position: "relative",
                borderColor: pkg.popular ? "var(--primary)" : "var(--border-light)",
                boxShadow: pkg.popular ? "0 0 40px rgba(108,99,255,0.2)" : undefined,
              }}
            >
              {pkg.popular && (
                <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: "var(--gradient-primary)", color: "white", padding: "4px 20px", borderRadius: 50, fontSize: 12, fontWeight: 700, whiteSpace: "nowrap" }}>
                  ⚡ Most Popular
                </div>
              )}

              <div style={{ marginBottom: 24 }}>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: 6 }}>{pkg.name}</h3>
                <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 16 }}>{pkg.desc}</p>
                <div style={{ fontSize: "2.2rem", fontWeight: 900 }} className="gradient-text">{pkg.price}</div>
                <div style={{ fontSize: 13, color: "var(--text-muted)" }}>one-time payment</div>
              </div>

              <div className="divider" />

              <div style={{ marginBottom: 24 }}>
                {pkg.features.map(f => (
                  <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10 }}>
                    <Check size={15} color="var(--accent)" strokeWidth={3} style={{ marginTop: 2, flexShrink: 0 }} />
                    <span style={{ fontSize: 14, color: "var(--text-secondary)" }}>{f}</span>
                  </div>
                ))}
                {pkg.notIncluded.map(f => (
                  <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10 }}>
                    <X size={15} color="var(--text-muted)" strokeWidth={3} style={{ marginTop: 2, flexShrink: 0 }} />
                    <span style={{ fontSize: 14, color: "var(--text-muted)" }}>{f}</span>
                  </div>
                ))}
              </div>

              <a href="/#contact" className={pkg.popular ? "btn-primary" : "btn-outline"} style={{ width: "100%", justifyContent: "center" }}>
                Get Started
              </a>
            </div>
          ))}
        </div>

        {/* Maintenance */}
        <div className="glass-card" style={{ padding: "28px 32px", marginBottom: 32, borderColor: "rgba(0,212,170,0.3)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
          <div>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 4 }}>🔧 Maintenance Plans</h3>
            <p style={{ fontSize: 14, color: "var(--text-muted)" }}>Monthly updates, bug fixes, monitoring, and priority support for your existing site.</p>
          </div>
          <div style={{ display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--accent)" }}>₹1,500 – ₹3,000<span style={{ fontSize: 14, fontWeight: 400, color: "var(--text-muted)" }}>/month</span></div>
              <div style={{ fontSize: 12, color: "var(--text-muted)" }}>Domain renewal: ₹1,500 – ₹2,000/year</div>
            </div>
            <a href="/#contact" className="btn-primary">Get Plan</a>
          </div>
        </div>

        {/* Add-ons toggle */}
        <div style={{ textAlign: "center" }}>
          <button
            onClick={() => setShowAddons(!showAddons)}
            className="btn-outline"
            style={{ marginBottom: showAddons ? 24 : 0 }}
          >
            <Zap size={16} /> {showAddons ? "Hide" : "View"} Add-ons & Custom Solutions
          </button>

          {showAddons && (
            <div className="grid-4" style={{ marginTop: 24 }}>
              {ADD_ONS.map((a) => (
                <div key={a.name} className="glass-card" style={{ padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 14, fontWeight: 500 }}>{a.name}</span>
                  <span style={{ fontWeight: 700, color: "var(--primary-light)", fontSize: 14 }}>+{a.price}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #pricing > div > div:nth-child(2) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
