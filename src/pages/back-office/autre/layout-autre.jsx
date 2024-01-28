import { Outlet } from "react-router-dom";
import Navbar from "../../../components/navbar/navbar";

const LayoutAutre = () => {
    const links = [
        {
            url: "/parametre",
            label: "Lieu"
        },
        {
            url: "/parametre/couleur",
            label: "Couleur"
        },
        {
            url: "/parametre/caracteristique",
            label: "Caracteristique"
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

export default LayoutAutre;