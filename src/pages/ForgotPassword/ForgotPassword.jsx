import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'antd';

import ic_mail from '@/assets/images/icons/ic_mail.svg';
import AuthTitle from '@/components/base/AuthTitle/AuthTitle.jsx';
import Icon from '@/components/base/Icon/Icon.jsx';
import InputWithLabel from '@/components/base/input/InputWithLabel.jsx';
import NavigatorAuthContent from '@/components/base/NavigatorAuthContent/NavigatorAuthContent.jsx';
import { forgotPasswordValidator } from '@/contains/auth-validator-config.js';
import Auth from '@/layout/Auth/index.jsx';

const ForgotPassword = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(forgotPasswordValidator),
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  // const Icon = ({ src, onClick }) => {
  //   const handleClick = () => {
  //     onClick();
  //   };
  //   return (
  //     <img className='h-[18px] w-[18px] object-contain cursor-pointer' src={src} alt='icon' onClick={handleClick} />
  //   );
  // };
  return (
    <Auth>
      <div className='mb-12 mt-[104px]'>
        <AuthTitle
          content='Forgot password?'
          description='Enter your email below, you will receive an email with instructions on how to reset your password in a few minutes. You can also set a new password if you’ve never set one before.'
        />
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
            </div>
            <Button type='primary' htmlType='submit'>
              Sign in
            </Button>
          </div>
        </form>
      </div>
      <NavigatorAuthContent content='Don’t have an account?' contentLink='create an account' to='/join' />
    </Auth>
  );
};
export default ForgotPassword;
