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
const Home = () => {
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
      <div className=' py-8'>
        <div>
          <h2 className='font-roboto text-center text-[22px] lg:text-[32px] font-semibold uppercase mb-4'>
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
    </section>
  );
};

export default Home;
