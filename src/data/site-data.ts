// ===================== B2B Mobilya Tedarik Platformu - Demo Veri =====================
import type {
  Kategori, Malzeme, Tedarikci, AliciFirma, Teklif, TeklifYanit,
  GundemYazisi, NavKategori, Siparis
} from "@/types";

// ---- Tedarikçiler ----
export const tedarikciler: Tedarikci[] = [
  { id: "t1", firmaUnvani: "MDFPlus Sanayi A.Ş.", slug: "mdfplus", tedarikciTipi: "yerli", aciklama: "15 yıllık deneyimle MDF, MDF-Lam ve yonga levha üretimi.", kategoriler: ["levha-pano"], konum: "Kocaeli", bolge: "Marmara", puanOrtalamasi: 4.6, tedarikciSkoru: 92, tamamlananIslemSayisi: 340, goruntulenme: 12500, dogrulandi: true, eudrUyumlu: true, oncelikliMi: true, sertifikalar: ["CE", "ISO 9001", "FSC"] },
  { id: "t2", firmaUnvani: "Kumaş Dünyası Tekstil", slug: "kumas-dunyasi", tedarikciTipi: "yerli", aciklama: "Döşemelik kumaş, suni deri, süet ve astar çeşitleri.", kategoriler: ["kumas-dosemelik"], konum: "İstanbul", bolge: "Marmara", puanOrtalamasi: 4.3, tedarikciSkoru: 85, tamamlananIslemSayisi: 520, goruntulenme: 9800, dogrulandi: true, eudrUyumlu: false, oncelikliMi: true, sertifikalar: ["ISO 9001", "OEKO-TEX"] },
  { id: "t3", firmaUnvani: "Çelik Ray Makina", slug: "celik-ray", tedarikciTipi: "yerli", aciklama: "Menteşe, ray, kulp ve kilit sistemleri üretimi.", kategoriler: ["donanim-aksesuar"], konum: "Bursa", bolge: "Marmara", puanOrtalamasi: 4.5, tedarikciSkoru: 88, tamamlananIslemSayisi: 780, goruntulenme: 15200, dogrulandi: true, eudrUyumlu: false, oncelikliMi: false, sertifikalar: ["CE", "ISO 9001"] },
  { id: "t4", firmaUnvani: "Doğal Ahşap İşletmeleri", slug: "dogal-ahsap", tedarikciTipi: "yerli", aciklama: "Masif ahşap, kereste, lambri ve profil çeşitleri.", kategoriler: ["ahsap-kereste"], konum: "Düzce", bolge: "Karadeniz", puanOrtalamasi: 4.2, tedarikciSkoru: 80, tamamlananIslemSayisi: 210, goruntulenme: 6700, dogrulandi: true, eudrUyumlu: true, oncelikliMi: false, sertifikalar: ["FSC", "PEFC"] },
  { id: "t5", firmaUnvani: "KimPaint Kimyasallar", slug: "kimpaint", tedarikciTipi: "yerli", aciklama: "Mobilya boya, vernik, tutkal ve yüzey kaplama kimyasalları.", kategoriler: ["boya-kimya"], konum: "İzmir", bolge: "Ege", puanOrtalamasi: 4.4, tedarikciSkoru: 86, tamamlananIslemSayisi: 450, goruntulenme: 8900, dogrulandi: true, eudrUyumlu: false, oncelikliMi: false, sertifikalar: ["ISO 9001", "ISO 14001"] },
  { id: "t6", firmaUnvani: "CNCTech Makina", slug: "cnctech", tedarikciTipi: "yerli", aciklama: "CNC router, kenar bantlama, el aletleri ve yedek parça.", kategoriler: ["makine-ekipman"], konum: "Ankara", bolge: "İç Anadolu", puanOrtalamasi: 4.1, tedarikciSkoru: 78, tamamlananIslemSayisi: 180, goruntulenme: 5400, dogrulandi: true, eudrUyumlu: false, oncelikliMi: false, sertifikalar: ["CE"] },
  { id: "t7", firmaUnvani: "Foshan Wood Trade Co.", slug: "foshan-wood", tedarikciTipi: "yurt-disi-cin", aciklama: "Çin'den MDF, kontrplak, lamine panel ihracatı.", kategoriler: ["levha-pano"], konum: "Foshan, Çin", bolge: "Yurt Dışı", puanOrtalamasi: 3.9, tedarikciSkoru: 72, tamamlananIslemSayisi: 95, goruntulenme: 4200, dogrulandi: true, eudrUyumlu: false, oncelikliMi: false, sertifikalar: ["CE", "ISO 9001"] },
];

