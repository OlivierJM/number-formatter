import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import { App, Input } from "../";

const onChange = jest.fn();
const value = "09723423423";
const app = render(<App />);
const input = app.getByLabelText("app");
const inputText = render(<Input parseNumber={onChange} number={value} />);
const getInput = inputText.getByLabelText("number-input");

afterEach(cleanup);

describe("The app component", () => {
  it("the app should exist", () => {
    expect(app).toBeTruthy();
  });
  it("the input component should exist", () => {
    expect(inputText).toBeTruthy();
  });

  it("handleChange function called", () => {
    const { getByLabelText } = inputText;
    const input = getByLabelText("Number");
    expect(input.value).toBe("");
    fireEvent.change(input, { target: { value: "23" } });
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
