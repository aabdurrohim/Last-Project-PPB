import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Circles } from "react-loader-spinner";

import "./IntroScreen.css";

//ini splashscreen
const IntroScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Set timeout to simulate loading
    const timeout = setTimeout(() => {
      navigate("/home"); // Redirect to the landing page after a certain time
    }, 2000);

    /* //Clear the timeout when the component unmounts */
    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="intro-screen">
      <Circles height="40" width="40" color="black" ariaLabel="circles-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
      <h3>Fake Shop</h3>
      <p>Loading...</p>
    </div>
  );
};

export default IntroScreen;
