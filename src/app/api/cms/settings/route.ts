import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ data: { siteTitle: "MobiTedarik", kayitAktif: true } });
}

export async function PUT(req: Request) {
  return NextResponse.json({ success: true });
}
