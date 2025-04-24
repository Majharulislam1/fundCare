import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const Our_Mission_home = () => {
    return (
        <div> <div className='w-4/5 mx-auto py-10'>
            <div className='grid grid-cols-2 gap-10 py-10'>
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

                    <div className='grid grid-cols-4 py-6'>
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
                    <h1>image section</h1>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Our_Mission_home;