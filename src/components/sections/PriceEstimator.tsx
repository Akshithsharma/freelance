"use client";
import { useState } from "react";
import { Calculator, ArrowRight } from "lucide-react";

const PROJECT_TYPES = [
  { label: "Landing Page", base: 8000 },
  { label: "Business Website (5–10 pages)", base: 15000 },
  { label: "E-commerce Store", base: 22000 },
  { label: "Mobile App (React Native)", base: 28000 },
  { label: "SaaS / Web App", base: 40000 },
  { label: "AI-Powered Tool", base: 20000 },
  { label: "Portfolio / Resume Site", base: 6000 },
];

const FEATURES = [
  { label: "Admin Dashboard", cost: 5000 },
  { label: "Authentication (Login/Register)", cost: 4000 },
  { label: "Payment Gateway (Razorpay/Stripe)", cost: 3500 },
  { label: "AI / Chatbot Integration", cost: 6000 },
  { label: "Blog / CMS", cost: 3500 },
  { label: "Advanced SEO Package", cost: 3000 },
  { label: "WhatsApp / Email Notifications", cost: 2000 },
  { label: "Analytics Dashboard", cost: 4000 },
  { label: "Multi-language Support", cost: 3000 },
  { label: "API Development", cost: 5000 },
];

const PAGE_COSTS: Record<string, number> = { "1-3": 0, "4-7": 2000, "8-12": 5000, "12+": 9000 };
const TIMELINE_MULT: Record<string, number> = { "Flexible": 1, "Within 4 weeks": 1.15, "Within 2 weeks": 1.3, "Urgent (<1 week)": 1.5 };

