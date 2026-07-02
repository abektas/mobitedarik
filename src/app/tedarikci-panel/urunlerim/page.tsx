import Link from "next/link";
import { getMalzemelerByTedarikci } from "@/data/site-data";

export default function UrunlerimPage() {
  const urunler = getMalzemelerByTedarikci("t1");

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-warm-900">Malzemelerim</h1>
          <p className="text-warm-500 text-sm mt-1">{urunler.length} malzeme yayında</p>
        </div>
        <Link href="/tedarikci-panel/urunlerim/yeni-ekle" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors text-sm font-semibold">
          + Yeni Malzeme
        </Link>
      </div>
      <div className="bg-white rounded-xl border border-warm-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-warm-50 border-b border-warm-200">
            <tr>
              <th className="text-left p-4 font-semibold text-warm-700">Malzeme</th>
              <th className="text-left p-4 font-semibold text-warm-700 hidden md:table-cell">Kategori</th>
              <th className="text-left p-4 font-semibold text-warm-700">Fiyat</th>
              <th className="text-left p-4 font-semibold text-warm-700">Stok</th>
              <th className="text-right p-4 font-semibold text-warm-700">İşlem</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-warm-200">
            {urunler.map((u) => (
              <tr key={u.id} className="hover:bg-warm-50">
                <td className="p-4"><div className="font-medium text-warm-900">{u.baslik}</div></td>
                <td className="p-4 hidden md:table-cell"><span className="text-xs bg-warm-100 text-warm-600 px-2 py-0.5 rounded-full">{u.kategoriAdi}</span></td>
                <td className="p-4"><span className="font-medium">₺{u.fiyatKademeleri[0].birimFiyat.toFixed(2)}</span><span className="text-xs text-warm-400"> / {u.birim}</span></td>
                <td className="p-4"><span className={`text-xs px-2 py-0.5 rounded-full font-medium ${u.stokDurumu === "icinde" ? "bg-green-50 text-green-600" : "bg-accent/10 text-accent"}`}>{u.stokDurumu === "icinde" ? "Stokta" : u.stokDurumu === "sinirli" ? "Sınırlı" : "Sipariş Üzerine"}</span></td>
                <td className="p-4 text-right"><Link href="#" className="text-primary text-xs hover:underline">Düzenle</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
