import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import Button from './Button';
import { Calendar } from 'react-date-range';
import format from 'date-fns/format';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const DatePickerModal = ({
  modalStatus,
  title,
  handleEventBooking,
  selectedDate,
  setSelectedDate,
}) => {
  const modal = useRef(null);

  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 30);
  const handleDateChange = (date) => {
    setSelectedDate(format(date, 'dd/MM/yyyy'));
  };

  useEffect(() => {
    if (modalStatus) {
      modal.current.showModal();
    } else {
      modal.current.close();
    }
  }, [modalStatus]);

  return (
    <dialog
      open
      id='modal'
      ref={modal}
      className='rounded-lg p-10'
    >
      <div className='fixed inset-0 flex justify-center items-center backdrop-filter backdrop-blur-sm'>
        <div className='w-fit bg-white rounded-lg p-5 h-fit flex flex-col justify-between gap-4'>
          <div className='relative'>
            <h2 className='text-3xl text-center text-secondaryColor mb-4'>
              {title}
            </h2>
            <input
              value={selectedDate}
              readOnly
              className='inputBox block mx-auto text-bgColor font-medium px-5 border-2 border-primaryColor py-2 rounded-lg outline-none'
            />
            <Calendar
              date={new Date()}
              onChange={handleDateChange}
              minDate={new Date()}
              maxDate={maxDate}
            />
          </div>
          <div className='w-fit mx-auto'>
            <Button
              text='Book Now'
              handleOnClick={handleEventBooking}
            />
          </div>
        </div>
      </div>
    </dialog>
  );
};

DatePickerModal.propTypes = {
  modalStatus: PropTypes.bool,
  title: PropTypes.string,
  handleEventBooking: PropTypes.func,
  selectedDate: PropTypes.string,
  setSelectedDate: PropTypes.func,
};

export default DatePickerModal;
