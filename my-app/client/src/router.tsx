import { createBrowserRouter } from 'react-router-dom';
import { CartLayout } from './components/Cart';
import Main from './pages/Main';
import Kontakty from './pages/Kontakty';
import Catalog from './pages/Catalog';
import About from './pages/About';
import DostavkaOplata from './pages/DostavkaOplata';
import CatalogPopular from './pages/CatalogPopular';
import CatalogPremium from './pages/CatalogPremium';
import CatalogPoleznie from './pages/CatalogPoleznie';
import CatalogEczod from './pages/CatalogEczod';
import Garantii from './pages/Garantii';
import Products from './pages/Products';
import Admin from './pages/Admin';

export const router = createBrowserRouter([
  {
    element: <CartLayout/>,
    children:[
    {
      path: '/',
      element: <Main />,
    },
    {
      path: '/product/:slug',
      element: <Products />,
    },
    {
      path: '/catalog',
      element: <Catalog />,
    },
    {
      path: '/catalog/eczod',
      element: <CatalogEczod />,
    },
    {
      path: '/catalog/poleznie',
      element: <CatalogPoleznie />,
    },
    {
      path: '/catalog/premium',
      element: <CatalogPremium />,
    },
    {
      path: '/catalog/popular',
      element: <CatalogPopular />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/dostavkaOplata',
      element: <DostavkaOplata />,
    },
    {
      path: '/garantii',
      element: <Garantii />,
    },
    {
      path: '/kontakty',
      element: <Kontakty />,
    },
    {
    path: '/products/:id',
    element: <Products/>,
    },
  ],
  {
    path: '/admin',
    element: <Admin />
  }
},
]);