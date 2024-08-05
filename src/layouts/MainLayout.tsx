import Navbar from "../components/Navbar";
import {Outlet, useLocation} from "react-router-dom";
import Footer from "../components/Footer";

function MainLayout() {
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div className="relative h-full">
                <video autoPlay loop muted>
                    <source src={require('../assets/mp4/background.mp4')} type="video/mp4"/>
                </video>
            </div>
            <Outlet/>
            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default MainLayout;
