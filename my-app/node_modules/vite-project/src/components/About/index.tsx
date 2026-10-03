import './style.css';

const about = {
  title: 'О нашем магазине',
  text: 'Мы — проверенный поставщик орехов и сухофруктов оптом для кондитерских производств и торговых сетей. Предлагаем сырые, жареные и очищенные ядра от надёжных плантаций с полным пакетом фитосанитарной документации.',
  listTitle: 'Почему выбирают нас:',
  items: [
    { term: 'Качество.', desc: 'Только сертифицированное сырьё с контролем на всех этапах: от сбора урожая до фасовки.' },
    { term: 'Ассортимент.', desc: 'Полный набор позиций: кешью, миндаль, фундук, грецкий орех, фисташки, арахис, кедровый орех, сушёные яблоки, курага, чернослив, изюм и другие.' },
    { term: 'Гибкость.', desc: ' Работаем с объёмами от 50 кг до контейнерных партий (опт и мелкий опт).' },
    { term: 'Логистика.', desc: 'Собственный склад с климат-контролем и автопарк, доставка по городу и в соседние области.' },
    { term: 'Документы.', desc: 'Декларации соответствия ЕАЭС, фитосанитарные сертификаты, полная прослеживаемость партий.' },
    { term: 'Цены.', desc: 'Прямые импортные контракты с производителями — работаем без посредников и лишних наценок.' },
  ],
  button: 'Перейти в каталог',
  to: '/catalog',
  image: 'https://415022.lp.tobiz.net/img/788x1050/c716dc67734b6e4dfbafc044121ffd2e.jpg',
}

  const photos = [
  'https://415022.lp.tobiz.net/img/656x490/189ca6dfa253ca6643aeb86b85252e4a.jpg',
  'https://415022.lp.tobiz.net/img/656x490/73cc4f2b5908d3c07b7ea3277c51b9ab.jpg',
  'https://415022.lp.tobiz.net/img/656x490/9657df4f5cd3a3caabcd7c1b0afc8a5e.jpg',
];
export default function About() {
  return (
    <div className="AboutSection">
      <h2 className="AboutTitle">{about.title}</h2>

      <div className="AboutSplit">
        <div className="AboutLeft">
          <p className="AboutText">{about.text}</p>
          <p className="AboutText">{about.listTitle}</p>

          <ul className="AboutList">
            {about.items.map((item) => (
              <li key={item.term}>
                <b>{item.term}</b> {item.desc}
              </li>
            ))}
          </ul>

          <a href={about.to} className="AboutButton">
            {about.button}
          </a>
        </div>

        <div className="AboutRight">
          <img className="AboutPhoto" src={about.image} alt="" />
        </div>
      </div>

      <div className="AboutPhotoRow">
        {photos.map((src) => (
          <img key={src} className="AboutSmallPhoto" src={src} alt="" />
        ))}
      </div>
    </div>
  );
}