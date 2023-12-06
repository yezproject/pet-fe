import Home from "~/pages/Home";
import Transactions from "~/pages/Transactions";
import NotFound from "~/pages/NotFound";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/transactions", component: Transactions },
  { path: "*", component: NotFound },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
