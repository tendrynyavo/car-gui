const Item = ({nom, icon, first}) => {
    
    let item = (first) ? "sidebar__item__first" : "sidebar__item";

    return (
        <div className={item}>
            <div className="sidebar__item__icon">
                <i className={icon}></i>
            </div>
            <div className="sidebar__item__label">
                {nom}
            </div>
        </div>
    );
}

export default Item;