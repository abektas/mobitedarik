import Link from "next/link";
import { getMalzemeById, kategoriler } from "@/data/site-data";
import OfferForm from "@/components/OfferForm";

export default async function TeklifIstemePage(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;
  const malzeme = getMalzemeById(id);

  if (!malzeme) {
    return (
      <div className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-warm-900 mb-6">Teklif İste</h1>
          <p className="text-warm-500 mb-4">Doğrudan bir kategoriye teklif talebi gönderin.</p>
          <select className="w-full px-4 py-3 rounded-lg border border-warm-300 mb-6">
            <option value="">Kategori seçin</option>
            {kategoriler.map(k => <option key={k.id} value={k.id}>{k.ad}</option>)}
          </select>
          <OfferForm />
        </div>
      </div>
    );
  }

  return (
    <div className="py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-sm text-warm-400 mb-6">
          <Link href="/" className="hover:text-primary">Ana Sayfa</Link>
          <span>/</span>
          <Link href="/urunler" className="hover:text-primary">Malzemeler</Link>
          <span>/</span>
          <span className="text-warm-600">{malzeme.baslik} - Teklif İste</span>
        </nav>

        <div className="bg-white rounded-2xl border border-warm-200 p-8">
          <div className="mb-6 pb-6 border-b border-warm-200">
            <h1 className="text-2xl font-bold text-warm-900">Teklif İste</h1>
            <p className="text-warm-500 mt-1">Malzeme: <strong>{malzeme.baslik}</strong> — {malzeme.tedarikciAdi}</p>
          </div>
          <OfferForm />
        </div>
      </div>
    </div>
  );
}
