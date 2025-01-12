import moment from 'moment';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const My_volunteer_request_card = ({post}) => {
    const {category,cover_img,title,Deadline,description,_id} = post;
    const newDate = moment(Deadline).format("MMM Do YY"); 
    const navigate = useNavigate();


     const handleDelete = () => {
    
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
    
    
            fetch(`http://localhost:3000/delete_request/${_id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                    if (data.deletedCount === 1) {
                        Swal.fire({
                            title: "Successfully Deleted!",
                            text: "Volunteer request has been deleted.",
                            icon: "success"
                        });
                        
                        navigate('/all_volunteer')
                        
                    }
                });
            }
            })
          
        }


    return (
        <div>
             
                        <div className="w-full max-w-full mb-8   flex flex-col justify-between items-stretch">
                                    <img src={cover_img} alt="Card img" className="object-cover object-center w-full h-48" />
                                    <div className="flex flex-grow">
                                        <div className="triangle"></div>
                                        <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400 text">
                                            <div>
                                                <a href="#"
                                                    className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-primary hover:text-primary">{category}</a>
                                                    <p>Deadline: {newDate}</p>
                                                <a href="#"
                                                    className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-primary">
                                                    {title}
                                                </a>
                                                <p className="mb-4 text-paragraph">
                                                {
                                                    description.slice(50)
                                                }
                                                </p>
                                            </div>
                                            <div>
                                             
                                                    
                                                   <button onClick={handleDelete} className='text-white bg-secondary px-3 py-1 rounded-sm'>Cancel Request</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                    
        </div>
    );
};

export default My_volunteer_request_card;