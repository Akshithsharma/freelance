"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Download, Star, Zap, Code2, Cpu } from "lucide-react";
import { SITE_CONFIG, STATS } from "@/data/site";

const TYPED_STRINGS = [
  "Full-Stack Developer",
  "AI Solutions Expert",
  "React / Next.js Specialist",
  "SaaS Builder",
];

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [idx, setIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TYPED_STRINGS[idx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setTyped(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1800);
        } else {
          setCharIdx(c => c + 1);
        }
      } else {
        setTyped(current.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setIdx(i => (i + 1) % TYPED_STRINGS.length);
          setCharIdx(0);
        } else {
          setCharIdx(c => c - 1);
        }
      }
    }, deleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, idx]);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: 80,
      }}
      className="bg-dots"
    >
      {/* Background glows */}
      <div style={{ position: "absolute", top: "10%", left: "5%", width: 500, height: 500, background: "rgba(108,99,255,0.08)", borderRadius: "50%", filter: "blur(100px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", right: "5%", width: 400, height: 400, background: "rgba(0,212,170,0.06)", borderRadius: "50%", filter: "blur(100px)", pointerEvents: "none" }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>

          {/* Left: Text */}
          <div>
            <div className="section-tag" style={{ marginBottom: 24 }}>
              <Zap size={12} /> Available for freelance work
            </div>

            <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 20 }}>
              Hi, I'm <span className="gradient-text">{SITE_CONFIG.name}</span>
              <br />
              <span style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700, color: "var(--text-secondary)" }}>
                {typed}<span style={{ animation: "blink 1s step-end infinite", borderRight: "2px solid var(--primary)" }}>&nbsp;</span>
              </span>
            </h1>

            <p style={{ fontSize: "1.15rem", color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: 36, maxWidth: 520 }}>
              {SITE_CONFIG.tagline}
            </p>

            {/* CTA buttons */}
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 48 }}>
              <Link href="/#portfolio" className="btn-primary">
                View My Work <ArrowRight size={16} />
              </Link>
              <a href={SITE_CONFIG.resume} target="_blank" rel="noopener noreferrer" className="btn-outline">
                <Download size={16} /> Download CV
              </a>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi%20Ram%2C%20I%20found%20your%20portfolio%20and%20I'd%20like%20to%20discuss%20a%20project!`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(37,211,102,0.15)",
                  border: "1px solid rgba(37,211,102,0.4)",
                  color: "#25d366",
                  padding: "12px 22px",
                  borderRadius: "50px",
                  fontWeight: 600,
                  fontSize: 14,
                  textDecoration: "none",
                  transition: "all 0.3s",
                }}
              >
                💬 WhatsApp Me
              </a>
            </div>

            {/* Stats */}
            <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
              {STATS.map((s) => (
                <div key={s.label}>
                  <div style={{ fontSize: "1.8rem", fontWeight: 900, lineHeight: 1 }} className="gradient-text">
                    {s.value}{s.suffix}
                  </div>
                  <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual card */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ position: "relative" }}>

              {/* Main card */}
              <div className="glass-card animate-float" style={{ padding: 32, width: 340, textAlign: "center" }}>
                <div style={{ width: 100, height: 100, background: "var(--gradient-primary)", borderRadius: "50%", margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 40 }}>
                  👨‍💻
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 6 }}>{SITE_CONFIG.name}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: 14, marginBottom: 16 }}>B.Tech CSE · Graduating 2027</p>
                <div style={{ display: "flex", gap: 6, justifyContent: "center", flexWrap: "wrap" }}>
                  {["React", "Next.js", "FastAPI", "AI/ML"].map(t => (
                    <span key={t} className="badge badge-purple">{t}</span>
                  ))}
                </div>
                <div className="divider" />
                <div style={{ display: "flex", justifyContent: "center", gap: 4 }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#ffc107" color="#ffc107" />)}
                </div>
                <p style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 6 }}>Top Rated Freelancer</p>
              </div>

              {/* Floating badges */}
              <div className="glass-card" style={{ position: "absolute", top: -20, right: -40, padding: "10px 16px", display: "flex", alignItems: "center", gap: 8, whiteSpace: "nowrap" }}>
                <Code2 size={16} color="var(--primary)" />
                <span style={{ fontSize: 13, fontWeight: 600 }}>650+ LeetCode</span>
              </div>

              <div className="glass-card" style={{ position: "absolute", bottom: -20, left: -40, padding: "10px 16px", display: "flex", alignItems: "center", gap: 8, whiteSpace: "nowrap" }}>
                <Cpu size={16} color="var(--accent)" />
                <span style={{ fontSize: 13, fontWeight: 600 }}>AI-Powered Apps</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, color: "var(--text-muted)", fontSize: 12 }}>
        <span>Scroll down</span>
        <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, var(--primary), transparent)", animation: "float 2s ease-in-out infinite" }} />
      </div>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @media (max-width: 768px) {
          #home > div > div { grid-template-columns: 1fr !important; }
          #home > div > div > div:last-child { display: none; }
        }
      `}</style>
    </section>
  );
}
