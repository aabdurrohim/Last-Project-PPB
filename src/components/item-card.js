import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./product-card.css";

export default function ApparelCard(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the new API based on the category
    const fetchData = async () => {
      setError(false);
      setLoading(true);

      try {
        const results = await axios(`https://fakestoreapi.com/products/category/${props.selectedCategory.toLowerCase()}`);
        setData(results.data);
        console.log(results);
      } catch (err) {
        setError(true);
        setTimeout(() => setError(false), 4000);
      }
      setLoading(false);
    };
    fetchData();
  }, [props.selectedCategory]);

  if (loading) {
    return <h3>Loading...</h3>;
  }
  if (error) {
    return <h3>Error...</h3>;
  }

  return (
    <div className="card-list-category">
      {data.length > 0 ? (
        data.map((item, id) => (
          <Link to={`/item/${item.id}`} key={id}>
            <div className="card">
              <img className="card-image" src={item.image} alt={item.title} />
              <div className="card-content">
                <p className="card-title">{item.title}</p>
                <p className="card-price">Rp {item.price}</p>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <h3>Not Found</h3>
      )}
    </div>
  );
}
