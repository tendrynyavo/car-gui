import Item from "../list/list-crud";
import './formulaire.scss';

const List = ({title, items}) => {
    return (
        <div className="list">
            <h2 className='list__label'>{ title }</h2>
            
            {items.map((item) => {
                return (
                    <Item id={item.id} name={item.nom} />
                )
            })}

        </div>
    );
}

export default List;