import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header(){
    const [isClassActive, setIsClassActive] = useState(false);
  
    const toggleClass = () => {
      setIsClassActive(!isClassActive);
    };
    return (
        <div className="header">
            <h2 className="logo">LostLister</h2>
            <i id="menu-bar" className="fa-solid fa-bars" onClick={toggleClass}></i>
            <ul className={`nav ${isClassActive ? 'block' : ''}`}>
                <Link to="/"><li>Home</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="#"><li>Contact</li></Link>
                <Link to="#"><li>Students</li></Link>
                <Link to="/login"><li>Log in</li></Link>
            </ul>
        </div>
    );
}
export default Header;