import React from "react";
import "./About.css";
import { FaGithub } from "react-icons/fa6";
import { FaUniversity } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

export default function About() {
  return (
    <div className="big">
      <div className="about">
        <div className="main-profile">
          <div className="profile">
            <img className="about-image" src="me.jpg" alt="plant" />
            <h5 className="nama">Ab</h5>
            <div className="about-profile">
              <div className="github">
                <a href="https://github.com/aabdurrohim" target="_blank">
                  <FaGithub />
                </a>
              </div>
              <div className="university">
                <a href="https://www.undip.ac.id/" target="_blank">
                  <FaUniversity />
                </a>
              </div>
              <div className="location">
                <a href="https://maps.app.goo.gl/JdBeumN658UxVkAC7" target="_blank">
                  <FaLocationDot />
                </a>
              </div>
              <div className="instagram">
                <a href="https://www.instagram.com/ficrabdr/" target="_blank">
                  <AiFillInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="about-content">
          <h3 className="about-title">Fake Store</h3>
          <p className="about-desc">
            Fake Store is a fictitious website designed to showcase a product catalog, demonstrating the integration and development of e-commerce applications. While purely a simulation, Fake Store provides users with an online shopping
            experience, complete with product navigation and detailed pages. The website serves as a valuable tool for developers looking to test and understand the implementation of e-commerce features within a development environment.
          </p>
        </div>
      </div>
    </div>
  );
}
