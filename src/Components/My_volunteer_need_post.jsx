import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './Authentication';
import My_volunteer_post_table from './My_volunteer_post_table';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const My_volunteer_need_post = () => {

    const { user } = useContext(AuthContext);

    const [volunteer, setVolunteer] = useState();
    const [loading, setLoading] = useState(true);





    useEffect(() => {
        fetch(`http://localhost:3000/my_volunteer_need_post/${user?.email}`)
            .then(res => res.json())
            .then((data) => {
                setVolunteer(data)
                setLoading(false);
            })
            .catch(() => {

                setLoading(false);
            });
    }, [user?.email])

   
    if (loading) return (
        <div className="flex justify-center py-8">
                  <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-[#1b206b]"></div>
            </div>
    )


    return (
        <div>
            <Helmet>
                <title>My Volunteer need post</title>
            </Helmet>

            <div className=" w-full py-10  flex items-center justify-center">
                <h1 className="text-secondary text-3xl font-bold">My volunteer need post</h1>
            </div>

            {
                volunteer?.length === 0 ? (<div className='h-screen flex justify-center items-center'>
                    <div className='text-center'>
                        <h2 className='text-3xl font-bold text-primary'>No Volunteer Need Posts Found</h2>
                        <p>It looks like you haven't created any posts yet.</p>
                        <Link to={'/add_volunteer_need'} >
                        <button className='text-white bg-primary rounded-lg px-3 py-1 my-3'>Add volunteer</button>
                        </Link>
                    </div>
                </div>) :
                (<div className="overflow-x-auto w-4/5 mx-auto my-4">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
    
                                <th>Title</th>
                                <th>Volunteer Needed</th>
                                <th>Deadline</th>
                                <th>Category</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
    
    
                            {
                                volunteer.map(data => <My_volunteer_post_table post={data} key={data._id}></My_volunteer_post_table>)
                            }
    
    
    
                        </tbody>
    
                    </table>
                </div>)
            }

            

        </div>
    );
};

export default My_volunteer_need_post;