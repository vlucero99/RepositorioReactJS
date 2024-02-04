import React, { useState } from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
    const [buttonColor, setButtonColor] = useState({
        remeras: 'pink',
        vestidos: 'pink',
        pantalones: 'pink',
        bikinis: 'pink',
    });

    const handleButtonHover = (category, isHover) => {
    setButtonColor((prevColors) => ({
        ...prevColors,
        [category]: isHover ? 'palevioletred' : 'pink',
        }));
    };
return (
    <nav className="navbar-container">
        <Link to='/' className="link_decoration">
            <h3 className="title">DejavuInd</h3>
        </Link>
        
        <button
            className="nav-button"
            style={{ backgroundColor: buttonColor.remeras }}
            onMouseEnter={() => handleButtonHover('remeras', true)}
            onMouseLeave={() => handleButtonHover('remeras', false)}
        >
        <NavLink to={`/category/Remeras`} id="link-decoration1" className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}> Remeras
        </NavLink>
        </button>
        <button
            className="nav-button"
            style={{ backgroundColor: buttonColor.vestidos }}
            onMouseEnter={() => handleButtonHover('vestidos', true)}
            onMouseLeave={() => handleButtonHover('vestidos', false)}
        >
        <NavLink to={`/category/Vestidos`} id="link-decoration2" className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}> Vestidos
        </NavLink>
        </button>
        <button
            className="nav-button"
            style={{ backgroundColor: buttonColor.pantalones }}
            onMouseEnter={() => handleButtonHover('pantalones', true)}
            onMouseLeave={() => handleButtonHover('pantalones', false)}
        >
        <NavLink to={`/category/Pantalones`} id="link-decoration3" className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}> Pantalones
        </NavLink>
        </button>
        <button
            className="nav-button"
            style={{ backgroundColor: buttonColor.bikinis }}
            onMouseEnter={() => handleButtonHover('bikinis', true)}
            onMouseLeave={() => handleButtonHover('bikinis', false)}
        >
        <NavLink to={`/category/Bikinis`} id="link-decoration4" className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}> Bikinis
        </NavLink>
        </button>
        <CartWidget />
    </nav>
    );
};

export default NavBar;

