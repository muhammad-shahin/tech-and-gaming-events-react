import PropTypes from 'prop-types';

const Button = ({ text, logo, handleOnClick }) => {
  return (
    <div>
      <button
        // style={{ backgroundColor: `${bg}`, color: `${color}` }}
        className={`font-roboto text-bgColor text-[18px] md:text-[22px] md:px-6 px-3 md:py-3 py-1 rounded-full bg-primaryColor flex justify-center items-center gap-2 border-2 border-transparent hover:bg-secondaryColor hover:text-white hover:border-primaryColor duration-500 custom`}
        onClick={handleOnClick}
      >
        {logo}
        {text}
      </button>
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  logo: PropTypes.node,
  bg: PropTypes.string,
  color: PropTypes.string,
  handleOnClick: PropTypes.func,
};

export default Button;
