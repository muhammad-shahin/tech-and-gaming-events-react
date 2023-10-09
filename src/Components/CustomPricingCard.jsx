import { Card } from 'flowbite-react';
import { MdOutlineDone } from 'react-icons/md';
import PropTypes from 'prop-types';

const CustomPricingCard = ({ title, points, price }) => {
  return (
    <div>
      <Card className='bg-secondaryColor max-w-[400px] h-[900px] px-10 pt-10 hover:scale-y-[-50px]'>
        <h5 className='mb-4 text-[38px] font-roboto font-bold text-[#041f70]'>
          {title}
        </h5>
        <div className='flex items-baseline dark:text-white'>
          <span className='text-3xl font-semibold'>$</span>
          <span className='text-5xl font-extrabold tracking-tight'>
            {price}
          </span>
          <span className='ml-1 text-xl font-normal text-'>/Event</span>
        </div>
        <ul className='my-7 space-y-5'>
          {points.map((point, index) => (
            <li
              key={index}
              className='flex space-x-3'
            >
              <MdOutlineDone className='text-[32px] ' />
              <span className='text-[18px] font-medium leading-tight'>
                {point}
              </span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

CustomPricingCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  points: PropTypes.func,
};

export default CustomPricingCard;
