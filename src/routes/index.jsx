import { useRoutes } from 'react-router-dom';

import Home from '~/pages/Home';
import NotFound from '~/pages/NotFound';
import Transactions from '~/pages/Transactions';

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
      path: '*',
      element: <NotFound />,
    },
  ]);
};

export { Routes };
