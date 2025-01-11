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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
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
        path: '/add_volunteer_need',
        element: <Add_Volunteer_need></Add_Volunteer_need>
      },
      {
        path: '/all_volunteer',
        element: <All_Volunteer_Need></All_Volunteer_Need>
      },
      {
        path: '/volunteer_details/:id',
        element: <Volunteer_Details></Volunteer_Details>
      },
      {
        path: '/manage_my_post',
        element: <Manage_my_post></Manage_my_post>,
        children: [
          {
            path: "",
            element: <My_volunteer_need_post></My_volunteer_need_post>
          },
          {
            path: 'my_volunteer_need_post',
            element: <My_volunteer_need_post></My_volunteer_need_post>
          },
          {
            path: 'my_volunteer_request_post',
            element: <My_volunteer_request_post></My_volunteer_request_post>
          }
        ]
      }
    ]
  },

]);

export default router;