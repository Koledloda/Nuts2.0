import * as React from 'react';
import './style.css';

const reviews = [
  {
    id: 1,
    image: 'https://415022.lp.tobiz.net/img/1050x525/8c160f3d9245cd6b4cddbf4710a72c10.jpg',
    text: 'Фисташки просто бомба! Упаковка герметичная, все орешки раскрытые, ни одного пустого. Цена порадовала – дешевле, чем в супермаркете.',
    name: 'Андрей, г. Казань',
  },
  {
    id: 2,
    image: 'https://415022.lp.tobiz.net/img/1050x525/94289d47b0f6e2a84fe4c3eb8c33ef90.jpg',
    text: 'Быстрая доставка и свежайшие орехи! Заказываю уже в третий раз – качество неизменно на высоте. Особенно порадовали грецкие орехи – как на фото!',
    name: 'Мария, г. Москва',
  },
  {
    id: 3,
    image: 'https://415022.lp.tobiz.net/img/1050x525/1768767725f73ad7d1e1caa414672b93.jpg',
    text: 'Кешью – просто пальчики оближешь! Заказывал оптом для кафе – все клиенты в восторге. Будем сотрудничать и дальше!',
    name: 'Иван, г. Краснодар',
  },
];

export default function Reviews() {
  return (
    <div className="Body04">
      <h2 className="Headline04">
        <span className="Accent04">Впечатления</span> наших клиентов
      </h2>

      <div className="Grid04">
        {reviews.map((review) => (
          <div className="Card04" key={review.id}>
            <img className="Photo04" src={review.image} alt="" />
            <div className="Body04Text">
              <p className="Text04">{review.text}</p>
              <div className="Name04">{review.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}