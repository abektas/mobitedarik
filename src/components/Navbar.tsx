"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { navKategoriler } from "@/data/site-data";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMega, setOpenMega] = useState<string | null>(null);
  const { data: session } = useSession();
  const user = session?.user as any;

  return (
    <header>
      {/* Üst Bilgi Çubuğu */}
      <div className="bg-warm-900 text-warm-300 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-8">
          <span className="hidden sm:block">B2B Mobilya Malzeme Tedarik Platformu</span>
          <div className="flex items-center gap-4">
            <Link href="/tedarikci-ol" className="hover:text-accent transition-colors">Tedarikçi Ol</Link>
            <span className="text-warm-600">|</span>
            <Link href="/destek" className="hover:text-accent transition-colors">Yardım</Link>
            <span className="text-warm-600 hidden sm:inline">|</span>
            <Link href="/gundem" className="hover:text-accent transition-colors hidden sm:inline">Gündem</Link>
          </div>
        </div>
      </div>

      {/* Ana Header */}
      <div className="bg-white border-b border-warm-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-base">MT</span>
              </div>
              <div className="leading-tight">
                <span className="text-lg font-bold text-primary">Mobi</span>
                <span className="text-lg font-bold text-warm-600">Tedarik</span>
              </div>
            </Link>

            {/* Arama */}
            <div className="hidden md:flex flex-1 max-w-xl mx-6">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Malzeme, tedarikçi veya kategori ara..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-warm-300 bg-warm-50 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-warm-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Sağ Butonlar */}
            <div className="flex items-center gap-3">
              <Link href="/teklif-iste" className="hidden lg:flex items-center gap-1.5 bg-accent text-white px-4 py-2 rounded-lg hover:bg-accent-light transition-colors text-sm font-semibold">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                Teklif İste
              </Link>
              <Link href="/panelim/siparislerim" className="hidden sm:flex items-center gap-1.5 text-warm-600 hover:text-primary transition-colors text-sm font-medium px-3 py-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                <span className="hidden lg:inline">Sepet</span>
              </Link>
              {session ? (
                <div className="flex items-center gap-2">
                  <Link
                    href={user?.role === "superadmin" ? "/admin/site-yonetimi" : user?.role === "admin" ? "/admin" : user?.role === "tedarikci" ? "/tedarikci-panel" : "/panelim/siparislerim"}
                    className="flex items-center gap-1.5 text-primary hover:text-primary-dark transition-colors text-sm font-medium px-3 py-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    <span className="hidden lg:inline">{user?.name || "Hesabım"}</span>
                  </Link>
                  <button onClick={async () => {
                    await signOut({ redirect: false });
                    window.location.href = "/guvenli-cikis";
                  }} className="text-xs bg-red-50 text-red-600 hover:bg-red-100 border border-red-200 px-3 py-1.5 rounded-lg font-medium transition-colors">
                    🔒 Güvenli Çıkış
                  </button>
                </div>
              ) : (
                <Link href="/giris" className="flex items-center gap-1.5 text-warm-600 hover:text-primary transition-colors text-sm font-medium px-3 py-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                  <span className="hidden lg:inline">Giriş Yap</span>
                </Link>
              )}
              {/* Mobile Menu Toggle */}
              <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 rounded-lg hover:bg-warm-100 transition-colors" aria-label="Menü">
                <svg className="w-5 h-5 text-warm-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {menuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Kategori Navigasyonu (Mega Menü) */}
      <nav className="hidden lg:block bg-warm-50 border-b border-warm-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center gap-0">
            {navKategoriler.map((kat) => (
              <li key={kat.href} className="relative" onMouseEnter={() => setOpenMega(kat.href)} onMouseLeave={() => setOpenMega(null)}>
                <Link href={kat.href} className="flex items-center gap-1 px-3.5 py-3 text-sm font-medium text-warm-700 hover:text-primary hover:bg-white/50 transition-colors border-b-2 border-transparent hover:border-primary">
                  {kat.ad}
                  <svg className="w-3.5 h-3.5 text-warm-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </Link>
                {openMega === kat.href && (
                  <div className="absolute left-0 top-full bg-white border border-warm-200 rounded-xl shadow-lg p-5 min-w-[280px] z-50">
                    <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
                      {kat.altKategoriler.map((alt) => (
                        <Link key={alt.href} href={alt.href} className="text-sm text-warm-600 hover:text-primary hover:font-medium transition-colors">
                          {alt.ad}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
            <li>
              <Link href="/cinden-tedarik" className="flex items-center gap-1 px-3.5 py-3 text-sm font-medium text-accent hover:text-accent-light transition-colors border-b-2 border-transparent hover:border-accent">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot" />
                Çin'den Tedarik
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-b border-warm-200">
          <div className="px-4 py-4 space-y-1">
            {/* Mobile Search */}
            <div className="relative mb-4">
              <input type="text" placeholder="Malzeme ara..." className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-warm-300 bg-warm-50 text-sm focus:border-primary outline-none" />
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-warm-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
            {navKategoriler.map((kat) => (
              <div key={kat.href}>
                <Link href={kat.href} onClick={() => setMenuOpen(false)} className="block px-3 py-2.5 text-sm font-medium text-warm-700 hover:bg-warm-50 rounded-lg transition-colors">
                  {kat.ad}
                </Link>
              </div>
            ))}
            <div className="border-t border-warm-200 pt-3 mt-3 space-y-1">
              <Link href="/tedarikci-ol" onClick={() => setMenuOpen(false)} className="block px-3 py-2.5 text-sm font-medium text-primary hover:bg-warm-50 rounded-lg">Tedarikçi Ol</Link>
              <Link href="/teklif-iste" onClick={() => setMenuOpen(false)} className="block px-3 py-2.5 text-sm font-medium text-accent hover:bg-warm-50 rounded-lg">Teklif İste</Link>
              <Link href="/giris" onClick={() => setMenuOpen(false)} className="block px-3 py-2.5 text-sm font-medium text-warm-600 hover:bg-warm-50 rounded-lg">Giriş Yap</Link>
              <Link href="/gundem" onClick={() => setMenuOpen(false)} className="block px-3 py-2.5 text-sm text-warm-500 hover:bg-warm-50 rounded-lg">Gündem</Link>
              <Link href="/cinden-tedarik" onClick={() => setMenuOpen(false)} className="block px-3 py-2.5 text-sm font-medium text-accent hover:bg-warm-50 rounded-lg">🇨🇳 Çin'den Tedarik</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
