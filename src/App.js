import "./App.css";
import React from "react";
import { useState } from "react";
import ValueDisplay from "./components/valueDisplay";

function App() {
  const [inputText, setInputText] = useState("");
  function handleText(inputText) {
    setInputText(inputText || "");
  }

  return (
    <div className="App">
      <h1>Current and Pravious Value</h1>
      <input
        onChange={(event) => handleText(event.target.value)}
        value={inputText}
      />
      <ValueDisplay value={inputText} />
    </div>
  );
}

export default App;
