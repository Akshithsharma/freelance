import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email) return NextResponse.json({ error: "Email required" }, { status: 400 });

    // ── Option 1: Save to Supabase ──────────────────────────────────────
    // const { createClient } = require("@supabase/supabase-js");
    // const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_KEY!);
    // await supabase.from("subscribers").upsert({ email }, { onConflict: "email" });

    // ── Option 2: Mailchimp ─────────────────────────────────────────────
    // const mailchimp = require("@mailchimp/mailchimp_marketing");
    // mailchimp.setConfig({ apiKey: process.env.MAILCHIMP_API_KEY, server: process.env.MAILCHIMP_SERVER });
    // await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID, { email_address: email, status: "subscribed" });

    console.log("📬 New subscriber:", email);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Newsletter API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
