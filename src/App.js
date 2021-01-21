import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var [selectedGenre, setSelectedGenre] = useState("pop");

  var musicDB = {
    pop: [
      { name: "LSD-Genius", rating: "5/5" },
      { name: "LSD-Audio", rating: "4.5/5" }
      
    ],
    rock: [
      { name: "Queen-Bohemian Rhapsody", rating: "5/5" },
      { name: "half.alive-still feel.", rating: "4.5/5" }
    ],
    bollywood: [
      { name: "Likhe jo khat tujhe", rating: "5/5" },
      { name: "Tumse milke dil ka", rating: "4.5/5" }
    ]
  };

  var musicGenre = Object.keys(musicDB);

  function genreClickHandler(genre) {
    setSelectedGenre(genre);
  }
  console.log(musicDB[selectedGenre]);
  return (
    <div className="App">
      <h1>🎼My Music</h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite Songs. Select a genre to get started{" "}
      </p>

      <div>
        {musicGenre.map((genre) => (
          <button key={genre} onClick={() => genreClickHandler(genre)}>
            {genre}
          </button>
        ))}
      </div>

      <div style={{ textAlign: "left" }}>
        {musicDB[selectedGenre].map((item) => (
          <ul>
            <li style={{ fontSize: "larger" }}>{item.name}</li>
            <li style={{ fontSize: "smaller" }}>{item.rating}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}
