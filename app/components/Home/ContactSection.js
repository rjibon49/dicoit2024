'use client'

import { faDribbble, faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Button from '../Button/Button';
import { ToastContainer, toast } from 'react-toastify';

const ContactSection = () => {

    const initialValues = {
        name: "",
        email: "",
        subject: "",
        message: "",
    };

    const [state, setState] = useState({
        values: initialValues,
        isLoading: false,
        error: null,
    });

    const { values, isLoading, error } = state;

    const handleChange = ({ target }) => {
        // Check if the target is a file input
        if (target.type === 'file') {
            // Update the state with the selected file
            setState((prev) => ({
                ...prev,
                values: {
                    ...prev.values,
                    attachment: target.files[0], // Assuming single file selection
                },
            }));
        } else {
            // Update the state for other input fields
            setState((prev) => ({
                ...prev,
                values: {
                    ...prev.values,
                    [target.name]: target.value,
                },
            }));
        }
    };

    const onSubmit = async (event) => {
        event.preventDefault();
    
        // Check if required fields are empty
        const requiredFields = ['name', 'email', 'subject', 'message'];
        const emptyFields = requiredFields.filter(field => !values[field]);
    
        if (emptyFields.length > 0) {
            // Show error toast for empty fields
            toast.error(`Please fill in the required fields: ${emptyFields.join(', ')}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return;
        }
    
        // Start loading
        setState((prev) => ({
            ...prev,
            isLoading: true,
        }));
    
        try {
            // Pass the selected file to the sendContactForm function
            await sendContactForm(values);
    
            // Reset form fields after successful submission
            setState({
                values: initialValues,
                isLoading: false,
                error: null,
            });
    
            // Show success toast
            toast.success('Message sent successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } catch (error) {
            // Stop loading on error
            setState((prev) => ({
                ...prev,
                isLoading: false,
                error: error.message,
            }));
    
            // Show error toast
            toast.error('Failed to send message. Please try again.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } finally {
            // Reset button text to "SEND MESSAGE" after success or error
            setState((prev) => ({
                ...prev,
                isLoading: false,
            }));
        }
    };

    return (
        <div className='container mx-auto py-20' id="contact">
            <div className='flex items-center flex-wrap gap-5 2xl:justify-evenly xl:justify-evenly lg:justify-around md:justify-normal sm:justify-normal mx-2'>
                <div className='2xl:w-2/5 xl:w-2/5 lg:w-2/5 md:w-full sm:w-full'>
                    <p className='text-bColor text-6xl font-semibold mb-7'>Let Us Discuss <br />Your Project Details!</p>
                    <span className='divide mb-12'> </span>
                    <div>
                        <ul className='flex flex-col gap-y-4'>
                            <li className='text-lg text-bColor flex gap-5'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">  <path d="M21.9999 16.9201V19.9201C22.0011 20.1986 21.944 20.4743 21.8324 20.7294C21.7209 20.9846 21.5572 21.2137 21.352 21.402C21.1468 21.5902 20.9045 21.7336 20.6407 21.8228C20.3769 21.912 20.0973 21.9452 19.8199 21.9201C16.7428 21.5857 13.7869 20.5342 11.1899 18.8501C8.77376 17.3148 6.72527 15.2663 5.18993 12.8501C3.49991 10.2413 2.44818 7.27109 2.11993 4.1801C2.09494 3.90356 2.12781 3.62486 2.21643 3.36172C2.30506 3.09859 2.4475 2.85679 2.6347 2.65172C2.82189 2.44665 3.04974 2.28281 3.30372 2.17062C3.55771 2.05843 3.83227 2.00036 4.10993 2.0001H7.10993C7.59524 1.99532 8.06572 2.16718 8.43369 2.48363C8.80166 2.80008 9.04201 3.23954 9.10993 3.7201C9.23656 4.68016 9.47138 5.62282 9.80993 6.5301C9.94448 6.88802 9.9736 7.27701 9.89384 7.65098C9.81408 8.02494 9.6288 8.36821 9.35993 8.6401L8.08993 9.9101C9.51349 12.4136 11.5864 14.4865 14.0899 15.9101L15.3599 14.6401C15.6318 14.3712 15.9751 14.1859 16.3491 14.1062C16.723 14.0264 17.112 14.0556 17.4699 14.1901C18.3772 14.5286 19.3199 14.7635 20.2799 14.8901C20.7657 14.9586 21.2093 15.2033 21.5265 15.5776C21.8436 15.9519 22.0121 16.4297 21.9999 16.9201Z" stroke="#171717" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </svg> 617-371-7731</li>
                            <li className='text-lg text-bColor flex gap-5'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#171717" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#171717" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </svg>HQ in California, USA</li>
                            <li className='text-lg text-bColor flex gap-5'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">  <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6M22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6M22 6L12 13L2 6" stroke="#171717" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </svg> hello@dicoit.com</li>
                        </ul>
                        <ul className='flex gap-4 my-12'>
                            <li><FontAwesomeIcon icon={faDribbble} className=' text-xl0' /></li>
                            <li><FontAwesomeIcon icon={faFacebook} className=' text-xl0' /></li>
                            <li><FontAwesomeIcon icon={faXTwitter} className=' text-xl0' /></li>
                            <li><FontAwesomeIcon icon={faInstagram} className=' text-xl0' /></li>
                            <li><FontAwesomeIcon icon={faLinkedin} className=' text-xl0' /></li>
                        </ul>
                    </div>
                    <Button buttonText="Get A Schedule" />
                </div>

                <div className='2xl:w-2/5 xl:w-2/5 lg:w-2/5 md:w-full sm:w-full'>
                    <div className=''>
                        <form className="flex flex-col gap-5" onSubmit={onSubmit}>
                            <div className="flex flex-col gap-3">
                                <label htmlFor="inputName" className="text-xl0 font-medium">FULL NAME <span className='colorText'>*</span></label>
                                <input type="text" required className="2xl:w-4/5 xl:w-4/5 lg:w-4/5 md:w-full sm:w-full h-10 rounded-2xl ps-3" id="inputName" placeholder='Your Full Name' value={values.name} name="name" onChange={handleChange} />
                            </div>
                            <div className="flex flex-col gap-3">
                                <label htmlFor="inputEmail4" className="text-xl0 font-medium">E-MAIL <span className='colorText'>*</span></label>
                                <input type="email" required className="2xl:w-4/5 xl:w-4/5 lg:w-4/5 md:w-full sm:w-full h-10 rounded-2xl ps-3" id="inputEmail4" placeholder='Your Email Address' value={values.email} name="email" onChange={handleChange} />
                            </div>
                            <div className="flex flex-col gap-3">
                                <label htmlFor="inputSubject" className="text-xl0 font-medium">SUBJECT <span className='colorText'>*</span></label>
                                <input type="text" required className="2xl:w-4/5 xl:w-4/5 lg:w-4/5 md:w-full sm:w-full h-10 rounded-2xl ps-3" id="inputSubject" placeholder='Select a subject' value={values.subject} name="subject" onChange={handleChange} />
                            </div>
                            <div className="flex flex-col gap-3">
                                <label htmlFor="inutMessage" className="text-xl0 font-medium">MESSAGE</label>
                                <textarea className="2xl:w-4/5 xl:w-4/5 lg:w-4/5 md:w-full sm:w-full rounded-2xl ps-3" id="inutMessage" rows={7} value={values.message} name="message" onChange={handleChange}></textarea>
                            </div>
                            <div className="col-12">
                                <button className='bg-purple text-white text-xl0 font-bold py-5 px-8 rounded-full flex items-center' onClick={onSubmit} disabled={isLoading}>
                                    {isLoading ? (
                                        <div className="d-flex justify-content-center btnMessageSpin">
                                            <div className="spinner-border spinner-border-sm" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                        </div>
                                    ) : 'Send Message'}
                                </button>
                                <ToastContainer />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;