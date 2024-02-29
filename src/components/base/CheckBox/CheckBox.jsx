import { useState } from 'react';
import PropTypes from 'prop-types';

const CheckBox = ({ label, onChange }) => {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
    onChange(!isChecked);
  };
  return (
    <label className="flex items-center gap-x-[10px] cursor-pointer">
      <input type="checkbox" className="hidden" checked={isChecked} onChange={handleCheckboxChange} />
      <div
        className={`w-5 h-5 rounded flex items-center justify-center transition duration-300 ease-in-out ${
          isChecked ? 'bg-primaryColor' : 'bg-grayColor'
        }`}
      >
        {isChecked && (
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="8" viewBox="0 0 11 8" fill="none">
            <path
              d="M3.6437 7.84288L0.157101 4.35628C-0.0523671 4.14681 -0.0523671 3.80718 0.157101 3.59769L0.915668 2.8391C1.12514 2.62961 1.46479 2.62961 1.67426 2.8391L4.023 5.18782L9.05374 0.157101C9.26321 -0.0523671 9.60286 -0.0523671 9.81233 0.157101L10.5709 0.915689C10.7804 1.12516 10.7804 1.46479 10.5709 1.67428L4.40229 7.8429C4.1928 8.05237 3.85317 8.05237 3.6437 7.84288Z"
              fill="white"
            />
          </svg>
        )}
      </div>
      <span className="font-inter text-xs font-bold leading-[18px] text-darkGrey">{label}</span>
    </label>
  );
};

CheckBox.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
};

CheckBox.defaultProps = {
  label: 'Checkbox label',
  onChange: () => {},
};
export default CheckBox;
