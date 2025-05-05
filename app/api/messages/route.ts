import { NextRequest, NextResponse } from "next/server";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export async function GET() {
  try {
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/messages?select=count`,
      {
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
      }
    );

    if (!response.ok) throw new Error("Failed to fetch message count");
    const data = await response.json();

    return NextResponse.json({ success: true, count: data[0].count });
  } catch (error) {
    console.error("Error fetching message count:", error);
    return NextResponse.json({ error: "Failed to fetch message count" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, message } = await request.json();
    
    const response = await fetch(`${SUPABASE_URL}/rest/v1/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        Prefer: "return=representation",
      },
      body: JSON.stringify([{ name, message }]),
    });

    if (!response.ok) throw new Error("Failed to insert message");
    const data = await response.json();

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error posting message:", error);
    return NextResponse.json({ error: "Failed to post message" }, { status: 500 });
  }
} 