import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import CategoryCard from "@/components/CategoryCard";
import Link from "next/link";
import { kategoriler, tedarikciler, oneCikarilanYazilar } from "@/data/site-data";

const categoryIcons: Record<string, "levha" | "kumas" | "ahsap" | "donanim" | "boya" | "makine" | "kaplama" | "ambalaj"> = {
  "levha-pano": "levha",
  "kumas-dosemelik": "kumas",
  "ahsap-kereste": "ahsap",
  "donanim-aksesuar": "donanim",
  "boya-kimya": "boya",
  "makine-ekipman": "makine",
  "kaplama-yuzey": "kaplama",
  "ambalaj-sevkiyat": "ambalaj",
};

export default function HomePage() {
  const oneCikanTedarikciler = tedarikciler.filter(t => t.oncelikliMi).slice(0, 4);

  return (
    <>
      <HeroSection />

      {/* Kategori Kısayolları */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-warm-900">Malzeme Kategorileri</h2>
            <p className="text-warm-500 mt-2">Mobilya üretiminiz için ihtiyacınız olan tüm malzemeler</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {kategoriler.map((kat) => (
              <CategoryCard
                key={kat.id}
                name={kat.ad}
                href={`/kategori/${kat.slug}`}
                count={kat.urunSayisi}
                icon={categoryIcons[kat.slug] || "donanim"}
              />
            ))}
          </div>
        </div>
      </section>

      <FeaturedProducts />

      {/* Öne Çıkan Tedarikçiler */}
      <section className="py-16 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-warm-900">Öne Çıkan Tedarikçiler</h2>
              <p className="text-warm-500 mt-2">Doğrulanmış firmalarla güvenli tedarik</p>
            </div>
            <Link href="/tedarikci-listesi" className="text-primary hover:text-primary-dark font-medium text-sm hidden sm:block">
              Tüm Tedarikçiler →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {oneCikanTedarikciler.map((t) => (
              <Link key={t.id} href={`/tedarikci/${t.slug}`} className="group block bg-white rounded-xl border border-warm-200 p-6 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                    {t.firmaUnvani[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-warm-900 group-hover:text-primary transition-colors text-sm truncate">{t.firmaUnvani}</h3>
                    <p className="text-xs text-warm-400">{t.konum}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-xs text-warm-500">
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5 text-accent" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                    {t.puanOrtalamasi}
                  </span>
                  <span>{t.tamamlananIslemSayisi} işlem</span>
                  {t.dogrulandi && <span className="text-green-600 font-medium">✓ Doğrulandı</span>}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Hızlı Teklif Kutusu */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-warm-900 mb-4">Hızlı Teklif Alın</h2>
          <p className="text-warm-500 mb-8">
            İhtiyacınız olan malzemeyi yazın, birden fazla tedarikçiden teklif alın.
          </p>
          <Link
            href="/teklif-iste"
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3.5 rounded-lg hover:bg-accent-light transition-colors font-semibold text-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
            Hemen Teklif İste
          </Link>
        </div>
      </section>

      {/* Mobilya Sektörü Gündemi */}
      <section className="py-16 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-warm-900">Mobilya Sektörü Gündemi</h2>
              <p className="text-warm-500 mt-2">Sektörel haberler, piyasa analizi ve trendler</p>
            </div>
            <Link href="/gundem" className="text-primary hover:text-primary-dark font-medium text-sm hidden sm:block">
              Tümünü Gör →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {oneCikarilanYazilar.slice(0, 3).map((yazi) => (
              <Link key={yazi.id} href={`/gundem/${yazi.slug}`} className="group block bg-white rounded-xl border border-warm-200 p-6 hover:shadow-md transition-all">
                <span className="text-[10px] font-medium text-accent bg-accent/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  {yazi.kategori === "piyasa-fiyat" ? "Piyasa" : yazi.kategori === "sektorel-haberler" ? "Haber" : yazi.kategori === "trend-tasarim" ? "Trend" : "Rehber"}
                </span>
                <h3 className="text-base font-semibold text-warm-900 group-hover:text-primary transition-colors mt-3 line-clamp-2">
                  {yazi.baslik}
                </h3>
                <p className="text-sm text-warm-500 mt-2 line-clamp-2">{yazi.ozet}</p>
                <p className="text-xs text-warm-400 mt-4">{yazi.yayinTarihi}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Neden Biz */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-warm-900">Neden MobiTedarik?</h2>
            <p className="text-warm-500 mt-2">B2B mobilya malzeme tedarikinde güvenilir ortağınız</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Geniş Malzeme Yelpazesi",
                desc: "8 ana kategoride 500'den fazla endüstriyel malzeme. Sunta, MDF, kumaş, donanım, boya ve daha fazlası.",
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>,
              },
              {
                title: "Doğrulanmış Tedarikçiler",
                desc: "Tüm tedarikçiler vergi levhası ve sanayi sicil belgesi ile doğrulanır. Güvenli ticaret garantisi.",
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
              },
              {
                title: "Proje Teslimatı",
                desc: "Büyük hacimli siparişleriniz için planlı teslimat. Fabrika çıkışlı fiyatlarla rekabetçi tedarik.",
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2h2m0 10a2 2 0 002 2h2m0-10a2 2 0 00-2-2h-2m2 10h2m0-10h2m0 10a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2m-8 6V7m8 6V7" /></svg>,
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-warm-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-warm-900 mb-2">{item.title}</h3>
                <p className="text-sm text-warm-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Üretiminiz İçin Malzeme Tedarikine Başlayın
          </h2>
          <p className="text-warm-200 mb-8 max-w-2xl mx-auto">
            Mobilya fabrikanız veya atölyeniz için ihtiyacınız olan tüm malzemeleri doğrulanmış tedarikçilerden toptan fiyatlarla temin edin.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/tedarikci-ol"
              className="bg-accent text-white px-8 py-3.5 rounded-lg hover:bg-accent-light transition-colors font-semibold"
            >
              Tedarikçi Ol
            </Link>
            <Link
              href="/teklif-iste"
              className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-3.5 rounded-lg hover:bg-white/20 transition-colors font-semibold"
            >
              Teklif İste
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