// ---- Kategoriler ----
export const kategoriler: Kategori[] = [
  { id: "kat1", slug: "levha-pano", ad: "Levha & Pano", urunSayisi: 128, teknikOzellikSablonu: ["kalınlık", "ebat", "yoğunluk", "yüzey-tipi", "renk"] },
  { id: "kat2", slug: "kumas-dosemelik", ad: "Kumaş & Döşemelik", urunSayisi: 96, teknikOzellikSablonu: ["malzeme-cinsi", "renk", "gramaj", "en"] },
  { id: "kat3", slug: "ahsap-kereste", ad: "Ahşap & Kereste", urunSayisi: 65, teknikOzellikSablonu: ["cins", "ebat", "rutubet", "sinif"] },
  { id: "kat4", slug: "donanim-aksesuar", ad: "Donanım & Aksesuar", urunSayisi: 210, teknikOzellikSablonu: ["tip", "malzeme", "boyut", "renk"] },
  { id: "kat5", slug: "boya-kimya", ad: "Boya, Vernik & Kimyasal", urunSayisi: 84, teknikOzellikSablonu: ["tip", "uygulama", "renk-kodu", "kutup"] },
  { id: "kat6", slug: "makine-ekipman", ad: "Makine & Ekipman", urunSayisi: 45, teknikOzellikSablonu: ["marka", "model", "guc", "garanti"] },
  { id: "kat7", slug: "kaplama-yuzey", ad: "Kaplama & Yüzey", urunSayisi: 56, teknikOzellikSablonu: ["tip", "ebat", "kalınlık", "renk"] },
  { id: "kat8", slug: "ambalaj-sevkiyat", ad: "Ambalaj & Sevkiyat", urunSayisi: 32, teknikOzellikSablonu: ["tip", "ebat", "malzeme"] },
];

