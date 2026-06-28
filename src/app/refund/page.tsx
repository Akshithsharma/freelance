import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function RefundPage() {
  return (
    <div style={{ paddingTop: 100, minHeight: "100vh" }}>
      <div className="container" style={{ maxWidth: 760, paddingTop: 40, paddingBottom: 80 }}>
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--text-muted)", textDecoration: "none", fontSize: 14, marginBottom: 40 }}>
          <ArrowLeft size={16} /> Back to Home
        </Link>
        <h1 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: 8 }}>Refund Policy</h1>
        <p style={{ color: "var(--text-muted)", marginBottom: 40 }}>Last updated: June 2026</p>

        {[
          { title: "Advance Payment", content: "The 50% advance payment is non-refundable as it covers initial planning, research, design mockups, and setup time invested before development begins." },
          { title: "Cancellation Before Development", content: "If you cancel before development begins (within 48 hours of advance payment), we will refund 50% of the advance — keeping only the consultation and planning fee." },
          { title: "Cancellation During Development", content: "If you cancel during development, you will receive the work completed up to that point. No additional refund of the advance is provided, but you will not owe the remaining balance." },
          { title: "Final Payment Refund", content: "The final payment (50% on delivery) is non-refundable once the completed project has been delivered and approved by the client." },
          { title: "Disputes", content: "If you are unsatisfied with the delivered work, please raise concerns within 7 days of delivery. We will work to resolve issues through additional revisions or partial refund on a case-by-case basis." },
          { title: "Maintenance Plans", content: "Monthly maintenance plans can be cancelled with 7 days' notice before the next billing cycle. No refunds are issued for the current month's payment." },
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
