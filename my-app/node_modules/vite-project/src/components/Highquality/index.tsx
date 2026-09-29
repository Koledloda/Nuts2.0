import './style.css';
import { useState } from 'react';
import Formazakaz from '../Formazakaz';

const quality = {
  title: 'Высокое качество',
  text: 'Мы тщательно отбираем только лучшие орехи и семена, используя натуральные ингредиенты без химической обработки. Каждый продукт проходит многоступенчатый контроль, чтобы гарантировать вам безупречный вкус и пользу.',
  button: 'Заказать',
 
  image: 'https://415022.lp.tobiz.net/img/1050x1050/787abb3b1d45063dbf6221a1cb7bab77.jpg',
};

export default function Quality() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Body02">
      <div className="Split02">
        <div className="Left02">
          <div className="Content02">
            <h2 className="Title02">{quality.title}</h2>
            <p className="Text02">{quality.text}</p>
             <button
              type="button"
              className="Button02"
              onClick={() => setIsOpen(true)}
            >
              {quality.button}
            </button>
             {isOpen && <Formazakaz onClose={() => setIsOpen(false)} />}
          </div>
        </div>

        <div className="Right02">
          <img className="Photo02" src={quality.image} alt="" />
        </div>
      </div>
    </div>
  );
}
