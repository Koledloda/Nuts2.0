import './style.css';

const hits = [
    {
        id: 1,
        img: '',
        title: 'Семечки подсолнечника',
        description: 'Аппетитные золотистые ядрышки с приятным ароматом. Отлично подходят к пиву или как самостоятельный вкусный и полезный перекус.',
        price: '1 499.00 руб.',
    },
    {
        id: 2,
        img: '',
        title: 'Миндаль сырой',
        description: 'Хрустящие орешки с нежным сладковатым вкусом. Содержат витамин Е, полезны для кожи и сердца. Прекрасный вариант для перекуса.',
        price: '349.00 руб.',
    },
    {
        id: 3,
        img: '',
        title: 'Грецкие орехи',
        description: 'Крупные ядра с насыщенным вкусом, богаты полезными жирами. Идеальны для десертов, выпечки и здоровых перекусов в течение дня.',
        price: '190.00 руб.',
    },
];

export default function Hits() {
    return (
        <main className='block'>
            <div className='block_name'>
                <h1 className='block_name_name'>Популярные</h1>
                <h1 className='block_name_nxname'>хиты продаж</h1>
            </div>
            <p className='block_sub'>В нашем магазине вы найдете любые виды орехов и семян</p>
            <div className='content'>
                <div className='menu'>
                    <p>Популярные</p>
                    <p>Премиум</p>
                    <p>Полезные</p>
                    <p>Экзотические</p>
                </div>
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
