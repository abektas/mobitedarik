import { NextResponse } from "next/server";

let items: any[] = [
  { id: "p1", title: "Ana Sayfa", slug: "/", status: "published", sections: [] },
  { id: "p2", title: "Hakkımızda", slug: "/hakkimizda", status: "published", sections: [] },
];

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = items.find(i => i.id === id);
  if (!item) return NextResponse.json({ error: "Bulunamadı" }, { status: 404 });
  return NextResponse.json(item);
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const body = await req.json();
  const idx = items.findIndex(i => i.id === id);
  if (idx === -1) items.push({ id, ...body, createdAt: new Date().toISOString() });
  else items[idx] = { ...items[idx], ...body, updatedAt: new Date().toISOString() };
  return NextResponse.json({ success: true });
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  items = items.filter(i => i.id !== id);
  return NextResponse.json({ success: true });
}
