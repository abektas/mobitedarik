import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ data: [
    { id: "g1", title: "EUDR: AB Ormansızlaşma Yönetmeliği", slug: "eudr-ab", category: "sektorel_haberler", status: "published", createdAt: "2026-06-15" },
    { id: "g2", title: "Sunta ve MDF Fiyatları", slug: "sunta-mdf-fiyat", category: "piyasa_fiyat", status: "draft", createdAt: "2026-06-28" },
  ]});
}

export async function POST(req: Request) {
  const body = await req.json();
  return NextResponse.json({ data: { id: `post${Date.now()}`, ...body, createdAt: new Date().toISOString() } }, { status: 201 });
}
