import React from "react";
import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Virus and Malware Removal: Our expert technicians can quickly diagnose
          and remove viruses, spyware, and other malicious software to keep your
          computer safe and secure. Hardware Repair and Upgrades: Whether your
          computer needs a new hard drive, more RAM, or a replacement graphics
          card, we can handle all types of hardware repairs and upgrades.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
