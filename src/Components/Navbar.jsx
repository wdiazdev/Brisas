import React from 'react'
import '../Styles/Navbar.css';

export const Navbar = () => {
    return (
        <nav className='nav--container'>

            <div className='logo'>
                <h2>Navbar</h2>
                <p>AN ALL-INCLUSIVE EXPERIENCE</p>

            </div>

            <ul>
                <li>Rooms & Suites</li>
                <li>Eat & Drink</li>
                <li>Experience</li>
                <li>Gallery</li>
            </ul>
        </nav>
    )
};
