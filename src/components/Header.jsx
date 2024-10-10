import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { RiShoppingBag3Fill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa6";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;


      if (currentScrollPos < prevScrollPos || currentScrollPos < 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }


      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);


    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <div className={`w-full h-16 bg-white text-base flex justify-between items-center px-10 ${isSticky ? 'sticky top-0 z-10' : 'static'}`}>
      <span className='font-semibold text-sm lg:text-base'>Jojo Fits Shoes</span>
      <div className='flex items-center gap-x-1 lg:gap-x-5 max-md:hidden'>
        <NavLink to={''}>New & Featured</NavLink>
        <NavLink to={''}>Men</NavLink>
        <NavLink to={''}>Women</NavLink>
        <NavLink to={''}>Kids</NavLink>
        <NavLink to={''}>Sale</NavLink>
        <NavLink to={''}></NavLink>
      </div>
      <span className='flex items-center gap-x-5'>
        <RiShoppingBag3Fill size={22} />
        <FaHeart size={22} />
      </span>
    </div>
  );
}

export default Header;
