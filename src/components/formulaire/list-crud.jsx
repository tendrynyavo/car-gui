import Item from "../list/list-crud";
const List = ({title, items}) => {
    return (
        <div className="list">
            <h2 className='list__label'>{ title }</h2>
            <Item 
                labels={[
                    "ID",
                    "Nom"
                ]}
            />
            {items.map((item) => {
                return (
                    <Item labels={[
                            item.id,
                            item.nom
                        ]}
                        icon={true} 
                    />
                )
            })}
        </div>
    );
}

export default List;