import './style.css';
import { Link } from 'react-router-dom';

export default function Products() {
    const product = {
        name: '',
        description:'',
        price: '',
        image: '',
    };

    return (
        <main className="products">
            <div className="product_title">
                <Link to="/">Главная</Link>
                <span>›</span>
                <Link to="/catalog">Каталог товаров</Link>
                <span>›</span>
                <span>{product.name}</span>
            </div>
            <div className="products_box">
                <div className="products_images">
                    <div className="products_main_image">
                        <img
                            src={product.image}
                            alt={product.name}/>
                    </div>
                    <div className="products_preview">
                        <img
                            src={product.image}
                            alt={product.name}/>
                    </div>
                </div>
                <div className="products_content">
                    <h1>{product.name}</h1>
                    <div className="products_status">
                        ✓ В наличии
                    </div>
                    <p className="products_description">
                        {product.description}
                    </p>
                    <div className="products_price">
                        {product.price}
                    </div>
                    <Link to="#" className="products_button"> В корзину </Link>
                </div>
            </div>
        </main>
    );
}