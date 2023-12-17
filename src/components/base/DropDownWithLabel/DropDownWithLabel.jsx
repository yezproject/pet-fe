import PropTypes from 'prop-types';

const DropDownWithLabel = ({ label, id, name, options, register, errors }) => {
  return (
    <div className='flex flex-col gap-y-[12px]'>
      <label className='text-darkColor text-xs leading-[18px] font-bold font-inter' htmlFor={id}>
        {label}
      </label>
      <div>
        <div className='flex items-center w-full px-5 py-[22px] border-grayColor rounded-lg border-[1px] overflow-hidden'>
          <select
            id={id}
            className='outline-none w-full h-[21px] text-darkColor text-sm leading-[21px] font-normal font-inter'
            {...register}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        {errors[name] && (
          <span className='text-sm leading-[21px] text-pinkColor font-inter'>{errors[name].message}</span>
        )}
      </div>
    </div>
  );
};

DropDownWithLabel.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  register: PropTypes.object,
  errors: PropTypes.object,
};

export default DropDownWithLabel;
