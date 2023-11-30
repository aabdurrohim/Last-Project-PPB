import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";

import ProductCard from "../components/product-card";
import "./Explore.css";

export default function Explore() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setLoading(true);

      try {
        const response = await axios("https://fakestoreapi.com/products");
        setData(response.data);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));

  if (loading) {
    return (
      <div className="loading">
        <BallTriangle height={40} width={40} radius={5} color="black" ariaLabel="ball-triangle-loading" wrapperClass={{}} wrapperStyle="" visible={true} />{" "}
      </div>
    );
  }
  if (error) {
    return <h3>Error...</h3>;
  }

  return (
    <div className="container">
      <div className="search-bar">
        <input className="cari" type="text" placeholder="Search products..." value={searchTerm} onChange={handleSearch} />
      </div>
      <div className="card-list">
        {filteredData.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
