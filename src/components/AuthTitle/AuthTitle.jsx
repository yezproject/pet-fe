import PropTypes from 'prop-types';

const AuthTitle = ({ content, description }) => {
  return (
    <div className='flex flex-col gap-y-[5px] max-w-[431px] font-inter'>
      <h1 className='text-[42px] leading-[51px] font-extrabold text-darkColor'>{content}</h1>
      <p className='text-sm leading-[21px] text-darkGrey'>{description}</p>
    </div>
  );
};

AuthTitle.propTypes = {
  content: PropTypes.string,
  description: PropTypes.string,
};
export default AuthTitle;
