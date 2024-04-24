import React from "react";
import './Hero.css'
import imgs2 from '../Assets/2.jpg';

const Hero = () => {
    return(
        <div className="hero"> 
        <div className="hero-left">
            <h2>New Arrivals</h2>
        <div>
            <div className="hand-hand-icon">

            </div>
        </div>
            <p>collections</p>
            <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
            <div>Latest Collection</div>
        </div>
        <div className="hero-right">
            <img src={imgs2} alt=""/>
        </div>
        </div>
    )
}

export default Hero