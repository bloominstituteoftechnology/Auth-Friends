import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { LoginForm } from "./LoginForm";

afterAll(cleanup);

describe("App component tests", () => {
  test("should render Home view from root route", () => {
    const loginForm = render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );

    expect(loginForm.asFragment()).toMatchSnapshot();
  });
});
