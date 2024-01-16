import Sidebar from "../components/sidebar/sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Sidebar />
            <div className="app">
                <Outlet />
            </div>
        </>
    );
}

export default Layout;