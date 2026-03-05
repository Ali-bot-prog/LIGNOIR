import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-wood-dark text-gold-light py-16 px-8 md:px-16 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        <div className="space-y-4">
          <h3 className="text-3xl font-serif tracking-widest text-gold mb-6">LIGNOIR</h3>
          <p className="text-sm opacity-80 font-light tracking-wide max-w-xs mx-auto md:mx-0">
            Asırlık Miras, Modern Lüks. El işçiliği eşsiz ahşap tasarımları.
          </p>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-sm uppercase tracking-widest font-semibold text-gold mb-6">Keşfet</h4>
          <ul className="space-y-2 text-sm font-light opacity-80">
            <li><Link href="/collections" className="hover:text-gold transition-colors">Koleksiyonlar</Link></li>
            <li><Link href="/heritage" className="hover:text-gold transition-colors">Hikayemiz</Link></li>
            <li><Link href="/bespoke" className="hover:text-gold transition-colors">Özel Sipariş</Link></li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-sm uppercase tracking-widest font-semibold text-gold mb-6">İletişim</h4>
          <p className="text-sm font-light opacity-80">hello@lignoir.com</p>
          <a href="#" className="inline-block mt-4 px-6 py-2 border border-gold text-gold hover:bg-gold hover:text-wood-dark transition-all duration-300 text-sm tracking-widest uppercase">
            Etsy Mağazamız
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gold/20 text-center text-xs opacity-60 font-light tracking-wider">
        &copy; {new Date().getFullYear()} LIGNOIR. Powered by <span className="text-gold font-semibold">OmNexus</span>. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
