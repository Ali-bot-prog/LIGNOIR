'use client';

import { useEffect, useState } from 'react';
import { Save, AlertCircle } from 'lucide-react';

interface HeroContent {
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
}

export default function AdminHeroPage() {
  const [content, setContent] = useState<HeroContent>({
    heroTitle: '',
    heroSubtitle: '',
    heroImage: '',
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const res = await fetch('/api/admin/site-content');
        const data = await res.json();
        setContent({
          heroTitle: data.heroTitle || '',
          heroSubtitle: data.heroSubtitle || '',
          heroImage: data.heroImage || '',
        });
      } catch (err) {
        console.error(err);
        setMessage('İçerik yüklenemedi');
      } finally {
        setLoading(false);
      }
    };
    fetchContent();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage('');

    try {
      const res = await fetch('/api/admin/site-content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content),
      });

      if (res.ok) {
        setMessage('Hero bölümü başarıyla kaydedildi!');
        setTimeout(() => setMessage(''), 3000);
      } else {
        setMessage('Kaydetme sırasında hata oluştu');
      }
    } catch (err) {
      console.error(err);
      setMessage('Kaydetme sırasında hata oluştu');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="text-center py-12 text-stone-500">Yükleniyor...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="border-b border-stone-200 pb-4">
        <h1 className="text-2xl font-serif text-stone-900 mb-1">Hero Bölümü</h1>
        <p className="text-stone-500 text-sm">Anasayfanın başında görünen büyük bölümü düzenleyin</p>
      </div>

      {message && (
        <div className={`flex items-center gap-3 p-4 rounded-lg ${message.includes('başarı') ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
          <AlertCircle size={18} />
          {message}
        </div>
      )}

      <form onSubmit={handleSave} className="bg-white rounded-xl shadow-sm border border-stone-100 p-8 space-y-6">
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">Başlık</label>
          <input
            type="text"
            value={content.heroTitle}
            onChange={(e) => setContent({ ...content, heroTitle: e.target.value })}
            className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-stone-900 focus:border-transparent"
            placeholder="Eşsiz Tasarımlar"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">Açıklama</label>
          <textarea
            value={content.heroSubtitle}
            onChange={(e) => setContent({ ...content, heroSubtitle: e.target.value })}
            rows={3}
            className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-stone-900 focus:border-transparent"
            placeholder="Doğal malzemelerden el yapımı sanat eserleri"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">Resim URL</label>
          <input
            type="url"
            value={content.heroImage}
            onChange={(e) => setContent({ ...content, heroImage: e.target.value })}
            className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-stone-900 focus:border-transparent"
            placeholder="https://images.unsplash.com/..."
          />
          {content.heroImage && (
            <div className="mt-3">
              <p className="text-xs text-stone-500 mb-2">Önizleme:</p>
              <img src={content.heroImage} alt="Hero" className="w-full max-h-64 object-cover rounded-lg" />
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={saving}
          className="w-full flex items-center justify-center gap-2 bg-stone-900 text-white py-3 px-4 rounded-lg hover:bg-stone-800 disabled:opacity-50 transition-colors font-medium"
        >
          <Save size={18} />
          {saving ? 'Kaydediliyor...' : 'Kaydet'}
        </button>
      </form>
    </div>
  );
}
