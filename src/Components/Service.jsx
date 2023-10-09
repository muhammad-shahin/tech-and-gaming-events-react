import { SlCalender } from 'react-icons/sl';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
const Service = ({ service }) => {
  const {
    id,
    service_name,
    event_description,
    event_cover_image,
    booking_price,
  } = service;
  const navigate = useNavigate();
  const handleBookNowClick = () => {
    navigate(`/service-details/${id}`);
  };
  return (
    <div
      style={{ boxShadow: '1px 1px 10px 1px #15E1F2' }}
      className='bg-primaryColor rounded-lg w-[90%] md:w-[300px] lg:w-[350px] md:h-[600px] text-center text-bgColor grid grid-rows-[1fr,auto]'
    >
      <div>
        <img
          className='w-screen h-[250px] object-cover rounded-t-lg'
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
      <div className='row-span-2 pb-4 mx-auto'>
        <p className='font-medium font-squadaOne text-[28px] md:text-[36px] my-3'>
          {booking_price}
        </p>
        <button
          className={`font-roboto text-white text-[18px] md:text-[22px] md:px-6 px-3 md:py-3 py-1 rounded-full bg-secondaryColor flex justify-center items-center gap-2 border-2 border-transparent hover:scale-[0.95] hover:text-white hover:border-primaryColor duration-500 custom`}
          onClick={handleBookNowClick}
        >
          <SlCalender />
          Book Now
        </button>
      </div>
    </div>
  );
};

Service.propTypes = {
  service: PropTypes.object.isRequired,
};

export default Service;
