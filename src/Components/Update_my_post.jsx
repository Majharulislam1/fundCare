import React, { useContext, useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from './Authentication';
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet';

const Update_my_post = () => {
     const { user } = useContext(AuthContext);
     const navigate = useNavigate();
    const [Deadline, setStartDate] = useState(new Date());
    const {id} = useParams();
     const [volunteer, setVolunteer] = useState();
    const [loading, setLoading] = useState(true);
     
    
    
    const handleUpdate = (e)=>{
        e.preventDefault();

        const cover_img = e.target.img_url.value;
        const title = e.target.game_title.value;
        const name = e.target.name.value;
        const email = e.target.email.value;
        const description = e.target.description.value;
        const category = e.target.genres.value;
        const volunteers_needed = parseInt(e.target.volunteers_needed.value);
        const location = e.target.location.value;

      
        const value = { cover_img, title, name, email, description, category, volunteers_needed, Deadline,location }

        fetch(`http://localhost:3000/update_need_post/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(value)
          })
            .then(res => res.json())
            .then((data) => {
                 
                if(data.modifiedCount===1){
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Successfully Updated",
                        showConfirmButton: false,
                        timer: 2000
                      });
                    
                     
                    navigate('/manage_my_post');
                    
                }
            })



    }



        useEffect(() => {
            fetch(`http://localhost:3000/volunteer_details/${id}`)
                .then(res => res.json())
                .then((data) => {
                    setVolunteer(data)
                    setLoading(false);
                })
                .catch(() => {
    
                    setLoading(false);
                });
        }, [id])

        
       
        if (loading) return (
            <div className="flex justify-center py-8">
                      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-[#1b206b]"></div>
                </div>
        )
        const   { cover_img, title,  description, category, volunteers_needed,location } = volunteer;

    return (
         <div>
             <Helmet>
                <title>Update My Post</title>
            </Helmet>
                    <div>
                        <div className="relative w-full lg:h-60 md:h-36 sm:h-36 bg-[#1b206b]  flex items-center justify-center">
                            <h1 className="text-white text-3xl font-bold">Update Volunteer need post</h1>
                        </div>
        
                        <div className="lg:w-4/5 sm:w-full mx-auto">
                            <div className="bg-white   border-4 rounded-lg shadow relative m-10">
        
        
        
                                <div className="p-6 space-y-6">
                                    <form onSubmit={handleUpdate}>
                                        <div className="grid grid-cols-6 gap-6">
                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="product-name" className="text-sm font-medium text-gray-900 block mb-2">Thumbnail:</label>
                                                <input type="text" defaultValue={cover_img} name="img_url" id="product-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Thumbnail:" required="" />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="category" className="text-sm font-medium text-gray-900 block mb-2">Post Title:</label>
                                                <input type="text" defaultValue={title} name="game_title" id="category" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="post tile" required="" />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="name" className="text-sm font-medium text-gray-900 block mb-2">Organizer Name:</label>
                                                <input type="text" defaultValue={user?.displayName} name="name" id="brand" readOnly className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="User Name" required="" />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2">Organizer E-mail:</label>
                                                <input type="email" defaultValue={user?.email} name="email" readOnly id="price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="User E-mail" required="" />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="genres" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                                                    Category
                                                </label> 
        
                                                <select name="genres" defaultValue={category} id="genres" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                    <option selected disabled>Select Category</option>
                                                    <option value="Healthcare">Healthcare</option>
                                                    <option value="Education">Education</option>
                                                    <option value="Social service">Social service</option>
                                                    <option value="Animal welfare">Animal welfare</option>
                                                </select>
                                            </div>
        
                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="No. of volunteers needed" className="text-sm font-medium text-gray-900 block mb-2">No. of volunteers needed:</label>
                                                <input type="text" defaultValue={volunteers_needed} name="volunteers_needed" id="No. of volunteers needed" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="No. of volunteers needed:" required="" />
                                            </div>
        
                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="location" className="text-sm font-medium text-gray-900 block mb-2">Location:</label>
                                                <input type="text" defaultValue={location} name="location" id="location" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Location" required="" />
                                            </div>
        
                                            <div className="col-span-6 sm:col-span-3 ">
                                                <label className="text-sm font-medium text-gray-900 block mb-2">
                                                    Deadline:
                                                    <DatePicker
                                                        
                                                        className="shadow-sm mx-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                                        selected={volunteer?.Deadline}
                                                        onChange={(date) => setStartDate(date)}
                                                        required
                                                    />
                                                </label>
                                            </div>
                                            <div className="col-span-full">
                                                <label htmlFor="description" className="text-sm font-medium text-gray-900 block mb-2">Description:</label>
                                                <textarea defaultValue={description} name="description" id="description" rows="6" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" placeholder="Description"></textarea>
                                            </div>
        
                                        </div>
                                        <div className="p-6 border-t border-gray-200 rounded-b">
                                            <button className="text-white bg-[#1b206b] hover:bg-[#1b206b] focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Update</button>
                                        </div>
                                    </form>
                                </div>
        
        
        
                            </div>
                        </div>
        
                    </div>
        
        
                </div>
    );
};

export default Update_my_post;