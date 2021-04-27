import React from 'react';
import './Project.css';

export const Project = (props) => {
    return (
        <div className="Project-card">
                <div className="Project-image">
                    <img src={props.WeatherAppPic} alt="Screenshot of Weather Web app"></img>

                </div>
                <div className="Project-description">
                    <h2> Weather App</h2>
                    <p>Hosted on Google Firebase and developed with React, this app allows you to determine weather forecasts for worldwide cities.</p>

                </div>
                <div className="Project-action">
                    <a href="#" target='_blank'>To Website</a>
                </div>

            </div>

    );
} 