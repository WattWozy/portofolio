import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // Get IP from request headers
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor
      ? forwardedFor.split(",")[0]
      : request.ip || "Unknown";

    return NextResponse.json({
      ip,
      region: "Unknown", // We'll keep this field for compatibility
    });
  } catch (error) {
    console.error("Error getting visitor info:", error);

    return NextResponse.json(
      {
        ip: "Unknown",
        region: "Unknown",
      },
      { status: 500 },
    );
  }
}
