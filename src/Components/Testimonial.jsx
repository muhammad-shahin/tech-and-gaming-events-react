import { BsChatRightQuote } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { useEffect, useState } from 'react';

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch('testimonials.json')
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);
  return (
    <div
      data-aos='flip-right'
      data-aos-easing='linear'
      data-aos-duration='500'
      className='text-center'
    >
      <Swiper
        className='mySwiper'
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={true}
        modules={[Pagination, Navigation, Autoplay]}
      >
        <SwiperSlide>
          <div className='py-6 px-14 border-2 border-primaryColor rounded-lg w-fit mx-auto bg-secondaryColor'>
            <img
              className=' md:w-[150px] md:h-[150px] w-[100px] h-[100px] rounded-full object-cover mx-auto'
              src='https://i.ibb.co/B3CGHfc/profile-picture-9.jpg'
            />
            <h5 className='text-[25px] md:text-[35px] font-bold font-squadaOne uppercase mt-4 mb-1'>
              Klevin Ditamon
            </h5>
            <p className='text-[18px] md:text-[22px] font-thin font-roboto uppercase '>
              Tech Blogger
            </p>
            <div className='px-10 py-4 bg-primaryColor rounded-lg w-fit mx-auto my-6 lg:h-[200px] h-[400px] flex justify-center items-center'>
              <p className='text-[22px] max-w-lg text-bgColor font-roboto'>
                <BsChatRightQuote className='relative text-[48px] mx-auto' />
                I&apos;ve covered their tech events on my blog, and they always
                deliver high-quality content and engaging discussions.
              </p>
            </div>
            <p>00/{testimonials.length}</p>
          </div>
        </SwiperSlide>
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className='py-6 px-14 border-2 border-primaryColor rounded-lg w-fit mx-auto bg-secondaryColor'>
              <img
                className='md:w-[150px] md:h-[150px] w-[100px] h-[100px] rounded-full object-cover mx-auto'
                src={testimonial.client_image}
              />
              <h5 className='text-[25px] md:text-[35px] font-bold font-squadaOne uppercase mt-4 mb-1'>
                {testimonial.client_name}
              </h5>
              <p className='text-[18px] md:text-[22px] font-thin font-roboto uppercase '>
                {testimonial.client_designation}
              </p>
              <div className='px-10 py-4 bg-primaryColor rounded-lg w-fit mx-auto my-6 lg:h-[200px] h-[400px] flex justify-center items-center'>
                <p className='text-[22px] max-w-lg text-bgColor font-roboto'>
                  <BsChatRightQuote className='relative text-[48px] mx-auto' />
                  {testimonial.client_review}
                </p>
              </div>
              <p>
                0{testimonial.id}/{testimonials.length}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
