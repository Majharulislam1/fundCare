import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Manage_my_post = () => {
    return (
        <div>
             <div className='text-center'>
                 
                 <Link to={'my_volunteer_need_post'} className='text-lg mr-3'>My Volunteer need post</Link>
                 <Link to={'my_volunteer_request_post'}>My Volunteer Request post</Link>
                 
             </div>

            <Outlet />



        </div>
    );
};

export default Manage_my_post;