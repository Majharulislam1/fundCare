
import React from 'react';
import { FaHeart } from "react-icons/fa";
import charity_1 from '../assets/charity_1.jpg';
import charity_2 from '../assets/charity_2.jpg';

const CharitySection = () => {
    return (
        <div>

            <div className='w-4/5 mx-auto py-10'>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6'>
                    <div>
                        <div>
                            <h1 className='text-4xl font-bold py-10 text-secondary'>Welcome to CharityPress <br /> please rise your hand</h1>
                            <p className='text-paragraph'>The CharityPress community was named a “Top 25 Best Global Philanthropist” by Barron’s. We beat Oprah. And, Mashable named CharityPress something like “the best place to raise money online for your favorite causes.”</p>
                        </div>

                        <div className="relative   w-full  py-12 mx-auto   ">
                            <div className="p-6 border-l-4 border-red-500 -6 rounded-r-xl bg-red-50">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                         
                                    </div>
                                    <div className="ml-3">
                                        <div className="text-sm text-paragraph">
                                            <p>If you don’t understand how fast and easy it is to so long for your favorite charity on FundPress, please try it. How it works page, Contact us.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                      
                       
                             <button className='px-4 py-2 bg-secondary text-white rounded-lg font-semibold flex items-center  '>  <FaHeart className='mr-2'/> Donate now</button>
                        </div>


                    </div>
                    <div>
                          <div className='grid grid-cols-2 w-4/5 mx-auto'>
                                <div>
                                     <img src={charity_1} className='rounded-lg' alt="" />
                                </div>
                                <div>
                                     <img src={charity_2} className='rounded-lg' alt="" />
                                </div>
                          </div>


                    </div>
                </div>
            </div>



        </div>
    );
};

export default CharitySection;
