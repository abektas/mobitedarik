import Link from "next/link";
import { tedarikciler } from "@/data/site-data";

export default function TedarikciYonetimiPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-warm-900 mb-2">Tedarikçi Yönetimi</h1>
      <p className="text-warm-500 mb-6">Aktif tedarikçileri görüntüleyin ve yönetin.</p>

      <div className="bg-white rounded-xl border border-warm-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-warm-50 border-b border-warm-200">
            <tr>
              <th className="text-left p-4 font-semibold text-warm-700">Firma</th>
              <th className="text-left p-4 font-semibold text-warm-700 hidden md:table-cell">Puan</th>
              <th className="text-left p-4 font-semibold text-warm-700 hidden lg:table-cell">İşlem</th>
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
                <td className="p-4 hidden md:table-cell">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                    <span className="font-medium">{t.puanOrtalamasi}</span>
                    <span className="text-warm-400">({t.tedarikciSkoru})</span>
                  </div>
                </td>
                <td className="p-4 hidden lg:table-cell text-xs text-warm-500">{t.tamamlananIslemSayisi}</td>
                <td className="p-4">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    t.durum === "aktif" ? "bg-green-50 text-green-600" :
                    t.durum === "askida" ? "bg-red-50 text-red-600" : "bg-warm-100 text-warm-500"
                  }`}>
                    {t.durum === "aktif" ? "Aktif" : t.durum === "askida" ? "Askıda" : "Bekliyor"}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <div className="flex gap-2 justify-end">
                    <Link href={`/tedarikci/${t.slug}`} className="text-primary text-xs px-3 py-1.5 hover:underline">Görüntüle</Link>
                    <button className="text-red-500 text-xs px-3 py-1.5 hover:text-red-600">Askıya Al</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
