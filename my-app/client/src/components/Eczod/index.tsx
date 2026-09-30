import './style.css';


export default function Hits(props: any) { 
    const { hits } = props;
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
                    {hits.map((hit:any) => (
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
