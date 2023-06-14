import React, { useState } from "react";

function Joke() {
  const [joke, setJoke] = useState("");
  const fetchJoke = async () => {
    try {
      const response = await fetch("https://v2.jokeapi.dev/joke/Programming?type=single");
      const data = await response.json();
      setJoke(data.joke);
    } catch (error) {
      console.error("Error fetching joke:", error);
    }
  };

  return (
    <>
      <p>Joke Break <span><i class="fa fa-smile-o" aria-hidden="true"></i></span></p>
      <p>{joke}</p>
      <button onClick={fetchJoke}>Generate Joke</button>
    </>
  );
}

export default Joke;
