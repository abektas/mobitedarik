import Link from "next/link";
import { teklifler, getMalzemeById } from "@/data/site-data";

export default function GelenTekliflerPage() {
  const gelenler = teklifler.filter(t => t.gonderilenTedarikciler.includes("t1"));

  return (
    <div>
      <h1 className="text-2xl font-bold text-warm-900 mb-2">Gelen Teklif Talepleri</h1>
      <p className="text-warm-500 mb-6">Alıcılardan gelen teklif taleplerini yanıtlayın.</p>
      {gelenler.length === 0 ? (
        <div className="bg-white rounded-xl border border-warm-200 p-10 text-center"><p className="text-warm-500">Henüz teklif talebi bulunmuyor.</p></div>
      ) : (
        <div className="space-y-4">
          {gelenler.map((t) => {
            const m = getMalzemeById(t.malzemeId || "");
            return (
              <div key={t.id} className="bg-white rounded-xl border border-warm-200 p-5">
                <div className="flex items-center justify-between mb-3">
                  <div><h2 className="font-semibold text-warm-900">{m?.baslik || "Malzeme Talebi"}</h2><p className="text-sm text-warm-500">{t.istenenMiktar} {t.birim}</p></div>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${t.durum === "yanitlandi" ? "bg-green-50 text-green-600" : "bg-accent/10 text-accent"}`}>{t.durum}</span>
                </div>
                {t.notlar && <p className="text-sm text-warm-500 mb-3">Not: {t.notlar}</p>}
                <div className="flex justify-end gap-2">
                  <button className="bg-primary text-white text-xs px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors">Teklif Ver</button>
                  <button className="bg-red-50 text-red-600 text-xs px-4 py-2 rounded-lg hover:bg-red-100 transition-colors">Geç</button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
