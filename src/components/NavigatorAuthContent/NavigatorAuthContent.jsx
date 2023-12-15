import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavigatorAuthContent = ({ content, contentLink, to }) => {
  return (
    <div className=' flex items-center gap-x-2 font-inter text-sm leading-[21px]'>
      <div className='text-darkColor '>{content}</div>
      <Link className='text-primaryColor font-bold hover:text-primaryColor/80' to={to}>
        {contentLink}
      </Link>
    </div>
  );
};

NavigatorAuthContent.propTypes = {
  content: PropTypes.string,
  contentLink: PropTypes.string,
  to: PropTypes.string,
};

export default NavigatorAuthContent;
