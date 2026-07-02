import { PrismaClient } from "../src/generated/prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seed başlıyor...");

  // Kategoriler
  const kategoriler = await Promise.all([
    prisma.kategori.create({
      data: { slug: "levha-pano", ad: "Levha & Pano", urunSayisi: 128, teknikOzellikSablonu: ["kalınlık", "ebat", "yoğunluk", "yüzey-tipi", "renk"] },
    }),
    prisma.kategori.create({
      data: { slug: "kumas-dosemelik", ad: "Kumaş & Döşemelik", urunSayisi: 96, teknikOzellikSablonu: ["malzeme-cinsi", "renk", "gramaj", "en"] },
    }),
    prisma.kategori.create({
      data: { slug: "ahsap-kereste", ad: "Ahşap & Kereste", urunSayisi: 65, teknikOzellikSablonu: ["cins", "ebat", "rutubet", "sinif"] },
    }),
    prisma.kategori.create({
      data: { slug: "donanim-aksesuar", ad: "Donanım & Aksesuar", urunSayisi: 210, teknikOzellikSablonu: ["tip", "malzeme", "boyut", "renk"] },
    }),
    prisma.kategori.create({
      data: { slug: "boya-kimya", ad: "Boya, Vernik & Kimyasal", urunSayisi: 84, teknikOzellikSablonu: ["tip", "uygulama", "renk-kodu", "kutup"] },
    }),
    prisma.kategori.create({
      data: { slug: "makine-ekipman", ad: "Makine & Ekipman", urunSayisi: 45, teknikOzellikSablonu: ["marka", "model", "guc", "garanti"] },
    }),
    prisma.kategori.create({
      data: { slug: "kaplama-yuzey", ad: "Kaplama & Yüzey", urunSayisi: 56, teknikOzellikSablonu: ["tip", "ebat", "kalınlık", "renk"] },
    }),
    prisma.kategori.create({
      data: { slug: "ambalaj-sevkiyat", ad: "Ambalaj & Sevkiyat", urunSayisi: 32, teknikOzellikSablonu: ["tip", "ebat", "malzeme"] },
    }),
  ]);
  console.log(`✅ ${kategoriler.length} kategori oluşturuldu`);

  // Tedarikçiler
  const t1 = await prisma.tedarikci.create({
    data: {
      firmaUnvani: "MDFPlus Sanayi A.Ş.", slug: "mdfplus", tedarikciTipi: "yerli",
      aciklama: "15 yıllık deneyimle MDF, MDF-Lam ve yonga levha üretimi.",
      kategoriler: ["levha-pano"], konum: "Kocaeli", bolge: "Marmara",
      puanOrtalamasi: 4.6, tedarikciSkoru: 92, tamamlananIslemSayisi: 340,
      dogrulandi: true, eudrUyumlu: true, oncelikliMi: true,
      sertifikalar: ["CE", "ISO 9001", "FSC"], durum: "aktif",
    },
  });

  const t2 = await prisma.tedarikci.create({
    data: {
      firmaUnvani: "Kumaş Dünyası Tekstil", slug: "kumas-dunyasi", tedarikciTipi: "yerli",
      aciklama: "Döşemelik kumaş, suni deri, süet ve astar çeşitleri.",
      kategoriler: ["kumas-dosemelik"], konum: "İstanbul", bolge: "Marmara",
      puanOrtalamasi: 4.3, tedarikciSkoru: 85, tamamlananIslemSayisi: 520,
      dogrulandi: true, oncelikliMi: true,
      sertifikalar: ["ISO 9001", "OEKO-TEX"], durum: "aktif",
    },
  });

  const t3 = await prisma.tedarikci.create({
    data: {
      firmaUnvani: "Çelik Ray Makina", slug: "celik-ray", tedarikciTipi: "yerli",
      aciklama: "Menteşe, ray, kulp ve kilit sistemleri üretimi.",
      kategoriler: ["donanim-aksesuar"], konum: "Bursa", bolge: "Marmara",
      puanOrtalamasi: 4.5, tedarikciSkoru: 88, tamamlananIslemSayisi: 780,
      dogrulandi: true, sertifikalar: ["CE", "ISO 9001"], durum: "aktif",
    },
  });

  const t4 = await prisma.tedarikci.create({
    data: {
      firmaUnvani: "Doğal Ahşap İşletmeleri", slug: "dogal-ahsap", tedarikciTipi: "yerli",
      aciklama: "Masif ahşap, kereste, lambri ve profil çeşitleri.",
      kategoriler: ["ahsap-kereste"], konum: "Düzce", bolge: "Karadeniz",
      puanOrtalamasi: 4.2, tedarikciSkoru: 80, tamamlananIslemSayisi: 210,
      dogrulandi: true, eudrUyumlu: true,
      sertifikalar: ["FSC", "PEFC"], durum: "aktif",
    },
  });

  const t5 = await prisma.tedarikci.create({
    data: {
      firmaUnvani: "KimPaint Kimyasallar", slug: "kimpaint", tedarikciTipi: "yerli",
      aciklama: "Mobilya boya, vernik, tutkal ve yüzey kaplama kimyasalları.",
      kategoriler: ["boya-kimya"], konum: "İzmir", bolge: "Ege",
      puanOrtalamasi: 4.4, tedarikciSkoru: 86, tamamlananIslemSayisi: 450,
      dogrulandi: true, sertifikalar: ["ISO 9001", "ISO 14001"], durum: "aktif",
    },
  });

  const t6 = await prisma.tedarikci.create({
    data: {
      firmaUnvani: "CNCTech Makina", slug: "cnctech", tedarikciTipi: "yerli",
      aciklama: "CNC router, kenar bantlama, el aletleri ve yedek parça.",
      kategoriler: ["makine-ekipman"], konum: "Ankara", bolge: "İç Anadolu",
      puanOrtalamasi: 4.1, tedarikciSkoru: 78, tamamlananIslemSayisi: 180,
      dogrulandi: true, sertifikalar: ["CE"], durum: "aktif",
    },
  });

  console.log(`✅ 6 tedarikçi oluşturuldu`);

  // Malzemeler
  const m1 = await prisma.malzeme.create({
    data: {
      baslik: "18mm MDF-Lam Beyaz", slug: "18mm-mdf-lam-beyaz",
      tedarikciId: t1.id, kategoriId: kategoriler[0].id,
      aciklama: "Beyaz melamin kaplı MDF-Lam, 2800x2070 mm ebat.",
      teknikOzellikler: { kalınlık: "18mm", ebat: "2800x2070mm", yoğunluk: "680 kg/m³", yüzey: "Melamin", renk: "Beyaz RAL 9016" },
      fiyatKademeleri: [{ minMiktar: 1, maxMiktar: 50, birimFiyat: 45.50, paraBirimi: "TRY" }, { minMiktar: 51, maxMiktar: 200, birimFiyat: 41.20, paraBirimi: "TRY" }, { minMiktar: 201, maxMiktar: null, birimFiyat: 38.80, paraBirimi: "TRY" }],
      moq: 1, birim: "m²", stokDurumu: "icinde", teslimSuresi: "3-5 iş günü",
      sertifikalar: ["CE", "FSC"], etiketler: ["MDF", "Beyaz", "Lam"],
    },
  });

  const m2 = await prisma.malzeme.create({
    data: {
      baslik: "Döşemelik Kumaş Kadife Bordo", slug: "dosemelik-kumas-kadife-bordo",
      tedarikciId: t2.id, kategoriId: kategoriler[1].id,
      aciklama: "Yumuşak dokulu kadife döşemelik kumaş, 140cm en.",
      teknikOzellikler: { malzeme: "Poliestre + Viscon", renk: "Bordo", gramaj: "420 gr/m²", en: "140 cm" },
      fiyatKademeleri: [{ minMiktar: 1, maxMiktar: 100, birimFiyat: 38.00, paraBirimi: "TRY" }, { minMiktar: 101, maxMiktar: 500, birimFiyat: 33.50, paraBirimi: "TRY" }, { minMiktar: 501, maxMiktar: null, birimFiyat: 29.90, paraBirimi: "TRY" }],
      moq: 5, birim: "m²", stokDurumu: "icinde", teslimSuresi: "2-4 iş günü",
      sertifikalar: ["OEKO-TEX"], etiketler: ["Kadife", "Bordo", "Döşemelik"],
    },
  });

  console.log(`✅ Malzemeler oluşturuldu`);

  // Gündem Yazıları
  await prisma.gundemYazisi.create({
    data: {
      slug: "eudr-ab-ormansizlasma-yonetmeligi",
      baslik: "EUDR: AB Ormansızlaşma Yönetmeliği ve Mobilya Sektörüne Etkisi",
      ozet: "AB Ormansızlaşma Yönetmeliği (EUDR) 2026 itibarıyla ahşap/orman ürünleri ithalatında yeni yükümlülükler getiriyor.",
      kategori: "sektorel_haberler",
      altKonuEtiketleri: ["EUDR", "İhracat", "Mevzuat"],
      oneCikar: true, yayinTarihi: new Date("2026-06-15"),
      yazar: "Mobi Tedarik Analiz", durum: "yayinda",
    },
  });

  await prisma.gundemYazisi.create({
    data: {
      slug: "sunta-mdf-fiyat-haziran-2026",
      baslik: "Sunta ve MDF Fiyatları Haziran 2026 — Piyasa Analizi",
      ozet: "Yerli sunta/MDF fiyatlarında son 3 ayda %5-7 artış: talep canlı, arz tarafında enerji maliyetleri baskılıyor.",
      kategori: "piyasa_fiyat",
      altKonuEtiketleri: ["Fiyat", "Sunta", "MDF", "Piyasa"],
      oneCikar: true, yayinTarihi: new Date("2026-06-28"),
      yazar: "Piyasa İzleme", durum: "yayinda",
    },
  });

  await prisma.gundemYazisi.create({
    data: {
      slug: "mobilya-trendleri-2027",
      baslik: "2027 Mobilya Trendleri: Sürdürülebilirlik, Minimalizm ve Akıllı Tasarım",
      ozet: "2027 yılı mobilya trendlerini şekillendiren 3 ana akım: sürdürülebilir malzemeler, modüler minimalizm ve akıllı entegrasyon.",
      kategori: "trend_tasarim",
      altKonuEtiketleri: ["Trend", "Tasarım", "Sürdürülebilirlik"],
      oneCikar: true, yayinTarihi: new Date("2026-06-20"),
      yazar: "Tasarım Ekibi", durum: "yayinda",
    },
  });

  console.log(`✅ 3 gündem yazısı oluşturuldu`);
  console.log("\n🎉 Seed tamamlandı!");
}

main()
  .catch((e) => {
    console.error("❌ Seed hatası:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
