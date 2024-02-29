import { Input } from 'antd';

import ic_logo from '@/assets/images/icons/ic_logo.svg';
import ic_notify from '@/assets/images/icons/ic_notify.svg';
import ic_search from '@/assets/images/icons/ic_search.svg';
import Icon from '@/components/base/Icon/Icon.jsx';

function Header() {
  return (
    <div className="flex justify-between items-center h-[84px] px-[70px]">
      <div className="text-[18px] font-bold">Transactions</div>
      <div className="flex items-center">
        <div>
          <Input
            className="input-search"
            placeholder={'Type to search …'}
            type={'text'}
            prefix={<Icon src={ic_search} paddingBlock={'13px'} />}
          />
        </div>
        <div className="ml-[8px] mr-[16px] p-[11px] border border-[#CFDBD5B2] rounded-[8px] cursor-pointer">
          <img src={ic_notify} alt="notify" />
        </div>
        <div>
          <img src={ic_logo} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Header;
