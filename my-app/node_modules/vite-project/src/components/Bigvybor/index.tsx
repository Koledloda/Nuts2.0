import * as React from 'react';
import './style.css';

const choice = {
  title: 'Большой выбор',
  text: 'Наш ассортимент — это сочетание традиционных вкусов и эксклюзивных позиций. От классических грецких орехов до редких сортов макадамии — у нас есть всё для истинных ценителей натуральных лакомств.',
  button: 'Перейти в каталог',

  image: 'https://415022.lp.tobiz.net/img/1170x498/a128a686045561c7be47c45b2504b30e.jpg',
};

export default function Choice() {
  return (
    <div className="Body03">
      <div className="Banner03">
        <img className="Image03" src={choice.image} alt="" />
        <div className="Content03">
          <h2 className="Title03">{choice.title}</h2>
          <p className="Text03">{choice.text}</p>
          <a className="Button03" href="#catalog">
            {choice.button}
          </a>
        </div>
      </div>
    </div>
  );
}