import React from 'react';
import event_bg from '../assets/event-bg.jpg';

const Events = () => {
    return (
        <div className="lg:mt-[120px] md:mt-[120px] sm:mt-[67px]">
             <div
            className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64 bg-cover bg-center flex items-center justify-center"
            style={{
                backgroundImage: `url(${event_bg})`,
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            
            <div className="relative text-center text-white">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide">
                    Event Calendar
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-2 sm:mt-3 font-medium">
                    OUR FUTURE EVENTS
                </p>
            </div>
        </div>



          {/* event grid section  */}


         <div className='w-3/4 mx-auto'>
             <div className='gird lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6'>

                  <div>
                       
                  </div>

             </div>

         </div>




        </div>
    );
};

export default Events;