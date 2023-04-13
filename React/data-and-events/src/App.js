import React, { useState } from "react";
import Heading from "./Heading";
import "./App.css";

function App() {
  const [word, setWord] = React.useState("Say");

  function handeClick() {
    setWord("Drink");
  }

  return (
    <div className="App">
      <Heading message={word + "Something"} />
      <button onClick={handeClick}>Click here</button>
    </div>
  );
}

export default App;
