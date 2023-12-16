import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import AuthTitle from '@/components/AuthTitle/AuthTitle.jsx';
import Button from '@/components/button/Button.jsx';
import ButtonWhite from '@/components/button/ButtonWhite.jsx';
import CheckBox from '@/components/CheckBox/CheckBox.jsx';
import InputWithLabel from '@/components/input/InputWithLabel.jsx';
import PasswordWithLabel from '@/components/input/PasswordWithLabel.jsx';
import NavigatorAuthContent from '@/components/NavigatorAuthContent/NavigatorAuthContent.jsx';
import { loginValidator } from '@/contains/auth-validator-config.js';
import ic_mail from '@/images/icons/ic_mail.svg';
import ic_qr from '@/images/icons/ic_qr-code.svg';
import Auth from '@/layout/Auth/index.jsx';

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(loginValidator),
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Auth>
      <div className='mb-12'>
        <AuthTitle content='Sign in' description='Enter your account details or use QR code' />
      </div>
      <div className='flex flex-col flex-1 justify-between text-2xl text-orange-950'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col gap-y-7 '>
            <div className='flex flex-col gap-y-[18px] min-w-[437px]'>
              <InputWithLabel
                type='email'
                placeholder='Email'
                name='email'
                label='Email'
                icon={ic_mail}
                errors={errors}
                register={{
                  ...register('email'),
                }}
                id='email'
              />
              <PasswordWithLabel
                label='Password'
                id='password'
                name='password'
                errors={errors}
                register={{
                  ...register('password'),
                }}
              />
            </div>
            <div className='flex justify-between items-center '>
              <CheckBox label='Remember me' />
              <Link
                to='reset'
                className='font-inter text-xs font-bold leading-[18px] text-darkColor hover:text-primaryColor'
              >
                Recover password
              </Link>
            </div>
            <Button content='Sign in' type='submit' />
            <div className='relative flex items-center w-[306px] mx-auto h-[21px]'>
              <div className='h-[1px] w-full bg-grayColor'></div>
              <div className='absolute flex items-center justify-center w-[42px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-whiteColor text-darkGrey font-inter leading-[21px] text-sm '>
                or
              </div>
            </div>
            <ButtonWhite content='Login with QR code' icon={ic_qr} iconPosition='left' />
          </div>
        </form>
      </div>
      <NavigatorAuthContent content='Don’t have an account?' contentLink='create an account' to='/join' />
    </Auth>
  );
};
export default Login;
