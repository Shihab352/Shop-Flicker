import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Login from "../Pages/Authentication/Login";
import Registration from "../Pages/Authentication/Registration";
import Home from "../Pages/Home";
import JobDetails from "../Pages/JobDetails";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                index: true,
                element: <Home></Home>,
               
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/registration",
                element : <Registration></Registration>
            },
            {
                path: "/job/:id",
                element:<JobDetails></JobDetails>
            }
        ]
    }
])


export default Routes;