import { Link } from 'react-router-dom';
import './style.css'
import { useState } from 'react';

const premium = [
    {
        id: 1,
        img: 'https://415022.lp.tobiz.net/img/400x400/d2a2e1f66879ae32334f4b1797402db2.jpg',
        title: 'Орехи макадамия',
        description: 'Изысканное сочетание хрустящих орехов и гладкого шоколада...',
        price: '430.00 руб.',
        to:'',
    },
    {
        id: 2,
        img: 'https://415022.lp.tobiz.net/img/400x400/c3046db11672212db375655137805c7a.jpg',
        title: 'Орехи пекан',
        description: 'Маслянистые ядра с нежным вкусом, напоминающим грецкий...',
        price: '399.00 руб.',
        to:'',
    },
    {
        id: 3,
        img: 'https://415022.lp.tobiz.net/img/400x400/4e80af4789da8103cc4a9ce57696547f.jpg',
        title: 'Фисташки солёные',
        description: 'Пикантные раскрывшиеся орешки с ярким вкусом. Содержат полезные жиры...',
        price: '249.00 руб.',
        to:'',
    },
    {
        id: 4,
        img: 'https://415022.lp.tobiz.net/img/400x400/bc6280d5a7bf5267b720c7bb0e16bf3b.jpg',
        title: 'Кешью обжаренные',
        description: 'Нежные маслянистые орехи с деликатным сладковатым вкусом...',
        price: '190.00 руб.',
        to:'',
    },
]

export default function Popular() {
const [limit, setLimit] = useState(24);
const [sortOrder, setSortOrder] = useState('default');
const getPrice = (price: string) =>

  Number(price.replace(/[^\d,.-]/g, '').replace(',', '.'));

const products = [...premium];

if (sortOrder === 'cheap') {
  products.sort((a, b) => getPrice(a.price) - getPrice(b.price));
} else if (sortOrder === 'expensive') {
  products.sort((a, b) => getPrice(b.price) - getPrice(a.price));
}

const visibleProducts = products.slice(0, limit);

    return (
        <main className='premium'>
            <div>
                <h1 className='premium_title'>Премиум</h1>
                <p>
                <Link to="/">Главная</Link> / <Link to="/catalog">Каталог</Link> / <text> Премиум</text>
                </p>
                </div>
                <div className="premium_toolbar">
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
            {visibleProducts.map((premium) => (
                <article className='card_premium' key={premium.id}>
                    <img className='premium_img' src={premium.img} alt={premium.title}/>
                    <div className='premium_content'>
                        <h2>{premium.title}</h2>
                        <p>{premium.description}</p>
                        <p>{premium.price}</p>
                        <Link to={premium.to} className='button_premium'>Перейти</Link>
                    </div>
                </article>
            ))}
        </main>
    )
}