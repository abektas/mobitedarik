import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-warm-50 to-warm-100 rounded-2xl p-10 lg:p-14 mb-14">
          <h1 className="text-3xl lg:text-4xl font-bold text-warm-900 mb-4">Hakkımızda</h1>
          <p className="text-warm-600 max-w-3xl leading-relaxed">
            MobiTedarik, Türkiye mobilya sektörüne yönelik B2B malzeme tedarik platformudur.
            Tedarikçiler ile üretici fabrikaları ve atölyeleri bir araya getirerek,
            mobilya üretiminde kullanılan tüm malzemelerin tek platformdan temin edilmesini sağlıyoruz.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {[
            { title: "Misyonumuz", desc: "Mobilya malzeme tedarikini şeffaf, güvenli ve verimli hale getirerek üreticilerin rekabet gücünü artırmak." },
            { title: "Vizyonumuz", desc: "Türkiye'nin lider B2B mobilya malzeme tedarik platformu olmak ve sektörel dijital dönüşüme öncülük etmek." },
            { title: "Değerlerimiz", desc: "Güven, şeffaflık, kalite ve sürdürülebilirlik. Her tedarikçimizi titizlikle doğruluyor, her işlemi denetliyoruz." },
          ].map((item) => (
            <div key={item.title} className="text-center p-8 bg-white rounded-xl border border-warm-200">
              <h2 className="text-xl font-bold text-warm-900 mb-3">{item.title}</h2>
              <p className="text-warm-500">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary rounded-2xl p-10 mb-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "8", label: "Malzeme Kategorisi" },
              { number: "500+", label: "Malzeme Çeşidi" },
              { number: "7+", label: "Doğrulanmış Tedarikçi" },
              { number: "1000+", label: "Tamamlanan İşlem" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-bold text-accent mb-1">{stat.number}</div>
                <div className="text-warm-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-warm-900 mb-4">Tedarikçi Olun</h2>
          <p className="text-warm-500 mb-6">Mobilya malzemelerinizi binlerce üreticiye ulaştırın.</p>
          <Link href="/tedarikci-ol" className="bg-primary text-white px-8 py-3.5 rounded-lg hover:bg-primary-dark transition-colors font-semibold inline-block">
            Tedarikçi Başvurusu
          </Link>
        </div>
      </div>
    </div>
  );
}
