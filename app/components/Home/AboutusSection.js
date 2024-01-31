import Image from 'next/image';
import React from 'react';
import socialImage from '../../../public/src/img/socialShareImage.png';

const AboutusSection = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex items-center lg:mx-2 md:mx-2 sm:mx-2 relative'>
                <div className='w-1/2 mt-40'>
                    <div className='mb-5'>
                        <p className='text-bColor text-xl0 font-semibold'>About Us</p>
                        <p className='mb-5 text-bColor text-xl64 font-bold'>Elevate Every <span className='text-tPurple'>Interaction</span> with Our Design Passion.</p>
                    </div>
                    <div>
                        <p className='text-bColor text-xl'>Welcome to DicoIT, where digital innovation meets excellence. At DicoIT, we are dedicated to redefining the digital landscape through cutting-edge solutions in UX design, web and app development, and creative campaigns. With a passion for transforming ideas into impactful realities, we invite you to explore the limitless possibilities of our services. Elevate your digital journey with DicoIT – your partner in crafting distinctive, user-centric, and results-driven solutions. <br /> <br /></p>
                        <p className='text-bColor text-xl'>DicoIT offers comprehensive digital solutions, including Social Media Management, Digital Promotion, Analytics, Consulting, and UI/UX expertise. We specialize in Web and App development, covering Web Development, Mobile App Development, and E-commerce Solutions. Our services are designed to enhance online presence and user engagement. <br /> <br />Additionally, DicoIT excels in creating impactful Creative Campaigns, focusing on dynamic Advertisement strategies for lasting impressions in the digital space. Choose DicoIT for a streamlined approach to digital excellence.</p>
                    </div>
                </div>
                <div className='w-1/2 flex justify-center mt-32'>
                    <Image src={socialImage} alt='Social Share Image' width={600} height={600} className='full' />
                </div>
            </div>
        </div>   
    );
};

export default AboutusSection;