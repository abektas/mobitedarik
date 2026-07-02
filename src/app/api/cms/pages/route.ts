import { NextResponse } from "next/server";

const items: any[] = [
  { id: "p1", title: "Ana Sayfa", slug: "/", status: "published", sortOrder: 0 },
  { id: "p2", title: "Hakkımızda", slug: "/hakkimizda", status: "published", sortOrder: 1 },
  { id: "p3", title: "İletişim", slug: "/iletisim", status: "published", sortOrder: 2 },
];

export async function GET() {
  return NextResponse.json({ data: items, total: items.length });
}

export async function POST(req: Request) {
  const body = await req.json();
  const item = { id: `p${Date.now()}`, ...body, status: "draft", createdAt: new Date().toISOString() };
  items.push(item);
  return NextResponse.json({ data: item }, { status: 201 });
}
