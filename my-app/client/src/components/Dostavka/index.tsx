import './style.css';

const dostavka = {
  title: 'Доставка',
  sections: [
    {
      title: 'Способы доставки:',
      items: [
        { term: 'Собственный транспорт поставщика.', text: 'Многие компании используют рефрижераторы для поддержания необходимого температурного режима. Например, для охлаждённого мяса температура в грузовом отсеке должна быть от 0 до +4 °C, а для замороженного — ниже −8 °C.' },
        { term: 'Самовывоз со склада.', text: 'Некоторые поставщики предлагают этот вариант, особенно для крупных заказов.' },
        { term: 'Сотрудничество с транспортными компаниями.', text: 'Для доставки в отдалённые регионы или при больших объёмах груза.' },
      ],
    },
    {
      title: 'Сроки доставки:',
      items: [
        { text: 'В пределах города или региона — обычно 1–2 дня.' },
        { text: 'В другие регионы — от 1 до 5 дней в зависимости от расстояния.' },
      ],
    },
  ],
  image: 'https://415022.lp.tobiz.net/img/450x600/4c52be60d9611b03f5bcba3acfa286dd.jpg',
};

const photos = [
  'https://415022.lp.tobiz.net/img/656x490/189ca6dfa253ca6643aeb86b85252e4a.jpg',
  'https://415022.lp.tobiz.net/img/656x490/73cc4f2b5908d3c07b7ea3277c51b9ab.jpg',
  'https://415022.lp.tobiz.net/img/656x490/9657df4f5cd3a3caabcd7c1b0afc8a5e.jpg',
];

export { dostavka, photos };

export default function Dostavka() {
  return (
    <section className="DeliverySection">
      <div className="DeliveryInner">
        <h2 className="DeliveryTitle">{dostavka.title}</h2>

        <div className="DeliverySplit">
          <div className="DeliveryCopy">
            {dostavka.sections.map((section) => (
              <section className="DeliveryGroup" key={section.title}>
                <h3>{section.title}</h3>
                <ul>
                  {section.items.map((item) => (
                    <li key={'term' in item ? item.term : item.text}>
                      {'term' in item && <strong>{item.term} </strong>}
                      {item.text}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
            <div className="DeliveryRepeatedCopy">
              <p>Способы доставки:</p>
              {dostavka.sections[0].items.map((item) => (
                <p key={'term' in item ? item.term : item.text}>
                  {'term' in item && `${item.term} `}
                  {item.text}
                </p>
              ))}
              <p>Сроки доставки:</p>
              {dostavka.sections[1].items.map((item) => (
                <p key={item.text}>{item.text}</p>
              ))}
            </div>
          </div>

          <div className="DeliveryVisual">
            <img src={dostavka.image} alt="Орехи для доставки покупателям" />
          </div>
        </div>

        <div className="DeliveryGallery">
          {photos.map((src) => (
            <img key={src} src={src} alt="Ассортимент орехов и сухофруктов" />
          ))}
        </div>
      </div>
    </section>
  );
}