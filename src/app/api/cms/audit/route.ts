import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ data: [
    { label: "Ana Sayfa", url: "/" },
    { label: "Hakkımızda", url: "/hakkimizda" },
  ]});
}
