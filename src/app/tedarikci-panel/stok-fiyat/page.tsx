import Link from "next/link";
import { getMalzemelerByTedarikci } from "@/data/site-data";

export default function StokFiyatPage() {
  const urunler = getMalzemelerByTedarikci("t1");

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-warm-900">Stok & Fiyat Yönetimi</h1>
          <p className="text-warm-500 text-sm mt-1">Malzemelerinizin stok ve fiyat bilgilerini güncelleyin</p>
        </div>
        <button className="bg-white border border-warm-300 text-warm-700 px-4 py-2 rounded-lg hover:bg-warm-50 transition-colors text-sm font-medium">
          Excel İndir
        </button>
      </div>
      <div className="bg-white rounded-xl border border-warm-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-warm-50 border-b border-warm-200">
            <tr>
              <th className="text-left p-4 font-semibold text-warm-700">Malzeme</th>
              <th className="text-left p-4 font-semibold text-warm-700">Fiyat (en düşük)</th>
              <th className="text-left p-4 font-semibold text-warm-700">Stok</th>
              <th className="text-left p-4 font-semibold text-warm-700">MOQ</th>
              <th className="text-left p-4 font-semibold text-warm-700">Teslimat</th>
              <th className="text-right p-4 font-semibold text-warm-700">İşlem</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-warm-200">
            {urunler.map((u) => (
              <tr key={u.id} className="hover:bg-warm-50">
                <td className="p-4"><span className="font-medium text-warm-900">{u.baslik}</span></td>
                <td className="p-4"><span>₺{u.fiyatKademeleri[0].birimFiyat.toFixed(2)}<span className="text-xs text-warm-400">/{u.birim}</span></span></td>
                <td className="p-4">
                  <select defaultValue={u.stokDurumu} className="text-xs border border-warm-200 rounded-lg px-2 py-1">
                    <option value="icinde">Stokta</option>
                    <option value="sinirli">Sınırlı</option>
                    <option value="siparis-uzerine">Sipariş Üzerine</option>
                    <option value="tukendi">Tükendi</option>
                  </select>
                </td>
                <td className="p-4 text-warm-600">{u.moq}</td>
                <td className="p-4 text-warm-600">{u.teslimSuresi}</td>
                <td className="p-4 text-right"><button className="text-primary text-xs hover:underline">Kaydet</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-warm-400 mt-4">* Değişiklikler otomatik kaydedilmez. Kaydet butonuna tıklayın.</p>
    </div>
  );
}
