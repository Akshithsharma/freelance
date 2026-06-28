import Link from "next/link";
import { ArrowLeft, Clock, Tag } from "lucide-react";
import { BLOG_POSTS } from "@/data/site";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return BLOG_POSTS.map(p => ({ slug: p.slug }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find(p => p.slug === params.slug);
  if (!post) notFound();

  return (
    <div style={{ paddingTop: 100, minHeight: "100vh" }}>
      <div className="container" style={{ maxWidth: 760, paddingTop: 40, paddingBottom: 80 }}>
        <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--text-muted)", textDecoration: "none", fontSize: 14, marginBottom: 40 }}>
          <ArrowLeft size={16} /> All Posts
        </Link>

        <div style={{ marginBottom: 40 }}>
          <div style={{ display: "flex", gap: 12, marginBottom: 16, flexWrap: "wrap", alignItems: "center" }}>
            <span className="badge badge-purple">{post.category}</span>
            <span style={{ fontSize: 13, color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 4 }}>
              <Clock size={13} /> {post.readTime}
            </span>
            <span style={{ fontSize: 13, color: "var(--text-muted)" }}>
              {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
            </span>
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: 16 }}>{post.title}</h1>
          <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>{post.excerpt}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16 }}>
            {post.tags.map(t => (
              <span key={t} style={{ fontSize: 12, padding: "4px 12px", borderRadius: 50, background: "var(--surface-3)", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 4 }}>
                <Tag size={10} /> {t}
              </span>
            ))}
          </div>
        </div>

        <div className="divider" />

        {/* Article content placeholder — replace with MDX or CMS content */}
        <article style={{ marginTop: 40 }}>
          <div className="glass-card" style={{ padding: 40, textAlign: "center" }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>📝</div>
            <h3 style={{ fontWeight: 700, marginBottom: 8 }}>Full article coming soon</h3>
            <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>
              This is a placeholder for the full blog post content. You can write articles directly in this component,
              or integrate a CMS like Contentful, Sanity, or use MDX files for a file-based blog.
            </p>
            <div style={{ background: "var(--surface-3)", borderRadius: 10, padding: 20, textAlign: "left", fontSize: 13, color: "var(--text-muted)", fontFamily: "monospace" }}>
              <div style={{ color: "var(--text-secondary)", marginBottom: 8 }}>// To add full content, edit:</div>
              <div>src/app/blog/[slug]/page.tsx</div>
              <div style={{ marginTop: 8, color: "var(--text-secondary)" }}>// Or add MDX files and use next-mdx-remote</div>
            </div>
          </div>
        </article>

        <div className="divider" style={{ margin: "48px 0" }} />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <Link href="/blog" className="btn-outline"><ArrowLeft size={16} /> More Articles</Link>
          <Link href="/#contact" className="btn-primary">Work With Me</Link>
        </div>
      </div>
    </div>
  );
}
