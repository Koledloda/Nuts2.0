const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
const TOKEN_KEY = 'admin_token';

export type OrderStatus = 'NEW' | 'PROCESSING' | 'COMPLETED';

export type Order = {
    id: number;
    phone: string;
    email: string;
    totalPrice: number;
    currency: string;
    status: OrderStatus;
    createdAt: string;
    items: { id: number; productTitle: string; quantity: number; unitPrice: number }[];
};

export type CreateOrderInput = {
    phone: string;
    email: string;
    items: { productId: number; quantity: number }[];
    personalDataConsent: boolean;
    marketingConsent: boolean;
};

export type CreatedOrder = {
    id: number;
    totalPrice: number;
    currency: string;
};

export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const logout = () => localStorage.removeItem(TOKEN_KEY);

async function request<T>(path: string, init: RequestInit = {}): Promise<T> {
    const token = getToken();
    const response = await fetch(`${API_URL}${path}`, {
        ...init,
        headers: {
            'Content-Type': 'application/json',
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
    });
    const result = (await response.json()) as T & { error?: string };

    if (!response.ok) {
        if (response.status === 401) logout();
        throw new Error(result.error || 'Ошибка запроса');
    }
    return result;
}

export async function login(loginName: string, password: string) {
    const { token } = await request<{ token: string }>('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ login: loginName, password }),
    });
    localStorage.setItem(TOKEN_KEY, token);
}

export async function createOrder(input: CreateOrderInput) {
    const { data } = await request<{ data: CreatedOrder }>('/api/orders', {
        method: 'POST',
        body: JSON.stringify(input),
    });
    return data;
}

export async function getOrders() {
    const { data } = await request<{ data: Order[] }>('/api/orders');
    return data;
}

export async function updateOrderStatus(id: number, status: OrderStatus) {
    await request(`/api/orders/${id}/status`, {
        method: 'PATCH',
        body: JSON.stringify({ status }),
    });
}
