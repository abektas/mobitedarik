import Link from "next/link";
import { gundemYazilari, kategoriler } from "@/data/site-data";

export default async function GundemYaziPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const yazi = gundemYazilari.find(y => y.slug === slug && y.durum === "yayinda");

  if (!yazi) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold text-warm-900">Yazı bulunamadı</h1>
        <Link href="/gundem" className="text-primary hover:underline mt-2 inline-block">Gündeme Dön</Link>
      </div>
    );
  }

  return (
    <div className="py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-sm text-warm-400 mb-6">
          <Link href="/" className="hover:text-primary">Ana Sayfa</Link>
          <span>/</span>
          <Link href="/gundem" className="hover:text-primary">Gündem</Link>
          <span>/</span>
          <span className="text-warm-600">{yazi.baslik}</span>
        </nav>

        <article>
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-0.5 rounded-full uppercase tracking-wider">{yazi.kategori.replace(/-/g, ' ')}</span>
              <span className="text-sm text-warm-400">{yazi.yayinTarihi}</span>
              <span className="text-sm text-warm-400">{yazi.yazar}</span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-warm-900 leading-tight">{yazi.baslik}</h1>
            <p className="text-lg text-warm-500 mt-4 leading-relaxed">{yazi.ozet}</p>
          </div>

          <div className="prose max-w-none">
            <div className="bg-warm-50 rounded-xl p-6 text-warm-600 leading-relaxed">
              <p>İçerik yükleniyor... (Demo modu)</p>
            </div>
          </div>

          {/* Etiketler ve İlişkili Linkler */}
          <div className="mt-8 pt-8 border-t border-warm-200">
            <div className="flex flex-wrap gap-2 mb-6">
              {yazi.altKonuEtiketleri.map((et) => (
                <span key={et} className="text-xs text-warm-500 bg-warm-50 px-3 py-1 rounded-full">#{et}</span>
              ))}
            </div>
            <div className="bg-warm-50 rounded-xl p-4">
              <p className="text-sm text-warm-600">
                <strong>İlgili Malzemeler:</strong>{' '}
                {kategoriler.slice(0, 3).map((k) => (
                  <Link key={k.id} href={`/kategori/${k.slug}`} className="text-primary hover:underline mx-1">{k.ad}</Link>
                ))}
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
