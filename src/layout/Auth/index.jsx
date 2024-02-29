import PropTypes from 'prop-types';

const Auth = ({ children }) => {
  return (
    <div className="absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 h-[900px] flex  shadow-2xl text-xl rounded-2xl overflow-hidden">
      <div className="px-[149px] pt-10 pb-12 h-full">
        <div className="flex items-center gap-x-3 w-max mb-14">
          <div className="w-11 h-11  bg-ic-logo bg-cover"></div>
          <h1 className=" -text-[21px] font-black font-inter text-darkColor">Payment Eco</h1>
        </div>
        <div className="flex flex-col max-w-[645px] w-full" style={{ height: 'calc(100% - 100px)' }}>
          {children}
        </div>
      </div>
      <div className="w-[704px] min-h-full bg-auth-background"></div>
    </div>
  );
};

Auth.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Auth;
