import PropTypes from 'prop-types';

const Button = ({ text, logo }) => {
  return (
    <div>
      <button className='font-roboto text-bgColor text-[18px] lg:text-[22px] lg:px-5 px-3 py-1 rounded-full bg-primaryColor flex justify-center items-center gap-2 border-2 border-transparent hover:bg-transparent hover:text-white hover:border-primaryColor duration-500'>
        {logo}
        {text}
      </button>
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  logo: PropTypes.node,
};

export default Button;
