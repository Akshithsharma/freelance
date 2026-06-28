// ============================================================
// SITE CONFIGURATION — Edit everything in this file to
// personalise your portfolio without touching any components
// ============================================================

export const SITE_CONFIG = {
  name: "Akshith Sharma",
  title: "Full-Stack Developer & AI Solutions Expert",
  tagline: "I build scalable web apps, AI-powered tools, and digital products that drive real business results.",
  email: "akshithsharmapokkuluri@gmail.com",        // ← change
  phone: "+91 6300279516",                  // ← change
  whatsapp: "916300279516",                  // ← change
  location: "Andhra Pradesh, India",
  linkedin: "https://linkedin.com/in/akshithsharma/",
  github: "https://github.com/Akshithsharma",
  leetcode: "https://leetcode.com/u/P_A_R_L_Sharma/",
  resume: "/resume.pdf",                     // ← drop your resume in /public/resume.pdf
  avatar: "/avatar.jpg",                     // ← drop your photo in /public/avatar.jpg
  calendly: "https://calendly.com/akshithsharma50", // ← change
};



// ── SKILLS / TECH STACK ───────────────────────────────────────
export const SKILLS = [
  { category: "Frontend",  items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend",   items: ["Node.js", "FastAPI", "Express", "Socket.io", "REST APIs"] },
  { category: "Database",  items: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Prisma"] },
  { category: "DevOps",    items: ["Docker", "Vercel", "Render", "AWS S3", "CI/CD"] },
  { category: "AI / ML",   items: ["Google Gemini", "OpenAI API", "Python", "scikit-learn", "LangChain"] },
  { category: "Tools",     items: ["Git", "Figma", "Postman", "Linux", "VS Code"] },
];

// ── SERVICES ─────────────────────────────────────────────────
export const SERVICES = [
  {
    icon: "🌐",
    title: "Business Websites",
    slug: "business-websites",
    desc: "Clean, fast, SEO-optimised websites that represent your brand perfectly and convert visitors into clients.",
    features: ["Custom Design", "SEO Optimised", "Mobile Responsive", "CMS Integration"],
    price: "₹10,000",
  },
  {
    icon: "📱",
    title: "Mobile Apps",
    slug: "mobile-apps",
    desc: "Cross-platform mobile applications built with React Native that work seamlessly on iOS and Android.",
    features: ["React Native", "iOS & Android", "Push Notifications", "Offline Support"],
    price: "₹25,000",
  },
  {
    icon: "🛒",
    title: "E-commerce Websites",
    slug: "ecommerce",
    desc: "Full-featured online stores with payment integration, inventory management, and admin dashboards.",
    features: ["Payment Gateway", "Inventory", "Admin Dashboard", "Analytics"],
    price: "₹20,000",
  },
  {
    icon: "🎓",
    title: "Student Projects",
    slug: "student-projects",
    desc: "Complete academic projects with documentation, presentation support, and live deployment.",
    features: ["Full Source Code", "Documentation", "Deployment", "Presentation Help"],
    price: "₹5,000",
  },
  {
    icon: "🤖",
    title: "AI Solutions",
    slug: "ai-solutions",
    desc: "Custom AI-powered tools, chatbots, recommendation engines, and automation systems.",
    features: ["Gemini / GPT APIs", "Custom Models", "Chatbots", "Automation"],
    price: "₹15,000",
  },
  {
    icon: "🔄",
    title: "Website Redesign",
    slug: "redesign",
    desc: "Transform your outdated website into a modern, high-performance digital experience.",
    features: ["Modern UI/UX", "Performance Boost", "SEO Fix", "Content Migration"],
    price: "₹8,000",
  },
  {
    icon: "🔧",
    title: "Website Maintenance",
    slug: "maintenance",
    desc: "Ongoing support, updates, security patches, and performance monitoring for your website.",
    features: ["Monthly Updates", "Security Patches", "Uptime Monitoring", "Bug Fixes"],
    price: "₹1,500/mo",
  },
  {
    icon: "⚡",
    title: "Full-Stack SaaS",
    slug: "saas",
    desc: "End-to-end SaaS product development with auth, billing, dashboards, and scalable architecture.",
    features: ["Auth & Billing", "Multi-tenant", "Dashboard", "Scalable Infra"],
    price: "₹40,000",
  },
];

// ── PRICING PACKAGES ──────────────────────────────────────────
export const PACKAGES = [
  {
    name: "Starter",
    price: "₹10,000",
    desc: "Perfect for individuals and small businesses getting online",
    popular: false,
    features: [
      "Up to 5 pages",
      "Mobile responsive design",
      "Contact form",
      "Basic SEO setup",
      "1 round of revisions",
      "Deployment on Vercel",
      "1 month free support",
    ],
    notIncluded: ["Admin dashboard", "Custom animations", "E-commerce features"],
  },
  {
    name: "Professional",
    price: "₹20,000",
    desc: "For growing businesses that need more features and polish",
    popular: true,
    features: [
      "Up to 10 pages",
      "Custom animations",
      "Admin dashboard",
      "Blog / CMS",
      "Advanced SEO",
      "3 rounds of revisions",
      "Deployment + CI/CD",
      "3 months free support",
      "Performance optimised",
    ],
    notIncluded: ["AI features", "Mobile app"],
  },
  {
    name: "Premium",
    price: "₹40,000",
    desc: "Full-scale digital product with AI, auth, and everything",
    popular: false,
    features: [
      "Unlimited pages",
      "AI/ML integration",
      "Authentication system",
      "Payment gateway",
      "Custom API development",
      "Mobile-ready PWA",
      "Unlimited revisions",
      "6 months support",
      "Full source code + docs",
      "Priority support",
    ],
    notIncluded: [],
  },
];

export const ADD_ONS = [
  { name: "Admin Panel", price: "₹5,000" },
  { name: "SEO Package", price: "₹3,000" },
  { name: "Authentication", price: "₹4,000" },
  { name: "Payment Gateway", price: "₹3,500" },
  { name: "AI Chatbot", price: "₹6,000" },
  { name: "CMS Integration", price: "₹4,000" },
  { name: "WhatsApp Integration", price: "₹2,000" },
  { name: "Domain + Hosting Setup", price: "₹1,500" },
];




// ── BLOG POSTS ────────────────────────────────────────────────
export const BLOG_POSTS = [
  {
    slug: "building-realtime-chat-socketio",
    title: "Building Real-Time Chat Apps with Socket.io and Redis",
    category: "Tutorial",
    date: "2026-06-10",
    readTime: "8 min",
    excerpt: "A deep dive into building scalable real-time chat with Socket.io, Redis pub/sub, and PostgreSQL for message persistence.",
    tags: ["Node.js", "Socket.io", "Redis"],
  },
  {
    slug: "nextjs-15-app-router-guide",
    title: "Next.js 15 App Router: Everything You Need to Know",
    category: "Tech Updates",
    date: "2026-05-20",
    readTime: "10 min",
    excerpt: "Complete guide to Next.js 15's App Router, Server Components, Server Actions, and the new caching model.",
    tags: ["Next.js", "React"],
  },
  {
    slug: "ai-powered-saas-gemini",
    title: "Building AI-Powered SaaS with Google Gemini",
    category: "AI / ML",
    date: "2026-04-15",
    readTime: "12 min",
    excerpt: "Step-by-step guide to integrating Google Gemini into your SaaS product for intelligent features.",
    tags: ["AI", "Gemini", "SaaS"],
  },
  {
    slug: "supabase-vs-firebase-2026",
    title: "Supabase vs Firebase in 2026: Which Should You Choose?",
    category: "Tech Updates",
    date: "2026-03-08",
    readTime: "6 min",
    excerpt: "Honest comparison of Supabase and Firebase for modern web apps — pricing, features, and developer experience.",
    tags: ["Supabase", "Firebase", "Backend"],
  },
];

// ── FAQ ───────────────────────────────────────────────────────
export const FAQS = [
  {
    category: "Pricing & Packages",
    questions: [
      { q: "What's included in the Starter package?", a: "The Starter package (₹10,000) includes up to 5 pages, mobile-responsive design, contact form, basic SEO setup, 1 revision round, Vercel deployment, and 1 month of free support." },
      { q: "Do you offer custom pricing?", a: "Absolutely! Every project is unique. Contact me with your requirements and I'll send a custom quote within 24 hours." },
      { q: "What payment methods do you accept?", a: "I accept UPI, bank transfer, Razorpay, and international payments via PayPal. 50% advance, 50% on delivery." },
    ],
  },
  {
    category: "Process & Timeline",
    questions: [
      { q: "How long does a project take?", a: "Starter projects: 1–2 weeks. Professional: 2–4 weeks. Premium/SaaS: 4–8 weeks. Timelines depend on complexity and how quickly you provide feedback." },
      { q: "What is your development process?", a: "Discovery → Design Mockup → Development → Testing → Deployment → Handover. You'll get regular updates and can track progress through the client portal." },
      { q: "Can I request changes after delivery?", a: "Yes! Each package includes revision rounds. After that, changes are billed at ₹500/hour or covered under a maintenance plan." },
    ],
  },
  {
    category: "Maintenance & Support",
    questions: [
      { q: "What does the maintenance plan include?", a: "Monthly updates, security patches, uptime monitoring, bug fixes, content updates, and priority WhatsApp support. Plans start at ₹1,500/month." },
      { q: "Do you provide source code?", a: "Yes, all projects include full source code on delivery. You own everything you pay for." },
    ],
  },
  {
    category: "Domain & Hosting",
    questions: [
      { q: "Do you help with domain and hosting?", a: "Yes! I can set up and configure your domain (₹800–1,200/year) and hosting (Vercel free tier or paid plans). One-time setup fee: ₹1,500." },
      { q: "Can you migrate my existing website?", a: "Absolutely. I handle full migration including DNS, SSL, and content transfer with zero downtime." },
    ],
  },
];

// ── TECH STACK (for About / Tech section) ────────────────────
export const TECH_STACK = {
  frontend: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
  backend: ["FastAPI", "Node.js", "Express", "Socket.io", "REST / GraphQL"],
  database: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Prisma ORM"],
  devops: ["Docker", "Vercel", "Render", "Railway", "AWS S3", "Cloudflare CDN"],
  ai: ["Google Gemini", "OpenAI API", "LangChain", "scikit-learn", "Python"],
  auth: ["NextAuth.js", "Clerk", "Supabase Auth", "JWT"],
};

// ── TIMELINE / JOURNEY ────────────────────────────────────────
export const TIMELINE = [
  { year: "2023", title: "Started B.Tech CSE", desc: "Joined Pragati Engineering College, Andhra Pradesh. Began competitive programming." },
  { year: "2024", title: "First Web Projects & 650+ LeetCode", desc: "Built my first React and full-stack apps. Reached 650+ problems on LeetCode and started building real-world projects." },
  
  { year: "2025", title: "Deployed Production Apps", desc: "Launched Buddy Chat, Habit Tracker, and Student At-Risk Prediction in production." },
  { year: "2026", title: "Freelancing & CareerOS", desc: "Started freelancing. Building CareerOS AI — an ambitious SaaS platform for students." },
  { year: "2027", title: "Graduating", desc: "Expected graduation with CGPA 8.0. Targeting top tech companies and product roles." },
];

// ── RESOURCES ────────────────────────────────────────────────
export const RESOURCES = [
  { title: "React Cheatsheet", type: "PDF", desc: "Complete React hooks and patterns reference", url: "#" },
  { title: "Next.js Starter Template", type: "Template", desc: "Production-ready Next.js 15 starter with auth and DB", url: "#" },
  { title: "Tailwind CSS Components", type: "Template", desc: "50+ copy-paste UI components for Tailwind CSS", url: "#" },
  { title: "System Design Notes", type: "PDF", desc: "My personal notes on system design for interviews", url: "#" },
  { title: "DSA Problem List", type: "PDF", desc: "Curated 150 DSA problems to crack FAANG interviews", url: "#" },
  { title: "Freelancing Proposal Template", type: "Template", desc: "The exact proposal template I use to win clients", url: "#" },
];
