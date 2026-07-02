import Link from "next/link";

export default function CariHesabimPage() {
  return (
    <div>
      <h2 className="text-xl font-bold text-warm-900 mb-6">Cari Hesabım</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
        <div className="bg-white rounded-xl border border-warm-200 p-5">
          <p className="text-xs text-warm-400 mb-1">Açık Bakiye</p>
          <p className="text-2xl font-bold text-warm-900">₺45.200,00</p>
        </div>
        <div className="bg-white rounded-xl border border-warm-200 p-5">
          <p className="text-xs text-warm-400 mb-1">Kullanılabilir Limit</p>
          <p className="text-2xl font-bold text-green-600">₺54.800,00</p>
        </div>
        <div className="bg-white rounded-xl border border-warm-200 p-5">
          <p className="text-xs text-warm-400 mb-1">Toplam Limit</p>
          <p className="text-2xl font-bold text-warm-900">₺100.000,00</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-warm-200 p-6">
        <h3 className="font-semibold text-warm-900 mb-4">Hesap Hareketleri</h3>
        <table className="w-full text-sm">
          <thead className="border-b border-warm-200">
            <tr>
              <th className="text-left pb-3 font-semibold text-warm-700">Tarih</th>
              <th className="text-left pb-3 font-semibold text-warm-700">Açıklama</th>
              <th className="text-right pb-3 font-semibold text-warm-700">Tutar</th>
              <th className="text-right pb-3 font-semibold text-warm-700">Bakiye</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-warm-100">
            {[
              { tarih: "2026-06-20", aciklama: "MDFPlus - 18mm MDF-Lam Siparişi", tutar: -7760, bakiye: 45200 },
              { tarih: "2026-06-15", aciklama: "Havale Ödeme (MDFPlus)", tutar: 15000, bakiye: 52960 },
              { tarih: "2026-06-10", aciklama: "Çelik Ray - Menteşe Siparişi", tutar: -4250, bakiye: 37960 },
              { tarih: "2026-06-01", aciklama: "Açılış Bakiyesi", tutar: 0, bakiye: 42210 },
            ].map((h, i) => (
              <tr key={i}>
                <td className="py-3 text-warm-500">{h.tarih}</td>
                <td className="py-3 text-warm-700">{h.aciklama}</td>
                <td className={`py-3 text-right font-medium ${h.tutar >= 0 ? "text-green-600" : "text-red-600"}`}>{h.tutar >= 0 ? `+₺${h.tutar.toLocaleString()}` : `-₺${Math.abs(h.tutar).toLocaleString()}`}</td>
                <td className="py-3 text-right font-medium text-warm-900">₺{h.bakiye.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
