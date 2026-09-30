import './style.css';
import { NavLink } from 'react-router-dom';

const header = [
   {
    id: 1,
    item: 'Главная' ,
    link: '/',
   },

   {
    id: 2,
    item: 'О компании',
    link: '',
   },

   {
    id: 3,
    item: 'Каталог',
    link: '/catalog',
   },

   {
    id: 4,
    item: 'Доставка и оплата',
    link: '',
   },

   {
    id: 5,
    item: 'Гарантии',
    link: '',
   },

   {
    id: 6,
    item: 'Контакты',
    link: '/kontakty',
   },

];



export default function Header() {
  return (
    <header className="header">
            <div className="header-top" >
                <div className="header-infa">
                    <div>Интернет-магазин орехов и семечек</div>
                    <div>Работаем в Москве и МО</div>
                    <div>Доставляем в регионы</div>
                </div>
                <img className="header-logo"  src="https://415022.lp.tobiz.net/img/350x0/0f37fba05b3c41fe5c5da1f593623cdc.png"/>
                <a className="header-number"> 8 822 121 22 33 ​</a>          
            </div>
            
    <nav className="header_nav">
      {header.map(({ id, link, item }) => (
        <NavLink
          key={id}
          to={link}
          className={({ isActive }) =>
            isActive ? 'headerLink active' : 'headerLink'
          }
        >
          {item}
        </NavLink>
      ))}
    </nav>
    </header>
  );
}
