import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h1 className="text-3xl font-bold text-warm-900 mb-4">İletişim</h1>
            <p className="text-warm-500 mb-8">
              Tedarikçi başvuruları, teknik destek ve iş birliği için bize ulaşın.
            </p>
            <div className="space-y-6">
              {[
                { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>, title: "Adres", info: "İstanbul, Türkiye" },
                { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>, title: "E-posta", info: "info@mobitedarik.com\ntedarikci@mobitedarik.com" },
                { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>, title: "Telefon", info: "+90 (212) 555 0 123" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold text-warm-900">{item.title}</h3>
                    <p className="text-warm-500 whitespace-pre-line">{item.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="bg-white rounded-2xl border border-warm-200 p-8">
              <h2 className="text-2xl font-bold text-warm-900 mb-6">Bize Mesaj Gönderin</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
