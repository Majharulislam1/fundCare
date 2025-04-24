
import React from 'react';

const CharitySection = () => {
    return (
        <div className="bg-white py-8 sm:py-12 lg:py-16">
            <div className="max-w-xs sm:max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
                    {/* Text Section */}
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 sm:mb-6">
                            Welcome to <span className="text-blue-600">CharityPress</span>
                        </h1>
                        <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-4 sm:mb-6">
                            The CharityPress community was named a "Top 25 BEST GLOBAL Philanthropist" by Barron's. We beat Oprah. And, Mashable named CharityPress something like "the best place to raise money online for your favorite causes."
                        </h2>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8">
                            If you don't understand how fast and easy it is to <span className="text-red-500 font-semibold">so long for your favorite charity FUNDPRESS</span>, please try it. How it works page. Contact us.
                        </p>
                        <button className="bg-teal-400 text-white font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-full shadow-lg hover:bg-teal-500 transition-colors duration-300">
                            Donate Now
                        </button>
                    </div>
                    {/* Image Section */}
                    <div className="flex-1 grid grid-cols-1 gap-4 sm:gap-6">
                        <img
                            src="https://via.placeholder.com/300x400?text=Child+1"
                            alt="Child 1"
                            className="w-full h-48 sm:h-56 md:h-64 lg:h-80 object-cover rounded-lg shadow-lg"
                        />
                        <img
                            src="https://via.placeholder.com/300x400?text=Child+2"
                            alt="Child 2"
                            className="w-full h-48 sm:h-56 md:h-64 lg:h-80 object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CharitySection;
