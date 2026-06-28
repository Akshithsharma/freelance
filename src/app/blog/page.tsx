import Link from "next/link";
import { ArrowRight, Clock, Tag, ArrowLeft } from "lucide-react";
import { BLOG_POSTS } from "@/data/site";

export default function BlogPage() {
  return (
    <div style={{ paddingTop: 100, minHeight: "100vh" }}>
      <div className="container" style={{ paddingTop: 60, paddingBottom: 80 }}>
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--text-muted)", textDecoration: "none", fontSize: 14, marginBottom: 32 }}>
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <div style={{ marginBottom: 48 }}>
          <div className="section-tag">✍️ Blog</div>
          <h1 className="section-title">Articles & Tutorials</h1>
          <p className="section-subtitle">Deep dives into full-stack dev, AI integration, freelancing, and more.</p>
        </div>

        <div className="grid-3" style={{ gap: 24 }}>
          {BLOG_POSTS.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
              <div className="glass-card" style={{ padding: 24, height: "100%", display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className="badge badge-purple" style={{ fontSize: 11 }}>{post.category}</span>
                  <span style={{ fontSize: 12, color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 4 }}>
                    <Clock size={12} /> {post.readTime}
                  </span>
                </div>
                <h2 style={{ fontSize: "1rem", fontWeight: 700, lineHeight: 1.4, color: "var(--foreground)" }}>{post.title}</h2>
                <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.65, flex: 1 }}>{post.excerpt}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {post.tags.map(t => (
                    <span key={t} style={{ fontSize: 11, padding: "3px 10px", borderRadius: 50, background: "var(--surface-3)", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 4 }}>
                      <Tag size={9} /> {t}
                    </span>
                  ))}
                </div>
                <div style={{ paddingTop: 12, borderTop: "1px solid var(--border-light)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 12, color: "var(--text-muted)" }}>{new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
                  <span style={{ fontSize: 13, color: "var(--primary-light)", fontWeight: 600, display: "flex", alignItems: "center", gap: 4 }}>Read <ArrowRight size={13} /></span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Coming soon */}
        <div className="glass-card" style={{ marginTop: 48, padding: "32px 40px", textAlign: "center", borderColor: "rgba(108,99,255,0.2)" }}>
          <div style={{ fontSize: 32, marginBottom: 12 }}>🚀</div>
          <h3 style={{ fontWeight: 700, marginBottom: 8 }}>More articles coming soon</h3>
          <p style={{ color: "var(--text-muted)", fontSize: 14, marginBottom: 20 }}>Subscribe to the newsletter to get notified when new posts go live.</p>
          <Link href="/#newsletter" className="btn-primary">Subscribe Now</Link>
        </div>
      </div>
    </div>
  );
}
