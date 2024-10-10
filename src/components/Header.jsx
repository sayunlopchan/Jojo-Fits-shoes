import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { RiShoppingBag3Fill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isclicked, setIsclicked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsSticky(currentScrollPos > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='relative'>
      <div className={`w-full h-16 bg-white text-base flex justify-between items-center px-10 ${isSticky ? 'sticky top-0 z-10' : 'static'}`}>
        <span className='font-semibold text-sm lg:text-base'>Jojo Fits Shoes</span>
        <div className='flex gap-x-5'>
          <div className='flex items-center gap-x-5 max-md:hidden'>
            <NavLink to='/featured' className='hover:underline underline-offset-2'>New & Featured</NavLink>
            <NavLink to='/men' className='hover:underline underline-offset-2'>Men</NavLink>
            <NavLink to='/women' className='hover:underline underline-offset-2'>Women</NavLink>
            <NavLink to='/kids' className='hover:underline underline-offset-2'>Kids</NavLink>
            <NavLink to='/sale' className='hover:underline underline-offset-2'>Sale</NavLink>
          </div>
          <span className='flex items-center gap-x-5'>
            <RiShoppingBag3Fill size={22} />
            <FaHeart size={22} />
          </span>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-300 ${isclicked ? 'h-fit bg-gray-300' : ''} flex flex-col items-center`}>
        <span
          onClick={() => setIsclicked(!isclicked)}
          className='cursor-pointer p-2 relative'
          aria-expanded={isclicked}
        >
          <IoIosArrowDown className={`absolute top-0 transition-all duration-300 ${isclicked ? 'opacity-0' : 'animate-bounce'}`} size={24} />
          <IoIosArrowDown className={`absolute top-0 transition-all ${isclicked ? 'duration-500 rotate-180' : 'duration-100 opacity-0'}`} size={24} />
        </span>

        <div className={`overflow-hidden transition-all duration-300 ${isclicked ? 'max-h-96' : 'max-h-0'}`}>
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
