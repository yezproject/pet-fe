import { useRoutes } from 'react-router-dom';

import Home from '@/pages/Home';
import Login from '@/pages/Login/Login.jsx';
import NotFound from '@/pages/NotFound';
import Transactions from '@/pages/Transactions';

const Routes = () => {
  return useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/transactions',
      element: <Transactions />,
      children: [
        {
          path: ':id',
          element: <NotFound />,
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);
};

export { Routes };
