import React from "react";
import { render, screen } from "@testing-library/react";
import HelloWorld from "../../src/components/HelloWorld";
describe("HelloWorld Component", () => {
  it("should be render hello world components ", () => {
    render(<HelloWorld />);
    expect(screen.getByText("Hello World 3")).toBeInTheDocument();
  });
});
