"use client"
// components/Header.js

import Link from 'next/link';
import React, { useState } from 'react';
import logo from '../../public/src/logo/dicoit-logo.png';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const menuItems = [
  { id: '#service', label: 'Service' },
  { id: '#aboutus', label: 'About Us' },
  { id: '#portfolio', label: 'Portfolio' },
  { id: '#workprocess', label: 'Work Process' },
  { id: '#contact', label: 'Contact Us' },
];

const Header = () => {
  const [isopen, setisOpen] = useState(false);

  return (
    <div className='bg-darkBlack fixed top-0 left-0 z-50 w-full'>
      <div className='container mx-auto'>
        <div className='py-4 md:flex items-center justify-between bg-darkBlack md:mx-2'>
            {/* Logo Here  */}
          <div>
            <Image src={logo} alt='DicoIT Logo' width={180} height={80} />
          </div>
          {/* Menu Icon  */}
          <div className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7' onClick={() => setisOpen(!isopen)}>
            { isopen ? (
              <FontAwesomeIcon icon={faTimes} className='text-white h-7 w-7'/>
            ) : (
              <svg
                className='h-8 w-8'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                viewBox='0 0 24 24'
                stroke='white'
              >
                <path d='M4 6h16M4 12h16m-7 6h7'></path>
              </svg>
            )}
          </div>
          {/* Menu Item Here  */}
          <ul
            className={`md:flex pl-9 md:pl-0 md:items-center md:pb-0 pb-12 absolute md:static md:z-50 z-[-1] left-0 w-full md:w-auto transition-all bg-darkBlack duration-500 ease-in ${isopen ? 'top-12' : 'top-[-490px]'}`}
          >
            {menuItems.map((item) => (
              <li key={item.id} className='md:ml-8 md:my-0 my-7 font-semibold text-lg'>
                <Link href={item.id} className='text-white hover:text-blue-400 duration-500'>
                    {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;


{/* <button className='btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>Get Started</button> */}

// const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

{/* <div className="bg-darkBlack text-white p-4">
      <div className="container mx-auto"> */}
        {/* Hamburger Icon for Mobile */}
        // <div className="lg:hidden">
        //   <button onClick={toggleSidebar} className="text-white focus:outline-none">
        //     <svg
        //       className="h-6 w-6"
        //       fill="none"
        //       strokeLinecap="round"
        //       strokeLinejoin="round"
        //       strokeWidth="2"
        //       viewBox="0 0 24 24"
        //       stroke="currentColor"
        //     >
        //       <path d="M4 6h16M4 12h16m-7 6h7"></path>
        //     </svg>
        //   </button>
        // </div>

        {/* Sidebar for Mobile */}
        {/* {isSidebarOpen && (
          <div className="lg:hidden">
            <ul className="flex flex-col space-y-2">
              {menuItems.map((item, index) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="block hover:text-gray-300 focus:text-gray-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )} */}

        {/* Menu for Desktop */}
        {/* <ul className="hidden lg:flex lg:flex-row lg:space-x-4 items-center justify-end">
          {menuItems.map((item, index) => (
            <li
              key={item.id}
              className={`${
                index === menuItems.length - 1 ? 'bg-purple px-12 py-6 rounded-full' : ''
              }`}
            >
              <Link
                href={`#${item.id}`}
                className="block lg:inline-block lg:hover:text-gray-300 lg:focus:text-gray-300 text-lg"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div> */}

