
import { FaArrowRight } from "react-icons/fa";
import PropTypes from 'prop-types';
import moment from "moment";
import { Link } from "react-router-dom";

const Volunteer_home_card = ({ post }) => {

    const { category, cover_img, title, Deadline,_id } = post;

    const newDate = moment(Deadline).format("MMM Do YY");



 




    return (
        <div>
            <div className="w-full max-w-full mb-8   flex flex-col ">
                <img src={cover_img} alt="Card img" className="object-cover object-center w-full h-48" />
                <div className="flex flex-grow">
                    <div className="triangle"></div>
                    <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400 text">
                        <div>
                            <a
                                className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-primary hover:text-primary">{category}</a>
                            <p>Deadline: {newDate}</p>
                            <a
                                className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-primary">
                                {title}
                            </a>
                            <p className="mb-4 text-paragraph">
                                Education is the cornerstone of a thriving society. It equips individuals with the skills, knowledge, and confidence to break free from cycles of poverty and contribute meaningfully to their communities.
                            </p>
                        </div>
                        <div>
                            <Link to={`/volunteer_details/${_id}`}>
                                <a
                                    className="flex items-center pb-1 mt-2 text-base font-black text-primary uppercase border-b border-transparent ">
                                    view details <FaArrowRight className="ml-2" /></a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Volunteer_home_card.propTypes = {
    post: PropTypes.object,
}

export default Volunteer_home_card;