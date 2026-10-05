import { Link } from 'react-router-dom';
import './style.css'
import { useState, useEffect } from 'react';
import { useApi } from '../../hooks/useApi';

/* const popular = [
    {
        id: 1,
        img: 'https://415022.lp.tobiz.net/img/300x300/0e3cab38d860aa4b36990410c484115b.jpg',
        title: 'Семечки подсолнечника',
        description: 'Аппетитные золотистые ядрышки с приятным ароматом. Отлично...',
        price: '1 499.00 руб.',
        to:'',
    },
    {
        id: 2,
        img: 'https://415022.lp.tobiz.net/img/300x300/2fca8ef7c69e814a5b863e9aea1150b9.jpg',
        title: 'Миндаль сырой',
        description: 'Хрустящие орешки с нежным сладковатым вкусом. Содержат витами...',
        price: '349.00 руб.',
        to:'',
    },
    {
        id: 3,
        img: 'https://415022.lp.tobiz.net/img/300x300/b4832320fc5f587bc2b7a79186bc22f9.jpg',
        title: 'Грецкие орехи',
        description: 'Крупные ядра с насыщенным вкусом, богаты полезными...',
        price: '190.00 руб.',
        to:'',
    },
] */

interface Product {
    id: number;
    img: string;
    title: string;
    description: string;
    price: string;
    to: string;
}

export default function Popular() {
    const [limit, setLimit] = useState(24);
    const [sortOrder, setSortOrder] = useState('default');
    const [loading, setLoading] = useState(true);
    // 1. Оставляем имя стейта как 'products'
    const [products, setProducts] = useState<Product[]>([]); 
    const { request } = useApi();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await request('/api/products/popular');
                // Исправлено: вызываем правильную функцию обновления стейта
                setProducts(data); 
            } catch (error) {
                console.error('Ошибка при загрузке товаров:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);
    
    // Функция парсинга цены (строку в число) для правильной сортировки
    const getPrice = (price: string) => 
        Number(price.replace(/[^\d,.-]/g, '').replace(',', '.'));

    // 2. Исправлено: создаем массив для сортировки с другим именем (sortedProducts), чтобы не было конфликта
    const sortedProducts = [...products];

    if (sortOrder === 'cheap') {
        sortedProducts.sort((a, b) => getPrice(a.price) - getPrice(b.price));
    } else if (sortOrder === 'expensive') {
        sortedProducts.sort((a, b) => getPrice(b.price) - getPrice(a.price));
    }

    const visibleProducts = sortedProducts.slice(0, limit);

    if (loading) {
        return <div className="loading">Загрузка товаров из базы данных...</div>;
    }

    return (
        <main className='popular'>
            <div>
                <h1 className='popular_title'>Популярные</h1>
                <p>
                    <Link to="/">Главная</Link> / <Link to="/catalog">Каталог</Link> / <span> Популярные</span>
                </p>
            </div>
            
            <div className="popular_toolbar">
                <label>
                    Показывать:
                    <select
                        value={limit}
                        onChange={(event) => setLimit(Number(event.target.value))}
                    >
                        {[12, 24, 48, 96].map((count) => (
                            <option key={count} value={count}>{count}</option>
                        ))}
                    </select>
                </label>
                <label>
                    Сортировать:
                    <select
                        value={sortOrder}
                        onChange={(event) => setSortOrder(event.target.value)}
                    >
                        <option value="default">По умолчанию</option>
                        <option value="cheap">Сначала дешёвые</option>
                        <option value="expensive">Сначала дорогие</option>
                    </select>
                </label>
            </div>

            {visibleProducts.map((product) => (
                <article className='card_popular' key={product.id}>
                    <img className='popular_img' src={product.img} alt={product.title}/>
                    <div className='popular_content'>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                        <Link to={product.to || `/product/${product.id}`} className='btn_popular'>Перейти</Link>    
                    </div>
                </article>
            ))}
        </main>
    );
}