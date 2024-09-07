import React, { useState } from 'react';
const MyComponent = () => {
    const [isClassActive, setIsClassActive] = useState(false);
  
    const toggleClass = () => {
      setIsClassActive(!isClassActive);
    };
    return (
        <div className={isClassActive ? 'active-class' : ''}>
          <h1>Hello, World!</h1>
          <button onClick={toggleClass}>Toggle Class</button>
        </div>
      );
    }

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
            <a href="/"><li>Home</li></a>
            <a href="/about"><li>About</li></a>
            <a href="#"><li>Contact</li></a>
            <a href="#"><li>Students</li></a>
            <a href="/login"><li>Log in</li></a>
        </ul>
    </div>
    )
}
export default Header;