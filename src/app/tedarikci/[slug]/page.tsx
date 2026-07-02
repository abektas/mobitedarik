import Link from "next/link";
import { tedarikciler, getMalzemelerByTedarikci } from "@/data/site-data";

export default async function TedarikciPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const tedarikci = tedarikciler.find(t => t.slug === slug);

  if (!tedarikci) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold text-warm-900">Tedarikçi bulunamadı</h1>
        <Link href="/" className="text-primary hover:underline mt-2 inline-block">Ana Sayfaya Dön</Link>
      </div>
    );
  }

  const malzemeler = getMalzemelerByTedarikci(tedarikci.id);

  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-sm text-warm-400 mb-6">
          <Link href="/" className="hover:text-primary">Ana Sayfa</Link>
          <span>/</span>
          <span className="text-warm-600">{tedarikci.firmaUnvani}</span>
        </nav>

        {/* Tedarikçi Bilgi Kartı */}
        <div className="bg-white rounded-2xl border border-warm-200 p-8 mb-10">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-2xl flex-shrink-0">
              {tedarikci.firmaUnvani[0]}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 flex-wrap mb-2">
                <h1 className="text-2xl font-bold text-warm-900">{tedarikci.firmaUnvani}</h1>
                {tedarikci.dogrulandi && <span className="bg-green-50 text-green-600 text-xs px-2 py-0.5 rounded-full font-medium">✓ Doğrulandı</span>}
                {tedarikci.eudrUyumlu && <span className="bg-blue-50 text-blue-600 text-xs px-2 py-0.5 rounded-full font-medium">EUDR Uyumlu</span>}
              </div>
              <p className="text-warm-500">{tedarikci.aciklama}</p>
              <div className="flex items-center gap-4 mt-3 text-sm text-warm-500">
                <span>📍 {tedarikci.konum}</span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                  {tedarikci.puanOrtalamasi} ({tedarikci.tamamlananIslemSayisi} işlem)
                </span>
                <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full">{tedarikci.tedarikciSkoru}/100 Tedarikçi Skoru</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {tedarikci.sertifikalar.map((s) => (
                  <span key={s} className="text-[10px] bg-accent/10 text-accent px-2 py-0.5 rounded-full">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tedarikçinin Malzemeleri */}
        <h2 className="text-xl font-bold text-warm-900 mb-6">Malzemeleri ({malzemeler.length})</h2>
        {malzemeler.length === 0 ? (
          <p className="text-warm-500">Bu tedarikçinin henüz yayında malzemesi bulunmuyor.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {malzemeler.map((m) => (
              <div key={m.id} className="bg-white rounded-xl border border-warm-200 overflow-hidden hover:shadow-lg transition-all group">
                <div className="aspect-[4/3] bg-gradient-to-br from-warm-100 to-warm-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <span className="text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded-full">{m.kategoriAdi}</span>
                  <h3 className="text-sm font-semibold text-warm-900 mt-1 line-clamp-1">{m.baslik}</h3>
                  <div className="mt-2 flex items-baseline justify-between">
                    <span className="text-sm font-bold">₺{m.fiyatKademeleri[0].birimFiyat.toFixed(2)}<span className="text-[10px] text-warm-400"> / {m.birim}</span></span>
                    <Link href={`/teklif-iste/${m.id}`} className="text-[11px] text-accent hover:text-accent-light font-medium">Teklif İste →</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
