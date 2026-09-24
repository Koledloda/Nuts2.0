import * as React from 'react';
import Start from '../components/Start';
import Hits from '../components/Hits';

export default function Main() {
  return (
    <React.Fragment>
      <Start
            title='Интернет-магазин орехов и семечек'
            highlight='"Ореховый Рай"'
            text='Насладитесь природной пользой! Свежие орехи и семечки с быстрой доставкой. Скидки на крупные заказы до 25%'
            list={[
                '100% натуральные продукты',
                'Собственный контроль качества',
                'Широкий ассортимент: от миндаля до тыквенных семечек',
                'Выгодные оптовые цены',
            ]}
            button='Перейти в каталог'
        />
        <Hits />
    </React.Fragment>
  );
}