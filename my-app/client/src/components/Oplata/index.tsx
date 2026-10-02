import './style.css';

const oplata = {
  title: 'Оплата',
  sections: [
    {
      title: 'Формы оплаты:',
      items: [
        { term: 'Наличный расчёт.', text: 'Встречается в небольших компаниях или при самовывозе.' },
        { term: 'Безналичный расчёт.', text: 'Основной способ для юридических лиц.' },
        { text: 'Может включать предоплату, отсрочку платежа или постоплату.' },
        { term: 'Предоплата.', text: 'Часто требуется при крупных заказах или работе с новыми клиентами.' },
      ],
    },
    {
      title: 'Условия предоплаты:',
      items: [
        { text: 'Например, 50% при оформлении заказа, остальная сумма — после доставки и проверки товара.' },
        { text: 'Для постоянных клиентов возможна отсрочка платежа.' },
      ],
    },
    {
      title: 'Скидки и бонусы:',
      items: [
        { text: 'При заказе от определённого объёма (например, от 1 тонны) могут предоставляться скидки.' },
        { text: 'Некоторые компании предлагают бонусные кг за каждые 10 тонн закупленного мяса.' },
      ],
    },
    {
      title: 'Документы:',
      items: [
        { text: 'При оплате обязательно оформление товарно-транспортной накладной, счёта-фактуры и ветеринарных сопроводительных документов (ВСД в системе «Меркурий»).' },
      ],
    },
  ],
  image: 'https://415022.lp.tobiz.net/img/788x1050/68f2dd19cae67709461c14f8fd9842eb.jpg',
};

export default function Oplata() {
  return (
    <section className="PaymentSection">
      <div className="PaymentInner">
        <h2 className="PaymentTitle">{oplata.title}</h2>

        <div className="PaymentSplit">
          <div className="PaymentVisual">
            <img src={oplata.image} alt="Орехи и сухофрукты" />
          </div>

          <div className="PaymentCopy">
            {oplata.sections.map((section) => (
              <section className="PaymentGroup" key={section.title}>
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
          </div>
        </div>
      </div>
    </section>
  );
}