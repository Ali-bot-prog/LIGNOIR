'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Plus, Trash2, Edit2, Grid3x3 } from 'lucide-react';

interface Collection {
  id: string;
  name: string;
  description?: string;
}

export default function AdminCollectionsPage() {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);

  useEffect(() => {
    fetchCollections();
  }, []);

  const fetchCollections = async () => {
    try {
      const res = await fetch('/api/admin/collections');
      const data = await res.json();
      setCollections(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Bu koleksiyonu silmek istediğinizden emin misiniz?')) return;

    setDeleting(id);
    try {
      await fetch(`/api/admin/collections/${id}`, { method: 'DELETE' });
      setCollections(collections.filter(c => c.id !== id));
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
          <h1 className="text-2xl font-serif text-stone-900 mb-1">Koleksiyon Yönetimi</h1>
          <p className="text-stone-500 text-sm">{collections.length} koleksiyon</p>
        </div>
        <Link 
          href="/admin/collections/new"
          className="flex items-center gap-2 bg-stone-900 text-white px-4 py-2 rounded-lg hover:bg-stone-800 transition-colors"
        >
          <Plus size={18} />
          Yeni Koleksiyon
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-stone-100 overflow-hidden">
        {collections.length === 0 ? (
          <div className="p-12 text-center">
            <Grid3x3 size={32} className="mx-auto mb-3 text-stone-300" />
            <p className="text-stone-500 mb-4">Henüz koleksiyon eklenmedi</p>
            <Link 
              href="/admin/collections/new"
              className="inline-block bg-stone-900 text-white px-4 py-2 rounded-lg hover:bg-stone-800 transition-colors"
            >
              İlk Koleksiyonu Ekle
            </Link>
          </div>
        ) : (
          <div className="divide-y divide-stone-100">
            {collections.map((collection) => (
              <div key={collection.id} className="p-4 hover:bg-stone-50 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-stone-900">{collection.name}</h3>
                    {collection.description && (
                      <p className="text-sm text-stone-600 mt-1 truncate">{collection.description}</p>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Link 
                      href={`/admin/collections/${collection.id}/edit`}
                      className="p-2 text-stone-600 hover:bg-stone-100 rounded-lg transition-colors"
                    >
                      <Edit2 size={18} />
                    </Link>
                    <button 
                      onClick={() => handleDelete(collection.id)}
                      disabled={deleting === collection.id}
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
