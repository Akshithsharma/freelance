"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/data/site";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<string | null>(null);

  return (
    <section id="faq" className="section-wrapper">
      <div className="container" style={{ maxWidth: 860 }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="section-tag">❓ FAQ</div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Everything you need to know before we start working together.
          </p>
        </div>

        {FAQS.map((category) => (
          <div key={category.category} style={{ marginBottom: 40 }}>
            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--primary-light)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>
              {category.category}
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {category.questions.map((faq, i) => {
                const key = `${category.category}-${i}`;
                const isOpen = openIdx === key;
                return (
                  <div key={i} className="glass-card" style={{ overflow: "hidden", borderColor: isOpen ? "var(--border)" : "var(--border-light)" }}>
                    <button
                      onClick={() => setOpenIdx(isOpen ? null : key)}
                      style={{ width: "100%", padding: "18px 24px", background: "none", border: "none", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", textAlign: "left", gap: 16 }}
                    >
                      <span style={{ fontWeight: 600, fontSize: 15, color: "var(--foreground)" }}>{faq.q}</span>
                      <ChevronDown
                        size={18}
                        color="var(--text-muted)"
                        style={{ flexShrink: 0, transform: isOpen ? "rotate(180deg)" : "none", transition: "transform 0.3s" }}
                      />
                    </button>
                    {isOpen && (
                      <div style={{ padding: "0 24px 18px", fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.75 }}>
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        <div style={{ textAlign: "center", marginTop: 32 }}>
          <p style={{ color: "var(--text-muted)", marginBottom: 16 }}>Still have questions?</p>
          <a href="/#contact" className="btn-primary">Ask Me Directly</a>
        </div>
      </div>
    </section>
  );
}
