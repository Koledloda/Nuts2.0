import './style.css';

const hits = [
    {
        id: 1,
        img: '',
        title: 'Семена конопли',
        description: 'Питательные зёрнышки с лёгким ореховым привкусом. Добавляют в каши, йогурты, салаты и выпечку.',
        price: '1 040.00 руб.',
    },
    {
        id: 2,
        img: '',
        title: 'Кокосовые чипсы',
        description: 'Сладкие хрустящие ломтики с тропическим ароматом. Подходят для десертов, гранолы и полезных перекусов.',
        price: '899.00 руб.',
    },
    {
        id: 3,
        img: '',
        title: 'Макадамия',
        description: 'Самый дорогой орех с нежным сливочным вкусом. Прекрасно сочетается с шоколадом и используется в десертах.',
        price: '630.00 руб.',
    },
    {
        id: 4,
        img: '',
        title: 'Бразильский орех',
        description: 'Крупные маслянистые орехи с кремовой текстурой. Рекордсмен по содержанию селена, полезного для иммунитета.',
        price: '790.00 руб.',
    },
];

export default function Hits() {
    return (
        <main className='block'>
            <div className='block_name'>
                <h1 className='block_name_name'>Экзотические</h1>
                <h1 className='block_name_nxname'>необычные товары</h1>
            </div>
            <p className='block_sub'>В нашем магазине вы найдете любые виды орехов и семян</p>
            <div className='content'>
                <div className='section'>
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
