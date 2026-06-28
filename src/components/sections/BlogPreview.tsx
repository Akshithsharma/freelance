import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { BLOG_POSTS } from "@/data/site";

export default function BlogPreview() {
  const featured = BLOG_POSTS.slice(0, 3);

  return (
    <section id="blog" className="section-wrapper">
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
          <div>
            <div className="section-tag">✍️ Blog</div>
            <h2 className="section-title" style={{ marginBottom: 8 }}>Insights & Tutorials</h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "1rem" }}>Technical articles, project stories, and freelancing tips.</p>
          </div>
          <Link href="/blog" className="btn-outline" style={{ whiteSpace: "nowrap" }}>
            All Posts <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid-3">
          {featured.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
              <div className="glass-card" style={{ padding: 24, height: "100%", display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className="badge badge-purple" style={{ fontSize: 11 }}>{post.category}</span>
                  <span style={{ fontSize: 12, color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 4 }}>
                    <Clock size={12} /> {post.readTime}
                  </span>
                </div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, lineHeight: 1.4, color: "var(--foreground)" }}>{post.title}</h3>
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
      </div>
    </section>
  );
}
