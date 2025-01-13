import { useContext } from "react";
import { AuthContext } from "./Authentication";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';



const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
     
    if(loading){
        return  (
            <div className="flex justify-center py-8">
                  <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-[#1b206b]"></div>
            </div>
        )
      }
    if (user && user?.email) {
        return children;
    }
    return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
}


export default PrivateRoute;