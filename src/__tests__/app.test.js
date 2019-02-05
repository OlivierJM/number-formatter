import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import { App } from "../";

afterEach(cleanup);

const app = render(<App />);
const input = app.getByLabelText("number-input");

describe("The app component", () => {
  it("should exist", () => {
    expect(app).toBeTruthy();
  });
  it("The input should take in values ", () => {
    //   expect()
  });
});
