import { useLoaderData, useNavigate } from 'react-router-dom';

import {
  getStoredBookedEvents,
  removeBookedEvents,
} from '../Services/Utility/localstorage';
import Swal from 'sweetalert2';
import ShowBookedEvents from '../Components/ShowBookedEvents';
import { useEffect, useState } from 'react';

const BookedEvents = () => {
  const eventsData = useLoaderData();
  const [storedEventsData, setStoredEventsData] = useState(
    getStoredBookedEvents()
  );
  const bookedEventsData = [];
  const navigate = useNavigate();
  const handleViewDetails = (id) => {
    navigate(`/service-details/${id}`);
  };
  // handle cancel booking
  const handleCancelBooking = (id, bookingDate) => {
    const deleteThisEvent = { id, bookingDate };
    const cancelBooking = removeBookedEvents(deleteThisEvent);
    setStoredEventsData(getStoredBookedEvents());
    cancelBooking &&
      Swal.fire({
        title: 'Booking Cancelled',
        text: 'We Received Your Booking Cancel Request. We Will Cancel Your Booking Soon And Will Send Cancellation Update Soon. Thank You ❤️',
        icon: 'success',
        showConfirmButton: false,
        timer: 2000,
      });
  };

  // filter data from serviceData to get saved booking Data
  eventsData.forEach((events) => {
    storedEventsData.forEach((bookedEvents) => {
      if (events.id == bookedEvents.id) {
        const mergedEvent = {
          ...events,
          booking_date: bookedEvents.bookingDate,
        };
        bookedEventsData.push(mergedEvent);
      }
    });
  });

  useEffect(() => {
    if (storedEventsData.length < 1) {
      Swal.fire({
        title: "You Don't Have Any Booked Events",
        text: "You didn't book any event yet. You can start booking events by going to the Home page to find out about our event management services.",
        icon: 'error',
        confirmButtonText: 'Go To Home',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/');
        } else {
          navigate('/');
        }
      });
    }
  }, [storedEventsData, navigate]);
  return (
    <section className='container mx-auto xl:w-full w-[90%] my-10'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {bookedEventsData.map((bookedEvent, index) => (
          <ShowBookedEvents
            key={index}
            bookedEvent={bookedEvent}
            handleViewDetails={handleViewDetails}
            handleCancelBooking={handleCancelBooking}
          ></ShowBookedEvents>
        ))}
      </div>
    </section>
  );
};

export default BookedEvents;
