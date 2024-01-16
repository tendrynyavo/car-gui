import Item from "./item-sidebar";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Item nom={'Categorie'} icon={'bi bi-tag'} first={true} />
            <Item nom={'Carburant'} icon={'bi bi-fuel-pump'} first={false} />
            <Item nom={'Modele'} icon={'bi bi-box'} first={false} />
            <Item nom={'Marque'} icon={'bi bi-bag-dash'} first={false} />
        </div>
    );
}

export default Sidebar;