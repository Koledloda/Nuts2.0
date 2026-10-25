import { useState, type FormEvent } from 'react';
import { createOrder } from '../../api/orders';
import './style.css';

type CartPaymentProps = {
  total: number;
  items: { productId: number; quantity: number }[];
  onOrderCreated: () => void;
  onBack: () => void;
};

export default function CartPayment({ total, items, onOrderCreated, onBack }: CartPaymentProps) {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [personalDataConsent, setPersonalDataConsent] = useState(false);
  const [newsletterConsent, setNewsletterConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [orderId, setOrderId] = useState<number | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const order = await createOrder({
        phone: phone.trim(),
        email: email.trim(),
        items,
        personalDataConsent,
        marketingConsent: newsletterConsent,
      });
      setOrderId(order.id);
      onOrderCreated();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Не удалось отправить заказ.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="checkout-screen">
      <div className="checkout-total">
        <span>Итого:</span>
        <strong>{total.toLocaleString('ru-RU')} руб.</strong>
      </div>

      {orderId !== null ? (
        <div className="checkout-result" role="status">
          <h2>Заказ принят</h2>
          <p>Номер заказа: {orderId}</p>
          <button type="button" onClick={onBack}>Продолжить покупки</button>
        </div>
      ) : (
      <form className="checkout-form" onSubmit={handleSubmit}>
        {error && <p className="checkout-error" role="alert">{error}</p>}
        <input
          type="tel"
          placeholder="Телефон: +79161234567"
          aria-label="Ваш контактный телефон"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          pattern="\+7[0-9]{10}"
          title="Введите номер в формате +79161234567"
          maxLength={12}
          required
        />

        <input
          type="email"
          placeholder="Введите E-mail"
          aria-label="Введите E-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <label className="checkout-consent">
          <input
            type="checkbox"
            checked={personalDataConsent}
            onChange={(event) =>
              setPersonalDataConsent(event.target.checked)
            }
            required
          />
          <span>Я даю согласие на обработку персональных данных</span>
        </label>

        <button className="checkout-submit" type="submit" disabled={submitting}>
          {submitting ? 'Отправка заказа...' : 'Оформить заказ'}
        </button>

        <label className="checkout-consent">
          <input
            type="checkbox"
            checked={newsletterConsent}
            onChange={(event) => setNewsletterConsent(event.target.checked)}
          />
          <span>Я согласен(а) получать рекламные рассылки</span>
        </label>
      </form>
      )}

      <footer className="checkout-footer">
        <button type="button" onClick={onBack}>
          Вернуться к списку
        </button>
      </footer>
    </section>
  );
}