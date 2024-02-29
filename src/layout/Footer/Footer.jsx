import ic_dark_mode from '@/assets/images/icons/ic_dark_mode.svg';
import ic_earth from '@/assets/images/icons/ic_earth.svg';

const Footer = () => {
  return (
    <div className="flex justify-between items-center h-[86px] px-[70px]">
      <div className="flex">
        <div className="mr-[22px] text-[12px] font-bold">Privacy Policy</div>
        <div className="mr-[22px] text-[12px] font-bold">License</div>
        <div className="mr-[22px] text-[12px] font-bold">API</div>
        <div className="mr-[22px] text-[12px] font-bold">Help Center</div>
        <div className="text-[12px] font-[500] text-[#747A80]">© 2022 All rights reserved</div>
      </div>
      <div className="flex items-center">
        <div className="flex">
          <span className="mr-[6px] text-[14px] font-bold">English</span>
          <img src={ic_earth} alt="icon" />
        </div>
        <div className="flex justify-center items-center ml-[18px] w-[46px] h-[46px] border border-[#CFDBD5B2] rounded-[8px] cursor-pointer">
          <img src={ic_dark_mode} alt="icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
