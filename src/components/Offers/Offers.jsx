import React from "react";
import './Offers.css'
import imgs1 from '../Assets/1.jpg'
const Offers = () => {
    return(
        <div className="offer">
            <div className="offers-left>">
                <h1>Exclusive</h1>
                <h1>Offers For You</h1>
                <p>ONLU ON BEST SELLERS PRODUCTS</p>
                <button>cHECK Now</button>
            </div>
            <div className="offers-right">
                <img src={imgs1} alt="imgs1"/>
            </div>
        </div>
    )
}

export default Offers