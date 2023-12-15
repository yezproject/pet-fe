import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import Transactions from '@/pages/Transactions';

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/transactions', component: Transactions },
  { path: '*', component: NotFound },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
