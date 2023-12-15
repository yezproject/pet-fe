import { useState } from 'react';
import PropTypes from 'prop-types';

import BaseInput from '@/components/input/BaseInput.jsx';
import ic_show from '@/images/icons/ic_eye_hide.svg';
import ic_hide from '@/images/icons/icon_eye_show.svg';
const PasswordWithLabel = ({ label, id, errors, name, value, register }) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className='flex flex-col gap-y-[12px]'>
      <label className='text-darkColor text-xs leading-[18px] font-bold font-inter' htmlFor={id}>
        {label}
      </label>
      <div>
        <div className='flex items-center w-full px-5 py-[22px] border-grayColor rounded-lg border-[1px] overflow-hidden'>
          <BaseInput
            id={id}
            type={showPassword ? 'text' : 'password'}
            placeholder='Enter your password'
            name={name}
            value={value}
            register={register}
          />
          <img
            className='h-[18px] w-[18px] object-contain ml-[10px] cursor-pointer'
            src={showPassword ? ic_show : ic_hide}
            alt={`icon_${name}`}
            onClick={togglePasswordVisibility}
          />
        </div>
        {errors[name] && (
          <span className='text-sm leading-[21px] text-pinkColor font-inter'>{errors[name].message}</span>
        )}
      </div>
    </div>
  );
};

PasswordWithLabel.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  errors: PropTypes.object,
  name: PropTypes.string,
  value: PropTypes.string,
  register: PropTypes.object,
};
export default PasswordWithLabel;
