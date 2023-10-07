// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Mousewheel, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/mousewheel';
import 'swiper/css/autoplay';
import { useEffect, useState } from 'react';
import '../Assets/Styles/Slider.css';
import Button from './Button';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';
import { BsTicketPerforated } from 'react-icons/bs';

const Slider = () => {
  const [sliderContent, setSliderContent] = useState([]);
  useEffect(() => {
    fetch('sliderContent.json')
      .then((res) => res.json())
      .then((data) => setSliderContent(data));
  }, []);
  console.log(sliderContent);
  return (
    <div className='bg-white w-full'>
      <Swiper
        className='mySwiper'
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        mousewheel={true}
        autoplay={true}
        modules={[Pagination, Navigation, Mousewheel, Autoplay]}
      >
        <SwiperSlide>
          <div className='h-[60vh] relative'>
            <img
              className='object-center object-cover h-full w-full'
              src={
                'https://i.ibb.co/QQDT3WP/asia-tech-events-on-future-technology.jpg'
              }
            />
            {/* overlay Effect */}
            <div className='overlay absolute top-0 left-0 w-full h-full p-10'></div>
            {/* content */}
            {/* <div className='absolute top-0 left-0 font-squadaOne flex flex-col justify-center items-center w-full h-full text-center gap-4'>
              <h1 className='text-white text-5xl'>
                Welcome to
                <span className='text-primaryColor font-bold'>HEXA EVENTS</span>
                <br />
                Your Gateway to Exceptional Event Management!
              </h1>
              <p className='max-w-2xl font-roboto text-[14px]'>
                Are you ready to take your tech and gaming gatherings to the
                next level? Look no further. At
                <span className='text-primaryColor font-bold'>HEXA EVENTS</span>
                , we're passionate about crafting unforgettable experiences that
                bring your tech and gaming visions to life. From epic gaming
                conventions to cutting-edge tech expos, we've got you covered.
              </p>
              <Button
                text={'Book Now'}
                logo={<SlCalender />}
              />
            </div> */}
            <div className='absolute font-squadaOne w-full h-full bottom-0 right-0 flex items-end p-10'>
              <div className='w-[100vw] flex lg:flex-row flex-col lg:gap-0 gap-5 justify-center items-center lg:justify-between'>
                <div>
                  <p className='max-w-2xl font-roboto lg:text-[18px] text-[14px] font-bold leading-none text-primaryColor flex  justify-center items-center gap-2'>
                    Upcoming Events
                    <AiOutlineArrowDown className='animateArrow' />
                  </p>
                  <h1 className='text-white text-xl lg:text-3xl leading-none '>
                    Africa's Mega Tech Confluence
                  </h1>
                </div>
                <Button
                  text={'Buy Ticket'}
                  logo={<BsTicketPerforated />}
                />
                <div>
                  <p className='max-w-2xl font-roboto lg:text-[18px] text-[14px] font-bold leading-none text-primaryColor flex  justify-center items-center gap-2'>
                    10 Nov, 2023
                    <AiOutlineArrowDown className='animateArrow' />
                  </p>
                  <h1 className='text-white text-xl lg:text-3xl leading-none flex gap-2 '>
                    <MdLocationOn className='text-primaryColor' />
                    San Francisco's Gaming Oasis
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
