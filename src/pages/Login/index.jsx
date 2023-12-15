import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import InputWithLabel from '@/components/input/InputWithLabel.jsx';
import { loginValidator } from '@/contains/auth-validator-config.js';
import ic_logo from '@/images/icons/ic_logo.svg';
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
      <div className='text-2xl text-orange-950'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col gap-y-[18px] min-w-[437px]'>
            <InputWithLabel
              type='email'
              placeholder='Email'
              name='email'
              label='Email'
              icon={ic_logo}
              errors={errors}
              register={{
                ...register('email'),
              }}
              id='email'
            />
            <InputWithLabel
              type='password'
              placeholder='Password'
              name='password'
              label='Password'
              errors={errors}
              register={{
                ...register('password'),
              }}
              id='password'
            />
          </div>

          <button type='submit'>Login</button>
        </form>
      </div>
    </Auth>
  );
};
export default Login;
