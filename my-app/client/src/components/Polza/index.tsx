import './style.css';

const hits = [
    {
        id: 1,
        img: 'https://415022.lp.tobiz.net/img/400x400/e5093ee29d011d36ef795fb40e5067ea.jpg',
        title: 'Чиа семена',
        description: 'Суперфуд с высоким содержанием антиоксидантов. Разбухают в жидкости, подходят для пудингов, смузи и выпечки.',
        price: '2 190.00 руб.',
    },
    {
        id: 2,
        img: 'https://415022.lp.tobiz.net/img/400x400/7c68bba29cd66c0a751b13f6e38b6706.jpg',
        title: 'Кедровые орехи',
        description: 'Мелкие нежные ядрышки с лёгким хвойным ароматом. Богаты витаминами, идеальны для соусов, салатов и десертов.',
        price: '770.00 руб.',
    },
    {
        id: 3,
        img: 'https://415022.lp.tobiz.net/img/400x400/13048b8f4a11867aab0326eb8be77f3f.jpg',
        title: 'Льняные семена',
        description: 'Крошечные, но очень полезные семена с высоким содержанием Омега-3. Добавляют в смузи, выпечку и йогурты.',
        price: '349.00 руб.',
    },
    {
        id: 4,
        img: 'https://415022.lp.tobiz.net/img/400x400/ef26b497c268b5ef107c8b4fc19018bb.jpg',
        title: 'Тыквенные семечки',
        description: 'Натуральный источник цинка и магния. Хрустящие, слегка сладковатые, хороши в салатах, кашах и как перекус.',
        price: '560.00 руб.',
    },
];

export default function Hits() {
    return (
        <main className='block'>
            <div className='content'>
                <div className='section'>
                    <div className='polza_header'>
                        <div className='block_name'>
                            <h1 className='block_name_name'>Полезные</h1>
                            <h1 className='block_name_nxname'>для правильного питания</h1>
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
