import React from 'react';
import './Navbar.css';

const Navbar = ({onClick}) => (
    <nav>
        <h3>Memory Game</h3>
        <a onClick={onClick}>New game</a>
    </nav>
)

export default Navbar;