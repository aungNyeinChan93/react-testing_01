import { screen, render } from "@testing-library/react";
import TestFindBy from "../../src/components/TestFindBy";
import React from "react";

describe("TestFindBy", () => {
  test("find button by findByText", async () => {
    render(<TestFindBy />);
    expect(await screen.findByText(/Click me/i)).toBeInTheDocument();
  });

  test("find inputs by findAllBy", async () => {
    render(<TestFindBy />);
    const inputs = await screen.findAllByPlaceholderText(/Enter/i);
    expect(inputs).toHaveLength(2);
    inputs.forEach((input) => {
      expect(input).toBeInTheDocument();
    });
  });
});
