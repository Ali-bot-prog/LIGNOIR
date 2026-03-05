'use client';

import { ShoppingBag } from 'lucide-react';

export default function AdminOrdersPage() {
  return (
    <div className="space-y-6">
      <div className="border-b border-stone-200 pb-4">
        <h1 className="text-2xl font-serif text-stone-900">Siparişler</h1>
        <p className="text-stone-500 text-sm">Müşteri siparişlerini takip edin</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-stone-100 p-12 text-center">
        <ShoppingBag size={48} className="mx-auto mb-4 text-stone-300" />
        <p className="text-stone-600">Henüz sipariş yok</p>
        <p className="text-stone-500 text-sm mt-2">Müşteriler ürün satın aldıkça siparişler burada gösterilecek</p>
      </div>
    </div>
  );
}
