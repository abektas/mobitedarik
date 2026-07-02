import Link from "next/link";
import { kategoriler } from "@/data/site-data";

export default function KategoriYonetimiPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-warm-900">Kategori Yönetimi</h1>
          <p className="text-warm-500 text-sm mt-1">Kategori ağacını ve teknik özellik şablonlarını yönetin.</p>
        </div>
        <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors text-sm font-semibold">
          + Yeni Kategori
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {kategoriler.map((kat) => (
          <div key={kat.id} className="bg-white rounded-xl border border-warm-200 p-5">
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-semibold text-warm-900">{kat.ad}</h2>
              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">{kat.urunSayisi} malzeme</span>
            </div>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {kat.teknikOzellikSablonu.map((oz) => (
                <span key={oz} className="text-[10px] bg-warm-50 text-warm-500 border border-warm-200 px-2 py-0.5 rounded-full">{oz}</span>
              ))}
            </div>
            <div className="flex justify-end gap-2">
              <button className="text-xs text-warm-500 hover:text-primary transition-colors">Düzenle</button>
              <button className="text-xs text-red-500 hover:text-red-600 transition-colors">Pasifleştir</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
