import React, { useState } from "react";
import ReactDOM from "react-dom";
import { formatNumber } from "./utils";

import "./styles.css";

export function App() {
  const [number, setNumber] = useState("");
  const [formattedNumber, setFormattedNumber] = useState(null);
  function parseNumber({ target: { value } }) {
    setNumber(value);
  }
  function validateNumber(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormattedNumber(formatNumber(number)("260"));
  }
  return (
    <div className="App" aria-label="app">
      <h1>Format Phone Number </h1>
      <form onSubmit={validateNumber}>
        <Input number={number} onChange={parseNumber} />
        <button type="submit">format</button>
      </form>
      {formattedNumber && <p>Formatted: {formattedNumber}</p>}
    </div>
  );
}

interface inputProps {
  number: string;
  onChange: any;
}
const Input: React.SFC<inputProps> = ({ number = "", onChange }) => {
  return (
    <div>
      <label htmlFor="number">Number</label>
      <input
        type="text"
        value={number}
        onChange={onChange}
        id="number"
        aria-label="number-input"
        placeholder="put in a number"
      />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
