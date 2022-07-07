import React from "react";
import cars from './cars.png';
import './welcome-page.css';

export default function WelcomePage (){
    return (
        <div className="Welcome">
            <img src={cars} />
        </div>
    )
}