import Link from "next/link";
import { getTedarikciById } from "@/data/site-data";

export default function FirmaBilgilerimPage() {
  const t = getTedarikciById("t1");

  return (
    <div>
      <h1 className="text-2xl font-bold text-warm-900 mb-6">Firma Bilgilerim</h1>
      <div className="bg-white rounded-xl border border-warm-200 p-6 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { label: "Firma Ünvanı", value: t?.firmaUnvani },
            { label: "Tedarikçi Tipi", value: t?.tedarikciTipi === "yerli" ? "Yerli" : "Yurt Dışı" },
            { label: "Konum", value: t?.konum },
            { label: "Bölge", value: t?.bolge },
            { label: "Doğrulama", value: t?.dogrulandi ? "✓ Doğrulandı" : "Bekliyor" },
            { label: "Puan", value: t?.puanOrtalamasi?.toString() },
          ].map((item) => (
            <div key={item.label} className="py-3 border-b border-warm-100">
              <span className="text-xs text-warm-400 block">{item.label}</span>
              <span className="text-sm font-medium text-warm-900">{item.value || "-"}</span>
            </div>
          ))}
        </div>
        <div className="pt-4">
          <h3 className="text-sm font-semibold text-warm-900 mb-2">Sertifikalar</h3>
          <div className="flex flex-wrap gap-2">
            {t?.sertifikalar.map((s) => (
              <span key={s} className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
