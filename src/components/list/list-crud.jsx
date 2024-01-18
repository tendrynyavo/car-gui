import './list.scss';

const Item = ({id, name}) => {
    return (
        <div className='list-crud'>
            <ul>
                <li className='list-crud__item'>{ id }</li>
                <li className='list-crud__item'>{ name }</li>
                <li className='list-crud__item'><i className="bi bi-arrow-clockwise"></i></li>
                <li className='list-crud__item'><i className="bi bi-trash3"></i></li>
            </ul>
        </div>
    );
}

export default Item;