import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './Authentication';
import My_volunteer_request_card from './My_volunteer_request_card';
import { Link } from 'react-router-dom';

const My_volunteer_request_post = () => {

    const { user } = useContext(AuthContext);

    const [volunteer, setVolunteer] = useState();
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch(`http://localhost:3000/my_volunteer_request_post/${user?.email}`)
            .then(res => res.json())
            .then((data) => {
                setVolunteer(data)
                setLoading(false);
            })
            .catch(() => {

                setLoading(false);
            });
    }, [user?.email])


    if (loading) return <p>Loading...</p>;

    

    return (
        <div>
            <div className=" w-full py-10  flex items-center justify-center">
                <h1 className="text-secondary text-3xl font-bold">My volunteer Request post</h1>
            </div>

            <div className='w-4/5 mx-auto'>
                {
                    volunteer?.length === 0 ? (<div className='h-screen flex justify-center items-center'>
                        <div className='text-center'>
                            <h2 className='text-3xl font-bold text-primary'>No Volunteer Request Posts Found</h2>
                            <p>It seems you haven't made any requests yet.</p>
                            <Link to={'/all_volunteer'} >
                                <button className='text-white bg-primary rounded-lg px-3 py-1 my-3'>Add volunteer</button>
                            </Link>
                        </div>
                    </div>) :
                        (
                            <div className="w-4/5 mx-auto mt-6">
                                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-4 gap-6 ">
                                    {
                                        volunteer.map(data => <My_volunteer_request_card post={data} key={data._id}></My_volunteer_request_card>)
                                    }
                                </div>
                            </div>
                        )
                }
            </div>




        </div>
    );
};

export default My_volunteer_request_post;