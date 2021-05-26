import React from 'react';
import SummaryPic from '../../../images/undraw_feeling_proud_white.svg';
/*import Resume from '../../../images/undraw_Resume.svg';*/
import Frontend from '../../../images/front-end.svg';
import ProductOwner from '../../../images/undraw_product_owner.svg';
import './Main.css';
import { Projects } from './Projects/Projects';


export default props => (
  <main className="Main">
    <section id="Summary">
      <h1 id="title">Hi, I'm Jarryd.</h1>

      <img id="SummaryPic" src={SummaryPic} alt="Avatar sitting next to a computer and feeling proud" />
      <p id="subtitle">I build awesome web experiences with modern technology.</p>
    </section>

    <section id="skills">

      <h2 className="section-heading">My Knowledge Bank</h2>
      {/*<img src={Resume} alt="Man handing out his resume" />*/}

      <div className="box">
        <div className="box-item">
          <figure class="image"><img class="is-skill-icon" alt="Product owner methodology" src={ProductOwner} /></figure>
          <h3 className="box-title">Product Owner</h3>
          <p>I enjoy the responsibility of delivering technical products in an agile environment. </p>
          <p className=""></p>
        </div>
        <div className="box-item">
          <figure class="image"><img class="is-skill-icon" src={Frontend} alt="Computer with code" /></figure>
          <h3 className="box-title">Web Developer</h3>
          <p>I like to build web apps from scratch and enjoy bringing ideas to life in the browser.</p>
        </div>
      </div>


      <div className="Cards">
        <div className="Paper">
          <h4 className="Paper-title">Languages I speak...</h4>
          <ul className="skill-list">
            <li className="skill-item">React.js</li>
            <li className="skill-item">Express.js</li>
            <li className="skill-item">Node.js</li>
            <li className="skill-item">SQL</li>
            <li className="skill-item">HTML+CSS</li>
          </ul>
        </div>
        <div className="Paper">
          <h4 className="Paper-title">What I'm learning...</h4>
          <ul className="skill-list">
            <li className="skill-item">Blockchain</li>
            <li className="skill-item">AWS</li>
            <li className="skill-item">Wordpress</li>
          </ul>
        </div>
      

      </div>




    </section>


    <Projects />


    <section id="contact" class="contact-section">
      <div class="contact-section-header">
        <h2 >Let's work together...</h2>
        <p>How do you take your coffee?</p>
      </div>
      <div class="contact-links">
        <a
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/jarrydpalzenberger/"
          target="_blank"
          class="btn contact-details"
        ><i class="fab fa-linkedin-in"></i> LinkedIn</a>
        <a
          rel="noopener noreferrer"
          id="profile-link"
          href="https://github.com/jayp1"
          target="_blank"
          class="btn contact-details"
        ><i class="fab fa-github"></i> GitHub</a>
        <a
          href="https://twitter.com/jpalzen"
          rel="noopener noreferrer"
          target="_blank"
          class="btn contact-details"
        ><i class="fab fa-twitter"></i> Twitter</a>
        <a href="mailto:jarrydp@outlook.com" class="btn contact-details" rel="noopener noreferrer"
        ><i class="fas fa-at"></i> Send a mail</a>
        <a href="tel:+27791810477" class="btn contact-details" rel="noopener noreferrer"
        ><i class="fas fa-mobile-alt"></i> Call me</a>
      </div>
    </section>


  </main>

);