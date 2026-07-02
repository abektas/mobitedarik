"use client";
import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface Section {
  id: string;
  componentKey: string;
  props: Record<string, any>;
  sortOrder: number;
}

// Sortable Section Item
function SortableSection({ section, onEdit, onDelete, onDuplicate }: { section: Section; onEdit: (s: Section) => void; onDelete: (id: string) => void; onDuplicate: (s: Section) => void }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: section.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const componentLabels: Record<string, string> = {
    hero: "🖼️ Hero Banner", "text-block": "📝 Metin Bloğu", "image-block": "🖼️ Görsel",
    gallery: "🖼️ Galeri", cards: "📇 Kartlar", cta: "🔘 CTA Butonu",
    columns: "📰 Kolonlar", video: "🎬 Video", "html-block": "🔌 HTML Bloğu",
    "form-block": "📋 Form", "nav-menu": "🧭 Menü", "contact-info": "📍 İletişim",
    "featured-suppliers": "🏭 Tedarikçiler", "blog-posts": "📰 Blog Yazıları",
  };

  return (
    <div ref={setNodeRef} style={style} className="bg-white rounded-xl border border-warm-200 hover:border-primary/40 transition-all group">
      <div className="flex items-center justify-between px-4 py-2.5 bg-warm-50 rounded-t-xl border-b border-warm-200">
        <div className="flex items-center gap-2">
          <button {...attributes} {...listeners} className="cursor-grab text-warm-300 hover:text-warm-500" title="Sürükle">⠿</button>
          <span className="text-sm font-medium text-warm-800">{componentLabels[section.componentKey] || section.componentKey}</span>
        </div>
        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button onClick={() => onDuplicate(section)} className="text-xs text-warm-400 hover:text-primary px-2 py-1" title="Çoğalt">📋</button>
          <button onClick={() => onEdit(section)} className="text-xs text-primary hover:underline px-2 py-1">Düzenle</button>
          <button onClick={() => onDelete(section.id)} className="text-xs text-red-500 hover:text-red-600 px-2 py-1">Sil</button>
        </div>
      </div>

      <div className="p-4">
        <SectionPreview componentKey={section.componentKey} props={section.props} />
      </div>
    </div>
  );
}

// Mini preview for each component type
function SectionPreview({ componentKey, props }: { componentKey: string; props: Record<string, any> }) {
  switch (componentKey) {
    case "hero":
      return (
        <div className="rounded-lg p-6 text-white" style={{ backgroundColor: props.bgColor || "#1a5e3a" }}>
          <div className="text-center">
            <div className="text-[10px] uppercase tracking-wider opacity-70 mb-1">{props.subtext || "Alt başlık"}</div>
            <div className="text-xl font-bold">{props.heading || "Başlık"}</div>
            {props.buttonText && <div className="inline-block mt-3 px-4 py-1.5 rounded-lg text-sm font-semibold" style={{ backgroundColor: props.buttonBg || "#c8703a" }}>{props.buttonText}</div>}
          </div>
        </div>
      );
    case "text-block":
      return <div className="text-sm text-warm-600 p-3 bg-warm-50 rounded-lg whitespace-pre-wrap line-clamp-3">{props.body || "Metin içeriği..."}</div>;
    case "image-block":
      return <div className="aspect-video bg-warm-100 rounded-lg flex items-center justify-center text-warm-400 text-sm">{props.alt || "🖼️ Görsel"}</div>;
    case "cards":
      return (
        <div className="grid grid-cols-3 gap-2">
          {(props.items || ["Kart 1", "Kart 2", "Kart 3"]).slice(0, 3).map((item: string, i: number) => (
            <div key={i} className="bg-warm-50 rounded-lg p-3 text-center text-sm text-warm-600">{item}</div>
          ))}
        </div>
      );
    case "cta":
      return (
        <div className="rounded-lg p-6 text-white text-center" style={{ backgroundColor: props.bgColor || "#1a5e3a" }}>
          <div className="text-lg font-bold">{props.heading || "CTA Başlığı"}</div>
          <div className="inline-block mt-2 px-4 py-1.5 rounded-lg text-sm font-semibold bg-accent">{props.buttonText || "Buton"}</div>
        </div>
      );
    case "columns":
      return (
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-warm-50 rounded-lg p-4 text-sm text-warm-500">Kolon 1</div>
          <div className="bg-warm-50 rounded-lg p-4 text-sm text-warm-500">Kolon 2</div>
        </div>
      );
    case "gallery":
      return <div className="grid grid-cols-3 gap-2">{[1,2,3].map(i => <div key={i} className="aspect-square bg-warm-100 rounded-lg flex items-center justify-center text-warm-400 text-xs">📷</div>)}</div>;
    case "video":
      return <div className="aspect-video bg-warm-900 rounded-lg flex items-center justify-center text-white/50 text-sm">🎬 Video</div>;
    case "html-block":
      return <div className="bg-warm-50 rounded-lg p-3 text-xs font-mono text-warm-400 line-clamp-2">{props.html || "<!-- HTML kodu -->"}</div>;
    case "form-block":
      return <div className="bg-warm-50 rounded-lg p-4 text-sm text-warm-500 text-center">📋 {props.title || "Form"}</div>;
    default:
      return <div className="text-sm text-warm-400 italic p-3 bg-warm-50 rounded-lg">{componentKey} bileşeni</div>;
  }
}

