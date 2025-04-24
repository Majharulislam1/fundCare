import React from 'react';
import { FaBottleWater } from "react-icons/fa6";

const Funded_Charity = () => {
    return (
        <div className='w-4/5 mx-auto pb-12'>
            <div className="text-center pb-16">
                <h1 className="lg:text-5xl md:text-4xl sm:text-3xl font-bold text-secondary mb-4">We’ve funded <span className='text-primary'>120,00 charity projects</span> for <br />
                20M people around the world.</h1>
            </div>



          <div className='grid grid-cols-4 gap-4'>
                <div>
                    <div>
               
                    <FaBottleWater  className='text-5xl text-primary'/>
                    </div>
                    <div>
                         <h4 className='text-secondary font-bold py-6 text-lg'>Pure Water <br />
                         For Poor People</h4>
                         <p className='text-paragraph'>663 million people drink dirty water. Learn how access to clean water can improve health, boost local economies.</p>
                    </div>

                </div>
                <div>
                    <div>
               
                    <FaBottleWater  className='text-5xl text-primary'/>
                    </div>
                    <div>
                         <h4 className='text-secondary font-bold py-6 text-lg'>Pure Water <br />
                         For Poor People</h4>
                         <p className='text-paragraph'>663 million people drink dirty water. Learn how access to clean water can improve health, boost local economies.</p>
                    </div>

                </div>
                <div>
                    <div>
               
                    <FaBottleWater  className='text-5xl text-primary'/>
                    </div>
                    <div>
                         <h4 className='text-secondary font-bold py-6 text-lg'>Pure Water <br />
                         For Poor People</h4>
                         <p className='text-paragraph'>663 million people drink dirty water. Learn how access to clean water can improve health, boost local economies.</p>
                    </div>

                </div>
                <div>
                    <div>
               
                    <FaBottleWater  className='text-5xl text-primary'/>
                    </div>
                    <div>
                         <h4 className='text-secondary font-bold py-6 text-lg'>Pure Water <br />
                         For Poor People</h4>
                         <p className='text-paragraph'>663 million people drink dirty water. Learn how access to clean water can improve health, boost local economies.</p>
                    </div>

                </div>
          </div>

        </div>
    );
};

export default Funded_Charity;