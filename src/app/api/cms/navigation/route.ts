import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ data: { header: [
    { label: "Levha & Pano", url: "/kategori/levha-pano" },
    { label: "Kumaş & Döşemelik", url: "/kategori/kumas-dosemelik" },
  ]}});
}