export default function PriceEstimator() {
  const [projectType, setProjectType] = useState(PROJECT_TYPES[0]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [pages, setPages] = useState("1-3");
  const [timeline, setTimeline] = useState("Flexible");

  const toggleFeature = (label: string) => {
    setSelectedFeatures(prev =>
      prev.includes(label) ? prev.filter(f => f !== label) : [...prev, label]
    );
  };

  const featureCost = selectedFeatures.reduce((sum, f) => {
    const found = FEATURES.find(x => x.label === f);
    return sum + (found?.cost ?? 0);
  }, 0);

  const base = projectType.base + PAGE_COSTS[pages];
  const total = Math.round((base + featureCost) * TIMELINE_MULT[timeline]);

  return (
    <section id="estimator" className="section-wrapper" style={{ background: "var(--surface)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="section-tag"><Calculator size={12} /> Instant Price Estimator</div>
          <h2 className="section-title">Get an Instant Quote</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Select your requirements and get an instant cost breakdown. Final quote may vary after detailed discussion.
          </p>
        </div>

        <div className="grid-2" style={{ gap: 40, alignItems: "start" }}>
          {/* Left: Options */}
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {/* Project type */}
            <div>
              <label className="form-label">Project Type</label>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {PROJECT_TYPES.map((pt) => (
                  <label key={pt.label} style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer", padding: "12px 16px", borderRadius: 10, border: "1px solid", borderColor: projectType.label === pt.label ? "var(--primary)" : "var(--border-light)", background: projectType.label === pt.label ? "rgba(108,99,255,0.08)" : "transparent", transition: "all 0.2s" }}>
                    <input type="radio" name="type" checked={projectType.label === pt.label} onChange={() => setProjectType(pt)} style={{ accentColor: "var(--primary)" }} />
                    <span style={{ flex: 1, fontSize: 14, fontWeight: 500 }}>{pt.label}</span>
                    <span style={{ fontSize: 13, color: "var(--accent)", fontWeight: 700 }}>₹{pt.base.toLocaleString()}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Pages */}
            <div>
              <label className="form-label">Number of Pages</label>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {Object.keys(PAGE_COSTS).map(p => (
                  <button key={p} onClick={() => setPages(p)} style={{ padding: "8px 18px", borderRadius: 8, border: "1px solid", borderColor: pages === p ? "var(--primary)" : "var(--border-light)", background: pages === p ? "rgba(108,99,255,0.12)" : "transparent", color: pages === p ? "var(--primary-light)" : "var(--text-secondary)", fontWeight: 600, fontSize: 14, cursor: "pointer" }}>
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div>
              <label className="form-label">Timeline</label>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {Object.keys(TIMELINE_MULT).map(t => (
                  <button key={t} onClick={() => setTimeline(t)} style={{ padding: "8px 16px", borderRadius: 8, border: "1px solid", borderColor: timeline === t ? "var(--primary)" : "var(--border-light)", background: timeline === t ? "rgba(108,99,255,0.12)" : "transparent", color: timeline === t ? "var(--primary-light)" : "var(--text-secondary)", fontWeight: 600, fontSize: 13, cursor: "pointer" }}>
                    {t} {TIMELINE_MULT[t] > 1 && <span style={{ color: "var(--text-muted)", fontSize: 11 }}>+{Math.round((TIMELINE_MULT[t]-1)*100)}%</span>}
                  </button>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <label className="form-label">Add-on Features</label>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                {FEATURES.map((f) => (
                  <label key={f.label} style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", padding: "10px 12px", borderRadius: 8, border: "1px solid", borderColor: selectedFeatures.includes(f.label) ? "var(--primary)" : "var(--border-light)", background: selectedFeatures.includes(f.label) ? "rgba(108,99,255,0.08)" : "transparent", transition: "all 0.2s", fontSize: 12 }}>
                    <input type="checkbox" checked={selectedFeatures.includes(f.label)} onChange={() => toggleFeature(f.label)} style={{ accentColor: "var(--primary)" }} />
                    <span style={{ flex: 1 }}>{f.label}</span>
                    <span style={{ color: "var(--accent)", fontWeight: 700 }}>+₹{f.cost.toLocaleString()}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Summary */}
          <div style={{ position: "sticky", top: 100 }}>
            <div className="glass-card" style={{ padding: 32, borderColor: "rgba(108,99,255,0.3)" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: 24 }}>💰 Estimated Cost</h3>

              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, color: "var(--text-secondary)" }}>
                  <span>Base ({projectType.label})</span>
                  <span>₹{projectType.base.toLocaleString()}</span>
                </div>
                {PAGE_COSTS[pages] > 0 && (
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, color: "var(--text-secondary)" }}>
                    <span>Pages ({pages})</span>
                    <span>+₹{PAGE_COSTS[pages].toLocaleString()}</span>
                  </div>
                )}
                {selectedFeatures.map(f => {
                  const found = FEATURES.find(x => x.label === f);
                  return found ? (
                    <div key={f} style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "var(--text-secondary)" }}>
                      <span>{found.label}</span>
                      <span>+₹{found.cost.toLocaleString()}</span>
                    </div>
                  ) : null;
                })}
                {TIMELINE_MULT[timeline] > 1 && (
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, color: "#ffc107" }}>
                    <span>Rush fee ({timeline})</span>
                    <span>+{Math.round((TIMELINE_MULT[timeline]-1)*100)}%</span>
                  </div>
                )}
              </div>

              <div className="divider" />

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                <span style={{ fontWeight: 700, fontSize: 16 }}>Total Estimate</span>
                <div className="gradient-text" style={{ fontSize: "2rem", fontWeight: 900 }}>
                  ₹{total.toLocaleString()}
                </div>
              </div>
              <p style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 24 }}>
                * This is an estimate. Final price confirmed after requirements discussion.
              </p>

              <a href={`/#contact`} className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                Get Official Quote <ArrowRight size={16} />
              </a>

              <div style={{ marginTop: 16, padding: 16, background: "rgba(0,212,170,0.08)", borderRadius: 10, border: "1px solid rgba(0,212,170,0.2)" }}>
                <p style={{ fontSize: 13, color: "var(--accent)", fontWeight: 600, marginBottom: 4 }}>💡 Payment Terms</p>
                <p style={{ fontSize: 12, color: "var(--text-muted)" }}>50% advance to start • 50% on delivery. EMI available for Premium projects.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #estimator .grid-2 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
