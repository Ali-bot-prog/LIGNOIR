import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const dataDir = join(process.cwd(), 'src/data');

export async function getSiteContent() {
  try {
    const contentPath = join(dataDir, 'site-content.json');
    const data = readFileSync(contentPath, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    return {};
  }
}

export async function updateSiteContent(content: any) {
  const contentPath = join(dataDir, 'site-content.json');
  writeFileSync(contentPath, JSON.stringify(content, null, 2), 'utf-8');
  return content;
}

export async function getProducts() {
  try {
    const productsPath = join(dataDir, 'products.json');
    const data = readFileSync(productsPath, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

export async function updateProducts(products: any[]) {
  const productsPath = join(dataDir, 'products.json');
  writeFileSync(productsPath, JSON.stringify(products, null, 2), 'utf-8');
  return products;
}

export async function addProduct(product: any) {
  const products = await getProducts();
  products.push({ id: Date.now().toString(), ...product });
  await updateProducts(products);
  return product;
}

export async function updateProduct(id: string, product: any) {
  const products = await getProducts();
  const index = products.findIndex((p) => p.id === id);
  if (index === -1) throw new Error('Ürün bulunamadı');
  products[index] = { ...products[index], ...product };
  await updateProducts(products);
  return products[index];
}

export async function deleteProduct(id: string) {
  const products = await getProducts();
  const filtered = products.filter((p) => p.id !== id);
  await updateProducts(filtered);
}

export async function getCollections() {
  try {
    const collectionsPath = join(dataDir, 'collections.json');
    const data = readFileSync(collectionsPath, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

export async function updateCollections(collections: any[]) {
  const collectionsPath = join(dataDir, 'collections.json');
  writeFileSync(collectionsPath, JSON.stringify(collections, null, 2), 'utf-8');
  return collections;
}

export async function addCollection(collection: any) {
  const collections = await getCollections();
  collections.push({ id: Date.now().toString(), ...collection });
  await updateCollections(collections);
  return collection;
}

export async function updateCollection(id: string, collection: any) {
  const collections = await getCollections();
  const index = collections.findIndex((c) => c.id === id);
  if (index === -1) throw new Error('Koleksiyon bulunamadı');
  collections[index] = { ...collections[index], ...collection };
  await updateCollections(collections);
  return collections[index];
}

export async function deleteCollection(id: string) {
  const collections = await getCollections();
  const filtered = collections.filter((c) => c.id !== id);
  await updateCollections(filtered);
}
