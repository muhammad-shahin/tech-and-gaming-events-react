import { AiOutlineArrowRight } from 'react-icons/ai';
import { TbDna } from 'react-icons/tb';
import { MdEmail, MdLocationPin } from 'react-icons/md';
import { BsTwitter, BsInstagram, BsFacebook } from 'react-icons/bs';
import Button from '../Components/Button';

const Footer = () => {
  return (
    <footer
      data-aos='flip-left'
      data-aos-easing='linear'
      data-aos-duration='700'
      className='flex justify-between gap-10 flex-col lg:flex-row w-full lg:mb-0 mb-8'
    >
      <div className='p-8 md:p-12 bg-secondaryColor text-bgColor text-[48px] md:text-[68px] font-roboto font-bold uppercase relative lg:w-[40%] rounded-tr-3xl pb-14'>
        <h2>
          Interesting? <br /> Let&apos;s Get Started
        </h2>
        <div className='bg-primaryColor rounded-full w-fit p-2 absolute lg:top-[-50px] top-[-80px] right-0 lg:right-[5%] rotate-[-35deg] hover:bg-white duration-500 lg:hover:scale-[0.9] scale-[0.4] lg:scale-[1]'>
          <a href='/#top'>
            <AiOutlineArrowRight className='bg-white rounded-full w-[150px] h-[150px] hover:text-secondaryColor hover:bg-bgColor cursor-pointer duration-500' />
          </a>
        </div>
      </div>
      <div className='space-y-5 lg:pr-20 px-[5%] lg:px-0 lg:w-auto flex justify-center lg:justify-start lg:items-start items-center flex-col'>
        <a href='/#top'>
          <Button
            text='HEXA EVENTS'
            logo={<TbDna className='text-[24px]' />}
          />
        </a>
        <p className='md:text-[24px] text-[18px] font-roboto font-thin flex justify-center items-center gap-2'>
          <MdLocationPin className='text-primaryColor text-[32px]' />
          16098 Kamana Rd #101, Apple Valley, CA 92307
        </p>
        <p className='md:text-[24px] text-[18px] font-roboto font-thin flex  gap-2'>
          <MdEmail className='text-primaryColor text-[32px]' />
          contact@hexaevents.com
        </p>
        <div className=''>
          <p className='font-medium uppercase text-[24px] mb-3'>Follow US On</p>
          <div className='flex gap-6 mb-6'>
            <a
              href='https://www.facebook.com/ShahinMuhammad2/'
              rel='noreferrer'
              target='_blank'
            >
              <BsFacebook className='md:text-[38px] text-[36px] cursor-pointer text-[#0746f2]' />
            </a>
            <a
              href='https://www.instagram.com/muhammad_shahin_2.0'
              rel='noreferrer'
              target='_blank'
            >
              <BsInstagram className='md:text-[38px] text-[36px] cursor-pointer text-[#f50b0bd5]' />
            </a>
            <a
              href='https://twitter.com/amishahin23'
              rel='noreferrer'
              target='_blank'
            >
              <BsTwitter className='md:text-[38px] text-[36px] cursor-pointer text-[#1ebcfa]' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