// ---- Malzemeler ----
export const malzemeler: Malzeme[] = [
  { id: "m1", baslik: "18mm MDF-Lam Beyaz", slug: "18mm-mdf-lam-beyaz", tedarikciId: "t1", tedarikciAdi: "MDFPlus Sanayi A.Ş.", kategoriId: "kat1", kategoriAdi: "Levha & Pano", aciklama: "Beyaz melamin kaplı MDF-Lam, 2800x2070 mm ebat, standart kalite.", teknikOzellikler: { kalınlık: "18mm", ebat: "2800x2070mm", yoğunluk: "680 kg/m³", yüzey: "Melamin", renk: "Beyaz RAL 9016" }, fiyatKademeleri: [{ minMiktar: 1, maxMiktar: 50, birimFiyat: 45.50, paraBirimi: "TRY" }, { minMiktar: 51, maxMiktar: 200, birimFiyat: 41.20, paraBirimi: "TRY" }, { minMiktar: 201, maxMiktar: null, birimFiyat: 38.80, paraBirimi: "TRY" }], moq: 1, birim: "m²", stokDurumu: "icinde", teslimSuresi: "3-5 iş günü", sertifikalar: ["CE", "FSC"], durum: "aktif" },
  { id: "m2", baslik: "Döşemelik Kumaş Kadife Bordo", slug: "dosemelik-kumas-kadife-bordo", tedarikciId: "t2", tedarikciAdi: "Kumaş Dünyası Tekstil", kategoriId: "kat2", kategoriAdi: "Kumaş & Döşemelik", aciklama: "Yumuşak dokulu kadife döşemelik kumaş, bordo renk, 140cm en.", teknikOzellikler: { malzeme: "Poliestre + Viscon", renk: "Bordo", gramaj: "420 gr/m²", en: "140 cm" }, fiyatKademeleri: [{ minMiktar: 1, maxMiktar: 100, birimFiyat: 38.00, paraBirimi: "TRY" }, { minMiktar: 101, maxMiktar: 500, birimFiyat: 33.50, paraBirimi: "TRY" }, { minMiktar: 501, maxMiktar: null, birimFiyat: 29.90, paraBirimi: "TRY" }], moq: 5, birim: "m²", stokDurumu: "icinde", teslimSuresi: "2-4 iş günü", sertifikalar: ["OEKO-TEX"], durum: "aktif" },
  { id: "m3", baslik: "Endüstriyel Menteşe (Yumuşak Kapanış)", slug: "endustriyel-mentese-yumusak", tedarikciId: "t3", tedarikciAdi: "Çelik Ray Makina", kategoriId: "kat4", kategoriAdi: "Donanım & Aksesuar", aciklama: "Yumuşak kapanışlı endüstriyel menteşe, nikel kaplama, 35mm kupa.", teknikOzellikler: { tip: "Yumuşak Kapanış", malzeme: "Çelik + Nikel Kaplama", boyut: "35mm kupa", acı: "110°" }, fiyatKademeleri: [{ minMiktar: 10, maxMiktar: 500, birimFiyat: 8.50, paraBirimi: "TRY" }, { minMiktar: 501, maxMiktar: 2000, birimFiyat: 7.20, paraBirimi: "TRY" }, { minMiktar: 2001, maxMiktar: null, birimFiyat: 6.10, paraBirimi: "TRY" }], moq: 10, birim: "adet", stokDurumu: "icinde", teslimSuresi: "1-3 iş günü", sertifikalar: ["CE"], durum: "aktif" },
  { id: "m4", baslik: "Masif Meşe Kereste 5x10cm", slug: "masif-mese-kereste-5x10", tedarikciId: "t4", tedarikciAdi: "Doğal Ahşap İşletmeleri", kategoriId: "kat3", kategoriAdi: "Ahşap & Kereste", aciklama: "Kurutulmuş masif meşe kereste, 5x10cm kesit, 2-4 metre boy.", teknikOzellikler: { cins: "Meşe", ebat: "5x10cm", rutubet: "%8-12", sinif: "1. Sınıf" }, fiyatKademeleri: [{ minMiktar: 1, maxMiktar: 50, birimFiyat: 185.00, paraBirimi: "TRY" }, { minMiktar: 51, maxMiktar: 200, birimFiyat: 168.00, paraBirimi: "TRY" }, { minMiktar: 201, maxMiktar: null, birimFiyat: 152.00, paraBirimi: "TRY" }], moq: 1, birim: "m³", stokDurumu: "sinirli", teslimSuresi: "5-10 iş günü", sertifikalar: ["FSC"], durum: "aktif" },
  { id: "m5", baslik: "Poliüretan Vernik Mat", slug: "poliuretan-vernik-mat", tedarikciId: "t5", tedarikciAdi: "KimPaint Kimyasallar", kategoriId: "kat5", kategoriAdi: "Boya, Vernik & Kimyasal", aciklama: "2K poliüretan vernik, mat görünüm, mobilya yüzeyleri için.", teknikOzellikler: { tip: "Poliüretan 2K", uygulama: "Püskürtme/Fırça", renk: "Şeffaf Mat", kutup: "2.5L + 2.5L" }, fiyatKademeleri: [{ minMiktar: 1, maxMiktar: 20, birimFiyat: 320.00, paraBirimi: "TRY" }, { minMiktar: 21, maxMiktar: 100, birimFiyat: 285.00, paraBirimi: "TRY" }, { minMiktar: 101, maxMiktar: null, birimFiyat: 260.00, paraBirimi: "TRY" }], moq: 1, birim: "takım", stokDurumu: "icinde", teslimSuresi: "2-4 iş günü", sertifikalar: [], durum: "aktif" },
  { id: "m6", baslik: "CNC Router Spindle Motor 3kW", slug: "cnc-spindle-motor-3kw", tedarikciId: "t6", tedarikciAdi: "CNCTech Makina", kategoriId: "kat6", kategoriAdi: "Makine & Ekipman", aciklama: "3kW hava soğutmalı spindle motor, ER16 kol, 24000rpm.", teknikOzellikler: { marka: "CNCTech", model: "GDZ-80-3", guc: "3kW", garanti: "2 Yıl" }, fiyatKademeleri: [{ minMiktar: 1, maxMiktar: 5, birimFiyat: 8500.00, paraBirimi: "TRY" }, { minMiktar: 6, maxMiktar: 20, birimFiyat: 7800.00, paraBirimi: "TRY" }, { minMiktar: 21, maxMiktar: null, birimFiyat: 7200.00, paraBirimi: "TRY" }], moq: 1, birim: "adet", stokDurumu: "siparis-uzerine", teslimSuresi: "15-20 iş günü", sertifikalar: ["CE"], durum: "aktif" },
  { id: "m7", baslik: "Kenar Bandı PVC 18mm Beyaz", slug: "kenar-bandi-pvc-18mm-beyaz", tedarikciId: "t1", tedarikciAdi: "MDFPlus Sanayi A.Ş.", kategoriId: "kat7", kategoriAdi: "Kaplama & Yüzey", aciklama: "PVC kenar bandı, 18mm kalınlık, beyaz renk, 100mt rulo.", teknikOzellikler: { tip: "PVC", ebat: "18mm x 100mt", kalınlık: "2mm", renk: "Beyaz" }, fiyatKademeleri: [{ minMiktar: 1, maxMiktar: 20, birimFiyat: 220.00, paraBirimi: "TRY" }, { minMiktar: 21, maxMiktar: 100, birimFiyat: 195.00, paraBirimi: "TRY" }, { minMiktar: 101, maxMiktar: null, birimFiyat: 175.00, paraBirimi: "TRY" }], moq: 1, birim: "rulo", stokDurumu: "icinde", teslimSuresi: "2-3 iş günü", sertifikalar: [], durum: "aktif" },
  { id: "m8", baslik: "Sünger YB 32 (Sarı), 100x200x10cm", slug: "sunger-yb-32-sari", tedarikciId: "t2", tedarikciAdi: "Kumaş Dünyası Tekstil", kategoriId: "kat2", kategoriAdi: "Kumaş & Döşemelik", aciklama: "Sarı sünger YB 32 yoğunluk, 100x200x10cm blok, döşemelik.", teknikOzellikler: { malzeme: "Poliüretan Sünger", renk: "Sarı", yogunluk: "32 kg/m³", ebat: "100x200x10cm" }, fiyatKademeleri: [{ minMiktar: 1, maxMiktar: 50, birimFiyat: 185.00, paraBirimi: "TRY" }, { minMiktar: 51, maxMiktar: 200, birimFiyat: 165.00, paraBirimi: "TRY" }, { minMiktar: 201, maxMiktar: null, birimFiyat: 148.00, paraBirimi: "TRY" }], moq: 1, birim: "blok", stokDurumu: "icinde", teslimSuresi: "3-5 iş günü", sertifikalar: ["CertiPUR"], durum: "aktif" },
  { id: "m9", baslik: "Kontrplak Kayın 18mm", slug: "kontrplak-kayin-18mm", tedarikciId: "t4", tedarikciAdi: "Doğal Ahşap İşletmeleri", kategoriId: "kat3", kategoriAdi: "Ahşap & Kereste", aciklama: "Kayın kontrplak, 18mm kalınlık, 2500x1250mm, dış mekan işlemeli.", teknikOzellikler: { cins: "Kayın", ebat: "2500x1250mm", kalınlık: "18mm", sinif: "Dış Mekan" }, fiyatKademeleri: [{ minMiktar: 1, maxMiktar: 20, birimFiyat: 520.00, paraBirimi: "TRY" }, { minMiktar: 21, maxMiktar: 100, birimFiyat: 475.00, paraBirimi: "TRY" }, { minMiktar: 101, maxMiktar: null, birimFiyat: 430.00, paraBirimi: "TRY" }], moq: 1, birim: "m²", stokDurumu: "sinirli", teslimSuresi: "7-10 iş günü", sertifikalar: ["FSC", "PEFC"], durum: "aktif" },
  { id: "m10", baslik: "Çekmece Rayı Teleskobik 45cm", slug: "cekmec-rayi-teleskobik-45", tedarikciId: "t3", tedarikciAdi: "Çelik Ray Makina", kategoriId: "kat4", kategoriAdi: "Donanım & Aksesuar", aciklama: "Teleskobik çekmece rayı, 45cm boy, 35kg taşıma, paslanmaz.", teknikOzellikler: { tip: "Teleskobik", malzeme: "Paslanmaz Çelik", boyut: "45cm", kapasite: "35kg" }, fiyatKademeleri: [{ minMiktar: 10, maxMiktar: 100, birimFiyat: 65.00, paraBirimi: "TRY" }, { minMiktar: 101, maxMiktar: 500, birimFiyat: 55.00, paraBirimi: "TRY" }, { minMiktar: 501, maxMiktar: null, birimFiyat: 48.00, paraBirimi: "TRY" }], moq: 10, birim: "adet", stokDurumu: "icinde", teslimSuresi: "2-4 iş günü", sertifikalar: [], durum: "aktif" },
  { id: "m11", baslik: "MDF 25mm Profesyonel", slug: "mdf-25mm-profesyonel", tedarikciId: "t1", tedarikciAdi: "MDFPlus Sanayi A.Ş.", kategoriId: "kat1", kategoriAdi: "Levha & Pano", aciklama: "25mm MDF standart, 2800x2070mm, özellikle tezgah ve masa üretimi için.", teknikOzellikler: { kalınlık: "25mm", ebat: "2800x2070mm", yoğunluk: "700 kg/m³", yüzey: "Zımparalanmış" }, fiyatKademeleri: [{ minMiktar: 1, maxMiktar: 50, birimFiyat: 68.00, paraBirimi: "TRY" }, { minMiktar: 51, maxMiktar: 200, birimFiyat: 61.50, paraBirimi: "TRY" }, { minMiktar: 201, maxMiktar: null, birimFiyat: 55.80, paraBirimi: "TRY" }], moq: 1, birim: "m²", stokDurumu: "icinde", teslimSuresi: "3-5 iş günü", sertifikalar: ["CE", "FSC"], durum: "aktif" },
];

