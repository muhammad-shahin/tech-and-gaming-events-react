import PropTypes from 'prop-types';
import { SlCalender } from 'react-icons/sl';
import { RxCross2 } from 'react-icons/rx';

const ShowBookedEvents = ({
  handleViewDetails,
  bookedEvent,
  handleCancelBooking,
}) => {
  const { id, event_cover_image, service_name, booking_price, booking_date } =
    bookedEvent;
  return (
    <div
      data-aos='fade-up'
      data-aos-easing='linear'
      data-aos-duration='300'
    >
      <div
        data-aos='flip-right'
        data-aos-easing='linear'
        data-aos-duration='600'
        className={` lg:w-fit rounded-lg flex flex-col justify-start bg-[#77befd75]`}
      >
        <div className='lg:w-full  overflow-hidden rounded-t-lg relative'>
          <img
            className=' h-full object-cover'
            src={event_cover_image}
            alt='Cover Image'
          />
          <div className='overlay absolute top-0 left-0 w-full h-full p-10 opacity-[0.8]'></div>
          <div
            data-aos='fade-down'
            data-aos-easing='linear'
            data-aos-duration='800'
            className='absolute top-0 left-0 flex justify-center items-center w-full h-full flex-col gap-5 px-[5%]'
          >
            <h1 className='md:text-[32px] text-[14px] font-bold text-center  max-w-xl'>
              You Have a Booking For{' '}
              <span className='text-primaryColor'>{service_name} </span>
              on <span className='text-primaryColor'>{booking_date} </span>
            </h1>
            <div className='w-full flex justify-evenly items-center'>
              <div className=' flex flex-col justify-center items-center'>
                <span className='text-[14px]'>Booking Status</span>
                <p className='bg-[#ffcfcf] px-5 py-1 w-[150px] text-center rounded-full text-[#fa1010] text-[20px]'>
                  {' '}
                  Pending
                </p>
              </div>
              <div className=' flex flex-col justify-center items-center'>
                <span className='text-[14px]'>Booking Price</span>
                <p className='bg-secondaryColor px-5 py-1 w-[150px] text-center rounded-full text-[#fff] text-[20px]'>
                  {' '}
                  {booking_price}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='p-5 flex justify-between items-center'>
          <button
            className={`font-roboto bg-[#b9f6b8] text-[18px] md:text-[22px] md:px-6 px-3 py-1 rounded-full text-[#0a6308fb] flex justify-center items-center gap-2 border-2 border-transparent hover:scale-[0.95] hover:border-[#0a6308fb] duration-500 custom`}
            onClick={() => {
              handleViewDetails(id);
            }}
          >
            <SlCalender />
            View Details
          </button>
          <button
            className={`font-roboto bg-[#ffcfcf] text-[18px] md:text-[22px] md:px-6 px-3 py-1 rounded-full text-[#fa1010] flex justify-center items-center gap-2 border-2 border-transparent hover:scale-[0.95] hover:border-[#fa1010] duration-500 custom`}
            onClick={() => {
              handleCancelBooking(id, booking_date);
            }}
          >
            <RxCross2 />
            Cancel Booking
          </button>
        </div>
      </div>
    </div>
  );
};

ShowBookedEvents.propTypes = {
  bookedEvent: PropTypes.object.isRequired,
  handleCancelBooking: PropTypes.func.isRequired,
  handleViewDetails: PropTypes.func.isRequired,
};

export default ShowBookedEvents;
