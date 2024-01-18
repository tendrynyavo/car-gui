import Item from "./item-sidebar";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Link to={'/categorie'}>
                <Item nom={'Categorie'} icon={'bi bi-tag'} first={true} />
            </Link>
            <Link to={'/carburant'}>
                <Item nom={'Carburant'} icon={'bi bi-fuel-pump'} first={false} />
            </Link>
            <Link to={'/modele'}>
                <Item nom={'Modele'} icon={'bi bi-box'} first={false} />
            </Link>
            <Link to={'/marque'}>
                <Item nom={'Marque'} icon={'bi bi-bag-dash'} first={false} />
            </Link>
        </div>
    );
}

export default Sidebar;