import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Detail.css";

export default function ProductDetail() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios(`https://fakestoreapi.com/products/${id}`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setError("Error fetching product details");
      }

      setLoading(false);
    };

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="load">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <div className="supBig">
        <div className="big">
          <div className="detail">
            <img className="detail-image" src={data.image} alt={data.title} />
            <div className="detail-content">
              <h3 className="detail-name">{data.title}</h3>
              <p className="detail-blur">{data.category}</p>
              <p className="detail-blur">{data.description}</p>
              <p className="detail-price">Rp {data.price}</p>
              {/* Anda mungkin ingin menambahkan elemen HTML atau komponen lainnya di sini */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
