import { Navigate, useRoutes } from 'react-router-dom';

import ForgotPassword from '@/pages/ForgotPassword/ForgotPassword.jsx';
import Join from '@/pages/Join/Join.jsx';
import Login from '@/pages/Login/Login.jsx';
import LoginWithQrCode from '@/pages/Login/LoginWithQrCode/LoginWithQrCode.jsx';
import NotFound from '@/pages/NotFound';

import Accounts from './layout/Accounts/Accounts';
import Dashboard from './layout/Dashboard/Dashboard';
import Main from '@/layout/main/Main';
import Transactions from './layout/Transactions/Transaction';

const Routes = () => {
  return useRoutes([
    {
      path: '/',
      element: <Navigate to="/main/transactions" />,
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
      path: '/main',
      element: <Main />,
      children: [
        {
          path: 'dashboard',
          element: <Dashboard />,
        },
        {
          path: 'accounts',
          element: <Accounts />,
        },
        {
          path: 'transactions',
          element: <Transactions />,
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
