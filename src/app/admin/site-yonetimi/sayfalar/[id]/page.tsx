"use client";
import { useState, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type SectionType = "hero" | "text" | "image" | "gallery" | "cards" | "cta" | "video" | "columns" | "form" | "html";

interface Section {
  id: string;
  type: SectionType;
  title: string;
  content: any;
}

export default function SayfaDuzenlePage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const [pageTitle, setPageTitle] = useState("Ana Sayfa");
  const [sections, setSections] = useState<Section[]>([
    { id: "s1", type: "hero", title: "Hero Bölümü", content: { heading: "Mobilya Malzeme Tedarik Platformu", subtext: "B2B", buttonText: "Keşfet", buttonUrl: "/urunler", bgColor: "#1a5e3a" } },
    { id: "s2", type: "cards", title: "Kategori Kartları", content: { columns: 4, items: ["Levha & Pano", "Kumaş & Döşemelik", "Ahşap & Kereste", "Donanım & Aksesuar"] } },
    { id: "s3", type: "cta", title: "Teklif Çağrısı", content: { heading: "Projeniz İçin Teklif Alın", buttonText: "Hemen Teklif İste", buttonUrl: "/teklif-iste" } },
  ]);
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [published, setPublished] = useState(true);
  const [showAddMenu, setShowAddMenu] = useState(false);

  const moveSection = useCallback((from: number, to: number) => {
    const newSections = [...sections];
    const [removed] = newSections.splice(from, 1);
    newSections.splice(to, 0, removed);
    setSections(newSections);
  }, [sections]);

  const addSection = (type: SectionType) => {
    const newSection: Section = {
      id: `s${Date.now()}`,
      type,
      title: getSectionTitle(type),
      content: getDefaultContent(type),
    };
    setSections([...sections, newSection]);
    setShowAddMenu(false);
  };

  const deleteSection = (id: string) => {
    setSections(sections.filter(s => s.id !== id));
  };

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <Link href="/admin/site-yonetimi/sayfalar" className="text-warm-400 hover:text-warm-600 text-sm">← Sayfalar</Link>
        <span className="text-warm-300">/</span>
        <span className="text-sm text-warm-600">{pageTitle}</span>
      </div>

      {/* Üst çubuk */}
      <div className="bg-white rounded-xl border border-warm-200 p-4 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <input type="text" value={pageTitle} onChange={e => setPageTitle(e.target.value)} className="text-xl font-bold text-warm-900 bg-transparent border-b border-transparent hover:border-warm-300 focus:border-primary outline-none" />
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${published ? "bg-green-50 text-green-600" : "bg-warm-100 text-warm-500"}`}>{published ? "Yayında" : "Taslak"}</span>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => setPublished(!published)} className={`text-sm px-4 py-2 rounded-lg transition-colors ${published ? "bg-warm-100 text-warm-600" : "bg-green-50 text-green-600"}`}>
              {published ? "Taslağa Al" : "Yayınla"}
            </button>
            <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors font-semibold text-sm">Kaydet</button>
          </div>
        </div>
      </div>

      {/* Bölüm listesi */}
      <div className="space-y-4">
        {sections.map((section, index) => (
          <div
            key={section.id}
            draggable
            onDragStart={() => setDragIndex(index)}
            onDragOver={(e) => { e.preventDefault(); }}
            onDrop={() => { if (dragIndex !== null) { moveSection(dragIndex, index); setDragIndex(null); } }}
            className="bg-white rounded-xl border border-warm-200 hover:border-primary/30 transition-all group"
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-warm-100 bg-warm-50/50 rounded-t-xl cursor-move">
              <div className="flex items-center gap-3">
                <span className="text-warm-300 cursor-grab">⠿</span>
                <span className="text-sm font-semibold text-warm-900">{section.title}</span>
                <span className="text-[10px] bg-warm-100 text-warm-500 px-2 py-0.5 rounded-full uppercase">{section.type}</span>
              </div>
              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button onClick={() => deleteSection(section.id)} className="text-xs text-red-500 hover:text-red-600 px-2 py-1">Sil</button>
              </div>
            </div>
            <div className="p-5">
              <SectionEditor section={section} onChange={(updates) => {
                const newSections = [...sections];
                newSections[index] = { ...newSections[index], ...updates };
                setSections(newSections);
              }} />
            </div>
          </div>
        ))}
      </div>

      {/* Yeni bölüm ekle */}
      <div className="mt-6 text-center">
        {showAddMenu ? (
          <div className="bg-white rounded-xl border border-warm-200 p-6">
            <h3 className="font-semibold text-warm-900 mb-4">Bölüm Ekle</h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {[
                { type: "hero" as SectionType, label: "Hero", icon: "🖼️" },
                { type: "text" as SectionType, label: "Metin", icon: "📝" },
                { type: "image" as SectionType, label: "Görsel", icon: "🖼️" },
                { type: "gallery" as SectionType, label: "Galeri", icon: "🖼️" },
                { type: "cards" as SectionType, label: "Kartlar", icon: "📇" },
                { type: "cta" as SectionType, label: "CTA Buton", icon: "🔘" },
                { type: "columns" as SectionType, label: "Kolonlar", icon: "📰" },
                { type: "video" as SectionType, label: "Video", icon: "🎬" },
                { type: "form" as SectionType, label: "Form", icon: "📋" },
                { type: "html" as SectionType, label: "HTML", icon: "🔌" },
              ].map(item => (
                <button key={item.type} onClick={() => addSection(item.type)} className="p-4 rounded-xl border border-warm-200 hover:border-primary hover:bg-primary/5 transition-all text-center">
                  <span className="text-2xl block mb-1">{item.icon}</span>
                  <span className="text-xs font-medium text-warm-700">{item.label}</span>
                </button>
              ))}
            </div>
            <button onClick={() => setShowAddMenu(false)} className="mt-4 text-sm text-warm-400 hover:text-warm-600">İptal</button>
          </div>
        ) : (
          <button onClick={() => setShowAddMenu(true)} className="bg-white border-2 border-dashed border-warm-300 hover:border-primary hover:bg-primary/5 text-warm-500 hover:text-primary px-8 py-4 rounded-xl transition-all font-medium">
            + Yeni Bölüm Ekle
          </button>
        )}
      </div>
    </div>
  );
}

function getSectionTitle(type: SectionType): string {
  const titles: Record<SectionType, string> = { hero: "Hero Bölümü", text: "Metin Bölümü", image: "Görsel", gallery: "Galeri", cards: "Kartlar", cta: "CTA Butonu", video: "Video", columns: "Kolonlar", form: "Form", html: "HTML Bloğu" };
  return titles[type];
}

function getDefaultContent(type: SectionType): any {
  switch (type) {
    case "hero": return { heading: "Başlık", subtext: "Alt başlık", buttonText: "Buton", buttonUrl: "#", bgColor: "#1a5e3a" };
    case "text": return { body: "Metin içeriğini buraya yazın..." };
    case "image": return { src: "", alt: "Görsel açıklaması", caption: "" };
    case "gallery": return { images: ["","",""], layout: "grid" };
    case "cards": return { columns: 3, items: ["Kart 1", "Kart 2", "Kart 3"] };
    case "cta": return { heading: "Çağrı Metni", buttonText: "Buton", buttonUrl: "#", bgColor: "#1a5e3a" };
    case "video": return { embedUrl: "", caption: "" };
    case "columns": return { columns: 2, content: ["Sütun 1 içeriği", "Sütun 2 içeriği"] };
    case "form": return { formType: "contact", title: "İletişim Formu" };
    case "html": return { html: "<!-- HTML kodu yapıştırın -->" };
  }
}

function SectionEditor({ section, onChange }: { section: Section; onChange: (updates: Partial<Section>) => void }) {
  const content = section.content;

  switch (section.type) {
    case "hero":
      return (
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div><label className="block text-[10px] text-warm-400 mb-1">Başlık</label><input type="text" value={content.heading} onChange={e => onChange({ content: { ...content, heading: e.target.value } })} className="w-full px-3 py-2 rounded-lg border border-warm-200 text-sm focus:border-primary outline-none" /></div>
            <div><label className="block text-[10px] text-warm-400 mb-1">Alt Başlık</label><input type="text" value={content.subtext} onChange={e => onChange({ content: { ...content, subtext: e.target.value } })} className="w-full px-3 py-2 rounded-lg border border-warm-200 text-sm focus:border-primary outline-none" /></div>
            <div><label className="block text-[10px] text-warm-400 mb-1">Buton Metni</label><input type="text" value={content.buttonText} onChange={e => onChange({ content: { ...content, buttonText: e.target.value } })} className="w-full px-3 py-2 rounded-lg border border-warm-200 text-sm focus:border-primary outline-none" /></div>
            <div><label className="block text-[10px] text-warm-400 mb-1">Buton Link</label><input type="text" value={content.buttonUrl} onChange={e => onChange({ content: { ...content, buttonUrl: e.target.value } })} className="w-full px-3 py-2 rounded-lg border border-warm-200 text-sm focus:border-primary outline-none" /></div>
          </div>
          <div><label className="block text-[10px] text-warm-400 mb-1">Arkaplan Rengi</label><input type="color" value={content.bgColor} onChange={e => onChange({ content: { ...content, bgColor: e.target.value } })} className="w-10 h-10 rounded-lg border border-warm-200 cursor-pointer" /></div>
          <p className="text-[10px] text-warm-400">💡 Görsel eklemek için Medya Kütüphanesi&apos;nden seçin</p>
        </div>
      );
    case "text":
      return (
        <div>
          <textarea rows={5} value={content.body} onChange={e => onChange({ content: { ...content, body: e.target.value } })} className="w-full px-3 py-2 rounded-lg border border-warm-200 text-sm focus:border-primary outline-none resize-none" />
          <div className="flex gap-2 mt-2">
            <button className="text-xs bg-warm-100 px-3 py-1 rounded hover:bg-warm-200 transition-colors"><strong>B</strong></button>
            <button className="text-xs bg-warm-100 px-3 py-1 rounded hover:bg-warm-200 transition-colors"><em>İ</em></button>
            <button className="text-xs bg-warm-100 px-3 py-1 rounded hover:bg-warm-200 transition-colors"><u>Altı Ç.</u></button>
            <button className="text-xs bg-warm-100 px-3 py-1 rounded hover:bg-warm-200 transition-colors">🔗 Link</button>
            <button className="text-xs bg-warm-100 px-3 py-1 rounded hover:bg-warm-200 transition-colors">📷 Görsel</button>
          </div>
        </div>
      );
    case "image":
      return (
        <div className="space-y-3">
          <div className="border-2 border-dashed border-warm-300 rounded-xl p-8 text-center hover:border-primary transition-colors cursor-pointer">
            <p className="text-warm-400 text-sm">📷 Görsel eklemek için tıklayın veya sürükleyin</p>
            <p className="text-[10px] text-warm-300 mt-1">PNG, JPG, WEBP — Max 10MB</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div><label className="block text-[10px] text-warm-400 mb-1">ALT Metni</label><input type="text" value={content.alt} onChange={e => onChange({ content: { ...content, alt: e.target.value } })} className="w-full px-3 py-2 rounded-lg border border-warm-200 text-sm focus:border-primary outline-none" placeholder="Görsel açıklaması" /></div>
            <div><label className="block text-[10px] text-warm-400 mb-1">Başlık</label><input type="text" value={content.caption} onChange={e => onChange({ content: { ...content, caption: e.target.value } })} className="w-full px-3 py-2 rounded-lg border border-warm-200 text-sm focus:border-primary outline-none" placeholder="İsteğe bağlı" /></div>
          </div>
        </div>
      );
    case "gallery":
      return (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <label className="text-[10px] text-warm-400">Düzen:</label>
            <select value={content.layout} onChange={e => onChange({ content: { ...content, layout: e.target.value } })} className="text-xs px-2 py-1 rounded-lg border border-warm-200"><option value="grid">Grid</option><option value="slider">Slider</option><option value="masonry">Masonry</option></select>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[0,1,2].map(i => (
              <div key={i} className="border-2 border-dashed border-warm-300 rounded-xl p-6 text-center hover:border-primary transition-colors cursor-pointer">
                <p className="text-2xl text-warm-300">+</p>
              </div>
            ))}
          </div>
        </div>
      );
    case "cards":
      return (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <label className="text-[10px] text-warm-400">Kolon sayısı:</label>
            <select value={content.columns} onChange={e => onChange({ content: { ...content, columns: parseInt(e.target.value) } })} className="text-xs px-2 py-1 rounded-lg border border-warm-200"><option value={2}>2</option><option value={3}>3</option><option value={4}>4</option></select>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {content.items.map((item: string, i: number) => (
              <input key={i} type="text" value={item} onChange={e => { const newItems = [...content.items]; newItems[i] = e.target.value; onChange({ content: { ...content, items: newItems } }); }} className="px-3 py-2 rounded-lg border border-warm-200 text-sm focus:border-primary outline-none" placeholder={`Kart ${i+1}`} />
            ))}
          </div>
        </div>
      );
    case "cta":
      return (
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div><label className="block text-[10px] text-warm-400 mb-1">Çağrı Metni</label><input type="text" value={content.heading} onChange={e => onChange({ content: { ...content, heading: e.target.value } })} className="w-full px-3 py-2 rounded-lg border border-warm-200 text-sm focus:border-primary outline-none" /></div>
            <div><label className="block text-[10px] text-warm-400 mb-1">Buton Metni</label><input type="text" value={content.buttonText} onChange={e => onChange({ content: { ...content, buttonText: e.target.value } })} className="w-full px-3 py-2 rounded-lg border border-warm-200 text-sm focus:border-primary outline-none" /></div>
            <div><label className="block text-[10px] text-warm-400 mb-1">Buton Link</label><input type="text" value={content.buttonUrl} onChange={e => onChange({ content: { ...content, buttonUrl: e.target.value } })} className="w-full px-3 py-2 rounded-lg border border-warm-200 text-sm focus:border-primary outline-none" /></div>
            <div><label className="block text-[10px] text-warm-400 mb-1">Arkaplan Rengi</label><input type="color" value={content.bgColor} onChange={e => onChange({ content: { ...content, bgColor: e.target.value } })} className="w-10 h-10 rounded-lg border border-warm-200 cursor-pointer" /></div>
          </div>
        </div>
      );
    case "html":
      return (
        <div>
          <textarea rows={6} value={content.html} onChange={e => onChange({ content: { ...content, html: e.target.value } })} className="w-full px-3 py-2 rounded-lg border border-warm-200 text-sm font-mono focus:border-primary outline-none resize-none" placeholder="HTML kodunu yapıştırın..." />
          <p className="text-[10px] text-warm-400 mt-1">💡 Accio AI, harici widget veya özel kodları buraya yapıştırabilirsiniz.</p>
        </div>
      );
    default:
      return <p className="text-sm text-warm-400">Bu bölüm tipi için düzenleyici hazırlanıyor...</p>;
  }
}
