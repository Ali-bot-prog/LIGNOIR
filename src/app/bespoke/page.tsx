"use client"
import { FadeIn } from "@/components/ui/FadeIn";
import { useState } from "react";

export default function BespokePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-background text-foreground pt-12 pb-32">
      <div className="max-w-4xl mx-auto px-8 md:px-16 w-full space-y-16">
        
        {/* Header */}
        <section className="text-center space-y-6">
          <FadeIn direction="up">
            <h1 className="text-4xl md:text-5xl font-serif text-gold tracking-widest uppercase">
              Bespoke
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-sm md:text-base font-light tracking-wide text-foreground/70 max-w-2xl mx-auto">
              Hayalinizdeki tasarımı hayata geçirelim. Özel ölçü, malzeme ve tasarım talepleriniz için LIGNOIR tasarım stüdyosu ile iletişime geçin.
            </p>
          </FadeIn>
        </section>

        {/* Bespoke Form */}
        <section className="bg-wood-dark p-8 md:p-16 border border-gold/10 relative overflow-hidden">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#d4af37_0%,_transparent_40%)] opacity-5 pointer-events-none" />
          
          <FadeIn direction="up" delay={0.4}>
            {submitted ? (
              <div className="text-center space-y-6 py-12">
                <h3 className="text-2xl font-serif text-gold tracking-widest uppercase">Talebiniz Alındı</h3>
                <p className="font-light text-gold-light/80">Tasarım ekibimiz en kısa sürede sizinle iletişime geçecektir.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gold-light/60">Ad Soyad</label>
                    <input required type="text" className="w-full bg-transparent border-b border-gold-light/20 text-gold-light py-2 focus:outline-none focus:border-gold transition-colors font-light" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gold-light/60">E-posta</label>
                    <input required type="email" className="w-full bg-transparent border-b border-gold-light/20 text-gold-light py-2 focus:outline-none focus:border-gold transition-colors font-light" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gold-light/60">İlgilendiğiniz Kategori</label>
                  <select className="w-full bg-transparent border-b border-gold-light/20 text-gold-light py-2 focus:outline-none focus:border-gold transition-colors font-light appearance-none">
                    <option className="bg-wood-dark">Çalışma Masası</option>
                    <option className="bg-wood-dark">Yemek Masası</option>
                    <option className="bg-wood-dark">Konsol / Sehpa</option>
                    <option className="bg-wood-dark">Minimalist Obje</option>
                    <option className="bg-wood-dark">Diğer</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gold-light/60">Tasarım Detayları & Ölçüler</label>
                  <textarea required rows={4} className="w-full bg-transparent border-b border-gold-light/20 text-gold-light py-2 focus:outline-none focus:border-gold transition-colors font-light resize-none" placeholder="Hayalinizdeki ürünü, malzemesi ve boyutlarıyla tarif ediniz..."></textarea>
                </div>

                <button type="submit" className="w-full border border-gold text-gold hover:bg-gold hover:text-wood-dark transition-all duration-500 py-4 uppercase tracking-widest text-sm font-medium mt-8">
                  Talebi Gönder
                </button>
              </form>
            )}
          </FadeIn>
        </section>
      </div>
    </div>
  );
}
