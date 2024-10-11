import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { RiShoppingBag3Fill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import * as paths from '../routes/path';

const Header = () => {
  const nav = useNavigate();

  const [isSticky, setIsSticky] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // If scrolling up by at least 10px, make header sticky
      if (currentScrollPos < lastScrollY && lastScrollY - currentScrollPos > 10) {
        setIsSticky(true);
      }
      // If scrolling down, remove sticky header
      else if (currentScrollPos > lastScrollY) {
        setIsSticky(false);
      }

      setLastScrollY(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className='relative'>
      <div className={`w-full h-16 bg-white text-base flex justify-between items-center px-10 transition-all duration-300 ${isSticky ? 'sticky top-0 z-10' : 'static'}`}>
        <span
          onClick={() => nav('/')}
          className='cursor-pointer font-semibold text-sm lg:text-base'>Jojo Fits Shoes</span>
        <div className='flex gap-x-5'>
          <div className='flex items-center gap-x-5 max-md:hidden'>
            <NavLink to='/featured' className='hover:underline underline-offset-2'>New & Featured</NavLink>
            <NavLink to='/men' className='hover:underline underline-offset-2'>Men</NavLink>
            <NavLink to='/women' className='hover:underline underline-offset-2'>Women</NavLink>
            <NavLink to='/kids' className='hover:underline underline-offset-2'>Kids</NavLink>
            <NavLink to='/sale' className='hover:underline underline-offset-2'>Sale</NavLink>
          </div>
          <span className='flex items-center gap-x-5'>
            <RiShoppingBag3Fill
              size={22}
              className='cursor-pointer'
              onClick={() => nav(paths.CART_PAGE)} />
            <FaHeart
              size={22}
              className='cursor-pointer'
              onClick={() => nav(paths.FAVOURITE_PAGE)} />
          </span>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-300 ${isClicked ? 'h-fit bg-gray-300' : ''} flex flex-col items-center`}>
        <span
          onClick={() => setIsClicked(!isClicked)}
          className='cursor-pointer p-2 relative'
          aria-expanded={isClicked}
        >
          <IoIosArrowDown className={`absolute top-0 transition-all duration-300 ${isClicked ? 'opacity-0' : 'animate-bounce'}`} size={24} />
          <IoIosArrowDown className={`absolute top-0 transition-all ${isClicked ? 'duration-500 rotate-180' : 'duration-100 opacity-0'}`} size={24} />
        </span>

        <div className={`overflow-hidden transition-all duration-300 ${isClicked ? 'max-h-96' : 'max-h-0'}`}>
          <NavLink to='/featured' className='block p-2 hover:underline underline-offset-2'>New & Featured</NavLink>
          <NavLink to='/men' className='block p-2 hover:underline underline-offset-2'>Men</NavLink>
          <NavLink to='/women' className='block p-2 hover:underline underline-offset-2'>Women</NavLink>
          <NavLink to='/kids' className='block p-2 hover:underline underline-offset-2'>Kids</NavLink>
          <NavLink to='/sale' className='block p-2 hover:underline underline-offset-2'>Sale</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
