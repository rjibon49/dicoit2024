'use client'

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const serviceList = [
    {
        id: '01',
        title: 'UI/UX Design',
        description: "Our UI/UX Design solution at DicoIT turns ideas into engaging digital experiences and ensures user-friendly interfaces that encourage engagement and satisfaction. With our proficiency in creating aesthetically pleasing and intuitive designs, you may elevate your brand."
    },
    {
        id: '02',
        title: 'Web Design & Development',
        description: "With a focus on your brand's own character, DicoIT's Web Design & Development service creates aesthetically attractive and incredibly useful websites. With our experience, you may improve your online presence and provide users with smooth, interesting experiences."
    },
    {
        id: '03',
        title: 'IOS/Android App Design & Development',
        description: "With the help of DicoIT's iOS/Android App Design service, you can create mobile interfaces that are both aesthetically pleasing and easy to use. With our skilled design, you can improve the user experience of your app and give consumers a smooth and engaging experience."
    },
    {
        id: '04',
        title: 'Digital Marketing',
        description: "DicoIT's Digital Marketing service propels your brand forward with strategic campaigns, encompassing Social Media Management, Analytics, and Promotion. Maximize online visibility and impact with our tailored solutions for a results-driven digital presence."
    },
    {
        id: '05',
        title: 'Branding & Strategy',
        description: "DicoIT's Branding & Strategy service crafts compelling brand identities and strategic plans, ensuring a powerful and lasting impression in the digital landscape. Elevate your brand with our expertise, creating a cohesive and impactful presence across platforms."
    },
    {
        id: '06',
        title: 'Webflow',
        description: "DicoIT leverages Webflow for seamless website creation, offering responsive and visually striking designs without the need for extensive coding. Elevate your online presence with our Webflow service, combining creativity and functionality for an impressive digital footprint."
    },
    {
        id: '07',
        title: 'Saas Product',
        description: "DicoIT's SaaS Product service delivers cutting-edge software solutions, providing scalable, efficient, and user-friendly platforms for businesses to thrive. Elevate your operations with our SaaS expertise, streamlining processes and maximizing productivity."
    },
    {
        id: '08',
        title: 'Design system',
        description: "DicoIT's Redesign Website & Design System service revitalizes your online presence, combining aesthetics and functionality for a modern and engaging user experience. Elevate your brand consistency with our expert design, ensuring a cohesive and visually appealing digital identity."
    },
    {
        id: '09',
        title: 'T-shirt Design',
        description: "DicoIT's T-shirt Design service brings your vision to life with custom, eye-catching designs that reflect your unique style. Elevate your apparel brand or event with our creative expertise, delivering distinctive and memorable T-shirt designs."
    },
]

const ServiceSection = () => {
    const [selectedService, setSelectedService] = useState(null);
    const [arrowDirection, setArrowDirection] = useState({});

    const handleServiceClick = (serviceId) => {
        if (selectedService === serviceId) {
        setSelectedService(null);
        } else {
        setSelectedService(serviceId);
        setArrowDirection((prevDirection) => ({
            ...prevDirection,
            [serviceId]: prevDirection[serviceId] === 'right' ? 'down' : 'right',
        }));
        }
    };
    return (
        <div className="container mx-auto py-24">
            <div className="w-2/4 mb-16">
                <p className="text-white text-xl font-semibold">Services</p>
                <p className="mb-5 text-white text-xl64 font-bold">What We Offer</p>
                <p className="text-white text-xl">
                    DicoIT delivers a spectrum of digital solutions, from expert UI/UX design to comprehensive web and app development. Empower your brand with our tailored services, driving innovation and excellence in the digital realm.
                </p>
            </div>

            <div className="w-3/4 mx-auto">
            {serviceList.map((service) => (
                <div
                key={service.id}
                className="border-b-[1px] border-b-[#7d7d7d] cursor-pointer"
                onClick={() => handleServiceClick(service.id)}
                >
                <div className="flex justify-between mb-10 mt-4">
                    <div className="flex">
                        <p className="text-[#AAAAAA] text-base me-3">{service.id}</p>
                        <p className="text-white text-5xl font-bold pt-3">{service.title}</p>
                    </div>
                    <div className="pt-3">
                    <FontAwesomeIcon
                        icon={selectedService === service.id ? faArrowDown : faArrowRight}
                        className="text-white text-4xl w-10 transition-transform duration-300 ease-in-out transform"
                    />
                    </div>
                </div>
                    <div
                        className={`text-white text-lg mb-4 overflow-hidden transition-max-height ${
                        selectedService === service.id ? 'max-h-32' : 'max-h-0'
                        }`}
                    >
                        {service.description}
                    </div>
                </div>
            ))}
            </div>
        </div>
      );
    };

export default ServiceSection;