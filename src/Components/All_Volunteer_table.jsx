import moment from "moment";
import PropTypes from "prop-types";

const All_Volunteer_table = ({post}) => {

    const {category,cover_img,title,Deadline,volunteers_needed} = post;
    const newDate = moment(Deadline).format("MMM Do YY"); 

    return (
        <tr>
            <td className="p-4 border-b border-blue-gray-50">
                <div className="flex items-center gap-3">
                    <img src={cover_img} alt="Spotify" className="inline-block relative object-center w-12 h-12 rounded-lg border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1" />
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">{title}</p>
                </div>
            </td>
            <td className="p-4 border-b border-blue-gray-50">
                <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">{volunteers_needed}</p>
            </td>
            <td className="p-4 border-b border-blue-gray-50">
                <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">{newDate}</p>
            </td>
            <td className="p-4 border-b border-blue-gray-50">
                <div className="w-max">
                    <div className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-green-500/20 text-green-900 py-1 px-2 text-xs rounded-md"  >
                        <span className="">{category}</span>
                    </div>
                </div>
            </td>
            <td className="p-4 border-b border-blue-gray-50">
                <div className="flex items-center gap-3">
                    <button className=" bg-secondary text-white px-3 py-1 rounded-lg">View Details</button>
                </div>
            </td>
        </tr>
    );
};

All_Volunteer_table.propTypes = {
    post: PropTypes.object,
}

export default All_Volunteer_table;