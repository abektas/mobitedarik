import Link from "next/link";
import { getTedarikciById } from "@/data/site-data";

export default function PerformansPage() {
  const t = getTedarikciById("t1");

  return (
    <div>
      <h1 className="text-2xl font-bold text-warm-900 mb-2">Performans</h1>
      <p className="text-warm-500 mb-6">Tedarikçi başarı metriklerinizi görüntüleyin.</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
        <div className="bg-white rounded-xl border border-warm-200 p-5"><p className="text-2xl font-bold text-warm-900">{t?.puanOrtalamasi || 0}</p><p className="text-sm text-warm-500 mt-1">Alıcı Puanı</p></div>
        <div className="bg-white rounded-xl border border-warm-200 p-5"><p className="text-2xl font-bold text-warm-900">{t?.tedarikciSkoru || 0}</p><p className="text-sm text-warm-500 mt-1">Tedarikçi Skoru</p></div>
        <div className="bg-white rounded-xl border border-warm-200 p-5"><p className="text-2xl font-bold text-warm-900">{t?.tamamlananIslemSayisi || 0}</p><p className="text-sm text-warm-500 mt-1">Tamamlanan İşlem</p></div>
      </div>
      <div className="bg-white rounded-xl border border-warm-200 p-6">
        <h2 className="text-lg font-semibold text-warm-900 mb-4">SupplierScore Bileşenleri</h2>
        <div className="space-y-4">
          {[{ label: "Zamanında Teslimat (OTD)", value: "%92" }, { label: "Talep Karşılama (Fill Rate)", value: "%88" }, { label: "RFQ Yanıt Süresi", value: "2 saat" }, { label: "Tekrar Sipariş Oranı", value: "%75" }, { label: "Şikayet Oranı", value: "%3" }].map((item) => (
            <div key={item.label} className="flex items-center justify-between py-2 border-b border-warm-100 last:border-0">
              <span className="text-sm text-warm-600">{item.label}</span>
              <span className="text-sm font-semibold text-warm-900">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
