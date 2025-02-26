import React from 'react';
import Marquee from "react-fast-marquee";
import client1 from '../assets/client1.png';
import client2 from '../assets/client2.png';
import client3 from '../assets/client3.png';
import client4 from '../assets/client4.png';
import client5 from '../assets/client5.png';
import client7 from '../assets/client7.png';
import client8 from '../assets/client8.png';
import client9 from '../assets/client9.png';
import client10 from '../assets/client10.png';

const Sponsored_section = () => {
    return (
        <div className='w-4/5 mx-auto pb-10'>
            <div className='text-center'>
               <h1 className='text-paragraph text-lg'>We collaborate with 100+ donation and charity organizations</h1>
            </div>

            <Marquee>

                <div>
                    <img className='w-1/4' src={client1} alt="" />
                </div>
                <div>
                    <img className='w-2/4' src={client2} alt="" />
                </div>
                <div>
                    <img className='w-2/4' src={client3} alt="" />
                </div>
                <div>
                    <img className='w-2/4' src={client4} alt="" />
                </div>
                <div>
                    <img className='w-2/4' src={client5} alt="" />
                </div>
                <div>
                    <img className='w-2/4' src={client7} alt="" />
                </div>
                <div>
                    <img className='w-2/4' src={client8} alt="" />
                </div>
                <div>
                    <img className='w-2/4' src={client9} alt="" />
                </div>
                <div>
                    <img className='w-2/4' src={client10} alt="" />
                </div>


            </Marquee>


        </div>
    );
};

export default Sponsored_section;