import { Link } from 'react-router-dom';
import './style.css'
import { useState } from 'react';

const eczod = [
    {
        id: 1,
        img: 'https://415022.lp.tobiz.net/img/400x400/cd61617b45acfe7e66d13b9646d8693e.jpg',
        title: 'Семена конопли',
        description: 'Питательные зёрнышки с лёгким ореховым привкусом. Добавляют в каши, йогурты, салаты и выпечку.',
        price: '1 040.00 руб.',
        to:'',
    },
    {
        id: 2,
        img: 'https://415022.lp.tobiz.net/img/400x400/d1fc5c5c16c5adc1f23093d1cd5f1949.jpg',
        title: 'Кокосовые чипсы',
        description: 'Сладкие хрустящие ломтики с тропическим ароматом. Подходят для десертов, гранолы и полезных перекусов.',
        price: '899.00 руб.',
        to:'',
    },
    {
        id: 3,
        img: 'https://415022.lp.tobiz.net/img/400x400/c1bb60bff94721d00526ea75431f6a30.jpg',
        title: 'Макадамия',
        description: 'Самый дорогой орех с нежным сливочным вкусом. Прекрасно сочетается с шоколадом и используется в десертах.',
        price: '630.00 руб.',
        to:'',
    },
    {
        id: 4,
        img: 'https://415022.lp.tobiz.net/img/400x400/8f1b3b2bc1f31a964f535fd68292f15a.jpg',
        title: 'Бразильский орех',
        description: 'Крупные маслянистые орехи с кремовой текстурой. Рекордсмен по содержанию селена, полезного для иммунитета.',
        price: '790.00 руб.',
        to:'',
    },
]


export default function Eczod() {
const [limit, setLimit] = useState(24);
const [sortOrder, setSortOrder] = useState('default');
const getPrice = (price: string) =>

  Number(price.replace(/[^\d,.-]/g, '').replace(',', '.'));

const products = [...eczod];

if (sortOrder === 'cheap') {
  products.sort((a, b) => getPrice(a.price) - getPrice(b.price));
} else if (sortOrder === 'expensive') {
  products.sort((a, b) => getPrice(b.price) - getPrice(a.price));
}

const visibleProducts = products.slice(0, limit);

    return (
        <main className='eczod'>
            <div>
                <h1 className='eczod_title'>Экзотические</h1>
                <p>
                <Link to="/">Главная</Link> / <Link to="/catalog">Каталог</Link> / <text> Экзотические</text>
                </p>
                </div>
                <div className="eczod_toolbar">
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
            {eczod.map((eczod) => (
                <article className='card_eczod' key={eczod.id}>
                    <img className='eczod_img' src={eczod.img} alt={eczod.title}/>
                    <div className='eczod_content'>
                        <h2>{eczod.title}</h2>
                        <p>{eczod.description}</p>
                        <p>{eczod.price}</p>
                        <Link to={eczod.to}>Перейти</Link>    
                    </div>
                </article>
            ))}
        </main>
    )
}