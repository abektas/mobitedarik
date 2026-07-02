// ===================== ATTRIBUTE DICTIONARY V1 & CATEGORY ARCHITECTURE V1 =====================

// --- ATTRIBUTE GROUPS ---
export const attrGroups = [
  { key: "global", name: "Global", sortOrder: 0 },
  { key: "commercial", name: "Ticari", sortOrder: 1 },
  { key: "dimensional", name: "Ölçü", sortOrder: 2 },
  { key: "material", name: "Malzeme", sortOrder: 3 },
  { key: "technical", name: "Teknik", sortOrder: 4 },
  { key: "logistics", name: "Lojistik", sortOrder: 5 },
];

// --- GLOBAL ATTRIBUTES ---
export const globalAttrs = [
  { id: "ATTR_G01", key: "ATTR_G01", name: "Marka", type: "string", filterable: true, searchable: true, group: "global" },
  { id: "ATTR_G02", key: "ATTR_G02", name: "Model", type: "string", searchable: true, group: "global" },
  { id: "ATTR_G03", key: "ATTR_G03", name: "Menşei", type: "string", filterable: true, group: "global", options: [{value:"yerli",label:"Yerli"},{value:"italya",label:"İtalya"},{value:"almanya",label:"Almanya"},{value:"cin",label:"Çin"}] },
  { id: "ATTR_G04", key: "ATTR_G04", name: "Garanti", type: "string", group: "global" },
  { id: "ATTR_G05", key: "ATTR_G05", name: "Renk", type: "string", filterable: true, searchable: true, group: "global" },
  { id: "ATTR_G06", key: "ATTR_G06", name: "Sertifika", type: "string", filterable: true, group: "global" },
];

// --- COMMERCIAL ATTRIBUTES ---
export const commercialAttrs = [
  { id: "ATTR_C01", key: "ATTR_C01", name: "MOQ", type: "number", unit: "adet", required: true, group: "commercial" },
  { id: "ATTR_C02", key: "ATTR_C02", name: "Birim Fiyat", type: "number", unit: "TRY", required: true, group: "commercial" },
  { id: "ATTR_C03", key: "ATTR_C03", name: "Para Birimi", type: "string", group: "commercial", options: [{value:"TRY",label:"₺ TL"},{value:"USD",label:"$ USD"},{value:"EUR",label:"€ EUR"}] },
  { id: "ATTR_C04", key: "ATTR_C04", name: "Paket Tipi", type: "string", group: "commercial", options: [{value:"palet",label:"Palet"},{value:"rulo",label:"Rulo"},{value:"koli",label:"Koli"},{value:"adet",label:"Adet"}] },
];

// --- DIMENSIONAL ATTRIBUTES ---
export const dimensionalAttrs = [
  { id: "ATTR_D01", key: "ATTR_D01", name: "Boy", type: "number", unit: "mm", filterable: true, variant: true, group: "dimensional" },
  { id: "ATTR_D02", key: "ATTR_D02", name: "En", type: "number", unit: "mm", filterable: true, variant: true, group: "dimensional" },
  { id: "ATTR_D03", key: "ATTR_D03", name: "Yükseklik", type: "number", unit: "mm", filterable: true, group: "dimensional" },
  { id: "ATTR_D04", key: "ATTR_D04", name: "Kalınlık", type: "number", unit: "mm", filterable: true, variant: true, group: "dimensional" },
  { id: "ATTR_D05", key: "ATTR_D05", name: "Çap", type: "number", unit: "mm", filterable: true, group: "dimensional" },
  { id: "ATTR_D06", key: "ATTR_D06", name: "Uzunluk", type: "number", unit: "mm", filterable: true, variant: true, group: "dimensional" },
  { id: "ATTR_D07", key: "ATTR_D07", name: "Kesit", type: "string", group: "dimensional" },
];

// --- MATERIAL ATTRIBUTES ---
export const materialAttrs = [
  { id: "ATTR_M01", key: "ATTR_M01", name: "Malzeme Cinsi", type: "string", filterable: true, searchable: true, group: "material" },
  { id: "ATTR_M02", key: "ATTR_M02", name: "Yoğunluk", type: "number", unit: "kg/m³", filterable: true, group: "material" },
  { id: "ATTR_M03", key: "ATTR_M03", name: "Kompozisyon", type: "string", group: "material" },
  { id: "ATTR_M04", key: "ATTR_M04", name: "Yüzey İşlem", type: "string", filterable: true, group: "material" },
  { id: "ATTR_M05", key: "ATTR_M05", name: "Nem Oranı", type: "number", unit: "%", group: "material" },
  { id: "ATTR_M06", key: "ATTR_M06", name: "Gramaj", type: "number", unit: "gr/m²", filterable: true, group: "material" },
];

