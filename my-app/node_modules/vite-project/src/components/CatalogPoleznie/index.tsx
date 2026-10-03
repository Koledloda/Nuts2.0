import { Link } from 'react-router-dom';
import './style.css'
import { useState } from 'react';

const poleznie = [
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
]

export default function Poleznie() {
const [limit, setLimit] = useState(24);
const [sortOrder, setSortOrder] = useState('default');
const getPrice = (price: string) =>

  Number(price.replace(/[^\d,.-]/g, '').replace(',', '.'));

const products = [...poleznie];

if (sortOrder === 'cheap') {
  products.sort((a, b) => getPrice(a.price) - getPrice(b.price));
} else if (sortOrder === 'expensive') {
  products.sort((a, b) => getPrice(b.price) - getPrice(a.price));
}

const visibleProducts = products.slice(0, limit);

    return (
        <main className='popular'>
            <div>
                <h1 className='popular_title'>Полезные</h1>
                <p>
                <Link to="/">Главная</Link> / <Link to="/catalog">Каталог</Link> / <text> Полезные</text>
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
            {visibleProducts.map((poleznie) => (
                <article className='card_popular' key={poleznie.id}>
                    <img className='popular_img' src={poleznie.img} alt={poleznie.title}/>
                    <div className='popular_content'>
                        <h2>{poleznie.title}</h2>
                        <p>{poleznie.description}</p>
                        <p>{poleznie.price}</p>
                        <Link to={poleznie.to}>Перейти</Link>    
                    </div>
                </article>
            ))}
        </main>
    )
}
