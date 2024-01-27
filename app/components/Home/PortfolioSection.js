import React from 'react';
import Button from '../Button/Button';

const PortfolioSection = () => {
    return (
        <div className='container mx-auto mt-40 w-full'>
            <div className='flex justify-between items-center'>
                <div className='w-5/12'>
                    <p className='text-bColor text-xl0 font-semibold'>Portfolio</p>
                    <p className='mb-5 text-bColor text-xl64 font-bold'>Take A Look At Some Of <span className='text-tPurple'>Our Work</span></p>
                    <Button buttonText="All Project" />
                </div>
                <div className='w-5/12'>
                    <p className='text-bColor text-xl'>Explore our diverse portfolio showcasing the artistry of digital solutions at DicoIT. From captivating UI/UX designs to seamless web and app development, witness the innovation that defines our success stories.</p>
                </div>
            </div>
        </div>
    );
};

export default PortfolioSection;