import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ data: [
    { id: "f1", title: "İletişim Formu", key: "contact", active: true, fields: [{ type: "text", label: "Ad Soyad", key: "name", required: true }, { type: "email", label: "E-posta", key: "email", required: true }] },
  ]});
}

export async function POST(req: Request) {
  const body = await req.json();
  return NextResponse.json({ data: { id: `f${Date.now()}`, ...body } }, { status: 201 });
}
