import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ data: { siteTitle: "MobiTedarik", siteDescription: "B2B Platform", siteUrl: "https://www.mobitedarik.com" } });
}
