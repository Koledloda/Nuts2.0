import { Link } from 'react-router-dom';
import './style.css';

const katalog = [
    {
        id: 1,
        to: '/catalog/popular',
        img: 'https://415022.lp.tobiz.net/img/370x270/9bad66620dd1a9600970e16e350b6868.jpg',
        title: 'Популярные',
    },

    {
        id: 2,
        to: '/catalog/premium',
        img: 'https://415022.lp.tobiz.net/img/370x270/3d71714dbb6515b637869875c2e11a82.jpg',
        title: 'Премиум',
    },

    {
        id: 3,
        to: '/catalog/poleznie',
        img: 'https://415022.lp.tobiz.net/img/370x270/adf9e68e27b83465ce9cd338cc2d7a39.jpg',
        title: 'Полезные',
    },

    {
        id: 4,
        to: '/catalog/eczod',
        img: 'https://415022.lp.tobiz.net/img/370x270/0d51e0c7bec567a7379f7eb23e70f213.jpg',
        title: 'Экзотические',
    }
]

export default function Katalog() {
    return (
        <main className="section_inner width1170">
            <div className="catalogTitleBlock">
                <h1 className="catalogTitle">Каталог товаров</h1>
                <p>
                    <Link to="/">Главная</Link> / <Link to="/catalog">Каталог</Link>
                </p>
            </div>
            <div className="category">
                {katalog.map((cat) => (
                    <article className="category-card" key={cat.id}>
                        <img src={cat.img} alt={cat.title} />
                        <div>
                            <h2>{cat.title}</h2>
                            <Link to={cat.to}>Смотреть товары</Link>
                        </div>
                    </article>
                ))}
            </div>
        </main>
    );
}