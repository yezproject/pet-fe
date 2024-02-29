import { Input } from 'antd';

import ic_eye_hide from '@/assets/images/icons/ic_eye_hide.svg';
import ic_eye_show from '@/assets/images/icons/ic_eye_show.svg';
import Icon from '@/components/base/Icon/Icon.jsx';

const PasswordWithLabel = ({ label, id, errors, placeholder, name, register }) => {
  return (
    <div className="flex flex-col gap-y-[12px]">
      <label className="text-darkColor text-xs leading-[18px] font-bold font-inter" htmlFor={id}>
        {label}
      </label>
      <div>
        <Input.Password
          placeholder={placeholder}
          id={id}
          status={errors[name] && 'error'}
          {...register}
          iconRender={(visible) => (visible ? <Icon src={ic_eye_hide} /> : <Icon src={ic_eye_show} />)}
        />
        {errors[name] && (
          <span className="text-sm leading-[21px] text-pinkColor font-inter">{errors[name].message}</span>
        )}
      </div>
    </div>
  );
};
export default PasswordWithLabel;
