import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";

export default function PrivacyPage() {
  return (
    <div style={{ paddingTop: 100, minHeight: "100vh" }}>
      <div className="container" style={{ maxWidth: 760, paddingTop: 40, paddingBottom: 80 }}>
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--text-muted)", textDecoration: "none", fontSize: 14, marginBottom: 40 }}>
          <ArrowLeft size={16} /> Back to Home
        </Link>
        <h1 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: 8 }}>Privacy Policy</h1>
        <p style={{ color: "var(--text-muted)", marginBottom: 40 }}>Last updated: June 2026</p>

        {[
          { title: "Information We Collect", content: "We collect information you provide directly to us when using our contact form, including your name, email address, phone number, and project details. We may also collect usage data when you visit our website." },
          { title: "How We Use Your Information", content: "We use the information collected to respond to your inquiries, provide our services, send project updates, and occasionally send relevant newsletters (only with your consent)." },
          { title: "Information Sharing", content: `We do not sell, trade, or rent your personal information to third parties. Your data is only used to communicate with you about your project. We use ${SITE_CONFIG.name}'s secure infrastructure to store data.` },
          { title: "Data Security", content: "We implement industry-standard security measures to protect your personal information. All data is transmitted over HTTPS and stored securely." },
          { title: "Cookies", content: "Our website may use cookies for analytics purposes (e.g., Google Analytics) to understand how visitors use our site. You can disable cookies in your browser settings." },
          { title: "Contact", content: `If you have any questions about this Privacy Policy, please contact us at ${SITE_CONFIG.email}.` },
        ].map((section) => (
          <div key={section.title} style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 10, color: "var(--primary-light)" }}>{section.title}</h2>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: 15 }}>{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
