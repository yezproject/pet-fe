const Icon = ({ src, onClick }) => {
  const handleClick = () => {
    onClick();
  };
  return <img className="h-[18px] w-[18px] object-contain cursor-pointer" src={src} alt="icon" onClick={handleClick} />;
};

export default Icon;
