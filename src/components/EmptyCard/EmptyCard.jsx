import React from "react";
import { Link } from "react-router-dom";
import "./EmptyCard.scss";

export const EmptyCard = () => {
  return (
    <div className="container">
      <div className="empty__cart">
        <h1>Your cart is empty</h1>

        <Link to="/catalog" className="btn">
          fill it
        </Link>
      </div>
    </div>
  );
};
