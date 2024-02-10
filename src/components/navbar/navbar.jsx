import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


const Navbar = ({links = []}) => {

    const location = useLocation();
    const [url, setUrl] = useState(null);
    
    useEffect(() => {
        setUrl(location.pathname);
    }, [location]);

    return (
        <div className="navbar">
            <ul>
                {links.map(link => {
                    return (
                        <>
                            <Link to={link.url} className={"underline" + (url === link.url ?" active" : "")}>{ link.label }</Link>
                            <div className='vertical-divider'></div>
                        </>
                    );
                })}
            </ul>
        </div>
    );
}

export default Navbar;