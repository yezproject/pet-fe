import PropTypes from 'prop-types';

const BaseInput = ({ type, id, placeholder, name, register, value }) => {
  return (
    <input
      className='outline-none w-full h-[21px] text-darkColor text-sm leading-[21px] font-normal font-inter'
      type={type}
      id={id}
      placeholder={placeholder}
      name={name}
      value={value}
      {...register}
    />
  );
};

BaseInput.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  register: PropTypes.object,
  errors: PropTypes.object,
};

export default BaseInput;
