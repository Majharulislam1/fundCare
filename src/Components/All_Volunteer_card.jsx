
import { FaArrowRight } from "react-icons/fa";
import PropTypes from 'prop-types';
import moment from "moment";
import { Link } from "react-router-dom";

const All_Volunteer_card = ({ post }) => {
    const { category, cover_img, title, Deadline, description, _id } = post;



    const newDate = moment(Deadline).format("MMM Do YY");
    return (
        <div className="h-full flex flex-col">

            <div className="w-full max-w-full mb-8 h-full relative justify-between flex flex-col  overflow-hidden ">
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
                            <Link to={`/volunteer_details/${_id}`}
                                className="flex items-center pb-1 mt-2 text-base font-black text-primary uppercase border-b border-transparent ">
                                view details <FaArrowRight className="ml-2" /></Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

All_Volunteer_card.propTypes = {
    post: PropTypes.object,
}



export default All_Volunteer_card;