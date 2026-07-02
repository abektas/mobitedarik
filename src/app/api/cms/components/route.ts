import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ data: [
    { key: "hero", name: "Hero Banner", category: "content" },
    { key: "text-block", name: "Metin Bloğu", category: "content" },
    { key: "image-block", name: "Görsel", category: "media" },
    { key: "gallery", name: "Galeri", category: "media" },
    { key: "cards", name: "Kartlar", category: "content" },
    { key: "cta", name: "CTA Butonu", category: "content" },
    { key: "columns", name: "Kolonlar", category: "layout" },
    { key: "video", name: "Video", category: "media" },
    { key: "html-block", name: "HTML Bloğu", category: "custom" },
    { key: "form-block", name: "Form", category: "form" },
    { key: "nav-menu", name: "Menü", category: "navigation" },
    { key: "contact-info", name: "İletişim", category: "content" },
    { key: "featured-suppliers", name: "Tedarikçiler", category: "content" },
    { key: "blog-posts", name: "Blog Yazıları", category: "content" },
  ]});
}
