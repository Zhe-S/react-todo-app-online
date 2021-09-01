import React from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    const activeClass = "active-menu-item"
    return (
        <nav className="topNav">
            <ul>
                <li><NavLink activeClassName = {activeClass} to ="/" exact>Home</NavLink></li>
                <li><NavLink activeClassName = {activeClass} to = "/about">About</NavLink></li>
                <li><NavLink activeClassName = {activeClass} to ="/contact">Contact</NavLink></li>
            </ul>


        </nav>
    )
        
}

export default Navbar