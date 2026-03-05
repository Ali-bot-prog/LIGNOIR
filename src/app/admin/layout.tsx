'use client';

import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { LayoutDashboard, Package, Grid3x3, LogOut, Settings, MessageSquare, ShoppingBag, Eye } from 'lucide-react';
import { useState } from 'react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  if (pathname === '/admin/login') {
    return <div className="min-h-screen bg-stone-50">{children}</div>;
  }

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await fetch('/api/admin/logout', { method: 'POST' });
      router.push('/admin/login');
      router.refresh();
    } catch (err) {
      console.error('Logout failed');
      setIsLoggingOut(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-stone-50 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-stone-900 text-stone-300 flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-stone-800">
          <span className="text-white text-lg font-serif">LIGNOIR Admin</span>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-2">
          <Link 
            href="/admin"
            className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
              pathname === '/admin' ? 'bg-stone-800 text-white' : 'hover:bg-stone-800 hover:text-white'
            }`}
          >
            <LayoutDashboard size={18} />
            Özet
          </Link>

          <div className="pt-4">
            <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider px-3 mb-3">Ürünler</p>
            
            <Link 
              href="/admin/products"
              className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-sm ${
                pathname.startsWith('/admin/products') ? 'bg-stone-800 text-white' : 'hover:bg-stone-800 hover:text-white'
              }`}
            >
              <Package size={16} />
              Ürünler
            </Link>

            <Link 
              href="/admin/collections"
              className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-sm ${
                pathname === '/admin/collections' ? 'bg-stone-800 text-white' : 'hover:bg-stone-800 hover:text-white'
              }`}
            >
              <Grid3x3 size={16} />
              Koleksiyonlar
            </Link>
          </div>

          <div className="pt-4">
            <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider px-3 mb-3">İçerik</p>
            
            <Link 
              href="/admin/hero"
              className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-sm ${
                pathname === '/admin/hero' ? 'bg-stone-800 text-white' : 'hover:bg-stone-800 hover:text-white'
              }`}
            >
              <Eye size={16} />
              Hero Bölümü
            </Link>

            <Link 
              href="/admin/settings"
              className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-sm ${
                pathname === '/admin/settings' ? 'bg-stone-800 text-white' : 'hover:bg-stone-800 hover:text-white'
              }`}
            >
              <Settings size={16} />
              Ayarlar
            </Link>
          </div>

          <div className="pt-4">
            <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider px-3 mb-3">İşlem</p>
            
            <Link 
              href="/admin/orders"
              className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-sm ${
                pathname === '/admin/orders' ? 'bg-stone-800 text-white' : 'hover:bg-stone-800 hover:text-white'
              }`}
            >
              <ShoppingBag size={16} />
              Siparişler
            </Link>

            <Link 
              href="/admin/messages"
              className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-sm ${
                pathname === '/admin/messages' ? 'bg-stone-800 text-white' : 'hover:bg-stone-800 hover:text-white'
              }`}
            >
              <MessageSquare size={16} />
              Mesajlar
            </Link>
          </div>
        </nav>

        <div className="p-4 border-t border-stone-800">
          <button 
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="flex items-center gap-3 px-3 py-2 rounded-md transition-colors w-full text-left hover:bg-red-900/50 hover:text-red-300 text-sm"
          >
            <LogOut size={16} />
            {isLoggingOut ? 'Çıkış yapılıyor...' : 'Çıkış Yap'}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