// ---- Navbar Kategorileri (Mega Menü) ----
export const navKategoriler: NavKategori[] = [
  { ad: "Levha & Pano", href: "/kategori/levha-pano", altKategoriler: [{ ad: "Sunta", href: "/kategori/levha-pano?s=Sunta" }, { ad: "MDF", href: "/kategori/levha-pano?s=MDF" }, { ad: "MDF-Lam", href: "/kategori/levha-pano?s=MDF-Lam" }, { ad: "Kontrplak", href: "/kategori/levha-pano?s=Kontrplak" }, { ad: "Yonga Levha", href: "/kategori/levha-pano?s=Yonga" }, { ad: "Lamine Panel", href: "/kategori/levha-pano?s=Lamine" }] },
  { ad: "Kumaş & Döşemelik", href: "/kategori/kumas-dosemelik", altKategoriler: [{ ad: "Döşemelik Kumaş", href: "/kategori/kumas-dosemelik?s=Kumaş" }, { ad: "Deri / Suni Deri", href: "/kategori/kumas-dosemelik?s=Deri" }, { ad: "Süet", href: "/kategori/kumas-dosemelik?s=Süet" }, { ad: "Sünger", href: "/kategori/kumas-dosemelik?s=Sünger" }, { ad: "Astar", href: "/kategori/kumas-dosemelik?s=Astar" }] },
  { ad: "Ahşap & Kereste", href: "/kategori/ahsap-kereste", altKategoriler: [{ ad: "Masif Ahşap", href: "/kategori/ahsap-kereste?s=Masif" }, { ad: "Kereste", href: "/kategori/ahsap-kereste?s=Kereste" }, { ad: "Lambri", href: "/kategori/ahsap-kereste?s=Lambri" }, { ad: "Profil/Pervaz", href: "/kategori/ahsap-kereste?s=Profil" }] },
  { ad: "Donanım & Aksesuar", href: "/kategori/donanim-aksesuar", altKategoriler: [{ ad: "Menteşe", href: "/kategori/donanim-aksesuar?s=Menteşe" }, { ad: "Ray", href: "/kategori/donanim-aksesuar?s=Ray" }, { ad: "Kulp", href: "/kategori/donanim-aksesuar?s=Kulp" }, { ad: "Ayak", href: "/kategori/donanim-aksesuar?s=Ayak" }, { ad: "Kilit Sistemleri", href: "/kategori/donanim-aksesuar?s=Kilit" }, { ad: "Amortisör", href: "/kategori/donanim-aksesuar?s=Amortisör" }] },
  { ad: "Kaplama & Yüzey", href: "/kategori/kaplama-yuzey", altKategoriler: [{ ad: "Edge Band (Kenar Bandı)", href: "/kategori/kaplama-yuzey?s=Edge" }, { ad: "Laminat", href: "/kategori/kaplama-yuzey?s=Laminat" }, { ad: "Folyo", href: "/kategori/kaplama-yuzey?s=Folyo" }, { ad: "Doğal Kaplama", href: "/kategori/kaplama-yuzey?s=Doğal" }] },
  { ad: "Boya & Kimyasal", href: "/kategori/boya-kimya", altKategoriler: [{ ad: "Yapıştırıcı/Tutkal", href: "/kategori/boya-kimya?s=Tutkal" }, { ad: "Vernik", href: "/kategori/boya-kimya?s=Vernik" }, { ad: "Boya", href: "/kategori/boya-kimya?s=Boya" }, { ad: "Astar", href: "/kategori/boya-kimya?s=Astar" }, { ad: "Cila", href: "/kategori/boya-kimya?s=Cila" }] },
  { ad: "Makine & Ekipman", href: "/kategori/makine-ekipman", altKategoriler: [{ ad: "CNC Router", href: "/kategori/makine-ekipman?s=CNC" }, { ad: "Kenar Bantlama", href: "/kategori/makine-ekipman?s=Bantlama" }, { ad: "El Aletleri", href: "/kategori/makine-ekipman?s=El" }, { ad: "Yedek Parça", href: "/kategori/makine-ekipman?s=Yedek" }] },
  { ad: "Ambalaj", href: "/kategori/ambalaj-sevkiyat", altKategoriler: [{ ad: "Streç Film", href: "/kategori/ambalaj-sevkiyat?s=Streç" }, { ad: "Köpük", href: "/kategori/ambalaj-sevkiyat?s=Köpük" }, { ad: "Karton", href: "/kategori/ambalaj-sevkiyat?s=Karton" }, { ad: "Palet", href: "/kategori/ambalaj-sevkiyat?s=Palet" }] },
];

