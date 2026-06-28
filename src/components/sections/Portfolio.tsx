"use client";
import { useState } from "react";
import { ExternalLink, GitFork, Star } from "lucide-react";
import { PROJECTS, PROJECT_CATEGORIES } from "@/data/site";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="section-wrapper" style={{ background: "var(--surface)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="section-tag">🗂 Portfolio</div>
          <h2 className="section-title">Projects I've Built</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Real-world applications deployed in production — from AI tools to full-stack SaaS platforms.
          </p>
        </div>

        {/* Filter tabs */}
        <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 40, flexWrap: "wrap" }}>
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "8px 20px",
                borderRadius: "50px",
                border: "1px solid",
                borderColor: activeCategory === cat ? "var(--primary)" : "var(--border-light)",
                background: activeCategory === cat ? "rgba(108,99,255,0.15)" : "transparent",
                color: activeCategory === cat ? "var(--primary-light)" : "var(--text-muted)",
                fontWeight: 600,
                fontSize: 14,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid-3">
          {filtered.map((p) => (
            <div key={p.id} className="glass-card" style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}>
              {/* Image / Placeholder */}
              <div style={{ height: 180, background: "var(--surface-3)", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                {p.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.image} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                ) : null}
                <div style={{ fontSize: 48, opacity: 0.3 }}>💻</div>
                {p.featured && (
                  <div style={{ position: "absolute", top: 12, left: 12 }}>
                    <span className="badge badge-yellow" style={{ gap: 4 }}>
                      <Star size={10} fill="#ffc107" /> Featured
                    </span>
                  </div>
                )}
                <span className="badge badge-purple" style={{ position: "absolute", top: 12, right: 12 }}>{p.category}</span>
              </div>

              <div style={{ padding: 20, flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700 }}>{p.title}</h3>
                <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, flex: 1 }}>{p.desc}</p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {p.tags.map(t => (
                    <span key={t} style={{ fontSize: 11, padding: "3px 10px", borderRadius: 50, background: "var(--surface-3)", color: "var(--text-muted)", fontWeight: 500 }}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: "flex", gap: 10, paddingTop: 8, borderTop: "1px solid var(--border-light)" }}>
                  {p.liveUrl ? (
                    <a href={p.liveUrl} target="_blank" rel="noopener noreferrer"
                      className="btn-primary" style={{ padding: "8px 16px", fontSize: 13, flex: 1, justifyContent: "center" }}>
                      <ExternalLink size={13} /> Live Demo
                    </a>
                  ) : (
                    <span style={{ flex: 1, padding: "8px 16px", fontSize: 13, textAlign: "center", color: "var(--text-muted)", border: "1px solid var(--border-light)", borderRadius: 50, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                      🔒 Coming Soon
                    </span>
                  )}
                  {p.repoUrl ? (
                    <a href={p.repoUrl} target="_blank" rel="noopener noreferrer"
                      className="btn-outline" style={{ padding: "8px 16px", fontSize: 13 }}>
                      <GitFork size={13} />
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Edit hint */}
        <div style={{ marginTop: 32, textAlign: "center" }}>
          <p style={{ fontSize: 13, color: "var(--text-muted)" }}>
            💡 Add new projects in <code style={{ background: "var(--surface-3)", padding: "2px 8px", borderRadius: 6 }}>src/data/site.ts</code> → PROJECTS array
          </p>
        </div>
      </div>
    </section>
  );
}
