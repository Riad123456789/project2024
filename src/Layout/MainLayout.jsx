import { Outlet } from "react-router-dom";
import Foother from "../Foother/Foother";
import Navber from "../component/Navber";


const MainLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Foother></Foother>
        </div>
    );
};

export default MainLayout;