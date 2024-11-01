import React from "react";
import simpsonImage from "../Images/simpsons.png";
import FormInput from "./FormInput";
import "./Head.css";

const Head = () => {
  return (
    <>
      <header>
        <div className="container-header">
          <div className="logos">
            <img src={simpsonImage} alt="Logos" />
          </div>
        </div>
      </header>
      <FormInput />
    </>
  );
};

export default Head;
