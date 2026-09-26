import './style.css';

const hits = [
    {
        id: 1,
        img: 'https://415022.lp.tobiz.net/img/400x400/cd61617b45acfe7e66d13b9646d8693e.jpg',
        title: 'Семена конопли',
        description: 'Питательные зёрнышки с лёгким ореховым привкусом. Добавляют в каши, йогурты, салаты и выпечку.',
        price: '1 040.00 руб.',
    },
    {
        id: 2,
        img: 'https://415022.lp.tobiz.net/img/400x400/d1fc5c5c16c5adc1f23093d1cd5f1949.jpg',
        title: 'Кокосовые чипсы',
        description: 'Сладкие хрустящие ломтики с тропическим ароматом. Подходят для десертов, гранолы и полезных перекусов.',
        price: '899.00 руб.',
    },
    {
        id: 3,
        img: 'https://415022.lp.tobiz.net/img/400x400/c1bb60bff94721d00526ea75431f6a30.jpg',
        title: 'Макадамия',
        description: 'Самый дорогой орех с нежным сливочным вкусом. Прекрасно сочетается с шоколадом и используется в десертах.',
        price: '630.00 руб.',
    },
    {
        id: 4,
        img: 'https://415022.lp.tobiz.net/img/400x400/8f1b3b2bc1f31a964f535fd68292f15a.jpg',
        title: 'Бразильский орех',
        description: 'Крупные маслянистые орехи с кремовой текстурой. Рекордсмен по содержанию селена, полезного для иммунитета.',
        price: '790.00 руб.',
    },
];

export default function Hits() {
    return (
        <main className='block'>
            <div className='content'>
                <div className='section'>
                    <div className='eczod_header'>
                        <div className='block_name'>
                            <h1 className='block_name_name'>Экзотические</h1>
                            <h1 className='block_name_nxname'>необычные товары</h1>
                        </div>
                        <p className='block_sub'>В нашем магазине вы найдете любые виды орехов и семян</p>
                    </div>
                    {hits.map((hit) => (
                        <article className='card' key={hit.id}>
                            <img className='card_img' src={hit.img} alt={hit.title}/>
                            <div className='card_content'>
                                <h2>{hit.title}</h2>
                                <p>{hit.description}</p>
                                <p>{hit.price}</p>
                                <button className='sell'>Заказать</button>
                            </div>
                        </article>  
                    ))}
                </div>
            </div>
        </main>
    )
}
