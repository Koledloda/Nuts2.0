import { Link } from 'react-router-dom';
import './katalog.css';

const katalog = [
    {
        id: 1,
        img: 'https://415022.lp.tobiz.net/img/370x270/9bad66620dd1a9600970e16e350b6868.jpg',
        title: 'Популярные',
    },

    {
        id: 2,
        img: 'https://415022.lp.tobiz.net/img/370x270/3d71714dbb6515b637869875c2e11a82.jpg',
        title: 'Премиум',
    },

    {
        id: 3,
        img: 'https://415022.lp.tobiz.net/img/370x270/adf9e68e27b83465ce9cd338cc2d7a39.jpg',
        title: 'Полезные',
    },

    {
        id: 4,
        img: 'https://415022.lp.tobiz.net/img/370x270/0d51e0c7bec567a7379f7eb23e70f213.jpg',
        title: 'Экзотические',
    }
]

export default function Katalog() {
    return (
<<<<<<< HEAD
        <main className='section_inner width1170'>
            <div className='catalogTitleBlock'>
                <h1 className='catalogTitle'>Каталог товаров</h1>
=======
        <main className='katalog'>
            <div className='katalog-header'>
                <h1 className='title'>Каталог товаров</h1>
>>>>>>> 41987e53403cb5aed65c760e291c0b59a537a604
                <p>
                    <Link to="/">Главная</Link> / <Link to="/catalog">Каталог</Link>
                </p>
            </div>
<<<<<<< HEAD
            <div className="category">
                <div>
                    {katalog.map((cat) => (
                        <article className='category' key={cat.id}>
                            <img src={cat.img} alt={cat.title}/>
                            <div>
                                <h2>{cat.title}</h2>
                                <button>Смотреть товары</button>
                            </div>
                        </article>
                    ))}
                </div>
=======
            <div>
                {katalog.map((cat) => (
                    <article className='card' key={cat.id}>
                        <img src={cat.img} alt={cat.title}/>
                        <div>
                            <h2 className='card-title'>{cat.title}</h2>
                            <button className='btn'>Смотреть товары</button>
                        </div>
                    </article>
                ))}
>>>>>>> 41987e53403cb5aed65c760e291c0b59a537a604
            </div>
        </main>
    )
}