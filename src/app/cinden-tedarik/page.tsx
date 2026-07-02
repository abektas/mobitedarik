import Link from "next/link";
import { tedarikciler } from "@/data/site-data";

export default function CindenTedarikPage() {
  const cinliTedarikciler = tedarikciler.filter(t => t.tedarikciTipi === "yurt-disi-cin");

  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="bg-gradient-to-br from-red-600 via-red-700 to-red-900 rounded-2xl p-10 lg:p-14 mb-12 text-white">
          <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
            <span className="text-2xl">🇨🇳</span>
            <span>Global Tedarik</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold mb-4">Çin&apos;den Malzeme Tedariği</h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            Çin&apos;in önde gelen mobilya malzemesi üreticileriyle doğrudan bağlantı kurun.
            Rekabetçi fiyatlarla toptan alım, gümrük ve lojistik süreçlerinde uçtan uca destek.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Süreç Adımları */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-warm-900 mb-6">İthalat Süreci</h2>
            <div className="space-y-4">
              {[
                { step: "1", title: "Malzeme Seç & Teklif İste", desc: "Çinli tedarikçilerden ürünleri inceleyin, RFQ gönderin." },
                { step: "2", title: "Numune Onayı", desc: "Numune talep edin, kaliteyi yerinde görün." },
                { step: "3", title: "Sipariş & Güvenli Ödeme", desc: "TT, LC veya Escrow ile güvenli ödeme." },
                { step: "4", title: "Üretim Takibi", desc: "Tedarikçi üretim ilerlemesini fotoğraflarla takip edin." },
                { step: "5", title: "Kalite Kontrol & Sevkiyat", desc: "Üçüncü taraf denetim ve konşimento takibi." },
                { step: "6", title: "Gümrük & Teslimat", desc: "GTİP ve DİR kapsamı bilgisiyle gümrük süreci." },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4 bg-white rounded-xl border border-warm-200 p-5">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-600 font-bold flex-shrink-0">{item.step}</div>
                  <div><h3 className="font-semibold text-warm-900">{item.title}</h3><p className="text-sm text-warm-500 mt-0.5">{item.desc}</p></div>
                </div>
              ))}
            </div>
          </div>

          {/* Sağ: Ödeme / Doğrulama */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-warm-200 p-6">
              <h3 className="font-semibold text-warm-900 mb-3">Güvenli Ödeme Seçenekleri</h3>
              <div className="space-y-3 text-sm">
                {[
                  { title: "TT (Havale)", desc: "%30 avans + %70 yükleme öncesi" },
                  { title: "LC (Akreditif)", desc: "Banka garantili güvenli ödeme" },
                  { title: "Escrow (Emanet)", desc: "Mal teslimine kadar platformda tutulur" },
                ].map((o) => (
                  <div key={o.title} className="flex items-center gap-3 p-3 bg-warm-50 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <div><p className="font-medium text-warm-900 text-xs">{o.title}</p><p className="text-xs text-warm-400">{o.desc}</p></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-warm-200 p-6">
              <h3 className="font-semibold text-warm-900 mb-4">Doğrulanmış Çinli Tedarikçiler</h3>
              {cinliTedarikciler.length === 0 ? (
                <p className="text-sm text-warm-400">Henüz doğrulanmış Çinli tedarikçi bulunmuyor.</p>
              ) : (
                <div className="space-y-3">
                  {cinliTedarikciler.map((t) => (
                    <Link key={t.id} href={`/tedarikci/${t.slug}`} className="block p-3 bg-warm-50 rounded-lg hover:bg-warm-100 transition-colors">
                      <p className="font-medium text-warm-900 text-sm">{t.firmaUnvani}</p>
                      <p className="text-xs text-warm-400">{t.konum} · ⭐ {t.puanOrtalamasi}</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/cinden-tedarik/trend-urunler" className="block bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-6 text-center hover:shadow-md transition-all border border-red-200">
              <p className="text-lg font-bold text-red-700">🔥 Trend Ürünler</p>
              <p className="text-sm text-red-500 mt-1">Accio AI ile Çin pazarındaki trendleri keşfedin</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
