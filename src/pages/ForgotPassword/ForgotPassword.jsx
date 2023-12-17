import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import AuthTitle from '@/components/AuthTitle/AuthTitle.jsx';
import Button from '@/components/button/Button.jsx';
import InputWithLabel from '@/components/input/InputWithLabel.jsx';
import NavigatorAuthContent from '@/components/NavigatorAuthContent/NavigatorAuthContent.jsx';
import { forgotPasswordValidator } from '@/contains/auth-validator-config.js';
import ic_mail from '@/images/icons/ic_mail.svg';
import Auth from '@/layout/Auth/index.jsx';

const ForgotPassword = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(forgotPasswordValidator),
  });
  const onSubmit = (data) => {
    console.log(data);
  };
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
            </div>
            <Button content='Start recovery' type='submit' />
          </div>
        </form>
      </div>
      <NavigatorAuthContent content='Don’t have an account?' contentLink='create an account' to='/join' />
    </Auth>
  );
};
export default ForgotPassword;
