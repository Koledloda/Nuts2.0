import { useState, type FormEvent } from 'react';
import './style.css';

type CartPaymentProps = {
  total: number;
  onBack: () => void;
};

export default function CartPayment({ total, onBack }: CartPaymentProps) {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [personalDataConsent, setPersonalDataConsent] = useState(false);
  const [newsletterConsent, setNewsletterConsent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Здесь позже подключается отправка заказа.
  };

  return (
    <section className="checkout-screen">
      <div className="checkout-total">
        <span>Итого:</span>
        <strong>{total.toLocaleString('ru-RU')} руб.</strong>
      </div>

      <form className="checkout-form" onSubmit={handleSubmit}>
        <input
          type="tel"
          placeholder="Ваш контактный телефон"
          aria-label="Ваш контактный телефон"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
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

        <button className="checkout-submit" type="submit">
          Оплатить заказ
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

      <footer className="checkout-footer">
        <button type="button" onClick={onBack}>
          Вернуться к списку
        </button>
      </footer>
    </section>
  );
}