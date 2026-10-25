import { useEffect, useState } from "react";

type OrderStatus = 'NEW' | 'PROCESSING' | 'COMPLETED';

type Order = {
    id: number;
    phone: string;
    email: string;
    totalPrice: number;
    currency: string;
    status: OrderStatus;
    createdAt: string;
    items: { id: number; productTitle: string; quantity: number; unitPrice: number }[];
};

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const statusLabels: Record<OrderStatus, string> = {
    NEW: 'Новый',
    PROCESSING: 'В работе',
    COMPLETED: 'Готов',
}

export default function Admin() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [updatingIds, setUpdatingIds] = useState<number[]>([]);

    useEffect(() => {
        const controller = new AbortController();

        async function loadOrders() {
            try {
                const response = await fetch(`${API_URL}/api/orders`, {
                    signal: controller.signal,
                });
                const result = await response.json() as {
                    data?: Order[];
                    error?: string;
                };
                if (!response.ok) {
                    throw new Error(result.error || 'Не удалось загрузить заказы!');
                }
                if (!Array.isArray(result.data)) {
                    throw new Error('Сервер вернул некорректный список заказов.');
                }
                setOrders(result.data);
            }   catch (err) {
                if (err instanceof Error && err.name === 'AbortError') return;

                setError(
                    err instanceof Error ? err.message : 'Произошла ошибка при загрузке!',
                );
            }   finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        }

        loadOrders();

        return () => controller.abort();
    }, []);

    async function changeStatus(orderId: number, status: OrderStatus) {
        setError(null);
        setUpdatingIds((ids) => [...ids, orderId]);

        try {
            const response = await fetch(
                `${API_URL}/api/orders/${orderId}/status`,
                {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({status}),
                },
            );
            const result = await response.json() as { error?: string };
            
            if (!response.ok) {
                throw new Error(result.error || 'Не удалось изменить статус заказа!')
            }

            setOrders((currentOrders) => currentOrders.map((order) => order.id === orderId ? {...order, status} : order));
        }   catch (err) {
            setError(
                err instanceof Error ? err.message : 'Произошла ошибка при изменении статуса!',
            );
        }   finally {
            setUpdatingIds((ids) => ids.filter((id) => id !== orderId));
        }
    }

    if (loading) {
        return <main><p>Загрузка заказов...</p></main>;
    }

    return (
        <main>
            <h1>Заказы</h1>
            {error && <p role="alert">{error}</p>}
            {orders.length === 0 ? (
                <p>Заказов пока нет.</p>
            ) : (
                orders.map((order) => (
                    <article key={order.id}>
                        <h2>Заказ №{order.id}</h2>
                        <p>
                            Дата: {new Date(order.createdAt).toLocaleString('ru-RU')}
                        </p>
                        <p>
                            Телефон: <a href={`tel:${order.phone}`}>{order.phone}</a>
                        </p>
                        <p>
                            Почта: <a href={`mailto:${order.email}`}>{order.email}</a>
                        </p>

                        <h3>Товары</h3>
                        <ul>
                            {order.items.map((item) => (
                                <li key={item.id}>
                                    {item.productTitle} — {item.quantity} шт. ×{' '}
                                    {item.unitPrice.toLocaleString('ru-RU')} руб.
                                </li>
                            ))}
                        </ul>

                        <p>
                            Итого: {order.totalPrice.toLocaleString('ru-RU')} {order.currency}
                        </p>

                        <label>
                            Статус:{' '}
                            <select
                                value={order.status}
                                disabled={updatingIds.includes(order.id)}
                                onChange={(event) =>
                                    changeStatus(order.id, event.target.value as OrderStatus)
                                }
                            >
                                {Object.entries(statusLabels).map(([status, label]) => (
                                    <option key={status} value={status}>{label}</option>
                                ))}
                            </select>
                        </label>
                    </article>
                ))
            )}
        </main>
    );
}