// --- TECHNICAL ATTRIBUTES ---
export const technicalAttrs = [
  { id: "ATTR_T01", key: "ATTR_T01", name: "Kapasite", type: "number", unit: "kg", filterable: true, group: "technical" },
  { id: "ATTR_T02", key: "ATTR_T02", name: "Güç", type: "number", unit: "kW", filterable: true, group: "technical" },
  { id: "ATTR_T03", key: "ATTR_T03", name: "Devir", type: "number", unit: "rpm", group: "technical" },
  { id: "ATTR_T04", key: "ATTR_T04", name: "Hassasiyet", type: "number", unit: "mm", group: "technical" },
  { id: "ATTR_T05", key: "ATTR_T05", name: "Taşıma Kapasitesi", type: "number", unit: "kg", filterable: true, group: "technical" },
  { id: "ATTR_T06", key: "ATTR_T06", name: "Açı", type: "number", unit: "°", group: "technical" },
  { id: "ATTR_T07", key: "ATTR_T07", name: "Ömür", type: "number", unit: "çevrim", group: "technical" },
];

// --- LOGISTICS ATTRIBUTES ---
export const logisticsAttrs = [
  { id: "ATTR_L01", key: "ATTR_L01", name: "Stok Durumu", type: "string", filterable: true, group: "logistics", options: [{value:"icinde",label:"Stokta"},{value:"sinirli",label:"Sınırlı"},{value:"siparis",label:"Sipariş Üzerine"}] },
  { id: "ATTR_L02", key: "ATTR_L02", name: "Teslim Süresi", type: "string", group: "logistics" },
  { id: "ATTR_L03", key: "ATTR_L03", name: "Nakliye Tipi", type: "string", filterable: true, group: "logistics", options: [{value:"tir",label:"TIR"},{value:"parsiyel",label:"Parsiyel"},{value:"kargo",label:"Kargo"}] },
  { id: "ATTR_L04", key: "ATTR_L04", name: "Bölge", type: "string", filterable: true, group: "logistics" },
];

export const allAttrs = [
  ...globalAttrs, ...commercialAttrs, ...dimensionalAttrs,
  ...materialAttrs, ...technicalAttrs, ...logisticsAttrs,
];

// --- PRODUCT TEMPLATES ---
export interface TemplateField {
  attrKey: string;
  required: boolean;
  placeholder?: string;
}

export interface ProductTemplate {
  key: string;
  name: string;
  categorySlug: string;
  description: string;
  fields: TemplateField[];
}

export const productTemplates: ProductTemplate[] = [
  {
    key: "mdf-standard", name: "MDF Standard", categorySlug: "mdf",
    description: "Standart MDF levha",
    fields: [
      { attrKey: "ATTR_D04", required: true, placeholder: "18" },
      { attrKey: "ATTR_D01", required: true, placeholder: "2800" },
      { attrKey: "ATTR_D02", required: true, placeholder: "2070" },
      { attrKey: "ATTR_M02", required: true, placeholder: "680" },
      { attrKey: "ATTR_M04", required: true, placeholder: "Zımparalanmış" },
      { attrKey: "ATTR_G05", required: false, placeholder: "Beyaz" },
      { attrKey: "ATTR_C01", required: true, placeholder: "1" },
      { attrKey: "ATTR_L01", required: true },
    ],
  },
  {
    key: "kumas-dosemelik", name: "Döşemelik Kumaş", categorySlug: "kumas",
    description: "Döşemelik kumaş",
    fields: [
      { attrKey: "ATTR_M06", required: true, placeholder: "420" },
      { attrKey: "ATTR_G05", required: true, placeholder: "Bordo" },
      { attrKey: "ATTR_M03", required: true, placeholder: "Poliestre + Viscon" },
      { attrKey: "ATTR_D02", required: true, placeholder: "140" },
      { attrKey: "ATTR_M01", required: true, placeholder: "Kadife" },
    ],
  },
  {
    key: "ray-teleskobik", name: "Teleskobik Ray", categorySlug: "teleskobik-ray",
    description: "Teleskobik çekmece rayı",
    fields: [
      { attrKey: "ATTR_D06", required: true, placeholder: "450" },
      { attrKey: "ATTR_T05", required: true, placeholder: "35" },
      { attrKey: "ATTR_T06", required: true, placeholder: "110" },
      { attrKey: "ATTR_G05", required: false, placeholder: "Gümüş" },
    ],
  },
];

// --- CATEGORY TREE (5-Seviye) ---
export interface CatNode {
  slug: string;
  name: string;
  level: number;
  children?: CatNode[];
  attrs?: string[];  // kategoriye özel attribute key'leri
  template?: string; // product template key
}

