import React from "react";
import './Footer.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';

export default props => (
  <footer className="Footer">
    
    <div className="top">
      <IconButton aria-label="Linkedin.com" style={{ color: 'white' }} onClick={() => window.open('https://www.linkedin.com/in/jarrydpalzenberger/')}>
        <LinkedInIcon />
      </IconButton>
      <IconButton aria-label="Instagram.com" style={{ color: 'white' }} onClick={() => window.open('https://www.instagram.com/jpalzen/')}>
        <InstagramIcon />
      </IconButton>
      <IconButton aria-label="Github.com" style={{ color: 'white' }} onClick={() => window.open('https://github.com/jayp1/')}>
        <GitHubIcon />
      </IconButton>


    </div>
    <div className="bottom">
      <h5>{'Copyright © PALZEN 2021' }</h5>
    </div>
  </footer>
);