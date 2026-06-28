import { Download, FileText, Code2 } from "lucide-react";
import { RESOURCES } from "@/data/site";

const TYPE_ICONS: Record<string, React.ReactNode> = {
  PDF: <FileText size={20} />,
  Template: <Code2 size={20} />,
};

export default function Resources() {
  return (
    <section id="resources" className="section-wrapper" style={{ background: "var(--surface)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="section-tag">📚 Resources</div>
          <h2 className="section-title">Free Resources</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Templates, cheatsheets, and guides I've made for the community — totally free.
          </p>
        </div>

        <div className="grid-3" style={{ gap: 20 }}>
          {RESOURCES.map((r) => (
            <div key={r.title} className="glass-card" style={{ padding: 24, display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{ width: 44, height: 44, background: "rgba(108,99,255,0.12)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)" }}>
                  {TYPE_ICONS[r.type] ?? <FileText size={20} />}
                </div>
                <span className="badge badge-green" style={{ fontSize: 11 }}>{r.type}</span>
              </div>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 700 }}>{r.title}</h3>
              <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, flex: 1 }}>{r.desc}</p>
              <a
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ fontSize: 13, padding: "9px 16px", justifyContent: "center" }}
              >
                <Download size={14} /> Download Free
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
