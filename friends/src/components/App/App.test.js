import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

afterAll(cleanup);

describe("App component tests", () => {
  test("should render Home view from root route", () => {
    const app = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(app.asFragment()).toMatchSnapshot();
  });
});
