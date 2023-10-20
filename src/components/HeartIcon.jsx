import React from 'react'
import heartIcon from "../assets/icons/heart.svg"
import "../index.css"; 

export default function HeartIcon() {
    return <img src={heartIcon} alt="Heart" className="heartIcon" />;
  }