export const categoryTree: CatNode[] = [
  {
    slug: "hammaddeler", name: "Mobilya Hammaddeleri", level: 1,
    children: [
      {
        slug: "panel-urunler", name: "Panel Ürünleri", level: 2,
        children: [
          { slug: "mdf", name: "MDF", level: 3, attrs: ["ATTR_M02","ATTR_M04"], template: "mdf-standard", children: [
            { slug: "mdflam", name: "MDFLAM", level: 4, children: [
              { slug: "parlak-beyaz-mdf", name: "Parlak Beyaz", level: 5 },
              { slug: "akcaagac-mdf", name: "Akçaağaç", level: 5 },
            ]},
            { slug: "standart-mdf", name: "Standart MDF", level: 4 },
          ]},
          { slug: "sunta", name: "Sunta", level: 3, children: [
            { slug: "suntalam", name: "Suntalam", level: 4 },
            { slug: "ham-sunta", name: "Ham Sunta", level: 4 },
          ]},
          { slug: "kontrplak", name: "Kontrplak", level: 3 },
          { slug: "osb", name: "OSB", level: 3 },
          { slug: "hdf", name: "HDF", level: 3 },
          { slug: "lift-levha", name: "Lif Levha", level: 3 },
        ],
      },
      {
        slug: "masif-ahsap", name: "Masif Ahşap", level: 2,
        children: [
          { slug: "mese", name: "Meşe", level: 3, children: [
            { slug: "mese-kereste", name: "Kereste", level: 4 },
            { slug: "mese-lambri", name: "Lambri", level: 4 },
          ]},
          { slug: "kayin", name: "Kayın", level: 3 },
          { slug: "ceviz", name: "Ceviz", level: 3 },
          { slug: "cam", name: "Çam", level: 3 },
          { slug: "ladin", name: "Ladin", level: 3 },
          { slug: "gurgen", name: "Gürgen", level: 3 },
          { slug: "disbudak", name: "Dişbudak", level: 3 },
          { slug: "ihlamur", name: "Ihlamur", level: 3 },
        ],
      },
      {
        slug: "doseme-hammaddeleri", name: "Döşeme Hammaddeleri", level: 2,
        children: [
          { slug: "kumas", name: "Kumaş", level: 3, attrs: ["ATTR_M06","ATTR_M03"], template: "kumas-dosemelik" },
          { slug: "deri", name: "Deri", level: 3 },
          { slug: "suni-deri", name: "Suni Deri", level: 3 },
          { slug: "sunger", name: "Sünger", level: 3 },
          { slug: "kolon", name: "Kolon Yay", level: 3 },
          { slug: "yay", name: "Yay", level: 3 },
        ],
      },
      {
        slug: "kaplama", name: "Kaplama & Yüzey", level: 2,
        children: [
          { slug: "kenar-bandi", name: "Kenar Bandı", level: 3 },
          { slug: "laminat", name: "Laminat", level: 3 },
          { slug: "folyo", name: "Folyo", level: 3 },
          { slug: "dogal-kaplama", name: "Doğal Kaplama", level: 3 },
        ],
      },
      {
        slug: "kimyasallar", name: "Kimyasallar", level: 2,
        children: [
          { slug: "tutkal", name: "Tutkal & Yapıştırıcı", level: 3 },
          { slug: "boya", name: "Boya", level: 3 },
          { slug: "vernik", name: "Vernik", level: 3 },
          { slug: "astar", name: "Astar", level: 3 },
          { slug: "cila", name: "Cila", level: 3 },
        ],
      },
      {
        slug: "metal-hammaddeler", name: "Metal Hammaddeler", level: 2,
        children: [
          { slug: "celik-profil", name: "Çelik Profil", level: 3 },
          { slug: "aluminyum", name: "Alüminyum", level: 3 },
          { slug: "sac", name: "Sac", level: 3 },
        ],
      },
    ],
  },
  {
    slug: "aksesuarlar", name: "Mobilya Aksesuarları", level: 1,
    children: [
      {
        slug: "kulplar", name: "Kulplar", level: 2,
        children: [
          { slug: "metal-kulp", name: "Metal Kulp", level: 3 },
          { slug: "ahşap-kulp", name: "Ahşap Kulp", level: 3 },
          { slug: "plastik-kulp", name: "Plastik Kulp", level: 3 },
        ],
      },
      {
        slug: "ray-sistemleri", name: "Ray Sistemleri", level: 2,
        children: [
          { slug: "teleskobik-ray", name: "Teleskobik Ray", level: 3, template: "ray-teleskobik", children: [
            { slug: "gizli-ray", name: "Gizli Ray", level: 4 },
            { slug: "frenli-ray", name: "Frenli Ray", level: 4 },
          ]},
          { slug: "makas-ray", name: "Makas Ray", level: 3 },
        ],
      },
      {
        slug: "menteseler", name: "Menteşeler", level: 2,
        children: [
          { slug: "endustriyel-mentese", name: "Endüstriyel Menteşe", level: 3 },
          { slug: "yumusak-kapanis", name: "Yumuşak Kapanış", level: 3 },
          { slug: "it-ack", name: "İt- Aç", level: 3 },
        ],
      },
      {
        slug: "ayaklar", name: "Ayaklar", level: 2 },
      { slug: "askilik", name: "Askılık & Askı", level: 2 },
      { slug: "raf-tasiyici", name: "Raf Taşıyıcı", level: 2 },
      { slug: "baglanti-elemanlari", name: "Bağlantı Elemanları", level: 2 },
      { slug: "ic-donanim", name: "İç Donanım", level: 2 },
      { slug: "led-aydinlatma", name: "LED Aydınlatma", level: 2 },
    ],
  },
  {
    slug: "mekanizmalar", name: "Mekanizmalar", level: 1,
    children: [
      { slug: "baza-mekanizmasi", name: "Baza Mekanizması", level: 2 },
      { slug: "koltuk-mekanizmasi", name: "Koltuk Mekanizması", level: 2 },
      { slug: "yatak-mekanizmasi", name: "Yatak Mekanizması", level: 2 },
      { slug: "katlanir-mekanizma", name: "Katlanır Mekanizma", level: 2 },
      { slug: "kapak-mekanizmasi", name: "Kapak Mekanizması", level: 2 },
      { slug: "lift-mekanizmasi", name: "Lift Mekanizması", level: 2 },
    ],
  },
  {
    slug: "makinalar", name: "Makina & Ekipman", level: 1,
    children: [
      {
        slug: "kesim-makinalari", name: "Kesim Makinaları", level: 2,
        children: [
          { slug: "panel-ebatlama", name: "Panel Ebatlama", level: 3 },
          { slug: "daire-testere", name: "Daire Testere", level: 3 },
          { slug: "serit-testere", name: "Şerit Testere", level: 3 },
          { slug: "cnc-kesim", name: "CNC Kesim", level: 3 },
        ],
      },
      {
        slug: "islem-makinalari", name: "İşleme Makinaları", level: 2,
        children: [
          { slug: "cnc-router", name: "CNC Router", level: 3 },
          { slug: "delik-makinesi", name: "Delik Makinesi", level: 3 },
          { slug: "freze", name: "Freze", level: 3 },
          { slug: "torna", name: "Torna", level: 3 },
        ],
      },
      {
        slug: "yuzey-makinalari", name: "Yüzey İşlem Makinaları", level: 2,
        children: [
          { slug: "kenar-bantlama", name: "Kenar Bantlama", level: 3 },
          { slug: "zimpala", name: "Zımpara", level: 3 },
          { slug: "boya-makinesi", name: "Boya Makinesi", level: 3 },
          { slug: "pres", name: "Pres", level: 3 },
        ],
      },
    ],
  },
  {
    slug: "sarf-malzemeleri", name: "Sarf Malzemeleri", level: 1,
    children: [
      { slug: "freze-ucu", name: "Freze Ucu", level: 2 },
      { slug: "matkap-ucu", name: "Matkap Ucu", level: 2 },
      { slug: "zimpala-malzemesi", name: "Zımpara", level: 2 },
      { slug: "bicak", name: "Kesici Bıçak", level: 2 },
      { slug: "tutkal-sarf", name: "Tutkal", level: 2 },
      { slug: "temizlik", name: "Temizlik Malzemesi", level: 2 },
    ],
  },
  {
    slug: "yedek-parca", name: "Yedek Parça", level: 1,
    children: [
      { slug: "motor", name: "Motor", level: 2 },
      { slug: "reduktor", name: "Redüktör", level: 2 },
      { slug: "valf", name: "Valf", level: 2 },
      { slug: "rulman", name: "Rulman", level: 2 },
      { slug: "kayis", name: "Kayış", level: 2 },
      { slug: "pnomotik", name: "Pnömatik", level: 2 },
      { slug: "servo-motor", name: "Servo Motor", level: 2 },
    ],
  },
  {
    slug: "ambalaj", name: "Ambalaj & Sevkiyat", level: 1,
    children: [
      { slug: "strech-film", name: "Streç Film", level: 2 },
      { slug: "kopuk", name: "Köpük", level: 2 },
      { slug: "karton-koli", name: "Karton Koli", level: 2 },
      { slug: "palet", name: "Palet", level: 2 },
    ],
  },
];

// Yardımcı: ağacı düz listeye çevir
export function flattenTree(nodes: CatNode[], parentSlug?: string): any[] {
  const result: any[] = [];
  for (const node of nodes) {
    result.push({ ...node, parentSlug });
    if (node.children) {
      result.push(...flattenTree(node.children, node.slug));
    }
  }
  return result;
}

export const flatCategories = flattenTree(categoryTree);
