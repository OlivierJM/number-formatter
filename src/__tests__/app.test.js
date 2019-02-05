import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import { App, Input } from "../";

afterEach(cleanup);

const onChange = jest.fn();
const value = "09723423423";
const app = render(<App />);
const inputText = render(<Input onChange={onChange} value={value} />);
const input = app.getByLabelText("app");
const getInput = inputText.getAllByLabelText("number-input");

describe("The app component", () => {
  it("should exist", () => {
    expect(app).toBeTruthy();
  });
  it("The input should take in values ", () => {
    fireEvent.change(input, {
      target: { value: "pls work" }
    });
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
