import { createBrowserRouter } from 'react-router-dom';
import Main from './pages/Main';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },

  {
    path: '/catalog',
    element: <div>catalog</div>,
  },
  {
    path: '/o-nas',
    element:<div>o-nas</div>,
  },
  {
    path: '/portfolio',
    element: <div>portfolio</div>,
  },
  {
    path: '/otzyvy',
    element: <div>otzyvy</div>,
  },
  {
    path: '/kontakty',
    element: <div>kontakty</div>,
  },
]);