'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Plus, Trash2, Edit2, TrendingUp } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  desc: string;
  price: string;
}

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch('/api/admin/products');
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Bu ürünü silmek istediğinizden emin misiniz?')) return;

    setDeleting(id);
    try {
      await fetch(`/api/admin/products/${id}`, { method: 'DELETE' });
      setProducts(products.filter(p => p.id !== id));
    } catch (err) {
      console.error(err);
    } finally {
      setDeleting(null);
    }
  };

  if (loading) {
    return <div className="text-center py-12 text-stone-500">Yükleniyor...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-stone-200 pb-4">
        <div>
          <h1 className="text-2xl font-serif text-stone-900 mb-1">Ürün Yönetimi</h1>
          <p className="text-stone-500 text-sm">{products.length} ürün</p>
        </div>
        <Link 
          href="/admin/products/new"
          className="flex items-center gap-2 bg-stone-900 text-white px-4 py-2 rounded-lg hover:bg-stone-800 transition-colors"
        >
          <Plus size={18} />
          Yeni Ürün
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-stone-100 overflow-hidden">
        {products.length === 0 ? (
          <div className="p-12 text-center">
            <TrendingUp size={32} className="mx-auto mb-3 text-stone-300" />
            <p className="text-stone-500 mb-4">Henüz ürün eklenmedi</p>
            <Link 
              href="/admin/products/new"
              className="inline-block bg-stone-900 text-white px-4 py-2 rounded-lg hover:bg-stone-800 transition-colors"
            >
              İlk Ürünü Ekle
            </Link>
          </div>
        ) : (
          <div className="divide-y divide-stone-100">
            {products.map((product) => (
              <div key={product.id} className="p-4 hover:bg-stone-50 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-stone-900">{product.name}</h3>
                    <p className="text-sm text-stone-600 mt-1 truncate">{product.desc}</p>
                    <p className="text-sm font-semibold text-stone-900 mt-2">{product.price}</p>
                  </div>
                  <div className="flex gap-2">
                    <Link 
                      href={`/admin/products/${product.id}/edit`}
                      className="p-2 text-stone-600 hover:bg-stone-100 rounded-lg transition-colors"
                    >
                      <Edit2 size={18} />
                    </Link>
                    <button 
                      onClick={() => handleDelete(product.id)}
                      disabled={deleting === product.id}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
