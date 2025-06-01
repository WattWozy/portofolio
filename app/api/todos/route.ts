import { NextResponse } from "next/server";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export async function GET() {
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/todos`, {
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      },
    });

    if (!response.ok) throw new Error("Failed to fetch todos");
    const data = await response.json();

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error fetching todos:", error);

    return NextResponse.json(
      { error: "Failed to fetch todos" },
      { status: 500 },
    );
  }
}
