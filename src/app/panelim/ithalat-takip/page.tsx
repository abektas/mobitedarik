import Link from "next/link";

export default function IthalatTakipPage() {
  const adimlar = [
    { num: 1, label: "Sipariş Onaylandı", tarih: "2026-06-01", durum: "tamamlandi" as const },
    { num: 2, label: "Üretimde", tarih: "2026-06-05", durum: "tamamlandi" as const },
    { num: 3, label: "Kalite Kontrol", tarih: "2026-06-15", durum: "tamamlandi" as const },
    { num: 4, label: "Yükleme/Sevkiyat", tarih: "2026-06-20", durum: "aktif" as const },
    { num: 5, label: "Gümrükte", tarih: null, durum: "bekliyor" as const },
    { num: 6, label: "Yurt İçi Dağıtım", tarih: null, durum: "bekliyor" as const },
    { num: 7, label: "Teslim Alındı", tarih: null, durum: "bekliyor" as const },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold text-warm-900 mb-2">İthalat Süreç Takibi</h2>
      <p className="text-warm-500 text-sm mb-6">Çin&apos;den sipariş ettiğiniz malzemenin güncel durumu</p>

      <div className="bg-white rounded-xl border border-warm-200 p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="font-semibold text-warm-900">Foshan Wood Trade - MDF Kontrplak</h3>
            <p className="text-sm text-warm-400">Sipariş #IT-2026-001 · 500 m²</p>
          </div>
          <span className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full font-medium">Sevkiyatta</span>
        </div>

        {/* Zaman Çizelgesi */}
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-warm-200" />
          <div className="space-y-6">
            {adimlar.map((adim) => (
              <div key={adim.num} className="relative flex items-start gap-4">
                <div className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 ${
                  adim.durum === "tamamlandi" ? "bg-green-500 text-white" :
                  adim.durum === "aktif" ? "bg-blue-500 text-white animate-pulse" :
                  "bg-warm-100 text-warm-400"
                }`}>
                  {adim.durum === "tamamlandi" ? "✓" : adim.num}
                </div>
                <div className="flex-1 pt-1">
                  <p className={`font-medium text-sm ${adim.durum === "tamamlandi" ? "text-green-700" : adim.durum === "aktif" ? "text-blue-700" : "text-warm-400"}`}>{adim.label}</p>
                  {adim.tarih && <p className="text-xs text-warm-400 mt-0.5">{adim.tarih}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-warm-200 p-6">
        <h3 className="font-semibold text-warm-900 mb-4">Sipariş Bilgileri</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          {[
            { label: "GTİP Kodu", value: "4412.31" },
            { label: "Navlun Tipi", value: "Deniz (FOB)" },
            { label: "Konşimento No", value: "MSCU-9823412" },
            { label: "Ödeme Yöntemi", value: "TT (%30 + %70)" },
            { label: "Tahmini Teslim", value: "2026-07-05" },
            { label: "DİR Kapsamı", value: "Evet" },
          ].map((item) => (
            <div key={item.label} className="py-2 border-b border-warm-100">
              <span className="text-xs text-warm-400 block">{item.label}</span>
              <span className="font-medium text-warm-900">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
