import Link from "next/link";
import { siparisler, getTedarikciById } from "@/data/site-data";

export default function SiparislerimPage() {
  return (
    <div>
      <h2 className="text-xl font-bold text-warm-900 mb-6">Siparişlerim</h2>
      {siparisler.length === 0 ? (
        <div className="bg-warm-50 rounded-xl p-10 text-center">
          <p className="text-warm-500">Henüz siparişiniz bulunmuyor.</p>
          <Link href="/urunler" className="text-primary hover:underline mt-2 inline-block text-sm">Malzemeleri Keşfet</Link>
        </div>
      ) : (
        <div className="space-y-4">
          {siparisler.map((s) => {
            const t = getTedarikciById(s.tedarikciId);
            return (
              <div key={s.id} className="bg-white border border-warm-200 rounded-xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-warm-900">Sipariş #{s.id}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${s.durum === "sevkiyatta" ? "bg-blue-50 text-blue-600" : "bg-warm-100 text-warm-600"}`}>{s.durum}</span>
                </div>
                <p className="text-sm text-warm-500">Tedarikçi: {t?.firmaUnvani || s.tedarikciId}</p>
                <p className="text-sm text-warm-500">Tutar: ₺{s.toplamTutar.toLocaleString()}</p>
                <p className="text-sm text-warm-400">{s.olusturulmaTarihi}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
