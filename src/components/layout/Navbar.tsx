import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-foreground/5 h-20 flex items-center justify-between px-8 md:px-16 transition-all duration-300">
      <div className="flex-1">
        <button className="text-sm tracking-widest uppercase hover:text-gold transition-colors">Menu</button>
      </div>
      <div className="flex-1 flex justify-center">
        <Link href="/" className="text-2xl font-serif text-gold tracking-[0.2em] font-light">
          LIGNOIR
        </Link>
      </div>
      <div className="flex-1 flex justify-end">
        <button className="text-sm tracking-widest uppercase hover:text-gold transition-colors">Cart (0)</button>
      </div>
    </nav>
  );
}