// ---- Gündem Yazıları ----
export const gundemYazilari: GundemYazisi[] = [
  { id: "g1", slug: "eudr-ab-ormansizlasma-yonetmeligi", baslik: "EUDR: AB Ormansızlaşma Yönetmeliği ve Mobilya Sektörüne Etkisi", ozet: "AB Ormansızlaşma Yönetmeliği (EUDR) 2026 itibarıyla ahşap/orman ürünleri ithalatında yeni yükümlülükler getiriyor. Mobilya üreticileri ve tedarikçileri nasıl hazırlanmalı?", icerik: "EUDR hakkında detaylı içerik...", kategori: "sektorel-haberler", altKonuEtiketleri: ["EUDR", "İhracat", "Mevzuat"], oneCikar: true, yayinTarihi: "2026-06-15", yazar: "Mobi Tedarik Analiz", durum: "yayinda" },
  { id: "g2", slug: "sunta-mdf-fiyat-haziran-2026", baslik: "Sunta ve MDF Fiyatları Haziran 2026 — Piyasa Analizi", ozet: "Yerli sunta/MDF fiyatlarında son 3 ayda %5-7 artış: talep canlı, arz tarafında enerji maliyetleri baskılıyor.", icerik: "Fiyat analizi detaylı...", kategori: "piyasa-fiyat", altKonuEtiketleri: ["Fiyat", "Sunta", "MDF", "Piyasa"], oneCikar: true, yayinTarihi: "2026-06-28", yazar: "Piyasa İzleme", durum: "yayinda" },
  { id: "g3", slug: "mobilya-trendleri-2027", baslik: "2027 Mobilya Trendleri: Sürdürülebilirlik, Minimalizm ve Akıllı Tasarım", ozet: "2027 yılı mobilya trendlerini şekillendiren 3 ana akım: sürdürülebilir malzemeler, modüler minimalizm ve akıllı entegrasyon.", icerik: "Trend analizi...", kategori: "trend-tasarim", altKonuEtiketleri: ["Trend", "Tasarım", "Sürdürülebilirlik"], oneCikar: true, yayinTarihi: "2026-06-20", yazar: "Tasarım Ekibi", durum: "yayinda" },
  { id: "g4", slug: "dahilde-isleme-rejimi-rehber", baslik: "Dahilde İşleme Rejimi (DİR) Nedir? Mobilya İhracatçıları İçin Rehber", ozet: "Dahilde İşleme Rejimi sayesinde ithal malzemelerden üretilen mobilyaların ihracatında gümrük vergisi avantajı sağlanır. Kimler başvurabilir, süreç nasıl işler?", icerik: "DİR rehberi...", kategori: "egitim-rehber", altKonuEtiketleri: ["DİR", "İhracat", "Mevzuat", "Teşvik"], oneCikar: false, yayinTarihi: "2026-06-10", yazar: "Dış Ticaret Danışmanı", durum: "yayinda" },
  { id: "g5", slug: "cnc-operatoru-verimlilik", baslik: "CNC Operatörleri İçin Verimlilik Artırma Rehberi", ozet: "CNC router kullanımında kesim hızı, malzeme israfını azaltma ve takım ömrü uzatma için 5 pratik ipucu.", icerik: "Rehber içerik...", kategori: "egitim-rehber", altKonuEtiketleri: ["CNC", "Operatör", "Verimlilik"], oneCikar: false, yayinTarihi: "2026-06-18", yazar: "Teknik Ekip", durum: "yayinda" },
];

