import { FadeIn } from "@/components/ui/FadeIn";
import Link from "next/link";

const categories = ["Tümü", "Mutfak & Sunum", "Ofis & Çalışma", "Dekorasyon", "Limited Edition"];

const products = [
  { id: 1, name: "The Executive", desc: "Masif Ceviz Çalışma Masası Objeleri", price: "₺12.500", category: "Ofis & Çalışma", isLimited: false },
  { id: 2, name: "Crescent", desc: "Geometrik Kesim Özel Sunum Tahtası", price: "₺4.800", category: "Mutfak & Sunum", isLimited: false },
  { id: 3, name: "Obsidian", desc: "Zeytin Ağacı ve Mat Reçine Vazo", price: "₺8.200", category: "Dekorasyon", isLimited: false },
  { id: 4, name: "Aethelgard", desc: "700 Yıllık Zeytin Ağacı Özel Sehpa", price: "₺35.000", category: "Limited Edition", isLimited: true },
  { id: 5, name: "Nocturne", desc: "Abanoz Ağacı Satranç Takımı", price: "₺18.500", category: "Dekorasyon", isLimited: true },
  { id: 6, name: "Signature", desc: "Ceviz Ağacı Özel Bıçak Bloğu", price: "₺3.200", category: "Mutfak & Sunum", isLimited: false },
];

export default function CollectionsPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background pt-12 pb-32">
      <div className="max-w-7xl mx-auto px-8 md:px-16 w-full space-y-16">
        
        {/* Header */}
        <section className="text-center space-y-6">
          <FadeIn direction="up">
            <h1 className="text-4xl md:text-6xl font-serif text-gold tracking-widest uppercase">
              Koleksiyonlar
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-sm md:text-base font-light tracking-wide text-foreground/70 max-w-2xl mx-auto">
              Dokunmaya kıyamayacağınız detaylar, nesilden nesile aktarılacak tasarımlar.
            </p>
          </FadeIn>
        </section>

        {/* Filters */}
        <FadeIn delay={0.4} className="flex flex-wrap justify-center gap-4 md:gap-8">
          {categories.map((category) => (
            <button 
              key={category}
              className={`text-xs md:text-sm tracking-widest uppercase transition-colors px-2 py-1 border-b ${
                category === "Tümü" 
                  ? "border-gold text-gold" 
                  : "border-transparent text-foreground/60 hover:text-gold hover:border-gold/50"
              }`}
            >
              {category}
            </button>
          ))}
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pt-8">
          {products.map((product, idx) => (
            <FadeIn key={product.id} delay={0.1 * (idx + 1)} direction="up">
              <div className="group cursor-pointer">
                {/* Image Placeholder */}
                <div className="w-full aspect-[4/5] bg-wood-dark/10 relative overflow-hidden mb-6 border border-transparent group-hover:border-gold/20 transition-all duration-500">
                  {product.isLimited && (
                    <div className="absolute top-4 right-4 z-20 text-[10px] uppercase tracking-widest text-gold bg-wood-dark px-3 py-1">
                      Limited
                    </div>
                  )}
                  <div className="absolute inset-0 bg-wood-dark/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end justify-center pb-8">
                    <span className="text-gold text-sm tracking-widest uppercase border-b border-gold pb-1 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      Detayları İncele
                    </span>
                  </div>
                </div>
                {/* Details */}
                <div className="space-y-2 text-center">
                  <h3 className="text-lg font-serif tracking-widest text-foreground group-hover:text-gold transition-colors">{product.name}</h3>
                  <p className="text-xs font-light tracking-wide text-foreground/60">{product.desc}</p>
                  <p className="text-sm tracking-widest text-gold pt-2">{product.price}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
