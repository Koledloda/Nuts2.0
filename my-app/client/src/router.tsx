import { createBrowserRouter } from 'react-router-dom';
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

export const router = createBrowserRouter([
  {
    path: '/catalog/eczod',
    element: <CatalogEczod/>,
  },
  {
    path: '/catalog/poleznie',
    element: <CatalogPoleznie/>,
  },
  {
    path: '/catalog/premium',
    element: <CatalogPremium/>,
  },
  {
    path: '/catalog/popular',
    element: <CatalogPopular />,
  },
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/catalog',
    element: <Catalog />,
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
]);