// ---- Demo Teklifler ----
export const teklifler: Teklif[] = [
  { id: "teklif1", aliciFirmaId: "a1", malzemeId: "m1", istenenMiktar: 150, birim: "m²", istenenTeslimTarihi: "2026-08-01", notlar: "Beyaz renk, 18mm MDF-Lam acil ihtiyaç.", gonderilenTedarikciler: ["t1", "t7"], yanitlar: [{ tedarikciId: "t1", birimFiyat: 41.20, teslimSuresi: "5 iş günü", gecerlilikTarihi: "2026-07-15", notlar: "Stokta mevcut, hemen sevk edilebilir." }], durum: "yanitlandi", olusturulmaTarihi: "2026-06-25" },
];

// ---- Demo Siparişler ----
export const siparisler: Siparis[] = [
  { id: "s1", aliciFirmaId: "a1", tedarikciId: "t1", kalemler: [{ malzemeId: "m1", miktar: 200, birimFiyat: 38.80, toplamTutar: 7760 }], toplamTutar: 7760, paraBirimi: "TRY", odemeYontemi: "cari-vade", durum: "sevkiyatta", olusturulmaTarihi: "2026-06-20" },
];

// ---- Demo Alıcı Firmalar ----
export const aliciFirmalar: AliciFirma[] = [
  { id: "a1", firmaUnvani: "Mega Mobilya Sanayi A.Ş.", vergiNo: "1234567890", firmaTipi: "fabrika", teslimatAdresleri: ["İkitelli OSB, İstanbul"], doviz: "TRY", dogrulamaDurumu: "dogrulandi" },
  { id: "a2", firmaUnvani: "Artı Mobilya Atölyesi", vergiNo: "9876543210", firmaTipi: "atolye", teslimatAdresleri: ["Kadıköy, İstanbul"], doviz: "TRY", dogrulamaDurumu: "dogrulandi" },
];

// ---- Yardımcı Fonksiyonlar ----
export function getMalzemeById(id: string): Malzeme | undefined {
  return malzemeler.find(m => m.id === id);
}

export function getTedarikciById(id: string): Tedarikci | undefined {
  return tedarikciler.find(t => t.id === id);
}

export function getKategoriById(id: string): Kategori | undefined {
  return kategoriler.find(k => k.id === id);
}

export function getKategoriBySlug(slug: string): Kategori | undefined {
  return kategoriler.find(k => k.slug === slug);
}

export function getMalzemelerByKategori(kategoriId: string): Malzeme[] {
  return malzemeler.filter(m => m.kategoriId === kategoriId);
}

export function getMalzemelerByTedarikci(tedarikciId: string): Malzeme[] {
  return malzemeler.filter(m => m.tedarikciId === tedarikciId);
}

export function getYazilarByKategori(kategori: string): GundemYazisi[] {
  return gundemYazilari.filter(y => y.kategori === kategori && y.durum === "yayinda");
}

export const oneCikarilanYazilar = gundemYazilari.filter(y => y.oneCikar && y.durum === "yayinda");
