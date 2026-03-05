'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Package, Grid3x3, MessageSquare, ShoppingBag, TrendingUp } from 'lucide-react';

interface Stats {
  totalProducts: number;
  totalCollections: number;
  totalMessages: number;
  totalOrders: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    totalProducts: 0,
    totalCollections: 0,
    totalMessages: 0,
    totalOrders: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [productsRes, collectionsRes, messagesRes] = await Promise.all([
          fetch('/api/admin/products'),
          fetch('/api/admin/collections'),
          fetch('/api/admin/messages'),
        ]);

        const products = await productsRes.json();
        const collections = await collectionsRes.json();
        const messages = await messagesRes.json();

        setStats({
          totalProducts: products.length || 0,
          totalCollections: collections.length || 0,
          totalMessages: messages.filter((m: any) => !m.read).length || 0,
          totalOrders: 0,
        });
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    { label: 'Ürünler', value: stats.totalProducts, href: '/admin/products', icon: Package, color: 'bg-blue-50 text-blue-600' },
    { label: 'Koleksiyonlar', value: stats.totalCollections, href: '/admin/collections', icon: Grid3x3, color: 'bg-purple-50 text-purple-600' },
    { label: 'Yeni Mesaj', value: stats.totalMessages, href: '/admin/messages', icon: MessageSquare, color: 'bg-red-50 text-red-600' },
    { label: 'Siparişler', value: stats.totalOrders, href: '/admin/orders', icon: ShoppingBag, color: 'bg-green-50 text-green-600' },
  ];

  return (
    <div className="space-y-6">
      <div className="border-b border-stone-200 pb-4">
        <h1 className="text-3xl font-serif text-stone-900">Dashboard</h1>
        <p className="text-stone-500 text-sm mt-1">Sitenizin çalışma durumu hakkında genel bilgi</p>
      </div>

      {loading ? (
        <div className="py-12 text-center text-stone-500">Yükleniyor...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statCards.map((card) => {
            const Icon = card.icon;
            return (
              <Link key={card.label} href={card.href}>
                <div className={`${card.color} rounded-xl p-6 cursor-pointer hover:shadow-md transition-shadow border border-stone-100`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-stone-600">{card.label}</p>
                      <p className="text-3xl font-bold mt-2">{card.value}</p>
                    </div>
                    <Icon size={32} className="opacity-20" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <div className="bg-white rounded-xl border border-stone-100 shadow-sm p-6">
          <h2 className="font-serif text-lg text-stone-900 mb-4">Hızlı İşlemler</h2>
          <div className="space-y-2">
            <Link href="/admin/products/new" className="block px-4 py-3 bg-stone-50 hover:bg-stone-100 rounded-lg transition-colors text-stone-700 font-medium">
              + Yeni Ürün Ekle
            </Link>
            <Link href="/admin/collections/new" className="block px-4 py-3 bg-stone-50 hover:bg-stone-100 rounded-lg transition-colors text-stone-700 font-medium">
              + Yeni Koleksiyon Ekle
            </Link>
            <Link href="/admin/settings" className="block px-4 py-3 bg-stone-50 hover:bg-stone-100 rounded-lg transition-colors text-stone-700 font-medium">
              ⚙️ Site Ayarları
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-stone-100 shadow-sm p-6">
          <h2 className="font-serif text-lg text-stone-900 mb-4">Bilgi</h2>
          <div className="space-y-3 text-sm text-stone-600">
            <p className="flex items-start gap-2">
              <TrendingUp size={16} className="mt-0.5 flex-shrink-0" />
              <span>Tüm sayfa içeriklerini buradan yönetebilirsiniz</span>
            </p>
            <p className="flex items-start gap-2">
              <TrendingUp size={16} className="mt-0.5 flex-shrink-0" />
              <span>Ürünlerinizi kolayca ekleyebilir, düzenleyebilir ve silebilirsiniz</span>
            </p>
            <p className="flex items-start gap-2">
              <TrendingUp size={16} className="mt-0.5 flex-shrink-0" />
              <span>Gelen mesajları ve siparişleri takip edebilirsiniz</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
