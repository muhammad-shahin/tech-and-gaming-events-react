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
const Home = () => {
  const servicesData = useLoaderData();
  console.log(servicesData);
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
      <div className=' my-12'>
        <div>
          <h2 className='font-roboto text-center text-[22px] md:text-[38px] lg:text-[48px] font-semibold uppercase mb-10'>
            Companies We Worked With
          </h2>
        </div>
        <div className='flex flex-wrap justify-center items-center gap-4'>
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
      <div className='container mx-auto px-[5%] my-12'>
        <h2 className='font-roboto text-center text-[22px] md:text-[38px] lg:text-[48px] font-semibold uppercase mb-10'>
          Our Services
        </h2>
        <div className='flex justify-center items-center flex-wrap gap-6'>
          {servicesData.map((service) => (
            <Service
              key={service.id}
              service={service}
            />
          ))}
        </div>
      </div>

      {/* recent events */}
      <div className='my-12 container mx-auto px-[5%]'>
        <h2 className='font-roboto text-center text-[22px] md:text-[38px] lg:text-[48px] font-semibold uppercase mb-10'>
          Recent Events
        </h2>
        <div>
          <RecentEvents />
        </div>
      </div>
    </section>
  );
};

export default Home;
