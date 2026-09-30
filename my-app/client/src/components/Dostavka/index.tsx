import './style.css';

const dostavka = {
  title: 'Доставка',
  listTitle: 'Способы доставки',
  items: [
    { term: 'Собственный транспорт поставщика.', desc: 'Многие компании используют рефрижераторы для поддержания необходимого температурного режима. Например, для охлаждённого мяса температура в грузовом отсеке должна быть от 0 до +4 °C, а для замороженного — ниже −8 °C.' },
    { term: 'Самовывоз со склада.', desc: 'Некоторые поставщики предлагают этот вариант, особенно для крупных заказов.' },
    { term: 'Сотрудничество с транспортными компаниями.', desc: 'Для доставки в отдалённые регионы или при больших объёмах груза.' },
  ],
  listTitle2: 'Сроки доставки',
  items2: [
    { desc: 'В пределах города или региона — обычно 1–2 дня.' },
    { desc: 'В другие регионы — от 1 до 5 дней в зависимости от расстояния.' },
  ],
  text: [
    'Способы доставки:',
    'Собственный транспорт поставщика. Многие компании используют рефрижераторы для поддержания необходимого температурного режима. Например, для охлаждённого мяса температура в грузовом отсеке должна быть от 0 до +4 °C, а для замороженного — ниже −8 °C.',
    'Самовывоз со склада. Некоторые поставщики предлагают этот вариант, особенно для крупных заказов.',
    'Сотрудничество с транспортными компаниями. Для доставки в отдалённые регионы или при больших объёмах груза.',
    'Сроки доставки:',
    'В пределах города или региона — обычно 1–2 дня.',
    'В другие регионы — от 1 до 5 дней в зависимости от расстояния.',
  ],
  image: 'https://415022.lp.tobiz.net/img/788x1050/c716dc67734b6e4dfbafc044121ffd2e.jpg',
};

const photos = [
  'https://415022.lp.tobiz.net/img/656x490/189ca6dfa253ca6643aeb86b85252e4a.jpg',
  'https://415022.lp.tobiz.net/img/656x490/73cc4f2b5908d3c07b7ea3277c51b9ab.jpg',
  'https://415022.lp.tobiz.net/img/656x490/9657df4f5cd3a3caabcd7c1b0afc8a5e.jpg',
];

export { dostavka, photos };

export default function Dostavka() {
  return (
    <div className="Body05">
      <h2 className="Title05">{dostavka.title}</h2>

      <div className="Split05">
        <div className="Left05">
          <p className="Text05">{dostavka.listTitle}</p>
          <ul className="List05">
            {dostavka.items.map((item) => (
              <li key={item.term}>
                <b>{item.term}</b> {item.desc}
              </li>
            ))}
          </ul>

          <p className="Text05">{dostavka.listTitle2}</p>
          <ul className="List05">
            {dostavka.items2.map((item) => (
              <li key={item.desc}>{item.desc}</li>
            ))}
          </ul>
        </div>

        <div className="Right05">
          <img className="Photo05" src={dostavka.image} alt="" />
        </div>
      </div>

      <div className="Row05">
        {photos.map((src) => (
          <img key={src} className="Photo05Small" src={src} alt="" />
        ))}
      </div>
    </div>
  );
}