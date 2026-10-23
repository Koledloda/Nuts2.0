import { Link } from 'react-router-dom';
import './style.css'
import { useState, useEffect } from 'react';
import { getProducts, type Product } from '../../api/products';

/* const poleznie = [
    {
        id: 1,
        img: 'https://415022.lp.tobiz.net/img/400x400/e5093ee29d011d36ef795fb40e5067ea.jpg',
        title: 'Чиа семена',
        description: 'Суперфуд с высоким содержанием антиоксидантов. Разбухаю...',
        price: '2 190.00 руб.',
        to:'',
    },
    {
        id: 2,
        img: 'https://415022.lp.tobiz.net/img/400x400/7c68bba29cd66c0a751b13f6e38b6706.jpg',
        title: 'Кедровые орехи',
        description: 'Мелкие нежные ядрышки с лёгким хвойным ароматом. Богаты витаминами,...',
        price: '770.00 руб.',
        to:'',
    },
    {
        id: 3,
        img: 'https://415022.lp.tobiz.net/img/400x400/13048b8f4a11867aab0326eb8be77f3f.jpg',
        title: 'Льняные семена',
        description: 'Крошечные, но очень полезные семена с высоким содержанием...',
        price: '349.00 руб.',
        to:'',
    },
    {
        id: 4,
        img: 'https://415022.lp.tobiz.net/img/400x400/ef26b497c268b5ef107c8b4fc19018bb.jpg',
        title: 'Тыквенные семечки',
        description: 'Натуральный источник цинка и магния. Хрустящие, слегка...',
        price: '560.00 руб.',
        to:'',
    },
] */

export default function Poleznie() {
    const [limit, setLimit] = useState(24);
    const [sortOrder, setSortOrder] = useState('default');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const controller = new AbortController();

        getProducts('useful', controller.signal)
            .then((result) => {
                setProducts(result.data);
                setError(null);
            })
            .catch((err: Error) => {
                if (err.name === 'AbortError') return;
                console.error('Ошибка при загрузке товаров:', err);
                setError(err.message);
            })
            .finally(() => setLoading(false));

        return () => controller.abort();
    }, []);

    const sortedProducts = [...products];

    if (sortOrder === 'cheap') {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'expensive') {
        sortedProducts.sort((a, b) => b.price - a.price);
    }

    const visibleProducts = sortedProducts.slice(0, limit);

    if (loading) {
        return <div className="loading">Загрузка товаров из базы данных...</div>;
    }

    if (error) {
        return <div className="loading">Ошибка загрузки: {error}</div>;
    }

    return (
        <main className='poleznie'>
            <div>
                <h1 className='poleznie_title'>Полезные</h1>
                <p>
                    <Link to="/">Главная</Link> / <Link to="/catalog">Каталог</Link> / <span>Полезные</span>
                </p>
            </div>

            <div className="poleznie_toolbar">
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

            {visibleProducts.length === 0 ? (
                <div className="loading">Товаров не найдено.</div>
            ) : visibleProducts.map((product) => (
                <article className='card_poleznie' key={product.id}>
                    <img className='poleznie_img' src={product.images[0]?.url} alt={product.title} />
                    <div className='poleznie_content'>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <p>{product.price.toLocaleString('ru-RU')} руб.</p>
                        <Link to={`/product/${product.slug}`} className='button_poleznie'>Перейти</Link>
                    </div>
                </article>
            ))}
        </main>
    )
}
