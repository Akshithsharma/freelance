"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Rocket } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";

const NAV_LINKS = [
  { href: "/#about",     label: "About" },
  { href: "/#services",  label: "Services" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#pricing",   label: "Pricing" },
  { href: "/blog",       label: "Blog" },
  { href: "/#contact",   label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.3s ease",
        background: scrolled ? "rgba(10,10,15,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div style={{ width: 36, height: 36, background: "var(--gradient-primary)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Rocket size={18} color="white" />
          </div>
          <span style={{ fontSize: 18, fontWeight: 800, color: "var(--foreground)" }}>
            {SITE_CONFIG.name.split(" ")[0]}<span className="gradient-text">.dev</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }} className="desktop-nav">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                color: "var(--text-secondary)",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 500,
                padding: "8px 14px",
                borderRadius: 8,
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "var(--foreground)"; e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-secondary)"; e.currentTarget.style.background = "transparent"; }}
            >
              {l.label}
            </Link>
          ))}
          <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginLeft: 8, padding: "10px 22px", fontSize: 14 }}>
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", color: "var(--foreground)", cursor: "pointer", display: "none" }}
          className="mobile-menu-btn"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div style={{
          background: "var(--surface)",
          borderTop: "1px solid var(--border-light)",
          padding: "20px 24px",
        }}>
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                color: "var(--text-secondary)",
                textDecoration: "none",
                padding: "12px 0",
                borderBottom: "1px solid var(--border-light)",
                fontSize: 16,
                fontWeight: 500,
              }}
            >
              {l.label}
            </Link>
          ))}
          <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} className="btn-primary" style={{ marginTop: 16, width: "100%", justifyContent: "center" }}>
            Hire Me
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
