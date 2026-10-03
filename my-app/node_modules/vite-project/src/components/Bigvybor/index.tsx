import './style.css';

const choice = {
  title: 'Большой выбор',
  text: 'Наш ассортимент — это сочетание традиционных вкусов и эксклюзивных позиций. От классических грецких орехов до редких сортов макадамии — у нас есть всё для истинных ценителей натуральных лакомств.',
  button: 'Перейти в каталог',
  to: '/catalog',

  image: 'https://415022.lp.tobiz.net/img/1170x498/a128a686045561c7be47c45b2504b30e.jpg',
};

export default function Choice() {
  return (
    <div className="ChoiceSection">
      <div className="ChoiceBanner">
        <img className="ChoiceImage" src={choice.image} alt="" />
        <div className="ChoiceContent">
          <h2 className="ChoiceTitle">{choice.title}</h2>
          <p className="ChoiceText">{choice.text}</p>
          <a className="ChoiceButton" href={choice.to}>
            {choice.button}
        </a>
        </div>
      </div>
    </div>
  );
}