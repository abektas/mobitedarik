import Link from "next/link";
import { siparisler } from "@/data/site-data";

export default function TedarikciSiparislerPage() {
  const siparisList = siparisler.filter(s => s.tedarikciId === "t1");

  return (
    <div>
      <h1 className="text-2xl font-bold text-warm-900 mb-2">Siparişlerim</h1>
      <p className="text-warm-500 mb-6">Gelen siparişleri görüntüleyin ve yönetin.</p>
      {siparisList.length === 0 ? (
        <div className="bg-white rounded-xl border border-warm-200 p-10 text-center"><p className="text-warm-500">Henüz sipariş bulunmuyor.</p></div>
      ) : (
        <div className="bg-white rounded-xl border border-warm-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-warm-50 border-b border-warm-200">
              <tr><th className="text-left p-4 font-semibold text-warm-700">Sipariş</th><th className="text-left p-4 font-semibold text-warm-700 hidden md:table-cell">Tutar</th><th className="text-left p-4 font-semibold text-warm-700">Durum</th><th className="text-left p-4 font-semibold text-warm-700">Tarih</th><th className="text-right p-4 font-semibold text-warm-700">İşlem</th></tr>
            </thead>
            <tbody className="divide-y divide-warm-200">
              {siparisList.map((s) => (
                <tr key={s.id} className="hover:bg-warm-50">
                  <td className="p-4"><span className="font-medium text-warm-900">#{s.id}</span></td>
                  <td className="p-4 hidden md:table-cell">₺{s.toplamTutar.toLocaleString()}</td>
                  <td className="p-4"><span className={`text-xs px-2 py-0.5 rounded-full font-medium ${s.durum === "sevkiyatta" ? "bg-blue-50 text-blue-600" : s.durum === "teslim-edildi" ? "bg-green-50 text-green-600" : "bg-warm-100 text-warm-600"}`}>{s.durum}</span></td>
                  <td className="p-4 text-warm-500 text-xs">{s.olusturulmaTarihi}</td>
                  <td className="p-4 text-right"><button className="text-primary text-xs hover:underline">Detay</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
