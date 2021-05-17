import React from "react";
import './Header.css';
import logo from '../../../images/android-chrome-192x192.png';

export default props => (
  <nav className="navbar">
        <ul className="navbar-list">
          <img src={logo} alt="Logo"></img>
          <li><a href="#Summary">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#Project-section">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
         </ul>
    </nav>
);