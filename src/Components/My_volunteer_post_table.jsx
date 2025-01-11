import moment from 'moment';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const My_volunteer_post_table = ({ post }) => {

    const navigate = useNavigate();

    const { category, cover_img, title, Deadline, description, _id, volunteers_needed } = post;
    const newDate = moment(Deadline).format("MMM Do YY");

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


        fetch(`http://localhost:3000/delete_volunteer_post/${_id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
                if (data.deletedCount === 1) {
                    Swal.fire({
                        title: "Successfully Deleted!",
                        text: "Volunteer post has been deleted.",
                        icon: "success"
                    });
                    
                    navigate('/manage_my_post')
                    
                }
            });
        }
        })
      
    }



    return (

        <tr>

            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={cover_img}
                                alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{title}</div>

                    </div>
                </div>
            </td>
            <td>

                <br />
                <span className="badge badge-ghost badge-sm">{volunteers_needed}</span>
            </td>
            <td>{newDate}</td>
            <th>
                <button className="btn   btn-xs bg-primary text-white">{category}</button>
            </th>
            <th>
                <Link to={`/update_my_post/${_id}`}>
                    <button className="btn btn-ghost bg-secondary text-white btn-xs">update</button>
                </Link>
            </th>
            <th>
                <button onClick={handleDelete} className="btn btn-ghost bg-secondary text-white btn-xs">Delete</button>
            </th>
        </tr>

    );
};

export default My_volunteer_post_table;



