import React from "react";
import { Link } from "react-router-dom";
import "./product-card.css";

export default function ProductCard({ item }) {
  return (
    <Link to={`/item/${item.id}`}>
      <div className="card">
        <img className="card-image" src={item.image} alt={item.title} />
        <div className="card-content">
          <p className="card-title">{item.title}</p>
          <p className="card-price">Rp {item.price}</p>
          <p className="card-category">{item.rating.rate}</p>
        </div>
      </div>
    </Link>
  );
}
