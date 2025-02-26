import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "./Authentication";

import Swal from 'sweetalert2'
import { Helmet } from "react-helmet";



const Volunteer_Details = () => {
    const { id } = useParams();
   const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [volunteer, setVolunteer] = useState([]);
    const [loading, setLoading] = useState(true);
    const { category, cover_img, title, Deadline, description, volunteers_needed, location, name, email,_id } = volunteer;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const newDate = moment(Deadline).format("MMM Do YY");
    useEffect(() => {
        fetch(`https://fund-care-backend.vercel.app/volunteer_details/${id}`)
            .then(res => res.json())
            .then((data) => {
                setVolunteer(data)
                setLoading(false);
            })
            .catch(() => {

                setLoading(false);
            });
    }, [id])


     
   
        const handleRequest = (e) => {
            e.preventDefault();
    
            const cover_img = e.target.img_url.value;
            const title = e.target.game_title.value;
            const name = e.target.name.value;
            const email = e.target.email.value;
            const description = e.target.description.value;
            const category = e.target.category.value;
            const volunteers_needed = e.target.volunteers_needed.value;
            const location = e.target.location.value;
            const Deadline = e.target.deadline.value;
            const volunteer_name = e.target.volunteer_name.value;
            const volunteer_email = e.target.volunteer_email.value;
            const status = e.target.status.value;
            const suggestion = e.target.suggestion.value;
    
    
    
            const value = { cover_img, title, name, email, description, category, volunteers_needed, location, Deadline, volunteer_name, volunteer_email, status, suggestion };
    
            
    
           
                fetch("https://fund-care-backend.vercel.app/volunteer_request", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(value),
                })
                    .then(res => res.json())
                    .then((data) => {
                        if (data.insertedId) {
                            
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Successfully Requested",
                                showConfirmButton: false,
                                timer: 2000
                            });
                            navigate('/all_volunteer');
                            setIsModalOpen(false);
                            e.target.reset();
                        }
                    })
        
        
                     
        
                fetch(`https://fund-care-backend.vercel.app/volunteer_decrement/${_id}`,{
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json", 
                      },
                })
                .then( res => res.json())
                .then(data =>{
                      
                })
        }

    


    


        if (loading) return (
            <div className="flex justify-center py-8">
                      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-[#1b206b]"></div>
                </div>
        )


    return (
        <div className="lg:mt-[90px] md:mt-[90px] sm:mt-[67px]">
             <Helmet>
                <title>Volunteer Details</title>
            </Helmet>
            <div className="lg:w-4/5 md:w-4/5 sm:w-full mx-auto my-5">
                <div className="lg:w-1/2 md:w-2/3 sm:w-4/5 mx-auto">
                    <div className="flex justify-center">
                        <img src={cover_img} className="rounded-lg w-full" alt="" />
                    </div>
                    <div className="my-4 p-3">
                        <p className="mb-2">
                            <span className="bg-primary px-4 py-1 text-white font-bold rounded-lg">{category}</span>
                        </p>
                        <h1 className="text-4xl ">{title}</h1>
                        <p className="py-3">{description}</p>
                        <p className="font-bold">Volunteer Needed: <span className="font-bold text-secondary">{volunteers_needed}</span></p>
                        <p className="font-bold">Deadline: <span className="font-bold text-secondary">{newDate}</span></p>
                       
                       {
                         volunteers_needed > 0 ? (
                            <button onClick={() => setIsModalOpen(true)} className="bg-secondary text-white px-3 py-2 font-bold my-3 rounded-lg">
                            Be a Volunteer
                        </button>
                         ) : (
                            <p className="text-primary">No more volunteers are needed for this post.</p>
                         )
                       }

                       

                    </div>
                </div>
            </div>
            {isModalOpen && (
                <dialog
                    id="my_modal_4"
                    className="modal"
                    open
                    onClose={() => setIsModalOpen(false)}
                >
                    <div className="modal-box w-11/12 max-w-5xl">
                        <h3 className="font-bold text-lg">Volunteer Request</h3>
                        





                        <div className="p-6 space-y-6">
                            <form onSubmit={handleRequest}>
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="img_url" className="text-sm font-medium text-gray-900 block mb-2">Thumbnail:</label>
                                        <input type="text" defaultValue={cover_img} readOnly name="img_url" id="img_url" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Thumbnail:" required="" />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="post_title" className="text-sm font-medium text-gray-900 block mb-2">Post Title:</label>
                                        <input type="text" defaultValue={title} readOnly name="game_title" id="post_title" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="post tile" required="" />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="name" className="text-sm font-medium text-gray-900 block mb-2">Organizer Name:</label>
                                        <input type="text" defaultValue={name} name="name" id="brand" readOnly className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="User Name" required="" />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2">Organizer E-mail:</label>
                                        <input type="email" defaultValue={email} name="email" readOnly id="price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="User E-mail" required="" />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                                            Category
                                        </label>

                                        <input type="text" defaultValue={category} name="category" readOnly id="price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="User E-mail" required="" />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="No. of volunteers needed" className="text-sm font-medium text-gray-900 block mb-2">No. of volunteers needed:</label>
                                        <input type="text" defaultValue={volunteers_needed} readOnly name="volunteers_needed" id="No. of volunteers needed" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="No. of volunteers needed:" required="" />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="location" className="text-sm font-medium text-gray-900 block mb-2">Location:</label>
                                        <input type="text" defaultValue={location} readOnly name="location" id="location" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Location" required="" />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="deadline" className="text-sm font-medium text-gray-900 block mb-2">Deadline:</label>
                                        <input type="text" readOnly defaultValue={newDate} name="deadline" id="deadline" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Location" required="" />
                                    </div>


                                    <div className="col-span-full">
                                        <label htmlFor="description" className="text-sm font-medium text-gray-900 block mb-2">Description:</label>
                                        <textarea defaultValue={description} readOnly name="description" id="description" rows="4" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" placeholder="Description"></textarea>
                                    </div>

                                    {/* Be a volunteer document */}

                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="volunteer_name" className="text-sm font-medium text-gray-900 block mb-2">Volunteer Name:</label>
                                        <input type="text" readOnly defaultValue={user?.displayName} name="volunteer_name" id="volunteer_name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Volunteer Name" required="" />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="volunteer_email" className="text-sm font-medium text-gray-900 block mb-2">Volunteer Email:</label>
                                        <input type="text" readOnly defaultValue={user?.email} name="volunteer_email" id="volunteer_email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="volunteer_email" required="" />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="status" className="text-sm font-medium text-gray-900 block mb-2">Status:</label>
                                        <input type="text" readOnly defaultValue={'requested'} name="status" id="status" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Status" required="" />
                                    </div>

                                    <div className="col-span-full mb-4">
                                        <label htmlFor="suggestion" className="text-sm font-medium text-gray-900 block mb-2">Suggestion:</label>
                                        <textarea name="suggestion" id="suggestion" rows="4" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" placeholder="Suggestion"></textarea>
                                    </div>


                                </div>
                                <div className="p-6 border-t border-gray-200 rounded-b">
                                    <button className="text-white bg-[#1b206b] hover:bg-[#1b206b] focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Request</button>
                                </div>
                            </form>
                        </div>






                        <div className="modal-action">
                            <button className="btn" onClick={() => setIsModalOpen(false)}>Close</button>
                        </div>
                    </div>
                </dialog>
            )}
        </div>
    );
};

export default Volunteer_Details;