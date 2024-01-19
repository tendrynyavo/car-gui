import Item from "./item-sidebar";
import { Link } from "react-router-dom";

const Sidebar = () => {

    const items = [
        {
            "url" : '/categorie',
            "nom" : 'Categorie',
            "icon" : 'bi bi-tag',
            "first" : true,
        },

        {
            "url" : '/carburant',
            "nom" : 'Carburant',
            "icon" : 'bi bi-fuel-pump',
            "first" : true,
        },

        {
            "url" : '/modele',
            "nom" : 'Modele',
            "icon" : 'bi bi-box',
            "first" : true,
        },

        {
            "url" : '/marque',
            "nom" : 'Marque',
            "icon" : 'bi bi-bag-dash',
            "first" : true,
        },
    ];

    return (
        <div className="sidebar">
            {
                items.map((item) => {
                    return (
                        <Link to={ item.url }>
                            <Item 
                                nom={ item.nom } 
                                icon={ item.icon } 
                                first={true} 
                            />
                        </Link>
                    )
                })
            }

            {/* <Link to={'/carburant'}>
                <Item
                    nom={'Carburant'} 
                    icon={'bi bi-fuel-pump'} 
                    first={false} 
                />
            </Link>
            <Link to={'/modele'}>
                <Item 
                    nom={'Modele'} 
                    icon={'bi bi-box'} 
                    first={false} 
                />
            </Link>
            <Link to={'/marque'}>
                <Item 
                    nom={'Marque'} 
                    icon={'bi bi-bag-dash'} 
                    first={false} 
                />
            </Link> */}
        </div>
    );
}

export default Sidebar;