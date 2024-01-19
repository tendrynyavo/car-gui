import './list.scss';

const Item = ({id, name, icon}) => {

    let icons = (
        <>
            <li className='list-crud__item'>Modifier</li>
            <li className='list-crud__item'>Supprimer</li>
        </>
    );
    if (icon) {
        icons = (
            <>
                <li className='list-crud__item'><i className="bi bi-arrow-clockwise"></i></li>
                <li className='list-crud__item'><i className="bi bi-trash3"></i></li>
            </>
        );
    }

    return (
        <div className='list-crud'>
            <ul>
                <li className='list-crud__item'>{ id }</li>
                <li className='list-crud__item'>{ name }</li>
                {icons}
            </ul>
        </div>
    );
}

export default Item;