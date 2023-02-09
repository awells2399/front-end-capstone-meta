import React from "react";
import "./Hero.css";
import heroImage from "../../assets/images/restauranfood.jpg";

const hero = () => {
  return (
    <div className="hero">
      <div className="content">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button className="btn reserve-btn">Reserve Table</button>
      </div>

      <div className="hero-img">
        <img src={heroImage} alt="Tasty Food Image" />
      </div>
    </div>
  );
};

export default hero;
