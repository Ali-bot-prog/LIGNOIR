'use client';

import { MessageSquare } from 'lucide-react';

export default function AdminMessagesPage() {
  return (
    <div className="space-y-6">
      <div className="border-b border-stone-200 pb-4">
        <h1 className="text-2xl font-serif text-stone-900">İletişim Mesajları</h1>
        <p className="text-stone-500 text-sm">İletişim formu aracılığıyla gelen mesajları yönetin</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-stone-100 p-12 text-center">
        <MessageSquare size={48} className="mx-auto mb-4 text-stone-300" />
        <p className="text-stone-600">Henüz mesaj yok</p>
        <p className="text-stone-500 text-sm mt-2">Ziyaretçiler iletişim formunu gönderdiğinde mesajlar burada gösterilecek</p>
      </div>
    </div>
  );
}
