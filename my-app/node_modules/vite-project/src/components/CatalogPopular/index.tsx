import { Link } from 'react-router-dom';
import './style.css'
import { useState } from 'react';

const popular = [
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
]

export default function Popular() {
const [limit, setLimit] = useState(24);
const [sortOrder, setSortOrder] = useState('default');
const getPrice = (price: string) =>

  Number(price.replace(/[^\d,.-]/g, '').replace(',', '.'));

const products = [...popular];

if (sortOrder === 'cheap') {
  products.sort((a, b) => getPrice(a.price) - getPrice(b.price));
} else if (sortOrder === 'expensive') {
  products.sort((a, b) => getPrice(b.price) - getPrice(a.price));
}

const visibleProducts = products.slice(0, limit);

    return (
        <main className='popular'>
            <div>
                <h1 className='popular_title'>Популярные</h1>
                <p>
                <Link to="/">Главная</Link> / <Link to="/catalog">Каталог</Link> / <text> Популярные</text>
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
            {popular.map((popular) => (
                <article className='card_popular' key={popular.id}>
                    <img className='popular_img' src={popular.img} alt={popular.title}/>
                    <div className='popular_content'>
                        <h2>{popular.title}</h2>
                        <p>{popular.description}</p>
                        <p>{popular.price}</p>
                        <Link to={popular.to}>Перейти</Link>    
                    </div>
                </article>
            ))}
        </main>
    )
}