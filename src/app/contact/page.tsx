"use client"
import { FadeIn } from "@/components/ui/FadeIn";
import { useState } from "react";

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<"contact" | "faq" | "care">("contact");

  return (
    <div className="flex flex-col w-full min-h-screen bg-background text-foreground pt-12 pb-32">
      <div className="max-w-4xl mx-auto px-8 md:px-16 w-full space-y-16">
        
        {/* Header */}
        <section className="text-center space-y-6">
          <FadeIn direction="up">
            <h1 className="text-3xl md:text-5xl font-serif text-gold tracking-widest uppercase">
              The Concierge
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-sm md:text-base font-light tracking-wide text-foreground/70 max-w-2xl mx-auto">
              Size nasıl yardımcı olabiliriz?
            </p>
          </FadeIn>
        </section>

        {/* Navigation Tabs */}
        <FadeIn delay={0.4} className="flex justify-center flex-wrap gap-8 border-b border-foreground/10 pb-4">
          {[
            { id: "contact", label: "İletişim" },
            { id: "faq", label: "Sıkça Sorulan Sorular" },
            { id: "care", label: "Bakım Kılavuzu" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`text-sm tracking-widest uppercase transition-colors px-2 relative ${
                activeTab === tab.id ? "text-gold" : "text-foreground/50 hover:text-foreground/80"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute -bottom-[17px] left-0 right-0 h-[1px] bg-gold" />
              )}
            </button>
          ))}
        </FadeIn>

        {/* Content Area */}
        <div className="min-h-[400px]">
          {activeTab === "contact" && (
            <FadeIn key="contact" className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h2 className="font-serif text-2xl tracking-widest text-gold uppercase">Bize Ulaşın</h2>
                  <p className="font-light text-foreground/80 leading-relaxed text-sm">
                    LIGNOIR tasarımları, sipariş süreçleri ve diğer tüm sorularınız için formu doldurabilir veya doğrudan e-posta gönderebilirsiniz. 
                  </p>
                  <div className="pt-4 space-y-4 font-light text-sm">
                    <p><strong className="uppercase tracking-widest text-xs opacity-60 block mb-1">E-posta</strong> hello@lignoir.com</p>
                    <p><strong className="uppercase tracking-widest text-xs opacity-60 block mb-1">Müşteri Hizmetleri</strong> +90 (555) 123 45 67</p>
                    <p><strong className="uppercase tracking-widest text-xs opacity-60 block mb-1">Çalışma Saatleri</strong> Pzt - Cum, 09:00 - 18:00</p>
                  </div>
                </div>
                <div>
                  <form className="space-y-6">
                    <input type="text" placeholder="Ad Soyad" className="w-full bg-transparent border-b border-foreground/20 text-foreground py-2 focus:outline-none focus:border-gold transition-colors font-light text-sm" />
                    <input type="email" placeholder="E-posta" className="w-full bg-transparent border-b border-foreground/20 text-foreground py-2 focus:outline-none focus:border-gold transition-colors font-light text-sm" />
                    <textarea rows={4} placeholder="Mesajınız" className="w-full bg-transparent border-b border-foreground/20 text-foreground py-2 focus:outline-none focus:border-gold transition-colors font-light resize-none text-sm"></textarea>
                    <button type="button" className="text-sm uppercase tracking-widest border border-gold text-gold hover:bg-gold hover:text-background transition-colors px-8 py-3 w-full md:w-auto">Gönder</button>
                  </form>
                </div>
              </div>
            </FadeIn>
          )}

          {activeTab === "faq" && (
            <FadeIn key="faq" className="max-w-3xl mx-auto space-y-8">
               <h2 className="font-serif text-2xl tracking-widest text-gold uppercase text-center mb-8">Sıkça Sorulan Sorular</h2>
               <div className="space-y-6">
                <div>
                  <h3 className="uppercase tracking-widest text-sm font-semibold mb-2">Siparişler ne kadar sürede teslim edilir?</h3>
                  <p className="font-light text-sm text-foreground/70 leading-relaxed">
                    Tüm ürünlerimiz %100 el işçiliği olduğu ve üretim aşamaları titizlikle yürütüldüğü için, seçtiğiniz ürünün niteliğine göre teslimat süresi 2 ile 4 hafta arasında değişmektedir.
                  </p>
                </div>
                <div className="w-full h-[1px] bg-foreground/10" />
                <div>
                  <h3 className="uppercase tracking-widest text-sm font-semibold mb-2">Uluslararası gönderim yapıyor musunuz?</h3>
                  <p className="font-light text-sm text-foreground/70 leading-relaxed">
                    Evet. Tüm dünyaya güvenli ambalajlama ile ürün gönderimi yapıyoruz. Yurtdışı siparişleriniz için Etsy mağazamızı kullanabilir veya bizimle iletişime geçebilirsiniz.
                  </p>
                </div>
               </div>
            </FadeIn>
          )}

          {activeTab === "care" && (
            <FadeIn key="care" className="max-w-3xl mx-auto space-y-8">
               <h2 className="font-serif text-2xl tracking-widest text-gold uppercase text-center mb-8">Ahşabın Ruhu ve Bakımı</h2>
               
               <div className="bg-wood-dark p-8 text-gold-light space-y-6 border border-gold/10">
                 <p className="font-serif italic text-lg opacity-90 text-center">
                   "Ahşap canlıdır, nefes alır ve zamanla karakter kazanır."
                 </p>
                 
                 <div className="space-y-4 font-light text-sm opacity-80 pt-4">
                   <p className="flex items-start"><span className="text-gold mr-3">✦</span> Direk güneş ışığı veya aşırı ısı (şömine yanı, kalorifer vb.) ahşabın çatlamasına neden olabilir.</p>
                   <p className="flex items-start"><span className="text-gold mr-3">✦</span> Yüzeyi kimyasal temizleyicilerle silmekten kaçının. Nemli, pamuklu bir bez temizlik için idealdir.</p>
                   <p className="flex items-start"><span className="text-gold mr-3">✦</span> Mutfak ve sunum tahtaları için her 3-4 ayda bir gıdaya uygun mineral yağ veya doğal balmumu uygulamak, ahşabın ömrünü nesiller boyu uzatacaktır.</p>
                 </div>
               </div>
            </FadeIn>
          )}
        </div>

      </div>
    </div>
  );
}
