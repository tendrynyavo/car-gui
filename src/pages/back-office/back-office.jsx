import Sidebar from "../../components/sidebar/sidebar";
import { Outlet } from "react-router-dom";

const BackOffice = () => {

    const items = [
        {
            "url" : '/moteur',
            "nom" : 'Moteur',
            "icon" : 'bi bi-ev-front',
            "first" : true
        },

        {
            "url" : '/marque',
            "nom" : 'Marque',
            "icon" : 'bi bi-bag-dash',
            "first" : true
        },

        {
            "url" : '/categorie',
            "nom" : 'Categorie',
            "icon" : 'bi bi-car-front',
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