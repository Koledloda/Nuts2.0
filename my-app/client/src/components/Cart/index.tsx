import { useEffect, useState, useContext, createContext, type ReactNode } from "react";
import { Link, Outlet } from "react-router-dom";
import { type Product } from "../../api/products";
import CartPayment from '../CartPayment';
import './style.css';


type CartItem = {
    product: Product;
    quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product) => void;
  setQuantity: (productId: number, quantity: number) => void;
  removeItem: (productId: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
};

const storageKey = 'nuts-cart'; 
const CartContext = createContext<CartContextValue | null>(null);

function readCart(): CartItem[] {
    try{
        const saved = localStorage.getItem(storageKey);
        const parsed: unknown = saved ? JSON.parse(saved) : [];

        return Array.isArray(parsed) ? parsed as CartItem[] : [];
    }   catch {
        return [];
    }
}

export function CartProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<CartItem[]>(readCart);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        try {
            localStorage.setItem(storageKey, JSON.stringify(items));
        } catch {

        }
    }, [items]);

    const addItem = (product: Product) => {
        setItems((current) => {
            const exists = current.some((item) => item.product.id === product.id);

            if (exists) {
                return current.map((item) =>
                item.product.id === product.id ? { ...item, quantity: Math.min(100, item.quantity + 1)} : item
                );
            }

            return [...current, {product, quantity: 1}];
        });

        setIsOpen(true);
    };

    const setQuantity = (productId: number, value: number) => {
        const quantity = Math.max(1, Math.min(100, Math.floor(value) || 1));

        setItems((current) =>
            current.map((item) =>
                item.product.id === productId ? {...item, quantity} : item
        )
    );
};

const removeItem = (productId: number) => {
    setItems((currrent) =>
        currrent.filter((item) => item.product.id !== productId)
    );
};

const clearCart = () => setItems([]);


return ( 
    <CartContext.Provider value={{ items, isOpen, addItem, setQuantity, removeItem, clearCart, openCart: () => setIsOpen(true), closeCart: () => setIsOpen(false),
     }}>
        {children}
    </CartContext.Provider>
);
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart должен использоваться внутри CartProvider');
    }

    return context;
}

function CartWidget() {
  const { items, isOpen, setQuantity, removeItem, clearCart, openCart, closeCart } = useCart();
  const [isCheckout, setIsCheckout] = useState(false);

    const count = items.reduce((sum, item) => sum + item.quantity, 0);
    const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

    useEffect(() => {
        if(!isOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') closeCart();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, closeCart]);

    if (count === 0 && !isCheckout) return null;

    return(
        <>
        <button type="button" className="cart-float-button" onClick={() => { setIsCheckout(false); openCart(); }} aria-label={`Открыть корзину, товаров: ${count}`}> Телеха <span className="cart-count"> {count}</span></button>

    {isOpen && (
        <div className="cart-layer">
          <button
            className="cart-backdrop"
            type="button"
            onClick={closeCart}
            aria-label="Закрыть корзину"
          />

          <aside
            className="cart-drawer"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cart-title"
          >
            <header className="cart-header">
              <div>
                <h2 id="cart-title">Корзина</h2>
                <p>{count} товаров в корзине</p>
              </div>
              <button
                type="button"
                className="cart-close"
                onClick={closeCart}
                aria-label="Закрыть"
              >
                ×
              </button>
            </header>

            {isCheckout ? (
              <CartPayment
                total={total}
                items={items.map(({ product, quantity }) => ({
                  productId: product.id,
                  quantity,
                }))}
                onOrderCreated={clearCart}
                onBack={() => setIsCheckout(false)}
              />
            ) : items.length === 0 ? (
              <p className="cart-empty">Корзина пока пуста</p>
            ) : (
              <>
                <div className="cart-table-scroll">
                  <table className="cart-table">
                    <thead>
                      <tr>
                        <th>Фото</th>
                        <th>Название</th>
                        <th>Количество</th>
                        <th>Цена</th>
                        <th>
                          <span className="visually-hidden">Удалить</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map(({ product, quantity }) => (
                        <tr key={product.id}>
                          <td>
                            <Link
                              className="cart-image"
                              to={`/product/${product.slug}`}
                              onClick={closeCart}
                            >
                              {product.images?.[0] && (
                                <img
                                  src={product.images[0].url}
                                  alt={
                                    product.images[0].alt || product.title
                                  }
                                />
                              )}
                            </Link>
                          </td>
                          <td>
                            <Link
                              className="cart-product-title"
                              to={`/product/${product.slug}`}
                              onClick={closeCart}
                            >
                              {product.title}
                            </Link>
                            <small>
                              {product.price.toLocaleString('ru-RU')} руб. за шт.
                            </small>
                          </td>
                          <td>
                            <input
                              className="cart-quantity"
                              type="number"
                              min="1"
                              max="100"
                              value={quantity}
                              aria-label={`Количество: ${product.title}`}
                              onChange={(event) =>
                                setQuantity(
                                  product.id,
                                  Number(event.target.value)
                                )
                              }
                            />
                          </td>
                          <td className="cart-price">
                            {(product.price * quantity).toLocaleString('ru-RU')}{' '}
                            руб.
                          </td>
                          <td>
                            <button
                              type="button"
                              className="cart-remove"
                              onClick={() => removeItem(product.id)}
                              aria-label={`Удалить ${product.title}`}
                              title="Удалить"
                            >
                              ×
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="cart-total">
                  <span>Итого:</span>
                  <strong>{total.toLocaleString('ru-RU')} руб.</strong>
                </div>
                <footer className="cart-actions">
                  <button
                    type="button"
                    className="cart-payment"
                    onClick={() => setIsCheckout(true)}
                  >
                    Перейти к оформлению
                  </button>
                </footer>
              </>
            )}
          </aside>
        </div>
      )}
    </>
  );
}   

export function CartLayout() {
    return (
        <>
        <Outlet/>
        <CartWidget/>
        </>
    );
}