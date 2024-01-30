import Image from 'next/image';
import React from 'react';
import logo from "../../public/src/logo/dicoit-logoLg.png";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDribbble, faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';


const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'Aboutus', label: 'About Us' },
    { id: 'service', label: 'Service' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'workprocess', label: 'Work Process' },
  ];

const Footer = () => {
    return (
        <div className='bg-darkBlack'>
            <div className='container mx-auto py-12'>
                <div className='flex justify-between items-center flex-wrap mx-2 pb-16 border-b border-lightGray gap-y-5'>
                    <div className='2xl:w-1/3 xl:w-1/3 lg:w-1/2'>
                        <Image src={logo} alt='DicoIT-Logo' width={340} height={100} layout='responsive' className='half' />
                        <p className='text-xl text-lightGray mt-8'>We are dedicated to ensuring the contentment of our customers and take immense pride in doing so.</p>
                    </div>
                    <div className='2xl:w-1/3 xl:w-1/3 lg:w-1/2'>
                        <p className='text-xl0 text-white'>Exploring an intriguing collaboration with us?</p>
                        <div className='relative mt-8'>
                            <input type="text" placeholder='Enter Your Email' className='subsInput' />
                            <span className='inputPlace'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">  <path d="M16.8288 7.14304H17.8002V8.11447C17.8002 8.37211 17.9025 8.6192 18.0847 8.80137C18.2669 8.98355 18.514 9.0859 18.7716 9.0859C19.0293 9.0859 19.2763 8.98355 19.4585 8.80137C19.6407 8.6192 19.743 8.37211 19.743 8.11447V7.14304H20.7145C20.9721 7.14304 21.2192 7.04069 21.4014 6.85852C21.5836 6.67634 21.6859 6.42925 21.6859 6.17161C21.6859 5.91397 21.5836 5.66689 21.4014 5.48471C21.2192 5.30253 20.9721 5.20018 20.7145 5.20018H19.743V4.22875C19.743 3.97111 19.6407 3.72403 19.4585 3.54185C19.2763 3.35967 19.0293 3.25732 18.7716 3.25732C18.514 3.25732 18.2669 3.35967 18.0847 3.54185C17.9025 3.72403 17.8002 3.97111 17.8002 4.22875V5.20018H16.8288C16.5711 5.20018 16.324 5.30253 16.1419 5.48471C15.9597 5.66689 15.8573 5.91397 15.8573 6.17161C15.8573 6.42925 15.9597 6.67634 16.1419 6.85852C16.324 7.04069 16.5711 7.14304 16.8288 7.14304ZM20.7145 11.0288C20.4568 11.0288 20.2098 11.1311 20.0276 11.3133C19.8454 11.4955 19.743 11.7425 19.743 12.0002V17.8288C19.743 18.0864 19.6407 18.3335 19.4585 18.5157C19.2763 18.6978 19.0293 18.8002 18.7716 18.8002H5.17161C4.91397 18.8002 4.66689 18.6978 4.48471 18.5157C4.30253 18.3335 4.20018 18.0864 4.20018 17.8288V8.51276L9.91219 14.2345C10.4586 14.7802 11.1993 15.0868 11.9716 15.0868C12.7439 15.0868 13.4846 14.7802 14.031 14.2345L16.4305 11.835C16.6134 11.6521 16.7162 11.404 16.7162 11.1453C16.7162 10.8866 16.6134 10.6385 16.4305 10.4556C16.2476 10.2727 15.9995 10.1699 15.7408 10.1699C15.4821 10.1699 15.234 10.2727 15.051 10.4556L12.6516 12.855C12.47 13.033 12.2259 13.1327 11.9716 13.1327C11.7173 13.1327 11.4732 13.033 11.2916 12.855L5.5699 7.14304H12.943C13.2007 7.14304 13.4478 7.04069 13.6299 6.85852C13.8121 6.67634 13.9145 6.42925 13.9145 6.17161C13.9145 5.91397 13.8121 5.66689 13.6299 5.48471C13.4478 5.30253 13.2007 5.20018 12.943 5.20018H5.17161C4.39869 5.20018 3.65743 5.50722 3.1109 6.05376C2.56436 6.60029 2.25732 7.34155 2.25732 8.11447V17.8288C2.25732 18.6017 2.56436 19.3429 3.1109 19.8895C3.65743 20.436 4.39869 20.7431 5.17161 20.7431H18.7716C19.5445 20.7431 20.2858 20.436 20.8323 19.8895C21.3789 19.3429 21.6859 18.6017 21.6859 17.8288V12.0002C21.6859 11.7425 21.5836 11.4955 21.4014 11.3133C21.2192 11.1311 20.9721 11.0288 20.7145 11.0288Z" fill="#999999"/></svg></span>
                            <span className='subsBtn'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">  <path d="M26.4762 3.55915C25.8691 2.93865 24.9705 2.70915 24.1326 2.95201L4.59475 8.59723C3.71075 8.84251 3.08418 9.54316 2.9154 10.432C2.74297 11.3379 3.34525 12.489 4.13211 12.9699L10.2412 16.7002C10.8678 17.0839 11.6765 16.9879 12.195 16.4682L19.1905 9.47273C19.5426 9.10723 20.1255 9.10723 20.4776 9.47273C20.8298 9.82366 20.8298 10.3956 20.4776 10.7599L13.47 17.7554C12.9503 18.2751 12.8531 19.0814 13.2356 19.7092L16.9683 25.8413C17.4055 26.5687 18.1583 26.9827 18.984 26.9827C19.0812 26.9827 19.1905 26.9827 19.2876 26.9694C20.2348 26.8492 20.9876 26.2044 21.2669 25.2937L27.0591 5.90273C27.3141 5.07701 27.0833 4.17844 26.4762 3.55915Z" fill="white"/>  <path opacity="0.4" d="M11.9341 23.6729C12.2887 24.0287 12.2887 24.6055 11.9341 24.9613L10.2754 26.6188C10.0981 26.7973 9.865 26.8859 9.63186 26.8859C9.39872 26.8859 9.16557 26.7973 8.98829 26.6188C8.6325 26.263 8.6325 25.6874 8.98829 25.3317L10.6458 23.6729C11.0016 23.3184 11.5784 23.3184 11.9341 23.6729ZM10.9825 19.0732C11.3371 19.429 11.3371 20.0058 10.9825 20.3616L9.32379 22.0191C9.14651 22.1976 8.91337 22.2862 8.68022 22.2862C8.44708 22.2862 8.21394 22.1976 8.03665 22.0191C7.68087 21.6633 7.68087 21.0877 8.03665 20.7319L9.69415 19.0732C10.0499 18.7186 10.6267 18.7186 10.9825 19.0732ZM6.41534 17.6253C6.76991 17.9811 6.76991 18.5579 6.41534 18.9137L4.75662 20.5712C4.57933 20.7497 4.34619 20.8383 4.11305 20.8383C3.87991 20.8383 3.64676 20.7497 3.46948 20.5712C3.11369 20.2154 3.11369 19.6398 3.46948 19.284L5.12698 17.6253C5.48276 17.2707 6.05955 17.2707 6.41534 17.6253Z" fill="white"/></svg> </span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-wrap 2xl:justify-between items-center mx-2 sm:justify-center'>
                    <ul className="flex flex-wrap items-center 2xl:justify-start xl:justify-start justify-center gap-10 my-16 2xl:w-1/2 xl:w-1/2 lg:w-full md:w-full sm:w-full">
                        {menuItems.map((item, index) => (
                            <li key={item.id}>
                                <Link
                                    href={`#${item.id}`}
                                    className="text-white text-2xl"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="2xl:w-1/2 xl:w-1/2 lg:w-full md:w-full sm:w-full mx-auto">
                        <div className=''>
                            <p className='text-white text-base flex gap-8 2xl:justify-end xl:justify-end justify-center'><span>HQ in California, USA</span> <span>|</span> <span>hello@dicoit.com</span></p>
                            <ul className='flex gap-8 mt-5 2xl:justify-end xl:justify-end justify-center 2xl:me-8 xl:me-8'>
                                <li><FontAwesomeIcon icon={faDribbble} className='text-white text-xl0' /></li>
                                <li><FontAwesomeIcon icon={faFacebook} className='text-white text-xl0' /></li>
                                <li><FontAwesomeIcon icon={faXTwitter} className='text-white text-xl0' /></li>
                                <li><FontAwesomeIcon icon={faInstagram} className='text-white text-xl0' /></li>
                                <li><FontAwesomeIcon icon={faLinkedin} className='text-white text-xl0' /></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p className='text-center text-white text-base mt-8'>Copyright @ 2024 DicoIT Agency. All Right Reserved</p>
            </div>
        </div>
    );
};

export default Footer;