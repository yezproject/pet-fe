import { Input } from 'antd';

const InputWithLabel = ({ label, id, prefix, suffix, errors, type, placeholder, name, register }) => {
  return (
    <div className='flex flex-col gap-y-[12px]'>
      <label className='text-darkColor text-xs leading-[18px] font-bold font-inter' htmlFor={id}>
        {label}
      </label>
      <div>
        <Input
          placeholder={placeholder}
          type={type}
          id={id}
          status={errors[name] && 'error'}
          suffix={suffix}
          prefix={prefix}
          {...register}
        />
        {errors[name] && (
          <span className='text-sm leading-[21px] text-pinkColor font-inter'>{errors[name].message}</span>
        )}
      </div>
    </div>
  );
};

export default InputWithLabel;
