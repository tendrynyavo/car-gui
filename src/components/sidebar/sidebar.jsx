import Item from "./item-sidebar";
import { Link } from "react-router-dom";

const Sidebar = ({items}) => {

    return (
        <div className="sidebar">
            {items.map((item) => {
                return (
                    <Link to={ item.url }>
                        <Item 
                            nom={ item.nom } 
                            icon={ item.icon } 
                            first={true} 
                        />
                    </Link>
                )
            })}
        </div>
    );
}

export default Sidebar;