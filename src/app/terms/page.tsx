import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";

export default function TermsPage() {
  return (
    <div style={{ paddingTop: 100, minHeight: "100vh" }}>
      <div className="container" style={{ maxWidth: 760, paddingTop: 40, paddingBottom: 80 }}>
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--text-muted)", textDecoration: "none", fontSize: 14, marginBottom: 40 }}>
          <ArrowLeft size={16} /> Back to Home
        </Link>
        <h1 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: 8 }}>Terms of Service</h1>
        <p style={{ color: "var(--text-muted)", marginBottom: 40 }}>Last updated: June 2026</p>

        {[
          { title: "Acceptance of Terms", content: "By engaging our services, you agree to these Terms of Service. These terms govern the working relationship between you (the client) and Ram Sharma (the developer)." },
          { title: "Project Agreement", content: "All projects require a signed project agreement outlining scope, deliverables, timeline, and payment terms before work begins. Any changes to scope will be discussed and agreed upon in writing." },
          { title: "Payment Terms", content: "A 50% advance payment is required before project commencement. The remaining 50% is due upon project delivery. For projects over ₹40,000, milestone-based payments may be arranged." },
          { title: "Revisions", content: "Each package includes a set number of revision rounds as specified at the time of quotation. Additional revisions beyond the agreed scope are billed at ₹500/hour." },
          { title: "Intellectual Property", content: "Upon full payment, the client receives complete ownership of the delivered work, including all source code and assets. Developer retains the right to showcase the work in portfolio unless otherwise agreed." },
          { title: "Confidentiality", content: "We treat all client information, business data, and project details with strict confidentiality and will not disclose them to third parties without written consent." },
          { title: "Limitation of Liability", content: "Our liability is limited to the project fee paid. We are not liable for indirect damages, lost profits, or business interruption arising from use of delivered software." },
          { title: "Contact", content: `For questions about these terms, contact us at ${SITE_CONFIG.email}.` },
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
