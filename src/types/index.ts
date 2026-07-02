// ===================== B2B Mobilya Tedarik Platformu - Tip Tanımları =====================

// ---- Kullanıcı & Firma ----

export type TedarikciTipi = "yerli" | "yurt-disi-cin" | "yurt-disi-diger";

export interface Tedarikci {
  id: string;
  firmaUnvani: string;
  slug: string;
  tedarikciTipi: TedarikciTipi;
  vergiNo?: string;
  aciklama: string;
  kategoriler: string[];
  konum: string;
  bolge: string;
  puanOrtalamasi: number;
  tedarikciSkoru: number;
  tamamlananIslemSayisi: number;
  goruntulenme: number;
  dogrulandi: boolean;
  eudrUyumlu: boolean;
  oncelikliMi: boolean;
  logo?: string;
  sertifikalar: string[];
  durum?: "onay-bekliyor" | "aktif" | "askida" | "red";
}

export type AliciFirmaTipi = "fabrika" | "kucuk-isletme" | "atolye";

export interface AliciFirma {
  id: string;
  firmaUnvani: string;
  vergiNo: string;
  firmaTipi: AliciFirmaTipi;
  teslimatAdresleri: string[];
  cariHesapLimiti?: number;
  doviz: "TRY" | "USD";
  dogrulamaDurumu: "bekliyor" | "dogrulandi" | "red";
}

export type FirmaIciRol =
  | "satinalma-uzmani" | "satinalma-muduru"
  | "depo" | "kalite" | "muhasebe" | "genel-mudur" | "salt-okunur";

export interface FirmaKullanicisi {
  id: string;
  aliciFirmaId: string;
  ad: string;
  email: string;
  telefon?: string;
  rol: FirmaIciRol;
  onayTutarLimiti?: number;
  durum: "aktif" | "pasif";
}

// ---- Kategori (Attribute Dictionary V1) ----

export interface Kategori {
  id: string;
  slug: string;
  ad: string;
  parentId?: string;
  altKategoriler?: Kategori[];
  level?: number; // 0-5
  urunSayisi: number;
  goruntu?: string;
  teknikOzellikSablonu: string[];
  seoTitle?: string;
  seoDescription?: string;
}

// ---- Attribute Dictionary V1 ----
export type AttrType = "number" | "string" | "select" | "boolean" | "color";

export interface AttrOption {
  value: string;
  label: string;
}

export interface AttrValidation {
  min?: number;
  max?: number;
  step?: number;
}

export interface Attr {
  id: string;
  key: string;
  name: string;
  type: AttrType;
  unit?: string;
  required: boolean;
  filterable: boolean;
  variant: boolean;
  searchable: boolean;
  sortOrder: number;
  group: string; // attrGroup key
  options?: AttrOption[];
  validation?: AttrValidation;
}

export interface AttrGroup {
  key: string;
  name: string;
  sortOrder: number;
}

export interface ProductTemplateField {
  attrKey: string;
  required: boolean;
  placeholder?: string;
}

export interface ProductTemplate {
  key: string;
  name: string;
  categorySlug: string;
  description: string;
  fields: ProductTemplateField[];
}

export interface CatNode {
  slug: string;
  name: string;
  level: number;
  children?: CatNode[];
  attrs?: string[];
  template?: string;
}

// ---- Malzeme / Ürün ----

export interface Malzeme {
  id: string;
  baslik: string;
  slug: string;
  tedarikciId: string;
  tedarikciAdi?: string;
  kategoriId: string;
  kategoriAdi?: string;
  aciklama: string;
  teknikOzellikler: Record<string, string>;
  fiyatKademeleri: FiyatKademesi[];
  moq: number;
  birim: string;
  stokDurumu: StokDurumu;
  teslimSuresi: string;
  sertifikalar: string[];
  etiketler?: string[];
  durum?: "aktif" | "pasif" | "admin-onayinda";
}

export interface FiyatKademesi {
  minMiktar: number;
  maxMiktar: number | null;
  birimFiyat: number;
  paraBirimi: "TRY" | "USD" | "CNY";
}

export type StokDurumu = "icinde" | "sinirli" | "siparis-uzerine" | "tukendi";

// ---- Teklif / RFQ ----

export type TeklifDurum = "bekliyor" | "yanitlandi" | "kabul-edildi" | "suresi-doldu" | "red";

export interface Teklif {
  id: string;
  aliciFirmaId: string;
  malzemeId?: string;
  kategoriId?: string;
  istenenMiktar: number;
  birim: string;
  istenenTeslimTarihi?: string;
  notlar?: string;
  gonderilenTedarikciler: string[];
  yanitlar: TeklifYanit[];
  durum: TeklifDurum;
  olusturulmaTarihi: string;
}

export interface TeklifYanit {
  tedarikciId: string;
  birimFiyat: number;
  teslimSuresi: string;
  gecerlilikTarihi: string;
  notlar?: string;
}

// ---- Sipariş ----

export type SiparisDurum =
  | "olusturuldu" | "onay-bekliyor" | "onaylandi"
  | "uretimde" | "sevkiyatta" | "teslim-edildi" | "iptal";

export interface Siparis {
  id: string;
  aliciFirmaId: string;
  tedarikciId: string;
  kalemler: SiparisKalemi[];
  toplamTutar: number;
  paraBirimi: "TRY" | "USD";
  odemeYontemi: "pesin" | "cari-vade" | "havale";
  durum: SiparisDurum;
  olusturulmaTarihi: string;
}

export interface SiparisKalemi {
  malzemeId: string;
  miktar: number;
  birimFiyat: number;
  toplamTutar: number;
}

// ---- Gündem / Blog ----

export type GundemKategori =
  | "piyasa-fiyat" | "sektorel-haberler" | "trend-tasarim"
  | "egitim-rehber" | "platform-duyuru" | "roportaj" | "veri-istatistik";

export interface GundemYazisi {
  id: string;
  slug: string;
  baslik: string;
  ozet: string;
  icerik: string;
  kategori: GundemKategori;
  altKonuEtiketleri: string[];
  oneCikar: boolean;
  yayinTarihi: string;
  yazar: string;
  kapakGorseli?: string;
  durum: "taslak" | "yayinda" | "arsiv";
}

// ---- Navbar / UI ----

export interface NavKategori {
  ad: string;
  href: string;
  altKategoriler: { ad: string; href: string }[];
}
