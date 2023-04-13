import React, { useState } from "react";
import Heading from "./Heading";
import "./App.css";

function App() {
  const [word, setWord] = React.useState("Say");
  return (
    <div className="App">
      <Heading message={word + "Something"} />
    </div>
  );
}

export default App;
