import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ data: [] });
}

export async function POST(req: Request) {
  const body = await req.json();
  return NextResponse.json({ data: { id: `sec${Date.now()}`, ...body } }, { status: 201 });
}
