import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ version: "2.0", status: "operational", modules: ["pages", "sections", "media", "posts", "themes", "navigation", "seo", "forms", "components", "audit", "versions", "schedule", "settings"] });
}
