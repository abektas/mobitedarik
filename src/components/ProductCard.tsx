import Link from "next/link";
import type { Malzeme } from "@/types";

interface Props {
  malzeme: Malzeme;
}

export default function ProductCard({ malzeme }: Props) {
  const enDusukFiyat = malzeme.fiyatKademeleri[0];
  return (
    <div className="bg-white rounded-xl border border-warm-200 overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all group">
      <div className="aspect-[4/3] bg-gradient-to-br from-warm-100 to-warm-200 flex items-center justify-center relative">
        <div className="text-center p-4">
          <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <p className="text-sm text-warm-400">Görsel</p>
        </div>
        {malzeme.stokDurumu === "icinde" && (
          <span className="absolute top-2 right-2 bg-green-500 text-white text-[10px] px-2 py-0.5 rounded-full font-medium">
            Stokta
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-[10px] font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
            {malzeme.kategoriAdi}
          </span>
          <span className="text-[10px] text-warm-400">{malzeme.birim}</span>
        </div>
        <h3 className="text-sm font-semibold text-warm-900 group-hover:text-primary transition-colors line-clamp-1">
          {malzeme.baslik}
        </h3>
        <p className="text-[11px] text-warm-400 mt-0.5">{malzeme.tedarikciAdi}</p>
        <div className="mt-2.5 flex items-baseline justify-between">
          <div>
            <span className="text-sm font-bold text-warm-900">₺{enDusukFiyat.birimFiyat.toFixed(2)}</span>
            <span className="text-[10px] text-warm-400"> / {malzeme.birim}</span>
          </div>
          <span className="text-[10px] text-warm-400">MOQ: {malzeme.moq}</span>
        </div>
        <div className="mt-3 flex gap-1.5">
          <Link
            href={`/teklif-iste/${malzeme.id}`}
            className="flex-1 text-center bg-accent text-white text-[11px] py-2 rounded-lg hover:bg-accent-light transition-colors font-medium"
          >
            Teklif İste
          </Link>
          <Link
            href={`/${malzeme.slug}-p-${malzeme.id}`}
            className="px-3 py-2 border border-warm-300 rounded-lg hover:bg-warm-50 transition-colors text-[11px] text-warm-600 font-medium"
          >
            Detay
          </Link>
        </div>
      </div>
    </div>
  );
}
