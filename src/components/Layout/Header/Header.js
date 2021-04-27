import React from "react";
import './Header.css';

export default props => (
  <nav className="navbar">
      <div className="left">
        <h2 className="Title">Jarryd Palzenberger</h2>
      </div>
      <div className="right">
        <ul>
          <li><a href="#Summary">About</a></li>
          <li><a href="#Skills">Skills</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#Contact">Contact</a></li>
         </ul>
      </div>
    </nav>
);