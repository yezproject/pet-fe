const ButtonWhite = ({ type, content, icon, iconPosition, onClick }) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <button
      type={type}
      className=' w-full py-4 bg-transparent text-[14px] font-inter font-bold leading-[21px] text-darkColor  hover:text-primaryColor transition duration-300 ease-linear'
      onClick={handleClick}
    >
      <div className='flex items-center justify-center w-max'>
        {icon && iconPosition === 'left' && (
          <img className='h-[18px] w-[18px] object-cover mr-2' src={icon} alt={`icon_${content}`} />
        )}
        {content}
        {icon && iconPosition === 'right' && (
          <img className='h-[18px] w-[18px] object-cover mr-2' src={icon} alt={`icon_${content}`} />
        )}
      </div>
    </button>
  );
};

export default ButtonWhite;
