import './style.css';

const guaranteeGroups = [
  {
    title: 'Сертификация:',
    items: [
      'ветеринарные свидетельства (ВСД в системе «Меркурий»);',
      'декларации соответствия ТР ТС 034/2013;',
      'протоколы лабораторных испытаний (микробиология, антибиотики, гормоны).',
    ],
  },
  {
    title: 'Контроль качества:',
    items: [
      'ежедневный мониторинг условий хранения на складе;',
      'проверка каждой партии перед отгрузкой (цвет, запах, структура);',
      'возможность выборочной проверки покупателем при приёмке.',
    ],
  },
  {
    title: 'Срок годности:',
    items: [
      <>охлаждённое мясо: <strong>5–7 суток</strong> при +2…+4 °C;</>,
      <>замороженное: <strong>до 12 месяцев</strong> при −18 °C.</>,
    ],
  },
  {
    title: 'Возврат/замена:',
    items: [
      'при выявлении брака — замена партии в течение 24 часов;',
      'компенсация стоимости при невозможности замены.',
    ],
  },
];

export default function Garantii() {
  return (
    <main className="GuaranteesPage">
      <section className="GuaranteesQuality">
        <div className="GuaranteesInner GuaranteesQualityInner">
          <h1>Гарантии качества</h1>
          <div className="GuaranteesQualityLayout">
            <div className="GuaranteesGroups">
              {guaranteeGroups.map((group) => (
                <section className="GuaranteesGroup" key={group.title}>
                  <h2>{group.title}</h2>
                  <ul>
                    {group.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
            <img
              className="GuaranteesQualityImage"
              src="https://415022.lp.tobiz.net/img/450x600/5abea5b3a7a6032835d390293f1c26dc.jpg"
              alt="Продукция и контроль качества"
            />
          </div>
        </div>
      </section>

      <section className="GuaranteesCertificates">
        <div className="GuaranteesInner GuaranteesCertificatesInner">
          <h2>Наши сертификаты</h2>
          <p>Ветеринарные сопроводительные документы (ВСД)</p>
          <div className="GuaranteesCertificateGrid">
            <img src="https://415022.lp.tobiz.net/img/400x580/eefc3d32b7815d34394117f0c7eff2d5.jpg" alt="Сертификат 1" loading="lazy" />
            <img src="https://415022.lp.tobiz.net/img/400x580/16043b25f058b0a078e41f4ae40767d4.jpg" alt="Сертификат 2" loading="lazy" />
            <img src="https://415022.lp.tobiz.net/img/400x580/e9026b517b1908ec43491a3ebbe0b719.jpg" alt="Сертификат 3" loading="lazy" />
            <img src="https://415022.lp.tobiz.net/img/400x580/cfc0617fe70a1df4213a6f2b1f4fad07.jpg" alt="Сертификат 4" loading="lazy" />
            <img src="https://415022.lp.tobiz.net/img/400x580/e3cb1a2b5fc2f4a77eebf6dd7356b20f.jpg" alt="Сертификат 5" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="GuaranteesDocuments">
        <div className="GuaranteesInner GuaranteesDocumentsInner">
          <h2>Документальное сопровождение</h2>
          <div className="GuaranteesDocumentsLayout">
            <img
              className="GuaranteesDocumentsImage"
              src="https://415022.lp.tobiz.net/img/450x600/6af99fe7ab9c0264da063f0d7cba190b.jpg"
              alt="Документальное сопровождение поставки"
              loading="lazy"
            />
            <div className="GuaranteesDocumentsCopy">
              <ul>
                <li>Договор поставки с чёткими сроками и ответственностью.</li>
                <li>Товарная накладная (ТОРГ‑12).</li>
                <li>Счёт‑фактура.</li>
                <li>Ветеринарные сопроводительные документы (ВСД).</li>
                <li>Протокол испытаний (по запросу).</li>
                <li>Сертификат соответствия.</li>
              </ul>
              <h3>Санитарные нормы:</h3>
              <ul>
                <li>ежедневная дезинфекция помещений;</li>
                <li>контроль грызунов и насекомых;</li>
                <li>раздельные зоны для сырья и готовой продукции.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
