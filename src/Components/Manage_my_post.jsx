import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Manage_my_post = () => {
    return (
        <div className="lg:mt-[90px] md:mt-[90px] sm:mt-[67px]">
            <Helmet>
                <title>Manage My Post</title>
            </Helmet>
            <div className='text-center flex justify-center items-center sm:flex-col lg:flex-row md:flex-row my-4'>

                <NavLink
                    to="my_volunteer_need_post"
                    className={({ isActive }) =>
                        isActive ? 'text-[1rem] mr-6 font-semibold text-white bg-secondary rounded-sm px-2 py-1' : 'text-[1rem] mr-6 font-semibold text-black'
                    }
                >
                  My Volunteer need post
                </NavLink>
                <NavLink
                    to="my_volunteer_request_post"
                    className={({ isActive }) =>
                        isActive ? 'text-[1rem] mr-6 font-semibold text-white bg-secondary rounded-sm px-2 py-1' : 'text-[1rem] mr-6 font-semibold text-black'
                    }
                >
                  My Volunteer need post
                </NavLink>

             

            </div>

            <Outlet />



        </div>
    );
};

export default Manage_my_post;