import React from'react';
import {Link } from 'react-router-dom';
import './Header.css';

const Header= () => {
    return (
        <header className='header'>
            <div>
                <h4>
                    <Link to='/' className='logo'>
                        ShipYard
                    </Link>
                </h4>
            </div>
            <div className='header-links'>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to='/register'>Register</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to='/bookings'>Bookings</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to='/abc'>
                            abc
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;