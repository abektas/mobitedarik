import Link from "next/link";
import { tedarikciler } from "@/data/site-data";

export default function HeroSection() {
  const dogrulanmisSayisi = tedarikciler.filter(t => t.dogrulandi).length;

  return (
    <section className="relative bg-gradient-to-br from-warm-900 via-primary-dark to-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 px-4 py-2 rounded-full text-sm mb-6">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
              Mobilya Malzeme Tedarik Platformu — B2B
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Mobilya Üretiminiz İçin<br />
              <span className="text-accent">Tüm Malzemeler</span><br />
              Tek Platformda
            </h1>
            <p className="text-warm-200 text-lg leading-relaxed mb-8 max-w-lg">
              Sunta, MDF, kumaş, menteşe, boya, makine — 500+ malzeme,
              doğrulanmış tedarikçilerden toptan fiyatlarla. Hemen teklif isteyin.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/kategori/levha-pano"
                className="bg-accent text-white px-8 py-3.5 rounded-lg hover:bg-accent-light transition-colors font-semibold text-lg"
              >
                Malzemeleri Keşfet
              </Link>
              <Link
                href="/teklif-iste"
                className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-3.5 rounded-lg hover:bg-white/20 transition-colors font-semibold text-lg"
              >
                Teklif İste
              </Link>
            </div>
          </div>

          {/* Sağ Taraftaki Öne Çıkan Kartlar */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-accent">500+</div>
              <div className="text-warm-200 text-sm mt-1">Malzeme Çeşidi</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-accent">{dogrulanmisSayisi}+</div>
              <div className="text-warm-200 text-sm mt-1">Doğrulanmış Tedarikçi</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-accent">20+</div>
              <div className="text-warm-200 text-sm mt-1">Yıl Sektör Deneyimi</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-accent">7/24</div>
              <div className="text-warm-200 text-sm mt-1">Teklif Talebi</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
