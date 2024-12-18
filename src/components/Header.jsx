import React, { useState } from 'react';

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navItems = [
    {name: 'Home', href: '/'}, 
    {name: 'About', href: '/PictureMotion/about'}, 
    {name: 'Contact Us', href: '/PictureMotion/contact_us'},
    {name: 'Sign In', href: '#'},

  ];

  return (
    <nav className="flex flex-wrap items-center p-3 bg-gray-800">
      {/* Logo Section */}
      <a href="#" className="inline-flex items-center p-2 mr-4">
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 mr-2 text-white fill-current"
        >
          <path
            d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"
          />
        </svg>
        <span className="text-xl font-bold tracking-wide text-white">
          PictureMotion
        </span>
      </a>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsNavOpen(!isNavOpen)}
        className="inline-flex p-3 ml-auto text-white rounded outline-none hover:bg-gray-900 lg:hidden hover:text-white"
      >
        {isNavOpen ? '✕' : '☰'}
      </button>

      {/* Navigation Menu */}
      <div
        className={`
          ${isNavOpen ? 'block' : 'hidden'} 
          top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto
        `}
      >
        <div className="flex flex-col items-start w-full lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="items-center justify-center w-full px-3 py-2 text-gray-400 rounded lg:inline-flex lg:w-auto hover:bg-gray-900 hover:text-white"
            >
              <span>{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;