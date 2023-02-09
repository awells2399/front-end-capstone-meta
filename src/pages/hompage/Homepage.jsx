import React from "react";

// Components
import Hero from "../../components/hero/Hero";
import Card from "../../components/card/Card";

import "./Homepage.css";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <section className="weekly-specials">
        <div className="weekly-heading">
          <h1>This weeks specials!</h1>
          <button className="btn">Online Menu</button>
        </div>
        <div className="item-cards">
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </div>
  );
};

export default Homepage;
