import React from 'react';
import './Project.css';

export const Project = (props) => {
    return (
        <div className="Project-card">
                <div className="Project-image">
                    <img src={props.screenshot} alt={"Screenshot of "+props.title}></img>
                </div>
                <div className="Project-description">
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>

                </div>
                <div className="Project-action">
                    <a className="project-link" rel="noopener noreferrer" href={props.url} target='_blank'>To Website</a>
                </div>

            </div>

    );
} 