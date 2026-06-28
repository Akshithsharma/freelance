"use client";
import Link from "next/link";
import { GitFork, Link2, Mail, Phone, MapPin, Rocket, ExternalLink } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "var(--surface)", borderTop: "1px solid var(--border-light)", paddingTop: 60, paddingBottom: 32 }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 48 }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 36, height: 36, background: "var(--gradient-primary)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Rocket size={18} color="white" />
              </div>
              <span style={{ fontSize: 18, fontWeight: 800 }}>
                {SITE_CONFIG.name.split(" ")[0]}<span className="gradient-text">.dev</span>
              </span>
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.7, marginBottom: 20, maxWidth: 280 }}>
              Full-stack developer building scalable web apps, AI tools, and digital products that make an impact.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              {[
                { icon: <GitFork size={18} />, href: SITE_CONFIG.github },
                { icon: <Link2 size={18} />, href: SITE_CONFIG.linkedin },
                { icon: <Mail size={18} />, href: `mailto:${SITE_CONFIG.email}` },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{ width: 40, height: 40, background: "var(--surface-2)", border: "1px solid var(--border-light)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", transition: "all 0.2s", textDecoration: "none" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--primary)"; e.currentTarget.style.color = "var(--primary-light)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border-light)"; e.currentTarget.style.color = "var(--text-muted)"; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--text-secondary)" }}>Quick Links</h4>
            {[["/#about", "About Me"], ["/#services", "Services"], ["/#portfolio", "Portfolio"], ["/#pricing", "Pricing"], ["/blog", "Blog"]].map(([href, label]) => (
              <Link key={href} href={href} style={{ display: "block", color: "var(--text-muted)", textDecoration: "none", fontSize: 14, marginBottom: 10, transition: "color 0.2s" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "var(--foreground)"}
                onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-muted)"}
              >{label}</Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--text-secondary)" }}>Services</h4>
            {["Business Websites", "Mobile Apps", "E-commerce", "AI Solutions", "SaaS Development", "Maintenance"].map((s) => (
              <Link key={s} href="/#services" style={{ display: "block", color: "var(--text-muted)", textDecoration: "none", fontSize: 14, marginBottom: 10, transition: "color 0.2s" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "var(--foreground)"}
                onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-muted)"}
              >{s}</Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--text-secondary)" }}>Contact</h4>
            {[
              { icon: <Mail size={14} />, text: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
              { icon: <Phone size={14} />, text: SITE_CONFIG.phone, href: `tel:${SITE_CONFIG.phone}` },
              { icon: <MapPin size={14} />, text: SITE_CONFIG.location, href: "#" },
            ].map((c, i) => (
              <a key={i} href={c.href} style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--text-muted)", textDecoration: "none", fontSize: 13, marginBottom: 12, transition: "color 0.2s" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "var(--foreground)"}
                onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-muted)"}
              >
                {c.icon} {c.text}
              </a>
            ))}
            <div className="divider" />
            <a href={SITE_CONFIG.resume} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: "8px 16px", fontSize: 13, gap: 6 }}>
              <ExternalLink size={14} /> Download Resume
            </a>
          </div>
        </div>

        <div className="divider" />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ color: "var(--text-muted)", fontSize: 13 }}>
            © {year} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            {[["Privacy Policy", "/privacy"], ["Terms of Service", "/terms"], ["Refund Policy", "/refund"]].map(([label, href]) => (
              <Link key={href} href={href} style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: 13, transition: "color 0.2s" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "var(--foreground)"}
                onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-muted)"}
              >{label}</Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > div > div:first-child { grid-template-columns: 1fr !important; }
          footer > div > div:last-child { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </footer>
  );
}
