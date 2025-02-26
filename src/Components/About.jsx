import React from 'react';
import bg_img from '../assets/about img.jpg';
import { BiHealth } from "react-icons/bi";
import { RiHealthBookFill } from "react-icons/ri";
import { FaPlateWheat } from "react-icons/fa6";
import { TbHeartHandshake } from "react-icons/tb";
import { BiSolidDonateHeart } from "react-icons/bi";
import { MdDonutSmall } from "react-icons/md";
import Team from './Team';

const About = () => {
    return (
        <div className="lg:mt-[120px] md:mt-[120px] sm:mt-[67px]">
            <div className=" text-center py-10">
                <h1 className="lg:text-5xl md:text-4xl sm:text-3xl font-bold text-title  mb-4">About us</h1>
                <p className='lg:w-2/4 md:w-2/4 sm:w-4/5 mx-auto'>Empowering individuals and communities to raise funds for the causes that matter most. Fundcare is a trusted crowdfunding platform that connects people in need with generous donors worldwide.</p>
            </div>


            <div className='w-4/5 mx-auto mb-5'>
                <div
                    style={{ backgroundImage: `url(${bg_img})` }}
                    className="bg-cover bg-center h-96 w-full rounded-xl"
                >
                    <h1 className="text-white text-3xl font-bold text-center pt-10">

                    </h1>
                </div>
            </div>

            <div>
                <div className="text-center py-10">
                    <h1 className="lg:text-5xl md:text-4xl sm:text-3xl font-bold text-title mb-4"> Our Mission </h1>
                    <p className="lg:w-1/2 md:w-3/4 sm:w-4/5 mx-auto text-paragraph">Empowering individuals and communities to raise funds for the causes that matter most. Fundcare is a trusted crowdfunding platform that connects people in need with generous donors worldwide.</p>
                </div>
            </div>





            <div className="  py-16 w-4/5 mx-auto   lg:py-20">
                 
                <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1">
                    <div className="p-5 duration-300 transform bg-white border rounded shadow-sm  ">
                        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                      
                        <BiHealth className='text-2xl'/>
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Creating Smiles, Changing Worlds</h6>
                        <p className="text-sm text-gray-900">
                        Morbi sit amet ultricies felis, non aliquam urna. Proin id dui ut lectus blandit imperdiet. Nunc eu lorem est tempus ligula convallis.
                        </p>
                    </div>
                    <div className="p-5 duration-300 transform bg-white border rounded shadow-sm  ">
                        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                        
                        <RiHealthBookFill className='text-2xl'/>
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Acts of Kindness, Seeds of Change</h6>
                        <p className="text-sm text-gray-900">
                        Donec pretium ac ligula non aliquam. Curabitur pulvinar orci sed ex ornare, id facilisis nibh rhoncus. Duis in vehicula mi.
                        </p>
                    </div>
                    <div className="p-5 duration-300 transform bg-white border rounded shadow-sm  ">
                        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                        
                        <FaPlateWheat className='text-2xl'/>
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Spreading Joy, Changing Lives</h6>
                        <p className="text-sm text-gray-900">
                        Aenean sodales lectus augue, sed porttitor velit fermentum non. Donec in vestibulum elit, vel pretium magna. Sed velit lectus.
                        </p>
                    </div>

                    <div className="p-5 duration-300 transform bg-white border rounded shadow-sm  ">
                        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                   
                        <TbHeartHandshake className='text-2xl'/>
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Bringing Hope, One Donation at a Time</h6>
                        <p className="text-sm text-gray-900">
                        Every contribution makes a difference in someone's life. Join us in creating a brighter future.
                        </p>
                    </div>

                    <div className="p-5 duration-300 transform bg-white border rounded shadow-sm  ">
                        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                        <MdDonutSmall className='text-2xl'/>
                        </div>
                        <h6 className="mb-2 font-semibold leading-5"> Empowering Communities, Changing Lives</h6>
                        <p className="text-sm text-gray-900">
                        Together, we can turn dreams into reality. Support, share, and make an impact today.
                        </p>
                    </div>
                    <div className="p-5 duration-300 transform bg-white border rounded shadow-sm  ">
                        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                        
                        <BiSolidDonateHeart className='text-2xl'/>
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Give a Little, Change a Lot</h6>
                        <p className="text-sm text-gray-900">
                        A small act of kindness can create a big ripple of change. Be the reason someone smiles today.
                        </p>
                    </div>
                </div>

            </div>


       



<Team></Team>

        </div>
    );
};

export default About;