import React from "react";
import "./Offers.css";
import imgs1 from "../Assets/1.jpg";
const Offers = () => {
  return (
    <div>
      <div >
        <h1>Exclusive Offers For You ONLy ON BEST SELLERS PRODUCTS</h1>
      </div>
      <div className="offers-right" style={{ margin: "20px" }}>
        <img src={imgs1} alt="imgs1" />
      </div>
    </div>
  );
};

export default Offers;
