import { createBrowserRouter } from 'react-router-dom';
import Main from './pages/Main';
import Kontakty from './pages/Kontakty';
import About from './pages/About';
import DostavkaOplata from './pages/DostavkaOplata';

export const router = createBrowserRouter([
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
    path: '/kontakty',
    element: <Kontakty />,
  },
]);