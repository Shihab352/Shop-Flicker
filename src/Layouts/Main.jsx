
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


const Main = () => {
    return (
        <div className="font-lato">
            {/* Navbar */}
            <Navbar></Navbar>

          <div className="min-h-[calc(100vh-306px)]">
              {/* Outlet */}
                <Outlet/>
          </div>
            
            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default Main;