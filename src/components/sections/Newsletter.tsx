"use client";
import { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async () => {
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) { setStatus("success"); setEmail(""); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  return (
    <section id="newsletter" style={{ padding: "80px 0", background: "var(--surface)" }}>
      <div className="container">
        <div
          className="glass-card"
          style={{
            padding: "60px 48px",
            textAlign: "center",
            background: "linear-gradient(135deg, rgba(108,99,255,0.12) 0%, rgba(0,212,170,0.08) 100%)",
            borderColor: "rgba(108,99,255,0.25)",
          }}
        >
          <div style={{ fontSize: 48, marginBottom: 16 }}>📬</div>
          <div className="section-tag" style={{ margin: "0 auto 16px" }}><Mail size={12} /> Newsletter</div>
          <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, marginBottom: 12 }}>
            Stay in the Loop
          </h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: 480, margin: "0 auto 32px", lineHeight: 1.7 }}>
            Get exclusive tutorials, project case studies, early access to free templates, and freelancing tips — straight to your inbox. No spam, ever.
          </p>

          {status === "success" ? (
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 28px", background: "rgba(0,212,170,0.12)", border: "1px solid rgba(0,212,170,0.3)", borderRadius: 50, color: "var(--accent)", fontWeight: 600 }}>
              🎉 You're subscribed! Welcome to the community.
            </div>
          ) : (
            <div style={{ display: "flex", gap: 12, maxWidth: 440, margin: "0 auto", flexWrap: "wrap", justifyContent: "center" }}>
              <input
                className="form-input"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleSubmit()}
                placeholder="Enter your email address"
                style={{ flex: 1, minWidth: 240 }}
              />
              <button onClick={handleSubmit} disabled={status === "loading"} className="btn-primary" style={{ whiteSpace: "nowrap" }}>
                {status === "loading" ? "Subscribing..." : <><ArrowRight size={16} /> Subscribe</>}
              </button>
            </div>
          )}

          {status === "error" && (
            <p style={{ marginTop: 12, fontSize: 13, color: "#ff5050" }}>Something went wrong. Please try again.</p>
          )}

          <p style={{ marginTop: 16, fontSize: 12, color: "var(--text-muted)" }}>
            Join 500+ developers & entrepreneurs. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
