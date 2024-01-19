import Sidebar from "../../components/sidebar/sidebar";
import { Outlet } from "react-router-dom";

const BackOffice = () => {

    const items = [
        {
            "url" : '/categorie',
            "nom" : 'Categorie',
            "icon" : 'bi bi-tag',
            "first" : true
        },

        {
            "url" : '/carburant',
            "nom" : 'Carburant',
            "icon" : 'bi bi-fuel-pump',
            "first" : true
        },

        {
            "url" : '/modele',
            "nom" : 'Modele',
            "icon" : 'bi bi-box',
            "first" : true
        },

        {
            "url" : '/marque',
            "nom" : 'Marque',
            "icon" : 'bi bi-bag-dash',
            "first" : true
        }
    ];

    return (
        <div className="back">
            <Sidebar items={ items } />
            <div className="app">
                <Outlet />
            </div>
        </div>
    );
}

export default BackOffice;