import './style.css';

const oplata = {
  title: 'Оплата',
  listTitle: 'Формы оплаты',
  items: [
    { term: 'Наличный расчет.', desc: 'Встречается в небольших компаниях или при самовывозе.' },
    { term: 'Безналичный расчет.', desc: 'Основной способ для юридических лиц. Может включать предоплату, отсрочку платежа или постоплату.' },
    { term: 'Предоплата.', desc: 'Часто требуется при крупных заказах или работе с новыми клиентами.' },
  ],
  listTitle2: 'Условия предоплаты:',
  items2: [
    { desc: 'Например, 50% при оформлении заказа, остальная сумма — после доставки и проверки товара.' },
    { desc: 'Для постоянных клиентов возможна отсрочка платежа.' },
  ],
  listTitle3: 'Скидки и бонусы:',
  items3: [
    { desc: 'При заказе от определённого объёма (например, от 1 тонны) могут предоставляться скидки.' },
    { desc: 'Некоторые компании предлагают бонусные кг за каждые 10 тонн закупленного мяса.' },
  ],
  listTitle4: 'Документы:',
  items4: [
    { desc: 'При оплате обязательно оформление товарно-транспортной накладной, счёта-фактуры и ветеринарных сопроводительных документов (ВСД в системе «Меркурий»).' },
  ],
};

const photos = [
  'https://415022.lp.tobiz.net/img/788x1050/68f2dd19cae67709461c14f8fd9842eb.jpg',
];

export default function Oplata() {
  return (
    <div className="Body03">
      <h2 className="Title03">{oplata.title}</h2>

      <div className="Split03">
        <div className="Left03">
          <p className="Text03">{oplata.listTitle}</p>
          <ul className="List03">
            {oplata.items.map((item) => (
              <li key={item.term}>
                <b>{item.term}</b> {item.desc}
              </li>
            ))}
          </ul>

          <p className="Text03">{oplata.listTitle2}</p>
          <ul className="List03">
            {oplata.items2.map((item) => (
              <li key={item.desc}>{item.desc}</li>
            ))}
          </ul>

          <p className="Text03">{oplata.listTitle3}</p>
          <ul className="List03">
            {oplata.items3.map((item) => (
              <li key={item.desc}>{item.desc}</li>
            ))}
          </ul>

          <p className="Text03">{oplata.listTitle4}</p>
          <ul className="List03">
            {oplata.items4.map((item) => (
              <li key={item.desc}>{item.desc}</li>
            ))}
          </ul>
        </div>

        <div className="Right03">
          {photos.map((src) => (
            <img key={src} className="Photo03" src={src} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
}