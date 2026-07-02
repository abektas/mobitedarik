import Link from "next/link";

export default function EntegrasyonlarPage() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <Link href="/admin/site-yonetimi" className="text-warm-400 hover:text-warm-600 text-sm">← Site Yönetimi</Link>
        <span className="text-warm-300">/</span>
        <span className="text-sm text-warm-600">Entegrasyonlar</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {[
          { name: "Logo ERP", desc: "Türkiye'de en yaygın ERP sistemi ile sipariş/stok senkronizasyonu", status: "Planlandı", icon: "📦" },
          { name: "Mikro ERP", desc: "KOBİ ölçekli firmalar için ERP entegrasyonu", status: "Planlandı", icon: "📦" },
          { name: "Netsis ERP", desc: "Orta-büyük ölçek firmalar için ERP bağlantısı", status: "Planlandı", icon: "📦" },
          { name: "SAP", desc: "Büyük fabrikalar için kurumsal kaynak planlama", status: "İleri Faz", icon: "🏢" },
          { name: "e-Fatura (GİB)", desc: "Gelir İdaresi Başkanlığı e-fatura entegrasyonu", status: "Planlandı", icon: "🧾" },
          { name: "WhatsApp Business", desc: "Bildirimler ve müşteri iletişimi için WhatsApp API", status: "Planlandı", icon: "💬" },
          { name: "Accio AI", desc: "Trend ürün verisi ve pazar istihbaratı", status: "Kısmi (HTML)", icon: "🤖" },
          { name: "Cloudflare R2", desc: "Dosya depolama ve CDN hizmeti", status: "Yapılandırılmadı", icon: "☁️" },
        ].map(e => (
          <div key={e.name} className="bg-white rounded-xl border border-warm-200 p-5 hover:shadow-md transition-all">
            <div className="flex items-start gap-4">
              <span className="text-2xl">{e.icon}</span>
              <div className="flex-1">
                <h3 className="font-semibold text-warm-900 text-sm">{e.name}</h3>
                <p className="text-xs text-warm-400 mt-1">{e.desc}</p>
                <span className="inline-block text-[10px] bg-warm-100 text-warm-500 px-2 py-0.5 rounded-full mt-2 font-medium">{e.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
