import Link from "next/link";
import { malzemeler, tedarikciler, siparisler, kategoriler } from "@/data/site-data";

export default function RaporlamaPage() {
  const totalMalzeme = malzemeler.length;
  const totalTedarikci = tedarikciler.length;
  const totalSiparis = siparisler.length;
  const toplamCiro = siparisler.reduce((sum, s) => sum + s.toplamTutar, 0);

  return (
    <div>
      <h1 className="text-2xl font-bold text-warm-900 mb-6">Platform Raporları</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        <div className="bg-white rounded-xl border border-warm-200 p-5">
          <p className="text-2xl font-bold text-warm-900">{totalMalzeme}</p>
          <p className="text-sm text-warm-500 mt-1">Toplam Malzeme</p>
        </div>
        <div className="bg-white rounded-xl border border-warm-200 p-5">
          <p className="text-2xl font-bold text-warm-900">{totalTedarikci}</p>
          <p className="text-sm text-warm-500 mt-1">Tedarikçi Sayısı</p>
        </div>
        <div className="bg-white rounded-xl border border-warm-200 p-5">
          <p className="text-2xl font-bold text-warm-900">{totalSiparis}</p>
          <p className="text-sm text-warm-500 mt-1">Toplam Sipariş</p>
        </div>
        <div className="bg-white rounded-xl border border-warm-200 p-5">
          <p className="text-2xl font-bold text-warm-900">₺{toplamCiro.toLocaleString()}</p>
          <p className="text-sm text-warm-500 mt-1">Toplam Ciro</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-warm-200 p-6">
        <h2 className="text-lg font-semibold text-warm-900 mb-4">Özet Bilgiler</h2>
        <div className="space-y-3 text-sm text-warm-600">
          <div className="flex justify-between py-2 border-b border-warm-100">
            <span>Kategori Sayısı</span>
            <span className="font-semibold text-warm-900">{kategoriler.length}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-warm-100">
            <span>Doğrulanmış Tedarikçi</span>
            <span className="font-semibold text-warm-900">{tedarikciler.filter(t => t.dogrulandi).length}</span>
          </div>
          <div className="flex justify-between py-2">
            <span>Aktif Siparişler</span>
            <span className="font-semibold text-warm-900">{siparisler.filter(s => s.durum !== "teslim-edildi" && s.durum !== "iptal").length}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
