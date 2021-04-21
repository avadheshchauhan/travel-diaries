import React, { useState } from "react";
import "./styles.css";
import { venueDataCollection } from "./venueDB";

let venueKey = Object.keys(venueDataCollection);

export default function App() {
  const [selectGenre, setGenre] = useState("Adventure");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1 style={{ textAlign: "left" }}>
        {" "}
        <span>🏕</span>️<span>🏛</span>️ Travel Diaries <span>🏛</span>️
        <span>🏕</span>️
      </h1>
      <p style={{ fontSize: "smaller", textAlign: "left" }}>
        {" "}
        👇👇 Checkout some popular venues in India. Select a type to get started
        👇👇
      </p>

      <div style={{ textAlign: "left" }}>
        {venueKey.map((genre) => (
          <button
            key={genre}
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "grey",
              border: "1px solid black",
              borderRadius: "0.5rem",
              padding: "0.5rem 0.5rem",
              margin: "1rem 0.3rem",
              fontWeight: "bold",
              color: "wheat",
              outline: "none"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {venueDataCollection[selectGenre].map((parameter) => (
            <li
              key={parameter}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D2DB",
                width: "93%",
                margin: "1rem 0rem",
                borderRadius: "0.8rem"
              }}
            >
              <div style={{ fontSize: "larger" }}>{parameter.place}</div>
              <hr />
              <div style={{ fontSize: "smaller" }}>{parameter.famous}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