// Props editor
function PropsEditor({ componentKey, props, onChange }: { componentKey: string; props: Record<string, any>; onChange: (props: Record<string, any>) => void }) {
  const set = (key: string, value: any) => onChange({ ...props, [key]: value });

  const fields = getFieldsForComponent(componentKey);

  return (
    <div className="space-y-3">
      {fields.map((field) => (
        <div key={field.key}>
          <label className="block text-[10px] font-medium text-warm-500 uppercase mb-1">{field.label}</label>
          {field.type === "text" && <input type="text" value={props[field.key] || ""} onChange={e => set(field.key, e.target.value)} className="w-full px-3 py-2 rounded-lg border border-warm-200 text-sm focus:border-primary outline-none" />}
          {field.type === "color" && <input type="color" value={props[field.key] || "#1a5e3a"} onChange={e => set(field.key, e.target.value)} className="w-10 h-10 rounded-lg border border-warm-200 cursor-pointer" />}
          {field.type === "number" && <input type="number" value={props[field.key] || 0} onChange={e => set(field.key, parseInt(e.target.value))} className="w-full px-3 py-2 rounded-lg border border-warm-200 text-sm focus:border-primary outline-none" />}
          {field.type === "textarea" && <textarea rows={3} value={props[field.key] || ""} onChange={e => set(field.key, e.target.value)} className="w-full px-3 py-2 rounded-lg border border-warm-200 text-sm focus:border-primary outline-none resize-none" />}
          {field.type === "select" && (
            <select value={props[field.key] || ""} onChange={e => set(field.key, e.target.value)} className="w-full px-3 py-2 rounded-lg border border-warm-200 text-sm focus:border-primary outline-none">
              {(field.options || []).map((o: string) => <option key={o} value={o}>{o}</option>)}
            </select>
          )}
        </div>
      ))}
    </div>
  );
}

function getFieldsForComponent(key: string): { key: string; label: string; type: string; options?: string[] }[] {
  const fields: Record<string, any[]> = {
    hero: [
      { key: "heading", label: "Başlık", type: "text" },
      { key: "subtext", label: "Alt Başlık", type: "text" },
      { key: "buttonText", label: "Buton Metni", type: "text" },
      { key: "buttonUrl", label: "Buton Linki", type: "text" },
      { key: "bgColor", label: "Arkaplan Rengi", type: "color" },
    ],
    "text-block": [
      { key: "body", label: "Metin İçeriği", type: "textarea" },
    ],
    "image-block": [
      { key: "alt", label: "Açıklama", type: "text" },
      { key: "caption", label: "Başlık", type: "text" },
    ],
    cards: [
      { key: "columns", label: "Kolon Sayısı", type: "number" },
    ],
    cta: [
      { key: "heading", label: "Çağrı Metni", type: "text" },
      { key: "buttonText", label: "Buton Metni", type: "text" },
      { key: "buttonUrl", label: "Buton Linki", type: "text" },
      { key: "bgColor", label: "Arkaplan Rengi", type: "color" },
    ],
    gallery: [
      { key: "layout", label: "Düzen", type: "select", options: ["grid", "slider", "masonry"] },
    ],
    "html-block": [
      { key: "html", label: "HTML Kodu", type: "textarea" },
    ],
  };
  return fields[key] || [{ key: "content", label: "İçerik", type: "text" }];
}

