import Sidebar from "../../components/sidebar/sidebar";
import { Outlet } from "react-router-dom";

const BackOffice = () => {
    return (
        <div className="back">
            <Sidebar />
            <div className="app">
                <Outlet />
            </div>
        </div>
    );
}

export default BackOffice;