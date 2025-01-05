import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div>
            <div className="bg-secondary py-8">
                <div className="w-4/5 px-4 sm:px-6 text-gray-800 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mx-auto">
                    <div className="p-5">
                        <img src={logo} alt="" />
                    </div>
                    <div className="p-5">
                        <div className="text-sm uppercase text-primary font-bold">Resources</div>
                        <Link className="my-3 block text-white" to={'/'}>Home<span className="text-white text-xs p-1"></span></Link>
                        <Link className="my-3 block text-white" to={'/brands'}>Brands <span className="text-white text-xs p-1"></span></Link>
                        <Link className="my-3 block text-white"  >Contact Us <span className="text-white text-xs p-1"></span></Link>
                        <Link className="my-3 block text-white"  >About Dev<span className="text-white text-xs p-1"></span></Link>
                        <Link className="my-3 block text-white" >Support <span className="text-white text-xs p-1">New</span></Link>
                    </div>
                    <div className="p-5">
                        <div className="text-sm uppercase text-primary font-bold">Support</div>
                        <a className="my-3 text-white block" href="/#">Help Center <span className="text-white text-xs p-1"></span></a>
                        <a className="my-3 text-white block" href="/#">Privacy Policy <span className="text-white text-xs p-1"></span></a>
                        <a className="my-3 text-white block" href="/#">Conditions <span className="text-white text-xs p-1"></span></a>
                    </div>
                    <div className="p-5">
                        <div className="text-sm uppercase text-primary font-bold">Contact us</div>
                        <a className="my-3 block text-white" href="/#">Cumilla, Floor 4 Japan Complex, Bangladesh
                            <span className="text-white text-xs p-1"></span></a><a className="my-3 text-white block" href="/#">majharul2022islam@gmail.com
                            <span className="text-white text-xs p-1"></span></a>
                    </div>
                </div>
            </div>

            <div className="bg-secondary pt-2 ">
                <div className="flex pb-5 px-3 m-auto pt-5 w-4/5  border-t text-gray-800 text-sm flex-col
      max-w-screen-lg items-center">
                    <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                        <a href="https://github.com/Majharulislam1" target='_blank' className="w-6  text-3xl mx-3">
                        <FaGithub className='text-white' />
                        </a>
                        <a href='https://www.linkedin.com/in/majharul-islam535/' target='_blank'  className="w-6 text-3xl mx-3">
                        
                        <FaLinkedin className='text-white' />

                        </a>
                        <a   className="w-6 text-3xl mx-3">
                            
                       
                        <FaFacebook className='text-white' />
                        </a>
                        <a   className="w-6 text-3xl mx-3">
                        
                        <FaYoutube className='text-white' />

                        </a>
                         
                    </div>
                    <div className="my-5 text-white">© Copyright 2024. All Rights Reserved.</div>
                </div>
            </div>


        </div>
        </div>
    );
};

export default Footer;