import { useLoaderData } from 'react-router-dom';
import { getStoredBookedEvents } from '../Services/Utility/localstorage';

const BookedEvents = () => {
  const eventsData = useLoaderData();
  const storedEventsData = getStoredBookedEvents();
  const bookedEventsData = [];
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
  console.log(bookedEventsData);
  return (
    <section>
      <h1>Booked Events</h1>
    </section>
  );
};

export default BookedEvents;
