import React from 'react'
import heartIcon from "../src/assets/icons/heart.svg";
import "./index.css"; // Import the CSS file

export default function HeartIcon() {
    return <img src={heartIcon} alt="Heart" className="heartIcon" />;
  }
