import React from "react";
import './Header.css';

export default props => (
  <nav className="navbar">
      <div className="left">
        <h2 className="Title">Jarryd Palzenberger</h2>
      </div>
      <div className="right">
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Work</a></li>
          <li><a href="#">Contact</a></li>
         </ul>
      </div>
    </nav>
);