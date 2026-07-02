import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ data: [
    { id: "t1", name: "Light", isActive: true, tokens: { colors: { primary: "#1a5e3a", accent: "#c8703a" } } },
  ]});
}
