import CategoryCard from "@/components/CategoryCard";
import { kategoriler } from "@/data/site-data";

const categoryIcons: Record<string, "levha" | "kumas" | "ahsap" | "donanim" | "boya" | "makine" | "kaplama" | "ambalaj"> = {
  "levha-pano": "levha",
  "kumas-dosemelik": "kumas",
  "ahsap-kereste": "ahsap",
  "donanim-aksesuar": "donanim",
  "boya-kimya": "boya",
  "makine-ekipman": "makine",
  "kaplama-yuzey": "kaplama",
  "ambalaj-sevkiyat": "ambalaj",
};

export default function CategoriesPage() {
  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-warm-900">Malzeme Kategorileri</h1>
          <p className="text-warm-500 mt-1">Mobilya üretiminiz için ihtiyacınız olan tüm malzemeler</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {kategoriler.map((kat) => (
            <CategoryCard
              key={kat.id}
              name={kat.ad}
              href={`/kategori/${kat.slug}`}
              count={kat.urunSayisi}
              icon={categoryIcons[kat.slug] || "donanim"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
