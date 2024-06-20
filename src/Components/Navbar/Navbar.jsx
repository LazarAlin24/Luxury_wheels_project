import React, { useState } from 'react';
import './Navbar.css';
import { LuShoppingCart, LuUserCircle2 } from "react-icons/lu";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu, setMenu] = useState('Shop');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='navbar max-w-9xl mx-auto shadow-md' style={{ maxHeight: '100vh'}}>
            <div className="nav-logo">
                <img src="https://luxurywheel.com.au/wp-content/uploads/2020/04/logo.png.webp" alt="Luxury Wheels logo" />
            </div>
            <div className="toggle-button" onClick={handleToggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                <li onClick={() => { setMenu("shop"); setIsMenuOpen(false); }}>
                    <Link style={{textDecoration:'none'}} to='/' className={menu === "shop" ? 'active-link' : ''}>Home</Link>
                    {menu === "shop" && <hr />}
                </li>
                <li onClick={() => { setMenu("wheels"); setIsMenuOpen(false); }}>
                    <Link style={{textDecoration:'none'}} to='/wheels' className={menu === "wheels" ? 'active-link' : ''}>Wheels</Link>
                    {menu === "wheels" && <hr />}
                </li>
                <li onClick={() => { setMenu("tires"); setIsMenuOpen(false); }}>
                    <Link style={{textDecoration:'none'}} to='/tires' className={menu === "tires" ? 'active-link' : ''}>Tires</Link>
                    {menu === "tires" && <hr />}
                </li>
            </ul>
            <div className='nav-login-cart'>
                <Link style={{textDecoration:'none'}}  to='/cart'><div><LuShoppingCart /></div></Link>
                <div className='nav-cart-count'>0</div>
                <Link style={{textDecoration:'none'}} to='/login'><div role="button" ><LuUserCircle2 /></div></Link>
            </div>
        </div>
    );
};

export default Navbar;
