import Link from "next/link";
import { kategoriler } from "@/data/site-data";

export default function QuickRFQPage() {
  return (
    <div className="py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-warm-900">Teklif İste (RFQ)</h1>
          <p className="text-warm-500 mt-2">İhtiyacınız olan malzeme için tedarikçilerden teklif alın</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {kategoriler.map((kat) => (
            <Link key={kat.id} href={`/teklif-iste/${kat.id}`} className="block bg-white border border-warm-200 rounded-xl p-4 text-center hover:shadow-md hover:border-primary/30 transition-all">
              <h3 className="text-sm font-semibold text-warm-900">{kat.ad}</h3>
              <p className="text-xs text-warm-400 mt-1">{kat.urunSayisi} malzeme</p>
            </Link>
          ))}
        </div>

        <div className="bg-warm-50 rounded-xl p-6">
          <h2 className="font-semibold text-warm-900 mb-3">Hızlı Teklif İste</h2>
          <p className="text-sm text-warm-500 mb-4">Doğrudan bir kategori seçin veya aşağıdaki bağlantıyı kullanarak formu doldurun.</p>
          <Link href="/teklif" className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent-light transition-colors font-semibold inline-block">
            Formu Doldur
          </Link>
        </div>
      </div>
    </div>
  );
}
