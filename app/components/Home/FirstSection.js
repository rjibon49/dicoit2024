import Image from 'next/image';
import React from 'react';

import heroImg from '../../../public/src/img/backgroundImage.png';
import Button from '../Button/Button';

const FirstSection = () => {
    return (
        <>
            <div className='bg-darkBlack'>
                <div className='container mx-auto relative'>
                    <div className='flex items-center min-h-section'>
                        <div>
                            <div className='max-w-4xl'>
                                <h2 className='text-white text-9xl'><span className='font-bold'>UX Design studio for</span> <span className='colorText text-purple'>Digital Products</span></h2>
                            </div>
                            <div className='w-4/5 mt-8'>
                                <p className='text-white text-lg'>DicoIT excels in crafting digital brilliance through expert services in UI/UX design, as well as web and app development.</p>
                            </div>
                            <div className='mt-8'>
                                <Button buttonText="Work With Us" />
                            </div>
                        </div>
                        
                        <div className='absolute right-0' >
                            <Image src={heroImg} alt='Banner Image' className='full' height={631} width={763} quality={100} layout="responsive"/>
                        </div>
                    </div>
                </div>          
            </div>
        </>
    );
};

export default FirstSection;
