import { Outlet } from "react-router-dom";
import Foother from "../Foother/Foother";
import Navber from "../component/Navber";


const MainLayout = () => {
    return (
      
        <div className="  bg-gradient-to-r from-[#f3f1f1f4] to-[#e8dbdb] overflow-hidden">
            <Navber>
                <Outlet></Outlet>
                <Foother></Foother>
            </Navber>
        </div>
    );
};

export default MainLayout;