import { Outlet, useNavigate } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import ic_accounts from '@/assets/images/icons/ic_accounts.svg';
import ic_add from '@/assets/images/icons/ic_add.svg';
import ic_currency_usd from '@/assets/images/icons/ic_currency_usd.svg';
import ic_currency_vnd from '@/assets/images/icons/ic_currency_vnd.svg';
import ic_dashboard from '@/assets/images/icons/ic_dashboard.svg';
import ic_logo from '@/assets/images/icons/ic_logo.svg';
import ic_settings from '@/assets/images/icons/ic_settings.svg';
import ic_transactions from '@/assets/images/icons/ic_transactions.svg';
import Icon from '@/components/base/Icon/Icon.jsx';
import Footer from '@/layout/Footer/Footer.jsx';
import Header from '@/layout/Header/Header.jsx';

const getItem = (label, key, icon, children, type) => {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
};

const items = [
  getItem(
    'Navigation',
    'grp1',
    null,
    [
      getItem('Dashboard', '1', <Icon src={ic_accounts} />),
      getItem('Accounts', '2', <Icon src={ic_dashboard} />),
      getItem('Transactions', '3', <Icon src={ic_transactions} />),
    ],
    'group',
  ),
  getItem(
    'Balances',
    'grp2',
    null,
    [
      getItem('100,050.75 USD', '4', <Icon src={ic_currency_usd} />),
      getItem('2310.40 EUR', '5', <Icon src={ic_currency_vnd} />),
      getItem('Open a balance', '6', <Icon src={ic_add} />),
    ],
    'group',
  ),
];

const Main = () => {
  const navigate = useNavigate();
  const onClick = (e) => {
    if (e.key === '1') navigate('dashboard');
    if (e.key === '2') navigate('accounts');
    if (e.key === '3') navigate('transactions');
  };

  return (
    <Layout hasSider>
      <div>
        <div className="w-full pt-[20px] pl-[32px] bg-[#ebf0f0]">
          <img src={ic_logo} alt="icon" className="w-[44px] h-[44px] cursor-pointer" />
        </div>
        <Menu defaultSelectedKeys={['3']} items={items} onClick={onClick} />
        <div className="flex items-center w-full h-[48px] pb-[21px] pl-[30px] bg-[#ebf0f0]">
          <img src={ic_settings} alt="icon" className="w-[22px] h-[22px] cursor-pointer" />
          <span className="h-[21px] ml-[14px] font-bold text-[#747A80] cursor-pointer">Profile Settings</span>
        </div>
      </div>
      <Layout>
        <Header />
        <Outlet />
        <Footer />
      </Layout>
    </Layout>
  );
};
export default Main;
