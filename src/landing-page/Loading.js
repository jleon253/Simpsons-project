import React from "react";
import "../SplashScreen/SplashScreen.css";

const Loading = ({ progress }) => {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default Loading;
