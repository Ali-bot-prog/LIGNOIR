import { NextResponse } from 'next/server';
import { getSiteContent, updateSiteContent } from '@/lib/cms';
import { cookies } from 'next/headers';
import { jwtVerify } from 'jose';

async function verifyAuth(req: Request) {
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token')?.value;

  if (!token) return false;

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'secret');
    await jwtVerify(token, secret);
    return true;
  } catch {
    return false;
  }
}

export async function GET() {
  try {
    const content = await getSiteContent();
    return NextResponse.json(content);
  } catch (error) {
    console.error('Error fetching content:', error);
    return NextResponse.json({ error: 'İçerik yüklenirken hata oluştu' }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  const isAuth = await verifyAuth(req);
  if (!isAuth) {
    return NextResponse.json({ error: 'Yetkisiz erişim' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const updated = await updateSiteContent(body);
    return NextResponse.json(updated);
  } catch (error) {
    console.error('Error updating content:', error);
    return NextResponse.json({ error: 'İçerik güncellenirken hata oluştu' }, { status: 500 });
  }
}
