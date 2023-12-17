import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { message } from 'antd';

import AuthTitle from '@/components/AuthTitle/AuthTitle.jsx';
import Button from '@/components/button/Button.jsx';
import CheckBox from '@/components/CheckBox/CheckBox.jsx';
import DropDownWithLabel from '@/components/DropDownWithLabel/DropDownWithLabel.jsx';
import InputWithLabel from '@/components/input/InputWithLabel.jsx';
import PasswordWithLabel from '@/components/input/PasswordWithLabel.jsx';
import NavigatorAuthContent from '@/components/NavigatorAuthContent/NavigatorAuthContent.jsx';
import { joinValidator } from '@/contains/auth-validator-config.js';
import { options } from '@/contains/registration-options';
import ic_mail from '@/images/icons/ic_mail.svg';
import Auth from '@/layout/Auth/index.jsx';

const Join = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [agreeEmailUpdate, setAgreeEmailUpdate] = useState(false);
  const [agreePrivacyPolicy, setAgreePrivacyPolicy] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(joinValidator),
  });
  const onSubmit = (data) => {
    if (agreeEmailUpdate && agreePrivacyPolicy) {
      console.log(data);
    } else {
      messageApi.open({
        type: 'warning',
        content: 'Please agree to our terms and conditions',
        duration: 2,
      });
    }
  };
  return (
    <Auth>
      <div className='mb-12'>
        <AuthTitle content='Sign up' description='Before we start, please enter your current location' />
      </div>
      <div className='flex flex-col flex-1 justify-between text-2xl text-orange-950'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col gap-y-7 '>
            <div className='flex flex-col gap-y-[18px] min-w-[437px]'>
              <DropDownWithLabel
                options={options}
                label='Country/Area of Residence'
                id='region'
                name='region'
                errors={errors}
                register={{
                  ...register('region'),
                }}
              />
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
            <div className='flex flex-col gap-y-[15px]'>
              <CheckBox
                label='I agree to receive email updates'
                checked={agreeEmailUpdate}
                onChange={(value) => {
                  setAgreeEmailUpdate(value);
                }}
              />
              <CheckBox
                label='I have read and agree to Terms of Service'
                checked={agreePrivacyPolicy}
                onChange={(value) => {
                  setAgreePrivacyPolicy(value);
                }}
              />
            </div>
            <Button content='Create account' type='submit' />
          </div>
        </form>
      </div>
      <NavigatorAuthContent content='Already registered?' contentLink='Sign in' to='/login' />
      {contextHolder}
    </Auth>
  );
};
export default Join;
