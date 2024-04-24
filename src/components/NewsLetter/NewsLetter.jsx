import React from "react";
import './NewsLetter.css'
const NewsLetter = () => {
    return(
        <div className="newsletter">
           <h1 style={{color:'#fff'}}>Get Exclusive Offers on your Email</h1>
           <p style={{color:'#fff'}}>Subscribe to our news lettter and stay updated</p> 
           <div>
            <input type="email" placeholder='Your Email id'/>
            <button>Subscribe</button>
           </div>

        </div>
    )
}

export default NewsLetter