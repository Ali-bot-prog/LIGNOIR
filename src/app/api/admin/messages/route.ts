import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('admin_token')?.value;

    if (!token) {
      return NextResponse.json({ error: 'Yetkisiz erişim' }, { status: 401 });
    }

    return NextResponse.json([]);
  } catch (error) {
    console.error('Error fetching messages:', error);
    return NextResponse.json({ error: 'Mesajlar yüklenirken hata oluştu' }, { status: 500 });
  }
}
