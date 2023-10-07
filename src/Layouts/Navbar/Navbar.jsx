import { NavLink } from 'react-router-dom';
import { Fade as Hamburger } from 'hamburger-react';
import { useContext, useState } from 'react';
import './Navbar.css';
import { AuthContext } from '../../Services/AuthProvider/AuthProvider';
import { TbDna } from 'react-icons/tb';
import { BsArrowRightCircle } from 'react-icons/bs';

const Navbar = () => {
  const editMe = useContext(AuthContext);
  const [isOpen, setOpen] = useState(false);

  return (
    <header className=''>
      <nav className='pb-3 pt-6 container mx-auto flex justify-between items-center px-[5%] lg:w-auto relative'>
        {/* log */}
        <div>
          <button className='text-bgColor font-roboto text-[22px] medium px-5 py-1 rounded-full bg-primaryColor flex justify-center items-center gap-2 border-2 border-transparent hover:bg-transparent hover:text-white hover:border-primaryColor duration-300'>
            <TbDna className='text-[24px]' />
            HEXA EVENTS
          </button>
        </div>
        {/* nav items */}
        <ul
          className={` lg:static fixed top-[85px] ${
            isOpen ? 'right-0' : 'right-[-100%]'
          } lg:h-auto h-screen lg:w-auto w-[50%] flex lg:flex-row flex-col lg:bg-transparent bg-primaryColor lg:text-white text-bgColor lg:p-0 p-4 justify-start lg:justify-center items-center lg:gap-10 gap-8 duration-700 pt-10 lg:pt-0 z-[100]`}
        >
          <li
            className='font-roboto font-thin uppercase text-[18px] hover:scale-[1.1] duration-500'
            onClick={() => {
              setOpen(false);
            }}
          >
            <NavLink to='/'>Home</NavLink>
          </li>
          <li
            className='font-roboto font-thin uppercase text-[18px] hover:scale-[1.1] duration-500'
            onClick={() => {
              setOpen(false);
            }}
          >
            <NavLink to='/services'>Services</NavLink>
          </li>
          <li
            className='font-roboto font-thin uppercase text-[18px] hover:scale-[1.1] duration-500'
            onClick={() => {
              setOpen(false);
            }}
          >
            <NavLink to='/events'>Events</NavLink>
          </li>
          <li
            className='font-roboto font-thin uppercase text-[18px] hover:scale-[1.1] duration-500'
            onClick={() => {
              setOpen(false);
            }}
          >
            <NavLink to='/testimonial'>Testimonial</NavLink>
          </li>
          <div>
            <button className='font-roboto text-bgColor text-[22px] px-5 py-1 rounded-full bg-primaryColor flex justify-center items-center gap-2 border-2 border-transparent hover:bg-transparent hover:text-white hover:border-primaryColor duration-300'>
              <BsArrowRightCircle className='text-[24px]' />
              LOGIN
            </button>
          </div>
        </ul>
        {/* login sign up buttons */}

        {/* hamburger menu */}
        <div className='lg:hidden'>
          <Hamburger
            color='#15E1F2'
            toggled={isOpen}
            toggle={setOpen}
          />
        </div>
      </nav>
      <hr className='text-primaryColor' />
    </header>
  );
};

export default Navbar;