export default function PageEditorPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const [page, setPage] = useState<any>(null);
  const [sections, setSections] = useState<Section[]>([]);
  const [pageTitle, setPageTitle] = useState("");
  const [selectedSection, setSelectedSection] = useState<Section | null>(null);
  const [showAddMenu, setShowAddMenu] = useState(false);
  const [activeTab, setActiveTab] = useState<"visual" | "structure" | "preview">("visual");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetch("/api/cms/components").then(r => r.json()).then(d => setComponents(d.data));
    // Load page
    const id = window.location.pathname.split("/").pop();
    if (id && id !== "new") {
      fetch(`/api/cms/pages/${id}`).then(r => r.json()).then(d => {
        setPage(d);
        setPageTitle(d.title);
        setSections(d.sections || []);
      });
    } else {
      setPageTitle("Yeni Sayfa");
      setPage({ id: "new", title: "Yeni Sayfa", slug: "", status: "draft" });
    }
  }, []);

  const [components, setComponents] = useState<any[]>([]);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setSections((items) => {
        const oldIndex = items.findIndex(i => i.id === active.id);
        const newIndex = items.findIndex(i => i.id === over.id);
        return arrayMove(items, oldIndex, newIndex).map((s, i) => ({ ...s, sortOrder: i }));
      });
    }
  };

  const addSection = (componentKey: string) => {
    const newSection: Section = {
      id: `s${Date.now()}`,
      componentKey,
      props: getDefaultProps(componentKey),
      sortOrder: sections.length,
    };
    setSections([...sections, newSection]);
    setShowAddMenu(false);
  };

  const deleteSection = (id: string) => {
    setSections(sections.filter(s => s.id !== id));
    if (selectedSection?.id === id) setSelectedSection(null);
  };

  const duplicateSection = (section: Section) => {
    const newSection: Section = { ...section, id: `s${Date.now()}`, sortOrder: sections.length };
    setSections([...sections, newSection]);
  };

  const savePage = async () => {
    setSaving(true);
    await new Promise(r => setTimeout(r, 500));
    setSaving(false);
  };

  const publishPage = async () => {
    setSaving(true);
    await new Promise(r => setTimeout(r, 800));
    setSaving(false);
  };

  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col">
      {/* Top Bar */}
      <div className="bg-white border-b border-warm-200 px-6 py-3 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-4">
          <Link href="/super-admin/pages" className="text-warm-400 hover:text-warm-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          </Link>
          <input type="text" value={pageTitle} onChange={e => setPageTitle(e.target.value)} className="text-lg font-bold text-warm-900 bg-transparent border-b border-transparent hover:border-warm-300 focus:border-primary outline-none" placeholder="Sayfa başlığı" />
          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${page?.status === "published" ? "bg-green-50 text-green-600" : "bg-warm-100 text-warm-500"}`}>{page?.status === "published" ? "Yayında" : "Taslak"}</span>
        </div>
        <div className="flex items-center gap-3">
          {/* Tab Buttons */}
          <div className="flex bg-warm-100 rounded-lg p-0.5">
            {(["visual", "structure", "preview"] as const).map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${activeTab === tab ? "bg-white text-warm-900 shadow-sm" : "text-warm-500 hover:text-warm-700"}`}>
                {tab === "visual" ? "🎨 Görsel" : tab === "structure" ? "🧱 Yapı" : "👁️ Önizleme"}
              </button>
            ))}
          </div>
          <button onClick={savePage} disabled={saving} className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors text-sm font-medium disabled:opacity-50">{saving ? "Kaydediliyor..." : "Kaydet"}</button>
          <button onClick={publishPage} className="bg-accent text-white px-4 py-2 rounded-lg hover:bg-accent-light transition-colors text-sm font-medium">Yayınla</button>
        </div>
      </div>

      {/* Editor Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Canvas */}
        <div className="flex-1 overflow-y-auto p-6 bg-warm-50">
          {activeTab === "preview" ? (
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-warm-200 p-8">
              <p className="text-center text-warm-400 text-sm">👁️ Yayın önizlemesi</p>
              <div className="mt-6 space-y-6">
                {sections.map(s => (
                  <div key={s.id} className="border border-dashed border-warm-200 rounded-xl p-4">
                    <SectionPreview componentKey={s.componentKey} props={s.props} />
                  </div>
                ))}
                {sections.length === 0 && <p className="text-center text-warm-400 py-10">Henüz bölüm eklenmemiş</p>}
              </div>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto space-y-4">
              {activeTab === "structure" && (
                <div className="bg-white rounded-xl border border-warm-200 p-4 mb-4">
                  <h3 className="text-xs font-semibold text-warm-500 uppercase tracking-wider mb-3">Sayfa Bilgisi</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div><span className="text-warm-400">Slug:</span> <span className="text-warm-900 font-mono text-xs">{page?.slug || "/"}</span></div>
                    <div><span className="text-warm-400">Durum:</span> <span>{page?.status || "draft"}</span></div>
                    <div><span className="text-warm-400">Bölüm sayısı:</span> <span>{sections.length}</span></div>
                    <div><span className="text-warm-400">ID:</span> <span className="text-xs font-mono">{page?.id}</span></div>
                  </div>
                </div>
              )}

              <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <SortableContext items={sections.map(s => s.id)} strategy={verticalListSortingStrategy}>
                  {sections.length === 0 ? (
                    <div className="bg-white rounded-xl border-2 border-dashed border-warm-300 p-16 text-center">
                      <p className="text-warm-400 text-lg mb-2">Bu sayfa henüz boş</p>
                      <p className="text-warm-300 text-sm mb-6">Aşağıdan bölüm ekleyerek sayfayı oluşturun</p>
                    </div>
                  ) : (
                    sections.map(section => (
                      <SortableSection key={section.id} section={section} onEdit={setSelectedSection} onDelete={deleteSection} onDuplicate={duplicateSection} />
                    ))
                  )}
                </SortableContext>
              </DndContext>

              {/* Add Section Button */}
              <div className="text-center pt-4 pb-8">
                {showAddMenu ? (
                  <div className="bg-white rounded-xl border border-warm-200 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-warm-900">Bölüm Ekle</h3>
                      <button onClick={() => setShowAddMenu(false)} className="text-warm-400 hover:text-warm-600">✕</button>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                      {components.map((c: any) => (
                        <button key={c.key} onClick={() => addSection(c.key)} className="p-3 rounded-lg border border-warm-200 hover:border-primary hover:bg-primary/5 transition-all text-center">
                          <div className="text-lg mb-1">{getComponentIcon(c.key)}</div>
                          <div className="text-[10px] font-medium text-warm-700 leading-tight">{c.name}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <button onClick={() => setShowAddMenu(true)} className="bg-white border-2 border-dashed border-warm-300 hover:border-primary hover:bg-primary/5 text-warm-500 hover:text-primary px-8 py-4 rounded-xl transition-all font-medium text-sm">
                    + Bölüm Ekle
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Properties Panel */}
        {selectedSection && (
          <aside className="w-80 bg-white border-l border-warm-200 overflow-y-auto p-5 flex-shrink-0">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-semibold text-warm-900 text-sm">Özellikler</h3>
              <button onClick={() => setSelectedSection(null)} className="text-warm-400 hover:text-warm-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 6L6 18M6 6l12 12" /></svg>
              </button>
            </div>
            <PropsEditor
              componentKey={selectedSection.componentKey}
              props={selectedSection.props}
              onChange={(newProps) => {
                setSections(sections.map(s => s.id === selectedSection.id ? { ...s, props: newProps } : s));
                setSelectedSection({ ...selectedSection, props: newProps });
              }}
            />
          </aside>
        )}
      </div>
    </div>
  );
}

function getDefaultProps(key: string): Record<string, any> {
  const defaults: Record<string, any> = {
    hero: { heading: "Başlık", subtext: "Alt başlık", buttonText: "Keşfet", buttonUrl: "#", bgColor: "#1a5e3a" },
    "text-block": { body: "İçeriği buraya yazın..." },
    "image-block": { alt: "Görsel açıklaması", caption: "" },
    gallery: { images: [], layout: "grid" },
    cards: { columns: 3, items: ["Kart 1", "Kart 2", "Kart 3"] },
    cta: { heading: "Başlık", buttonText: "Buton", buttonUrl: "#", bgColor: "#1a5e3a" },
    video: { embedUrl: "", caption: "" },
    columns: { columns: 2, content: ["Sütun 1", "Sütun 2"] },
    "html-block": { html: "<!-- HTML kodu -->" },
    "form-block": { formType: "contact", title: "İletişim Formu" },
  };
  return defaults[key] || {};
}

function getComponentIcon(key: string): string {
  const icons: Record<string, string> = {
    hero: "🖼️", "text-block": "📝", "image-block": "🖼️", gallery: "🖼️",
    cards: "📇", cta: "🔘", columns: "📰", video: "🎬",
    "html-block": "🔌", "form-block": "📋", "nav-menu": "🧭",
    "contact-info": "📍", "featured-suppliers": "🏭", "blog-posts": "📰",
  };
  return icons[key] || "📦";
}
