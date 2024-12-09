import { useState, useEffect } from 'react';
import BgDesktopImg from './../images/image-hero-desktop.jpg';
import BgMobileImg from './../images/image-hero-mobile.jpg';
import XBurger from './../images/icon-close-menu.svg';
import Hamburger from './../images/icon-hamburger.svg';
import Logo from './../images/logo.svg';

function Header() {
  const [isHidden, setIsHidden] = useState(true);

  // Toggle menu visibility
  const MenuStart = () => setIsHidden(!isHidden);

  useEffect(() => {
    // Disable scrolling when menu is open
    document.body.style.overflow = isHidden ? 'auto' : 'hidden';
    return () => {
      // Clean up on component unmount
      document.body.style.overflow = 'auto';
    };
  }, [isHidden]);

  return (
    <header className="py-32P px-16P w-screen h-auto relative">
      {/* Background */}
      <img className="absolute top-0 left-0 hidden lg:block w-screen h-auto z-1" src={BgDesktopImg} alt="computer" />
      <img className="absolute top-0 left-0 block lg:hidden w-screen h-auto z-1" src={BgMobileImg} alt="computer" />
      {/* Top Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent z-5 pointer-events-none h-800H"></div>

      {/* Overlay */}
      {!isHidden && (
        <div
          onClick={() => setIsHidden(true)} // Click outside to close menu
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
        ></div>
      )}

      {/* Header Content */}
      <div className="flex flex-row justify-between lg:justify-around items-center">
        <img className="relative z-10" src={Logo} alt="crowdfund" />

        {/* Burger Menu and Close (X) */}
        <div className="relative cursor-pointer w-16W h-16H block lg:hidden" onClick={MenuStart}>
          {/* Hamburger Icon */}
          <img
            src={Hamburger}
            alt="burger menu"
            className={`z-10 absolute inset-0 w-full h-full transition-transform transition-opacity duration-300 ${
              isHidden ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 rotate-180 pointer-events-none'
            }`}
          />
          {/* Close (X) Icon */}
          <img
            src={XBurger}
            alt="close menu"
            className={`absolute z-10 inset-0 w-full h-full transition-transform transition-opacity duration-300 ${
              isHidden ? 'opacity-0 scale-75 rotate-180 pointer-events-none' : 'opacity-100 scale-100 rotate-0'
            }`}
          />
        </div>

        {/* Navigation Menu - Mobile */}
        <ul
          className={`${
            isHidden ? 'hidden' : 'block'
          } absolute inset-y-full z-10 text-black text-lg font-semibold mx-auto flex flex-col gap-4 w-3/5 h-200H bg-white border-1BW border-dark-gray border-solid rounded-10BR shadow-2xl p-16P transform translate-x-1/3 translate-y-1/2 cursor-pointer`}
        >
          <li>About</li>
          <hr />
          <li>Discover</li>
          <hr />
          <li>Get Started</li>
        </ul>

        {/* Navigation Menu - Desktop */}
        <ul className="z-10 gap-8 text-white text-sm hidden lg:flex cursor-pointer">
          <li>About</li>
          <li>Discover</li>
          <li>Get Started</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
