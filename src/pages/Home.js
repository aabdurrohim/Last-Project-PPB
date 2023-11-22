import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import ProductCard from "../components/product-card";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BallTriangle } from "react-loader-spinner";

import "./Home.css";
export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setLoading(true);

      try {
        const response = await axios("https://fakestoreapi.com/products?limit=8");
        setData(response.data);
        console.log(response);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

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
      {/* <h2>SELAMAT BERBELANJA</h2> */}
      <div className="card-list">
        {data.map((item) => (
          <ProductCard item={item} key={item._id} />
        ))}
      </div>
      <div className="button">
        <NavLink to="/explore" className="all">
          Explore More Products
          <IoIosArrowRoundForward className="icon-home" />
        </NavLink>
      </div>
    </div>
  );
}
