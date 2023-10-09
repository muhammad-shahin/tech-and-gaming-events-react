// Import Swiper styles
import 'swiper/css';
import Slider from '../Components/Slider';
import WorkedWithLogos from '../Components/WorkedWithLogos';
import {
  SiNintendogamecube,
  SiEpicgames,
  SiSega,
  SiAdobe,
  SiPubg,
  SiUbisoft,
} from 'react-icons/si';
import Service from '../Components/Service';
import { useLoaderData } from 'react-router-dom';
import RecentEvents from '../Components/RecentEvents';
import Testimonial from '../Components/Testimonial';
import Footer from '../Layouts/Footer';
const Home = () => {
  const servicesData = useLoaderData();
  const companiesWeWorkedWith = [
    { text: 'Nintendo', logo: <SiNintendogamecube /> },
    { text: 'Epic Games', logo: <SiEpicgames /> },
    { text: 'SEGA', logo: <SiSega /> },
    { text: 'Adobe', logo: <SiAdobe /> },
    { text: 'PUBG', logo: <SiPubg /> },
    { text: 'Ubisoft', logo: <SiUbisoft /> },
  ];
  return (
    <section>
      <Slider />
      <div className=' my-20'>
        <div>
          <h2
            data-aos='zoom-in'
            data-aos-easing='linear'
            data-aos-duration='500'
            className='font-roboto text-center text-[22px] md:text-[38px] lg:text-[48px] font-semibold uppercase mb-10'
          >
            Companies We Worked With
          </h2>
        </div>
        <div
          data-aos='fade-down'
          className='flex flex-wrap justify-center items-center gap-4'
        >
          {companiesWeWorkedWith.map((company, index) => (
            <WorkedWithLogos
              key={index}
              text={company.text}
              logo={company.logo}
            />
          ))}
        </div>
      </div>
      {/* services section */}
      <div
        id='services'
        className='container mx-auto px-[5%] my-20'
      >
        <h2
          data-aos='zoom-in'
          data-aos-easing='linear'
          data-aos-duration='500'
          className='font-roboto text-center text-[22px] md:text-[38px] lg:text-[48px] font-semibold uppercase mb-10'
        >
          Our Services
        </h2>
        <div
          data-aos='zoom-in-up'
          data-aos-easing='linear'
          data-aos-duration='700'
          className='flex justify-center items-center flex-wrap gap-6'
        >
          {servicesData.map((service) => (
            <Service
              key={service.id}
              service={service}
            />
          ))}
        </div>
      </div>

      {/* recent events */}
      <div className='my-20 container mx-auto px-[5%]'>
        <h2
          data-aos='zoom-in'
          data-aos-easing='linear'
          data-aos-duration='500'
          className='font-roboto text-center text-[22px] md:text-[38px] lg:text-[48px] font-semibold uppercase mb-10'
        >
          Recent Events
        </h2>
        <div>
          <RecentEvents />
        </div>
      </div>

      {/* what client say about us  */}
      <div
        id='testimonials'
        className='container mx-auto px-[5%] my-32'
      >
        <h2
          data-aos='zoom-in'
          data-aos-easing='linear'
          data-aos-duration='500'
          className='font-roboto text-center text-[22px] md:text-[38px] lg:text-[48px] font-semibold uppercase mb-10'
        >
          What Client Say About Us
        </h2>
        <div>
          <Testimonial />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Home;
