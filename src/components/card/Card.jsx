import React from "react";
import "./Card.css";
import { MdDeliveryDining } from "react-icons/md";
import sampleimg from "../../assets/images/greek_salad.jpg";

const Card = () => {
  return (
    <div className="card">
      <img src={sampleimg} alt="Special Item" />
      {/* <div className="card-container"> */}
      <div className="card-heading">
        <h3>Greek Salad</h3>
        <h3 className="price">$12.99</h3>
      </div>

      <div className="card-desc">
        The Famous greek salad of crispy lettuce, peppers, olives and our
        Chicago style feta cheese, garnished with crunchy garlic and rosemary
        croutons.
      </div>

      <div className="card-link">
        <h4>
          Order a delivery <MdDeliveryDining />
        </h4>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Card;
