import React from 'react';
import SummaryPic from '../../../images/undraw_feeling_proud_white.svg';
import './Main.css';
import { Projects } from './Projects/Projects';


export default props => (
  <main className="Main">
    <section id="Summary">
      <h1 id="title">Hi, I'm Jarryd.</h1>
      
      <img id="SummaryPic" src={SummaryPic} alt="Avatar sitting next to a computer and feeling proud"/>
      <p id="subtitle">I build awesome web experiences with modern technology.</p>
    </section>

    <section id="skills">

      <div className="Paper">
          <h4 className="Paper-title">Skills</h4>
          <ul className="skill-list">
            <li className="skill-item">React.js</li>
            <li className="skill-item">Express.js</li>
            <li className="skill-item">Node.js</li>
            <li className="skill-item">SQL</li>
            <li className="skill-item">HTML+CSS</li>
          </ul>
      </div>
      <div className="Paper">
      <h4 className="Paper-title">Skills in construction</h4>
          <ul className="skill-list">
            <li className="skill-item">Blockchain</li>
            <li className="skill-item">AWS</li>
            <li className="skill-item">Wordpress</li>
          </ul>
      </div>
      

    </section>
 
    
    <Projects />


    <section id="contact" class="contact-section">
      <div class="contact-section-header">
        <h2>Let's work together...</h2>
        <p>How do you take your coffee?</p>
      </div>
      <div class="contact-links">
        <a
          href="https://www.linkedin.com/in/jarrydpalzenberger/"
          target="_blank"
          class="btn contact-details"
        ><i class="fab fa-linkedin-in"></i> LinkedIn</a>
        <a
          id="profile-link"
          href="https://github.com/jayp1"
          target="_blank"
          class="btn contact-details"
        ><i class="fab fa-github"></i> GitHub</a>
        <a
          href="https://twitter.com/jpalzen"
          target="_blank"
          class="btn contact-details"
        ><i class="fab fa-twitter"></i> Twitter</a>
        <a href="mailto:jarrydp@outlook.com" class="btn contact-details"
        ><i class="fas fa-at"></i> Send a mail</a>
        <a href="tel:+27791810477" class="btn contact-details"
        ><i class="fas fa-mobile-alt"></i> Call me</a>
      </div>
    </section>


  </main>

);