import React from 'react';
import WeatherAppPic from '../../../../images/Screenshot_weather_app.png';
import SurveyPic from '../../../../images/survey_form_screenshot.png';
import TictactoePic from '../../../../images/tic-tac-toe.png';
import { Project } from './Project/Project';
import './Projects.css';


/*
    Displayed card per project completed.
     - Link to website
     - Explain technologies used.
*/

export const Projects = () => {
    return (
        <section className="Projects">
            <Project screenshot={WeatherAppPic}
                title="Weather Web App"
                description="Hosted on Google Firebase and developed with React, this app allows you to determine weather forecasts for worldwide cities."
                url="https://weatherapp-9fe25.web.app/"
            />
            <Project screenshot={SurveyPic}
                title="Survey Submission Form"
                description="Hosted on Google Firebase and developed with React, this app allows you to determine weather forecasts for worldwide cities."
                url="https://jayp1.github.io/survey-form/"
            />
            <Project screenshot={TictactoePic}
                title="Tic-tac-toe Game"
                description="Very simple Tic-tac-toe game developed with React.js. Besides the basic game play, the app allows you to transition between past moves. This represents an example of React's state management"
                url="https://jayp1.github.io/tictactoe-react/"
            />

        </section>
    );
}