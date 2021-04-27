import React from 'react';
import WeatherAppPic from '../../../../images/Screenshot_weather_app.png';
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
            <Project WeatherAppPic={WeatherAppPic}/>
            <Project WeatherAppPic={WeatherAppPic}/>
            <Project WeatherAppPic={WeatherAppPic}/>
            



        </section>
    );
}