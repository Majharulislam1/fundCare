import moment from 'moment';
import React from 'react';

const My_volunteer_post_table = ({post}) => {

     const {category,cover_img,title,Deadline,description,_id,volunteers_needed} = post;
    const newDate = moment(Deadline).format("MMM Do YY"); 

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
                <button className="btn btn-ghost bg-secondary text-white btn-xs">update</button>
            </th>
            <th>
                <button className="btn btn-ghost bg-secondary text-white btn-xs">Delete</button>
            </th>
        </tr>

    );
};

export default My_volunteer_post_table;