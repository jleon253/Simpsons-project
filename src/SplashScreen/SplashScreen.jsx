import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../landing-page/Loading.js";
import "./SplashScreen.css";
import simpsonsImage from "../Images/simpsons.png";
import familySimpson from "../Images/Los_Simpson.png";

const SplashScreen = () => {
  const navigate = useNavigate();
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCompleted((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          navigate("/Head");
          return 100;
        } else {
          return prev + 1;
        }
      });
    }, 100);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="splash-screen">
      <div className="splash-screen__logo">
        <img
          src={simpsonsImage}
          alt="Logo"
          className="splash-screen__logo-img"
        />
      </div>
      <div className="splash-screen__family">
        <img
          src={familySimpson}
          alt="Family"
          className="splash-screen__family-img"
        />
      </div>

      {completed < 100 && <Loading progress={completed} />}
      <p className="splash-screen__text-content">
        © All rights reserved || Developed by: [Nicolas Gomez Angel]
      </p>
    </div>
  );
};

export default SplashScreen;
