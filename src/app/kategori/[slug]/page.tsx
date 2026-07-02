import Link from "next/link";
import { getKategoriBySlug, getMalzemelerByKategori } from "@/data/site-data";

export default async function KategoriPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const kategori = getKategoriBySlug(slug);

  if (!kategori) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold text-warm-900">Kategori bulunamadı</h1>
        <Link href="/kategoriler" className="text-primary hover:underline mt-2 inline-block">Tüm Kategorilere Dön</Link>
      </div>
    );
  }

  const malzemeler = getMalzemelerByKategori(kategori.id);

  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-sm text-warm-400 mb-6">
          <Link href="/" className="hover:text-primary">Ana Sayfa</Link>
          <span>/</span>
          <Link href="/kategoriler" className="hover:text-primary">Kategoriler</Link>
          <span>/</span>
          <span className="text-warm-600">{kategori.ad}</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-warm-900">{kategori.ad}</h1>
          <p className="text-warm-500 mt-1">{kategori.urunSayisi} malzeme bulunuyor</p>
        </div>

        {/* Teknik Filtre Göstergesi */}
        <div className="bg-warm-50 rounded-xl p-4 mb-8">
          <h2 className="text-sm font-semibold text-warm-700 mb-2">Teknik Özellik Filtreleri</h2>
          <div className="flex flex-wrap gap-2">
            {kategori.teknikOzellikSablonu.map((oz) => (
              <span key={oz} className="text-xs bg-white border border-warm-200 px-3 py-1.5 rounded-full text-warm-600">
                {oz.replace(/-/g, ' ')}
              </span>
            ))}
          </div>
        </div>

        {malzemeler.length === 0 ? (
          <div className="bg-warm-50 rounded-xl p-10 text-center">
            <p className="text-warm-500">Bu kategoride henüz malzeme bulunmuyor.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {malzemeler.map((m) => (
              <div key={m.id} className="bg-white rounded-xl border border-warm-200 overflow-hidden hover:shadow-lg transition-all group">
                <div className="aspect-[4/3] bg-gradient-to-br from-warm-100 to-warm-200 flex items-center justify-center relative">
                  <div className="text-center">
                    <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                    </div>
                  </div>
                  {m.stokDurumu === "icinde" && <span className="absolute top-2 right-2 bg-green-500 text-white text-[10px] px-2 py-0.5 rounded-full">Stokta</span>}
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-warm-900 line-clamp-1">{m.baslik}</h3>
                  <p className="text-[11px] text-warm-400 mt-0.5">{m.tedarikciAdi}</p>
                  <div className="mt-2 flex items-baseline justify-between">
                    <span className="text-sm font-bold text-warm-900">₺{m.fiyatKademeleri[0].birimFiyat.toFixed(2)}<span className="text-[10px] text-warm-400"> / {m.birim}</span></span>
                    <span className="text-[10px] text-warm-400">MOQ: {m.moq}</span>
                  </div>
                  <div className="mt-3 flex gap-1.5">
                    <Link href={`/teklif-iste/${m.id}`} className="flex-1 text-center bg-accent text-white text-[11px] py-2 rounded-lg hover:bg-accent-light transition-colors font-medium">Teklif İste</Link>
                    <Link href={`/${m.slug}-p-${m.id}`} className="px-3 py-2 border border-warm-300 rounded-lg hover:bg-warm-50 text-[11px] text-warm-600 font-medium">Detay</Link>
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
