import { NextRequest, NextResponse } from "next/server";

import { isLocalIP, maskIP } from "@/lib/visits";

export const dynamic = "force-dynamic";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const authHeaders = {
  apikey: SERVICE_KEY,
  Authorization: `Bearer ${SERVICE_KEY}`,
};

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "Unknown";

    // Skip your own dev traffic and unknown origins
    if (process.env.NODE_ENV !== "production" || isLocalIP(ip)) {
      return NextResponse.json({ success: true, skipped: true });
    }

    const response = await fetch(`${SUPABASE_URL}/rest/v1/visits`, {
      method: "POST",
      headers: {
        ...authHeaders,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      // Only the masked address is ever stored
      body: JSON.stringify([{ ip_address: maskIP(ip), region: "Unknown" }]),
    });

    if (!response.ok) {
      console.error(
        "Supabase insert failed:",
        response.status,
        await response.text(),
      );
      return NextResponse.json(
        { error: "Failed to log visit" },
        { status: 502 },
      );
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error logging visit:", error);
    return NextResponse.json({ error: "Failed to log visit" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/visits?select=id,timestamp,ip_address&order=timestamp.desc&limit=5`,
      { headers: { ...authHeaders, Prefer: "count=exact" }, cache: "no-store" },
    );

    if (!response.ok) {
      console.error(
        "Supabase fetch failed:",
        response.status,
        await response.text(),
      );
      return NextResponse.json(
        { error: "Failed to fetch visits" },
        { status: 502 },
      );
    }

    const rows: { id: string; timestamp: string; ip_address: string }[] =
      await response.json();
    const range = response.headers.get("content-range"); // "0-4/1234"
    const total = range ? parseInt(range.split("/")[1], 10) : rows.length;

    return NextResponse.json({
      success: true,
      // Masked again on output, so legacy unmasked rows can't leak
      data: rows.map((r) => ({ ...r, ip_address: maskIP(r.ip_address) })),
      total,
    });
  } catch (error) {
    console.error("Error fetching visits:", error);
    return NextResponse.json(
      { error: "Failed to fetch visits" },
      { status: 500 },
    );
  }
}
