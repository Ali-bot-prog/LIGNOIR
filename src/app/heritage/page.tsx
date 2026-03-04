import { FadeIn } from "@/components/ui/FadeIn";

export default function HeritagePage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden bg-wood-dark">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#d4af37_0%,_transparent_60%)] opacity-10 mix-blend-screen" />
        <div className="z-10 text-center px-4">
          <FadeIn direction="up">
            <h1 className="text-4xl md:text-6xl font-serif text-gold tracking-widest uppercase mb-6 drop-shadow-md">
              The Heritage
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-sm md:text-lg font-light tracking-[0.2em] text-gold-light/80 uppercase">
              Ağacın Hafızasına Saygı
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Manifesto */}
      <section className="w-full py-24 md:py-32 px-8 md:px-16">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <FadeIn direction="up">
            <h2 className="text-2xl md:text-3xl font-serif text-gold tracking-widest uppercase">
              Manifesto
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-lg md:text-2xl font-light leading-relaxed text-foreground/80 font-serif italic">
              "LIGNOIR ismi, Latince ahşap anlamına gelen 'Lignum' ve siyahın asaletini, derinliğini temsil eden 'Noir' kelimelerinin birleşiminden doğdu. Bizim için ahşap sadece bir malzeme değil, yüzlerce yıllık bir yaşanmışlıktır."
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.4}>
             <div className="w-[1px] h-24 bg-gold mx-auto opacity-50" />
          </FadeIn>
          <FadeIn direction="up" delay={0.6}>
            <p className="text-base md:text-lg font-light leading-relaxed text-foreground/70 text-justify">
              Zamanın testinden geçmiş ağaçları, endüstriyel kalıplardan uzak, el işçiliğinin benzersiz dokunuşlarıyla modern mekanlara taşıyoruz. Her çizik, her damar, doğanın attığı bir imzadır. Biz sadece bu imzayı çerçeveliyoruz.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Sürdürülebilirlik */}
      <section className="w-full py-24 md:py-32 px-8 md:px-16 bg-[#0a0a0a] text-foreground">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 space-y-8 order-2 md:order-1">
            <FadeIn direction="right">
              <h2 className="text-3xl md:text-4xl font-serif text-gold tracking-widest uppercase mb-6">
                Sürdürülebilirlik
              </h2>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <p className="text-base font-light leading-relaxed text-foreground/80">
                Hiçbir ağaç, LIGNOIR için özel olarak kesilmez. Sadece doğal ömrünü tamamlamış, devrilmiş veya sertifikalı sürdürülebilir ormanlardan elde edilen ağaçları kullanıyoruz.
              </p>
            </FadeIn>
            <FadeIn direction="right" delay={0.4}>
              <p className="text-base font-light leading-relaxed text-foreground/80">
                Atölyemizde karbon ayak izimizi minimize ediyor, hiçbir kimyasal vernik kullanmıyoruz. Ürünlerimizi kendi hazırladığımız doğal balmumu ve bitkisel yağ karışımları ile koruyoruz.
              </p>
            </FadeIn>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <FadeIn direction="left">
              <div className="aspect-[4/3] bg-wood-dark/40 relative overflow-hidden border border-wood-dark/50">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1a1a1a_0%,_transparent_100%)] opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gold uppercase tracking-[0.3em] font-light text-xs opacity-50">Sürdürülebilir Kaynaklar</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* The Workshop */}
      <section className="w-full py-24 md:py-32 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-serif text-gold tracking-widest uppercase text-center mb-16">
              Atölye Günlüğü
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn direction="up" delay={0.2}>
              <div className="aspect-[16/9] bg-wood-dark/10 flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-wood-dark/20 group-hover:bg-wood-dark/40 transition-colors duration-700" />
                  <span className="text-foreground/50 text-sm tracking-widest uppercase font-light z-10">Kesimhane [Video]</span>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.4}>
              <div className="aspect-[16/9] bg-wood-dark/10 flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-wood-dark/20 group-hover:bg-wood-dark/40 transition-colors duration-700" />
                  <span className="text-foreground/50 text-sm tracking-widest uppercase font-light z-10">Zımpara & Yağlama [Görsel]</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
