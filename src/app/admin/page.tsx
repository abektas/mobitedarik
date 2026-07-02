import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

export default async function AdminDashboard() {
  const session = await auth();
  const user = session?.user as any;
  if (user?.role === "superadmin") redirect("/admin/site-yonetimi");
  const stats = [
    { label: "Bekleyen Tedarikçi", value: "3", href: "/admin/tedarikci-basvurulari", color: "text-accent" },
    { label: "Aktif Tedarikçi", value: "7", href: "/admin/tedarikci-yonetimi", color: "text-primary" },
    { label: "Onay Bekleyen İlan", value: "2", href: "/admin/ilan-moderasyon", color: "text-accent" },
    { label: "Toplam Malzeme", value: "11", href: "/admin/ilan-moderasyon", color: "text-warm-900" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-warm-900 mb-6">Yönetim Paneli</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {stats.map((s) => (
          <Link key={s.label} href={s.href} className="bg-white rounded-xl border border-warm-200 p-5 hover:shadow-md transition-all">
            <p className="text-2xl font-bold text-warm-900">{s.value}</p>
            <p className="text-sm text-warm-500 mt-1">{s.label}</p>
          </Link>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-warm-200 p-6">
        <h2 className="text-lg font-semibold text-warm-900 mb-4">Hızlı İşlemler</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/admin/tedarikci-basvurulari" className="flex items-center gap-3 p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>
            </div>
            <div>
              <p className="font-semibold text-warm-900 text-sm">Tedarikçi Başvuruları</p>
              <p className="text-xs text-warm-400">3 bekleyen başvuru</p>
            </div>
          </Link>
          <Link href="/admin/ilan-moderasyon" className="flex items-center gap-3 p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div>
              <p className="font-semibold text-warm-900 text-sm">İlan Moderasyonu</p>
              <p className="text-xs text-warm-400">2 bekleyen ilan</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
