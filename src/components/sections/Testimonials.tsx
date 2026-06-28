"use client";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/site";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-wrapper">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="section-tag">⭐ Testimonials</div>
          <h2 className="section-title">What Clients Say</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Real feedback from real clients. Building trust, one project at a time.
          </p>
        </div>

        <div className="grid-2" style={{ gap: 24 }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="glass-card" style={{ padding: 28 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                <Quote size={28} color="var(--primary)" style={{ opacity: 0.5 }} />
                <span className="badge badge-purple" style={{ fontSize: 11 }}>{t.platform}</span>
              </div>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 20, fontStyle: "italic" }}>
                "{t.text}"
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 44, height: 44, background: "var(--gradient-primary)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 16, color: "white", flexShrink: 0 }}>
                  {t.name[0]}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{t.role}</div>
                </div>
                <div className="stars" style={{ marginLeft: "auto" }}>
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} fill="#ffc107" color="#ffc107" />)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google / LinkedIn badge row */}
        <div style={{ display: "flex", gap: 20, justifyContent: "center", marginTop: 48, flexWrap: "wrap" }}>
          {[
            { platform: "Google Reviews", rating: "5.0", count: "12 reviews" },
            { platform: "LinkedIn", rating: "4.9", count: "8 recommendations" },
          ].map((b) => (
            <div key={b.platform} className="glass-card" style={{ padding: "16px 28px", display: "flex", alignItems: "center", gap: 16 }}>
              <div>
                <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 2 }}>{b.platform}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ display: "flex", gap: 2 }}>
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#ffc107" color="#ffc107" />)}
                  </div>
                  <span style={{ fontWeight: 800, fontSize: 18 }}>{b.rating}</span>
                </div>
                <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{b.count}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
