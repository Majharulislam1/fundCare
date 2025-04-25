import React from 'react';
import event_bg from '../assets/event-bg.jpg';
import event_1 from '../assets/event-1.jpg';
import event_2 from '../assets/event-2.jpg';
import event_3 from '../assets/event-3.jpg';
import event_4 from '../assets/event-4.jpg';
import event_5 from '../assets/event-5.jpg';
import event_6 from '../assets/event-6.jpg';

import { MdOutlineWatchLater } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const Events = () => {



    const events = [
        {
            "title": "Youth Commissioner Weekend",
            "time": "10:00 am - 10:00 am",
            "location": "Conference Room A",
            'image': `${event_1}`,
            'date' : '03',
            'month':'April'
        },
        {
            "title": "Emergency First Aid at Work (London)",
            "time": "2:00 am - 10:00 am",
            "location": "Zoom",
            'image': `${event_2}`,
            'date' : '07',
            'month':'May'
        },
        {
            "title": "AFVS CIC Refresher Trustee Training – Trustee Roles & Responsibilities",
            "time": "3:00 am - 10:00 am",
            "location": "Meeting Room 2",
            'image': `${event_3}`,
            'date' : '18',
            'month':'July'
        },
        {
            "title": "Trustee Leadership Programme – London Spring 2020",
            "time": "5:00 am - 10:00 am",
            "location": "Google Meet",
            'image': `${event_4}`,
            'date' : '13',
            'month':'June'
        },
        {
            "title": "Charity Meetup – The Future of Charity",
            "time": "7:00 am - 10:00 am",
            "location": "Office - Floor 3",
            'image': `${event_5}`,
            'date' : '23',
            'month':'April'
        },
        {
            "title": "Charity Management Degree Apprenticeship Taster Event",
            "time": "9:00 am - 10:00 am",
            "location": "Auditorium",
            'image': `${event_6}`,
            'date' : '26',
            'month':'July'
        }
    ]



    return (
        <div className="lg:mt-[90px] md:mt-[90px] sm:mt-[67px]">
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
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 py-10'>

                    {
                        events.map(event => {
                            return (

                                <div>
                                    <div>
                                        <img src={event_1} className='rounded-lg' alt="" />
                                    </div>
                                    <div className='flex items-start justify-between py-8'>
                                        <div className='lg:w-[15%] md:w-[20%] sm:w-[15%] border-b-4 pb-4 border-primary'>
                                            <h1 className='lg:text-5xl md:text-4xl sm:text-4xl font-bold pb-4'>{event.date}</h1>
                                            <h3 className='lg:text-3xl md:text-2xl sm:text-2xl font-bold'>{event.month}</h3>
                                        </div>
                                        <div className='lg:w-[80%] md:w-[75%] sm:w-[80%]'>
                                            <h1 className='lg:text-3xl md:text-2xl sm:text-2xl font-bold pb-4'>{event.title}</h1>
                                            <p className='text-paragraph flex items-center'><MdOutlineWatchLater className='mr-2' /> {event.time}</p>
                                            <p className='text-paragraph flex items-center'><CiLocationOn className='mr-2' />{event.location}</p>
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }



                </div>

            </div>




        </div>
    );
};

export default Events;