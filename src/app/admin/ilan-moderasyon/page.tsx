import Link from "next/link";
import { malzemeler } from "@/data/site-data";

export default function IlanModerasyonPage() {
  const onayBekleyen = malzemeler.filter(m => m.durum === "admin-onayinda" || !m.durum);

  return (
    <div>
      <h1 className="text-2xl font-bold text-warm-900 mb-2">İlan Moderasyonu</h1>
      <p className="text-warm-500 mb-6">Yeni ve güncellenen malzeme ilanlarını denetleyin.</p>

      <div className="bg-white rounded-xl border border-warm-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-warm-50 border-b border-warm-200">
            <tr>
              <th className="text-left p-4 font-semibold text-warm-700">Malzeme</th>
              <th className="text-left p-4 font-semibold text-warm-700 hidden md:table-cell">Tedarikçi</th>
              <th className="text-left p-4 font-semibold text-warm-700 hidden lg:table-cell">Kategori</th>
              <th className="text-left p-4 font-semibold text-warm-700">Durum</th>
              <th className="text-right p-4 font-semibold text-warm-700">İşlem</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-warm-200">
            {malzemeler.map((m) => (
              <tr key={m.id} className="hover:bg-warm-50">
                <td className="p-4">
                  <div className="font-medium text-warm-900">{m.baslik}</div>
                  <div className="text-xs text-warm-400">{m.id}</div>
                </td>
                <td className="p-4 text-warm-600 hidden md:table-cell">{m.tedarikciAdi}</td>
                <td className="p-4 hidden lg:table-cell">
                  <span className="text-xs bg-warm-100 text-warm-600 px-2 py-0.5 rounded-full">{m.kategoriAdi}</span>
                </td>
                <td className="p-4">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    m.durum === "aktif" ? "bg-green-50 text-green-600" :
                    m.durum === "admin-onayinda" ? "bg-accent/10 text-accent" : "bg-warm-100 text-warm-500"
                  }`}>
                    {m.durum === "aktif" ? "Yayında" : m.durum === "pasif" ? "Pasif" : "Bekliyor"}
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
    </div>
  );
}
