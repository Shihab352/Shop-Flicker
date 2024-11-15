import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Login from "../Pages/Authentication/Login";
import Registration from "../Pages/Authentication/Registration";
import Home from "../Pages/Home";
import JobDetails from "../Pages/JobDetails";
import AddJob from "../Pages/AddJob";
import ErrorPage from "../Pages/ErrorPage";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
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
                element:<JobDetails></JobDetails>,
                loader: ({params})=>fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
            },
            {
                path:'/add-job',
                element:<AddJob></AddJob>
            }
        ]
    }
])


export default Routes;