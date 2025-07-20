import { screen, render } from "@testing-library/react";
import GetByQueries from "../../src/components/GetByQueries";
import React from "react";
import "@testing-library/jest-dom";

describe("GetByQueries", () => {
  it("should find ancher tag with specific href", () => {
    render(<GetByQueries />);
    const link = screen.getByRole("link", { name: /Home/i });
    expect(link).toHaveProperty("href", "https://home/");
  });
  it("get to inputfield by placeholder", () => {
    render(<GetByQueries />);
    const input = screen.getByRole("textbox", { name: /Name/i });
    expect(input).toBeInTheDocument();
    expect((input as HTMLInputElement).value).toBe("default value");
  });
  test("find custome div element by data-testid", () => {
    render(<GetByQueries />);
    expect(screen.getByTestId("div")).toBeInTheDocument();
  });
  test("select button by getByText", () => {
    render(<GetByQueries />);
    expect(screen.getByText(/test/i)).toBeInTheDocument();
  });
});
