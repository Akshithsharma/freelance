"use client";
import { useState } from "react";
import { X, MessageCircle, Send } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";

export default function LiveChat() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const sendToWhatsApp = () => {
    const text = message.trim() || "Hi Ram! I found your portfolio and I'd like to discuss a project.";
    window.open(`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
    setOpen(false);
    setMessage("");
  };

  return (
    <>
      {/* Chat popup */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 90,
            right: 24,
            width: 320,
            background: "var(--surface-2)",
            border: "1px solid var(--border-light)",
            borderRadius: 16,
            boxShadow: "0 16px 48px rgba(0,0,0,0.5)",
            zIndex: 9999,
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <div style={{ padding: "16px 20px", background: "var(--gradient-primary)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 36, height: 36, background: "rgba(255,255,255,0.2)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>👋</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, color: "white" }}>{SITE_CONFIG.name}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.8)", display: "flex", alignItems: "center", gap: 4 }}>
                  <div style={{ width: 7, height: 7, background: "#4ade80", borderRadius: "50%" }} /> Usually replies in 2 hours
                </div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} style={{ background: "none", border: "none", color: "white", cursor: "pointer" }}>
              <X size={18} />
            </button>
          </div>

          {/* Body */}
          <div style={{ padding: 20 }}>
            <div style={{ background: "var(--surface-3)", padding: "12px 14px", borderRadius: 12, borderBottomLeftRadius: 4, marginBottom: 16 }}>
              <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6 }}>
                Hi there! 👋 I'm Ram. Have a project in mind or need help with something? Drop me a message — I'd love to help!
              </p>
            </div>
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              onKeyDown={e => e.key === "Enter" && !e.shiftKey && sendToWhatsApp()}
              className="form-input"
              placeholder="Type your message..."
              rows={3}
              style={{ resize: "none", marginBottom: 12, fontSize: 13 }}
            />
            <button onClick={sendToWhatsApp} className="btn-primary" style={{ width: "100%", justifyContent: "center", background: "linear-gradient(135deg,#25d366,#128c7e)" }}>
              <MessageCircle size={15} /> Continue on WhatsApp
            </button>
          </div>
        </div>
      )}

      {/* FAB button */}
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: open ? "var(--surface-3)" : "linear-gradient(135deg,#25d366,#128c7e)",
          border: "none",
          color: "white",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 8px 24px rgba(37,211,102,0.4)",
          zIndex: 9999,
          transition: "all 0.3s",
        }}
      >
        {open ? <X size={22} /> : <MessageCircle size={24} />}
      </button>

      {/* Pulse ring */}
      {!open && (
        <div style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          width: 56,
          height: 56,
          borderRadius: "50%",
          border: "2px solid rgba(37,211,102,0.5)",
          zIndex: 9998,
          animation: "ping 2s ease-in-out infinite",
          pointerEvents: "none",
        }} />
      )}

      <style>{`
        @keyframes ping {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.8); opacity: 0; }
        }
      `}</style>
    </>
  );
}
