import Link from "next/link";
import { malzemeler } from "@/data/site-data";

export default async function ProductDetailPage(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;
  const malzeme = malzemeler.find(m => m.id === id);

  if (!malzeme) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold text-warm-900">Malzeme bulunamadı</h1>
        <Link href="/urunler" className="text-primary hover:underline mt-2 inline-block">
          Tüm Malzemelere Dön
        </Link>
      </div>
    );
  }

  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-warm-400 mb-8">
          <Link href="/" className="hover:text-primary">Ana Sayfa</Link>
          <span>/</span>
          <Link href="/urunler" className="hover:text-primary">Malzemeler</Link>
          <span>/</span>
          <span className="text-warm-600">{malzeme.baslik}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Görsel alanı */}
          <div className="aspect-square bg-gradient-to-br from-warm-100 to-warm-200 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <p className="text-warm-400">Malzeme Görseli</p>
            </div>
          </div>

          {/* Detay */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{malzeme.kategoriAdi}</span>
              <span className="text-sm text-warm-400">{malzeme.birim}</span>
              {malzeme.stokDurumu === "icinde" && (
                <span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full font-medium">Stokta</span>
              )}
            </div>

            <h1 className="text-2xl lg:text-3xl font-bold text-warm-900 mb-2">{malzeme.baslik}</h1>
            <p className="text-warm-500 mb-1">{malzeme.tedarikciAdi}</p>
            <p className="text-warm-600 mt-4 leading-relaxed">{malzeme.aciklama}</p>

            {/* Fiyat Kademeleri */}
            <div className="mt-6 bg-warm-50 rounded-xl p-5">
              <h2 className="text-base font-semibold text-warm-900 mb-3">Fiyat Kademeleri</h2>
              <div className="space-y-2">
                {malzeme.fiyatKademeleri.map((k, i) => (
                  <div key={i} className="flex items-center justify-between bg-white rounded-lg px-4 py-2.5 border border-warm-200">
                    <span className="text-sm text-warm-600">
                      {k.minMiktar}{k.maxMiktar ? `-${k.maxMiktar}` : "+"} {malzeme.birim}
                    </span>
                    <span className="text-base font-bold text-warm-900">
                      ₺{k.birimFiyat.toFixed(2)} <span className="text-xs text-warm-400 font-normal">/ {malzeme.birim}</span>
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-warm-400 mt-2">MOQ: {malzeme.moq} {malzeme.birim}</p>
            </div>

            {/* Teknik Özellikler */}
            <div className="mt-6">
              <h2 className="text-base font-semibold text-warm-900 mb-3">Teknik Özellikler</h2>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(malzeme.teknikOzellikler).map(([key, val]) => (
                  <div key={key} className="bg-warm-50 rounded-lg px-3 py-2">
                    <span className="text-[10px] text-warm-400 uppercase block">{key.replace(/-/g, ' ')}</span>
                    <span className="text-sm font-medium text-warm-800">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sertifikalar */}
            {malzeme.sertifikalar.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {malzeme.sertifikalar.map((s) => (
                  <span key={s} className="text-[10px] bg-accent/10 text-accent px-2 py-0.5 rounded-full font-medium">{s}</span>
                ))}
              </div>
            )}

            {/* Aksiyonlar */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={`/teklif-iste/${malzeme.id}`} className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent-light transition-colors font-semibold">
                Teklif İste
              </Link>
              <Link href={`/teklif-iste/${malzeme.id}?numune=1`} className="bg-white border border-warm-300 text-warm-700 px-6 py-3 rounded-lg hover:bg-warm-50 transition-colors font-semibold">
                Numune Talep Et
              </Link>
            </div>

            <Link href="/urunler" className="inline-block mt-6 text-primary hover:text-primary-dark font-medium text-sm">
              ← Tüm Malzemelere Dön
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
