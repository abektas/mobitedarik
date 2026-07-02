import Link from "next/link";
import { auth } from "@/lib/auth";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  const user = session?.user as any;
  const isSuperAdmin = user?.role === "superadmin";

  if (isSuperAdmin) {
    return (
      <div className="min-h-screen bg-warm-50">
        <div className="flex">
          <aside className="w-64 bg-white border-r border-warm-200 min-h-screen p-4 hidden lg:block">
            <div className="mb-6">
              <div className="flex items-center gap-2">
                <span className="text-lg">🔧</span>
                <h1 className="text-lg font-bold text-warm-900">Super Admin</h1>
              </div>
              <p className="text-xs text-warm-400">Sistem Yönetimi</p>
            </div>
            <nav className="space-y-6">
              <div className="pb-4 border-b border-warm-200">
                <Link href="/super-admin" className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-semibold text-primary bg-primary/5 hover:bg-primary/10 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  ⚡ CMS V2'ye Dön
                </Link>
              </div>
              <div>
                <h2 className="text-[10px] font-semibold text-warm-400 uppercase tracking-wider mb-2">Sistem</h2>
                <ul className="space-y-1">
                  {[
                    { href: "/admin/site-yonetimi", label: "Genel Durum", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg> },
                    { href: "/admin/site-yonetimi/sistem-ayarlari", label: "Sistem Ayarları", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg> },
                    { href: "/admin/site-yonetimi/veritabani", label: "Veritabanı", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" /></svg> },
                    { href: "/admin/site-yonetimi/cron", label: "Cron İşleri", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
                    { href: "/admin/site-yonetimi/performans", label: "Performans", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg> },
                  ].map(item => (
                    <li key={item.href}>
                      <Link href={item.href} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-warm-600 hover:bg-warm-50 hover:text-primary transition-colors">{item.icon}{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-[10px] font-semibold text-warm-400 uppercase tracking-wider mb-2">Güvenlik</h2>
                <ul className="space-y-1">
                  {[
                    { href: "/admin/site-yonetimi/guvenlik", label: "Güvenlik", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg> },
                    { href: "/admin/site-yonetimi/api-anahtarlari", label: "API Anahtarları", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg> },
                    { href: "/admin/site-yonetimi/hata-log", label: "Hata Logları", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg> },
                  ].map(item => (
                    <li key={item.href}>
                      <Link href={item.href} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-warm-600 hover:bg-warm-50 hover:text-primary transition-colors">{item.icon}{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-[10px] font-semibold text-warm-400 uppercase tracking-wider mb-2">Bakım</h2>
                <ul className="space-y-1">
                  {[
                    { href: "/admin/site-yonetimi/one-bellek", label: "Önbellek", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg> },
                    { href: "/admin/site-yonetimi/yedekleme", label: "Yedekleme", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg> },
                    { href: "/admin/site-yonetimi/eposta-ayarlari", label: "E-posta", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
                    { href: "/admin/site-yonetimi/entegrasyonlar", label: "Entegrasyonlar", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg> },
                  ].map(item => (
                    <li key={item.href}>
                      <Link href={item.href} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-warm-600 hover:bg-warm-50 hover:text-primary transition-colors">{item.icon}{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </aside>
          <main className="flex-1 p-6 lg:p-8">{children}</main>
        </div>
      </div>
    );
  }

  // Normal admin layout
  return (
    <div className="min-h-screen bg-warm-50">
      <div className="flex">
        <aside className="w-64 bg-white border-r border-warm-200 min-h-screen p-4 hidden lg:block">
          <div className="mb-6">
            <h1 className="text-lg font-bold text-warm-900">Admin Paneli</h1>
            <p className="text-xs text-warm-400">Yönetim</p>
          </div>
          <nav className="space-y-6">
            {[
              {
                group: "Yönetim",
                items: [
                  { href: "/admin/tedarikci-basvurulari", label: "Tedarikçi Başvuruları", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg> },
                  { href: "/admin/tedarikci-yonetimi", label: "Tedarikçi Yönetimi", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg> },
                ],
              },
              {
                group: "İçerik",
                items: [
                  { href: "/admin/ilan-moderasyon", label: "İlan Moderasyonu", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
                  { href: "/admin/kategori-yonetimi", label: "Kategori Yönetimi", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg> },
                ],
              },
              {
                group: "Raporlar",
                items: [
                  { href: "/admin/raporlama", label: "Platform Raporları", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg> },
                ],
              },
            ].map(group => (
              <div key={group.group}>
                <h2 className="text-[10px] font-semibold text-warm-400 uppercase tracking-wider mb-2">{group.group}</h2>
                <ul className="space-y-1">
                  {group.items.map(item => (
                    <li key={item.href}>
                      <Link href={item.href} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-warm-600 hover:bg-warm-50 hover:text-primary transition-colors">{item.icon}{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>
        <main className="flex-1 p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
