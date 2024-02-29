import PropTypes from 'prop-types';

const ButtonWhite = ({ type, content, icon, iconPosition, onClick }) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <button
      type={type}
      className=" w-full py-4 rounded-lg border border-outlineColor text-[14px] font-inter font-bold leading-[21px] text-darkColor  hover:text-primaryColor transition duration-300 ease-linear"
      onClick={handleClick}
    >
      <div className="flex items-center justify-center">
        {icon && iconPosition === 'left' && (
          <img className="h-[18px] w-[18px] object-contain mr-2" src={icon} alt={`icon_${content}`} />
        )}
        {content}
        {icon && iconPosition === 'right' && (
          <img className="h-[18px] w-[18px] object-contain mr-2" src={icon} alt={`icon_${content}`} />
        )}
      </div>
    </button>
  );
};

ButtonWhite.propTypes = {
  type: PropTypes.string,
  content: PropTypes.string.isRequired,
  icon: PropTypes.string,
  iconPosition: PropTypes.string,
  onClick: PropTypes.func,
};

ButtonWhite.defaultProps = {
  type: 'button',
  icon: '',
  iconPosition: 'left',
  onClick: () => {},
};
export default ButtonWhite;
