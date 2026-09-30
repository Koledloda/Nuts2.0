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

const hits = [
    {
        id: 1,
        img: 'https://415022.lp.tobiz.net/img/400x400/cd61617b45acfe7e66d13b9646d8693e.jpg',
        title: 'Семена конопли',
        description: 'Питательные зёрнышки с лёгким ореховым привкусом. Добавляют в каши, йогурты, салаты и выпечку.',
        price: '1 040.00 руб.',
    },
    {
        id: 2,
        img: 'https://415022.lp.tobiz.net/img/400x400/d1fc5c5c16c5adc1f23093d1cd5f1949.jpg',
        title: 'Кокосовые чипсы',
        description: 'Сладкие хрустящие ломтики с тропическим ароматом. Подходят для десертов, гранолы и полезных перекусов.',
        price: '899.00 руб.',
    },
    {
        id: 3,
        img: 'https://415022.lp.tobiz.net/img/400x400/c1bb60bff94721d00526ea75431f6a30.jpg',
        title: 'Макадамия',
        description: 'Самый дорогой орех с нежным сливочным вкусом. Прекрасно сочетается с шоколадом и используется в десертах.',
        price: '630.00 руб.',
    },
    {
        id: 4,
        img: 'https://415022.lp.tobiz.net/img/400x400/8f1b3b2bc1f31a964f535fd68292f15a.jpg',
        title: 'Бразильский орех',
        description: 'Крупные маслянистые орехи с кремовой текстурой. Рекордсмен по содержанию селена, полезного для иммунитета.',
        price: '790.00 руб.',
    },
];

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
        <Eczod hits={hits} />
        <Vybor />
        <Highquality />
        <Bigvybor />
        <Otzyve />
        <Sup />
        <Footer />
    </React.Fragment>
  );
}