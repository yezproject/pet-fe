import PropTypes from 'prop-types';

import BaseInput from '@/components/input/BaseInput.jsx';

const InputWithLabel = ({ label, id, icon, errors, type, placeholder, name, value, register }) => {
  return (
    <div className='flex flex-col gap-y-[12px]'>
      <label className='text-darkColor text-xs leading-[18px] font-bold font-inter' htmlFor={id}>
        {label}
      </label>
      <div>
        <div className='flex items-center w-full px-5 py-[22px] border-grayColor rounded-lg border-[1px] overflow-hidden'>
          <BaseInput id={id} type={type} placeholder={placeholder} name={name} value={value} register={register} />
          {icon && <img className='h-[18px] w-[18px] object-contain ml-[10px]' src={icon} alt={`icon_${name}`} />}
        </div>
        {errors[name] && (
          <span className='text-sm leading-[21px] text-pinkColor font-inter'>{errors[name].message}</span>
        )}
      </div>
    </div>
  );
};

InputWithLabel.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  icon: PropTypes.string,
  register: PropTypes.object,
  errors: PropTypes.object,
};
export default InputWithLabel;
