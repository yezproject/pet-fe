import { Controller, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'antd';

import ic_mail from '@/assets/images/icons/ic_mail.svg';
import ic_qr from '@/assets/images/icons/ic_qr-code.svg';
import AuthTitle from '@/components/base/AuthTitle/AuthTitle.jsx';
import CheckBox from '@/components/base/CheckBox/CheckBox.jsx';
import Icon from '@/components/base/Icon/Icon.jsx';
import InputWithLabel from '@/components/base/input/InputWithLabel.jsx';
import PasswordWithLabel from '@/components/base/input/PasswordWithLabel.jsx';
import NavigatorAuthContent from '@/components/base/NavigatorAuthContent/NavigatorAuthContent.jsx';
import { loginValidator } from '@/contains/auth-validator-config.js';
import Auth from '@/layout/Auth/index.jsx';

const Login = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(loginValidator),
  });
  const onSubmit = (data) => {
    console.log(data, '1');
  };
  const handleNavigate = () => {
    navigate('/login-qr');
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
              <Controller
                name='email'
                control={control}
                render={({ field }) => (
                  <InputWithLabel
                    label='Email'
                    id='email'
                    placeholder='Enter your email'
                    type='email'
                    name='email'
                    suffix={<Icon src={ic_mail} />}
                    errors={errors}
                    register={{
                      ...field,
                      onChange: (value) => field.onChange(value),
                      onBlur: () => field.onBlur(),
                    }}
                  />
                )}
              />
              <Controller
                name='password'
                control={control}
                render={({ field }) => (
                  <PasswordWithLabel
                    label='Password'
                    id='password'
                    placeholder='Enter your password'
                    name='password'
                    errors={errors}
                    register={{
                      ...field,
                      onChange: (value) => field.onChange(value),
                      onBlur: () => field.onBlur(),
                    }}
                  />
                )}
              />
            </div>
            <div className='flex justify-between items-center '>
              <CheckBox label='Remember me' />
              <Link
                to='/forgot-password'
                className='font-inter text-xs font-bold leading-[18px] text-darkColor hover:text-primaryColor'
              >
                Recover password
              </Link>
            </div>
            <Button type='primary' htmlType='submit'>
              Sign in
            </Button>
            <div className='relative flex items-center w-[306px] mx-auto h-[21px]'>
              <div className='h-[1px] w-full bg-grayColor'></div>
              <div className='absolute flex items-center justify-center w-[42px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-whiteColor text-darkGrey font-inter leading-[21px] text-sm '>
                or
              </div>
            </div>
            <Button icon={<Icon src={ic_qr} />} onClick={handleNavigate}>
              Log in with QR code
            </Button>
          </div>
        </form>
      </div>
      <NavigatorAuthContent content='Don’t have an account?' contentLink='create an account' to='/join' />
    </Auth>
  );
};
export default Login;
