import React, { useState } from "react";
import ReactDOM from "react-dom";
import { removeSymbol, hasPrefix, appendCountryCode } from "./utils";

import "./styles.css";

function App() {
  const [number, setNumber] = useState("");
  function parseNumber({ target: { value } }) {
    setNumber(value);
  }
  function validateNumber(e) {
    e.preventDefault();
    console.log(appendCountryCode(hasPrefix(removeSymbol(number))));
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <form onSubmit={validateNumber}>
        <input type="text" value={number} onChange={parseNumber} />
        <button type="submit">validate</button>
      </form>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
