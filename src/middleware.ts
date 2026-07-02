import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const user = req.auth?.user as any;

  // Admin işlem paneli (/admin altı, site-yonetimi hariç) — sadece admin
  if (pathname.startsWith("/admin") && !pathname.startsWith("/admin/site-yonetimi")) {
    if (user?.role === "superadmin") {
      return NextResponse.redirect(new URL("/admin/site-yonetimi", req.url));
    }
    if (user?.role !== "admin") {
      return NextResponse.redirect(new URL("/giris", req.url));
    }
  }

  // Site Yönetimi (/admin/site-yonetimi) — sadece superadmin
  if (pathname.startsWith("/admin/site-yonetimi")) {
    if (user?.role === "admin") {
      return NextResponse.redirect(new URL("/admin", req.url));
    }
    if (user?.role !== "superadmin") {
      return NextResponse.redirect(new URL("/giris", req.url));
    }
  }

  // Tedarikçi paneli sadece tedarikçi rolüne açık
  if (pathname.startsWith("/tedarikci-panel") && user?.role !== "tedarikci") {
    return NextResponse.redirect(new URL("/giris", req.url));
  }

  // Alıcı paneli sadece alıcı rolüne açık
  if (pathname.startsWith("/panelim") && !["alici"].includes(user?.role)) {
    return NextResponse.redirect(new URL("/giris", req.url));
  }

  // CMS V2 Super Admin paneli — sadece superadmin
  if (pathname.startsWith("/super-admin")) {
    if (user?.role !== "superadmin") {
      return NextResponse.redirect(new URL("/giris", req.url));
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/admin/:path*", "/panelim/:path*", "/tedarikci-panel/:path*", "/super-admin/:path*"],
};
