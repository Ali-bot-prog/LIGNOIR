'use client';

import { useEffect, useState } from 'react';
import { Save, AlertCircle } from 'lucide-react';

interface SiteSettings {
  contactEmail: string;
  contactPhone: string;
  instagram: string;
  linkedin: string;
  footerAbout: string;
}

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<SiteSettings>({
    contactEmail: '',
    contactPhone: '',
    instagram: '',
    linkedin: '',
    footerAbout: '',
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await fetch('/api/admin/site-content');
        const data = await res.json();
        setSettings({
          contactEmail: data.contactEmail || '',
          contactPhone: data.contactPhone || '',
          instagram: data.instagram || '',
          linkedin: data.linkedin || '',
          footerAbout: data.footerAbout || '',
        });
      } catch (err) {
        console.error(err);
        setMessage('Ayarlar yüklenemedi');
      } finally {
        setLoading(false);
      }
    };
    fetchSettings();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage('');

    try {
      const res = await fetch('/api/admin/site-content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
      });

      if (res.ok) {
        setMessage('Ayarlar başarıyla kaydedildi!');
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
        <h1 className="text-2xl font-serif text-stone-900 mb-1">Site Ayarları</h1>
        <p className="text-stone-500 text-sm">İletişim bilgileri ve sosyal medya bağlantılarını düzenleyin</p>
      </div>

      {message && (
        <div className={`flex items-center gap-3 p-4 rounded-lg ${message.includes('başarı') ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
          <AlertCircle size={18} />
          {message}
        </div>
      )}

      <form onSubmit={handleSave} className="bg-white rounded-xl shadow-sm border border-stone-100 p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">Email</label>
            <input
              type="email"
              value={settings.contactEmail}
              onChange={(e) => setSettings({ ...settings, contactEmail: e.target.value })}
              className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-stone-900 focus:border-transparent"
              placeholder="info@lignoir.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">Telefon</label>
            <input
              type="tel"
              value={settings.contactPhone}
              onChange={(e) => setSettings({ ...settings, contactPhone: e.target.value })}
              className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-stone-900 focus:border-transparent"
              placeholder="+90 555 123 45 67"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">Footer Hakkımızda Metni</label>
          <textarea
            value={settings.footerAbout}
            onChange={(e) => setSettings({ ...settings, footerAbout: e.target.value })}
            rows={3}
            className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-stone-900 focus:border-transparent"
            placeholder="Footer'da gösterilecek hakkımızda metni"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">Instagram Profili</label>
            <input
              type="url"
              value={settings.instagram}
              onChange={(e) => setSettings({ ...settings, instagram: e.target.value })}
              className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-stone-900 focus:border-transparent"
              placeholder="https://instagram.com/lignoir"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">LinkedIn Profili</label>
            <input
              type="url"
              value={settings.linkedin}
              onChange={(e) => setSettings({ ...settings, linkedin: e.target.value })}
              className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-stone-900 focus:border-transparent"
              placeholder="https://linkedin.com/company/lignoir"
            />
          </div>
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
