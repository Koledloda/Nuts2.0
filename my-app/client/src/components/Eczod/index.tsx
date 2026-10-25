import './style.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProducts, type Product } from '../../api/products';


export default function Eczod() {
    const [hits, setHits] = useState<Product[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        getProducts('exotic', controller.signal)
            .then((result) => setHits(result.data))
            .catch((err: Error) => {
                if (err.name !== 'AbortError') setError(err.message);
            });

        return () => controller.abort();
    }, []);

    return (
        <main className='block'>
            <div className='content'>
                <div className='section'>
                    <div className='premium_header'>
                        <div className='block_name'>
                            <h1 className='block_name_name'>Экзотические</h1>
                            <h1 className='block_name_nxname'>необычные товары</h1>
                        </div>
                        <p className='block_sub'>В нашем магазине вы найдете любые виды орехов и семян</p>
                    </div>
                        {error && <p>Не удалось загрузить товары: {error}</p>}
                         {hits.map((hit) => (
                        <article className='card' key={hit.id}>
                            <img className='card_img' src={hit.images[0]?.url} alt={hit.title}/>
                            <div className='card_content'>
                                <h2>{hit.title}</h2>
                                <p>{hit.description}</p>
                                <p className="card_price">{hit.price.toLocaleString('ru-RU')} руб.</p>
                                <Link className='sell' to={`/product/${hit.slug}`}>Заказать</Link>
                            </div>
                        </article>  
                    ))}
                </div>
            </div>
        </main>
    )
}
