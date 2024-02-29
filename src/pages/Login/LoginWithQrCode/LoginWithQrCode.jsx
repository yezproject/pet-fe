import { useNavigate } from 'react-router-dom';
import { QRCode } from 'antd';

import ic_logo from '@/assets/images/icons/ic_logo.svg';
import ic_phone from '@/assets/images/icons/ic_phone.svg';
import AuthTitle from '@/components/base/AuthTitle/AuthTitle.jsx';
import ButtonWhite from '@/components/base/button/ButtonWhite.jsx';
import NavigatorAuthContent from '@/components/base/NavigatorAuthContent/NavigatorAuthContent.jsx';
import Auth from '@/layout/Auth/index.jsx';

const LoginWithQrCode = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/login');
  };
  return (
    <Auth>
      <div className="mb-12">
        <AuthTitle content="Log in with QR code" description="Scan this code with the mobile app to log in instantly" />
      </div>
      <div className="flex flex-col flex-1 justify-between text-2xl text-orange-950">
        <div className="flex flex-col gap-y-7 ">
          <div className="flex flex-col gap-y-[18px] min-w-[437px]">
            <div className="w-[204px] h-[204px] mx-auto">
              <QRCode errorLevel="H" size="200" type="canvas" bordered value="https://ant.design/" icon={ic_logo} />
            </div>
          </div>
          <div className="relative flex items-center w-[306px] mx-auto h-[21px]">
            <div className="h-[1px] w-full bg-grayColor"></div>
            <div className="absolute flex items-center justify-center w-[42px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-whiteColor text-darkGrey font-inter leading-[21px] text-sm ">
              or
            </div>
          </div>
          <ButtonWhite
            content="Log in with email or phone number"
            icon={ic_phone}
            iconPosition="left"
            onClick={handleNavigate}
          />
        </div>
      </div>
      <NavigatorAuthContent content="Don’t have an account?" contentLink="create an account" to="/join" />
    </Auth>
  );
};
export default LoginWithQrCode;
