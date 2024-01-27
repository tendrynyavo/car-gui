import { Outlet } from "react-router-dom";
import Navbar from "../../../components/navbar/navbar";

const LayoutMoteur = () => {

    const links = [
        {
            url: "/moteur",
            label: "Création de moteur"
        },
        {
            url: "/moteur/carburant",
            label: "Carburant"
        },
        {
            url: "/moteur/type",
            label: "Type de moteur"
        },
        {
            url: "/moteur/vitesse",
            label: "Boite de vitesse"
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

export default LayoutMoteur;