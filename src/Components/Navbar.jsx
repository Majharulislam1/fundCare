import { Link, NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import  logo from '../assets/logo.png'



import { useContext, useState } from "react";
import { AuthContext } from "./Authentication";
 










const Navbar = () => {

    const {handleLogOut} = useContext(AuthContext);


    const [menu, setMenu] = useState(true);
 


    return (
        <div className="sm:-mb-1">
            <div className="bg-[#ffffff] sm:-mb-1">
                <div className="w-4/5 mx-auto">
                    <h1 className="text-center py-2 text-primary font-bold">25% off -- Welcome  to BONX {name}   </h1>
                </div>
            </div>

            
                <div className="bg-[#3c2659]">
                <div className="w-4/5 mx-auto">
                    <div className="flex justify-between items-center lg:py-6 md:py-6 sm:py-4">

                        <div>
                            <Link to={'/'}>
                                <img className="w-full" src={logo} alt="" />
                            </Link>
                        </div>


                        <div className={`sm:absolute md:absolute z-50 bg-white border lg:hidden sm:right-[25%]  md:right-[38%] lg:right-1/2 w-[200px] rounded-lg ${menu ? '-top-3/4' : 'top-[6rem]'}  duration-150`}>
                            <p className="text-[#131313b3] flex justify-center items-center my-3 cursor-pointer font-bold text-center">

                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive ? 'text-[1rem] mr-6 font-semibold text-[#1b206b]' : 'text-[1rem] mr-6 font-semibold text-black'
                                    }
                                >
                                    Home
                                </NavLink>


                            </p>

                            <p className="text-[#131313b3] flex justify-center items-center mb-3 cursor-pointer font-bold text-center">

                                <NavLink
                                    to='/all_review'
                                    className={({ isActive }) =>
                                        isActive ? 'text-[1rem] mr-6 font-semibold text-[#1b206b]' : 'text-[1rem] mr-6 font-semibold text-black'
                                    }
                                >
                                    All Review
                                </NavLink>

                            </p>

                            {/* {
                                user?.email && (
                                    <>

                                        <p className="text-[#131313b3] flex justify-center items-center mb-3 cursor-pointer font-bold text-center">

                                            <NavLink
                                                to='/add_review'
                                                className={({ isActive }) =>
                                                    isActive ? 'text-[1rem] mr-6 font-semibold text-[#1b206b]' : 'text-[1rem] mr-6 font-semibold text-black'
                                                }
                                            >
                                                Add Review
                                            </NavLink>

                                        </p>
                                        <p className="text-[#131313b3] flex justify-center items-center mb-3 cursor-pointer font-bold text-center">

                                            <NavLink
                                                to='/my_review'
                                                className={({ isActive }) =>
                                                    isActive ? 'text-[1rem] mr-6 font-semibold text-[#1b206b]' : 'text-[1rem] mr-6 font-semibold text-black'
                                                }
                                            >
                                                My Review
                                            </NavLink>

                                        </p>
                                        <p className="text-[#131313b3] flex justify-center items-center mb-3 cursor-pointer font-bold text-center">

                                            <NavLink
                                                to='/my_Watch_list'
                                                className={({ isActive }) =>
                                                    isActive ? 'text-[1rem] mr-6 font-semibold text-[#1b206b]' : 'text-[1rem] mr-6 font-semibold text-black'
                                                }
                                            >
                                                Game WatchList
                                            </NavLink>

                                        </p>
                                    </>
                                )
                            }


 */}






                            <p>
                                {/* {
                                    user && user?.email ? (
                                        <>
                                            <div className="flex justify-center flex-col-reverse items-center">
                                                <button onClick={handleLogOut} className="bg-white border mb-4 p-2 px-4 rounded-full mr-4 relative">

                                                    Log Out

                                                </button>
                                                <Link to={'/myProfile'}>
                                                    <div className="bg-white border w-[60px] mb-3 h-[60px] p-1 rounded-full mr-4">
                                                        <img className="object-cover h-full w-full rounded-full" src={user?.photoURL} alt="" />
                                                    </div>
                                                </Link>
                                            </div>
                                        </>

                                    ) : */}

                                        (
                                            <>
                                                <Link to={'/login'} className="flex justify-center mb-3">
                                                    <button className="bg-white border p-2 px-4 rounded-full mr-4 relative">
                                                        <p>Login</p>
                                                    </button>
                                                </Link>

                                                <Link to={'/registration'} className="flex mb-3 justify-center">
                                                    <button className="bg-white border p-2 px-4 rounded-full mr-4 relative">
                                                        <p>Registration</p>
                                                    </button>
                                                </Link>
                                            </>

                                        )

                                {/* } */}
                            </p>
                        </div>




                        <div className='lg:flex items-center justify-between md:hidden sm:hidden'>

                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? 'text-[1rem] flex items-center mr-6 font-semibold text-[#1b206b] bg-white px-4 py-1 rounded-lg' : 'text-[1rem] flex items-center mr-6 font-semibold text-white'
                                }
                            >
                                Home
                            </NavLink>

                            <NavLink
                                to='/all_review'
                                className={({ isActive }) =>
                                    isActive ? 'text-[1rem] flex items-center mr-6 font-semibold text-[#1b206b] bg-white px-4 py-1 rounded-lg' : 'text-[1rem] flex items-center mr-6 font-semibold text-white'
                                }
                            >
                                All Review
                            </NavLink>


                            {/* {
                                user?.email && (
                                    <>
                                        <NavLink
                                            to='/add_review'
                                            className={({ isActive }) =>
                                                isActive
                                                    ? 'text-[1rem] flex items-center mr-6 font-semibold text-[#1b206b] bg-white px-4 py-1 rounded-lg'
                                                    : 'text-[1rem] flex items-center mr-6 font-semibold text-white'
                                            }
                                        >
                                            Add Review
                                        </NavLink>

                                        <NavLink
                                            to="/my_review"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? 'text-[1rem] flex items-center mr-6 font-semibold text-[#1b206b] bg-white px-4 py-1 rounded-lg'
                                                    : 'text-[1rem] flex items-center mr-6 font-semibold text-white'
                                            }
                                        >
                                            My Review
                                        </NavLink>

                                        <NavLink
                                            to="/my_Watch_list"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? 'text-[1rem] flex items-center mr-6 font-semibold text-[#1b206b] bg-white px-4 py-1 rounded-lg'
                                                    : 'text-[1rem] flex items-center mr-6 font-semibold text-white'
                                            }
                                        >
                                            Game WatchList
                                        </NavLink>
                                    </>
                                )
                            } */}




                        </div>

                        <div className="lg:flex  md:flex items-center sm:hidden  ">



                            {/* {
                                user && user?.email ? (
                                    <>

                                        <button onClick={handleLogOut} className="bg-white border p-2 px-4 rounded-full mr-4 relative">

                                            Log Out

                                        </button>
                                        <Link data-tooltip-id="my-tooltip" data-tooltip-content={user && user?.displayName}>
                                            <div className="bg-white border w-[60px] h-[60px] p-1 rounded-full mr-4">
                                                <img className="object-cover h-full w-full rounded-full" src={user?.photoURL} alt="" />
                                            </div>
                                        </Link>
                                    </>

                                ) : */}

                                    (
                                        <>
                                            <Link to={'/login'}>
                                                <div className="bg-white border p-2 px-4 rounded-full mr-4 relative">
                                                    <p>Login</p>
                                                </div>
                                            </Link>
                                            <Link onClick={handleLogOut}>
                                                <div className="bg-white border p-2 px-4 rounded-full mr-4 relative">
                                                    <p>LogOut</p>
                                                </div>
                                            </Link>

                                            <Link to={'/registration'}>
                                                <div className="bg-white border p-2 px-4 rounded-full mr-4 relative">
                                                    <p>Registration</p>
                                                </div>
                                            </Link>
                                        </>

                                    )

                            {/* } */}


                        </div>





                        <div className='mx-4 lg:hidden sm:block md:block'>
                            <button onClick={() => setMenu(!menu)}>
                                {
                                    menu ? <IoMenu className="text-3xl text-[#f75d1b]" /> : <RxCross2 className="text-3xl text-[#f75d1b]" />
                                }
                            </button>
                        </div>


                    </div>
                </div>
                </div>

                
             
            {/* <Tooltip id="my-tooltip" style={{ backgroundColor: "#ffffff", color: "#222" }} /> */}
        </div>
    );
};

export default Navbar;