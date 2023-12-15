import { useRoutes } from 'react-router-dom';

import Home from '~/pages/Home/index.jsx';
import NotFound from '~/pages/NotFound/index.jsx';
import Transactions from '~/pages/Transactions/index.jsx';

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
