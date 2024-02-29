import ic_calendar from '@/assets/images/icons/ic_calendar.svg';
import ic_convert from '@/assets/images/icons/ic_convert.svg';
import ic_payment from '@/assets/images/icons/ic_payment.svg';
import ic_request from '@/assets/images/icons/ic_request.svg';
import ic_search from '@/assets/images/icons/ic_search.svg';
import ic_transfer from '@/assets/images/icons/ic_transfer.svg';
import ButtonTransparent from '@/components/base/button/ButtonTransparent.jsx';

function TransactionMenu() {
  return (
    <div className="flex justify-between w-full px-[70px]">
      <div className="flex gap-x-7">
        <ButtonTransparent content="Transfer" iconPosition="left" icon={ic_transfer} />
        <ButtonTransparent content="Make a Payment" iconPosition="left" icon={ic_payment} />
        <ButtonTransparent content="Convert" iconPosition="left" icon={ic_convert} />
        <ButtonTransparent content="Request" iconPosition="left" icon={ic_request} />
      </div>
      <div className="flex gap-x-7">
        <ButtonTransparent content="Search" iconPosition="left" icon={ic_search} />
        <ButtonTransparent content="August 2022" iconPosition="left" icon={ic_calendar} />
      </div>
    </div>
  );
}

export default TransactionMenu;
