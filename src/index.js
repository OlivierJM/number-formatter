import React, { useState } from "react";
import ReactDOM from "react-dom";
import { removeSymbol, hasPrefix, appendCountryCode } from "./utils";

import "./styles.css";

function App() {
  const [number, setNumber] = useState("");
  const [formattedNumber, setFormattedNumber] = useState(0);
  function parseNumber({ target: { value } }) {
    setNumber(value);
  }
  function validateNumber(e) {
    e.preventDefault();
    setFormattedNumber(
      appendCountryCode(hasPrefix(removeSymbol(number)), "260")
    );
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <form onSubmit={validateNumber}>
        <input type="text" value={number} onChange={parseNumber} />
        <button type="submit">validate</button>
      </form>
      <p>{formattedNumber}</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
