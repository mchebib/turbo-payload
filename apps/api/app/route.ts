import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    name: "turbo-payload-api",
    status: "ok",
    version: "v1",
    endpoints: {
      health: "/health",
      ready: "/ready",
      api: "/v1",
    },
  });
}
