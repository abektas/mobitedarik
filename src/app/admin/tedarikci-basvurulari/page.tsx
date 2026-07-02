import Link from "next/link";
import { tedarikciler } from "@/data/site-data";

export default function TedarikciBasvurulariPage() {
  const bekleyenler = tedarikciler.filter(t => t.durum === "onay-bekliyor" || !t.durum);

  return (
    <div>
      <h1 className="text-2xl font-bold text-warm-900 mb-2">Tedarikçi Başvuruları</h1>
      <p className="text-warm-500 mb-6">Yeni tedarikçi başvurularını inceleyin ve onaylayın.</p>

      {bekleyenler.length === 0 ? (
        <div className="bg-white rounded-xl border border-warm-200 p-10 text-center">
          <svg className="w-12 h-12 mx-auto text-warm-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <p className="text-warm-500">Tüm başvurular işlenmiş görünüyor.</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-warm-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-warm-50 border-b border-warm-200">
              <tr>
                <th className="text-left p-4 font-semibold text-warm-700">Firma</th>
                <th className="text-left p-4 font-semibold text-warm-700">Yetkili</th>
                <th className="text-left p-4 font-semibold text-warm-700 hidden md:table-cell">Kategori</th>
                <th className="text-left p-4 font-semibold text-warm-700">Durum</th>
                <th className="text-right p-4 font-semibold text-warm-700">İşlem</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-warm-200">
              {tedarikciler.map((t) => (
                <tr key={t.id} className="hover:bg-warm-50">
                  <td className="p-4">
                    <div className="font-medium text-warm-900">{t.firmaUnvani}</div>
                    <div className="text-xs text-warm-400">{t.konum}</div>
                  </td>
                  <td className="p-4 text-warm-600">
                    <div>{t.tedarikciTipi === "yurt-disi-cin" ? "Çin" : "Türkiye"}</div>
                  </td>
                  <td className="p-4 hidden md:table-cell">
                    <div className="flex flex-wrap gap-1">
                      {t.kategoriler.map((k) => (
                        <span key={k} className="text-[10px] bg-warm-100 text-warm-600 px-2 py-0.5 rounded-full">{k}</span>
                      ))}
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      t.dogrulandi ? "bg-green-50 text-green-600" : "bg-accent/10 text-accent"
                    }`}>
                      {t.dogrulandi ? "Onaylı" : "Bekliyor"}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex gap-2 justify-end">
                      <button className="bg-primary text-white text-xs px-3 py-1.5 rounded-lg hover:bg-primary-dark transition-colors">Onayla</button>
                      <button className="bg-red-50 text-red-600 text-xs px-3 py-1.5 rounded-lg hover:bg-red-100 transition-colors">Reddet</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
