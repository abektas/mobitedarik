import Link from "next/link";

export default function TrendUrunlerPage() {
  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-sm text-warm-400 mb-6">
          <Link href="/" className="hover:text-primary">Ana Sayfa</Link>
          <span>/</span>
          <Link href="/cinden-tedarik" className="hover:text-primary">Çin&apos;den Tedarik</Link>
          <span>/</span>
          <span className="text-warm-600">Trend Ürünler</span>
        </nav>

        <div className="bg-white rounded-2xl border border-warm-200 p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🔥</span>
            <div>
              <h1 className="text-2xl font-bold text-warm-900">Trend Ürünler</h1>
              <p className="text-sm text-warm-500">Accio AI pazar gözlemine dayalı güncel trend ürünler</p>
            </div>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700">
            <p>⚠️ Bu sayfa Accio AI HTML çıktısının yapıştırılmasıyla güncellenir.</p>
            <p className="text-red-500 text-xs mt-1">Fiyat/stok bilgisi için ilgili tedarikçiyle teyit ediniz.</p>
          </div>
        </div>

        {/* Demo Trend Ürün Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { name: "Elektrikli Ayarlanabilir Çalışma Masası", fiyat: "$280-450", MOQ: "50 adet", ulke: "Çin" },
            { name: "Modüler Kanepe Sistemi (6 Renk)", fiyat: "$150-220", MOQ: "100 adet", ulke: "Çin" },
            { name: "Akıllı Aydınlatmalı Gardırop", fiyat: "$420-680", MOQ: "30 adet", ulke: "Çin" },
            { name: "Kompakt Sıfır Atık Mutfak Ünitesi", fiyat: "$380-520", MOQ: "80 adet", ulke: "Çin" },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl border border-warm-200 overflow-hidden hover:shadow-lg transition-all">
              <div className="aspect-[4/3] bg-gradient-to-br from-red-50 to-warm-100 flex items-center justify-center">
                <span className="text-4xl">🏷️</span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-warm-900 text-sm line-clamp-2">{item.name}</h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="font-bold text-warm-900 text-sm">{item.fiyat}</span>
                  <span className="text-xs text-warm-400">{item.MOQ}</span>
                </div>
                <p className="text-xs text-warm-400 mt-1">📍 {item.ulke}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-warm-400 text-center mt-8">
          * Görseller temsilidir. Accio AI pazar gözlemine dayalıdır.
          <br />Son güncelleme: {new Date().toLocaleDateString("tr-TR")}
        </p>
      </div>
    </div>
  );
}
