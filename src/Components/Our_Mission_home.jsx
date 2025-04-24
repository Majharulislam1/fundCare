import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import achieve_image_1 from '../assets/archive-img-1.png';
import achieve_image_2 from '../assets/archive-img-2.png';
import achieve_image_3 from '../assets/archive-img-3.png';


const Our_Mission_home = () => {
    return (
        <div> <div className='w-4/5 mx-auto py-10'>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10 py-10 justify-center items-center'>
                <div>
                    <div className='py-10'>
                        <h3 className='text-2xl text-primary font-semibold'>Our Mission</h3>
                        <h1 className='text-5xl text-secondary font-bold py-1'>Archived</h1>
                    </div>
                    <div className='pb-6'>
                        <p className='text-paragraph'>We register charities in England and Wales , to ensure that the public can support charities with confidence. As registrar, we are responsible for maintaining an accurate.</p>
                    </div>
                    <div>
                        <p className='text-xl text-secondary py-4'> Our strategic priorities up to 2018 are:</p>
                        <div>
                            <p className='flex items-center text-paragraph'> <FaArrowRight className='mx-2 text-primary' /> Protecting charities from abuse or mismanagement</p>
                            <p className='flex items-center text-paragraph'> <FaArrowRight className='mx-2 text-primary' /> Enabling trustees to run their charities effectively</p>
                            <p className='flex items-center text-paragraph'> <FaArrowRight className='mx-2 text-primary' /> Encouraging greater transparency and accountability</p>





                        </div>
                    </div>

                    <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 py-6'>
                        <div className='text-center'>
                            <h1 className='text-4xl font-bold text-secondary py-2'> 135 +</h1>
                            <p className='text-lg text-primary'>Primary Schools</p>
                        </div>
                        <div className='text-center'>
                            <h1 className='text-4xl font-bold text-secondary py-2'> 19 +</h1>
                            <p className='text-lg text-primary'>Hospitals</p>
                        </div>
                        <div className='text-center'>
                            <h1 className='text-4xl font-bold text-secondary py-2'> 90 +</h1>
                            <p className='text-lg text-primary'>Volunteers</p>
                        </div>
                        <div className='text-center'>
                            <h1 className='text-4xl font-bold text-secondary py-2'> 2 +</h1>
                            <p className='text-lg text-primary'>Winning Awards</p>
                        </div>
                    </div>




                </div>
                <div>
                    <div className=" flex items-center justify-center p-4 sm:p-6 lg:p-8">
                        <div className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl">
                            {/* Top Wide Image */}
                            <div className="mb-4 sm:mb-6">
                                <img
                                    src={achieve_image_1}
                                    alt="Desert Scene with People and Donkey"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover sm:h-48 md:h-64 lg:h-80"
                                />
                            </div>
                            {/* Bottom Two Images */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                <img
                                    src={achieve_image_2}
                                    alt="People in Traditional Clothing"
                                    className="w-full h-48 sm:h-56 md:h-64 lg:h-72 rounded-lg shadow-lg object-cover"
                                />
                                <img
                                    src={achieve_image_3}
                                    alt="Child Writing"
                                    className="w-full h-48 sm:h-56 md:h-64 lg:h-72 rounded-lg shadow-lg object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Our_Mission_home;