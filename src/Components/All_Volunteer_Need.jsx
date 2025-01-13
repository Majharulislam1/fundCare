
import { useEffect, useState } from "react";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { TfiMenuAlt } from "react-icons/tfi";
import All_Volunteer_card from "./All_Volunteer_card";
import All_Volunteer_table from "./All_Volunteer_table";
const All_Volunteer_Need = () => {

    const [loading, setLoading] = useState(true);
    const [volunteer, setVolunteer] = useState();
    const [searchTerm, setSearchTerm] = useState('');

    const [table, setTable] = useState(false);
    const [card, setCard] = useState(true);


    const ToggleTable = () => {
        setTable(true);
        setCard(false);
    }

    const ToggleCard = () => {
        setCard(true);
        setTable(false);
    }


    const handleSearch = () => {
        setLoading(true);
        fetch(`http://localhost:3000/Search_volunteer?title=${searchTerm}`)
            .then((res) => res.json())
            .then((data) => {
                
                setVolunteer(data);
                setLoading(false);
            })
            .catch(() => {
                
                setLoading(false);
            });
    };


    useEffect(() => {
        fetch('http://localhost:3000/all_volunteer')
            .then(res => res.json())
            .then((data) => {
                setVolunteer(data)
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [])




    if (loading) return <p>Loading...</p>;




    return (
        <div>
            <div className="w-11/12 mx-auto">
                <div className="flex items-center">
                    <div className="relative w-full my-4 max-w-xl mx-auto bg-white rounded-full">
                        <input placeholder="search" value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)} className="rounded-full w-full  bg-transparent py-2 pl-8   outline-none border-2 border-gray-100 shadow-md hover:outline-none " type="text" name="query" id="query" />
                        <button onClick={handleSearch} type="submit" className="absolute  inline-flex items-center  px-4 py-2 text-sm text-white transition duration-150 ease-in-out rounded-full outline-none right-3 top-1 bg-secondary sm:px-6 sm:text-base sm:font-medium hover:bg-secondary ">
                            <svg className="-ml-0.5 sm:-ml-1 mr-2 w-4 h-4 sm:h-5 sm:w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                            Search
                        </button>
                    </div>

                    <div>
                        <div className="flex">

                            <button onClick={ToggleCard}> <BsGrid3X3GapFill className="text-2xl text-secondary mr-4" /> </button>

                            <button onClick={ToggleTable}> <TfiMenuAlt className="text-2xl text-secondary" /></button>
                        </div>
                    </div>
                </div>

                {
                    volunteer.length === 0 && (

                        <div className="flex justify-center h-screen items-center">
                            <div>
                                <h1 className="text-4xl text-center font-bold text-primary">No Data Available</h1>
                                <p className="text-4xl text-center text-secondary">Search Again</p>
                            </div>
                        </div>
                    )
                }



                {
                    card && (
                        <div className="w-4/5 mx-auto mt-6">
                            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-4 gap-6 ">
                                {
                                    volunteer.map(data => <All_Volunteer_card post={data} key={data._id}></All_Volunteer_card>)
                                }
                            </div>
                        </div>
                    )
                }


                {
                    table && (
                        <div className="w-4/5 mx-auto mt-6 min-h-screen   bg-white">

                            <div className="p-6 overflow-x-auto  px-0">
                                <table className="w-full  table-auto text-left">
                                    <thead>
                                        <tr>
                                            <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                                <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Title</p>
                                            </th>
                                            <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                                <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Volunteer Needed</p>
                                            </th>
                                            <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                                <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Deadline</p>
                                            </th>
                                            <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                                <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Category</p>
                                            </th>
                                            <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                                <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70"></p>
                                            </th>
                                            <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                                <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70"></p>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            volunteer.map(data => <All_Volunteer_table post={data} key={data._id}></All_Volunteer_table>)
                                        }
                                    </tbody>
                                </table>
                            </div>


                        </div>
                    )
                }




            </div>
        </div>
    );
};

export default All_Volunteer_Need;