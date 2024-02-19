import { Outlet } from "react-router-dom";
import Foother from "../Foother/Foother";
import Navber from "../component/Navber";


const MainLayout = () => {
    return (
        <div>
            <Navber>
                <Outlet></Outlet>
                <Foother></Foother>
            </Navber>
        </div>
    );
};

export default MainLayout;