"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const menuItems = [
  { id: 'service', label: 'Service' },
  { id: 'Aboutus', label: 'About Us' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'workprocess', label: 'Work Process' },
  { id: 'contactus', label: 'Contact Us' },
];

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-darkBlack text-white p-4">
      <div className="container mx-auto">
        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden">
          <button onClick={toggleSidebar} className="text-white focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Sidebar for Mobile */}
        {isSidebarOpen && (
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
        )}

        {/* Menu for Desktop */}
        <ul className="hidden lg:flex lg:flex-row lg:space-x-4 items-center justify-end">
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
    </div>
  );
};

export default Header;

