"use client";
import { useState } from "react";
import Link from "next/link";
import { malzemeler, tedarikciler } from "@/data/site-data";
import type { Malzeme, Tedarikci } from "@/types";

interface SepetKalemi {
  malzeme: Malzeme;
  miktar: number;
}

export default function SepetPage() {
  // Demo sepet - gerçek uygulamada state management (Zustand) ile yönetilir
  const [sepet, setSepet] = useState<SepetKalemi[]>([
    { malzeme: malzemeler[0], miktar: 100 },
    { malzeme: malzemeler[2], miktar: 500 },
    { malzeme: malzemeler[4], miktar: 10 },
  ]);

  const updateMiktar = (id: string, yeniMiktar: number) => {
    setSepet(prev => prev.map(k => k.malzeme.id === id ? { ...k, miktar: Math.max(1, yeniMiktar) } : k));
  };

  const removeItem = (id: string) => {
    setSepet(prev => prev.filter(k => k.malzeme.id !== id));
  };

  // Tedarikçi bazında grupla
  const gruplanmis = sepet.reduce((acc, kalem) => {
    const tedarikciId = kalem.malzeme.tedarikciId;
    if (!acc[tedarikciId]) acc[tedarikciId] = [];
    acc[tedarikciId].push(kalem);
    return acc;
  }, {} as Record<string, SepetKalemi[]>);

  const toplamTutar = sepet.reduce((sum, k) => {
    const fiyat = k.malzeme.fiyatKademeleri.find(f => f.maxMiktar === null || k.miktar <= f.maxMiktar!) || k.malzeme.fiyatKademeleri[0];
    return sum + fiyat.birimFiyat * k.miktar;
  }, 0);

  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-warm-900">Sipariş Sepeti</h1>
            <p className="text-warm-500 mt-1">{sepet.length} kalem malzeme</p>
          </div>
          <Link href="/urunler" className="text-primary hover:text-primary-dark font-medium text-sm">Malzemelere Devam Et →</Link>
        </div>

        {sepet.length === 0 ? (
          <div className="bg-white rounded-2xl border border-warm-200 p-16 text-center">
            <svg className="w-16 h-16 mx-auto text-warm-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
            <h2 className="text-xl font-semibold text-warm-700 mb-2">Sepetiniz Boş</h2>
            <p className="text-warm-500 mb-6">Malzeme kataloğuna göz atın ve ihtiyacınız olan malzemeleri ekleyin.</p>
            <Link href="/urunler" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors font-semibold inline-block">Malzemeleri Keşfet</Link>
          </div>
        ) : (
          <>
            {/* Tedarikçi Bazlı Gruplama */}
            <div className="space-y-6 mb-8">
              {Object.entries(gruplanmis).map(([tedarikciId, kalemler]) => {
                const tedarikci = tedarikciler.find(t => t.id === tedarikciId);
                const altToplam = kalemler.reduce((sum, k) => {
                  const fiyat = k.malzeme.fiyatKademeleri.find(f => f.maxMiktar === null || k.miktar <= f.maxMiktar!) || k.malzeme.fiyatKademeleri[0];
                  return sum + fiyat.birimFiyat * k.miktar;
                }, 0);

                return (
                  <div key={tedarikciId} className="bg-white rounded-2xl border border-warm-200 overflow-hidden">
                    <div className="bg-warm-50 px-6 py-4 border-b border-warm-200 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">{tedarikci?.firmaUnvani[0]}</div>
                        <div>
                          <h2 className="font-semibold text-warm-900">{tedarikci?.firmaUnvani}</h2>
                          <p className="text-xs text-warm-400">{tedarikci?.konum}</p>
                        </div>
                      </div>
                      <span className="text-sm font-semibold text-warm-900">₺{altToplam.toFixed(2)}</span>
                    </div>

                    <div className="divide-y divide-warm-100">
                      {kalemler.map((kalem) => {
                        const uygunFiyat = kalem.malzeme.fiyatKademeleri.find(f => f.maxMiktar === null || kalem.miktar <= f.maxMiktar!) || kalem.malzeme.fiyatKademeleri[0];
                        return (
                          <div key={kalem.malzeme.id} className="px-6 py-4 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg bg-warm-100 flex items-center justify-center flex-shrink-0">
                              <svg className="w-6 h-6 text-warm-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                            </div>
                            <div className="flex-1 min-w-0">
                              <Link href={`/${kalem.malzeme.slug}-p-${kalem.malzeme.id}`} className="font-medium text-warm-900 hover:text-primary text-sm line-clamp-1">{kalem.malzeme.baslik}</Link>
                              <p className="text-xs text-warm-400">{kalem.malzeme.birim} · MOQ: {kalem.malzeme.moq}</p>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="flex items-center border border-warm-200 rounded-lg">
                                <button onClick={() => updateMiktar(kalem.malzeme.id, kalem.miktar - 1)} className="px-3 py-1.5 hover:bg-warm-50 text-warm-600 text-sm">-</button>
                                <span className="px-3 py-1.5 text-sm font-medium text-warm-900 border-x border-warm-200">{kalem.miktar}</span>
                                <button onClick={() => updateMiktar(kalem.malzeme.id, kalem.miktar + 1)} className="px-3 py-1.5 hover:bg-warm-50 text-warm-600 text-sm">+</button>
                              </div>
                              <div className="text-right min-w-[100px]">
                                <p className="font-semibold text-warm-900 text-sm">₺{(uygunFiyat.birimFiyat * kalem.miktar).toFixed(2)}</p>
                                <p className="text-[10px] text-warm-400">₺{uygunFiyat.birimFiyat.toFixed(2)} / {kalem.malzeme.birim}</p>
                              </div>
                              <button onClick={() => removeItem(kalem.malzeme.id)} className="p-2 text-warm-300 hover:text-red-500 transition-colors" title="Kaldır">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Sipariş Özeti */}
            <div className="bg-white rounded-2xl border border-warm-200 p-6">
              <h2 className="text-lg font-semibold text-warm-900 mb-4">Sipariş Özeti</h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-warm-600"><span>Toplam Kalem</span><span className="font-medium text-warm-900">{sepet.length}</span></div>
                <div className="flex justify-between text-warm-600"><span>Tedarikçi Sayısı</span><span className="font-medium text-warm-900">{Object.keys(gruplanmis).length}</span></div>
                <div className="border-t border-warm-200 pt-3 flex justify-between"><span className="font-semibold text-warm-900">Genel Toplam</span><span className="text-xl font-bold text-warm-900">₺{toplamTutar.toFixed(2)}</span></div>
              </div>
              <Link href="/odeme" className="mt-6 block w-full bg-accent text-white text-center py-3.5 rounded-lg hover:bg-accent-light transition-colors font-semibold text-lg">
                Ödemeye Geç
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
