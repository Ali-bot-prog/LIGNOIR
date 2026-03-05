import { NextResponse } from 'next/server';
import { updateCollection, deleteCollection } from '@/lib/cms';
import { cookies } from 'next/headers';
import * as jose from 'jose';

async function verifyAuth(req: Request) {
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token')?.value;

  if (!token) return false;

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'secret');
    await jose.jwtVerify(token, secret);
    return true;
  } catch {
    return false;
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const isAuth = await verifyAuth(req);
  if (!isAuth) {
    return NextResponse.json({ error: 'Yetkisiz erişim' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const updated = await updateCollection(params.id, body);
    return NextResponse.json(updated);
  } catch (error) {
    console.error('Error updating collection:', error);
    return NextResponse.json({ error: 'Koleksiyon güncellenirken hata oluştu' }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const isAuth = await verifyAuth(req);
  if (!isAuth) {
    return NextResponse.json({ error: 'Yetkisiz erişim' }, { status: 401 });
  }

  try {
    await deleteCollection(params.id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting collection:', error);
    return NextResponse.json({ error: 'Koleksiyon silinirken hata oluştu' }, { status: 500 });
  }
}
