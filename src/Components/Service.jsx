import Button from './Button';
import { SlCalender } from 'react-icons/sl';
import PropTypes from 'prop-types';
const Service = ({ service }) => {
  const { service_name, event_description, event_cover_image, booking_price } =
    service;
  return (
    <div className='bg-primaryColor rounded-lg w-[90%] md:w-[300px] lg:w-[350px] md:h-[600px] text-center text-bgColor shadow-white shadow-md grid grid-rows-[1fr,auto]'>
      <div>
        <img
          className='w-fit h-[250px] object-cover rounded-t-lg'
          src={event_cover_image}
          alt=''
        />
        <div className='px-5 py-3'>
          <h4 className='text-[28px] md:text-[36px] font-squadaOne mb-3'>
            {service_name}
          </h4>
          <p className='font-roboto text-[16px] md:text-[20px] overflow-auto h-[90px]'>
            {event_description}
          </p>
        </div>
      </div>
      <div className='row-span-2 pb-4'>
        <p className='font-medium font-squadaOne text-[28px] md:text-[36px] my-3'>
          {booking_price}
        </p>
        <Button
          text='Book Now'
          bg='#000'
          color='#15E1F2'
          logo={<SlCalender />}
        />
      </div>
    </div>
  );
};

Service.propTypes = {
  service: PropTypes.object.isRequired,
};

export default Service;
