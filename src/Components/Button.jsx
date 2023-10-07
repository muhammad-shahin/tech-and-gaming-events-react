import PropTypes from 'prop-types';

const Button = ({ text, logo, bg, color }) => {
  return (
    <div>
      <button
        style={{ backgroundColor: `${bg}`, color: `${color}` }}
        className={`font-roboto text-bgColor text-[18px] md:text-[22px] md:px-5 px-3 py-1 rounded-full bg-primaryColor flex justify-center items-center gap-2 border-2 border-transparent hover:bg-transparent hover:text-white hover:border-primaryColor duration-500 mx-auto custom`}
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
};

export default Button;
