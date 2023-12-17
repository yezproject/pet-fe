import { useRoutes } from 'react-router-dom';

import ForgotPassword from '@/pages/ForgotPassword/ForgotPassword.jsx';
import Home from '@/pages/Home';
import Join from '@/pages/Join/Join.jsx';
import Login from '@/pages/Login/Login.jsx';
import LoginWithQrCode from '@/pages/Login/LoginWithQrCode/LoginWithQrCode.jsx';
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
      path: '/forgot-password',
      element: <ForgotPassword />,
    },
    {
      path: '/join',
      element: <Join />,
    },
    {
      path: '/login-qr',
      element: <LoginWithQrCode />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);
};

export { Routes };
