import Link from "next/link";
import { tedarikciler } from "@/data/site-data";

export default function FavoriTedarikcilerPage() {
  const favoriler = tedarikciler.filter(t => t.oncelikliMi);

  return (
    <div>
      <h2 className="text-xl font-bold text-warm-900 mb-2">Favori Tedarikçilerim</h2>
      <p className="text-warm-500 text-sm mb-6">Sık çalıştığınız tedarikçileri takip edin.</p>

      {favoriler.length === 0 ? (
        <div className="bg-warm-50 rounded-xl p-10 text-center"><p className="text-warm-500">Henüz favori tedarikçiniz bulunmuyor.</p></div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {favoriler.map((t) => (
            <Link key={t.id} href={`/tedarikci/${t.slug}`} className="block bg-white rounded-xl border border-warm-200 p-5 hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">{t.firmaUnvani[0]}</div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-warm-900 text-sm truncate">{t.firmaUnvani}</h3>
                  <p className="text-xs text-warm-400">{t.konum}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs text-warm-500">
                <span className="flex items-center gap-1"><svg className="w-3.5 h-3.5 text-accent" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>{t.puanOrtalamasi}</span>
                <span>{t.tamamlananIslemSayisi} işlem</span>
                {t.dogrulandi && <span className="text-green-600">✓ Doğrulandı</span>}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
