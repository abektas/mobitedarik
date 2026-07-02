import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ data: [
    { id: "m1", filename: "hero-bg.jpg", mimeType: "image/jpeg", size: 245000, tags: ["hero"], createdAt: "2026-06-28" },
    { id: "m2", filename: "mdf-urun.jpg", mimeType: "image/jpeg", size: 128000, tags: ["urun"], createdAt: "2026-06-25" },
  ]});
}
