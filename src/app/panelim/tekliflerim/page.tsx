import Link from "next/link";
import { teklifler, getMalzemeById } from "@/data/site-data";

export default function TekliflerimPage() {
  return (
    <div>
      <h2 className="text-xl font-bold text-warm-900 mb-6">Tekliflerim</h2>
      {teklifler.length === 0 ? (
        <div className="bg-warm-50 rounded-xl p-10 text-center">
          <p className="text-warm-500">Henüz teklif talebiniz bulunmuyor.</p>
          <Link href="/teklif-iste" className="text-primary hover:underline mt-2 inline-block text-sm">Teklif İste</Link>
        </div>
      ) : (
        <div className="space-y-4">
          {teklifler.map((t) => {
            const m = getMalzemeById(t.malzemeId || "");
            return (
              <div key={t.id} className="bg-white border border-warm-200 rounded-xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-warm-900">{m?.baslik || "Serbest Talep"}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${t.durum === "yanitlandi" ? "bg-green-50 text-green-600" : "bg-warm-100 text-warm-600"}`}>{t.durum}</span>
                </div>
                <p className="text-sm text-warm-500">{t.istenenMiktar} {t.birim}</p>
                <p className="text-sm text-warm-400">Tedarikçi sayısı: {t.gonderilenTedarikciler.length}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
