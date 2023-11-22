import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Circles } from "react-loader-spinner";

import "./IntoScreen.css";

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
      <Circles height="80" width="80" color="black" ariaLabel="circles-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
      <h2>Fake Shop</h2>
      <p>Loading...</p>
    </div>
  );
};

export default IntroScreen;
