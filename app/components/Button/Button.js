import Image from 'next/image';
import React from 'react';

import upArrow from '../../../public/src/icons/arrowIcon.png';

const Button = ({ buttonText, onClick, disabled }) => {
    return (
        <button 
        className='bg-purple text-white text-xl0 font-bold py-5 px-8 rounded-full flex items-center'
        onClick={onClick}
        disabled={disabled}
        >
            {buttonText}
            <Image src={upArrow} alt='' width={40} height={40} className='ms-3' />
        </button>
    );
};

export default Button;