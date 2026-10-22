import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProduct, type Product } from '../../api/products';
import './style.css';

export default function ProductPage() {
    const { slug = '' } = useParams();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
        getProduct(slug, controller.signal)
            .then((data) => {
                setProduct(data);
                setError(null);
            })
            .catch((err: Error) => {
                if (err.name === 'AbortError') return;
                console.error('Ошибка при загрузке товара:', err);
                setError(err.message);
            })
            .finally(() => setLoading(false));

        return () => controller.abort();
    }, [slug]);

    if (loading) {
        return <main className="products"><div className="loading">Загрузка товара...</div></main>;
    }

    if (error || !product) {
        return (
            <main className="products">
                <div className="loading">Ошибка загрузки: {error ?? 'Товар не найден.'}</div>
            </main>
        );
    }

    const mainImage = product.images[0];

    return (
        <main className="products">
            <div className="product_title">
                <Link to="/">Главная</Link>
                <span>›</span>
                <Link to="/catalog">Каталог товаров</Link>
                <span>›</span>
                <span>{product.title}</span>
            </div>
            <div className="products_box">
                <div className="products_images">
                    <div className="products_main_image">
                        <img
                            src={mainImage?.url}
                            alt={mainImage?.alt || product.title}/>
                    </div>
                    <div className="products_preview">
                        <img
                            src={mainImage?.url}
                            alt={mainImage?.alt || product.title}/>
                    </div>
                </div>
                <div className="products_content">
                    <h1>{product.title}</h1>
                    <div className="products_status">
                        {product.isAvailable ? '✓ В наличии' : 'Нет в наличии'}
                    </div>
                    <p className="products_description">
                        {product.description}
                    </p>
                    <div className="products_price">
                        {product.price.toLocaleString('ru-RU')} руб.
                    </div>
                    <Link to="#" className="products_button"> В корзину </Link>
                </div>
            </div>
        </main>
    );
}
