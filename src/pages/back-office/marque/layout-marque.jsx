import { Outlet } from "react-router-dom";
import Navbar from "../../../components/navbar/navbar";

const LayoutMarque = () => {

    const links = [
        {
            url: "/marque",
            label: "Création de marque"
        },
        {
            url: "/marque/modele",
            label: "Modele"
        },
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

export default LayoutMarque;