import React from "react";
import "./index.css";
import { NavLink } from "react-router-dom";

import { IoSearch } from "react-icons/io5";
import { BsHouse } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";

export default function index() {
  return (
    <footer>
      <div className="footer">
        <div className="containernav">
          <footer>
            <NavLink to="/" className="iconWrapper">
              <BsHouse className="icon" />
              Home
            </NavLink>
            <NavLink to="/explore" className="iconWrapper">
              <IoSearch className="icon" />
              Explore
            </NavLink>
            <NavLink to="/category" className="iconWrapper">
              <BiCategory className="icon" />
              Category
            </NavLink>
            <NavLink to="/about" className="iconWrapper">
              <FaRegUser className="icon" />
              About
            </NavLink>
          </footer>
        </div>
      </div>
    </footer>
  );
}
