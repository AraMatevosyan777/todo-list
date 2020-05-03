import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';
import './NavbarMedia.css';

const Navbar = () => {
    return(
        <div>
            <ul className='navBar'>
                <h2>React To Do List</h2>
                <li><NavLink to='/home'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;