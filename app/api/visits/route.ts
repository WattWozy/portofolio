import { NextRequest, NextResponse } from "next/server";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export async function POST(request: NextRequest) {
  try {
    // Get IP from request headers
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0] : request.ip || "Unknown";
    
    const response = await fetch(`${SUPABASE_URL}/rest/v1/visits`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        Prefer: "return=representation",
      },
      body: JSON.stringify([{ ip_address: ip, region: "Unknown" }]),
    });

    if (!response.ok) throw new Error("Failed to insert visit");
    const data = await response.json();

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error logging visit:", error);

    return NextResponse.json({ error: "Failed to log visit" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/visits?order=timestamp.desc`,
      {
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
      },
    );

    if (!response.ok) throw new Error("Failed to fetch visits");
    const data = await response.json();

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error fetching visits:", error);

    return NextResponse.json(
      { error: "Failed to fetch visits" },
      { status: 500 },
    );
  }
}
