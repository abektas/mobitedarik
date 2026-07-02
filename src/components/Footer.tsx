import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-warm-900 text-warm-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Şirket */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-sm">MT</span>
              </div>
              <span className="text-lg font-bold text-white">MobiTedarik</span>
            </div>
            <p className="text-sm text-warm-400 leading-relaxed mb-4 max-w-xs">
              Türkiye mobilya sektörü için B2B malzeme tedarik platformu. Tedarikçileri ve üretici fabrikaları bir araya getiriyoruz.
            </p>
            <div className="flex items-center gap-3 text-warm-500">
              <span className="flex items-center gap-1.5 text-xs bg-warm-800 px-3 py-1.5 rounded-full">
                <svg className="w-3.5 h-3.5 text-green-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                Doğrulanmış Tedarikçiler
              </span>
            </div>
          </div>

          {/* Kategoriler */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Kategoriler</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/kategori/levha-pano" className="hover:text-accent transition-colors">Levha & Pano</Link></li>
              <li><Link href="/kategori/kumas-dosemelik" className="hover:text-accent transition-colors">Kumaş & Döşemelik</Link></li>
              <li><Link href="/kategori/ahsap-kereste" className="hover:text-accent transition-colors">Ahşap & Kereste</Link></li>
              <li><Link href="/kategori/donanim-aksesuar" className="hover:text-accent transition-colors">Donanım & Aksesuar</Link></li>
              <li><Link href="/kategori/boya-kimya" className="hover:text-accent transition-colors">Boya & Kimyasal</Link></li>
              <li><Link href="/kategori/makine-ekipman" className="hover:text-accent transition-colors">Makine & Ekipman</Link></li>
            </ul>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Kurumsal</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/hakkimizda" className="hover:text-accent transition-colors">Hakkımızda</Link></li>
              <li><Link href="/tedarikci-ol" className="hover:text-accent transition-colors">Tedarikçi Ol</Link></li>
              <li><Link href="/gundem" className="hover:text-accent transition-colors">Sektör Gündemi</Link></li>
              <li><Link href="/iletisim" className="hover:text-accent transition-colors">İletişim</Link></li>
              <li><Link href="/destek" className="hover:text-accent transition-colors">Yardım & SSS</Link></li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">İletişim</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                İstanbul, Türkiye
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                info@mobitedarik.com
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                +90 (212) 555 0 123
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Bar */}
        <div className="border-t border-warm-800 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-warm-500">
          <p>&copy; {new Date().getFullYear()} MobiTedarik. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-4">
            <Link href="/kvkk" className="hover:text-warm-300 transition-colors">KVKK</Link>
            <Link href="/kullanim-kosullari" className="hover:text-warm-300 transition-colors">Kullanım Koşulları</Link>
            <Link href="/cerez-politikasi" className="hover:text-warm-300 transition-colors">Çerez Politikası</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
