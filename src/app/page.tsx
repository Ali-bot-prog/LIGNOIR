import { FadeIn } from "@/components/ui/FadeIn";
import Link from "next/link";
import products from "@/data/products.json";
import SectionHeader from "@/components/SectionHeader";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Pseudo-video background (luxury gradient replacement since we don't have a real video asset yet) */}
        <div className="absolute inset-0 bg-[#0c0c0c] z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--wood-dark)_10%,_transparent_80%)] opacity-40 mix-blend-screen scale-150" />
        </div>
        
        <div className="z-10 text-center flex flex-col items-center justify-center space-y-8 px-4">
          <FadeIn direction="up" delay={0.2} className="relative">
            <h1 className="text-6xl md:text-8xl font-serif text-gold tracking-[0.15em] uppercase font-light drop-shadow-lg">
              LIGNOIR
            </h1>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.5}>
            <p className="text-xl md:text-2xl tracking-[0.3em] font-light text-foreground/90 uppercase opacity-90">
              Asırlık Miras, Modern Lüks
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.8} className="pt-8">
            <Link 
              href="/collections" 
              className="px-10 py-4 border border-gold/40 text-gold hover:bg-gold hover:text-wood-dark transition-all duration-500 uppercase tracking-widest text-sm"
            >
              Koleksiyonu Keşfet
            </Link>
          </FadeIn>
        </div>


      </section>

      {/* 2. CURATED COLLECTION */}
      <section className="w-full bg-background py-32 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <SectionHeader subtitle="" title="Masterpieces" />
          
          {/* Sample Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {products.map((product, idx) => (
              <FadeIn key={idx} delay={0.2 * (idx + 1)} direction="up">
                <div className="group cursor-pointer">
                  {/* Image Placeholder */}
                  <div className="w-full aspect-[4/5] bg-wood-dark/20 relative overflow-hidden mb-6">
                    <div className="absolute inset-0 bg-wood-dark/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    {/* Placeholder for real image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
                  </div>
                  <div className="space-y-2 text-center">
                    <h3 className="text-lg font-serif tracking-widest text-foreground group-hover:text-gold transition-colors">{product.name}</h3>
                    <p className="text-xs font-light tracking-wide text-foreground/60">{product.desc}</p>
                    <p className="text-sm tracking-widest text-gold pt-2">{product.price}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="text-center mt-20">
            <Link href="/collections" className="inline-block border-b border-gold pb-1 text-sm uppercase tracking-widest text-foreground/80 hover:text-gold transition-colors">
              Tüm Koleksiyonu Görüntüle
            </Link>
          </div>
        </div>
      </section>

      {/* 3. THE CRAFT */}
      <section className="w-full py-32 px-8 md:px-16 bg-[#0a0a0a] border-t border-wood-dark/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <div className="aspect-square bg-wood-dark/40 w-full rounded-full overflow-hidden relative">
              <div className="absolute inset-0 mix-blend-overlay bg-[radial-gradient(circle_at_center,_#d4af37_0%,_transparent_70%)] opacity-20" />
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-8">
            <FadeIn direction="left">
              <h2 className="text-3xl md:text-5xl font-serif text-gold tracking-widest uppercase mb-4">
                The Craft
              </h2>
            </FadeIn>
            <FadeIn delay={0.2} direction="left">
              <p className="text-lg font-light leading-relaxed text-foreground/80">
                LIGNOIR atölyelerinde ahşabın doğal karakteri ile modern geometrinin kusursuz dengesi, zanaatkarlarımızın ellerinde hayat bulur. Her bir parça, doğanın benzersiz imzasını taşır.
              </p>
            </FadeIn>
            <FadeIn delay={0.4} direction="left">
              <Link href="/heritage" className="inline-block mt-4 px-8 py-3 bg-gold text-[#0a0a0a] hover:bg-gold-light transition-colors uppercase tracking-widest text-sm font-medium">
                Hikayemizi Okuyun
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
