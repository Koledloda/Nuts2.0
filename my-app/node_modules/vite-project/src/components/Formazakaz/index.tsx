import { useState } from 'react';
import './style.css';

type Props = {
  onClose: () => void;
};

const Formazakaz = ({ onClose }: Props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, phone });
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" type="button" onClick={onClose}>
          ✕
        </button>
        <h3 className="modal-title">Оставить заявку</h3>

        <form onSubmit={handleSubmit}>
          <label className="modal-label">
            Введите имя
            <input
              className="modal-input"
              type="text"
              placeholder="Введите имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              onInvalid={(e) => e.currentTarget.setCustomValidity('Заполните это поле')}
              onInput={(e) => e.currentTarget.setCustomValidity('')}
            />
          </label>

          <label className="modal-label">
            Введите E-mail
            <input
              className="modal-input"
              type="email"
              placeholder="mail@mail.ru"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              onInvalid={(e) => e.currentTarget.setCustomValidity('Заполните это поле')}
              onInput={(e) => e.currentTarget.setCustomValidity('')}
            />
          </label>

          <label className="modal-label">
            Введите номер телефона
            <input
              className="modal-input"
              type="tel"
              placeholder="xxx-xxx-xxx"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              onInvalid={(e) => e.currentTarget.setCustomValidity('Заполните это поле')}
              onInput={(e) => e.currentTarget.setCustomValidity('')}
            />
          </label>

          <button className="modal-submit" type="submit">
            Отправить
          </button>

          <p className="modal-note">
            Нажимая на кнопку, Вы принимаете{' '}
            <a href="https://415022.lp.tobiz.net/?personal_data=1" target="_blank" rel="noreferrer">Положение</a>{' '}
            и{' '}
            <a href="https://415022.lp.tobiz.net/?personal_data=2" target="_blank" rel="noreferrer">Согласие</a>{' '}
            на обработку персональных данных.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Formazakaz;