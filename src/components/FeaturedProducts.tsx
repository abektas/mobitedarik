import Link from "next/link";
import { malzemeler } from "@/data/site-data";

export default function FeaturedProducts() {
  const featured = malzemeler.slice(0, 4);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-warm-900">Öne Çıkan Malzemeler</h2>
            <p className="text-warm-500 mt-2">En çok talep gören endüstriyel malzemeler</p>
          </div>
          <Link href="/ara" className="text-primary hover:text-primary-dark font-medium text-sm hidden sm:block">
            Tüm Malzemeler →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((malzeme) => (
            <div key={malzeme.id} className="bg-white rounded-xl border border-warm-200 overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all group">
              {/* Malzeme Görsel Alanı */}
              <div className="aspect-[4/3] bg-gradient-to-br from-warm-100 to-warm-200 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <p className="text-sm text-warm-400">Malzeme Görseli</p>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                    {malzeme.kategoriAdi}
                  </span>
                  <span className="text-xs text-warm-400">{malzeme.birim}</span>
                </div>
                <h3 className="text-base font-semibold text-warm-900 group-hover:text-primary transition-colors line-clamp-1">
                  {malzeme.baslik}
                </h3>
                <p className="text-xs text-warm-400 mt-1">{malzeme.tedarikciAdi}</p>
                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <span className="text-sm font-bold text-warm-900">
                      ₺{malzeme.fiyatKademeleri[0].birimFiyat.toFixed(2)}
                    </span>
                    <span className="text-xs text-warm-400"> / {malzeme.birim}</span>
                  </div>
                  <Link
                    href={`/${malzeme.slug}-p-${malzeme.id}`}
                    className="text-primary hover:text-primary-dark font-medium text-xs transition-colors"
                  >
                    Detay →
                  </Link>
                </div>
                <div className="mt-3 flex gap-2">
                  <Link
                    href={`/teklif-iste/${malzeme.id}`}
                    className="flex-1 text-center bg-accent text-white text-xs py-2 rounded-lg hover:bg-accent-light transition-colors font-medium"
                  >
                    Teklif İste
                  </Link>
                  <button className="px-3 py-2 border border-warm-300 rounded-lg hover:bg-warm-50 transition-colors text-warm-500" title="Sepete Ekle">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
