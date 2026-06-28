"use client";
import { Download, MapPin, GraduationCap, Award } from "lucide-react";
import { SITE_CONFIG, SKILLS, TIMELINE, TECH_STACK } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="section-wrapper" style={{ background: "var(--surface)" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="section-tag">✦ About Me</div>
          <h2 className="section-title">The Developer Behind the Code</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Passionate about building impactful digital products with clean code, great UX, and AI-powered intelligence.
          </p>
        </div>

        {/* Story + Tech Stack */}
        <div className="grid-2" style={{ gap: 48, alignItems: "start", marginBottom: 80 }}>
          <div>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: 16 }}>My Story</h3>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 16 }}>
              I'm <strong style={{ color: "var(--foreground)" }}>{SITE_CONFIG.name}</strong>, a final-year B.Tech Computer Science student at Pragati Engineering College, Andhra Pradesh, graduating in 2027 with a CGPA of 8.0.
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 16 }}>
              I'm a passionate full-stack developer with 650+ LeetCode problems solved, multiple production-deployed apps, and hands-on experience with modern web technologies including Next.js 15, FastAPI, Supabase, and Google Gemini AI.
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 28 }}>
              I believe every project is an opportunity to build something that genuinely helps people. Whether it's an AI-powered SaaS, a real-time chat app, or a business website — I bring the same level of care, quality, and speed to every engagement.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 }}>
              {[
                { icon: <MapPin size={16} />, text: SITE_CONFIG.location },
                { icon: <GraduationCap size={16} />, text: "B.Tech CSE · Pragati Engineering College · 2027" },
                { icon: <Award size={16} />, text: "CGPA 8.0 · 650+ LeetCode Problems" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--text-secondary)", fontSize: 14 }}>
                  <span style={{ color: "var(--primary)" }}>{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              <a href={SITE_CONFIG.resume} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <Download size={16} /> Download Resume
              </a>
              <a href={SITE_CONFIG.linkedin} target="_blank" rel="noopener noreferrer" className="btn-outline">
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: 20 }}>Skills & Technologies</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {SKILLS.map((skill) => (
                <div key={skill.category}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "var(--primary-light)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {skill.category}
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {skill.items.map((item) => (
                      <span key={item} className="glass-card" style={{ padding: "6px 14px", fontSize: 13, fontWeight: 500, cursor: "default", borderRadius: 8 }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: 32, textAlign: "center" }}>My Journey</h3>
          <div style={{ position: "relative", maxWidth: 800, margin: "0 auto" }}>
            {/* Line */}
            <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 2, background: "var(--border-light)", transform: "translateX(-50%)" }} />

            {TIMELINE.map((item, i) => (
              <div key={i} style={{ display: "flex", justifyContent: i % 2 === 0 ? "flex-start" : "flex-end", marginBottom: 32, position: "relative" }}>
                {/* Dot */}
                <div style={{ position: "absolute", left: "50%", top: 20, width: 14, height: 14, background: "var(--primary)", borderRadius: "50%", transform: "translateX(-50%)", border: "3px solid var(--background)", zIndex: 1 }} />

                <div className="glass-card" style={{ padding: "16px 20px", width: "42%", marginLeft: i % 2 === 0 ? 0 : "8%", marginRight: i % 2 === 0 ? "8%" : 0 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "var(--primary)", marginBottom: 4 }}>{item.year}</div>
                  <div style={{ fontWeight: 700, marginBottom: 4 }}>{item.title}</div>
                  <div style={{ fontSize: 13, color: "var(--text-muted)" }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .grid-2 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
