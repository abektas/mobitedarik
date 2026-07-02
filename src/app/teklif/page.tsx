import Link from "next/link";
import OfferForm from "@/components/OfferForm";

export default function OfferPage() {
  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold text-warm-900 mb-4">Teklif Talebi</h1>
            <p className="text-warm-500 mb-8">
              İhtiyacınız olan malzemeler için birden fazla tedarikçiden teklif alın.
            </p>
            <div className="bg-warm-50 rounded-xl p-6 mb-6">
              <h2 className="font-semibold text-warm-900 mb-3">Nasıl Çalışır?</h2>
              <ul className="space-y-3">
                {[
                  "Malzeme bilgilerini girin",
                  "Birden fazla tedarikçiye teklif talebi gönderilir",
                  "Tedarikçiler fiyat ve teslimat koşullarını bildirir",
                  "En uygun teklifi seçip siparişe dönüştürün",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-warm-600">
                    <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-warm-50 rounded-xl p-6">
              <h2 className="font-semibold text-warm-900 mb-2">Hızlı İletişim</h2>
              <p className="text-sm text-warm-500">
                Tel: +90 (212) 555 0 123<br />
                E-posta: teklif@mobitedarik.com
              </p>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-warm-200 p-8">
              <h2 className="text-2xl font-bold text-warm-900 mb-6">Formu Doldurun</h2>
              <OfferForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
