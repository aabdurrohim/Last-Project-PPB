import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemCard from "../components/item-card";
import "./Category.css";
export default function Apparel() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("electronics");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetching categories from the API
    const fetchData = async () => {
      setLoading(true);
      try {
        const results = await axios("https://fakestoreapi.com/products/categories");
        setCategories(results.data);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  if (loading) {
    return (
      <div className="loading1">
        <h3>Loading...</h3>
      </div>
    );
  }

  return (
    <div className="apparel-section">
      <div className="category-list">
        {categories.map((category) => (
          <button className={`category-title ${selectedCategory === category ? "selected" : ""}`} key={category} onClick={() => handleCategoryChange(category)}>
            {category}
          </button>
        ))}
      </div>
      {/* Display apparel cards based on the selected category */}
      {selectedCategory && <ItemCard selectedCategory={selectedCategory} />}
    </div>
  );
}
