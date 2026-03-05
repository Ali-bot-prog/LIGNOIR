import { NextResponse } from 'next/server';
import { getProducts, addProduct } from '@/lib/cms';
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

export async function GET() {
  try {
    const products = await getProducts();
    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Ürünler yüklenirken hata oluştu' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const isAuth = await verifyAuth(req);
  if (!isAuth) {
    return NextResponse.json({ error: 'Yetkisiz erişim' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const product = await addProduct(body);
    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error('Error adding product:', error);
    return NextResponse.json({ error: 'Ürün eklenirken hata oluştu' }, { status: 500 });
  }
}
