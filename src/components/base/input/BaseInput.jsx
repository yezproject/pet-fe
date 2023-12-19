import { Input } from 'antd';
import PropTypes from 'prop-types';

const BaseInput = ({ type, id, placeholder, name, register, value }) => {
  return <Input type={type} id={id} placeholder={placeholder} name={name} value={value} {...register} />;
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
