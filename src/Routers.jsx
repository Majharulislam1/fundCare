import {
  createBrowserRouter,

} from "react-router-dom";
import Roots from "./Components/Roots";
import Home from "./Components/Home";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import Add_Volunteer_need from "./Components/Add_Volunteer_need";
import All_Volunteer_Need from "./Components/All_Volunteer_Need";
import Volunteer_Details from "./Components/Volunteer_Details";
import Manage_my_post from "./Components/Manage_my_post";
import My_volunteer_need_post from "./Components/My_volunteer_need_post";
import My_volunteer_request_post from "./Components/My_volunteer_request_post";
import Update_my_post from "./Components/Update_my_post";
import PrivateRoute from "./Components/PrivateRoute";
import ErrorPage from "./Components/ErrorPage";
import About from "./Components/About";
import Contact_us from "./Components/Contact_us";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/registration',
        element: <Registration></Registration>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
         path:'/about',
         element:<About></About>
      },
      {
        path:'/contact',
        element:<Contact_us></Contact_us>
      },
      {
        path: '/add_volunteer_need',
        element: <PrivateRoute><Add_Volunteer_need></Add_Volunteer_need></PrivateRoute>  
      },
      {
        path: '/all_volunteer',
        element: <All_Volunteer_Need></All_Volunteer_Need>
      },
      {
        path: '/volunteer_details/:id',
        element:<PrivateRoute><Volunteer_Details></Volunteer_Details></PrivateRoute> 
      },
      {
        path: '/manage_my_post',
        element:<PrivateRoute>  <Manage_my_post></Manage_my_post></PrivateRoute>,
        children: [
          {
            path: "",
            element: <PrivateRoute> <My_volunteer_need_post></My_volunteer_need_post> </PrivateRoute> 
          },
          {
            path: 'my_volunteer_need_post',
            element: <PrivateRoute> <My_volunteer_need_post></My_volunteer_need_post> </PrivateRoute> 
          },
          {
            path: 'my_volunteer_request_post',
            element: <PrivateRoute> <My_volunteer_request_post></My_volunteer_request_post> </PrivateRoute>
          }
        ]
      },
      {
        path:'/update_my_post/:id',
        element: <PrivateRoute><Update_my_post></Update_my_post></PrivateRoute> 
      }
    ]
  },

]);

export default router;