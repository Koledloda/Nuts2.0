import * as React from 'react';
import './style.css';

const vybor = [
  {
    number: '01',
    image: 'https://415022.lp.tobiz.net/img/600x600/0c1dcd5d0a2b8cc727808080707c3043.png',
    title: 'Новейшая технологи хранения',
    text: 'Мы используем вакуумную упаковку и климат-контроль, чтобы сохранить свежесть и полезные свойства орехов и семян. Хрустящие и ароматные',
  },
  {
    number: '02',
    image: 'https://415022.lp.tobiz.net/img/600x600/3da950f98658e05eaf269004c7da70cf.png',
    title: 'Высокая степень отбора сырья',
    text: 'Работаем напрямую с проверенными фермерами и выбираем только лучшие сорта. Каждая партия орехов проходит строгий контроль качества',
  },
  {
    number: '03',
    image: 'https://415022.lp.tobiz.net/img/600x600/f9fc11c4f5019ba4cad18a2d09e24805.png',
    title: 'Регулярное обновление ассортимента',
    text: 'Постоянно добавляем новые позиции — от редких орехов до органических суперфудов. У нас всегда есть чем удивить даже самых искушенных покупателей',
  },
  {
    number: '04',
    image: 'https://415022.lp.tobiz.net/img/600x600/28b1559073c9cea6227174718537fb23.png',
    title: 'Регулярное обновление ассортимента',
    text: 'Здесь должен быть расположен текст, благодаря которому клиент поймет, почему должен купить товар именно в этом магазине',
  },
  {
    number: '05',
    image: 'https://415022.lp.tobiz.net/img/600x600/82c2ef29c17dd8c0bc879cd1a7e1e562.png',
    title: 'Неповторимый стиль упаковки',
    text: 'Здесь должен быть расположен текст, благодаря которому клиент поймет, почему должен купить товар именно в этом магазине',
  },
  {
    number: '06',
    image: 'https://415022.lp.tobiz.net/img/600x600/56e8613aeb5c982f523d0ad36ad3ef65.png',
    title: 'Доставка со склада до двери',
    text: 'Здесь должен быть расположен текст, благодаря которому клиент поймет, почему должен купить товар именно в этом магазине',
  },
];

export default function Vybor() {
  return (
    <div className="Body01">
      <h2 className="Headline01">
        Почему выбирают <span className="Highlight01">наш магазин</span>
      </h2>

      <div className="Panel01">
        <div className="Grid01">
          {vybor.map((card) => (
            <div className="Card" key={card.number}>
              <div className="Number01">{card.number}</div>
              <div className="CardContent">
                <img className="Image" src={card.image} alt="" />
                <div className="TextBlock">
                  <h3 className="CardTitle">{card.title}</h3>
                  <p className="CardText">{card.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}