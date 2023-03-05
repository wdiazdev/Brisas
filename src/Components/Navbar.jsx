import React from 'react'
import '../Styles/Navbar.css';

export const Navbar = () => {
    return (
        <nav className='nav--container'>

            <div className='logo' data-aos='fade-right' data-aos-duration='1000'>
                <h2>Brisas</h2>
                <p>AN ALL-INCLUSIVE EXPERIENCE</p>

            </div>

            <ul>
                <li className='focus-in-expand'>Rooms & Suites</li>
                <li className='focus-in-expand'>Eat & Drink</li>
                <li className='focus-in-expand'>Experience</li>
                <li className='focus-in-expand'>Gallery</li>
            </ul>
        </nav>
    )
};
