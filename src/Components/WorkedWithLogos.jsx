import PropTypes from 'prop-types';

const WorkedWithLogos = ({ text, logo }) => {
  return (
    <div>
      <button className='flex justify-center items-center gap-2 bg-[#303030] w-[] md:w-[200px] px-3 md:py-3 py-1 rounded-lg md:text-[18px] text-[12px] font-medium hover:text-primaryColor hover:bg-[#5756569b] duration-500 cursor-default'>
        {logo} {text}
      </button>
    </div>
  );
};

WorkedWithLogos.propTypes = {
  text: PropTypes.string.isRequired,
  logo: PropTypes.node,
};

export default WorkedWithLogos;
