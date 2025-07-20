import { screen, render } from "@testing-library/react";
import TestQueryBy from "../../src/components/TestQueryBy";
import React from "react";
import "@testing-library/jest-dom";

describe("TestQueryBy", () => {
  test("select button by queryByRole", () => {
    render(<TestQueryBy />);
    const button = screen.queryByRole("button", { name: /click/i });
    expect(button).toBeInTheDocument();
  });
  test("query to h1 by queryByTest", () => {
    render(<TestQueryBy />);
    expect(screen.queryByText("Hello")).toBeInTheDocument();
  });
  it("should be exist name input", () => {
    render(<TestQueryBy />);
    expect(screen.queryByPlaceholderText(/name/i)).toBeInTheDocument();
  });

  it("should be exist div by data-testId ", () => {
    render(<TestQueryBy />);
    expect(screen.queryByTestId("div")).toBeInTheDocument();
  });
});
