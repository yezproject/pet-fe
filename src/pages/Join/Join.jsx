import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { message } from 'antd';

import ic_mail from '@/assets/images/icons/ic_mail.svg';
import AuthTitle from '@/components/base/AuthTitle/AuthTitle.jsx';
import Button from '@/components/base/button/Button.jsx';
import CheckBox from '@/components/base/CheckBox/CheckBox.jsx';
import InputWithLabel from '@/components/base/input/InputWithLabel.jsx';
import PasswordWithLabel from '@/components/base/input/PasswordWithLabel.jsx';
import NavigatorAuthContent from '@/components/base/NavigatorAuthContent/NavigatorAuthContent.jsx';
import { joinValidator } from '@/contains/auth-validator-config.js';
import Auth from '@/layout/Auth/index.jsx';
import { signUp } from '@/services/join-service';

const Join = () => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const [agreeEmailUpdate, setAgreeEmailUpdate] = useState(false);
  const [agreePrivacyPolicy, setAgreePrivacyPolicy] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(joinValidator),
  });
  const onSubmit = async (data) => {
    if (agreeEmailUpdate && agreePrivacyPolicy) {
      const res = await signUp(data);
      if (res.status === 400) {
        messageApi.open({
          type: 'warning',
          content: 'This email has been existed',
          duration: 2,
        });
      } else {
        navigate('/login');
      }
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
      <div className="mb-12">
        <AuthTitle content="Sign up" description="Before we start, please enter your current location" />
      </div>
      <div className="flex flex-col flex-1 justify-between text-2xl text-orange-950">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-y-7 ">
            <div className="flex flex-col gap-y-[18px] min-w-[437px]">
              <Controller
                name="fullName"
                control={control}
                render={({ field }) => (
                  <InputWithLabel
                    type="text"
                    placeholder="Full Name"
                    name="fullName"
                    label="Full Name"
                    errors={errors}
                    register={{
                      ...field,
                      onChange: (value) => field.onChange(value),
                      onBlur: () => field.onBlur(),
                    }}
                    id="fullName"
                  />
                )}
              />
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <InputWithLabel
                    type="email"
                    placeholder="Email"
                    name="email"
                    label="Email"
                    icon={ic_mail}
                    errors={errors}
                    register={{
                      ...field,
                      onChange: (value) => field.onChange(value),
                      onBlur: () => field.onBlur(),
                    }}
                    id="email"
                  />
                )}
              />
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <PasswordWithLabel
                    label="Password"
                    placeholder="Password"
                    id="password"
                    name="password"
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
            <div className="flex flex-col gap-y-[15px]">
              <CheckBox
                label="I agree to receive email updates"
                checked={agreeEmailUpdate}
                onChange={(value) => {
                  setAgreeEmailUpdate(value);
                }}
              />
              <CheckBox
                label="I have read and agree to Terms of Service"
                checked={agreePrivacyPolicy}
                onChange={(value) => {
                  setAgreePrivacyPolicy(value);
                }}
              />
            </div>
            <Button content="Create account" type="submit" />
          </div>
        </form>
      </div>
      <NavigatorAuthContent content="Already registered?" contentLink="Sign in" to="/login" />
      {contextHolder}
    </Auth>
  );
};
export default Join;
