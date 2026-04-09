import { NextRequest, NextResponse } from "next/server";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;

export async function POST(request: NextRequest) {
  try {
    // Get IP from request headers
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor
      ? forwardedFor.split(",")[0]
      : request.ip || "Unknown";

    const response = await fetch(`${SUPABASE_URL}/rest/v1/visits`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_SERVICE_ROLE_KEY,
        Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        Prefer: "return=representation",
      },
      body: JSON.stringify([{ ip_address: ip, region: "Unknown" }]),
    });

    if (!response.ok) {
      const errBody = await response.text();
      console.error("Supabase error inserting visit:", response.status, errBody);
      throw new Error(`Supabase ${response.status}: ${errBody}`);
    }
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
      `${SUPABASE_URL}/rest/v1/visits?order=timestamp.desc&limit=5`,
      {
        headers: {
          apikey: SUPABASE_SERVICE_ROLE_KEY,
          Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
          Prefer: "count=exact",
        },
      },
    );

    if (!response.ok) {
      const errBody = await response.text();
      console.error("Supabase error fetching visits:", response.status, errBody);
      throw new Error(`Supabase ${response.status}: ${errBody}`);
    }

    const data = await response.json();

    // Content-Range header: "0-4/1234" — the total is after the slash
    const contentRange = response.headers.get("content-range");
    const total = contentRange ? parseInt(contentRange.split("/")[1], 10) : data.length;

    return NextResponse.json({ success: true, data, total });
  } catch (error) {
    console.error("Error fetching visits:", error);

    return NextResponse.json(
      { error: "Failed to fetch visits", detail: String(error) },
      { status: 500 },
    );
  }
}
