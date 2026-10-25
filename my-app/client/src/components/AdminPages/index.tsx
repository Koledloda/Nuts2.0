import { useEffect, useState, type FormEvent } from "react";
import {
    getOrders,
    getToken,
    login,
    logout,
    updateOrderStatus,
    type Order,
    type OrderStatus,
} from "../../api/orders";
import "./style.css";

const statusLabels: Record<OrderStatus, string> = {
    NEW: 'Новый',
    PROCESSING: 'В работе',
    COMPLETED: 'Готов',
};

export default function AdminPages() {
    const [authorized, setAuthorized] = useState(Boolean(getToken()));
    const [loginName, setLoginName] = useState('');
    const [password, setPassword] = useState('');
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(authorized);
    const [error, setError] = useState<string | null>(null);
    const [updatingIds, setUpdatingIds] = useState<number[]>([]);

    useEffect(() => {
        if (!authorized) return;

        let cancelled = false;
        setLoading(true);

        getOrders()
            .then((data) => {
                if (!cancelled) setOrders(data);
            })
            .catch((err) => {
                if (cancelled) return;
                setError(err instanceof Error ? err.message : 'Не удалось загрузить заказы!');
                if (!getToken()) setAuthorized(false);
            })
            .finally(() => {
                if (!cancelled) setLoading(false);
            });

        return () => {
            cancelled = true;
        };
    }, [authorized]);

    async function handleLogin(event: FormEvent) {
        event.preventDefault();
        setError(null);

        try {
            await login(loginName, password);
            setPassword('');
            setAuthorized(true);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Не удалось войти!');
        }
    }

    function handleLogout() {
        logout();
        setOrders([]);
        setAuthorized(false);
    }

    async function changeStatus(orderId: number, status: OrderStatus) {
        setError(null);
        setUpdatingIds((ids) => [...ids, orderId]);

        try {
            await updateOrderStatus(orderId, status);
            setOrders((current) =>
                current.map((order) => (order.id === orderId ? { ...order, status } : order)),
            );
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Не удалось изменить статус заказа!');
            if (!getToken()) setAuthorized(false);
        } finally {
            setUpdatingIds((ids) => ids.filter((id) => id !== orderId));
        }
    }

    if (!authorized) {
        return (
            <main className="admin admin--login">
                <h1>Вход для администратора</h1>
                {error && <p role="alert">{error}</p>}
                <form onSubmit={handleLogin}>
                    <input
                        placeholder="Логин"
                        value={loginName}
                        onChange={(e) => setLoginName(e.target.value)}
                        autoComplete="username"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                        required
                    />
                    <button type="submit">Войти</button>
                </form>
            </main>
        );
    }

    if (loading) {
        return <main className="admin"><p>Загрузка заказов...</p></main>;
    }

    return (
        <main className="admin">
            <header className="admin__header">
                <h1>Заказы</h1>
                <button onClick={handleLogout}>Выйти</button>
            </header>
            {error && <p role="alert">{error}</p>}
            {orders.length === 0 ? (
                <p>Заказов пока нет.</p>
            ) : (
                orders.map((order) => (
                    <article className="admin__order" key={order.id}>
                        <h2>Заказ №{order.id}</h2>
                        <p>Дата: {new Date(order.createdAt).toLocaleString('ru-RU')}</p>
                        <p>Телефон: <a href={`tel:${order.phone}`}>{order.phone}</a></p>
                        <p>Почта: <a href={`mailto:${order.email}`}>{order.email}</a></p>

                        <h3>Товары</h3>
                        <ul>
                            {order.items.map((item) => (
                                <li key={item.id}>
                                    {item.productTitle} — {item.quantity} шт. ×{' '}
                                    {item.unitPrice.toLocaleString('ru-RU')} руб.
                                </li>
                            ))}
                        </ul>

                        <p>Итого: {order.totalPrice.toLocaleString('ru-RU')} {order.currency}</p>

                        <label>
                            Статус:{' '}
                            <select
                                value={order.status}
                                disabled={updatingIds.includes(order.id)}
                                onChange={(e) => changeStatus(order.id, e.target.value as OrderStatus)}
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
