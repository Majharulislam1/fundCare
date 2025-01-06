import { useContext,  useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "./Authentication";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'
 


const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();
    
     
    const [error,setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const {handleLogin,handleGoogle_Login} = useContext(AuthContext);

   

    if(error){
        return toast.error(error);
    }

   
    
     
    

    const handleGoogleLogin = ()=>{
        handleGoogle_Login()
        .then(() => {
            
            

            Swal.fire({
                position: "center",
                icon: "success",
                title: "Successfully Login",
                showConfirmButton: false,
                timer: 2000
              });
            navigate(location?.state ? location.state : "/");



          }).catch((error) => {
             
            
            const errorMessage = error.message;
            setError(errorMessage);
          });

    }

    const handleSignIn = (e)=>{
          e.preventDefault();

          const email = e.target.email.value;
          const password = e.target.password.value;
          const checkbox = e.target.checkbox.checked;

          

          if (!checkbox) {
            toast.error("You must accept the terms and conditions.");
            return;
        }

        handleLogin(email,password)
        .then(() => {
             
             
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Successfully Login",
                showConfirmButton: false,
                timer: 2000
              });
            navigate('/');
            
          })
          .catch((error) => {
             
            const errorMessage = error.message;
            toast.error(errorMessage);
            navigate('/login');
          });




    }


    return (
        <div>
            <div>
                <div>

                    <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
                        <div data-aos="flip-right" className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
                            <h1 className="text-2xl font-bold text-center mb-4 text-primary">Welcome Back!</h1>
                            <form  onSubmit={handleSignIn}>

                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                                    <input type="email"  id="email" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="your@email.com" required />
                                </div>

                                <div className="mb-4 relative">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>

                                    <input type={showPassword ? "text" : "password"} id="password" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password" required  />
                                    <span className="cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <FaEye className="absolute top-[41px] right-[13px]" /> : <FaEyeSlash className="absolute top-[41px] right-[13px]"/>
                                        }
                                    </span>
                                    
                                    

                                    
                                    
                                    <a  
                                        className="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Forgot
                                        Password?</a>
                                </div>


                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center">
                                        <input type="checkbox" name="checkbox" id="remember" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none"
                                        />
                                        <label htmlFor="remember" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">Terms and Conditions</label>
                                    </div>
                                    <Link to={'/registration'}
                                        className="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">New user</Link>
                                </div>
                                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>

                               
                            </form>
                            <div className="w-full flex mt-4 justify-center">
                                <button onClick={handleGoogleLogin} className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                    <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="-0.5 0 48 48" version="1.1"> <title>Google-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Color-" transform="translate(-401.000000, -860.000000)"> <g id="Google" transform="translate(401.000000, 860.000000)"> <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path> <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path> <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path> <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"> </path> </g> </g> </g> </svg>
                                    <span>Continue with Google</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Login;