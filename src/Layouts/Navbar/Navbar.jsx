import { Link, NavLink, Navigate, useNavigate } from 'react-router-dom';
import { Fade as Hamburger } from 'hamburger-react';
import { useContext, useState } from 'react';
import './Navbar.css';
import { AuthContext } from '../../Services/AuthProvider/AuthProvider';
import { TbDna } from 'react-icons/tb';
import { BsArrowRightCircle } from 'react-icons/bs';
import Button from '../../Components/Button';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogOut = () => {};

  return (
    <header className=''>
      <nav className='pb-3 pt-6 container mx-auto flex justify-between items-center px-[5%] lg:w-auto relative'>
        {/* log */}
        <div>
          <Button
            text='HEXA EVENTS'
            handleOnClick={() => {
              navigate('/');
            }}
            logo={<TbDna className='text-[24px]' />}
          />
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
            {user ? (
              <Button
                text='Logout'
                logo={<BsArrowRightCircle className='md:text-[24px]' />}
                handleOnClick={handleLogOut}
              />
            ) : (
              <Button
                text='LOGIN'
                logo={<BsArrowRightCircle className='md:text-[24px]' />}
                handleOnClick={() => {
                  navigate('/login');
                }}
              />
            )}
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
