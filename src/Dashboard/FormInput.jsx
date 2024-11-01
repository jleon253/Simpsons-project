import React, { useState, useEffect } from "react";
import "./FormImput.css";
import axios from "axios";
import Homero from "../Images/d'oh.png";

const FormInput = () => {
  const [quotes, setQuotes] = useState([]);
  const [characterName, setCharacterName] = useState("");
  const [count, setCount] = useState("");
  const [characterNotFound, setCharacterNotFound] = useState(false);

  useEffect(() => {
    setCharacterNotFound(false);
  }, [characterName]);

  const fetchData = () => {
    let url = "https://thesimpsonsquoteapi.glitch.me/quotes";

    if (characterName) {
      url += `?character=${characterName}`;
    }

    if (count) {
      url += `&count=${count}`;
    }

    axios
      .get(url)
      .then((response) => {
        if (response.data.length === 0) {
          setCharacterNotFound(true);
        } else {
          setQuotes(response.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleCharacterNameChange = (event) => {
    const value = event.target.value;
    // Solo permitir letras y espacios
    const sanitizedValue = value.replace(/[^A-Za-z\s]/g, "");
    setCharacterName(sanitizedValue);
  };

  const handleCountChange = (event) => {
    const value = event.target.value;
    // Solo permitir números enteros positivos
    const sanitizedValue = value.replace(/[^0-9]/g, "");
    setCount(sanitizedValue);
  };
  useEffect(() => {
    fetchData("");
  }, []);

  return (
    <div>
      <div className="Indications">
        <p>Search for funny quotes from your favorite Simpsons character</p>
      </div>

      <div className="search--base">
        <div className="search__container">
          <label className="search__label" htmlFor="inputId">
            Character name:{" "}
          </label>
          <input
            className="search__input"
            type="text"
            id="inputId"
            value={characterName}
            onChange={handleCharacterNameChange}
            pattern="[A-Za-z\s]*"
            maxLength="30"
          />
        </div>
        <div className="search__container">
          <label className="search__label-count" htmlFor="countId">
            Count:{" "}
          </label>
          <input
            className="search__input-count"
            type="text"
            id="countId"
            value={count}
            onChange={handleCountChange}
            pattern="[0-9]*"
            maxLength="3"
          />
        </div>
        <button className="button-search" onClick={fetchData}>
          <svg
            className="search__icon"
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="#000000"
          >
            <path d="M765-144 526-383q-30 22-65.79 34.5-35.79 12.5-76.18 12.5Q284-336 214-406t-70-170q0-100 70-170t170-70q100 0 170 70t70 170.03q0 40.39-12.5 76.18Q599-464 577-434l239 239-51 51ZM384-408q70 0 119-49t49-119q0-70-49-119t-119-49q-70 0-119 49t-49 119q0 70 49 119t119 49Z" />
          </svg>{" "}
          Search
        </button>
      </div>
      <div className="line"></div>
      {characterNotFound ? (
        <div>
          <h2 className="number">404</h2>
          <p className="found">not found!</p>
          <img src={Homero} alt="D'oh" className="Logo-homero" />
        </div>
      ) : (
        <div className="quotes-container">
          {quotes.map((quote, index) => (
            <div key={index} className="quote-container">
              <div className="quote-content">
                <p className="frase">"{quote.quote}"</p>
                <p className="personaje">{quote.character}</p>
              </div>
              <img src={quote.image} alt={quote.character} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FormInput;
