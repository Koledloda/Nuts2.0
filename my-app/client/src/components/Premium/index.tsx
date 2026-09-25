import './style.css';

const hits = [
    {
        id: 1,
        img: '',
        title: 'Орехи макадамия',
        description: 'Изысканное сочетание хрустящих орехов и гладкого шоколада. Роскошный десерт для настоящих гурманов и ценителей.',
        price: '430.00 руб.',
    },
    {
        id: 2,
        img: '',
        title: 'Орехи пекан',
        description: 'Маслянистые ядра с нежным вкусом, напоминающим грецкий орех. Отлично дополняет десерты, выпечку и сырные тарелки.',
        price: '399.00 руб.',
    },
    {
        id: 3,
        img: '',
        title: 'Фисташки солёные',
        description: 'Пикантные раскрывшиеся орешки с ярким вкусом. Содержат полезные жиры и белок, любимое лакомство для многих.',
        price: '249.00 руб.',
    },
    {
        id: 4,
        img: '',
        title: 'Кешью обжаренные',
        description: 'Нежные маслянистые орехи с деликатным сладковатым вкусом. Богаты железом и цинком, хороши сами по себе и в блюдах.',
        price: '190.00 руб.',
    },
];

export default function Hits() {
    return (
        <main className='block'>
            <div className='block_name'>
                <h1 className='block_name_name'>Премиум</h1>
                <h1 className='block_name_nxname'>элитные и дорогие</h1>
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
