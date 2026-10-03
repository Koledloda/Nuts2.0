const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export type ProductImage = {
  id: number;
  url: string;
  alt: string;
  position: number;
};

export type ProductCategory = {
  id: number;
  slug: string;
  title: string;
};

export type Product = {
  id: number;
  slug: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  isAvailable: boolean;
  category: ProductCategory;
  images: ProductImage[];
};

type ApiError = {
  error?: {
    message?: string;
  };
};

async function getJson<T>(path: string, signal?: AbortSignal): Promise<T> {
  const response = await fetch(`${API_URL}${path}`, { signal });
  const body = await response.json() as T & ApiError;

  if (!response.ok) {
    throw new Error(body.error?.message || 'Не удалось загрузить данные.');
  }

  return body;
}

export async function getProducts(category: string, signal?: AbortSignal) {
  const params = new URLSearchParams({ category });
  return getJson<{ data: Product[]; count: number }>(`/api/products?${params}`, signal);
}

export async function getProduct(slug: string, signal?: AbortSignal) {
  const result = await getJson<{ data: Product }>(`/api/products/${encodeURIComponent(slug)}`, signal);
  return result.data;
}
