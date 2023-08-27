import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <h2>GFN Capital</h2>
            </div>
            <div className="navbar-right">
                <a href="/">Home</a>
                <a href="/programs">Programs</a>
                <a href="/team">Team</a>
            </div>
        </div>
    );
}

export default Navbar;
