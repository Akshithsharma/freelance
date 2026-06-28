import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, projectType, budget, timeline, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // ── Option 1: Send via Nodemailer (SMTP) ─────────────────────────────
    // Uncomment and fill in your SMTP details in .env.local:
    //   EMAIL_HOST=smtp.gmail.com
    //   EMAIL_PORT=587
    //   EMAIL_USER=your@gmail.com
    //   EMAIL_PASS=your-app-password
    //   EMAIL_TO=your@gmail.com
    //
    // const nodemailer = require("nodemailer");
    // const transporter = nodemailer.createTransport({
    //   host: process.env.EMAIL_HOST,
    //   port: Number(process.env.EMAIL_PORT),
    //   secure: false,
    //   auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    // });
    // await transporter.sendMail({
    //   from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    //   to: process.env.EMAIL_TO,
    //   subject: `New inquiry from ${name} — ${projectType || "General"}`,
    //   html: `
    //     <h2>New Project Inquiry</h2>
    //     <p><b>Name:</b> ${name}</p>
    //     <p><b>Email:</b> ${email}</p>
    //     <p><b>Phone:</b> ${phone || "N/A"}</p>
    //     <p><b>Project Type:</b> ${projectType || "N/A"}</p>
    //     <p><b>Budget:</b> ${budget || "N/A"}</p>
    //     <p><b>Timeline:</b> ${timeline || "N/A"}</p>
    //     <p><b>Message:</b><br/>${message}</p>
    //   `,
    // });

    // ── Option 2: Save to Supabase ────────────────────────────────────────
    // const { createClient } = require("@supabase/supabase-js");
    // const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_KEY!);
    // await supabase.from("inquiries").insert({ name, email, phone, project_type: projectType, budget, timeline, message });

    // ── Option 3: Log to console (default for dev) ─────────────────────
    console.log("📩 New contact inquiry:", { name, email, phone, projectType, budget, timeline, message });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
