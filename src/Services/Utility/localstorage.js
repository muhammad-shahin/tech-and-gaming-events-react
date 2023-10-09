import { tr } from 'date-fns/locale';

// get stored booked events data from local storage
const getStoredBookedEvents = () => {
  const getStored = localStorage.getItem('bookedEvents');
  if (getStored) {
    const storedData = JSON.parse(getStored);
    return storedData;
  }
  return [];
};

// save booked events in local storage
const saveBookedEvents = (bookedEvents) => {
  const storedEventsData = getStoredBookedEvents();
  const exist = storedEventsData.find(
    (event) => event.bookingDate === bookedEvents.bookingDate
  );
  if (!exist) {
    storedEventsData.push(bookedEvents);
    localStorage.setItem('bookedEvents', JSON.stringify(storedEventsData));
    return true;
  }
  return false;
};
// remove booked events from local storage
const removeBookedEvents = (eventToRemove) => {
  const storedEventsData = getStoredBookedEvents();
  const updateBookingEvents = storedEventsData.filter(
    (event) =>
      event.id !== eventToRemove.id &&
      event.bookingDate !== eventToRemove.bookingDate
  );
  localStorage.setItem('bookedEvents', JSON.stringify(updateBookingEvents));
  return true;
};

export { getStoredBookedEvents, saveBookedEvents, removeBookedEvents };
