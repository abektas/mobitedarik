import Link from "next/link";
import { malzemeler, teklifler, siparisler, getMalzemelerByTedarikci, getTedarikciById } from "@/data/site-data";

export default function TedarikciPanelDashboard() {
  const tedarikci = getTedarikciById("t1"); // Demo: ilk tedarikçi
  const urunSayisi = getMalzemelerByTedarikci("t1").length;
  const gelenTeklifler = teklifler.filter(t => t.gonderilenTedarikciler.includes("t1"));
  const bekleyenSiparisler = siparisler.filter(s => s.tedarikciId === "t1" && s.durum !== "teslim-edildi" && s.durum !== "iptal");

  return (
    <div>
      <h1 className="text-2xl font-bold text-warm-900 mb-6">Genel Bakış</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        <div className="bg-white rounded-xl border border-warm-200 p-5"><p className="text-2xl font-bold text-warm-900">{urunSayisi}</p><p className="text-sm text-warm-500 mt-1">Yayındaki Malzeme</p></div>
        <div className="bg-white rounded-xl border border-warm-200 p-5"><p className="text-2xl font-bold text-warm-900">{gelenTeklifler.length}</p><p className="text-sm text-warm-500 mt-1">Gelen Teklif Talebi</p></div>
        <div className="bg-white rounded-xl border border-warm-200 p-5"><p className="text-2xl font-bold text-warm-900">{bekleyenSiparisler.length}</p><p className="text-sm text-warm-500 mt-1">Aktif Sipariş</p></div>
        <div className="bg-white rounded-xl border border-warm-200 p-5"><p className="text-2xl font-bold text-warm-900">{tedarikci?.tedarikciSkoru || 0}</p><p className="text-sm text-warm-500 mt-1">Tedarikçi Skoru</p></div>
      </div>
      <div className="bg-white rounded-xl border border-warm-200 p-6">
        <h2 className="text-lg font-semibold text-warm-900 mb-4">Hızlı İşlemler</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/tedarikci-panel/urunlerim/yeni-ekle" className="flex items-center gap-3 p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg></div>
            <div><p className="font-semibold text-warm-900 text-sm">Yeni Malzeme Ekle</p><p className="text-xs text-warm-400">Ürün kataloğunuza yeni malzeme ekleyin</p></div>
          </Link>
          <Link href="/tedarikci-panel/gelen-teklifler" className="flex items-center gap-3 p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg></div>
            <div><p className="font-semibold text-warm-900 text-sm">Gelen Teklifler</p><p className="text-xs text-warm-400">{gelenTeklifler.length} bekleyen teklif talebi</p></div>
          </Link>
        </div>
      </div>
    </div>
  );
}
