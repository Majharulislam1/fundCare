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
      }
    ]
  },

]);

export default router;