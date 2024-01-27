import { Outlet } from "react-router-dom";
import Navbar from "../../../components/navbar/navbar";

const LayoutDashboard = () => {

    const links = [
        {
            url: "/dashboard/finance",
            label: "Statistique Finance"
        },

        {
            url: "/dashboard/annonce-vendu",
            label: "Statistique des annonces vendues"
        },

        {
            url: "/dashboard/annonce-valide",
            label: "Statistique des annonces validées"
        }
    ]

    return (
        <>
            <Navbar links={links} />
            <div
                style={{
                    marginTop: '40px'
                }}
            >
                <Outlet />
            </div>
        </>      
    );
}

export default LayoutDashboard;