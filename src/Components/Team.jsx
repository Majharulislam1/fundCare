import React from 'react';
import team1 from '../assets/1.jpg';
import team2 from '../assets/2.jpg';
import team3 from '../assets/3.jpg';
import team4 from '../assets/4.jpg';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Team = () => {
    return (
        <div className='w-4/5 mx-auto py-10'>
            <div className="text-center">
                <h1 className="lg:text-5xl md:text-4xl sm:text-3xl font-bold text-title mb-4">Our Team </h1>
                <p className="lg:w-1/2 md:w-3/4 sm:w-full mx-auto text-paragraph">Behind Fundcare is a passionate team dedicated to making a difference. Meet the people working to empower fundraisers and help communities thrive! </p>
            </div>







            <div className=" py-16 mx-auto    lg:py-20">

                <div className="grid gap-10 mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
                    <div>
                        <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
                            <img
                                className="absolute object-cover w-full h-full rounded"
                                src={team1}
                                alt="Person"
                            />
                        </div>
                        <div className="flex flex-col sm:text-center">
                            <p className="text-lg font-bold text-primary">Oliver Aguilerra</p>
                            <p className="mb-5 text-xs text-gray-800">Volunteer</p>
                            <div className="flex items-center space-x-3 sm:justify-center">
                            <FaFacebook className='text-xl'/>
                                 <FaTwitter className='text-xl'/>
                                 <FaYoutube className='text-xl'/>
                                 <FaInstagram className='text-xl'/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
                            <img
                                className="absolute object-cover w-full h-full rounded"
                                src={team2}
                                alt="Person"
                            />
                        </div>
                        <div className="flex flex-col sm:text-center">
                            <p className="text-lg font-bold text-primary">Marta Clermont</p>
                            <p className="mb-5 text-xs text-gray-800">volunteer</p>
                            <div className="flex items-center space-x-3 sm:justify-center">
                            <FaFacebook className='text-xl'/>
                                 <FaTwitter className='text-xl'/>
                                 <FaYoutube className='text-xl'/>
                                 <FaInstagram className='text-xl'/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
                            <img
                                className="absolute object-cover w-full h-full rounded"
                                src={team3}
                                alt="Person"
                            />
                        </div>
                        <div className="flex flex-col sm:text-center">
                            <p className="text-lg font-bold text-primary">Alice Melbourne</p>
                            <p className="mb-5 text-xs text-gray-800">volunteer</p>
                            <div className="flex items-center space-x-3 sm:justify-center">
                            <FaFacebook className='text-xl'/>
                                 <FaTwitter className='text-xl'/>
                                 <FaYoutube className='text-xl'/>
                                 <FaInstagram className='text-xl'/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
                            <img
                                className="absolute object-cover w-full h-full rounded"
                                src={team4}
                                alt="Person"
                            />
                        </div>
                        <div className="flex flex-col sm:text-center">
                            <p className="text-lg font-bold text-primary">Louis Damian</p>
                            <p className="mb-5 text-xs text-gray-800">Volunteer</p>
                            <div className="flex items-center space-x-3 sm:justify-center">
                                 <FaFacebook className='text-xl'/>
                                 <FaTwitter className='text-xl'/>
                                 <FaYoutube className='text-xl'/>
                                 <FaInstagram className='text-xl'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Team;