import './style.css';

const hits = [
    {
        id: 1,
        img: '',
        title: 'Чиа семена',
        description: 'Суперфуд с высоким содержанием антиоксидантов. Разбухают в жидкости, подходят для пудингов, смузи и выпечки.',
        price: '2 190.00 руб.',
    },
    {
        id: 2,
        img: '',
        title: 'Кедровые орехи',
        description: 'Мелкие нежные ядрышки с лёгким хвойным ароматом. Богаты витаминами, идеальны для соусов, салатов и десертов.',
        price: '770.00 руб.',
    },
    {
        id: 3,
        img: '',
        title: 'Льняные семена',
        description: 'Крошечные, но очень полезные семена с высоким содержанием Омега-3. Добавляют в смузи, выпечку и йогурты.',
        price: '349.00 руб.',
    },
    {
        id: 4,
        img: '',
        title: 'Тыквенные семечки',
        description: 'Натуральный источник цинка и магния. Хрустящие, слегка сладковатые, хороши в салатах, кашах и как перекус.',
        price: '560.00 руб.',
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
