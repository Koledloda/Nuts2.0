import * as React from 'react';
import Header from '../components/Header';
import Start from '../components/Start';
import Hits from '../components/Hits';
import Premium from '../components/Premium';
import Polza from '../components/Polza';
import Eczod from '../components/Eczod';
import Vybor from '../components/Vybor';
import Highquality from '../components/Highquality';
import Bigvybor from '../components/Bigvybor';
import  Otzyve  from '../components/Otzyve';
import Sup from '../components/Sup';
import Footer from '../components/Footer';


export default function Main() {
  return (
    <React.Fragment>
      <Header/>
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
        <Premium />
        <Polza />
        <Eczod />
        <Vybor />
        <Highquality />
        <Bigvybor />
        <Otzyve />
        <Sup />
        <Footer />
    </React.Fragment>
  );
}