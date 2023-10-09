import { useLoaderData, useParams } from 'react-router-dom';
import { SlCalender } from 'react-icons/sl';
import DatePickerModal from '../Components/DatePickerModal';
import { useState } from 'react';
import { format } from 'date-fns';
import { saveBookedEvents } from '../Services/Utility/localstorage';
import Swal from 'sweetalert2';

const ServiceDetails = () => {
  const servicesData = useLoaderData();
  const { serviceId } = useParams();
  const serviceDetails = servicesData.filter(
    (service) => service.id === parseInt(serviceId)
  );
  const {
    event_cover_image,
    event_details,
    service_name,
    booking_price,
    event_description,
  } = serviceDetails[0];
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'dd/MM/yyyy')
  );

  // handle event booking Submit
  const handleEventBooking = () => {
    const bookedEvents = { id: serviceId, bookingDate: selectedDate };
    const saveEvent = saveBookedEvents(bookedEvents);
    saveEvent
      ? Swal.fire({
          title: 'Booking Complete',
          text: 'We Received Your Booking Request. Our Sales Person Will Contact With You Very Soon for Further Details About Your Events & Confirmation. Thank You ❤️',
          icon: 'success',
          confirmButtonText: 'OK',
        })
      : Swal.fire({
          title: 'Booking Failed',
          text: 'This Date is Already Booked. Please Try Booking for Other Dates.',
          icon: 'error',
          confirmButtonText: 'OK',
        });

    setShowDatePicker(!showDatePicker);
  };

  return (
    <section className='mb-16 mt-6 container mx-auto space-y-5 lg:w-fit w-[90%] lg:px-[10%]'>
      <div className='relative mx-auto lg:mx-0'>
        <img
          className='mx-auto w-full max-h-[500px] object-cover rounded-lg'
          src={event_cover_image}
          alt='Cover Image'
        />
        <div className='overlay absolute top-0 left-0 w-full h-full p-10 rounded-lg '></div>
        <div className='absolute top-0 left-0 flex justify-center items-center w-full h-full flex-col gap-5 px-[5%]'>
          <h1 className='md:text-[32px] text-[14px] font-bold text-center  max-w-xl'>
            Looking For Best Event Management Company For Your Next{' '}
            <span className='text-primaryColor'>{service_name}?</span>
          </h1>
          <p className='md:text-[14px] text-[10px]  text-center max-w-xl'>
            {event_description}
          </p>
        </div>
        <p></p>
      </div>
      <div className='space-y-4'>
        <div className='flex justify-start items-center gap-3'>
          <p className='font-medium font-squadaOne text-[20px] md:text-[24px] ml-4'>
            {booking_price}
          </p>
          <button
            className={`font-roboto text-white text-[18px] md:text-[18px] md:px-6 px-3 md:py-2 py-1 rounded-full bg-secondaryColor flex justify-center items-center gap-2 border-2 border-transparent hover:scale-[0.95] hover:text-white hover:border-primaryColor duration-500 custom`}
            onClick={() => {
              setShowDatePicker(true);
            }}
          >
            <SlCalender />
            Book Now
          </button>
        </div>
        <h1 className='lg:text-[2.4rem] text-[1.8rem] font-bold text-secondaryColor'>
          {service_name}
        </h1>
        <p className='lg:text-[18px] text-primaryColor text-justify'>
          {event_details}
        </p>
      </div>
      <DatePickerModal
        title={'Chose Your Event Date'}
        modalStatus={showDatePicker}
        handleEventBooking={handleEventBooking}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    </section>
  );
};

export default ServiceDetails;
