import './list.scss';

const Item = ({labels, icon}) => {

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
                {labels.map((label) => {
                    return (
                        <li className='list-crud__item'>{ label }</li>
                    )
                })}
                {icons}
            </ul>
        </div>
    );
}

export default Item;